import { Button } from "./ui/button";
import { Input } from "./ui/input";

const NewNewsletter = () => {
  return (
    <section id="contact" className="py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-inter text-xs tracking-[0.3em] text-accent uppercase mb-4">
            Stay Updated
          </p>
          <h2 className="font-playfair text-5xl lg:text-6xl font-light text-foreground mb-6">
            Join Our Community
          </h2>
          <p className="font-inter text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Subscribe to receive exclusive offers, new product launches, and artisan stories directly to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="bg-background border-border text-foreground placeholder:text-muted-foreground font-inter h-12"
            />
            <Button 
              type="submit"
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-inter tracking-wider uppercase text-sm px-8 whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>

          <p className="font-inter text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewNewsletter;
