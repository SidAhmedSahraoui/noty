import axios from "axios";

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

// Get notes
export const getNotes = () => async (dispatch) => {
  try {
    dispatch(setLoadingNotes());
    const res = await axios.get("/api/notes");

    dispatch({
      type: GET_NOTES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_NOTES_ERROR,
      payload: error.response?.data,
    });
  }
};

// save note
export const saveNote = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    dispatch(setLoadingSaveNote());
    const res = await axios.post("/api/notes/", formData, config);

    dispatch({ type: SAVE_NOTE, payload: res.data });
  } catch (error) {
    dispatch({
      type: SAVE_NOTE_ERROR,
      payload: error.response?.data,
    });
  }
};

// fav note
export const favNote = (id) => async (dispatch) => {
  try {
    await axios.put("/api/notes/fav/" + id);
  } catch (error) {
    dispatch({
      type: FAV_ERROR,
      payload: error.response?.data,
    });
  }
};

// Clear notes
export const clearNotes = () => {
  return { type: CLEAR_NOTES };
};

// Set loading notes to true
export const setLoadingNotes = () => {
  return { type: SET_LOADING_NOTES };
};

// Set loading note saved to true
export const setLoadingSaveNote = () => {
  return { type: SET_LOADING_SAVE_NOTE };
};

// Clear errors
export const clearErrors = () => {
  return { type: CLEAR_ERRORS };
};
