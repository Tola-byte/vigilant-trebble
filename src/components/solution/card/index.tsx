import { SolutionCardType } from "../../../data/solution";

export const SolutionCard: React.FC<SolutionCardType> = ({
  body,
  title,
  subtitle,
  image,
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 flex-shrink-0 flex-1 relative  border border-gray-400 border-opacity-40">
      <div className="h-56 -mt-28 flex justify-center mb-6">
        <img src={image} alt={title} className="h-full object-cover" />
      </div>
      <div className="flex flex-col gap-y-5 text-gray-500">
        <h1 className="text-3xl md:text-4xl text-primary font-bold ">
          {title}
        </h1>
        <p className="text-lg">
          Solutions for <br />{" "}
          <span className="font-semibold text-gray-800">{subtitle}</span>
        </p>
        <p className="md:leading-loose md:min-h-[18rem]">{body}</p>
        <div className="">
          <button className="rounded-full py-3 px-6 text-gray-100 bg-primary">
            Find out more
          </button>
        </div>
      </div>
    </div>
  );
};
