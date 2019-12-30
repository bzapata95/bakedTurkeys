import styled from "styled-components";

export const Booble = styled.div`
  position: fixed;
  color: #000;
  top: 50vh;
  width: 55px;
  height: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #f8c822;
  box-shadow: 2px 2px 4px #000;
  z-index: 1;
  span {
    font-weight: bold;
    display: block;
  }
`;
