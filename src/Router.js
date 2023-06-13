import { Route, BrowserRouter, Routes } from "react-router-dom"
import App from "./Component/App";
import './App.css';
import Main from "./Component/Main"
const Router = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/main" element={<Main />} />
        </Routes>
    </BrowserRouter>
    )
}
export default Router;