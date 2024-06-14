
import React from "react";


const headerHeight = 80;

export default function HomepageHeader({ pageTitle, pageSubtitle }) {
  return (
    <>
      <header>
      <section
      className="flex items-center xl:justify-between xl:px-32 md:px-32 px-12 justify-center text-nowrap"
      style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
    >
      <div className="text-light-blue-custom font-semibold text-center xl:text-left xl:text-4xl md:text-3xl sm:text-2xl text-xl">
        <div className="flex xl:hidden justify-center">
          <img src="/img/logo-senamun.png" alt="logo senamun"/>
        </div>
        <h1 className="text-yellow-custom xl:text-8xl md:text-7xl sm:text-6xl text-5xl">
          {pageTitle}
        </h1>
        <p className="mb-5">{pageSubtitle}</p>
        <div className="flex items-center gap-4 xl:justify-normal justify-center xl:scale-100 md:scale-100">
          {/* 
<a
  href="/saiba-mais"
  className="text-xl font-medium text-center xl:px-12 xl:py-4 md:px-8 md:py-2 sm:px-4 sm:py-2 px-2 py-2 border-4 border-light-blue-custom rounded-2xl hover:text-white hover:bg-light-blue-custom duration-300"
>
  Saiba Mais
</a>
*/}
        </div>
      </div>
      <div className="hidden custom-xl:block">
        <img src="/img/logo-senamun.png" alt="Logo Senamun"/>
      </div>
    </section>
    </header>
    </>
  );
}