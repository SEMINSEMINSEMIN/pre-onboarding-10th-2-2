import React from "react";
import debounce from "../../utils/debounce";
import requestWithCache from "../../utils/cacheHandle";
import getRecommendation from "../../api/SearchApi";
import { SEARCH_CACHE_TIME } from "../../constants";
import { SearchResType, RecommendDataType } from "../../types/search";

const useSearchInp = (updateData: (updated: RecommendDataType[]) => void) => {
  const onInpChange = async (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;

    if (target.value.trim() === "") {
      updateData([]);
      return;
    }

    try {
      const res = await requestWithCache(target.value, SEARCH_CACHE_TIME, getRecommendation);
      res.pop();

      const sliced = res.slice(0, 7);

      const resWithRefs = sliced.map((e: SearchResType) => {
        return { ...e, ref: React.createRef<HTMLAnchorElement>() };
      });
      updateData(resWithRefs);
    } catch (error) {
      window.alert(error);
    }
  };

  const debouncedOnInpChange = debounce(onInpChange, 500);

  return { debouncedOnInpChange };
};

export default useSearchInp;
