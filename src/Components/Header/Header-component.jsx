import React from "react";
import { startLogout } from "../../redux/common/common-actions";
import { useSelector, useDispatch } from "react-redux";
import { HeaderRoot, LogoutButton, Logo } from "./Header-styles";

const Header = () => {
  const dispatch = useDispatch();
  const { loader, identity } = useSelector((state) => state.common);

  const handleLogout = () => dispatch(startLogout());

  return (
    <HeaderRoot>
      <Logo>List</Logo>
      <div>{identity?.email}</div>
      <LogoutButton onClick={handleLogout} disabled={!!loader?.LOGOUT}>
        {!!loader?.LOGOUT ? "Loading..." : "Logout"}
      </LogoutButton>
    </HeaderRoot>
  );
};

export default Header;
