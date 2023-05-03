import customAxios from "../lib/customAxios";

const getRecommendation = async (name: string) => {
  console.info("calling api");
  const res = await customAxios.get(`/api/v1/search-conditions/?name=${name}`);
  return res.data;
};

export default getRecommendation;
