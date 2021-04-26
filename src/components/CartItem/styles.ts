import Colors from "@/styles/Colors";
import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid ${Colors.neutral_color_04};

  display: flex;

  > img {
    width: 20vw;
    height: 20vw;

    margin-right: 1rem;
  }

  @media (min-width: 768px) {
    > img {
      width: 7rem;
      height: 7rem;
    }
  }

  padding: 1rem 0;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 0.8rem;

  a {
    text-decoration: none;
    color: ${Colors.neutral_color_09};
  }

  > span {
    color: ${Colors.neutral_color_06};
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
  }

  @media (min-width: 768px) {
    > span {
      margin-bottom: 0.7rem;
    }
  }
`;

export const QuantityContainer = styled.div`
  margin-top: 1rem;

  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
  }

  span {
    color: ${Colors.neutral_color_09};
    font-weight: bold;
    font-size: 0.8rem;
  }

  input {
    margin-left: 0.5rem;
    height: 2rem;
    width: 2.5rem;
    border: 1px solid ${Colors.neutral_color_05};

    padding: 0.5rem;
  }

  .button-container {
    margin-top: 0.5rem;

    button {
      font-size: 0.7rem !important;

      margin-right: 0.5rem;
    }
  }

  @media (min-width: 768px) {
    & {
      width: 17rem;
    }

    input {
      margin-left: 1rem;
      width: 3rem;

      padding-left: 0.8rem;
    }
  }
`;

export const InfoContainer = styled.div`
  width: 100%;

  > div {
    display: flex;
  }

  @media (min-width: 768px) {
    & {
      display: flex;
      justify-content: space-between;
    }
  }
`;
