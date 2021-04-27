import Colors from "@/styles/Colors";
import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 40px;

  div {
    display: inline-block;
    position: absolute;
    border-radius: 5px;
    left: 8px;
    width: 12px;
    background: ${Colors.blue_01};
    animation: lds-facebook 0.8s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  div:nth-child(2) {
    left: 28px;
    animation-delay: -0.12s;
  }
  div:nth-child(3) {
    left: 48px;
    animation-delay: 0;
  }
  @keyframes lds-facebook {
    0% {
      top: 8px;
      height: 64px;
    }
    40%,
    100% {
      top: 24px;
      height: 32px;
    }
  }
`;
