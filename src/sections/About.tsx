import { ArrowRightCircle } from "lucide-react";
import Button from "../components/Button";
export default function About() {
  return (
    <section>
      <div className="grid grid-cols-8 gap-2">
        <div className="col-span-2">
          <h2 className="text-xl font-semibold">About</h2>
        </div>
        <div className="col-span-4">
          <p className="text-sm font-light">
            More than just a marketing agency; we are storytellers, creators,
            and strategists passionate about helping brands savor success in the
            digital landscape.
          </p>
        </div>
        <div className="col-span-2 text-end ">
          <Button styles="">
            <div className="flex gap-3 items-center text-sm">
              more
              <ArrowRightCircle size={18} />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}
