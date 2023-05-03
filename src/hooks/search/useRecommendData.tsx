import { useState, useCallback } from "react";
import { RecommendDataType } from "../../types/search";

const useRecommendData = () => {
  const [recommendData, setRecommendData] = useState<RecommendDataType[]>([]);

  const updateDataRender = useCallback(
    (updated: RecommendDataType[]) => {
      if (updated.length) {
        setRecommendData(updated);
      } else {
        recommendData.length && setRecommendData(updated);
      }
    },
    [recommendData]
  );

  return {
    recommendData,
    updateDataRender,
  };
};

export default useRecommendData;
