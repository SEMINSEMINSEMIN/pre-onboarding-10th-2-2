import styled from "styled-components";

const SearchResCont = styled.div`
  max-width: 490px;
  margin: 5px auto 0;
  padding: 20px 0;
  border-radius: 10px;
  text-align: left;
  font-size: 1.4rem;
  background-color: white;

  h3 {
    margin-left: 15px;
    margin-bottom: 10px;
    font-size: 1rem;
  }

  @media screen and (max-width: 1039px) {
    max-width: 320px;
  }

  a:focus,
  a:hover {
    background-color: var(--color-search-hover);
  }

  a:focus {
    outline: none;
  }
`;

export default SearchResCont;
