  "use client"
import OppoScroll from "@/components/slideshow";
import  ShuffleHero from "@/components/hero"
import ScrollingTestimonials from "@/components/testimonials";
import { StickyCards } from "@/components/stickycard";
import Newsletter from "@/components/newsletter";
import Benefits from "@/components/benefits";
import {BasicFAQ}from "@/components/faq";
export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div >
    <ShuffleHero/>
    <OppoScroll/>
    <StickyCards/>
    <Benefits/>
    <ScrollingTestimonials/>
    <BasicFAQ/>
    <Newsletter/>
    </div>
  );
}
