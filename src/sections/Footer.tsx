export default function Footer() {
  return (
    <footer className="text-white text-sm ">
      {/* Footer Top */}
      <div className="grid grid-cols-12 mb-10">
        <a href="/" id="nav" className="col-span-6">
          <div className="font-bold">mukbang studio</div>
        </a>
        <ul className="col-span-3">
          <li className="hover:italic cursor-pointer">Work</li>
          <li className="hover:italic cursor-pointer">Studio</li>
          <li className="hover:italic cursor-pointer">Contact</li>
        </ul>
        <ul className="col-span-3">
          <li className="hover:italic cursor-pointer">Instagram</li>
          <li className="hover:italic cursor-pointer">YouTube</li>
          <li className="hover:italic cursor-pointer">Twitter</li>
          <li className="hover:italic cursor-pointer">Email</li>
        </ul>
      </div>

      {/* Footer Bottom */}
      <div className="grid grid-cols-12">
        <div className="col-span-6 gap-2 font-light flex">
          <a href="/" className="hover:underline">
            Privacy
          </a>
          <p>, </p>
          <a href="/" className="hover:underline">
            Cookies
          </a>
        </div>
        <p className="col-span-3">worldwide</p>
        <a href="mailto:hello@kellykim.xyz" className="col-span-3 hover:italic">
          hello@mukbangstudio.com
        </a>
      </div>
    </footer>
  );
}
