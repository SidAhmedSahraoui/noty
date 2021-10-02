import {
  GET_NOTES,
  SAVE_NOTE,
  CLEAR_NOTES,
  SET_LOADING_NOTES,
  SET_LOADING_SAVE_NOTE,
  GET_NOTES_ERROR,
  SAVE_NOTE_ERROR,
  FAV_ERROR,
  CLEAR_ERRORS,
} from "../types";
const initialState = {
  notes: null,
  loading: false,
  loading_save: false,
  error: null,
  error_save: null,
  error_fav: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        error: false,
        loading: false,
        notes: action.payload,
      };

    case SAVE_NOTE:
      return {
        ...state,
        error_send: false,
        loading_save: false,
      };

    case CLEAR_NOTES:
      return {
        ...state,
        notes: null,
      };

    case GET_NOTES_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case SAVE_NOTE_ERROR:
      return {
        ...state,
        error_save: action.payload,
        loading_save: false,
      };

    case SET_LOADING_NOTES:
      return {
        ...state,
        loading: true,
      };

    case FAV_ERROR:
      return {
        ...state,
        error_fav: action.payload,
      };

    case SET_LOADING_SAVE_NOTE:
      return {
        ...state,
        loading_save: true,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
        error_save: null,
      };

    default:
      return state;
  }
};
