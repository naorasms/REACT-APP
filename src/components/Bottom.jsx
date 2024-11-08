import { userContext } from "../App";
const Bottom = () => {
  return (
    <div>
      <userContext.Consumer>
        {(ee) => {
          return <h1>this is bottm componet {ee.user}</h1>;
        }}
      </userContext.Consumer>
    </div>
  );
};

export default Bottom;
