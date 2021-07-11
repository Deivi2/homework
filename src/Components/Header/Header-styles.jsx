import styled from "styled-components";

export const HeaderRoot = styled.div`
  display: flex;
  justify-content: space-between;
  height: 41px;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 20px;
`;
export const LogoutButton = styled.button`
  margin: 3px;
  padding: 3px;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: #27ca27;
  width: 80px;
  text-align: center;

  &:disabled {
    background-color: #bdf1bd;
  }
`;
