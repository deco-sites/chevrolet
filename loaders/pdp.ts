import type {
  PdpReturn,
  Vehicle,
  Vehicles,
} from "deco-sites/chevrolet/components/types.ts";
import type { RequestURLParam } from "deco-sites/std/functions/requestToParam.ts";

export interface Props {
  idloja: RequestURLParam;
  slug: RequestURLParam;
}

export default async function searchInstaFeed(
  props: Props,
): Promise<PdpReturn> {
  const { slug, idloja } = props;
  const response = await fetch(
    `https://autogestor-dealers.s3.us-west-2.amazonaws.com/${idloja}/portals/dealersites/vehicles.json`,
  );
  const result = await response.json();

  const pdpResult = {
    idLoja: idloja,
    result: result.filter((car: Vehicle) =>
      car.title == slug.replaceAll("-", " ")
    ),
  };

  return pdpResult || {};
}
