import React, { useEffect } from "react";
import { RecommendDataType } from "../../types/search";

const useSearchInp = (updateData: (updated: RecommendDataType[]) => void) => {
  useEffect(() => {
    const response = [
      {
        name: "갑상선염",
        id: 4376,
      },
      {
        name: "갑상선중독증",
        id: 4378,
      },
      {
        name: "갑상선 중독",
        id: 4381,
      },
    ];

    const responseWithRefs = response.map(e => {
      return { ...e, ref: React.createRef<HTMLAnchorElement>() };
    });

    updateData(responseWithRefs);
  }, [updateData]);
};

export default useSearchInp;
