import { Map } from "immutable";

export default function mergeDeeplyElements(page1, page2) {
  const pg1 = Map(page1);
  const pg2 = Map(page2);

  return pg1.mergeDeep(pg2);
}
