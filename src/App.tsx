import "./App.css";
import Logo from "./components/logo/Logo";
import ButtonsGroup from "./components/buttonsGroup/buttonsGroup";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Logo />
      <ButtonsGroup />
      <Outlet />
    </div>
  );
}

export default App;
