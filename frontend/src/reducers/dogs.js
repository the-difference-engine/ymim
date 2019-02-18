const initialState = [];


export default function dogs(state = initialState, action) {
  let dogList = state.slice();
  switch (action.type) {
    case 'ADD_DOG':
      return [...state, {
        text: action.text
      }];

    case 'FETCH_DOG':
      return [...state, {
        text: action.dogs.url
      }];

    case 'UPDATE_DOG':
      let dogToUpdate = dogList[action.id];
      dogToUpdate.text = action.text;
      dogList.splice(action.id, 1, dogToUpdate);
      return dogList;

    case 'DELETE_DOG':
      dogList.splice(action.id, 1);
      return dogList;

    case 'ADD_ITEM_API':
      return [...state, action.item];

    default:
      return state;
  }
}