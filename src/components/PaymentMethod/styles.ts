import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding-top: 1.5rem;
`;

export const SelectStep = styled.div`
  width: 100%;

  > strong {
    margin-bottom: 0.5rem;
    width: 100%;

    display: flex;
    justify-content: center;
  }
`;
