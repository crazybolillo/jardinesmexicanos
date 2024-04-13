import Image from "next/image";
import TithoniaBee from "../public/photos/Bee_Tithonia_Rotundifolia.webp";
import FarinaceaBee from "../public/photos/Bee_Salvia_Farinacea.webp";
import AsclepiasButterfly from "../public/photos/Asclepias_Julia_Heliconian.webp";
import Zinnia from "../public/photos/Zinnia_Closeup.webp";

export default function Home() {
  return (
    <main className="h-full flex flex-col">
      <div className="p-4 flex flex-wrap gap-4 justify-center">
        <div className="min-w-80 max-w-96 sm:mb-6 lg:max-w-104">
          <h1 className="text-2xl font-bold mb-2 sm:text-4xl lg:text-6xl sm:mb-4">
            Preservando la naturaleza Mexicana un jardín a la vez.
          </h1>
          <h2 className="text-lg sm:text-2xl lg:text-3xl dark:text-gray-300">
            Al incluir plantas nativas en nuestros jardines reducimos nuestro
            impacto en el medio ambiente y preservamos la naturaleza de México.
          </h2>
        </div>
        <Image
          className="rounded-lg w-96 h-96 lg:w-136 lg:h-136 2xl:w-160 2xl:h-160"
          src={TithoniaBee}
          alt="Abeja sobre girasol Mexicano"
        />
      </div>
      <div className="p-4 flex flex-wrap flex-row-reverse gap-4 justify-center">
        <div className="mb-4 min-w-80 max-w-96 sm:mb-6 lg:max-w-104">
          <h2 className="mb-2 text-2xl font-bold sm:text-3xl xl:text-4xl">
            ¿Qué es un jardín Mexicano?
          </h2>
          <p className="text-xl xl:text-2xl">
            Consideramos un jardín Mexicano como aquel que contiene plantas
            nativas.
            <br />
            <br />
            Actualmente la mayoría de jardines consiste puramente de pasto o
            plantas ornamentales de Europa, Asia y Africa, dejando de lado a las
            plantas originarias de México.
          </p>
        </div>
        <Image
          className="rounded-lg w-96 h-96 lg:w-136 lg:h-136 2xl:w-160 2xl:h-160"
          src={FarinaceaBee}
          alt="Abeja en Salvia Farinacea"
        />
      </div>
      <div className="p-4 flex flex-wrap gap-4 justify-center">
        <div className="mb-4 min-w-80 max-w-96 sm:mb-6 lg:max-w-104">
          <h2 className="mb-2 text-2xl font-bold sm:text-3xl xl:text-4xl">
            ¿Por qué son importantes las plantas nativas?
          </h2>
          <p className="text-xl xl:text-2xl">
            Los animales de nuestro entorno como pájaros, mariposas y abejas
            dependen de ellas. La perdida de plantas nativas significa la
            desaparición de muchos de estos animales.
            <br />
            <br />
            Las abejas las polinizan, las mariposas toman su nectar y los
            pájaros comen sus semillas.
          </p>
        </div>
        <Image
          className="rounded-lg w-96 h-96 lg:w-136 lg:h-136 2xl:w-160 2xl:h-160"
          src={AsclepiasButterfly}
          alt="Mariposa Julia Heliconian sobre Asclepias"
        />
      </div>
      <div className="p-4 flex flex-wrap flex-row-reverse gap-4 justify-center">
        <div className="min-w-80 max-w-96 sm:mb-6 lg:max-w-104">
          <h2 className="mb-2 text-2xl font-bold sm:text-3xl xl:text-4xl">
            ¿Qué ventajas tienen las plantas nativas?
          </h2>
          <p className="text-xl xl:text-2xl">
            Las plantas nativas están diseñadas para crecer en nuestro entorno.
            Esto significa que un jardín mexicano requiere muchos menos cuidados
            e insumos que un jardín convencional.
            <br />
            <br />
            La mayoría de las veces lo unico que estas plantas necesitan para
            florecer es un espacio en tu jardín.
          </p>
        </div>
        <Image
          className="rounded-lg w-96 h-96 lg:w-136 lg:h-136 2xl:w-160 2xl:h-160"
          src={Zinnia}
          alt="Flor de Zinnia elegans"
        />
      </div>
    </main>
  );
}
