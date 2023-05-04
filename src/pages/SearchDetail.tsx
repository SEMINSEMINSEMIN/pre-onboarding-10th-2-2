import { useParams } from "react-router-dom";

const SearchDetail = () => {
  const params = useParams();
  return (
    <>
      <h1>Search Keyword</h1>
      <p>{params.id}</p>
    </>
  );
};

export default SearchDetail;
