import React from "react";

export interface SearchResType {
  name: string;
  id: number;
}

export interface RecommendDataType extends SearchResType {
  ref: React.RefObject<HTMLAnchorElement>;
}

interface FocusFuncsType {
  onInpFocus: () => void;
  onInpBlur: (event: React.FocusEvent) => void;
}

export interface SearchBarProps {
  focusFuncs: FocusFuncsType;
  updateData: (updated: RecommendDataType[]) => void;
  onInpKeyDown: (event: React.KeyboardEvent) => void;
}

export interface RecommendListProps {
  onClick: (event: React.MouseEvent, path: string) => void;
  data: RecommendDataType[];
  keyDownFunc: (event: React.KeyboardEvent<HTMLAnchorElement>, data: RecommendDataType[]) => void;
}

export interface RecommendedItemProps {
  keyword: string;
  onClick: (event: React.MouseEvent, path: string) => void;
  path: string;
  keyDownFunc: (event: React.KeyboardEvent<HTMLAnchorElement>, data?: RecommendDataType[]) => void;
}
