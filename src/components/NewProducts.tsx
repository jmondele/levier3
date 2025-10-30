import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import product1 from "@/assets/2T5A8660.JPEG";
import product2 from "@/assets/2T5A8685.JPEG";
import product3 from "@/assets/2T5A8671.JPEG";
import product4 from "@/assets/2T5A8728.JPEG";

const NewProducts = () => {
  const products = [
    {
      id: 1,
      name: "Dark Chocolate Snackers",
      category: "Premium",
      price: "$24.99",
      image: product1,
    },
    {
      id: 2,
      name: "Classic Caramel Edition",
      category: "Signature",
      price: "$22.99",
      image: product2,
    },
    {
      id: 3,
      name: "Hazelnut Delight",
      category: "Limited",
      price: "$28.99",
      image: product3,
    },
    {
      id: 4,
      name: "Sea Salt Collection",
      category: "Premium",
      price: "$26.99",
      image: product4,
    },
  ];

  return (
    <section id="collection" className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <p className="font-inter text-xs tracking-[0.3em] text-accent uppercase mb-4">
            Our Products
          </p>
          <h2 className="font-playfair text-6xl lg:text-7xl font-light text-foreground mb-6">
            The Collection
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl">
            Each piece carefully crafted to perfection. Discover our range of artisan chocolate snackers.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group bg-card border-border hover:border-accent/50 transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quick Add Button */}
                <Button 
                  size="icon"
                  className="absolute bottom-6 right-6 bg-accent hover:bg-accent/90 text-accent-foreground opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0"
                >
                  <Plus className="h-5 w-5" />
                </Button>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-inter text-xs tracking-wider text-accent uppercase mb-2">
                      {product.category}
                    </p>
                    <h3 className="font-playfair text-2xl text-foreground">
                      {product.name}
                    </h3>
                  </div>
                  <span className="font-playfair text-2xl font-light text-foreground">
                    {product.price}
                  </span>
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full mt-4 border border-border hover:bg-secondary font-inter tracking-wider uppercase text-xs"
                >
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
