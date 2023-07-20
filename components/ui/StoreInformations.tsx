import { Section } from "$live/blocks/section.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

import type { SectionProps } from "$live/mod.ts";

export interface Props {
  stores: Section;
  myProp: Section;
}

export default function StoreInformations(
  { myProp, store }: SectionProps<typeof loader>,
) {
  const { Component, props } = myProp;
  return (
    <div>
      <Component {...props} store={store} />
    </div>
  );
}

export const loader = (
  { stores, myProp }: Props,
  req: Request,
) => {
  const idAtUrl = req.url.split("/stores/")[1];
  const store = stores.props.stores.find(({ idLoja }: { idLoja: string }) =>
    idLoja == idAtUrl
  );

  return { myProp, store };
};
