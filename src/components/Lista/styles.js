import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  background-color: #fff;
  border-radius: 5px;
  background-color: #1f1f23;
  color: #efeff1;
  box-shadow: 3px 4px 9px #303030;
  *border: 2px solid #1f1f23;
  p,
  h3,
  h5,
  h6 {
    margin: 0;
  }

  div.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    border-bottom: 1px solid #18181b;

    div:first-child {
      display: flex;
      align-items: center;
      .number {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25px;
        height: 25px;
        border-radius: 100%;
        background-color: #00ff7f;
        margin-right: 12px;
        p {
          color: #000;
          font-weight: bold;
        }
      }
      .name {
        line-height: 20px;
      }
    }
    div:last-child {
      display: flex;
      flex-direction: column;
      justify-content: center;
      a {
        text-align: center;
        background-color: #f8c822;
        margin-top: 5px;
        border-radius: 2px;
        display: block;
        text-decoration: none;
        cursor: pointer;
        color: #000;
        font-weight: bold;
        font-size: 13px;
      }
    }
    h5.cancelado {
      color: #fc4850;
    }
    h5.nocancelado {
      color: #00ff7f;
    }
  }

  div.body {
    padding: 12px;
    display: flex;
    justify-content: space-between;
    div {
      width: calc(50% - 1em);
    }
    div:last-child {
      line-height: 25px;
      width: calc(50% - 1em);
    }

    span.restante {
      color: #f8c822;
    }
  }

  div.footer {
    button.entregar {
      width: 100%;
      padding: 10px 0;
      background-color: #00ff7f;
      border: none;
      color: #000;
      border-radius: 0px 0px 5px 5px;
      font-weight: bold;
    }
    button.entregado {
      width: 100%;
      padding: 10px 0;
      background-color: #fc4850;
      border: none;
      color: #000;
      border-radius: 0px 0px 5px 5px;
      font-weight: bold;
    }
  }
`;

export const Listado = styled.section`
  padding: 12px 12px 0px 12px;
`;
