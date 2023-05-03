import styled from "styled-components";
import searchIcon from "../../../assets/icon-search.png";

const SearchForm = styled.form`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 490px;
  margin: 0 auto;
  border-radius: 42px;
  background-color: white;

  input {
    width: 100%;
    height: 100%;
    padding: 20px 10px 20px 45px;
    border-top-left-radius: 42px;
    border-bottom-left-radius: 42px;
    border: 2px solid transparent;
  }

  &::before {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    margin-right: 15px;
    background: no-repeat;
    background-image: url(${searchIcon});
    background-size: cover;
  }

  input:focus {
    outline: none;
    border: 2px solid var(--color-search-searchBtn);
  }

  input::placeholder {
    color: var(--color-search-placeholder);
  }

  button {
    flex-basis: 20%;
    border-top-right-radius: 42px;
    border-bottom-right-radius: 42px;
    font-weight: 600;
    color: white;
    background-color: var(--color-search-searchBtn);
  }

  @media screen and (max-width: 1039px) {
    max-width: 320px;

    input {
      padding: 12px 20px;
    }
  }
`;

export default SearchForm;
