export const fetchEvents = () => {
  return dispatch => {
    let headers = { "Content-Type": "application/json" };
    return fetch("http://localhost:8000/api/events/", { headers })
      .then(res => res.json())
      .then(events => {
        return dispatch({
          type: "FETCH_EVENTS",
          events
        });
      });
  };
};

export const addEvent = (text, title) => {
  return dispatch => {
    let headers = { "Content-Type": "application/json" };
    let body = JSON.stringify({ text, title });
    return fetch("http://localhost:8000/api/events/", {
      headers,
      method: "POST",
      body
    })
      .then(res => res.json())
      .then(event => {
        return dispatch({
          type: "ADD_EVENT",
          event
        });
      });
  };
};

export const updateEvent = (index, text) => {
  return (dispatch, getState) => {
    let headers = { "Content-Type": "application/json" };
    let body = JSON.stringify({ text });
    let eventId = getState().events[index].id;

    return fetch(`/api/events/${eventId}/`, { headers, method: "PUT", body })
      .then(res => res.json())
      .then(event => {
        return dispatch({
          type: "UPDATE_EVENT",
          event,
          index
        });
      });
  };
};

export const deleteEvent = index => {
  return (dispatch, getState) => {
    let headers = { "Content-Type": "application/json" };
    let eventId = getState().events[index].id;

    return fetch(`/api/events/${eventId}/`, { headers, method: "DELETE" }).then(
      res => {
        if (res.ok) {
          return dispatch({
            type: "DELETE_EVENT",
            index
          });
        }
      }
    );
  };
};
