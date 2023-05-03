import styled from "styled-components";
import searchIcon from "../../../assets/icon-search.png";

const ItemWrapper = styled.li`
  a {
    display: flex;
    flex-grow: 1;
    padding: 8px 15px;
  }

  a::before {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    margin-right: 15px;
    background: no-repeat;
    background-image: url(${searchIcon});
    background-size: cover;
  }

  a:focus,
  a:hover {
    background-color: var(--color-search-hover);
  }

  a:focus {
    outline: none;
  }
`;

export default ItemWrapper;
