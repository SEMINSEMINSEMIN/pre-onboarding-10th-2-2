import React, { Ref } from "react";
import { Link } from "react-router-dom";
import ItemWrapper from "./ItemWrapper.style";
import { RecommendedItemProps } from "../../../types/search";

const RecommendedItem = React.forwardRef(
  (props: RecommendedItemProps, ref: Ref<HTMLAnchorElement>) => {
    return (
      <ItemWrapper>
        <Link
          ref={ref}
          className="search-result"
          to={props.path}
          onClick={(event: React.MouseEvent) => props.onClick(event, props.path)}
          onKeyDown={props.keyDownFunc}
        >
          {props.keyword}
        </Link>
      </ItemWrapper>
    );
  }
);

export default RecommendedItem;
