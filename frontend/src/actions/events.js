export const fetchEvents = () => {
  return dispatch => {
    return fetch("api/events")
      .then(res => {
        return res.json();
      })
      .then(events => {
        return dispatch({
          type: "FETCH_EVENTS",
          events: events.event_info
        });
      });
  };
};
