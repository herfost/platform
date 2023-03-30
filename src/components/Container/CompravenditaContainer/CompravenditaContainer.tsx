import CompravenditaCard from "../../Card/CompravenditaCard/CompravenditaCard";
import ICompravendita from "../../Interface/ICompravendita";

export interface ICompravenditaContainer {
  items: ICompravendita[];
}

export function CompravenditaContainer({ items }: ICompravenditaContainer) {
  function createCompravenditaCard({
    id,
    title,
    description,
    price,
    image,
  }: ICompravendita) {
    return (
      <CompravenditaCard
        id={id}
        title={title}
        description={description}
        price={price}
        image={image}
      />
    );
  }

  return (
    <div className="flex flex-wrap justify-center [&>*]:p-10">
      {items.map((item) => {
        return createCompravenditaCard(item);
      })}
    </div>
  );
}
