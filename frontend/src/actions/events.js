export const fetchEvents = () => {
    return dispatch => {
        let headers = { "Content-Type": "application/json" };
        return fetch("/api/events/", { headers, })
            .then(res => {
                console.log(res);
                res.json()
            })
            .then(events => {
                return dispatch({
                    type: 'FETCH_EVENTS',
                    events
                })
            })
    }
}