import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";

const NewNavigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a href="/public/Recurso3.svg" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-accent flex items-center justify-center transition-transform group-hover:rotate-12">
              <span className="font-Galliso text-2xl font-bold text-background">L</span>
            </div>
            <div className="flex flex-col">
              <span className="font-Galliso text-xl tracking-[0.3em] text-foreground">LEVIER</span>
              <span className="font-inter text-[8px] tracking-[0.2em] text-muted-foreground uppercase">Artisan Foods</span>
            </div>
          </a>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            <a href="#collection" className="font-galliso text-sm tracking-[0.15em] text-foreground uppercase hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-all hover:after:w-full">
              Collection
            </a>
            <a href="#story" className="font-galliso text-sm tracking-[0.15em] text-foreground uppercase hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-all hover:after:w-full">
              Story
            </a>
            <a href="#contact" className="font-galliso text-sm tracking-[0.15em] text-foreground uppercase hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-all hover:after:w-full">
              Contact
            </a>
          </div>

          {/* Cart */}
          <Button variant="ghost" size="icon" className="relative group">
            <ShoppingBag className="h-5 w-5 transition-transform group-hover:scale-110" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-background text-[10px] font-inter font-bold flex items-center justify-center">
              0
            </span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NewNavigation;
