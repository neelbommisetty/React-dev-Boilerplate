import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';

const routeInitialState = {
  locationBeforeTransitions: null,
};

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return {
        ...state,
        locationBeforeTransitions: action.payload,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  routing: routeReducer,
});

export default rootReducer;
