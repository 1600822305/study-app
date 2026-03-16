export function arcDomain(V: [number, number], P1: [number, number], P2: [number, number]): [number, number] {
  let a1 = Math.atan2(P1[1] - V[1], P1[0] - V[0]);
  let a2 = Math.atan2(P2[1] - V[1], P2[0] - V[0]);
  while (a2 - a1 > Math.PI) a1 += 2 * Math.PI;
  while (a1 - a2 > Math.PI) a2 += 2 * Math.PI;
  if (a1 > a2) [a1, a2] = [a2, a1];
  return [a1, a2];
}
