import UserLists from "./UserLists";
import useContainer from "../Hooks/useContainer";
import Select from "./Select";

const UsersContainer = () => {
  const { users, loading, error } = useContainer();

  return <UserLists users={users} loading={loading} error={error}></UserLists>;
};

export default UsersContainer;
