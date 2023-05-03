const getCacheTimer = (time: number) => {
  const now = new Date().getTime();
  let cacheTimer = sessionStorage.getItem("cacheTimer") || 0;

  if (+cacheTimer < now + time) {
    cacheTimer = now + time;
    sessionStorage.setItem("cacheTimer", cacheTimer + "");
  }

  return cacheTimer;
};

const requestWithCache = async (
  key: string,
  time: number,
  request: (...args: any[]) => Promise<any[]>
) => {
  const now = new Date().getTime();
  let cachedData = sessionStorage.getItem(key);

  if (!cachedData || JSON.parse(cachedData).pop().cacheTimer < now) {
    try {
      const res = await request(key);
      const cacheTimer = getCacheTimer(time);
      res.push({ cacheTimer });
      cachedData = JSON.stringify(res);
      sessionStorage.setItem(key, cachedData);
    } catch (error) {
      console.warn(error);
      throw error;
    }
  }

  return JSON.parse(cachedData);
};

export default requestWithCache;
