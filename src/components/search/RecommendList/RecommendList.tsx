import ListCont from "./listCont.style";
import useRenderList from "../../../hooks/search/useRenderLIst";
import { RecommendListProps } from "../../../types/search";

const RecommendedList = (props: RecommendListProps) => {
  const items = useRenderList(props);

  return <ListCont>{items}</ListCont>;
};

export default RecommendedList;
