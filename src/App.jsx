import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history';

const App = () => {

  let initialState = {
    requestParams: {},
    data: {},
    history: []
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD-REQUEST':
        return {
          ...state,
          requestParams: {
            method: action.payload.method,
            url: action.payload.url
          }
        }

      case 'ADD-HISTORY':
        return {
          ...state,
          history: [...state.history, action.payload]
        };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const [apiData, setApiData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);

  const callApi = (requestParams) => {
    setLoading(true);
    setRequestParams(requestParams);
  }

  useEffect(() => {
    console.log(state.history);
  }, [state.history]);

  useEffect(() => {
    async function apiCall() {
      if (state.requestParams.url) {
        dispatch({ type: 'ADD-HISTORY', payload: state.requestParams });
        let response = await axios({
          method: state.requestParams.method,
          url: state.requestParams.url,
          data: state.requestParams.json,
        });
        console.log(response);
        setApiData(response.data);
        setLoading(false);

      };
    }

    if (Object.keys(requestParams).length > 0) {
      apiCall();
    }

  }, [requestParams, state.requestParams]);


  return (
    <>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Form dispatch={dispatch} handleApiCall={callApi} setLoading={setLoading} />
      <Results data={apiData} loading={loading} />
      <History history={state.history} />
      <Footer />
    </>
  )
};

export default App;
