/**
 * Parses a numeric query param safely. `Number(x)` on a non-numeric string
 * returns NaN, which is truthy-checked-in but not `undefined` — passing it
 * straight through bypasses a callee's default parameter (those only apply
 * to `undefined`) and silently corrupts whatever math follows.
 */
export function parseQueryInt(value: string | undefined): number | undefined {
  if (value === undefined) return undefined;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}
