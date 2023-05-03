import { useState } from "react";

const useHoverManage = () => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = () => {
    console.info("enter");
    setIsHover(true);
  };
  const onMouseLeave = () => {
    console.info("leave");
    setIsHover(false);
  };

  return {
    isHover,
    onMouseEnter,
    onMouseLeave,
  };
};

export default useHoverManage;
