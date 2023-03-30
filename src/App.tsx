import { Route, Routes } from "react-router-dom";
import CompravenditaRoutes from "./routes/Faq/CompravenditaRoutes";
import FaqRouters from "./routes/Faq/FaqRoutes";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

import "./App.css";
import DefaultLayout from "./components/Layout/DefaultLayout";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />

        <Route
          path="/faq/*"
          element={
            <DefaultLayout>
              <FaqRouters />
            </DefaultLayout>
          }
        />
        <Route
          path="/compravendita/*"
          element={
            <DefaultLayout>
              <CompravenditaRoutes />
            </DefaultLayout>
          }
        />
      </Routes>
    </div>
  );
}
