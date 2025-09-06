'use client';
import { useState } from 'react';
import PriceCalculator from './PriceCalculator';
import BathroomMockup from './BathroomMockap';

export default function Configurator() {
  const [tile, setTile] = useState<'tile1' | 'tile2' | 'tile3'>('tile1');
  const [toilet, setToilet] = useState<'toilet1' | 'toilet2' | ''>('toilet1');
  const [sink, setSink] = useState<'sink1' | 'sink2' | ''>('sink1');
  const [vanity, setVanity] = useState(true);
  const [doubleDrain, setDoubleDrain] = useState(false);

  return (
    <div className='max-w-6xl mx-auto px-4 pb-8 space-y-6'>
      {/* Макет */}
      <div className='bg-white shadow rounded-lg p-4 flex justify-center'>
        <BathroomMockup
          tile={tile}
          toilet={toilet}
          sink={sink}
          vanity={vanity}
          doubleDrain={doubleDrain}
        />
      </div>

      {/* Панель выбора */}
      <div className='bg-white shadow rounded-lg p-4 flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:justify-between'>
        {/* Tile */}
        <div className='flex items-center gap-2 flex-wrap'>
          <span className='font-semibold'>Kakel:</span>
          <button
            onClick={() => setTile('tile1')}
            className={`px-3 py-1 rounded border ${
              tile === 'tile1' ? 'bg-blue-600 text-white' : 'bg-gray-100'
            }`}
          >
            Vit
          </button>
          <button
            onClick={() => setTile('tile2')}
            className={`px-3 py-1 rounded border ${
              tile === 'tile2' ? 'bg-blue-600 text-white' : 'bg-gray-100'
            }`}
          >
            Grå
          </button>
          <button
            onClick={() => setTile('tile3')}
            className={`px-3 py-1 rounded border ${
              tile === 'tile3' ? 'bg-blue-600 text-white' : 'bg-gray-100'
            }`}
          >
            Svart
          </button>
        </div>

        {/* Toilet */}
        <div className='flex items-center gap-2 flex-wrap'>
          <span className='font-semibold'>Toalett:</span>
          <button
            onClick={() => setToilet('toilet1')}
            className={`px-3 py-1 rounded border ${
              toilet === 'toilet1' ? 'bg-blue-600 text-white' : 'bg-gray-100'
            }`}
          >
            A
          </button>
          <button
            onClick={() => setToilet('toilet2')}
            className={`px-3 py-1 rounded border ${
              toilet === 'toilet2' ? 'bg-blue-600 text-white' : 'bg-gray-100'
            }`}
          >
            B
          </button>
          <button
            onClick={() => setToilet('')}
            className={`px-3 py-1 rounded border ${
              toilet === '' ? 'bg-blue-600 text-white' : 'bg-gray-100'
            }`}
          >
            Ingen
          </button>
        </div>

        {/* Sink */}
        <div className='flex items-center gap-2 flex-wrap'>
          <span className='font-semibold'>Handfat:</span>
          <button
            onClick={() => setSink('sink1')}
            className={`px-3 py-1 rounded border ${
              sink === 'sink1' ? 'bg-blue-600 text-white' : 'bg-gray-100'
            }`}
          >
            A
          </button>
          <button
            onClick={() => setSink('sink2')}
            className={`px-3 py-1 rounded border ${
              sink === 'sink2' ? 'bg-blue-600 text-white' : 'bg-gray-100'
            }`}
          >
            B
          </button>
          <button
            onClick={() => setSink('')}
            className={`px-3 py-1 rounded border ${
              sink === '' ? 'bg-blue-600 text-white' : 'bg-gray-100'
            }`}
          >
            Ingen
          </button>
        </div>

        {/* Vanity */}
        <div className='flex items-center gap-2'>
          <span className='font-semibold'>Kommod:</span>
          <label className='flex items-center gap-1'>
            <input
              type='checkbox'
              checked={vanity}
              onChange={e => setVanity(e.target.checked)}
            />
            <span>{vanity ? 'Ja' : 'Nej'}</span>
          </label>
        </div>

        {/* Double Drain */}
        <div className='flex items-center gap-2'>
          <span className='font-semibold'>Duschavlopp:</span>
          <label className='flex items-center gap-1'>
            <input
              type='radio'
              name='drain'
              checked={!doubleDrain}
              onChange={() => setDoubleDrain(false)}
            />
            <span>Enkel</span>
          </label>
          <label className='flex items-center gap-1'>
            <input
              type='radio'
              name='drain'
              checked={doubleDrain}
              onChange={() => setDoubleDrain(true)}
            />
            <span>Dubbel</span>
          </label>
        </div>
      </div>

      {/* Цена */}
      <div className='bg-white shadow rounded-lg p-6'>
        <PriceCalculator
          basePriceSek={70000}
          baseDims={{ length: 2.4, width: 1.2, height: 2.4 }}
        />
      </div>
    </div>
  );
}
