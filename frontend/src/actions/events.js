export const fetchEvents = () => {
  return dispatch => {
    let headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer 6KS3ILIMYDX2XUBQUPVS"
    };

    return fetch("https://www.eventbriteapi.com/v3/users/me/events/", {
      headers
    })
      .then(res => res.json())
      .then(events => {
        return dispatch({
          type: "FETCH_EVENTS",
          events: events.events
        });
      });
  };
};
