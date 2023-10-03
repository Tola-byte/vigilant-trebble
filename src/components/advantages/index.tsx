import { FcElectricity, FcApproval, FcLock } from "react-icons/fc";
import { Container } from "../skeleton/container";
import { Slider } from "../slider";

export const Advantages = () => {
  return (
    <div>
      <div className="bg-green_bg bg-cover min-h-[150vh]">
        <Container>
          <div className="flex justify-center mb-20  ">
            <div className="h-[35rem]">
              <img
                src="https://efishery.com/wp-content/uploads/2023/05/efresh.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="pb-80">
            <div className="text-center">
              <h3 className="text-3xl text-gray-100 font-semibold mb-10">
                Advantages of Buying Fish on eFresh
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
              <div className=" h-[25rem] flex justify-center items-center flex-col rounded-xl bg-white border-gray-400 border-opacity-40 p-6">
                <div className="mb-6">
                  <FcElectricity size={80} />
                </div>
                <div className="text-center">
                  <h5 className="text-gray-800 font-semibold mb-2 text-xl">
                    Fast Delivery
                  </h5>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique amet fugit tempora? Labore, enim nesciunt.
                  </p>
                </div>
              </div>
              <div className=" h-[25rem] flex justify-center items-center flex-col rounded-xl bg-white border-gray-400 border-opacity-40 p-6">
                <div className="mb-6">
                  <FcApproval size={80} />
                </div>
                <div className="text-center">
                  <h5 className="text-gray-800 font-semibold mb-2 text-xl">
                    Certified Distributor
                  </h5>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique amet fugit tempora? Labore, enim nesciunt.
                  </p>
                </div>
              </div>
              <div className=" h-[25rem] flex justify-center items-center flex-col rounded-xl bg-white border-gray-400 border-opacity-40 p-6">
                <div className="mb-6">
                  <FcLock size={80} />
                </div>
                <div className="text-center">
                  <h5 className="text-gray-800 font-semibold mb-2 text-xl">
                    Safety
                  </h5>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique amet fugit tempora? Labore, enim nesciunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-yellow_bg min-h-screen -mt-40">
        <div className="pt-56 pb-80">
          <Container>
            <div className="">
              <div className="mb-20">
                <h2 className="text-3xl text-primary font-semibold mb-10">
                  How to Buy Fish on eFresh:
                </h2>
                <div className="">
                  <ul className="list-disc flex flex-col gap-y-4 text-lg text-gray-800">
                    {howToBuyFish.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-y-10 md:flex-row md:gap-y-0 items-center justify-between">
                <div className="md:flex-[0.5]">
                  <img
                    src="https://efishery.com/wp-content/uploads/2022/01/hero-image-lapakan-1.png"
                    alt=""
                  />
                </div>
                <div className="md:flex-[0.5]">
                  <h5 className="text-xl font-semibold text-gray-800 mb-4">
                    Now buying fish is as easy as turning your palm. Visit
                    eFresh to order the fish of your choice right away!
                  </h5>
                  <button className="bg-primary px-12 py-5 rounded-full text-gray-800 font-semibold">
                    Buy it on efresh
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className="bg-white_bg bg-cover -mt-40">
        <Slider />
      </div>
    </div>
  );
};

const howToBuyFish = [
  <p>
    Visit{" "}
    <a href="fresh.efishery.com" className="font-bold">
      fresh.efishery.com
    </a>
  </p>,
  <p>
    Click <b>“To Home”</b>
  </p>,
  <p>Select your current location</p>,
  <p>Select the type of fish to buy</p>,
  <p>
    Click button <span>"Message"</span>
  </p>,
  <p>
    Fill in the order form, and click <b>"Continue"</b>
  </p>,
  <p>
    Check the order details again, if it is correct click <b>"Message"</b>
  </p>,
  <p>
    Insert <b>OTP code</b> that has been sent to your number, then click
    <b>"Continue"</b>
  </p>,
  <p>
    To see a list of your orders, click <b>“View Order Status”</b>
  </p>,
];
