import Colors from "@/styles/Colors";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;

  > strong {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  > span {
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
  }

  > input {
    height: 2rem;
    border: 1px solid ${Colors.neutral_color_05};

    margin-bottom: 1rem;

    padding-left: 0.5rem;
  }
`;
