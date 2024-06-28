import FirstTimerSection from "@/components/FirstTimerSection";
import PrayerFormComponent from "@/components/PrayerFormComponent";
import SubscribeSection from "@/components/SubscribeSection";
import AboutTopComponent from "@/components/about-components/AboutTopComponent";
import ArticlesSection from "@/components/about-components/ArticlesSection";

export default function Page() {
  return (
    <>
      <AboutTopComponent />
      <ArticlesSection />
      <FirstTimerSection />
      <PrayerFormComponent />
      <SubscribeSection />
    </>
  );
}
