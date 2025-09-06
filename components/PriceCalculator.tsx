'use client';

import { useMemo, useState } from 'react';
import OrderForm from './OrderForm';

type Dims = { length: number; width: number; height: number };
type Props = {
  basePriceSek: number;
  baseDims: Dims;
};

function sek(n: number) {
  return new Intl.NumberFormat('sv-SE', {
    style: 'currency',
    currency: 'SEK',
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

function parseNum(input: string): number {
  if (!input) return 0;
  return parseFloat(input.replace(',', '.')) || 0;
}

export default function PriceCalculator({ basePriceSek, baseDims }: Props) {
  const [lengthStr, setLengthStr] = useState(baseDims.length.toString());
  const [widthStr, setWidthStr] = useState(baseDims.width.toString());
  const [heightStr, setHeightStr] = useState(baseDims.height.toString());

  const length = parseNum(lengthStr);
  const width = parseNum(widthStr);
  const height = parseNum(heightStr);

  const [optToilet, setOptToilet] = useState(false);
  const [optSink, setOptSink] = useState(false);
  const [optCeiling, setOptCeiling] = useState(false);
  const [optCabinet, setOptCabinet] = useState(false);
  const [optShower, setOptShower] = useState(false);
  const [optFloorHeat, setOptFloorHeat] = useState(false);

  const baseSurface = useMemo(() => {
    const floor = baseDims.length * baseDims.width;
    const walls = 2 * (baseDims.length + baseDims.width) * baseDims.height;
    return floor + walls;
  }, [baseDims]);

  const currentSurface = useMemo(() => {
    const floor = length * width;
    const walls = 2 * (length + width) * height;
    return floor + walls;
  }, [length, width, height]);

  const tilePrice = useMemo(() => {
    const ratio = currentSurface / baseSurface || 0;
    return Math.round(basePriceSek * ratio);
  }, [basePriceSek, baseSurface, currentSurface]);

  const extrasSek = useMemo(() => {
    let sum = 0;
    if (optToilet) sum += 6000;
    if (optSink) sum += 4000;
    if (optCeiling) sum += 4000;
    if (optCabinet) sum += 3000;
    if (optShower) sum += 4000;
    if (optFloorHeat) sum += 6000;
    return sum;
  }, [optToilet, optSink, optCeiling, optCabinet, optShower, optFloorHeat]);

  const total = Math.round(tilePrice + extrasSek);

  return (
    <div className='bg-white shadow-xl rounded-2xl p-6 space-y-8'>
      <h3 className='text-xl font-semibold text-center'>Kostnadskalkyl</h3>

      {/* Inputs */}
      <div className='grid sm:grid-cols-3 gap-4'>
        <div>
          <label className='text-sm text-gray-600'>Längd (m)</label>
          <input
            type='text'
            inputMode='decimal'
            value={lengthStr}
            onChange={e => setLengthStr(e.target.value)}
            className='mt-1 w-full border rounded-lg px-3 py-2'
            placeholder='t.ex. 2,4'
          />
        </div>
        <div>
          <label className='text-sm text-gray-600'>Bredd (m)</label>
          <input
            type='text'
            inputMode='decimal'
            value={widthStr}
            onChange={e => setWidthStr(e.target.value)}
            className='mt-1 w-full border rounded-lg px-3 py-2'
            placeholder='t.ex. 1,2'
          />
        </div>
        <div>
          <label className='text-sm text-gray-600'>Höjd (m)</label>
          <input
            type='text'
            inputMode='decimal'
            value={heightStr}
            onChange={e => setHeightStr(e.target.value)}
            className='mt-1 w-full border rounded-lg px-3 py-2'
            placeholder='t.ex. 2,4'
          />
        </div>
      </div>

      {/* Опции */}
      <div className='grid sm:grid-cols-2 gap-3'>
        <label className='flex items-center gap-2'>
          <input
            type='checkbox'
            checked={optToilet}
            onChange={e => setOptToilet(e.target.checked)}
          />
          <span>Toalett (+ {sek(6000)})</span>
        </label>
        <label className='flex items-center gap-2'>
          <input
            type='checkbox'
            checked={optSink}
            onChange={e => setOptSink(e.target.checked)}
          />
          <span>Handfat (+ {sek(4000)})</span>
        </label>
        <label className='flex items-center gap-2'>
          <input
            type='checkbox'
            checked={optCeiling}
            onChange={e => setOptCeiling(e.target.checked)}
          />
          <span>Undertak (+ {sek(4000)})</span>
        </label>
        <label className='flex items-center gap-2'>
          <input
            type='checkbox'
            checked={optCabinet}
            onChange={e => setOptCabinet(e.target.checked)}
          />
          <span>Kommod (+ {sek(3000)})</span>
        </label>
        <label className='flex items-center gap-2'>
          <input
            type='checkbox'
            checked={optShower}
            onChange={e => setOptShower(e.target.checked)}
          />
          <span>Duschkabin (+ {sek(4000)})</span>
        </label>
        <label className='flex items-center gap-2'>
          <input
            type='checkbox'
            checked={optFloorHeat}
            onChange={e => setOptFloorHeat(e.target.checked)}
          />
          <span>Golvvärme (+ {sek(6000)})</span>
        </label>
      </div>

      {/* Итоги */}
      <div className='grid sm:grid-cols-3 gap-4'>
        <div className='bg-gray-50 rounded-lg p-4 text-center'>
          <div className='text-sm text-gray-600'>
            Referenspris (2,40 × 1,20 × 2,40)
          </div>
          <div className='text-lg font-semibold'>{sek(basePriceSek)}</div>
        </div>
        <div className='bg-gray-50 rounded-lg p-4 text-center'>
          <div className='text-sm text-gray-600'>Plattsättning (skalat)</div>
          <div className='text-lg font-semibold'>{sek(tilePrice)}</div>
        </div>
        <div className='bg-gray-50 rounded-lg p-4 text-center'>
          <div className='text-sm text-gray-600'>Tillval</div>
          <div className='text-lg font-semibold'>{sek(extrasSek)}</div>
        </div>
      </div>

      {/* Общая цена */}
      <div className='text-center'>
        <div className='text-2xl font-bold'>Total: {sek(total)}</div>
        <p className='text-xs text-gray-500 mt-1'>
          * Beräkningen baseras på golvyta (L × B) och väggytor (2 × (L + B) ×
          H). Resultatet är en uppskattning.
        </p>
      </div>

      {/* Форма заявки */}
      <OrderForm price={total} />
    </div>
  );
}
