import ListCont from "./listCont.style";
import RecommendedItem from "../RecommendedItem";
import { RecommendListProps } from "../../../types/search";

const RecommendedList = (props: RecommendListProps) => {
  return (
    <>
      <h3>추천 검색어</h3>
      <ListCont>
        <RecommendedItem keyword="1" path="1" onClick={props.onClick} />
        <RecommendedItem keyword="2" path="2" onClick={props.onClick} />
        <RecommendedItem keyword="3" path="3" onClick={props.onClick} />
        <RecommendedItem keyword="4" path="4" onClick={props.onClick} />
      </ListCont>
    </>
  );
};

export default RecommendedList;
