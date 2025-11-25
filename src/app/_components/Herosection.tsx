import React from "react";

const Herosection = () => {
  return (
    <section className="w-screen">
      {/* HERO MEDIA: fixed height: 600px on small, 400px on md+ */}
      <div className="w-full h-[600px] md:h-[600px] overflow-hidden relative">
        <video
          src='./videos/cosog-nepal-hero.mp4'
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        {/* optional dark overlay to make text below readable when media is bright */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* CONTENT: headline + description + CTA */}
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* left: big text block (takes full width on mobile) */}
          <div className="flex-1 text-center max-w-[960px] mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extralight leading-tight text-dark-primary">
              Coding for Social Good Nepal is working to make computer science education
              and coding mainstream in Nepal.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
