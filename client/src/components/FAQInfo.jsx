import Wrapper from '../css/FAQInfo';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const FAQInfo = ({ question }) => {
  const [showInfo, setShowInfo] = useState(false);
  const { title, description } = question;
  return (
    <Wrapper>
      <article className='question'>
        <header>
          <h4>{title}</h4>
          <button
            className='btn'
            onClick={() => setShowInfo(!showInfo)}
            aria-label='Show Description'
          >
            {showInfo ? (
              <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            )}
          </button>
        </header>
        {showInfo ? <p>{description}</p> : null}
      </article>
    </Wrapper>
  );
};

export default FAQInfo;
