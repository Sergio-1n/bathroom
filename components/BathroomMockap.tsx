'use client';
import React from 'react';

type Props = {
  tile: 'tile1' | 'tile2' | 'tile3';
  toilet: 'toilet1' | 'toilet2' | '';
  sink: 'sink1' | 'sink2' | '';
  vanity: boolean;
  doubleDrain: boolean;
};

export default function BathroomMockup({
  tile,
  toilet,
  sink,
  vanity,
  doubleDrain,
}: Props) {
  const roomMap = {
    tile1: '/images/roombase.svg',
    tile2: '/images/roomgray.svg',
    tile3: '/images/roomblack.svg',
  };

  const fixtures = {
    toilet1: '/images/toilet1.svg',
    toilet2: '/images/toilet2.svg',
    sink1: '/images/sink1.svg',
    sink2: '/images/sink1.svg',
    vanity: '/images/vanity.svg',
    doubleDrain: '/images/doubledrain.svg',
  };

  // 👉 Здесь регулируешь позицию и размер для каждого элемента
  const POS = {
    toilet1: { left: '32%', top: '58%', width: '14%' },
    toilet2: { left: '29%', top: '64%', width: '20%' },
    sink1: { left: '51.5%', top: '45%', width: '16%' },
    sink2: { left: '51.5%', top: '45%', width: '16%' },
    vanity: { left: '51.5%', top: '64%', width: '16%' },
    doubleDrain: { left: '72%', top: '76%', width: '12%' },
  };

  return (
    <div className='mx-auto w-full max-w-[900px]'>
      <div className='relative w-full' style={{ paddingTop: '75%' }}>
        <img
          src={roomMap[tile]}
          alt='Room with tile'
          className='absolute left-0 top-0 w-full h-full z-0'
        />

        {/* Toilet */}
        {toilet && (
          <img
            src={fixtures[toilet]}
            alt='Toilet'
            style={{
              position: 'absolute',
              left: POS[toilet].left,
              top: POS[toilet].top,
              width: POS[toilet].width,
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
            }}
          />
        )}

        {/* Sink */}
        {sink && (
          <img
            src={fixtures[sink]}
            alt='Sink'
            style={{
              position: 'absolute',
              left: POS[sink].left,
              top: POS[sink].top,
              width: POS[sink].width,
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
            }}
          />
        )}

        {/* Vanity */}
        {vanity && (
          <img
            src={fixtures.vanity}
            alt='Vanity'
            style={{
              position: 'absolute',
              left: POS.vanity.left,
              top: POS.vanity.top,
              width: POS.vanity.width,
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
            }}
          />
        )}

        {/* Double drain */}
        {doubleDrain && (
          <img
            src={fixtures.doubleDrain}
            alt='Double drain'
            style={{
              position: 'absolute',
              left: POS.doubleDrain.left,
              top: POS.doubleDrain.top,
              width: POS.doubleDrain.width,
              transform: 'translate(-50%, -50%)',
              zIndex: 15,
            }}
          />
        )}
      </div>
    </div>
  );
}
