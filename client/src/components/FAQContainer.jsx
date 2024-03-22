import Wrapper from '../css/FAQContainer';
import Title from './Title';
import faq from '../utils/faq';
import FAQInfo from './FAQInfo';
import { useState } from 'react';
import discord from '../assets/images/discord.webp';
import thumbnail from '../assets/images/thumbnail.webp';
const FAQContainer = () => {
  const [questions, setQuestions] = useState(faq);
  return (
    <Wrapper>
      <Title title='Frequently Asked Questions'></Title>
      <div className='container'>
        <section className='info'>
          {questions.map((question) => {
            const { id } = question;
            return <FAQInfo key={id} question={question}></FAQInfo>;
          })}
        </section>
        <section className='extra'>
          <div className='video'>
            <a
              href='https://www.youtube.com/watch?v=6x-rLCWx3nM'
              target='_blank'
            >
              <img className='img' src={thumbnail} alt='youtube video' />
            </a>
          </div>
          <a href='https://discord.gg/sweateconomy' target='_blank'>
            <img className='img' src={discord} alt='discord' />
          </a>
        </section>
      </div>
    </Wrapper>
  );
};

export default FAQContainer;
