import type { PlpReturn } from "deco-sites/chevrolet/components/types.ts";

export interface Props {
  id_loja: string;
}

export default async function searchInstaFeed(
  { id_loja }: Props,
): Promise<PlpReturn> {
  const response = await fetch(
    `https://autogestor-dealers.s3.us-west-2.amazonaws.com/${id_loja}/portals/dealersites/vehicles.json`,
  );
  const result = await response.json();

  const plpReturn = {
    idLoja: id_loja,
    result: result,
  };

  return plpReturn ?? {};
}
