"use client";

import { Media, Product } from "@/payload-types";
import Image from "next/image";

interface PageProps {
  image: Media;
  product: Product;
}

const ImgForThankYou = ({ image, product }: PageProps) => {
  return (
    <Image
      // @ts-expect-error
      loader={() => image.url}
      fill
      // @ts-expect-error
      src={image.url}
      alt={`${product.name} image`}
      className="flex-none rounded-md bg-gray-100 object-cover object-center"
    />
  );
};

export default ImgForThankYou;
