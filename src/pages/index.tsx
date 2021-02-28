import React from 'react';
import { GetServerSideProps } from 'next';

import CompletedChallenges from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { ChallengeBox } from '../components/ChallengeBox';
import Profile from '../components/Profile';

import { CountdownProvider } from '../contexts/CountdownContext';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home({
  level,
  currentExperience,
  challengesCompleted,
}: HomeProps) {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title> NLW4 | move.it</title>
          <meta name="description" content="Aplicativo desenvolvido na semana da NLW4 com aplicações de REACT e NEXT. "/>
          <meta property="og:region" content="Brasil"/>
          <meta property="og:type" content="article"/>
          <meta property="og:site_name" content="Moveit - Rebecca Ignácio"/>
				  <meta property="og:title" content="Moveit - Inicial"/>
          <meta property="og:image" content="logo-full.svg"/>
          <meta property="og:description" content="Aplicativo desenvolvido na semana da NLW4 com aplicações de REACT e NEXT. "/>
          <meta property="og:url" content=""/>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
