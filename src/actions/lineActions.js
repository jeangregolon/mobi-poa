import Axios from "axios" 

import {
  LINE_DETAILS_FAIL,
  LINE_DETAILS_REQUEST,
  LINE_DETAILS_SUCCESS,
  LINE_LIST_FAIL,
  LINE_LIST_REQUEST,
  LINE_LIST_SUCCESS,
} from "../constants/lineConstants" 

export const listLines = () => async (dispatch) => {
  let onibus =
    "http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=o" 
  let lotacao =
    "http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=l" 
  dispatch({
    type: LINE_LIST_REQUEST,
  }) 
  try {
    var { data } = await Axios.get(onibus) 
    Axios.get(lotacao).then((response) => {
      data.concat(response.data) 
    }) 

    dispatch({ type: LINE_LIST_SUCCESS, payload: data }) 
  } catch (error) {
    dispatch({ type: LINE_LIST_FAIL, payload: error.message }) 
  }
} 

export const detailsLine = (lineId) => async (dispatch) => {
  dispatch({ type: LINE_DETAILS_REQUEST, payload: lineId }) 
  try {
    const { data } = await Axios.get(
      `http://www.poatransporte.com.br/php/facades/process.php?a=il&p=${lineId}`
    ) 
    dispatch({ type: LINE_DETAILS_SUCCESS, payload: data }) 
  } catch (error) {
    dispatch({
      type: LINE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    }) 
  }
} 
