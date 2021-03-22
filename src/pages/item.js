import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export function Item() {
    let { id } = useParams();

    const [ item, setItem ] = useState({});

    useEffect(() => {
        fetchItem();
    }, []);

    const fetchItem = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "{{authorization}}");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        const response = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id={{${id}}}`, requestOptions);
        const data = await response.json();
        console.log(data.data);
        setItem(data.data);
    }


    return (
        <div className="page-container">
            {/* {item._proto_.hasOwnProperty.name} */}
        </div>
    )
}