import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Footer() {
  return (
    <div className="h-20 bg-blue-custom items-center flex justify-center bottom-0">
      <div className="flex justify-center items-center flex-col opacity-65 ">
        <p className="text-white">SenaMUN © Todos direitos reservados.</p>
        <div className="flex text-white gap-3 text-xl">
          <a href={"https://www.instagram.com/senamun_/"}>
            <FaInstagram />
          </a>
          <a href={"mailto:senacmun@gmail.com"}>
            <IoIosMail />
          </a>
          <a href={"https://www.tiktok.com/@senacmun"}>
            <FaTiktok />
          </a>
        </div>
      </div>
    </div>
  );
}
