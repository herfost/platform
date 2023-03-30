import ICompravendita from "../../Interface/ICompravendita";

export default function DetailsCard({
  id,
  title,
  description,
  price,
  image,
}: ICompravendita) {
  return (
    <div id={id}>
      <div className=" content-center w-full max-w-4xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <h5 className="p-5 mb-10 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <img className="px-20 rounded-t-lg" src={image} alt="" />
        <a
          href="#"
          className="items-center mx-5 px-3 text-lg font-medium text-center text-white"
        >
          <div>{description}</div>
        </a>
      </div>
      <div className="flex font-bold text-center m-auto text-lg p-10 border border-gray-200 dark:border-gray-700 rounded-lg shadow">
        € {price}
      </div>
    </div>
  );
}
