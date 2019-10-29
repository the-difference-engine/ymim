export const fetchEvents = () => {
  return dispatch => {
    let headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer 6KS3ILIMYDX2XUBQUPVS"
    };
    /* Use 25445773237 for dummy data testing.
    Use 18024803549 for YMIM data testing */
    return fetch(
      "https://www.eventbriteapi.com/v3/organizers/18024803549/events/",
      {
        headers
      }
    ).then(res => res.json()).then(events => {
        return dispatch({
          type: "FETCH_EVENTS",
          events: events.events
        });
      });
  };
};
