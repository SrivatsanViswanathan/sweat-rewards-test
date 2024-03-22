import Wrapper from '../css/WinnerContainer';
import { useLandingContext } from '../pages/Landing';

const WinnerContainer = () => {
  const { response } = useLandingContext();
  const rewardsWon = response ? response.rewardsWon : undefined;
  if (rewardsWon) {
    if (rewardsWon.length > 0) {
      return (
        <Wrapper>
          <div className='winner'>
            <h5>
              Congrats! You have won {rewardsWon.length} reward
              {rewardsWon.length > 1 ? 's!' : '!'} 😊
            </h5>
            <table>
              <thead>
                <tr>
                  <th>Reward</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                {rewardsWon.map((reward) => {
                  const { name, link } = reward;
                  return (
                    <tr key={link}>
                      <td>{name}</td>
                      <td>
                        <a href={link} target='_blank'>
                          Link
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Wrapper>
      );
    }
  }
  return (
    <Wrapper>
      <div className={rewardsWon ? 'loser active' : 'loser'}>
        <div>
          <p>You have not won any rewards 😭 Hopefully you win one soon!</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default WinnerContainer;
