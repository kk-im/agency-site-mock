import { ArrowRightCircle } from "lucide-react";
import Button from "../components/Button";
export default function About() {
  return (
    <section>
      <div className="grid grid-cols-2 gap-2">
        {/* Column 1 */}
        <div>
          <img src="/images/grid-1.png" alt="" />
        </div>

        {/* Column 2 */}
        <div className="flex items-start px-6 gap-2 justify-center flex-col auto">
          <h3 className="text-lg font-semibold">
            The world’s freshest fruit basket delivered straight to your door
            across all four seasons.
          </h3>
          <p className="text-sm mb-6">
            A storefront with a crunch. An intuitive e-commerce store for fruit
            lovers to customize their fruit basket.
          </p>
          <Button styles={""}>
            <div className="flex gap-3 items-center text-sm">
              <span>View</span>
              <ArrowRightCircle size={18} />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}
