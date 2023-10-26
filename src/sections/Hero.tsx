import Button from "../components/Button";
import { ArrowRightCircle, Play } from "lucide-react";

export default function Hero() {
  return (
    <section>
      {/* Section 1 */}
      <div className="flex xl:flex-row flex-col justify-center items-center py-[200px] m-auto gap-10">
        <div className="items-center flex flex-col">
          <h2 className="mb-12 w-1/2 text-center">
            a worldwide brand and marketing studio for irresistible maverick
            brands. we build brands, create digital homes and tell unforgettable
            stories.
          </h2>
          <Button>
            <div className="flex gap-3 items-center">
              explore work
              <ArrowRightCircle size={18} />
            </div>
          </Button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="justify-center flex items-center flex-col font-drafting text-center">
        {/* the image */}
        <div className="relative">
          <div className="aspect-video">
            <img src="./images/hero.png" alt="" />
          </div>
          <div className="z-2 cursor-pointer text-white flex gap-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Play />
            <p>watch me</p>
          </div>
        </div>
      </div>
    </section>
  );
}
