import React from "react";
import Styled from "styled-components";

export const LoadingImg = Styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;
const Loading = () => {
  return (
    <LoadingImg>
      <img src="images/loading-circle-loading.gif" alt="Loading..."></img>
    </LoadingImg>
  );
};

export default Loading;
