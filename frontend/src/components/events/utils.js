<<<<<<< HEAD
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
=======
export function findFirstUpcomingIndex(events) {
  const currentTime = Date.now()
  let upcomingEvent = events.find((e) => (Date.parse(e.end.local) - currentTime > 0))
  if (upcomingEvent) {
    return events.indexOf(upcomingEvent)
  }
  return upcomingEvent
>>>>>>> ba6f19d0b4ef5f4274ddf4c361883ad9b08b7a54
}
