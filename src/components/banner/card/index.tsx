import { BannerCardsType } from "../../../data/banner";

export const BannerCard: React.FC<BannerCardsType> = ({
  body,
  icon,
  subTitle,
  title,
}) => {
  return (
    <div className="text-white flex gap-x-4">
      <div className="">
        <img src={icon} alt={title} className="w-16" />
      </div>
      <div className="flex flex-col gap-y-1">
        <h6>{subTitle}</h6>
        <h3 className="text-xl text-primary font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm">{body}</p>
      </div>
    </div>
  );
};
