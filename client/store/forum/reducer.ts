import { ActionType } from "./actions";

const initialState = {
  topics: [],
  topic: [],
  loading: true,
};

export const forumReducer = (state = initialState, action: any) => {
  
  switch (action.type) {

    case ActionType.GET_TOPICS:
      return {
        ...state,
        topics: action.payload,
        loading: false,
      };
      case ActionType.DELETE_TOPIC:
      case ActionType.ADD_TOPIC:
        return {
          ...state,
          loading: false,
        };
    default:
    return state;
  }
};


