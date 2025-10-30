import { Award, Leaf, Heart, Shield } from "lucide-react";

const NewFeatures = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Only the finest ingredients sourced from sustainable farms worldwide",
    },
    {
      icon: Leaf,
      title: "100% Natural",
      description: "No artificial preservatives, colors, or flavors in our products",
    },
    {
      icon: Heart,
      title: "Handcrafted",
      description: "Each piece is carefully made by our skilled artisans",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Rigorous testing ensures every batch meets our high standards",
    },
  ];

  return (
    <section className="py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-playfair text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewFeatures;
