import { Button } from "./ui/button";
import heroImage from "@/assets/2T5A8628.JPEG";

const NewStory = () => {
  return (
    <section id="story" className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative h-[600px] order-2 lg:order-1">
            <div className="absolute inset-0 border border-border" />
            <img 
              src={heroImage} 
              alt="LEVIER story"
              className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <p className="font-inter text-xs tracking-[0.3em] text-accent uppercase mb-4">
                Since 2009
              </p>
              <h2 className="font-playfair text-6xl lg:text-7xl font-light text-foreground mb-6">
                Our Story
              </h2>
            </div>

            <div className="space-y-6 font-inter text-base text-muted-foreground leading-relaxed">
              <p>
                LEVIER began in a small kitchen with a simple mission: to create chocolate snackers 
                that honor traditional craftsmanship while embracing modern innovation.
              </p>
              <p>
                Every piece we create is a labor of love, carefully crafted by skilled artisans who 
                have dedicated their lives to perfecting the art of chocolate making.
              </p>
              <p>
                Today, we continue to uphold these values, ensuring that each product that bears the 
                LEVIER name is nothing short of exceptional.
              </p>
            </div>

            <Button 
              variant="outline"
              size="lg"
              className="border-border hover:bg-secondary font-inter tracking-wider uppercase text-sm px-8"
            >
              Read Full Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewStory;
