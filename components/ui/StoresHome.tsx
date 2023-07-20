import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { RequestURLParam } from "deco-sites/std/functions/requestToParam.ts";

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
  { store, vehicles }: SectionProps<typeof loader>,
) {
  if (store) {
    const { idLoja, title, subtitle, text, logo, banner, bannerAlt, whatsapp } =
      store;
    return (
      <>
        <Head>
          <title>{title}</title>
          <link rel="icon" type="image/png" href={logo}></link>
        </Head>
        <div>
          <div class="container px-12 py-7 flex justify-center">
            <Image
              src={logo}
              width={200}
              alt={title}
            />
          </div>
          <div class="container">
            <Image
              src={banner}
              width={1100}
              alt={bannerAlt}
            />
          </div>
          <div class="container text-center">
            <h1 class="text-[44px] my-3 louis-bold text-black">{title}</h1>
            <h2 class="text-[30px]">{subtitle}</h2>
            <p class="text-[20px] louis-bold text-[#1a1b1f] opacity-60">
              {text}
            </p>
          </div>
          <Gallery vehicles={vehicles} idLoja={idLoja} whatsapp={whatsapp} />
        </div>
      </>
    );
  }

  return (
    <div>
      <div class="container text-center">
        <h1 class="text-[64px] py-5">Dados da loja não cadastrados</h1>
      </div>
    </div>
  );
}

export const loader = async (
  { stores = [] }: Props,
  req: Request,
) => {
  const idAtUrl = req.url.split("/store/")[1];
  const store = stores.find(({ idLoja }) => idLoja == idAtUrl);

  const response = await fetch(
    `https://autogestor-dealers.s3.us-west-2.amazonaws.com/${idAtUrl}/portals/dealersites/vehicles.json`,
  );
  const vehicles = await response.json();

  return { store, vehicles };
};
