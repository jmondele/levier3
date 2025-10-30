import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/2T5A8628.JPEG";

const NewHero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-2">
              <p className="font-inter text-xs tracking-[0.3em] text-accent uppercase">
                New Collection 2025
              </p>
              <h1 className="font-galliso text-7xl lg:text-8xl font-light text-foreground leading-none">

                Snackers
              </h1>
            </div>
            
            <p className="font-inter text-lg text-muted-foreground max-w-md leading-relaxed">
              Handcrafted with premium ingredients. Each piece is a testament to traditional craftsmanship meets modern taste.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-galliso tracking-wider uppercase text-sm px-8 group"
              >
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary font-galliso tracking-wider uppercase text-sm px-8"
              >
                Our Story
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-8 border-t border-border/50">
              <div>
                <div className="font-galliso text-3xl  text-foreground">100%</div>
                <div className="font-inter text-xs tracking-wider text-muted-foreground uppercase">Natural</div>
              </div>
              <div>
                <div className="font-galliso text-3xl  text-foreground">15+</div>
                <div className="font-inter text-xs tracking-wider text-muted-foreground uppercase">Years</div>
              </div>
              <div>
                <div className="font-galliso text-3xl  text-foreground">50k+</div>
                <div className="font-inter text-xs tracking-wider text-muted-foreground uppercase">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:h-[600px] h-[400px] animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent blur-3xl" />
            <img 
              src={heroImage} 
              alt="LEVIER chocolate snackers"
              className="relative w-full h-full object-cover"
            />
            <div className="absolute bottom-8 right-8 bg-background/90 backdrop-blur-sm p-6 max-w-xs">
              <p className="font-inter text-xs text-muted-foreground mb-2">Featured Product</p>
              <h3 className="font-galliso text-xl text-foreground mb-1">Dark Chocolate Collection</h3>
              <p className="font-inter text-2xl font-light text-accent">$24.99</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
