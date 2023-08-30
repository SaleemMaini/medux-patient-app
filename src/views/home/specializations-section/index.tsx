import { SpecializationCard } from "@/components/specialization-card";
import { Specialization } from "@/types/specializations";

export const SpecializationsSection = () => {
  const specializations: Specialization[] = [
    {
      img: "/images/specializations/dentist.jpg",
      name: "Dentist",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      img: "/images/specializations/eye.jpg",
      name: "Eyes",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing",
    },
  ];

  return (
    <div className="bg-primary grid grid-cols-3 gap-8 px-10 py-20 min-h-full -mt-1.5">
      {specializations.map((s) => {
        return <SpecializationCard data={s} />;
      })}
    </div>
  );
};
