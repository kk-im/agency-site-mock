import { Menu } from "lucide-react";

export default function Nav() {
  return (
    <header className="padding-x p-8 max-container absolute z-10 w-full">
      <div className="flex justify-between">
        <a href="/" id="nav">
          <div className="hover:italic font-normal">mukbang studio</div>
        </a>
        <Menu className="cursor-pointer" />
      </div>
    </header>
  );
}
