const initialState = [];

export default function events(state = initialState, action) {
    let eventList = state.slice();
    switch (action.type) {
        case 'FETCH_EVENTS':
            return [...state, ...action.events];

        default:
            return state;

    }
}


