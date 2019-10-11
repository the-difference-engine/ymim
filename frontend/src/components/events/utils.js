import moment from "moment";

export function findUpcomingEvents(events, currentTime) {
  return events.filter(event => moment(event.end.local).isAfter(currentTime))
}

export function findPastEvents(events, currentTime) {
  return events.filter(event => moment(event.end.local).isBefore(currentTime))
}
