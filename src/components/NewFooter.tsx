import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

const NewFooter = () => {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent flex items-center justify-center">
                <span className="font-playfair text-2xl font-bold text-background">L</span>
              </div>
              <div className="flex flex-col">
                <span className="font-playfair text-xl tracking-[0.3em] text-foreground">LEVIER</span>
                <span className="font-inter text-[8px] tracking-[0.2em] text-muted-foreground uppercase">Artisan Foods</span>
              </div>
            </div>
            <p className="font-inter text-sm text-muted-foreground max-w-md leading-relaxed mb-6">
              Crafting exceptional chocolate snackers with passion and precision since 2009. 
              Every piece tells a story of dedication to quality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-border hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all group">
                <Instagram className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 border border-border hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all group">
                <Facebook className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 border border-border hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all group">
                <Twitter className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 border border-border hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all group">
                <Mail className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-inter text-xs tracking-[0.2em] text-foreground uppercase mb-6">Shop</h3>
            <ul className="space-y-3 font-inter text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Gift Sets
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-inter text-xs tracking-[0.2em] text-foreground uppercase mb-6">Company</h3>
            <ul className="space-y-3 font-inter text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-xs text-muted-foreground">
            © 2024 LEVIER. All rights reserved.
          </p>
          <div className="flex gap-8 font-inter text-xs text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
