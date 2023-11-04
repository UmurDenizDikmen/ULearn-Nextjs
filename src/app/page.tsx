import HeaderSection from "@/components/HeaderSection";
import MemberInfoSection from "@/components/MemberInfoSection";
import AvailableCourses from "@/components/AvailableCourses";
import TeacherSection from "@/components/TeacherSection";
import CounterSection from "@/components/CounterSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeaderSection />
      <MemberInfoSection />
      <AvailableCourses />
      <CounterSection />
      <TeacherSection />
      <Footer />
    </div>
  );
}
