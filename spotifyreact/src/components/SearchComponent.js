import React, { useState, useEffect} from 'react'

function SearchComponent() {
    const [data, setData] = useState([])
    const [q, setQ] = useState("")

    useEffect(() => {
        fetch("https://api.spotify.com/v1/search?q=Linkin+Park&type=track&limit=5&access_token=").then(response => response.json()).then((json) => setData(json))
    }, [])

    return (
        <div>
            <p>kshfkhsfhsdfk</p>
            <input type="text" />
            <input type="submit" value="Search" />
        </div>
        )
}

export default SearchComponent