import React, { Ref } from "react";
import SearchForm from "./searchForm.style";
import { SearchBarProps } from "../../../types/search";

const SearchBar = React.forwardRef((props: SearchBarProps, ref: Ref<HTMLInputElement>) => {
  const { isInpFocused, onInpFocus, onInpBlur } = props;

  return (
    <SearchForm>
      <label htmlFor="searchInp" className="ir">
        질환명 검색
      </label>
      <input
        id="searchInp"
        type="text"
        placeholder={isInpFocused ? "" : "질환명을 입력해 주세요."}
        onFocus={onInpFocus}
        onBlur={onInpBlur}
        ref={ref}
      />
      {isInpFocused && <button type="button">인풋 값 삭제</button>}
      <button type="submit">검색</button>
    </SearchForm>
  );
});

export default SearchBar;
