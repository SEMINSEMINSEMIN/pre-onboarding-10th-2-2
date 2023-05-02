import { Link } from "react-router-dom";
import ItemWrapper from "./ItemWrapper.style";
import { RecommendedItemProps } from "../../../types/search";
import React from "react";

const RecommendedItem = (props: RecommendedItemProps) => {
  return (
    <ItemWrapper>
      <Link
        className="search-result"
        to={props.path}
        onClick={(event: React.MouseEvent) => props.onClick(event, props.path)}
      >
        {props.keyword}
      </Link>
    </ItemWrapper>
  );
};

export default RecommendedItem;
