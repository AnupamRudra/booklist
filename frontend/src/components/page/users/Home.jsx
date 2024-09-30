import { useState } from "react";
import { Hero } from "../../component/Hero";
import { SecondHero } from "../../component/SecondHero";
import { BookListByTypes } from "./BookListByTypes";
import { VedasList } from "./VedasList";
import { SearchList } from "../../component/SearchList";
import { useCustomContext } from "../../../Context/ContextApi";
import { useNavigate } from "react-router-dom";


export const Home = () => {

    const books = [
        { heading: "Upnishad", title: "Upnishad" },
        { heading: "Purana", title: "Purana" },
        { heading: "History", title: "History" },
        { heading: "Other Books", title: "Others" },
    ]
    
    const { setBooks } = useCustomContext()
    const navigate = useNavigate()
    const [searchList, setSearchList] = useState([])

    const handleReadBook = (bookId) => {
        searchList.forEach(element => {
            if (element._id === bookId) {
                setBooks(element)
                navigate(`/${element.bookType}/${element._id}/${element.title}/${element.auther.firstName + ' ' + element.auther.lastName}`)
            }
        })
    }

    return (
        <>
            <Hero setSearchList={setSearchList} />
            {
                searchList.length === 0 ?
                    <>
                        <SecondHero />
                        <VedasList />
                        {
                            books.map((items, i) => {
                                return (
                                    <BookListByTypes title={items.title} heading={items.heading} key={i} />
                                )
                            })
                        }
                    </>
                    :
                    <SearchList currentData={searchList} handleReadBook={handleReadBook} />
            }

        </>
    );
};
