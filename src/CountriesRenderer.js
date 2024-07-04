import PropTypes from 'prop-types';
import React from 'react';

const CountrySelector = ({ schema, formData, onChange }) => {
  const handleContinentNameChange = (continent, newName) => {
    const updatedFormData = {
      ...formData,
      visitedCountries: {
        ...formData.visitedCountries,
        [continent]: {
          ...formData.visitedCountries[continent],
          nom: newName
        }
      }
    };
    onChange(updatedFormData);
  };

  const handleCountryChange = (continent, country) => {
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
    onChange(updatedFormData);
  };

  return (
    <div className="country-selector">
      {Object.keys(schema.properties.visitedCountries.properties).map(continent => (
        <div key={continent}>
          <h2>{schema.properties.visitedCountries.properties[continent].title}</h2>
          <input
            type="text"
            value={formData.visitedCountries[continent].nom || ''}
            onChange={(e) => handleContinentNameChange(continent, e.target.value)}
            placeholder={`Nom du ${continent}`}
          />
          <div className="countries-list">
            {Object.keys(schema.properties.visitedCountries.properties[continent].properties)
              .filter(country => country !== 'nom') // Exclure le champ 'nom' des pays
              .map(country => (
                <div key={country}>
                  <input
                    type="checkbox"
                    id={country}
                    checked={formData.visitedCountries[continent][country]}
                    onChange={() => handleCountryChange(continent, country)}
                  />
                  <label htmlFor={country}>{schema.properties.visitedCountries.properties[continent].properties[country].title}</label>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

CountrySelector.propTypes = {
  schema: PropTypes.object.isRequired,
  formData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CountrySelector;
