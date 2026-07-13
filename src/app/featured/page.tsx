import SectionTitle from "@/components/SectionTitle";
import Image, { StaticImageData } from "next/image";

import TechPana from "@/assets/images/Featured/techpana.jpg";
import ICTAward from "@/assets/images/Featured/ictaward.jpg";
import StartupAndIdeaFest from "@/assets/images/Featured/startupandideafest.jpg";
import HamroPatro from "@/assets/images/Featured/hamropatro.png";
import ArthaBazar from "@/assets/images/Featured/arthabazar.png";
import OnlinePatrika from "@/assets/images/Featured/onlinepatrika.png";

type FeaturedCard = {
  id: string;
  source: string;
  category?: string;
  date: string;
  title?: string;
  imageUrl?: StaticImageData | string;
  imageAlt?: string;
  images?: { src: string; alt: string }[];
  link?: string;
};

// Sample data - replace with actual featured news data
const featuredNews: FeaturedCard[] = [
  // 1. Hamro Patro
  {
    id: "1",
    source: "Hamro Patro",
    category: "FEATURE",
    date: "December 3, 2025",
    imageUrl: HamroPatro,
    imageAlt:
      "Bridging the Digital Divide: How Cosog Nepal is Revolutionizing Computer Science Education",
    title:
      "Bridging the Digital Divide: How Cosog Nepal is Revolutionizing Computer Science Education",
    link: "https://english.hamropatro.com/news/details/1801855539886753",
  },
  // 2. TechPana
  {
    id: "2",
    source: "TechPana",
    category: "FEATURE",
    date: "June 1, 2025",
    imageUrl: TechPana,
    imageAlt: "Techpana news",
    title: "Computer science students are creating free websites for NGOs",
    link: "https://techpana.com/2025/151116/",
  },
  // 3. Artha Bazar
  {
    id: "3",
    source: "Artha Bazar",
    category: "FEATURE",
    date: "December 2, 2025",
    imageUrl: ArthaBazar,
    imageAlt:
      "Two Teenagers Spark a National Movement in Tech Education Through Cosog Nepal",
    title:
      "Two Teenagers Spark a National Movement in Tech Education Through Cosog Nepal",
    link: "https://arthabazar.com/120226",
  },
  // 4. ICT Award
  {
    id: "4",
    source: "ICT Award",
    category: "FEATURE",
    date: "October 10, 2025",
    imageUrl: ICTAward,
    imageAlt: "Social Innovation ICT Award 2025 Coding for Social Good Nepal",
    title: "Social Innovation ICT Award 2025 Coding for Social Good Nepal",
    link: "https://www.instagram.com/p/DPoB1PEka4p/?img_index=2",
  },
  // 5. Artha Bazar (Online Patrika style story)
  {
    id: "5",
    source: "Online Patrika",
    category: "FEATURE",
    date: "December 2, 2025",
    imageUrl: OnlinePatrika,
    imageAlt:
      "Cosog Nepal: The Youth-Led Movement Transforming CS Education in Nepal",
    title:
      "Cosog Nepal: The Youth-Led Movement Transforming CS Education in Nepal",
    link: "https://english.onlinepatrika.com/posts/2559",
  },
  // 6. Startup And Idea Fest
  {
    id: "6",
    source: "TechPana",
    category: "FEATURE",
    date: "November 6, 2025",
    imageUrl: StartupAndIdeaFest,
    imageAlt: "Startup and Idea Fest 2025",
    title: "Exhibitor for the Startup and Idea Fest 2025",
    link: "https://www.instagram.com/p/DQtNDlPiPzz/",
  },
];

function FeaturedCard({ card }: { card: FeaturedCard }) {
  const cardContent = (
    <div className="group relative h-full bg-white border border-gray-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Media area fills entire card */}
      <div className="relative w-full aspect-[8/11]">
        {/* Image Gallery */}
        {card.images && card.images.length > 0 && (
          <div className="grid grid-cols-2 grid-rows-2 gap-1 h-full w-full">
            {card.images.slice(0, 4).map((img, idx) => (
              <div key={idx} className="relative w-full h-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        )}

        {/* Single Image */}
        {card.imageUrl && (
          <Image
            src={card.imageUrl}
            alt={card.imageAlt || "Featured image"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}

        {/* Optional title overlay; if no title, image occupies complete space */}
        {card.title && (
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-none">
            <div className="inline-block max-w-full bg-black/60 backdrop-blur-[1px] px-3 py-2 rounded">
              <h3 className="text-white font-semibold text-para md:text-mid-title leading-tight line-clamp-2">
                {card.title}
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  if (card.link) {
    return (
      <a
        href={card.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}

export default function FeaturedPage() {
  return (
    <main className="px-standard sm:px-block py-section w-full max-w-content mx-auto">
      <div className="space-y-block">
        <SectionTitle title="Featured In" as="h1" />

        {/* Cards Grid - Responsive: 1 column mobile, 2 columns tablet, 3 columns desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredNews.map((card) => (
            <FeaturedCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </main>
  );
}
