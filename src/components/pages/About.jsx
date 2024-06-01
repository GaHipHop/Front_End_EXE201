import * as React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

function About() {
  return (
    <div className="flex flex-col bg-white">
      {/* Header */}
      <Header />

      <section className="flex overflow-hidden relative justify-center items-center px-16 py-20 w-full tracking-tight text-center min-h-[638px] max-md:px-5 max-md:max-w-full">
        <img
          src="/src/assets/image/1.image.png"
          alt="background image"
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-[1000px] mx-auto px-8">
          <h1 className="text-3xl mb-8 text-white font-poetsen-one">About us</h1>
          <p className="text-lg leading-6 mb-4 text-white font-poetsen-one">
            We are a sales website specializing in providing diverse and rich
            souvenir products. We are proud to bring our customers quality,
            unique and iconic products that represent special places, events or
            memories.
          </p>
          <p className="text-lg leading-6 mb-4 text-white font-poetsen-one">
            With a wide variety of products ranging from souvenirs, jewelry,
            decorations, homewares and more, we guarantee that you will find a
            special gift or item to celebrate and remember special moments in
            your life.
          </p>
          <p className="text-lg leading-6 mb-4 text-white font-poetsen-one">
            We are committed to providing a convenient, fast and reliable
            shopping experience for our customers. Your satisfaction is our
            greatest joy, and we are always willing to serve you wholeheartedly
            and thoughtfully.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;
