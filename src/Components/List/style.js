import styled from "styled-components";

export const StyledItemList = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 10px;

  border-left: 10px solid ${({ borderColor }) => borderColor};

  img {
    width: 10px;
    height: 10px;

    @media (min-width: 769px) {
      width: 25px;
      height: 25px;
    }
  }
`;
