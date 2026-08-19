import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage";
import BasicLayout from "../layouts/BasicLayout";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<BasicLayout/>}>
                    <Route path="/" element={<HomePage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;