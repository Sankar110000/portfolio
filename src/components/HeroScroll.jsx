"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="overflow-hidden hidden xl:scale-120 lg:block">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Crafting Beautiful UIs <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none tracking-tight">
                That Users Love
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`/tab-pic.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
