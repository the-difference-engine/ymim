const initialState = [];


export default function items(state = initialState, action) {
  let itemList = state.slice();
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, {
        text: action.text
      }];

    case 'FETCH_ITEM':
      return [...state, {
        text: action.items.url
      }];

    case 'UPDATE_ITEM':
      let itemToUpdate = itemList[action.id];
      itemToUpdate.text = action.text;
      itemList.splice(action.id, 1, itemToUpdate);
      return itemList;

    case 'DELETE_ITEM':
      itemList.splice(action.id, 1);
      return itemList;

    case 'ADD_ITEM_API':
      return [...state, action.item];

    default:
      return state;
  }
}