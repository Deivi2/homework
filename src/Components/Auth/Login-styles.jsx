import styled from "styled-components";

export const LoginRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.09);
  padding: 20px 50px;
  background-color: #fff;

  @media (max-width: 768px) {
    width: auto;
    padding: 5px 10px;
  }

  h2 {
    text-align: center;
  }

  input {
    margin: 12px;
    padding: 12px;
    width: 100%;

    @media (max-width: 300px) {
      flex: 1.5;
    }
  }

  label {
    text-align: center;
    white-space: nowrap;
    width: 129px;

    @media (max-width: 300px) {
      flex: 1;
    }
  }

  button {
    margin: 10px;
    padding: 10px;
    color: white;
    border-radius: 20px;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: #27ca27;
    width: 100%;
  }

  button:disabled {
    background-color: #bdf1bd;
  }

  .inputs {
    display: flex;
    align-items: center;
  }

  .errorMessage {
    text-align: center;
    color: red;
    font-size: 14px;
  }
`;
