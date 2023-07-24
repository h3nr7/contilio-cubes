import React from 'react';
import { useNavigate } from "react-router-dom";

export const withNavi = (Component: typeof React.Component) => {
  return (props:any) => <Component {...props} navigate={useNavigate()} />;
}