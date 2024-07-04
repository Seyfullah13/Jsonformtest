import React, { useState } from 'react';

const ContinentsAndCountriesRenderer = ({ continents, formData, setFormData }) => {
  const [selectedContinents, setSelectedContinents] = useState([]);

  // Toggle selection for a continent
  const handleContinentToggle = (continentName) => {
    if (selectedContinents.includes(continentName)) {
      // Deselect continent
      setSelectedContinents(selectedContinents.filter(continent => continent !== continentName));
    } else {
      // Select continent
      setSelectedContinents([...selectedContinents, continentName]);
    }
  };

  // Function to determine if a country should be selected based on selected continents
  const isCountrySelected = (continent, country) => {
    return formData.visitedCountries[continent][country];
  };

  // Toggle selection for a country
  const handleCountryToggle = (continent, country) => {
    const updatedFormData = {
      ...formData,
      visitedCountries: {
        ...formData.visitedCountries,
        [continent]: {
          ...formData.visitedCountries[continent],
          [country]: !formData.visitedCountries[continent][country]
        }
      }
    };
    setFormData(updatedFormData);
  };

  return (
    <div>
      <h2>Continents</h2>
      {continents.map(continent => (
        <div key={continent.name}>
          <input
            type="checkbox"
            id={continent.name}
            checked={selectedContinents.includes(continent.name)}
            onChange={() => handleContinentToggle(continent.name)}
          />
          <label htmlFor={continent.name}>{continent.name}</label>
        </div>
      ))}

      <h2>Countries</h2>
      <ul>
        {selectedContinents.flatMap(continentName =>
          continents.find(continent => continent.name === continentName)?.countries.map(country => ({
            continent: continentName,
            country: country
          }))
        ).map(({ continent, country }) => (
          <li key={country}>
            <input
              type="checkbox"
              id={`${continent}-${country}`}
              checked={isCountrySelected(continent, country)}
              onChange={() => handleCountryToggle(continent, country)}
              disabled={!selectedContinents.includes(continent)}
            />
            <label htmlFor={`${continent}-${country}`}>{country}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContinentsAndCountriesRenderer;
