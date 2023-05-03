import { useState, useCallback } from "react";
import { RecommendDataType } from "../../types/search";

const useRecommendData = () => {
  const [recommendData, setRecommendData] = useState<RecommendDataType[]>([]);

  const updateDataRender = useCallback((updated: RecommendDataType[]) => {
    setRecommendData(updated);
  }, []);

  return {
    recommendData,
    updateDataRender,
  };
};

export default useRecommendData;
