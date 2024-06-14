import React, { useState } from "react";
import HomepageHeader from "../../components/HomepageHeader";
import Layout from "@theme/Layout";

const headerHeight = 80;

const data = [
  {
    titulo: "The Impacts of Arctic Militarization",
    tema: "SC",
    imagem: "/foto1.jpg",
    descricao: "Complexidade da militarização no Ártico.",
    descricaofull: "Arctic militarization is a complex and contentious issue centered around the increased military presence and activities in the Arctic region. Historically characterized by its remoteness and harsh conditions, the Arctic is now witnessing growing strategic interest due to its geopolitical significance, accessibility, and resource potential, fueled by climate change. Nations are investing in military infrastructure, capabilities, and exercises, raising concerns about regional stability, sovereignty, environmental impact, and indigenous rights. This topic explores the balance between security interests, environmental conservation, and cooperation in the Arctic, posing challenges for international diplomacy and governance.",
  },
  {
    titulo: "Discussing the Aftermaths and the Future of the Korean War",
    tema: "HSC",
    imagem: "/foto1.jpg",
    descricao: "Conflito não resolvido na Península Coreana.",
    descricaofull: "The Korean War remains a pivotal and unresolved conflict that divided the Korean Peninsula into North and South Korea. Stemming from the Cold War rivalry between the Soviet Union and the United States, the war erupted in 1950 when North Korean forces, backed by the Soviet Union and China, invaded South Korea. The conflict escalated into a devastating three-year war that ended in an armistice in 1953, but a formal peace treaty was never signed, leaving the two Koreas technically still at war. Decades of tense relations, occasional military clashes, nuclear proliferation by North Korea, and efforts for diplomatic resolution have characterized the ongoing Korean Peninsula issue. Today, it stands as a critical topic in international affairs, posing challenges for peace and stability in Northeast Asia and beyond.",
  },
  {
    titulo: "Regulação do uso de feitiços e magias no mundo mágico da Disney",
    tema: "Special",
    imagem: "/foto1.jpg",
    descricao: "Debate sobre o uso de poderes e encantamentos.",
    descricaofull: "ATENÇÃO, ATENÇÃO! Os estúdios da Disney estão em CRISE. Pela primeira vez os vilões, princesas, príncipes e personagens se reúnem em um inédito crossover para discutir sobre o uso de magias e encantamentos pelos vilões: Eles têm o direito de usar esses poderes? Estão ferindo os direitos humanos? Há direitos humanos nos reinos da Disney? É considerado autodefesa? Em quais situações podem ser usados? Levando em conta os diferentes momentos e reinos em que cada personagem vive, num debate intenso entre a defesa do uso de poderes, magias e venenos contra os direitos das princesas atacadas, o comitê, ou melhor, o castelo abriga os mais famosos personagens do mundo para regulamentar os limites dessas infantarias. Prepare-se para incorporar seu personagem favorito e defender seu reino em um debate mágico e orelhudo!",
  },
  // Adicione mais objetos ao array 'data' conforme necessário
];

export default function ComitesEnglish() {

  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = (item) => {
    setModalData(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Layout>
      <HomepageHeader pageTitle="Comitês" pageSubtitle="Inglês" />
      <div className="h-fit flex flex-col justify-center bg-blue-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-10">
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
                <button
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => openModal(item)}
                >
                  Ver Mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div
              className={`${
                isOpen
                  ? "opacity-100 transition-opacity duration-200"
                  : "opacity-0 transition-opacity duration-300"
              } inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full`}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      {modalData.titulo}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {modalData.descricaofull}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeModal}
                >
                  Fechar
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </Layout>
  );
}
