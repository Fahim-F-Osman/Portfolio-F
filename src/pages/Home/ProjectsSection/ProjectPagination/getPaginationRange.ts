export type PaginationItem = number | "...";

function getPaginationRange(
  current: number,
  total: number,
  delta: number = 2
): PaginationItem[] {
  const range: PaginationItem[] = [];
  const left = current - delta;
  const right = current + delta;

  let last: number | undefined;

  for (let i = 1; i <= total; i++) {
    const isFirstOrLast = i === 1 || i === total;
    const isInRange = i >= left && i <= right;

    if (isFirstOrLast || isInRange) {
      if (last !== undefined && i - last !== 1) {
        range.push("...");
      }
      range.push(i);
      last = i;
    }
  }

  return range;
}

export default getPaginationRange;