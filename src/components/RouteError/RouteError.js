import { useRouteError } from "react-router-dom";

const RouteError = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>There is some error : {error.status} {error.statusText}</h1>
    </div>
  );
};

export default RouteError;
