import Modified from "./Modified";
import UseAvatar from "./UseAvatar";

const GameResults = () => {
  const ActiveUser = Modified(UseAvatar);
  return (
    <div className="flex justify-center gap-5">
      <UseAvatar></UseAvatar>
      <UseAvatar></UseAvatar>
      <ActiveUser></ActiveUser>
      <UseAvatar></UseAvatar>
      <UseAvatar></UseAvatar>
    </div>
  );
};

export default GameResults;
