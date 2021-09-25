import Header from "../components/Header";
import { useRouter } from 'next/router';
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Footer from '../components/Footer';
import Map from "../components/Map";



const Search = ({ searchResults }) => {

    const router = useRouter();
    const { location, startDate, endDate, noOfGuests} = router.query;
    
    const formatedStartDay = format(new Date(startDate), "dd MMM yy")
    const formatedEndDay = format(new Date(endDate), "dd MMM yy")
    const range = `${formatedStartDay} -> ${formatedEndDay}`

    return(
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />

            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ stays - {range} - for {noOfGuests} Guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Canceletion Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Prices</p>
                        <p className="button">Rooms & Beds</p>
                        <p className="button">More filters</p>
                    </div>
                    <div className="flex flex-col">
                        {searchResults?.map(({ img, location, title, description, star, price, total }) => (
                            <InfoCard
                            key={img}
                            img={img}
                            title={title}
                            description={description}
                            star={star}
                            price={price}
                            total={total}
                            location={location}
                            />
                        ))}
                    </div>
                </section>
                <section className="hidden xl:inline-flex xl:min-w-[500px]">
                    <Map searchResults={searchResults} />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Search;

export async function getServerSideProps() {
    const searchResults = await fetch("https://links.papareact.com/isz").then(
        (res) => res.json()
    )

    return {
        props: {
            searchResults,
        }, 
      }
}