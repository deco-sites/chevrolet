import type { LoaderReturnType } from "$live/types.ts";
import type { PlpReturn } from "deco-sites/chevrolet/components/types.ts";

import Image from "deco-sites/std/components/Image.tsx";

import type {
  Vehicle,
  Vehicles,
} from "deco-sites/chevrolet/components/types.ts";

export interface Props {
  page: LoaderReturnType<PlpReturn | null>;
}

export default function Gallery({ page }: Props) {
  if (page) {
    return (
      <div class="pt-5">
        <div class="container flex flex-wrap gap-2">
          {page.result.map((vehicle: Vehicle) => {
            return <ProductCard vehicle={vehicle} idLoja={page.idLoja} />;
          })}
        </div>
      </div>
    );
  }
}

export function ProductCard(
  { vehicle, idLoja }: { vehicle: Vehicle; idLoja: string },
) {
  return (
    <div class="p-5 flex flex-col items-center w-[calc(50%-8px)] shadow">
      <h3 class="text-[34px] text-black louis-bold text-center">
        {vehicle.model.toUpperCase()}
      </h3>
      <span class="text-[22px] text-[#d1ad57]">R${vehicle.price}</span>
      <div class="px-8">
        <Image
          src={vehicle.images[0]}
          width={516}
        />
        <div class="flex flex-col gap-3 py-3">
          <a
            href={`/${idLoja}/${vehicle.title.replaceAll(" ", "-")}`}
            class="bg-[#d1ad57] text-[white] tracking-[3px] w-full py-2.5 flex justify-center items-center"
          >
            Tenho interesse
          </a>
          <a
            href={`/${idLoja}/${vehicle.title.replaceAll(" ", "-")}`}
            class="bg-[#25d366] text-[white] tracking-[3px] w-full py-2.5 flex justify-center items-center"
          >
            Negociar pelo Whatsapp
          </a>
        </div>
      </div>
    </div>
  );
}
