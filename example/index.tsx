import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Crawl from '../dist';

const App = () => {
  return (
    <Crawl
      containerStyles={{
        height: '100vh',
        width: '100vw',
      }}
      title="Episode IV"
      subTitle="A New Hope"
      text="It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy…"
    />
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
