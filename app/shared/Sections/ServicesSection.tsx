import Image from "next/image";
import { oneLine } from "common-tags";

const services = [
  {
    name: "Community Events",
    icon: "/icons/community.svg",
  },
  {
    name: "Gym Facilities",
    icon: "/icons/gym.svg",
  },
  {
    name: "High-Speed WiFi",
    icon: "/icons/wifi.svg",
  },
  {
    name: "Cafe & Tea Bar",
    icon: "/icons/cafe.svg",
  },
  {
    name: "Affordable",
    icon: "/icons/affordable.svg",
  },
  {
    name: "Comfort Lounges",
    icon: "/icons/comfort-lounges.svg",
  },
  {
    name: "Quick Booking",
    icon: "/icons/booking.svg",
  },
  {
    name: "Sports Area",
    icon: "/icons/sports.svg",
  },
];

export const ServicesSection = () => {
  return (
    <div className="container mx-auto mb-[120px]">
      <h2
        className={oneLine`
          ml-[20px]
          text-[24px]
          lg:text-[36px]
          lg:mb-[40px]
        `}
      >
        Why Choose us?
      </h2>

      <div
        className={oneLine`
                        grid 
                        grid-cols-2 
                        gap-6
                        m-[20px]
                        bg-[var(--background)]
                        lg:grid-cols-4 
                        lg:gap-[1px] 
                        lg:bg-[var(--main-dark-grey)]`}
      >
        {services.map((service) => (
          <div
            key={service.name}
            className={oneLine`
                                flex
                                flex-col 
                                items-center
                                gap-2 
                                p-4 
                                rounded
                                bg-white
                                shadow-[var(--shadow-services-card)]
                                lg:flex-row 
                                lg:bg-[var(--background)]
                                lg:font-[500]
                                lg:font-[18px]
                                lg:rounded-none
                                lg:shadow-none
                        `}
          >
            <div>
              <Image
                src={service.icon}
                alt={service.name}
                width={34}
                height={34}
              />
            </div>
            <div>{service.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
