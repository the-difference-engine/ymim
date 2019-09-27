export function findFirstUpcomingIndex(events) {
  const currentTime = Date.now();
  let upcomingEvent = events.find(
    e => Date.parse(e.end.local) - currentTime > 0
  );
  if (upcomingEvent) {
    return events.indexOf(upcomingEvent);
  }
  return upcomingEvent;
}
