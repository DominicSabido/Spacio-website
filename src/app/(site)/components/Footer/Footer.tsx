import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex-grow justify-center">
      <div
        id="hotel-footer"
        className="py-5 bg-darkGray flex flex-wrap justify-center gap-20"
      >
        <div id="hotel-social" className="px-10">
          <h2 className="text-lightGray text-base font-medium pb-5">
            Follow Us
          </h2>
          <ul className="flex gap-5">
            <li>
            
              <Link href="/facebook" className="text-lightGray text-xs">
                Facebook
              </Link>
            </li>
            <li>
              <Link href="/instagram" className="text-lightGray text-xs">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="/twitter" className="text-lightGray text-xs">
                Twitter
              </Link>
            </li>
          </ul>
        </div>
        <div id="hotel-privacy" className="px-10">
          <h2 className="text-lightGray text-base font-medium pb-5">Privacy</h2>
          <p className="text-lightGray text-xs">
            We value your privacy. Please view our privacy policy for more
            information.
          </p>
        </div>
        <div id="hotel-terms" className="px-10">
          <h2 className="text-lightGray text-base font-medium pb-5">
            Terms & Conditions
          </h2>
          <p className="text-lightGray text-xs">
            Please review our terms and conditions before booking your stay.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
