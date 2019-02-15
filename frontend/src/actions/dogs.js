export const fetchDogs = () => {
    return dispatch => {
      let headers = {"Content-Type": "application/json"};
      return fetch("https://random.dog/woof.json", {headers, })
        .then(res => res.json())
        .then(dogs => {
          return dispatch({
            type: 'FETCH_DOGS',
            dogs
          })
        })
    }
  }