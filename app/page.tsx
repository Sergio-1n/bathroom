import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Hero Section */}
      <section className='relative flex-1 flex items-center justify-center px-6 pt-16 text-center'>
        <div className='max-w-2xl'>
          <h1 className='text-3xl md:text-5xl font-bold mb-6'>
            Skapa ditt badrum{' '}
            <span className='text-blue-600'>enkelt online</span>
          </h1>
          <p className='text-lg text-gray-700 mb-8'>
            Välj toalett, handfat, kakel och mer – se din design direkt och få
            en offert från MK Bygg.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='../konfigurator'
              className='bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition font-bold'
            >
              Börja konfigurera
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='grid md:grid-cols-3 gap-8 px-6 py-16 max-w-6xl mx-auto'>
        <div className='bg-white shadow rounded-lg p-6 text-center'>
          <h3 className='font-semibold text-lg mb-2'>Snabb offert</h3>
          <p className='text-gray-600'>
            Skicka din design och få en offert från oss direkt.
          </p>
        </div>
        <div className='bg-white shadow rounded-lg p-6 text-center'>
          <h3 className='font-semibold text-lg mb-2'>Hög kvalitet</h3>
          <p className='text-gray-600'>
            Vi använder endast kvalitetsmaterial för alla våra projekt.
          </p>
        </div>
        <div className='bg-white shadow rounded-lg p-6 text-center'>
          <h3 className='font-semibold text-lg mb-2'>Anpassad design</h3>
          <p className='text-gray-600'>
            Välj dina egna material och lösningar – vi gör resten.
          </p>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section className='bg-blue-50 px-6 py-14'>
        <h2 className='text-2xl font-semibold text-center mb-10'>
          Våra kunders omdömen
        </h2>
        <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {[
            {
              name: 'Anna Svensson',
              text: 'Fantastiskt arbete! Mitt badrum känns som nytt. Rekommenderar verkligen MK Bygg.',
            },
            {
              name: 'Johan Karlsson',
              text: 'Snabbt, professionellt och prisvärt. Väldigt nöjd med resultatet.',
            },
            {
              name: 'Elin Andersson',
              text: 'Bra service och riktigt snygg finish. Jag fick exakt det jag önskade.',
            },
          ].map((review, i) => (
            <div
              key={i}
              className='bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center'
            >
              <p className='text-gray-700 mb-4'>“{review.text}”</p>
              <h4 className='font-semibold text-blue-700'>{review.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-gray-300 px-6 py-8 text-center'>
        <p className='mb-4'>
          &copy; {new Date().getFullYear()} MK Bygg. Alla rättigheter
          förbehållna.
        </p>
        <nav className='flex justify-center gap-6 text-sm'>
          <a href='#' className='hover:underline'>
            Integritetspolicy
          </a>
          <a href='#' className='hover:underline'>
            Villkor
          </a>
          <a href='#' className='hover:underline'>
            Kontakt
          </a>
        </nav>
      </footer>
    </div>
  );
}
