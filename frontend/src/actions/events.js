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
// add events
export const addEvent = (
  title,
  description,
  start_date,
  start_time,
  end_date,
  end_time,
  event_image
) => {
  return dispatch => {
    let headers = { "Content-Type": "application/json" };
    let body = JSON.stringify({
      title,
      description,
      start_date,
      start_time,
      end_date,
      end_time,
      event_image
    });
    return fetch("events", {
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
// update event
export const updateEvent = (
  index,
  title,
  description,
  start_date,
  start_time,
  end_date,
  end_time,
  event_image
) => {
  return (dispatch, getState) => {
    let headers = { "Content-Type": "application/json" };
    let body = JSON.stringify({
      title,
      description,
      start_date,
      start_time,
      end_date,
      end_time,
      event_image
    });
    let eventId = getState().events[index].id;
    return fetch(`events/${eventId}/`, { headers, method: "PUT", body })
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
    return fetch(`${eventId}/`, { headers, method: "DELETE" }).then(res => {
      if (res.ok) {
        return dispatch({
          type: "DELETE_EVENT",
          index
        });
      }
    });
  };
};
