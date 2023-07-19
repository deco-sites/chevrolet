import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  image: LiveImage;
  alt: string;
}

export default function Header({
  image =
    "https://ik.imagekit.io/decocx/tr:w-1650,h-634/https:/ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1865/13782495-d958-4bea-a45d-2712f72fa1c0",
  alt,
}: Props) {
  return (
    <div>
      <div class="container">
        <Image
          src={image}
          width={1100}
          height={423}
          alt={alt}
        />
      </div>
    </div>
  );
}
