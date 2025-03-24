/* eslint-disable @next/next/no-img-element */
import { oneLine } from "common-tags";

export const HomeSection = () => {
  return (
    <div
      className={oneLine`
        container
        mx-auto
        relative
        lg:flex
        mb-10
      `}
    >
      <div
        className={oneLine`
          relative
          w-full
          overflow-hidden
          md:hidden
          lg:block
        `}
      >
        <img src="/bg-main-1.png" alt="Background" className="absolute top-0" />
      </div>

      <div
        className={oneLine`
            lg:h-[500px]
            lg:w-[500px] 
            `}
      >
        <img
          src="/bg-main-2-rbg.png"
          alt="BHIVE Coworking"
          className={oneLine`
              w-full
              lg:w-auto
              lg:absolute 
              lg:top-0`}
        />
      </div>

      <h1
        className={oneLine`
          w-full
          
          text-base
          font-[600]
          text-[20px]
          text-center
          mx-auto
          max-w-[400px]
          lg:mx-none
          lg:max-w-3xl
          lg:text-left
          lg:text-[56px]
          lg:font-bold
          lg:absolute
          lg:top-20
        `}
      >
        Host your meeting with world-class amenities. Starting at{" "}
        <span
          className={oneLine`
            text-[var(--primary-2)]
          `}
        >
          ₹199/-!
        </span>
      </h1>
    </div>
  );
};
