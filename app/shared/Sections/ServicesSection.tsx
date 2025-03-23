import Image from "next/image";
import { oneLine } from "common-tags";

const services = [{
    name: "Community Events",
    icon: "/icons/community.svg"
}, {
    name: "Gym Facilities",
    icon: "/icons/gym.svg"
}, {
    name: "High-Speed WiFi",
    icon: "/icons/wifi.svg"
}, {
    name: "Cafe & Tea Bar",
    icon: "/icons/cafe.svg"
}, {
    name: "Affordable",
    icon: "/icons/affordable.svg"
}, {
    name: "Comfort Lounges",
    icon: "/icons/comfort-lounges.svg"
}, {
    name: "Quick Booking",
    icon: "/icons/booking.svg"
}, {
    name: "Sports Area",
    icon: "/icons/sports.svg"
}]

export const ServicesSection = () => {
    return <div className="container mx-auto mb-[120px]">
        <h2 className="mb-[40px]">Why Choose us?</h2>

        <div className={oneLine`
                        grid 
                        grid-cols-2 
                        lg:grid-cols-4 gap-[1px] 
                        lg:bg-[var(--main-dark-grey)]`
        }>
            {services.map((service) => (
                <div key={service.name} className={oneLine`
                                flex 
                                items-center 
                                gap-2 p-4 
                                md:flex-col 
                                lg:flex-row 
                                bg-[var(--background)]
                        `}>
                    <span>
                        <Image src={service.icon} alt={service.name} width={34} height={34} />
                    </span>
                    <span>
                        {service.name}
                    </span>
                </div>
            ))}
        </div>
    </div>
}