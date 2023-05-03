import customAxios from "../lib/customAxios";

const getRecommendation = async (name: string) => {
  const PROXY = window.location.hostname === "localhost" ? "" : "proxy";
  const res = await customAxios.get(`${PROXY}/api/v1/search-conditions/?name=${name}`);
  return res.data;
};

export default getRecommendation;
