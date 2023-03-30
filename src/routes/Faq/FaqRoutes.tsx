import { Route, Routes } from "react-router-dom";
import Faq from "../../pages/Faq/Faq";
import DefaultLayout from "../../components/Layout/DefaultLayout";

export default function FaqRouters() {
  return (
    <Routes>
      <Route index element={<Faq />} />
      <Route path=":question" element={<Faq />} />
    </Routes>
  );
}
