import React, { FC } from "react";

export const Performance: FC = () => {
  const performance = localStorage.getItem('performance')
  return <div>Comments loading time is: {performance}</div>;
};
