import NewNavigation from "@/components/NewNavigation";
import NewHero from "@/components/NewHero";
import NewProducts from "@/components/NewProducts";
import NewFeatures from "@/components/NewFeatures";
import NewStory from "@/components/NewStory";
import NewNewsletter from "@/components/NewNewsletter";
import NewFooter from "@/components/NewFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NewNavigation />
      <NewHero />
      <NewFeatures />
      <NewProducts />
      <NewStory />
      <NewNewsletter />
      <NewFooter />
    </div>
  );
};

export default Index;
