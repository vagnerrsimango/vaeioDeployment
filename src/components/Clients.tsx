import React from "react";
import Image from "next/image";
import logo1 from "@/lib/img/logo1.png";
import logo2 from "@/lib/img/logo2.png";
import logo3 from "@/lib/img/logo3.png";
import logo4 from "@/lib/img/logo4.png";
import logo5 from "@/lib/img/logo5.png";

const Clients = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen flex flex-col items-center justify-center text-center">
      <p className="text-primary-0 text-3xl font-bold mb-8">NOSSOS CLIENTES</p>

      <div className="flex flex-row items-center">
        <div className="m-6">
          <Image src={logo4} alt="Client Logo 1" width={150} height={150} />
        </div>
        <div className="m-6">
          <Image src={logo4} alt="Client Logo 2" width={150} height={150} />
        </div>
        <div className="m-6">
          <Image src={logo4} alt="Client Logo 3" width={150} height={150} />
        </div>
        <div className="m-6">
          <Image src={logo4} alt="Client Logo 4" width={150} height={150} />
        </div>
        <div>
          <Image src={logo4} alt="Client Logo 5" width={150} height={150} />
        </div>
      </div>
    </section>
  );
};

export default Clients;
