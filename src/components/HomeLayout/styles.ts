import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-areas:
    "first first"
    "second second"
    "third third"
    "fourth fourth";
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-areas:
      "first first third fourth"
      "second second third fourth";
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
