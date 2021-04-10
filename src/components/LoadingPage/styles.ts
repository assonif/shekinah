import Colors from "@/styles/Colors";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    margin-top: 4rem;
    width: 10rem;
    height: 10rem;
    background: white;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    border-radius: 50%;

    overflow: hidden;

    transition: all 0.4s;

    @keyframes loader {
      0% {
        border-right: 4px solid ${Colors.neutral_color_09};
      }
      25% {
        border-bottom: 4px solid ${Colors.neutral_color_09};
      }
      50% {
        border-left: 4px solid ${Colors.neutral_color_09};
      }
      75% {
        border-top: 4px solid ${Colors.neutral_color_09};
      }
      100% {
        border-right: 4px solid ${Colors.neutral_color_09};
      }
    }

    animation: loader 1s cubic-bezier(0.77, 0, 0.175, 1) infinite;

    > img {
      width: 85%;
    }
  }

  > strong {
    margin-top: 2rem;
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
    > div {
      width: 15rem;
      height: 15rem;
    }
  }
`;
