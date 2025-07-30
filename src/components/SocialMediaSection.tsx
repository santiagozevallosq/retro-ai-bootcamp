import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Importa tus imágenes aquí. Asegúrate de que las rutas sean correctas.
import tiktokImage1 from "@/assets/Tiktok-1.jpeg";
import tiktokImage2 from "@/assets/Tiktok-2.jpeg"; // Asumiendo que tienes una segunda imagen
import linkedinImage1 from "@/assets/Linkedin-1.png"; // Asumiendo que tienes una imagen para LinkedIn

const socialMediaContent = [
  {
    platform: "TikTok",
    url: "https://www.tiktok.com/@santiagoinvierte/video/7514165298115644728", // Reemplaza con la URL de tu video de TikTok
    thumbnail: tiktokImage1,
    title: "Mi primer video de TikTok",
  },
  {
    platform: "TikTok",
    url: "https://www.tiktok.com/@santiagoinvierte/video/7499115074527743237", // Reemplaza con la URL de tu video de TikTok
    thumbnail: tiktokImage2,
    title: "Otro video de TikTok",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7338797041294172160/", // Reemplaza con la URL de tu post de LinkedIn
    thumbnail: linkedinImage1,
    title: "Mi post de LinkedIn",
  },
];

const SocialMediaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Mis Redes Sociales
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {socialMediaContent.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6 relative">
                        <img src={item.thumbnail} alt={item.title} className="rounded-lg w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                           <span className="text-white text-lg font-bold">{item.platform}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default SocialMediaSection;