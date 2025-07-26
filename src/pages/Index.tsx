import RetroHero from "@/components/RetroHero";
import AIStorySection from "@/components/AIStorySection";
import InstructorSection from "@/components/InstructorSection";
import BenefitsSection from "@/components/BenefitsSection";
import AchievementsSection from "@/components/AchievementsSection";
import CourseContentSection from "@/components/CourseContentSection";
import BonusSection from "@/components/BonusSection";
import FinalCTASection from "@/components/FinalCTASection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <RetroHero />
      <AIStorySection />
      <InstructorSection />
      <BenefitsSection />
      <AchievementsSection />
      <CourseContentSection />
      <BonusSection />
      <FinalCTASection />
      <FAQSection />
    </div>
  );
};

export default Index;
