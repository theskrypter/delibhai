import { BsTelephoneFill } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import dp from "../../../../assets/default.jpg";
import PrimaryButton from "../../../../components/ui/PrimaryButton";
import cn from "../../../../lib/cn.js";
import star from "./star.svg";

export default function Hero({ hero }) {
  const {
    name,
    avatarURL,
    _id,
    mobile,
    isOnline,
    currentDistance,
    isHighlight,
  } = hero;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profile/${_id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex cursor-pointer items-center gap-5 rounded-lg p-4 hover:bg-primary hover:bg-opacity-10 active:bg-primary"
    >
      <div className="relative w-28 rounded-full">
        <img src={avatarURL || dp} alt="name" className="w-full rounded-full" />
        <div
          className={cn(
            "absolute bottom-[5%] right-[5%] aspect-square w-[20%] rounded-full border-2 border-white",
            { "bg-primary": isOnline, "bg-accent": !isOnline },
          )}
        ></div>
      </div>

      <div>
        <h3 className="mb-3 text-xl">{name}</h3>

        <div className="mb-2 flex items-center gap-1 text-gray-700">
          <span>{<GrLocation />}</span>
          <span>{currentDistance} km</span>

          {isHighlight && (
            <span className="flex items-center gap-1">
              <img src={star} alt="" />
              <span>প্রধান স্ট্যাশন</span>
            </span>
          )}
        </div>

        <div className="flex gap-3">
          <Link onClick={(e) => e.stopPropagation()}>
            <PrimaryButton icon={<PiPaperPlaneTiltFill />} />
          </Link>

          <Link to={`tel:${mobile}`} onClick={(e) => e.stopPropagation()}>
            <PrimaryButton icon={<BsTelephoneFill />} />
          </Link>
        </div>
      </div>
    </div>
  );
}
