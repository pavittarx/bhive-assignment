import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto"> 
      <div className="container mx-auto flex relative">
        <div className="relative w-full overflow-hidden">
          <img
            src="/bg-main-1.png" 
            alt="Background"
            className="absolute top-0"
          />
        </div>

        <div className="w-[500px] h-[500px]">
          <img 
            src="/bg-main-2-rbg.png" 
            alt="BHIVE Coworking" 
            className="absolute top-0"
          />
        </div>

        <h1 className="absolute w-full max-w-3xl font-bold top-20">
        Host your meeting with world-class amenities. Starting at <span className="text-[var(--primary-2)]">₹199/-!</span>
      </h1>
      </div>
    </main>
  );
}