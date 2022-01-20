import React, { useState, useEffect } from "react";

export const Countries = () => {
  const [countries, setCountries] = useState(["Colombia", "Chile", "Peru"]);
  const [countriesFiltered, setCountriesFiltered] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const request = await fetch(
        "https://countriesnow.space/api/v0.1/countries/population/cities"
      );
      const jsonData = await request.json();
      const countries = [];
      jsonData.data.forEach((x) => {
        if (countries.indexOf(x.country) === -1) {
            countries.push(x.country);
        }
      });
      setCountries(countries);
      setCountriesFiltered(countries);
    };

    getData();

  }, []);

  const onKeyUpHandler = (e) => {
    const value = e.target.value;

    setCountriesFiltered(
      countries.filter((c) => {
        return new RegExp(value, "ig").test(c);
      })
    );
  };

  return (
    <div className="font-poppins container text-center mt-32 h-screen">
        <h1 className=" mb-6 text-2xl font-light">Countries</h1>
      <input
        type="text"
        className="border border-black mb-6 rounded-lg"
        onKeyUp={onKeyUpHandler}
      />
      <ul>
        {countriesFiltered.map((country) => (
          <li key={country}>{country}</li>
        ))}
      </ul>
    </div>
  );
};
