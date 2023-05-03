import React from "react";
import debounce from "../../utils/debounce";
import getRecommendation from "../../api/SearchApi";
import { SearchResType, RecommendDataType } from "../../types/search";

const useSearchInp = (updateData: (updated: RecommendDataType[]) => void) => {
  const onInpChange = async (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    try {
      if (target.value.trim() === "") {
        updateData([]);
        return;
      }

      const res = await getRecommendation(target.value);

      const resWithRefs = res.map((e: SearchResType) => {
        return { ...e, ref: React.createRef<HTMLAnchorElement>() };
      });
      updateData(resWithRefs);
    } catch (error) {
      console.warn(error);
    }
  };

  const debouncedOnInpChange = debounce(onInpChange, 500);

  return { debouncedOnInpChange };
};

export default useSearchInp;
