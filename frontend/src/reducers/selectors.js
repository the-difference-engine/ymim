import moment from "moment";
const currentTime = moment();
 
export const getSorted = events => {
  return events
    .sort((a, b) => moment(a.start.local) - moment(b.start.local))
    .filter(e => ["live", "started", "ended", "completed"].includes(e.status));
};
 
export const getUpcomingEvents = events => {
  return events.filter(event => moment(event.end.local).isAfter(currentTime));
};
 
export const getPastEvents = events => {
  return events
    .filter(event => moment(event.end.local).isBefore(currentTime))
    .reverse();
};
 
