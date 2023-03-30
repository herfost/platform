import { useParams } from "react-router-dom";
import CompravenditaDatailCard from "../../components/Card/CompravenditaCard/CompravenditaDatailCard";
import ICompravendita from "../../components/Interface/ICompravendita";
import items from "./compravendita.json";

export default function CompravenditaDetail() {
  const { id } = useParams();
  const item = items.filter((item) => item.id === id)[0];
  function createCompravenditaDetailCard({
    id,
    title,
    description,
    price,
    image,
  }: ICompravendita) {
    return (
      <CompravenditaDatailCard
        id={id}
        title={title}
        description={description}
        price={price}
        image={image}
      />
    );
  }

  return (
    <div className="flex content-center justify-center [&>*]:p-10">
      {createCompravenditaDetailCard(item)}
    </div>
  );
}
