import { Route, Routes as Switch } from "react-router-dom";
import HomePage from "../pages/homePage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<HomePage />} />
    </Switch>
  );
};

export default Routes;
