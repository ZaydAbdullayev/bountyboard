import { Outlet } from "react-router-dom";
// import bg from "../assets/bg.jpg";
import bg from "../assets/bg2.png";

export const Layout = () => {

  return (
    <div className="w100 h100 df fdc aic layout">
      <Outlet />
      <img src={bg} alt="background" className="bg" />
    </div>
  );
};
