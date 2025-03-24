import { HomeSection } from "./shared/Sections/HomeSection";
import { ServicesSection } from "./shared/Sections/ServicesSection";
import { SpacesSection } from "./shared/Sections/SpacesSection";
import { DownloadOurApp } from "./shared/Sections/DownloadsSection";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <ServicesSection />
      <SpacesSection />
      <DownloadOurApp />
    </main>
  );
}
