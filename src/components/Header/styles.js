import styled from "styled-components";

export const Container = styled.div`
  background-color: #1f1f23;
  height: 56px;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #303030;
  box-shadow: 0 0px 10px #303030;
  z-index: 1;
  div {
    width: 100%;
    padding: 0 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div.busqueda {
      padding: 0;
      width: 100%;
      input {
        width: 200px;
        padding: 12px 12px;
        border-radius: 5px;
        background-color: #000;
        border: none;
        color: #fff;
      }
    }
    a {
      display: inline-block;
      text-decoration: none;
      background-color: #00ff7f;
      border-radius: 5px;
      padding: 5px 10px;
      font-weight: bold;
      color: #000;
      cursor: pointer;
    }
  }
`;
