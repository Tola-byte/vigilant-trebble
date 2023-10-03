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
        <div className="flex gap-5 ">
          <button className="rounded-full py-2 px-4 text-gray-100 bg-[#038767]">
            Find out more
          </button>
          <img decoding="async" width="146" height="250" src="https://efishery.com/wp-content/uploads/2023/06/id_badge_web_generic-2.png" 
          className="attachment-full size-full wp-image-16088" alt="" 
          srcSet="https://efishery.com/wp-content/uploads/2023/06/id_badge_web_generic-2.png 646w, 
          https://efishery.com/wp-content/uploads/2023/06/id_badge_web_generic-2-300x116.png 300w, 
          https://efishery.com/wp-content/uploads/2023/06/id_badge_web_generic-2-18x7.png 18w,
           https://efishery.com/wp-content/uploads/2023/06/id_badge_web_generic-2-600x232.png 600w" sizes="(max-width: 646px) 100vw, 646px" />
        </div>
      </div>
    </div>
  );
};
