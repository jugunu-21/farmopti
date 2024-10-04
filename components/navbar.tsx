"use client"

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useAnimate, motion, AnimationScope } from "framer-motion";
import { FiMenu, FiArrowUpRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import Link from "next/link";
import Gradientbutton from "@/lib/ui/button";

const Example = () => {
  return (
    <section
      className=" h-[16vh] w-full"
    // style={{
    //   backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23171717'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
    // }}
    >
      <GlassNavigation />

      {/* <span className="absolute -top-[600px] left-[50%] h-[800px] w-4/5 max-w-3xl -translate-x-[50%] rounded bg-neutral-900" /> */}
    </section>
  );
};

const GlassNavigation = () => {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [scope, animate] = useAnimate();
  const navRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = ({ offsetX, offsetY, target }: MouseEvent) => {
    // @ts-ignore
    const isNavElement = [...target.classList].includes("glass-nav");

    if (isNavElement) {
      setHovered(true);

      const top = offsetY + "px";
      const left = offsetX + "px";

      animate(scope.current, { top, left }, { duration: 0 });
    } else {
      setHovered(false);
    }
  };

  useEffect(() => {
    navRef.current?.addEventListener("mousemove", handleMouseMove);

    return () =>
      navRef.current?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <nav
      ref={navRef}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: hovered ? "none" : "auto",
      }}
      className="glass-nav fixed bg-white/40 left-0 right-0 top-0 z-10 mx-auto max-w-6xl overflow-hidden border-[1px]  backdrop-blur-lg md:left-6 md:right-6 md:top-6 md:rounded-2xl"
    >
      <div className="glass-nav  z-50 flex items-center justify-between px-5 py-5">
        <Logo />  
        <Cursor hovered={hovered} scope={scope} />

        <Links />



        <Buttons setMenuOpen={setMenuOpen} />
      </div>

      <MobileMenu menuOpen={menuOpen} />
    </nav>
  );
};

const Cursor = ({
  hovered,
  scope,
}: {
  hovered: boolean;
  scope: AnimationScope<any>;
}) => {
  return (
    <motion.span
      initial={false}
      animate={{
        opacity: hovered ? 1 : 0,
        transform: `scale(${hovered ? 1 : 0
          }) translateX(-50%) translateY(-50%)`,
      }}
      transition={{ duration: 0.15 }}
      ref={scope}
      className="pointer-events-none absolute z-0 grid h-[50px] w-[50px] origin-[0px_0px] place-content-center rounded-full bg-gradient-to-br from-green-600 from-40% to-green-400 text-2xl"
    >
      <FiArrowUpRight className="text-black" />
    </motion.span>
  );
};

const Logo = () => {

  return (
    <Link href="/" className=" relative left-0 top-[50%] z-10 text-4xl font-black text-black mix-blend-overlay  ">
      {/* <span onClick={ ()=>router.push("/me")} className="pointer-events-none relative left-0 top-[50%] z-10 text-4xl font-black text-black mix-blend-overlay md:absolute md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%]"> */}
      logo.
    </Link>)
};

const Links = () => (
  <div className="hidden items-center gap-2 md:flex">
    <GlassLink text="Home" Link="/" />  
    <GlassLink text="About Us" Link="/#about" />
    <GlassLink text="Contact" Link="/contact" />
    <GlassLink text="Testimonials" Link="/#testimonials" />
  </div>
);

const GlassLink = ({ text, Link }: { text: string, Link: string }) => {
  return (
    <a
      href={Link}
      className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
    >
      <span className="relative z-10 text-black/90 transition-colors group-hover:text-black">
        {text}
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-black/20 to-black/5 opacity-0 transition-opacity group-hover:opacity-100" />
    </a>
  );
};

const TextLink = ({ text,Link }: { text: string ,Link:string}) => {
  return (
    <a href={Link} className="text-black/90 text-sm transition-colors hover:text-black">
      {text}
    </a>
  );
};

const Buttons = ({
  setMenuOpen,
}: {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => (
  <div className="flex items-center gap-4">
    {/* <div className="hidden md:block">
      <SignInButton />
    </div> */}

    <Gradientbutton text="Sign In" cta="/signIn" />

    <button
      onClick={() => setMenuOpen((pv) => !pv)}
      className="ml-2 block scale-100 text-3xl text-black/90 transition-all hover:scale-105 hover:text-black active:scale-95 md:hidden"
    >
      <FiMenu />
    </button>
  </div>
);

const SignInButton = () => {
  return (
    <button className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95">
      <span className="relative z-10 text-black/90 transition-colors group-hover:text-black">
        Sign in
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-black/20 to-black/5 opacity-0 transition-opacity group-hover:opacity-100" />
    </button>
  );
};

const MobileMenu = ({ menuOpen }: { menuOpen: boolean }) => {
  const [ref, { height }] = useMeasure();
  return (
    <motion.div
      initial={false}
      animate={{
        height: menuOpen ? height : "0px",
      }}
      className="block overflow-hidden md:hidden"
    >
      <div ref={ref} className="flex items-center justify-end px-4 pb-4">
        <div className="flex items-center gap-4">
        <TextLink text="Home" Link="/" />
          <TextLink text="About Us" Link="/#about" />
          <TextLink text="Contact" Link="/contact" />
          <TextLink text="Testimonials" Link="/#testimonials" />
          
        </div>
        {/* <SignInButton /> */}
      </div>
    </motion.div>
  );
};

export default Example;