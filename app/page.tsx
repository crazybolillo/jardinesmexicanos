import Image from "next/image";
import { Carousel } from "flowbite-react";

export default function Home() {
  return (
    <main>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={5000}>
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            width={800}
            height={800}
            alt="..."
          />
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            width={800}
            height={800}
            alt="..."
          />
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            width={800}
            height={800}
            alt="..."
          />
        </Carousel>
      </div>
    </main>
  );
}
