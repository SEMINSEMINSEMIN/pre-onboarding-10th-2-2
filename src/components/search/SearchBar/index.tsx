import React, { Ref } from "react";
import SearchForm from "./searchForm.style";
import useSearchInp from "../../../hooks/search/useSearchInp";
import { SearchBarProps } from "../../../types/search";

const SearchBar = React.forwardRef((props: SearchBarProps, ref: Ref<HTMLInputElement>) => {
  const { manageToggle, updateData, onInpKeyDown } = props;
  const { debouncedOnInpChange } = useSearchInp(updateData);

  return (
    <SearchForm>
      <label htmlFor="searchInp" className="ir">
        질환명 검색
      </label>
      <input
        id="searchInp"
        type="text"
        placeholder="질환명을 입력해 주세요."
        onFocus={() => manageToggle(true)}
        onKeyDown={onInpKeyDown}
        onChange={(event: React.FormEvent<HTMLInputElement>) => debouncedOnInpChange(event)}
        ref={ref}
      />
      <button
        type="submit"
        className="hide-click"
        onFocus={() => manageToggle(false)}
        onClick={(e: React.FormEvent) => e.preventDefault()}
      >
        검색
      </button>
    </SearchForm>
  );
});

export default SearchBar;
