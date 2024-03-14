const UserLists = ({ users, loading, error }) => {
  return (
    <div>
      {/* <h1 className="text-2xl text-center font-bold">{users}</h1> */}
      {users.map((user) => (
        <h1 className="text-2xl text-center font-bold">{user.name}</h1>
      ))}
    </div>
  );
};

export default UserLists;
