import Colors from "@/styles/Colors";
import styled from "styled-components";

interface IContainerProps {
  hasGatewayButton: boolean;
}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  > form {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 2rem;

    > strong {
      margin-bottom: 1rem;
    }

    > span {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    > button,
    #button-checkout {
      margin-top: 2rem;
    }

    #button-checkout {
      display: ${(props) => (props.hasGatewayButton ? "initial" : "none")};
      width: 100%;
      > button {
        background: ${Colors.green_01};
        color: ${Colors.neutral_color_09};
        font-weight: bold;
        width: 100%;
        height: 3rem;
        font-size: 1.2rem;
        border-radius: 0;
      }
    }

    #button-checkout:hover {
      > button {
        box-shadow: 2px 2px 5px 1px ${Colors.neutral_color_04};
      }
    }

    #loader {
      margin-top: 1rem;
    }

    a {
      display: flex;
      align-items: center;
      margin-top: 1.5rem;

      color: ${Colors.neutral_color_09};

      border-bottom: 1px solid ${Colors.neutral_color_09};

      img {
        height: 1.2rem;
        margin-right: 0.5rem;
      }
    }
  }
`;

export const Security = styled.div`
  width: 100%;

  margin-top: 0.2rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  > svg {
    margin-right: 0.5rem;
  }

  > strong {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    font-weight: normal;
    > svg {
      font-size: 1rem;
    }

    > b {
      margin-left: 0.2rem;
    }
    color: ${Colors.neutral_color_09};
  }
`;
