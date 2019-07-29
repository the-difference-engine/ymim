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

export const addEvent = event => {
  return dispatch => {
    let headers = { "Content-Type": "application/json" };
    let body = JSON.stringify({
      title: event.title,
      description: event.description
    });
    return fetch("api/events/", {
      headers,
      method: "POST",
      body
    });
  };
};
