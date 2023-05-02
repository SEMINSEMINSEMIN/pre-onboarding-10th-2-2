import React, { useState } from "react";

const useToggle = () => {
  const [isListVisible, setIsListVisible] = useState(false);

  const onInpFocus = () => {
    setIsListVisible(true);
  };

  const onInpBlur = (event: React.FocusEvent) => {
    if (event.relatedTarget?.classList[0] === "search-result") {
      return;
    } else {
      setIsListVisible(false);
    }
  };

  const closeList = () => {
    setIsListVisible(false);
  };

  return {
    isListVisible,
    closeList,
    onInpFocus,
    onInpBlur,
  };
};

export default useToggle;
