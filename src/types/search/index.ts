import React from "react";

export interface SearchBarProps {
  isInpFocused: boolean;
  onInpFocus: () => void;
  onInpBlur: (event: React.FocusEvent) => void;
}

export interface RecommendListProps {
  onClick: (event: React.MouseEvent, path: string) => void;
}

export interface RecommendedItemProps {
  keyword: string;
  onClick: (event: React.MouseEvent, path: string) => void;
  path: string;
}
