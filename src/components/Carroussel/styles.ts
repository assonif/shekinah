import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;

  > div {
    display: flex;
    margin-top: 1rem;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow-x: auto;
  }

  > div::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  @media (min-width: 768px) {
    & {
      display: flex;
      flex-direction: column;
      margin-top: 5rem;
      width: 100%;

      > div {
        margin-top: 1rem;
        width: 100% !important;
        justify-content: flex-start;
      }

      > span {
        font-weight: bold;
      }
    }
  }
`;
