import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/"); // Home.tsx
    }, 1000);
  }, []);

  return (
    <div className="font-mono font-bold [&>*]:p-10">
      <h1 className="text-red-600 text-5xl">
        Impossibile trovare la pagina richiesta
      </h1>
      <p className="text-3xl underline">Reindirizzamento (Homepage)</p>
    </div>
  );
}
