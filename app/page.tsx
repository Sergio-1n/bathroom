import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-br from-blue-150 to-blue-200'>
      {/* Hero Section */}
      <section className='relative flex-1 flex items-center justify-center px-6 pt-20 text-center overflow-hidden'>
        <div className='max-w-3xl relative z-10'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6 leading-tight'>
            Skapa ditt badrum{' '}
            <span className='text-blue-600'>enkelt online</span>
          </h1>
          <p className='text-lg md:text-xl text-gray-700 mb-6'>
            Vi arbetar i{' '}
            <span className='font-semibold text-blue-700'>
              Göteborg och omnejd
            </span>
            . Välj toalett, handfat, kakel och mer – se din design direkt och få
            en offert från MK Bygg.
          </p>

          <Image
            src='/images/bathroomhero.jpg'
            alt='Modern bathroom'
            width={700}
            height={400}
            className='mx-auto mb-4 w-[250px] sm:w-[400px] md:w-[400px] lg:w-[480px] h-auto object-cover rounded-xl'
          />
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='../konfigurator'
              className='magic-btn px-8 py-3 rounded-lg hover:to-blue-300 font-bold text-lg'
            >
              Börja konfigurera
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='grid md:grid-cols-3 gap-8 px-6 pt-8 max-w-6xl mx-auto'>
        <div className='bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition'>
          <h3 className='font-semibold text-lg mb-2'>Snabb offert</h3>
          <p className='text-gray-600'>
            Skicka din design och få en offert från oss direkt.
          </p>
        </div>
        <div className='bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition'>
          <h3 className='font-semibold text-lg mb-2'>Hög kvalitet</h3>
          <p className='text-gray-600'>
            Vi använder endast kvalitetsmaterial för alla våra projekt.
          </p>
        </div>
        <div className='bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition'>
          <h3 className='font-semibold text-lg mb-2'>Anpassad design</h3>
          <p className='text-gray-600'>
            Välj dina egna material och lösningar – vi gör resten.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className='px-6 py-14'>
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
              className='bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition'
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
