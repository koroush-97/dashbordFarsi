import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import { useRoutes } from "react-router-dom";
import './App.css'
import  Routes  from "./Routes"
function App() {

let Approutes = useRoutes(Routes)

  return (
    <> 
    <Sidebar />


    <div className="main">
    <Header />
   

    {Approutes}
    </div>
    </>
  );
}

export default App;
