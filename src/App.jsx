import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const App = () => {

  const [apiData, setApiData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);

  const callApi = (requestParams) => {
    setLoading(false);
    setRequestParams(requestParams);
  }

  useEffect(() => {
    console.log('something happened once when mounted');
    async function apiCall(){
      let response = await axios({
        method: 'GET',
        url: requestParams.url,
        data: requestParams.json,
      });
      setApiData(response.data)
    
    }
      apiCall();
  
  }, [requestParams]);


  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} setLoading={setLoading}/>
      <Results data={apiData} loading={loading}/>
      <Footer />
    </>
  )
};

export default App;
