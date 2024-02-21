import vehicles from "../../../data/vehicles";
import ProfileAvatar from "./ProfileAvatar";

export const Showcase = ({ userInfo }) => {
  const vehicleIcon = vehicles.find(
    ({ title }) => title === userInfo?.vehicleType
  )?.icon;

  return (
    <>
      <div className="flex items-center gap-5">
        <ProfileAvatar avatarURL={userInfo?.avatarURL} />

        <div>
          <h3 className="text-2xl mb-1">{name}</h3>

          <span className="text-gray-500 border border-grey-500 rounded-lg px-3 font-inter mb-4 inline-block">
            #{userInfo?._id?.slice(0, 5)}
          </span>

          <div className="relative z-10 bg-gradient-to-b from-[#6BFFDA] to-[#00E1A9] pl-4 pr-10 min-[400px]:pr-12 min-[500px]:pr-16 py-3 rounded-full text-xs min-[500px]:text-base h-10 flex items-center">
            <span>
              {(userInfo?.vehicleType &&
                userInfo?.serviceUsage === "ব্যক্তিগত" &&
                userInfo?.vehicleType + " মালিক") ||
                (userInfo?.vehicleType && userInfo?.vehicleType + " রাইডার")}
            </span>
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-16">
              <img
                src={vehicleIcon}
                alt={userInfo?.vehicleType}
                className="w-full"
              />
            </div>
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-24 aspect-square rounded-full bg-secondary opacity-10 p-4 -z-20"></div>
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[76px] aspect-square rounded-full bg-secondary opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </>
  );
};
