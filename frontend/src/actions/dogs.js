
//fetch from API
export const fetchDogs = (num) => {
  return dispatch => {
    let headers = {
      "Content-Type": "application/json"
    };
    //url for API
    return fetch("https://cors-anywhere.herokuapp.com/https://random.dog/woof.json", {
        headers,
      })
      //convert response to json
      .then(res => res.json())
      .then(dogs => {
        //calls reducer
        return dispatch({
          type: 'FETCH_DOG',
          dogs
        })
      })
  }
}

//post to API
export const addtoAPI = text => {
  return dispatch => {
    let headers = {
      "Content-Type": "application/json"
    };
    let body = JSON.stringify({text, });
    return fetch("/api/item/", {headers, method: "POST", body})
      .then(res => res.json())
      .then(item => {
        return dispatch({
          type: 'ADD_ITEM_API',
          item
        })
      })
  }
}

//delete from API
export const deleteFromAPI = index => {
  return (dispatch, getState) => {

    let headers = {"Content-Type": "application/json"};
    let itemId = getState().itemss[index].id;

    return fetch(`/api/item/${itemId}/`, {headers, method: "DELETE"})
      .then(res => {
        if (res.ok) {
          return dispatch({
            type: 'DELETE_ITEM_API',
            index
          })
        }
      })
  }
}

//update a record with API
export const updateFromAPI = (index, text) => {
  return (dispatch, getState) => {

    let headers = {"Content-Type": "application/json"};
    let body = JSON.stringify({text, });
    let itemId = getState().item[index].id;

    return fetch(`/api/item/${itemId}/`, {headers, method: "PUT", body})
      .then(res => res.json())
      .then(item => {
        return dispatch({
          type: 'UPDATE_ITEM_API',
          item,
          index
        })
      })
  }
}

export const addDog = text => {
  return {
    type: 'ADD_DOG',
    text
  };
};

export const updateDog = (id, text) => {
  return {
    type: 'UPDATE_DOG',
    id,
    text
  };
};

export const deleteDog = id => {
  return {
    type: 'DELETE_DOG',
    id
  };
};