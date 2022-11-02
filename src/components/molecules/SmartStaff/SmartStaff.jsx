import Heading from "../../atoms/Heading";
import Text from "../../atoms/Text";
import SmartImage from "../../atoms/SmartImage";

export const SmartStaff = ({ members }) => {
  const { teamMembers } = members;

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 containerBox gap-8">
      {teamMembers.map((teamMember) => (
        <div key={teamMember.id} className="relative">
          <div className="">
            <SmartImage
              src={teamMember.photo.url}
              width={teamMember.photo.width}
              height={teamMember.photo.height}
              className=""
              fit="scale"
            />
          </div>
          <div className="w-full h-full absolute inset-0 p-4 flex flex-col justify-end bg-black/40 xl:opacity-0 hover:opacity-100 transition-all delay-150 ease-in-out text-center md:text-left">
            <Heading className="!text-white/70">{teamMember.fullName}</Heading>
            <Text level={2} className="!text-white/70">
              {teamMember.position}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
};
