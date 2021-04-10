import styled, { css } from "styled-components";
import Colors from "../Colors";

export const Container = styled.div`
  > div > div > span {
    font-size: 0.7rem;
    font-weight: bold;

    color: ${Colors.red_01};
  }

  max-width: 1040px;
  margin: 0 auto;

  margin-top: 2rem;

  @media (min-width: 768px) {
    margin-top: 4rem;

    > div {
      display: flex;

      justify-content: space-between;
    }
    > div > div {
      width: 30%;
    }
  }
`;

interface SaleContainerProps {
  hasSale: boolean;
}

export const SaleContainer = styled.div<SaleContainerProps>`
  display: flex;
  align-items: flex-end;

  > strong {
    font-weight: bold;
  }

  > span {
    display: none;
    font-weight: bold;
  }

  ${(props) =>
    props.hasSale &&
    css`
      > strong {
        font-weight: normal;
        font-size: 0.9rem;
        margin-right: 0.6rem;
        text-decoration: line-through;
        color: ${Colors.neutral_color_06};
      }

      > span {
        display: flex;
      }
    `}
`;

interface PhotoContainerProps {
  selected: number;
}

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 2rem;

  > p {
    margin-top: 1.5rem;
    font-size: 0.7rem;
    color: ${Colors.neutral_color_06};
  }

  > strong {
    margin-bottom: 0.3rem;
  }

  > span {
    margin: 0.5rem auto;
    font-size: 0.8rem;
  }
  > div {
    display: flex;
  }

  > label {
    margin-top: 0.8rem;
    font-size: 0.7rem;
    color: ${Colors.neutral_color_06};
  }

  @media (min-width: 768px) {
    width: 100%;

    display: flex;
    align-items: flex-start;

    & > span {
      margin: 1rem 0;
      font-size: 0.8rem;
    }

    & > strong {
      margin-bottom: 1rem;
    }
  }
`;

interface SizeBoxProps {
  isSelected: boolean;
}

export const SizeBox = styled.span<SizeBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.8rem;

  padding: 0 0.5rem;

  margin-left: 1rem;

  min-width: 2.5rem;
  min-height: 2.5rem;

  border-radius: 1.3rem;

  cursor: pointer;

  transition: all 0.4s;

  border: 2px solid ${Colors.neutral_color_09};

  background: ${(props) =>
    props.isSelected ? Colors.neutral_color_09 : Colors.neutral_color_01};

  color: ${(props) =>
    props.isSelected ? Colors.neutral_color_01 : Colors.neutral_color_09};

  &:first-child {
    margin-left: 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const PhotoContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  width: 100%;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
  }

  > span > img {
    width: 87%;
  }

  > div {
    margin-left: 0.5rem;

    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    & {
      flex-direction: row-reverse;
      justify-content: flex-end;

      width: 65% !important;
    }
    & > span {
      width: 100%;
    }
    & > span > img {
      max-height: 572px;
    }

    & > div {
      margin-right: 2rem;

      display: flex;
      flex-direction: column;
    }
  }
`;

export const MiniPhotoContainer = styled.div<PhotoContainerProps>`
  width: 2rem;
  margin-bottom: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  > img {
    transition: all 0.1s;
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 4rem;
  }

  ${(props) => css`
    &:nth-child(${props.selected}) {
      img {
        border-radius: 1rem;

        box-shadow: 1px 1px 5px 1px ${Colors.neutral_color_05};
      }
    }
  `}
`;
