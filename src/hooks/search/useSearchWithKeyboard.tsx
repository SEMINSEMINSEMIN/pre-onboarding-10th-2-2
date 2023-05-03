import React from "react";
import { RecommendDataType } from "../../types/search/index";

const useSearchWithKeyboard = (
  closeList: () => void,
  searchInpRef: React.RefObject<HTMLInputElement>
) => {
  const moveToSearchInput = () => {
    searchInpRef.current?.focus();
    closeList();
  };

  const onArrowDown = (index: number, data: RecommendDataType[]) => {
    const isLastListItem = index === data.length - 1;
    isLastListItem ? data[0].ref.current?.focus() : data[index + 1].ref.current?.focus();
  };

  const onArrowUp = (index: number, data: RecommendDataType[]) => {
    const isFirstListItem = index === 0;
    isFirstListItem ? moveToSearchInput() : data[index - 1].ref.current?.focus();
  };

  const searchWithKeyboard = (
    event: React.KeyboardEvent<HTMLAnchorElement>,
    data: RecommendDataType[]
  ) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].ref.current === event.target) {
        event.code === "ArrowDown" && onArrowDown(i, data);
        event.code === "ArrowUp" && onArrowUp(i, data);
        return;
      }
    }
  };

  return searchWithKeyboard;
};

export default useSearchWithKeyboard;
