import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { FeaturedVendorsSection } from "@/components/sections/FeaturedVendorsSection";
import { HeroSection } from "@/components/sections/HeroSection";

function App() {
    return (
        <div
            className="min-h-screen"
            style={{ backgroundColor: "var(--sw-cream)" }}
        >
            <Navbar />
            <main>
                <HeroSection />
                <CategoriesSection />
                <FeaturedVendorsSection />
            </main>
            <Footer />
        </div>
    );
}

export default App;
