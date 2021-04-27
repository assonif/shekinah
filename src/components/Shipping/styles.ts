import Colors from "@/styles/Colors";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;

  transition: all 0.8s;

  > strong {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  > span {
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
  }

  > p {
    font-size: 0.7rem;
    font-weight: bold;

    color: ${Colors.red_01};
  }

  #loader {
    margin-top: -0.6rem;
    margin-bottom: 0.2rem;

    align-self: center;
  }

  > input {
    height: 2rem;
    border: 1px solid ${Colors.neutral_color_05};

    margin-bottom: 0.2rem;

    padding-left: 0.5rem;
  }

  button {
    margin-top: 1.8rem;
  }
`;

export const Method = styled.section`
  margin-top: 0.2rem;
  padding: 0.4rem 0;

  border-bottom: 1px solid ${Colors.neutral_color_04};

  > strong {
    font-size: 0.8rem;
  }

  > div {
    display: flex;
    justify-content: space-between;

    > span:last-child {
      font-size: 0.9rem;
    }
  }
`;
