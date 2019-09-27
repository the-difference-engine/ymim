export function findPastEndIndex(events) {
  const currentTime = Date.now();
  let pastEnd = events.length - 1;
  while (
    pastEnd >= 0 &&
    Date.parse(events[pastEnd].end.local) - currentTime > 0
  ) {
    pastEnd--;
  }
  return pastEnd;
}
