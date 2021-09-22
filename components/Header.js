import { useState } from 'react';
import Image from 'next/image'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon} from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router'




const Header = ({ placeholder }) => {
    const router = useRouter();
    const[searchInput, setSearchInput] = useState("")
    const[startDate, setStartDate] = useState(new Date())
    const[endDate, setEndDate] = useState(new Date())
    const[noOfGuests, setNoOfGuests] = useState(1)

    const search = () => {
        router.push({
            pathname:"/search",
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            },
        })
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key:"selection"
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }


    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5
        md:px-10
        ">
            <div onClick={() => router.push("/")} className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image 
                src="https://links.papareact.com/qd3"
                layout='fill'
                objectFit='contain'
                objectPosition='left'
                />
            </div>
            <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm">
                <input value={searchInput} onChange={e => setSearchInput(e.target.value)} 
                className="pl-5 text-gray-600 placeholder-gray-500 bg-transparent outline-none flex-grow" 
                type="text" placeholder={placeholder || "Start your search"} />
                <SearchIcon className="h-8 hidden bg-red-400 text-white rounded-full 
                p-2 cursor-pointer md:inline-flex md:mx-2"/>
            </div>
            <div className="flex space-x-4 items-center justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a host </p>
                <GlobeAltIcon className="h-6 cursor-pointer"/>
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full ">
                    <MenuIcon className="h-6 cursor-pointer"/>
                    <UserCircleIcon className="h-6 cursor-pointer"/>
                </div>
            </div>
            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto">
                    <DateRangePicker 
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={["#FD5B61"]}
                    onChange={handleSelect}
                    />
                    <div className="flex items-center border-b mb-5">
                        <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
                        <UsersIcon className="h-5"/>
                        <input value={noOfGuests} min={1} onChange={e => setNoOfGuests(e.target.value)}
                         type="number" className="w-12 pl-2 text-lg outline-none text-red-400"/>
                    </div>
                    <div className="flex">
                        <button onClick={() => setSearchInput("")} className="flex-grow text-gray-500">Cancel</button>
                        <button onClick={search} className="flex-grow text-red-400">Search</button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header;