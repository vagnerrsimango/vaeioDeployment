"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import Showcase1 from "@/lib/img/showcase.svg";
import Showcase2 from "@/lib/img/showcase2.svg";
import Showcase3 from "@/lib/img/showcase3.svg";
import Icon1 from "@/lib/img/icon1.svg";
import Icon2 from "@/lib/img/icon2.svg";
import Icon3 from "@/lib/img/icon3.svg";
import Icon4 from "@/lib/img/DropdownIcon.svg";
import Button2 from "./Button2";
import { useState } from "react";

const Guide = () => {
  const [selectBtn, setSelectBtn] = useState(Showcase2);
  const [tab, setTab] = useState("primula");

  const handleBtnClick = () => {
    window.alert("Button clicked!");
  };

  const handleTabChange = (newTab: string) => {
    setTab(newTab);
    updateSelectBtn(newTab);
  };

  const updateSelectBtn = (tab: string) => {
    switch (tab) {
      case "primula":
        setSelectBtn(Showcase2);
        break;
      case "solutionti":
        setSelectBtn(Showcase1);
        break;
      case "consultoria":
        setSelectBtn(Showcase3);
        break;
      default:
        setSelectBtn(Showcase1);
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen flex flex-col items-center justify-center text-center">
      <p className="text-primary-0 text-3xl font-bold">
        CONHEÇA AS NOSSAS SOLUÇÕES PARA A SUA EMPRESA
      </p>

      <div className="flex flex-col-reverse lg:flex-row w-full mt-8 p-8">
        <div className="lg:w-1/2 p-8">
          <div className="flex justify-between mb-6">
            <Button
              type="button"
              title="Prímula"
              icon={Icon1}
              onClick={() => handleTabChange("primula")}
            />
            <Button
              type="button"
              title="Soluções TI"
              icon={Icon2}
              onClick={() => handleTabChange("solutionti")}
            />
            <Button
              type="button"
              title="Consultoria"
              icon={Icon3}
              onClick={() => handleTabChange("consultoria")}
            />
          </div>
          {tab === "primula" ? (
            <div>
              <p className="text-primary-0 font-bold mb-6">O Que É Prímula?</p>
              <p className="text-primary-0 mb-6">
                O Prímula é uma plataforma de gestão de negócios desenvolvida
                para pequenas e médias empresas.
              </p>
              <p className="text-primary-0 font-bold mb-6">
                Principais Módulos
              </p>
              <p className="text-primary-0 mb-6">
                Compras | POS | Comercial | Recursos Humanos | Contabilidade |
                Finanças
              </p>
            </div>
          ) : tab === "solutionti" ? (
            <div>
              <p className="text-primary-0 font-bold mb-6">
                Quais São As Nossas Soluções TI?
              </p>
              <p className="text-primary-0 mb-6">
                É a nossa oferta completa de tecnologia da informação,
                proporcionando websites comerciais e corporativos, aplicativos
                para celulares, sistemas de gestão para empresas, arquitetura de
                softwares e muito mais.
              </p>
              <p className="text-primary-0 font-bold mb-6">
                Principais Módulos
              </p>
              <p className="text-primary-0 mb-6">
                Desenvolvimento Web | Desenvolvimento de Aplicativos | Gestão de
                Sistemas | Arquitetura de Softwares | Etc.
              </p>
            </div>
          ) : tab === "consultoria" ? (
            <div>
              <p className="text-primary-0 font-bold mb-6">
                Que Tipo de Consultoria Oferecemos?
              </p>
              <p className="text-primary-0 mb-6">
                A consultoria oferece serviços especializados para ajudar sua
                empresa a crescer e prosperar. Utilizamos abordagens modernas e
                eficazes para proporcionar soluções personalizadas. Use "client"
                para uma consultoria personalizada.
              </p>
              <p className="text-primary-0 font-bold mb-6">
                Principais Serviços
              </p>
              <p className="text-primary-0 mb-6">
                Consultoria Empresarial | Estratégias de Crescimento |
                Otimização de Processos | Etc.
              </p>
            </div>
          ) : null}
          <Button2 type="button" title="Saber Mais" icon={Icon4} />
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 p-8">
          {/* Just the logo for now */}
          <Image
            src={selectBtn}
            alt="logo"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Guide;
