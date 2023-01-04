import React from 'react';
import { useState } from 'react';

import './form.scss';

const Form = (props) => {

  const [jsonData, setJsonData] = useState({});
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');

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

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        <span>URL: </span>
        <input  data-testid="form-input" name='url' type='text' onChange={(e) => setUrl(e.target.ariaValueMin)}/>
        <button data-testid="go-button" type="submit">GO!</button>
      </label>
      <textarea onChange={(e) => setJsonData(e.target.value)}></textarea>
      <label className="methods">
        <span id="get" onClick={() => setMethod('GET')}>GET</span>
        <span id="post" onClick={() => setMethod('POST')}>POST</span>
        <span id="put" onClick={() => setMethod('PUT')}>PUT</span>
        <span id="delete" onClick={() => setMethod('DELETE')}>DELETE</span>
      </label>
    </form>
    </>
  );
}

export default Form;
