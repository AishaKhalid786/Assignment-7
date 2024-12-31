"use client";

import React, { useEffect, useState } from "react";

interface clientside {
    id: number;
    title: string;
    price: string;
    description: string;
    category: string;
    image: string;
    rating: {rate:number;
        count:number};
}

const clientside = () => {
    const [data, setData] = useState<clientside[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "https://fakestoreapi.com/products"
            );
            const parsedResponse: clientside[]= await response.json();
            console.log ("clientside",parsedResponse);
            setData(parsedResponse);
        };
        fetchData();
    }, []);

    return (
        <div>
            {data.map((side, index) => (
                <div key={index} className="flex flex-col gap-5 border border-black">
                    <p>Id: {side.id}</p>
                    <p>title: {side.title}</p>
                    <p>price: {side.price}</p>
                    <p>description: {`${side.description}`}</p>
                    <p>category: {`${side.category}`}</p>
                    <div><strong>image:</strong>
                    <img src={side.image} alt={side.title} className="w-full h-48 object-contain mt-3"></img> 
                    </div>
                </div>
            ))}
        </div>
    );
};


export default clientside