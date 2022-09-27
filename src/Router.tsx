import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CheckoutPage } from "./pages/Checkout";
import { HomePage } from "./pages/Home";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
            </Route>
        </Routes>
    );
}
