export const fetchEvents = () => {
  return dispatch => {
    let headers = { "Content-Type": "application/json" };
    return fetch("events", { headers })
      .then(res => res.json())
      .then(events => {
        return dispatch({
          type: "FETCH_EVENTS",
          events
        });
      });
  };
};

export const addEvent = (event) => {
  return dispatch => {
    let headers = { "Content-Type": "application/json" };
    let body = JSON.stringify({event});
    return fetch("events/", {
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

export const updateEvent = (event) => {
  return (dispatch) => {
    let headers = { "Content-Type": "application/json" };
    let body = JSON.stringify(event);
    
    return fetch(`events/${event.id}/`, {
      headers,
      method: "PUT",
      body
    })
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
// delete event
export const deleteEvent = index => {
  return (dispatch, getState) => {
    let headers = { "Content-Type": "application/json" };
    let eventId = getState().events[index].id;

    return fetch(`events/${eventId}/`, {
      headers,
      method: "DELETE"
    }).then(res => {
      if (res.ok) {
        return dispatch({
          type: "DELETE_EVENT",
          index
        });
      }
    });
  };
};
