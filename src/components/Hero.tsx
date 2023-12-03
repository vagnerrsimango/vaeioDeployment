import React from "react";
import Link from "next/link";
import Image from "next/image";
import Circles from "@/lib/img/circles+icons.svg";
import Logo from "@/lib/img/vaeio.png";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 max-container padding-container items-center justify-center  flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row ">
      <Link href="/">
        <div className="relative">
          <Image src={Circles} alt="logo" width={400} height={400} />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-primary-0 text-3xl font-bold">
              SOLUÇÕES PARA O SEU <p className="text-green-400 ">NEGÓCIO</p>
            </p>
            <Image
              src={Logo}
              alt="logo"
              width={200}
              height={200}
              className="mt-4"
            />
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Hero;
