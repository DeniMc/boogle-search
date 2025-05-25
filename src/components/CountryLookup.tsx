"use client"

import React, { useState, useEffect } from 'react'

export default function CountryLookup() {
    const [country, setCountry] = useState('Craggy Island');

    useEffect(() => {
        const getCountry = async () => {
            const response = await fetch(`https://extreme-ip-lookup.com/json/=${process.env.NEXT_PUBLIC_IP_API_KEY}`)
            .then((res) => res.json())
            .then((data) => data.country || 'Craggy Island');
            if (!response) return setCountry(response);
    };
        getCountry();
    }, []);
  return (
    <div>{country}</div>
  )
}
