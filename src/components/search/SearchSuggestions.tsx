import React from "react";
import SectionCont from "./searchSectionCont.style";
import SearchTitle from "./searchTitle.style";
import SearchBar from "./SearchBar";
import SearchResCont from "./searchArea.style";
import RecommendedList from "./RecommendList/RecommendList";
import NoSearchResWrapper from "./noSearchRes.style";
import useToggle from "../../hooks/search/useToggle";
import useSearchBarRef from "../../hooks/search/useSearchBarRef";
import useRecommendData from "../../hooks/search/useRecommendData";
import useSearchWithKeyboard from "../../hooks/search/useSearchWithKeyboard";

const SearchSuggestions = () => {
  const { isListVisible, setIsListVisible, closeList } = useToggle();
  const { inpRef, onKeywordClick } = useSearchBarRef(setIsListVisible);
  const { recommendData, updateDataRender } = useRecommendData();
  const searchWithKeyboard = useSearchWithKeyboard(inpRef);

  let SearchRes = <NoSearchResWrapper>검색어 없음</NoSearchResWrapper>;
  if (recommendData.length)
    SearchRes = (
      <RecommendedList
        onClick={onKeywordClick}
        data={recommendData}
        keyDownFunc={searchWithKeyboard}
      />
    );

  return (
    <SectionCont className="hide-click" onClick={closeList}>
      <SearchTitle>
        국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기
      </SearchTitle>
      <SearchBar
        manageToggle={setIsListVisible}
        updateData={updateDataRender}
        onInpKeyDown={(event: React.KeyboardEvent) => {
          if (event.nativeEvent.isComposing) return;
          if (event.code === "ArrowDown") {
            recommendData[0]?.ref.current?.focus();
          }
        }}
        ref={inpRef}
      />
      {isListVisible && (
        <SearchResCont>
          <h3>추천 검색어</h3>
          {SearchRes}
        </SearchResCont>
      )}
    </SectionCont>
  );
};

export default SearchSuggestions;
