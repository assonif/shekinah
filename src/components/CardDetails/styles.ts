import Colors from "@/styles/Colors";
import styled, { css } from "styled-components";

interface IContainerProps {
  isOpened: boolean;
  relativeHeight?: number;
}

export const Container = styled.div<IContainerProps>`
  z-index: 10;
  width: 100vw;
  height: 110px;

  transition: height 0.8s;

  ${(props) =>
    props.isOpened &&
    css`
      height: ${props.relativeHeight + 110}px;
    `}

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${Colors.neutral_color_02};
  position: fixed;

  padding: 0.6rem;

  padding-bottom: 0rem;

  ${(props) =>
    !props.isOpened &&
    css`
      box-shadow: 0px 4px 6px ${Colors.neutral_color_04};
    `}

  > span:first-child {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 11;

    border-bottom: 1px solid ${Colors.neutral_color_05};
    padding-bottom: 0.6rem;

    > img {
      width: 50%;
      max-width: 10rem;
    }
  }
`;

export const Footer = styled.div<IContainerProps>`
  position: absolute;
  bottom: 0px;
  width: 100%;

  background: ${Colors.neutral_color_02};

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.6rem 0.8rem 0;
  }

  > button {
    width: 100%;

    background: transparent;
    padding-bottom: 0.6rem;

    > svg {
      transition: transform 0.4s;
      ${(props) =>
        props.isOpened &&
        css`
          transform: rotate(180deg);
        `}
    }
  }
`;

export const Summary = styled.div<IContainerProps>`
  width: 100%;
  border-bottom: 1px solid ${Colors.neutral_color_05};
  display: ${(props) => (props.isOpened ? "block" : "none")};
  padding: 0.6rem;

  @keyframes show-summary {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes hide-summary {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  ${(props) =>
    !props.isOpened &&
    css`
      animation: hide-summary 0.7s cubic-bezier(0.77, 0, 0.175, 1) both;
    `}

  ${(props) =>
    props.isOpened &&
    css`
      animation: show-summary 0.7s cubic-bezier(0.77, 0, 0.175, 1) both;
    `}
`;

export const CartItem = styled.div`
  margin-top: 0.6rem;

  display: flex;
  justify-content: space-between;

  &:first-child {
    margin-top: 1rem;
  }
`;

export const Divisor = styled.span`
  width: 100%;
  border-bottom: 1px solid ${Colors.neutral_color_05};
`;

export const Shipping = styled.span<IContainerProps>`
  width: 100%;
  border-bottom: 1px solid ${Colors.neutral_color_05};

  display: ${(props) => (props.isOpened ? "block" : "none")};

  padding: 1rem 0.6rem;

  display: flex;
  justify-content: space-between;

  @keyframes show-summary {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes hide-summary {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  ${(props) =>
    !props.isOpened &&
    css`
      animation: hide-summary 0.7s cubic-bezier(0.77, 0, 0.175, 1) both;
    `}

  ${(props) =>
    props.isOpened &&
    css`
      animation: show-summary 0.7s cubic-bezier(0.77, 0, 0.175, 1) both;
    `}
`;

export const Overlay = styled.div<IContainerProps>`
  ${(props) =>
    props.isOpened &&
    css`
      z-index: 9;
      width: 100vw;
      height: 100vh;
      background: ${Colors.neutral_color_09};
      opacity: 0.4;
      position: fixed;
    `}
`;
