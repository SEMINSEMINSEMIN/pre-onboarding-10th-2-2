import React, { useState } from "react";

const useToggle = () => {
  const [isListVisible, setIsListVisible] = useState(false);

  const closeList = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const classListArr = Array.from(target.classList);
    if (classListArr.includes("hide-click")) setIsListVisible(false);
  };

  return {
    isListVisible,
    setIsListVisible,
    closeList,
  };
};

export default useToggle;
