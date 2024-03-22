import { Form } from 'react-router-dom';
import Wrapper from '../css/SearchContainer';
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaste } from '@fortawesome/free-solid-svg-icons';

const SearchContainer = () => {
  const [clipboardText, setClipboardText] = useState('');

  const handlePaste = () => {
    navigator.clipboard
      .readText()
      .then((text) => {
        setClipboardText(text);
      })
      .catch((error) => {
        console.error('Failed to read clipboard:', error);
      });
  };
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <label htmlFor='walletAddress' className='form-label'>
          Sweat Wallet Address
        </label>
        <div className='paste-button-container'>
          <input
            type='text'
            id='walletAddress'
            name='walletAddress'
            className='form-input'
            placeholder='1d61e465ce62e0de5900b7f090b864585c771c316d868d2582d3a43630509d8b'
            minLength='64'
            required
            value={clipboardText}
            onChange={(e) => setClipboardText(e.target.value)}
          />
          <button
            type='button'
            onClick={handlePaste}
            className='paste-button'
            aria-label='Paste Wallet Address'
          >
            <FontAwesomeIcon icon={faPaste} className='paste-button-icon' />
          </button>
        </div>
        <button
          type='submit'
          className='btn btn-block'
          aria-label='Submit Wallet Address'
        >
          submit
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
