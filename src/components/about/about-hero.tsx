"use client";

import { PlayCircle, PlayCircleIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function AboutHero() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <section className="relative mx-auto max-w-7xl md:h-screen max-h-[650px] w-full bg-black text-white px-6 py-24 md:py-32">
      <div className="flex flex-col gap-6 md:hidden">
        <h2 className="text-3xl font-extrabold leading-snug">
          Reimagine <br />{" "}
          <span
            className="
    relative italic z-10 text-white lg:p-2 lg:mt-2 lg:mb-2
    after:content-[''] after:absolute after:w-full after:h-1/2
    after:bg-[url('https://files.mastersunion.link/resources/svg/herosvg.svg')]
    after:bg-no-repeat after:bg-contain
    after:left-0 after:-bottom-[27%] after:z-10
  "
          >
            Way of Trading
          </span>
        </h2>
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg group">
          {!isPlaying ? (
            <>
              {/* Thumbnail */}
              <Image
                src="https://images.unsplash.com/photo-1468971050039-be99497410af?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="journal In 3 Minutes"
                width={600}
                height={340}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500"></div>

              {/* Play Button */}
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <PlayCircle className="w-16 h-16 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
              </button>
            </>
          ) : (
            <div className="w-full h-[340px]">
              <iframe
                className="w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="journal In 3 Minutes"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300">
          At journal, we believe in{" "}
          <span className="font-semibold text-white">
            learning trading by doing trading
          </span>
          . Through collaboration of industry experts and academic leaders, we
          aim to revolutionise trading education with a tech-centric and
          industry-driven approach.
        </p>
      </div>

      {/* ---------- Desktop Layout ---------- */}
      <div className="hidden md:flex relative items-start gap-12">
        <div className="absolute left-[20%] top-16">
          <div className="relative w-[500px] h-[300px] rounded-2xl overflow-hidden shadow-lg group">
            {!isPlaying ? (
              <>
                {/* Thumbnail */}
                <Image
                  src="https://images.unsplash.com/photo-1468971050039-be99497410af?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="journal In 3 Minutes"
                  width={600}
                  height={340}
                  className="w-full object-cover h-full transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500"></div>
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <PlayCircle className="w-16 h-16 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                </button>
              </>
            ) : (
              <div className="w-full h-[340px]">
                <iframe
                  className="w-full h-full rounded-2xl"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="journal In 3 Minutes"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </div>
        {/* Title */}
        <h2 className="text-5xl relative font-extrabold leading-tight">
          Reimagine <br />{" "}
          <span
            className="
    relative italic z-10 text-white lg:p-2 lg:mt-2 lg:mb-2
    after:content-[''] after:absolute after:w-full after:h-1/2
    after:bg-[url('https://files.mastersunion.link/resources/svg/herosvg.svg')]
    after:bg-no-repeat after:bg-contain
    after:left-0 after:-bottom-[27%] after:z-10
  "
          >
            Way of Trading
          </span>
        </h2>

        {/* Goal Card (absolute positioned) */}
        <div className="absolute right-28 top-0 transform translate-x-20">
          <Image
            src="/aboutright.webp"
            alt="Goal Card"
            width={200}
            height={200}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Description (Desktop) */}
      <div className="hidden absolute bottom-12 right-0 md:block mt-6 max-w-xl text-gray-300">
        At journal, we believe in{" "}
        <span className="font-semibold text-white">
          learning trading by doing trading
        </span>
        . Through collaboration of industry experts and academic leaders, we aim
        to revolutionise trading education with a tech-centric and
        industry-driven approach.
      </div>
    </section>
  );
}
