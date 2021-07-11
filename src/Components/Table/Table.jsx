import React, { createContext, useContext, useState, useEffect, Fragment } from "react";
import { useSorting } from "../../hooks/useSorting";
import { Table, TableHeaderName, CtaButton, CtaTableRow } from "./Table-styles";
import { useSelector } from "react-redux";

const Context = createContext();
const Provider = Context.Provider;

const ClientsTable = () => {
  const { loader, error, clients } = useSelector((state) => state.common);

  const [clientsData, setClients] = useState([]);
  const { startSortingByName, setSortableData } = useSorting();

  useEffect(() => {
    if (clients) {
      setClients(clients);
      setSortableData(clients);
    }
  }, [clients]);

  const handleSortClients = (key) => setClients(startSortingByName(key));

  return (
    <Provider value={{ clients: clientsData, handleSortClients }}>
      {!!loader?.GET_CLIENTS ? (
        <div>Loading....</div>
      ) : !!error?.GET_CLIENTS ? (
        <div>No Data</div>
      ) : (
        <TableRoot />
      )}
    </Provider>
  );
};

const TableRoot = () => {
  return (
    <Table>
      <ClientsTableHead />
      <ClientsTableBody />
    </Table>
  );
};

const ClientsTableHead = () => {
  const { clients } = useContext(Context);
  const isClients = clients?.some((val) => val);
  return (
    <thead>
      <tr>
        {isClients &&
          Object.keys(clients[0])
            .filter((name) => name !== "email")
            .map((key) => <TableHeader key={key} keyVal={key} />)}
        <th></th>
      </tr>
    </thead>
  );
};

const TableHeader = ({ keyVal }) => {
  const [arrowPost, setArrowPost] = useState(false);
  const { handleSortClients } = useContext(Context);

  const handleHeaderClick = (keyVal) => {
    setArrowPost(!arrowPost);
    handleSortClients(keyVal);
  };

  return (
    <th onClick={() => handleHeaderClick(keyVal)}>
      <TableHeaderName>
        <div>{keyVal}</div>
        <div className="arrow">{arrowPost ? "⬇" : "⬆"}</div>
      </TableHeaderName>
    </th>
  );
};

const ClientsTableBody = () => {
  const { clients } = useContext(Context);

  return (
    <tbody>
      {clients?.map((values, i) => (
        <tr key={i}>
          {Object.entries(values).map(([key, value], i) =>
            key !== "email" ? (
              <td key={i}>{value}</td>
            ) : (
              <CtaTableRow key={i}>
                <CtaButton>
                  <a href={`mailto: ${value}`}>Contact</a>
                </CtaButton>
              </CtaTableRow>
            )
          )}
        </tr>
      ))}
    </tbody>
  );
};

export default ClientsTable;
