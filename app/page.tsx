import { AboutClub } from "./components/AboutClub";
import { AboutUsSection } from "./components/AboutUsSection";
import { PartnerSection } from "./components/PartnerSection";
import { Countdown } from "./components/CountDown";
import { Footer } from "./components/Footer";
import { Header } from "./components/header";
import { HeroSection } from "./components/HeroSection";
import { JudgeSection } from "./components/JudgeSection";
import { MentorSection } from "./components/MentorSection";
import { PrizeSection } from "./components/PrizeSection";
import { SponsoredPrizeSection } from "./components/SponsoredPrizeSection";
import { ThemeSection } from "./components/ThemeSection";
import { WhoSection } from "./components/WhoSection";
import { WorkshopTimeline } from "./components/WorkshopTimeline";
import { BackToTopButton } from "./components/BackToTopButton";

export default function Home() {
	return (
		<div>
			<Header />
			<HeroSection />
			<AboutUsSection />
			<Countdown date={new Date(2024, 10, 11)} />
			<PartnerSection />
			<AboutClub />
			<WhoSection />
			<ThemeSection />
			<WorkshopTimeline />
			<PrizeSection />
			<SponsoredPrizeSection />
			<JudgeSection />
			<MentorSection />
			<BackToTopButton />
			<Footer />
		</div>
	);
}
