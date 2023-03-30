import FaqCard from "../../Card/FaqCard/FaqCard";
import IFaq from "../../Interface/IFaq";

export interface IFaqContainer {
  heading: string;
  faqs: IFaq[];
  search: string;
}

export function FaqContainer({ heading, faqs, search }: IFaqContainer) {
  function createFaqCard({ answer, question }: IFaq) {
    return <FaqCard answer={answer} question={question} />;
  }

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className=" font-medium font-mono container px-6 py-12 mx-auto">
          <h1 className="text-5xl text-gray-800 dark:text-white">{heading}</h1>
          <div className="mt-8 space-y-8">
            {faqs
              .filter((faq) => {
                return faq.question.toLowerCase() === ""
                  ? faq
                  : faq.question.toLowerCase().includes(search);
              })
              .map(createFaqCard)}
          </div>
        </div>
      </section>
    </div>
  );
}
