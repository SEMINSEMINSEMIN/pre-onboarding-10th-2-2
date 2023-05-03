import SectionCont from "./searchSectionCont.style";
import SearchTitle from "./searchTitle.style";
import SearchSuggestions from "./SearchSuggestions";

const Search = () => {
  return (
    <SectionCont>
      <SearchTitle>
        국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기
      </SearchTitle>
      <SearchSuggestions />
    </SectionCont>
  );
};

export default Search;
