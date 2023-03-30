import IFaq from "../../Interface/IFaq";

export default function FaqCard({ question, answer }: IFaq) {
  let answerStyle: string = "text-gray-500 dark:text-gray-300";
  if ("" === answer) {
    answer = "Nessuna risposta";
    answerStyle = "text-red-300 ";
  }

  answerStyle += " mt-6 text-xl";

  return (
    <div className="text-3xl justify-start p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
      <h1 className=" font-semibold text-gray-700 dark:text-white">
        {question}
      </h1>
      <p className={answerStyle}>{answer}</p>
    </div>
  );
}
