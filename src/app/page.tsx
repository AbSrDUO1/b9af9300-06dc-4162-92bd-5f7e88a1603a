"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  { "id": "pizza-hero", "url": "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A mouthwatering slice of pepperoni pizza with cheese and spices, ideal for any meal." },
  { "id": "pizzeria-team", "url": "https://images.pexels.com/photos/6605254/pexels-photo-6605254.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A cheerful chef engages with a couple in a cozy pizzeria, creating a welcoming atmosphere." },
  { "id": "customer-testimonial-1", "url": "https://images.pexels.com/photos/7315008/pexels-photo-7315008.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A young woman smiling while savoring a slice of pizza in her living room." },
  { "id": "customer-testimonial-2", "url": "https://images.pexels.com/photos/4126797/pexels-photo-4126797.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Two women enjoying pizza and beer in a cozy kitchen setting." },
  { "id": "customer-testimonial-3", "url": "https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A group of diverse friends laughing and enjoying pizza together indoors." },
  { "id": "customer-testimonial-4", "url": "https://images.pexels.com/photos/30688912/pexels-photo-30688912.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A woman enjoying grocery shopping in a vibrant Lagos supermarket aisle." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant={"text-stagger"}
      defaultTextAnimation={"background-highlight"}
      borderRadius={"rounded"}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="/assets/logo.png"
          brandName="Pizzeria"
          buttonText="Contact Us"
        />
      </div>
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Welcome to Our Pizzeria"
          description="Delicious, Authentic Italian Pizzas"
          imageSrc={assetMap.find((a) => a.id === "pizza-hero")?.url}
          buttonContainerClassName="flex justify-center gap-4"
          buttons={[{ text: "Order Now", href: "contact" }, { text: "View Menu", href: "menu" }]}
        />
      </div>
      <div id="about" data-section="about">
        <TextAbout
          title="Experience the Taste of Tradition at Our Pizzeria"
          buttons={[{ text: "Learn More", href: "about" }]}
        />
      </div>
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Hear from our happy customers"
          testimonials={[
            { id: "1", name: "Sarah Johnson", role: "Food Blogger", rating: 5, imageSrc: assetMap.find((a) => a.id === "customer-testimonial-1")?.url },
            { id: "2", name: "Michael Chen", role: "Local Guide", rating: 5, imageSrc: assetMap.find((a) => a.id === "customer-testimonial-2")?.url },
            { id: "3", name: "Emily Rodriguez", role: "Pizza Lover", rating: 5, imageSrc: assetMap.find((a) => a.id === "customer-testimonial-3")?.url },
            { id: "4", name: "David Kim", role: "Family Man", rating: 5, imageSrc: assetMap.find((a) => a.id === "customer-testimonial-4")?.url }
          ]}
        />
      </div>
      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Locals And Visitors Alike"
          description="Join those who trust our delicious offerings"
          logos={["asset://microsoft-logo", "asset://google-logo", "asset://apple-logo", "asset://amazon-logo", "asset://adobe-logo", "asset://netflix-logo", "asset://spotify-logo"]}
        />
      </div>
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          title="Stay Updated"
          description="Receive delicious offers and updates"
          imageSrc={assetMap.find((a) => a.id === "pizzeria-team")?.url}
          onSubmit={(email) => console.log(email)}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            { title: "About", items: [{ label: "Our Story", href: "about" }, { label: "Contact Us", href: "contact" }] },
            { title: "Menu", items: [{ label: "Pizzas", href: "menu" }, { label: "Desserts", href: "menu#desserts" }] }
          ]}
          logoSrc="/assets/logo.png"
        />
      </div>
    </ThemeProvider>
  );
}