import Layout from "@theme/Layout";
import React from "react";
import HomepageHeader from "../../components/HomepageHeader";



const headerHeight = 80;

const data = [
  {
    titulo: "Titulo 1",
    tema: "Tema 1",
    imagem: "/foto1.jpg",
    descricao: "Descrição do primeiro card.",
  },
  {
    titulo: "Titulo 2",
    tema: "Tema 2",
    imagem: "/foto1.jpg",
    descricao: "Descrição do segundo card.",
  },
  {
    titulo: "Titulo 2",
    tema: "Tema 2",
    imagem: "/foto1.jpg",
    descricao: "Descrição do segundo card.",
  },
  {
    titulo: "Titulo 2",
    tema: "Tema 2",
    imagem: "/foto1.jpg",
    descricao: "Descrição do segundo card.",
  },
  {
    titulo: "Titulo 2",
    tema: "Tema 2",
    imagem: "/foto1.jpg",
    descricao: "Descrição do segundo card.",
  },
  {
    titulo: "Titulo 2",
    tema: "Tema 2",
    imagem: "/foto1.jpg",
    descricao: "Descrição do segundo card.",
  },
  {
    titulo: "Titulo 2",
    tema: "Tema 2",
    imagem: "/foto1.jpg",
    descricao: "Descrição do segundo card.",
  },
  {
    titulo: "Titulo 2",
    tema: "Tema 2",
    imagem: "/foto1.jpg",
    descricao: "Descrição do segundo card.",
  },
  {
    titulo: "Titulo 2",
    tema: "Tema 2",
    imagem: "/foto1.jpg",
    descricao: "Descrição do segundo card.",
  },
  // Adicione mais objetos ao array 'data' conforme necessário
];

export default function ComitesPortugues() {
  return (
    <Layout>
    <section>

      <HomepageHeader pageTitle="Comitês" pageSubtitle="Português" />

      <div className="h-fit flex flex-col justify-center bg-blue-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 custom-xl:gap-8 gap-4 p-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                className="w-full h-48 object-cover object-center"
                src={item.imagem}
                alt={item.titulo}
                width={300}
                height={300}
              />
              <div className="p-4">
                <h1 className="text-xl font-bold mb-2">{item.titulo}</h1>
                <h2 className="text-gray-600 text-sm mb-2">{item.tema}</h2>
                <p className="text-gray-700">{item.descricao}</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Saiba Mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Layout>
  );
}
