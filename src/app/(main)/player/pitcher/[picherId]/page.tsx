'use client';

import React, { useState, useEffect } from 'react';
import PlayerCard from '@/components/tradingCard/PlayerCard';
import Banner from '@/components/player/Banner';
import dynamic from 'next/dynamic';
import { MdOutlineArrowRight } from 'react-icons/md';

const pitcherData = [
  {
    korName: '강현우',
    engName: 'Kang Hyun Woo',
    backNum: 55,
    playerImg: 'kt11.png',
    positionKor: '투수',
    positionEng: 'Pitcher',
    positionPH: '우수우타',
    positionImg: 'pitcher.png',
    playerDOB: '1999.04.14',
    playerHeight: 185,
    playerWeight: 88,
    debutYear: 2018,
  },
];

export default function PitcherDetail() {
  const [detailButton, setDetailButton] = useState(false);
  const [showExpectedSeries, setShowExpectedSeries] = useState(false);
  const [isSpin, setIsSpin] = useState(false);
  useEffect(() => {
    if (isSpin) {
      const timer = setTimeout(() => setIsSpin(true), 1080); // Duration should match your CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isSpin]);
  console.log(isSpin);

  const handleAIButtonClick = () => {
    setShowExpectedSeries(true);
    setIsSpin(!isSpin);
  };

  const onDetailHandler = () => {
    setDetailButton(!detailButton);
  };
  console.log(isSpin);

  const PlayerChart = dynamic(() => import('@/components/player/PlayerChart'), {
    ssr: false,
  });
  return (
    <>
      <div className="flex flex-col items-center bg-black/90 min-h-screen sm:flex-wrap md:flex-wrap">
        <div className="flex w-3/4 items-center justify-center max-sm:flex-wrap py-16 ">
          <div className="flex max-sm:flex-col h-fit mx-6 items-center justify-self-center my-10">
            {pitcherData.map((pitcher, index) => (
              <PlayerCard
                key={index}
                player={pitcher}
                size="large"
                checkSpin={isSpin}
              />
            ))}
          </div>
          {/* AI 파트 */}
          <div className="flex flex-col w-1/3 px-16 pl-22 max-sm:pl-0 max-sm:w-full max-sm:flex-wrap max-sm:px-2 max-sm:mx-4">
            {/*그래프*/}
            <div className="w-full max-sm:px-2 max-sm:items-center">
              <PlayerChart
                title={'선수 예측 데이터'}
                showExpectedSeries={showExpectedSeries}
              />
            </div>
            <div className="h-10 flex items-center justify-center max-sm:pr-6">
              <button
                className="w-1/2 h-full flex items-center justify-center font-bold text-white text-base bg-red-90 rounded-[30px]"
                onClick={handleAIButtonClick}
              >
                선수 성적 예측하기
              </button>
            </div>
            {/* 한 줄 예측 */}
            <div className="text-white pl-6 mt-3">AI 예측</div>
            <div className="rounded-[5px] border-2 text-white border-white h-auto w-4/5 max-sm:w-full mx-6 p-4">
              누가 이겨? 내가 이겨~~ 루끼루끼 마 슈퍼루끼루끼루끼 마치마치 그
              느낌적인 느낌느낌
            </div>
          </div>
        </div>
        <div className="flex text-white justify-center align-middle">
          <button
            className="h-8 w-fit mx-2 flex flex-row"
            onClick={onDetailHandler}
          >
            <MdOutlineArrowRight
              className={`w-8 h-8 ${detailButton ? 'rotate-90' : 'rotate-0'}`}
            />
            <div className="text-lg">선수 기록 상세보기</div>
          </button>
        </div>
      </div>
    </>
  );
}
