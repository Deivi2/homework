import styled from "styled-components";

export const Table = styled.table`
  width: 100%;

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  thead {
    cursor: pointer;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #27ca27;
    color: white;
  }
`;

export const CtaButton = styled.button`
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

  a{
    text-decoration: none;
    color: inherit;
  }
`;

export const TableHeaderName = styled.div`
  display: flex;

  .arrow {
    margin-left: 10px;
    display: flex;
    font-size: 22px;
    align-items: center;
    justify-content: center;
  }
`;

export const CtaTableRow = styled.td`
  text-align: center;
`;
