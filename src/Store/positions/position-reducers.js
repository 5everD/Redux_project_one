import { ADD_POSITION } from './position-actions';


export const positionReducers = (state = [], action) => {
    switch (action.type) {
        case ADD_POSITION: {
            return action.positions;
        }
        default: {
            return state;
        }
    }
}