import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const useSearchBarRef = (showList: React.Dispatch<React.SetStateAction<boolean>>) => {
  const inpRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const onKeywordClick = (event: React.MouseEvent, path: string) => {
    event.preventDefault();

    const target = event.target as HTMLAnchorElement;

    if (inpRef.current && target.textContent) {
      inpRef.current.value = target.textContent;
    }

    showList(false);

    setTimeout(() => {
      navigate(`/${path}`);
    }, 300);
  };

  return { inpRef, onKeywordClick };
};

export default useSearchBarRef;
