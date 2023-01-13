import React from "react";
import styled from "styled-components";

export default function FullButton({title, action, border}: {title: string; action: () => void; border: boolean}) {
  return (
    <Wrapper className='animate pointer radius8' onClick={() => action()} border={border}>
      <Text>{title}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  background-color: ${(props) => (props.border ? "transparent" : "#0071CE")};
  width: 100%;
  padding: 15px;
  outline: none;
  border: none;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#0189f9")};
    color: ${(props) => (props.border ? "#0171cd" : "#fff")};
  }
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin: 0;
`;