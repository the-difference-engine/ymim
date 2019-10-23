import moment from "moment";
const currentTime = moment();
const upcomingEnd = currentTime.add(30, "days");

export const getSorted = events => {
  return events
    .sort((a, b) => moment(a.start.local) - moment(b.start.local))
    .filter(event =>
      ["live", "started", "ended", "completed"].includes(event.status)
    );
};

export const getUpcomingEvents = events => {
  return events.filter(event => moment(event.end.local).isAfter(currentTime));
};

export const getNextMonthsEvents = events => {
  return events.filter(event =>
    moment(event.start.local).isBetween(currentTime, upcomingEnd)
  );
};

export const getPastEvents = events => {
  return events
    .filter(event => moment(event.end.local).isBefore(currentTime))
    .reverse();
};
