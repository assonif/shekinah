import Colors from "@/styles/Colors";
import colors from "@/styles/Colors";
import styled, { css } from "styled-components";

interface ContainerProps {
  unavailable: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 1rem;
  width: 48%;

  transition: all 0.2s ease-out;

  ${(props) =>
    props.unavailable &&
    css`
      filter: grayscale(10%) brightness(120%) sepia(80%) hue-rotate(-180deg)
        saturate(10%) contrast(0.8);
    `}

  > a {
    width: 100%;
    height: 100%;
  }

  cursor: pointer;
  > a > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 13rem;
    width: 100%;
  }

  > a > div > img {
    max-width: 100%;
    max-height: 100%;
  }

  @media (min-width: 768px) {
    & {
      width: 24%;
      height: 29rem;
      margin-left: 1%;
    }

    & > a > div {
      height: 24rem;
    }

    &:hover {
      box-shadow: 2px 2px 10px 2px ${colors.neutral_color_03};
    }
  }
`;

interface SaleInfoProps {
  isRelatedProducts: boolean;
}

export const SaleInfo = styled.span<SaleInfoProps>`
  display: block;
  position: absolute;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  background: ${colors.red_01};

  margin-top: 0.4rem;
  margin-left: 8.2rem;

  font-weight: bold;
  color: ${colors.neutral_color_01};
  @media (min-width: 768px) {
    margin-top: 1rem;
    margin-left: 16rem;

    ${(props) =>
      props.isRelatedProducts &&
      css`
        margin-top: 1rem;
        margin-left: 13.5rem;
      `}
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 3rem !important;

  margin-top: 0.4rem;

  color: ${colors.neutral_color_09};

  > strong {
    max-width: 100%;
    font-size: 0.8rem;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 0.3rem;
  }

  > span {
    max-width: 100%;
    font-size: 0.8rem;
    font-weight: normal;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 0.3rem;
  }
`;

interface PriceContainerProps {
  salePrice: boolean;
}

export const PriceContainer = styled.div<PriceContainerProps>`
  display: flex;
  align-items: center;

  font-size: 0.8rem;

  > strong {
    font-weight: bold;
  }

  > span {
    font-weight: bold;
  }

  ${(props) =>
    props.salePrice &&
    css`
      > strong {
        font-weight: normal;
        margin-right: 0.6rem;
        text-decoration: line-through;
        color: ${colors.neutral_color_06};
      }
    `}
`;
