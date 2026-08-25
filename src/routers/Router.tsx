import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage";
import BasicLayout from "../layouts/BasicLayout";
import SignInPage from "../pages/auth/SignInPage";
import SignUpPage from "../pages/auth/SignUpPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<BasicLayout/>}>
                    <Route path="/" element={<HomePage/>} />
                </Route>
                <Route>
                    <Route path="/sign-in" element={<SignInPage/>} />
                    <Route path="/sign-up" element={<SignUpPage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;