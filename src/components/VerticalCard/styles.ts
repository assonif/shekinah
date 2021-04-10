import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 400px;
  height: 100%;
  border-radius: 10px;
  padding: 10px;
  direction: initial;
  overflow: hidden;
  position: relative;
  max-width: 100%;
  cursor: pointer;
  transition: box-shadow 300ms ease-in-out;
  -webkit-transition: box-shadow 300ms ease-in-out;
  -moz-transition: box-shadow 300ms ease-in-out;
  -ms-transition: box-shadow 300ms ease-in-out;
  -o-transition: box-shadow 300ms ease-in-out;

  background: blue;
`;
