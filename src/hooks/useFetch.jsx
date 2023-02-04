import axios from "axios";
import { useEffect, useReducer } from "react";
import http from "../Services/httpSrvices";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const actions = {
  fetchRequest: "FETCH_REQUEST",
  fetchSuccess: "FETCH_SUCCESS",
  fetchFailure: "FETCH_FAILURE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.fetchRequest: {
      return { loading: true, error: null, data: [] };
    }
    case actions.fetchSuccess: {
      return { loading: false, error: null, data: action.payload };
    }
    case actions.fetchFailure: {
      return { loading: false, error: action.payload, data: [] };
    }
    default:
      return state;
  }
};

const useFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: actions.fetchRequest });
    http
      .get(url)
      .then((res) => {
        dispatch({ type: actions.fetchSuccess, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: actions.fetchFailure, payload: err.message });
      });
  }, [url]);

  return state;
};

export default useFetch;
