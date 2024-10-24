import { Outlet } from "react-router-dom"
import Header from "./header"
import Sidebar from "./sidebar"
import Footer from "./footer";
import './App.css';
const App=()=>{
    return(
        <>
        <Header/>
        <div className="wrapper">
            <div className="content">
                <Outlet/>
            </div>
            <div className="sidebar">
                <Sidebar/>
            </div>            
        </div>
        <Footer/>
       
        </>
    )
}
export default App