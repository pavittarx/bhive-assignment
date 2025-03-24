"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { oneLine } from "common-tags";
import Image from "next/image";
import { useEffect, useState } from "react";

type DayPassDiscount = {
  value: number;
  message: string;
};

type DayPassDiscounts = {
  [key: string]: DayPassDiscount;
};

type Space = {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  google_maps_url: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  description: string | null;
  rules: string | null;
  amenities: string[];
  images: string[];
  working_hours_start: string;
  working_hours_end: string;
  contact_person_name: string;
  facilities: string | null;
  is_active: boolean;
  is_day_pass_enabled: boolean;
  day_pass_price: number;
  day_pass_discounts_percentage: DayPassDiscounts;
  manager_id: string | null;
};

export const SpacesSection = () => {
  const [spaces, setSpaces] = useState<Space[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setSpaces(data))
      .catch((error) => console.error("Error fetching spaces:", error));
  }, []);

  console.log(spaces);

  return (
    <section className="container mx-auto mb-[120px]">
      <h2 className={oneLine`
          ml-[20px]
          text-[24px]
          lg:text-[36px]
          lg:mb-[40px]
        `}>Our Space Overview</h2>
      <div
        className={oneLine`
                        mx-[20px]
                        grid 
                        grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-4 gap-[20px] 
                        `}
      >
        {spaces.map((space) => {
          const perDayDiscount =
            space.day_pass_price *
            (space.day_pass_discounts_percentage[1].value / 100);

          const bulkDiscount =
            space.day_pass_price *
            (space.day_pass_discounts_percentage[10].value / 100);

          const perDayPrice = space.day_pass_price - perDayDiscount;
          const bulkPassPrice = 10 * (space.day_pass_price - bulkDiscount);

          return (
            <Card key={space.id} className="overflow-hidden">
              <CardHeader className="">
                <div className="flex items-center justify-between">
                  <h4>{space.name}</h4>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-[var(--main-grey)] border border-[var(--main-grey)]"
                  >
                    <Image
                      src={"/icons/directions.svg"}
                      height={18}
                      width={18}
                      alt="directions"
                    />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="p-4 relative">
                <Image
                  src={"/" + space.images[0]}
                  alt={space.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded"
                />
                <Badge
                  className={oneLine`
                    absolute 
                    top-6
                    left-6 
                    z-1 
                    px-3 
                    py-1 
                    rounded-sm 
                    text-[var(--main)] 
                    bg-[linear-gradient(var(--badge-gradient))]
                    `}
                >
                  Workspace
                </Badge>
              </CardContent>

              <CardFooter className="flex gap-2">
                <Button variant="secondary" className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[14px] text-[var(--text-secondary)]">
                        Day Pass
                      </div>
                      <div className="font-bold text-[20px] text-[var(--text-main)]">
                        ₹ {perDayPrice}
                        <span className="text-[12px] text-[var(--text-secondary)] font-normal">
                          /Day
                        </span>
                      </div>
                    </div>
                    <Image src="/icons/arrow-1.svg" alt="arrow" width={20} height={20} />
                  </div>
                </Button>

                <Button variant="primary" className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[14px]">Bulk Pass</div>
                      <div className="font-bold text-[20px]">
                        ₹ {bulkPassPrice}
                        <span className="text-[12px] font-normal">/10 Days</span>
                      </div>
                    </div>
                    <Image src="/icons/arrow-2.svg" alt="arrow" width={20} height={20} />
                  </div>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
