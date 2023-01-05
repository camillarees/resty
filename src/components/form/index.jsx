import { useState, useEffect } from 'react';
import axios from 'axios';

import './form.scss';

const Form = (props) => {

  const [jsonData, setJsonData] = useState({});
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState(null);
  const [validJson, setValidJson] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      json: jsonData,
      url: url,
    };

    props.setLoading();
    props.handleApiCall(formData);
  };  

  const handleRestSelection = e => {
    const selectedRestMethod = e.target.textContent;
    setMethod(selectedRestMethod);
  }
  
  const handleUrl = e => {
    setUrl(e.target.value);
  }


const handleData = e => {
  try {
    let jsonData = JSON.parse(e.target.value);
    console.log(validJson);
    setJsonData(jsonData)
    setValidJson(true);
  } catch(e) {
    console.log(validJson);
    setValidJson(false);
  }
}
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        <span>URL: </span>
        <input  data-testid="form-input" name='url' type='text' onChange={handleUrl}/>
        <button data-testid="go-button" type="submit">GO!</button>
      </label>

      <label className="methods">
        <span id="get" onClick={handleRestSelection}>GET</span>
        <span id="post" onClick={handleRestSelection}>POST</span>
        <span id="put" onClick={handleRestSelection}>PUT</span>
        <span id="delete" onClick={handleRestSelection}>DELETE</span>
      </label>
      {validJson ? null : "Invalid JSON"}
      <label>
      <textarea placeholder="Enter JSON object" onChange={handleData}></textarea>
      </label>
    </form>
    </>
  );
}

export default Form;
