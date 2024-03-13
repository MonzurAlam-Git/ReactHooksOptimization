import { useEffect, useState } from "react";
import UserLists from "./UserLists";
import useContainer from "../Hooks/useContainer";

const UsersContainer = () => {
  const { users, loading, error } = useContainer();

  return <UserLists users={users} loading={loading} error={error}></UserLists>;
};

export default UsersContainer;
