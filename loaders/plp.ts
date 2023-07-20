import type { PlpReturn } from "deco-sites/chevrolet/components/types.ts";
import type { RequestURLParam } from "deco-sites/std/functions/requestToParam.ts";

export default async function searchPlp(
  req: Request,
): Promise<PlpReturn> {
  console.log(req);

  const idloja = "5601";

  const response = await fetch(
    `https://autogestor-dealers.s3.us-west-2.amazonaws.com/${idloja}/portals/dealersites/vehicles.json`,
  );
  const result = await response.json();
  const plpReturn = {
    idLoja: idloja,
    result: result,
  };

  return plpReturn ?? {};
}
