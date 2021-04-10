import Colors from "@/styles/Colors";
import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;

  width: 100%;
  height: 5.5rem;
  margin-top: 1rem;

  background: ${Colors.neutral_color_01};

  border-radius: 0.5rem;
  border: 1px solid ${Colors.neutral_color_02};
  box-shadow: 0px 4px 8px ${Colors.neutral_color_04};

  > div {
    > p {
      font-size: 0.8rem;
    }
  }

  svg {
    font-size: 1.3rem;
  }
`;
