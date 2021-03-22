import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function Shop() {
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "{{authorization}}");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        const response = await fetch("https://fortnite-api.theapinetwork.com/upcoming/get", requestOptions);
        const data = await response.json();
        setItems(data.data);
        console.log(data);
    }

    return (
        <div className="page-container">
            {items.map(item => (
                <p key={item.itemId}>
                    <Link to={`/shop/${item.itemId}`}>
                        {item.item.name}
                    </Link>
                </p>
            ))}
        </div>
    )
}
