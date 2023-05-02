import SearchBar from "./SearchBar";
import SearchResCont from "./searchResCont.style";
import RecommendedList from "./RecommendList/RecommendList";
import useToggle from "../../hooks/search/useToggle";
import useSearchBarRef from "../../hooks/search/useSearchBarRef";

const SearchSuggestions = () => {
  const { isListVisible, onInpFocus, onInpBlur, closeList } = useToggle();
  const { inpRef, onKeywordClick } = useSearchBarRef(closeList);

  return (
    <>
      <SearchBar
        isInpFocused={isListVisible}
        onInpFocus={onInpFocus}
        onInpBlur={onInpBlur}
        ref={inpRef}
      />
      {isListVisible && (
        <SearchResCont>
          <RecommendedList onClick={onKeywordClick} />
        </SearchResCont>
      )}
    </>
  );
};

export default SearchSuggestions;
