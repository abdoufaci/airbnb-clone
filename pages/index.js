import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargCard from '../components/LargCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData, CardsData }) {
  console.log(CardsData)
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="py-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* Pull some data from the server -- api endpoint */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ml-10">
            {exploreData?.map(({img, location, distance}) => (
              <SmallCard 
              key={img}
              location={location}
              img={img}
              distance={distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3">
            {CardsData?.map(({img, title}) => (
              <MediumCard 
              key={img}
              img={img}
              title={title}
              />
            ))}
          </div>
        </section>
        <LargCard 
        img='https://links.papareact.com/4cj'
        title='The Greatest Outdoors'
        description='Wishlist curated by Airbnb'
        buttonText='Get Inspired'
        />
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );

  const CardsData = await fetch('https://links.papareact.com/zp1').then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      CardsData
    }
  }
}