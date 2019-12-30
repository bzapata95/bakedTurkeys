import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  color: #efeff1;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #18181b;
  padding: 12px 12px;
  border-radius: 5px;
  div.precios {
    display: flex;
    justify-content: space-between;
    div {
      label {
        display: block;
      }
      input {
        width: calc(90% - 1em);
      }
    }
  }

  input {
    background-color: #1f1f23;
    padding: 12px 12px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    color: #fff;
    margin: 5px 0;
  }

  label.check {
    margin-top: 10px;
    display: flex;
    align-items: center;
    text-align: right;
    input {
      margin: 0;
    }
    span {
      display: inline-block;
    }
  }

  button {
    margin-top: 12px;
    font-weight: bold;
    padding: 12px;
    background-color: #00ff7f;
    border-radius: 5px;
    border: none;
  }
`;

export const Title = styled.h1`
  margin: 0;
  color: #efeff1;
  font-size: 22px;
`;
