import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export const DownloadOurApp = () => {
  return (
    <section className="container mx-auto mb-[120px]">
      <h2 className="mb-[40px]">Download our app now</h2>
      <div>
        <Card className="mt-[180px] pt-20">
          <CardContent className="flex relative justify-between">
            <div className="flex-1">
              <Image
                className="absolute bottom-[-14px]"
                src="/appsimage.jpg"
                alt="app store"
                width={400}
                height={350}
              />
            </div>
            <div className="flex-1">
              <p className="text-[20px] leading-[28px] w-[586px] text-[var(--text-tertiary)]">
                Boost your productivity with the BHIVE Workspace app. <br /> 
                Elevate your workspace, collaborate efficiently, and unlock 
                exclusive perks.
              </p>
              <div className="flex gap-4">
                <Link href="https://play.google.com">
                  <Image
                    src="/googleplay.png"
                    alt="google play"
                    width={146}
                    height={45}
                  />
                </Link>
                <Link href="https://appstore.com">
                  <Image
                    src="/appstore.png"
                    alt="app store"
                    width={145}
                    height={45}
                  />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
