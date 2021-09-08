import React from "react";
import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  border: 0.1em solid;
  width: 5vw;
  height: 5wh;
  padding: 10em;
  margin: 3em;
`;

export const Thumbnail = styled.li`
  border: 1em;
`;

export const Title = styled.li`
  border: 1em;
`;

export const Name = styled.li`
  border: 1em;
`;

const List = ({ data }) => {
  return (
    <Container>
      <Thumbnail>{data.snippet.thumbnails}</Thumbnail>
      <Title>{data.snippet.title}</Title>
      <Name>{data.snippet.name}</Name>
    </Container>
  );
};

export default List;
