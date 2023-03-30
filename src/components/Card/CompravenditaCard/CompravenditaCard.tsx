import { Link } from "react-router-dom";
import ICompravendita from "../../Interface/ICompravendita";

export default function CompravenditaCard({
  id,
  title,
  description,
  price,
  image,
}: ICompravendita) {
  const cardId = "card-" + id;
  return (
    <div id={cardId}>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="p-8 rounded-t-lg" src={image} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-10 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <div className="flex items-baseline justify-start">
            <div className="text-lg mx-3 px-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow">
              € {price}
            </div>
            <a
              href="#"
              className="inline-flex items-center mx-5 px-3 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <Link to={id} state={{ description }}>
                Maggiori informazioni
              </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
