import Colors from "@/styles/Colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 2rem;
  border-bottom: 1px solid ${Colors.neutral_color_04};

  > span {
    margin-top: 2rem;
  }

  > strong {
    font-size: 1.6rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  > a {
    width: 100%;
  }
`;
