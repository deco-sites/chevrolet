import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { RequestURLParam } from "deco-sites/std/functions/requestToParam.ts";
import type { Vehicles } from "deco-sites/chevrolet/components/types.ts";

import type { SectionProps } from "$live/mod.ts";

import { Head } from "$fresh/runtime.ts";

import Gallery from "deco-sites/chevrolet/components/ui/Gallery.tsx";

export interface StoreInformations {
  idLoja: string;
  logo: LiveImage;
  banner: LiveImage;
  bannerAlt: string;
  title: string;
  subtitle: string;
  text: string;
  whatsapp: string;
  label: string;
}

export interface Props {
  stores: StoreInformations[];
}

export default function StoresHome(
  { stores }: Props,
) {
  return (
    <div>
    </div>
  );
}
