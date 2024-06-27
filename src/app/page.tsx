"use client";
import CommunitySection from "@/components/CommunitySection";
import FirstTimerSection from "@/components/FirstTimerSection";
import PrayerFormComponent from "@/components/PrayerFormComponent";
import BookSection from "@/components/home-components/BookSection";
import EventsComponent from "@/components/home-components/EventsComponent";
import HomeTopComponent from "@/components/home-components/HomeTopComponent";
import Mandate from "@/components/home-components/Mandate";
import ProgramSection from "@/components/home-components/ProgramSection";
import TestimoniesComponent from "@/components/home-components/TestimoniesComponent";
import WinnerSection from "@/components/home-components/WinnerSection";

export default function Home() {
  return (
    <main>
      <HomeTopComponent />
      <Mandate />
      <WinnerSection />
      <BookSection />
      <ProgramSection />
      <EventsComponent />
      <TestimoniesComponent />
      <FirstTimerSection />
      <CommunitySection />
      <PrayerFormComponent />
    </main>
  );
}
