import ListCont from "./listCont.style";
import useRenderList from "../../../hooks/search/useRenderLIst";
import { RecommendListProps } from "../../../types/search";

const RecommendedList = (props: RecommendListProps) => {
  const items = useRenderList(props);

  return (
    <>
      <h3>추천 검색어</h3>
      <ListCont>{items}</ListCont>
    </>
  );
};

export default RecommendedList;
