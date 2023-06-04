'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText title={(
        <>
          Track friends arround you and invite them
          to play together in the same world
        </>
      )}
      />
      <motion.div
        variant={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full -z-10 object-cover"
        />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-3xl">
          <img
            src="people-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-3xl">
          <img
            src="people-02.png"
            alt="people"
            className="w-full h-full"
          />
          <div className="absolute top-[30px] left-[13px] w-[44px] h-[44px] -z-[1] rounded-[8px] rotate-45 bg-[#5d6680] shadow-3xl" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-03.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-2/3 left-[15%] w-[196px] h-[150px] p-[6px] rounded-3xl bg-[#5d6680]">
          <img
            src="planet-02.png"
            alt="planet"
            className="w-full h-full rounded-3xl"
          />
        </div>
        <div className="absolute top-[20px] left-[65%] w-[196px] h-[150px] p-[6px] rounded-3xl bg-[#5d6680]">
          <img
            src="planet-04.png"
            alt="people"
            className="w-full h-full rounded-3xl"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
