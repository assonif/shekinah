import Colors from "@/styles/Colors";
import styled, { css } from "styled-components";

interface IContainerProps {
  error: boolean;
  isFilled: boolean;
  isFocused: boolean;
  width: number;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  position: relative;

  margin-bottom: ${(props) => (props.error ? "1.3rem" : "1rem")};

  width: ${(props) => (props.width > 0 ? props.width : 100)}%;

  span {
    display: flex;
    align-items: flex-end;

    position: absolute;
    transform: translate(6px, 44px) scale(1);

    font-weight: 600;
    font-size: 0.8rem;
    color: ${Colors.red_01};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-left: 12px;

    width: 100%;
    height: 2.75rem;

    position: relative;

    color: ${Colors.neutral_color_05};
    border: 1px solid ${Colors.neutral_color_03};

    background-color: ${Colors.neutral_color_02};
    border-radius: 8px;

    &:hover {
      box-shadow: 0px 4px 8px ${Colors.neutral_color_04};
    }

    label {
      position: absolute;
      transform: translate(0, -9px) scale(1);
      display: none;

      font-size: 12px;
      line-height: 16px;
    }

    > input {
      outline: none;
      border: none;
      background-color: inherit;

      width: 100%;
      height: 18px;

      ::placeholder {
        font-size: 16px;
        z-index: 1;
      }
    }

    ${(props) =>
      props.isFocused &&
      css`
        border: 1px solid ${Colors.blue_01};
        box-shadow: 0px 4px 8px ${Colors.neutral_color_04};

        label {
          display: block;
        }

        input {
          font-weight: 600;
          font-size: 0.8rem;
          line-height: 20px;
          margin-top: 1rem;
          margin-bottom: 3px;

          ::-webkit-input-placeholder {
            color: transparent;
          }

          /* Firefox  */
          :-moz-placeholder {
            color: transparent;
          }

          :-ms-input-placeholder {
            color: transparent;
          }
        }
      `}

    ${(props) =>
      props.isFilled &&
      css`
        label {
          display: block;
        }

        input {
          font-weight: 600;
          font-size: 0.8rem;
          line-height: 20px;
          margin-top: 19px;
          margin-bottom: 3px;
        }
      `}

        ${(props) =>
      props.error &&
      css`
        border: 1px solid ${Colors.red_01};

        label {
          color: ${Colors.red_01};
        }
      `}
  }
`;
