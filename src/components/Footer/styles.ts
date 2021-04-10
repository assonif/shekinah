import Colors from "@/styles/Colors";
import styled from "styled-components";

export const Container = styled.div`
  background: ${Colors.neutral_color_03};
  width: 100%;
  height: 13rem;

  padding: 1.2rem 0.5rem;

  margin-top: 5rem;

  overflow: hidden;

  > span {
    display: flex;
    flex-direction: column;

    font-size: 0.7rem;

    > div > img {
      margin-top: 1rem;
      width: 1.7rem;
      margin-right: 0.5rem;
    }
  }

  @media (min-width: 768px) {
    & {
      padding: 2rem;
      height: 15rem;
      margin-top: 4rem;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 1rem;

  span {
    margin-top: 0.5rem;
  }

  @media (min-width: 768px) {
    & {
      flex-direction: column;
      span {
        margin-top: 1rem;
      }
    }
  }

  span {
    display: flex;

    font-size: 0.7rem;
  }
`;

export const BlackFooter = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${Colors.neutral_color_07};
  margin-top: 2rem;

  height: 3rem;
  width: 100vw;
  margin-left: -0.5rem;

  @media (min-width: 768px) {
    & {
      margin-left: -2rem;
    }
  }
`;
