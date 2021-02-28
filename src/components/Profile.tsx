import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export default function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
     <img src="https://avatars.githubusercontent.com/u/71036610?s=400&u=196e710ac2077d57c23d62638a7e5f2ed624b86f&v=4" alt="Rebecca Ignácio"/>
      <div>
        <strong> Rebecca Ignacio </strong>
        <p>
          <img src="icons/level.svg" alt="Level" /> Level {level}
        </p>
      </div>
    </div>
  );
}
