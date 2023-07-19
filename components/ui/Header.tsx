import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  logo: LiveImage;
  alt: string;
}

export default function Header({
  logo =
    "https://ik.imagekit.io/decocx/tr:w-670,h-162/https:/ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1865/987ec194-5ca8-444e-bd37-45abddd7f8ac",
  alt,
}: Props) {
  return (
    <div>
      <div class="container px-12 py-7">
        <Image
          src={logo}
          width={335}
          height={81}
          alt={alt}
        />
      </div>
    </div>
  );
}
