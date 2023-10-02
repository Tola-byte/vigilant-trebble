import { Link } from "react-router-dom";
import { BsInstagram, BsTwitter, BsLinkedin, BsFacebook } from "react-icons/bs";
import { FooterLink, footerData } from "../../../data/footer";
import { Container } from "../container";

export const Footer = () => {
  return (
    <footer className="bg-[#379477] py-12">
      <Container>
        <div className="flex flex-col gap-y-10">
          <div className="">
            <img
              src="https://efishery.com/wp-content/uploads/2021/10/logo.png"
              alt="eFishery"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-y-10 md:gap-y-0 justify-between">
            {footerLink(footerData.companyLinks)}
            {footerLink(footerData.productLinks)}
            {footerLink(footerData.joinFisheryLinks)}
            <div className="flex-shrink-0 flex-1">
              <div className="mb-5">
                <h5 className="text-xl text-[#ffec94] font-bold mb-6">
                  eFishery Technoplex
                </h5>
                <h2 className=" text-lg font-semibold text-gray-100 mb-2">
                  PT Multidaya Teknologi Nusantara
                </h2>
                <p className="text-gray-100 text-sm">
                  Jl. Malabar No. 37, Samoja, District. Batununggal, Bandung
                  City, West Java 40273
                </p>
              </div>
              <div className="">
                <h5 className="text-[#ffec94] text-lg font-semibold ">
                  Download Our Apps
                </h5>
                <div className="-ml-5">
                  <img
                    src="https://efishery.com/wp-content/uploads/2022/10/google-play-badge-300x116.png"
                    alt=""
                    className="h-20 cursor-pointer"
                  />
                </div>
                <div className="">
                  <h5 className="mb-4 text-[#ffec94] text-lg font-semibold">
                    Follow Us:
                  </h5>
                  <div className="flex gap-x-6 items-center">
                    {[BsInstagram, BsTwitter, BsLinkedin, BsFacebook].map(
                      (Icon, idx) => (
                        <a key={idx} href="#">
                          <Icon className="text-gray-100 w-8 h-8" />
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center border-t border-gray-200 border-opacity-50 pt-6">
            <p className="text-gray-100">
              &copy; {new Date().getFullYear()} eFishery | eFishery is a
              trademark of PT Multidaya Teknologi
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

const footerLink = (link: FooterLink) => {
  return (
    <div className="flex-shrink-0 flex-1">
      <h5 className="text-xl text-[#ffec94] font-bold mb-6">{link.title}</h5>
      <div className="">
        <ul className="flex flex-col gap-y-4">
          {link.data.map((item) => (
            <li key={item.id}>
              <Link to={item.path} className="text-gray-100 hover:underline">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
