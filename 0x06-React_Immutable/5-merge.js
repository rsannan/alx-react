import { Map, List } from "immutable";

export function concatElements(page1, page2) {
  const pg1 = List(page1);
  const pg2 = List(page2);
  return pg1.concat(pg2);
}

export function mergeElements(page1, page2) {
  const pg1 = Map(page1);
  const pg2 = Map(page2);
  return pg1.merge(pg2);
}
