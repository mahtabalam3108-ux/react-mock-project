import { useState } from "react";

const SearchableList = () => {
    const [query, setQuery] = useState('');

    const items = [ "Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry" ];

    const filterRecords = items.filter(item => {
        return item.toLowerCase().includes(query.toLocaleLowerCase())
    })

    return(
        <>
            <p>
                <input type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value)
                }} />
            </p>
            {filterRecords.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </>
    )

}

export default SearchableList;