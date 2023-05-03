import React from "react";
import RecommendedItem from "../../components/search/RecommendedItem";
import { RecommendListProps } from "../../types/search";

const useRenderList = ({ onClick, data, keyDownFunc }: RecommendListProps) => {
  const items = data.map(item => (
    <RecommendedItem
      key={item.id}
      path={`${item.id}`}
      keyword={item.name}
      onClick={onClick}
      keyDownFunc={(event: React.KeyboardEvent<HTMLAnchorElement>) => keyDownFunc(event, data)}
      ref={item.ref}
    />
  ));

  return items;
};

export default useRenderList;
