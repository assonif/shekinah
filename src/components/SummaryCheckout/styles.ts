import Colors from "@/styles/Colors";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  > strong {
    margin-top: 1.5rem;
  }

  > button {
    margin-top: 2rem;
  }
`;

export const FloatBox = styled.div`
  width: 100%;

  margin-top: 1.5rem;
  border-radius: 0.3rem;
  border: 1px solid ${Colors.neutral_color_04};
  box-shadow: 0px 2px 2px ${Colors.neutral_color_04};
`;
