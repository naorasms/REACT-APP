import { useContext } from "react";
import { userContext } from "../App";
const Middel = () => {
  const user = useContext(userContext);
  return (
    <div>
      <h3>this is {user.name}...</h3>
      <h6>this is {user.age}...</h6>;
    </div>
  );
};

export default Middel;
