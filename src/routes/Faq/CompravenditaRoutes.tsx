import { Route, Routes } from "react-router-dom";
import CompravenditaDetail from "../../pages/Compravendita/CompravenditaDetail";
import Compravendita from "../../pages/Compravendita/Compravendita";
import DefaultLayout from "../../components/Layout/DefaultLayout";

export default function CompravenditaRoutes() {
  return (
    <Routes>
      <Route index element={<Compravendita />} />
      <Route path=":id" element={<CompravenditaDetail />} />
    </Routes>
  );
}
