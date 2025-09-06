'use client';

import Configurator from '@/components/Сonfigurator';

export default function KonfiguratorPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Top heading */}
      <section className='px-6 pt-10'>
        <div className='max-w-3xl mx-auto text-center'>
          <h1 className='text-3xl md:text-5xl font-bold mb-4'>
            Skapa ditt <span className='text-blue-600'>drömbadrum</span>
          </h1>
          <p className='text-lg text-gray-700'>
            Välj kakel, toalett och handfat – se resultatet direkt och få en
            offert från MK Bygg.
          </p>
        </div>
      </section>

      {/* Конфигуратор */}
      <section className='px-6 pt-6 pb-10 max-w-6xl mx-auto w-full'>
        <Configurator />
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-gray-300 px-6 py-8 text-center mt-auto'>
        <p className='mb-4'>
          &copy; {new Date().getFullYear()} MK Bygg. Alla rättigheter
          förbehållna.
        </p>
      </footer>
    </div>
  );
}
