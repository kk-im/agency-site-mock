import { articles } from "../constants";
import { ArrowRightCircle } from "lucide-react";
import Button from "../components/Button";

export default function About() {
  return (
    <section className="py-16">
      <div className="flex flex-col gap-5 items-start">
        <h4 className="font-semibold">Noteworthy Content</h4>
        <ul className="w-full border-t mb-4 border-black">
          {articles.map((article) => {
            return (
              <li className="grid grid-cols-6 py-2">
                <span className="col-span-2">{article.title}</span>
                <time className="col-span-2 text-center">{article.date}</time>
                <a
                  href={article.url}
                  className="col-span-2 cursor-pointer text-right"
                >
                  Read
                </a>
              </li>
            );
          })}
        </ul>
        <Button>
          <div className="flex gap-3 items-center text-sm">
            Read more
            <ArrowRightCircle size={18} />
          </div>
        </Button>
      </div>
    </section>
  );
}
