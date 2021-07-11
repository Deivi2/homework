import React, { useEffect } from "react";
import { startGetClients } from "../redux/common/common-actions";
import MainLayout from "../layouts/MainLayout/MainLayout.jsx";
import ClientsTable from "../Components/Table/Table";
import { useDispatch } from "react-redux";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetClients());
  }, []);

  return (
    <HomeLayout>
      <ClientsTable />
    </HomeLayout>
  );
};

export default HomePage;
