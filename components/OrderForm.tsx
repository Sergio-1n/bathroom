'use client';
import { useState } from 'react';

export default function OrderForm({ price }: { price: number }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('https://formspree.io/f/mqadwzjj', {
        // 🔹 вставь свой ID  insert your ID
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          price,
        }),
      });

      if (res.ok) {
        setStatus('✅ Beställningen har skickats!');
        setName('');
        setPhone('');
        setEmail('');
      } else {
        setStatus('❌ Fel vid sändning.');
      }
    } catch (err) {
      console.error(err);
      setStatus('⚠️ Nätverksfel.');
    }
  };

  return (
    <div className='mt-6 p-4 bg-gray-50 rounded-lg shadow'>
      <h3 className='font-semibold mb-3 text-lg'>Skicka in din ansökan</h3>
      <form onSubmit={handleSubmit} className='space-y-3'>
        <input
          type='text'
          placeholder='Ditt namn'
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className='w-full p-2 border rounded'
        />
        <input
          type='tel'
          placeholder='Telefon'
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
          className='w-full p-2 border rounded'
        />
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className='w-full p-2 border rounded'
        />

        {/* price (readonly) */}
        <input
          type='text'
          value={`${price} SEK`}
          readOnly
          className='w-full p-2 border rounded bg-gray-100'
        />

        <button
          type='submit'
          className='w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
        >
          Skicka en beställning
        </button>
      </form>
      {status && <p className='mt-2 text-sm'>{status}</p>}
    </div>
  );
}
