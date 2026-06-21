"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ComingSoonPage = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/coming-soon-bg.jpg"
          alt="Inside Films background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Logo top center */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2">
        <Image
          src="/images/Insidepro_logo4w.png"
          alt="Inside Pro Studio Logo"
          width={240}
          height={160}
          className="object-contain"
          priority
        />
      </div>

      {/* Main content - centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-[10rem] font-bold tracking-wider uppercase w-full"
          style={{
            fontFamily: "var(--bebas-neue), 'Bebas Neue', sans-serif",
            lineHeight: "140px",
          }}
        >
          WE <span className="italic">CREATE</span>
          <br />
          IMAGES
          <br />
          THAT STAY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 text-sm md:text-3xl tracking-[0.3em] uppercase text-white/80"
        >
          New website coming soon
        </motion.p>
      </div>
    </section>
  );
};

export default ComingSoonPage;
