import React, { useState } from 'react';
import './index.css';

const initialVisitedCountriesState = {
  Europe: {
    Albanie: false, Andorre: false, Autriche: false, Biélorussie: false, Belgique: false, BosnieEtHerzégovine: false,
    Bulgarie: false, Croatie: false, Chypre: false, RépubliqueTchèque: false, Danemark: false, Estonie: false,
    Finlande: false, France: false, Allemagne: false, Grèce: false, Hongrie: false, Islande: false, Irlande: false,
    Italie: false, Kosovo: false, Lettonie: false, Liechtenstein: false, Lituanie: false, Luxembourg: false, Malte: false,
    Moldavie: false, Monaco: false, Monténégro: false, PaysBas: false, MacédoineDuNord: false, Norvège: false,
    Pologne: false, Portugal: false, Roumanie: false, Russie: false, SaintMarin: false, Serbie: false, Slovaquie: false,
    Slovénie: false, Espagne: false, Suède: false, Suisse: false, Ukraine: false, RoyaumeUni: false,
    Vatican: false
  },
  Afrique: {
    Algérie: false, Angola: false, Bénin: false, Botswana: false, BurkinaFaso: false, Burundi: false,
    CapVert: false, Cameroun: false, RépubliqueCentrafricaine: false, Tchad: false, Comores: false,
    RépubliqueDémocratiqueDuCongo: false, Djibouti: false, Égypte: false, GuinéeÉquatoriale: false,
    Érythrée: false, Eswatini: false, Éthiopie: false, Gabon: false, Gambie: false, Ghana: false,
    Guinée: false, GuinéeBissau: false, CôteDivoire: false, Kenya: false, Lesotho: false, Libéria: false,
    Libye: false, Madagascar: false, Malawi: false, Mali: false, Mauritanie: false, Maurice: false,
    Maroc: false, Mozambique: false, Namibie: false, Niger: false, Nigéria: false, RépubliqueDuCongo: false,
    Rwanda: false, SaoToméEtPrincipe: false, Sénégal: false, Seychelles: false, SierraLeone: false,
    Somalie: false, AfriqueDuSud: false, SoudanDuSud: false, Soudan: false, Tanzanie: false, Togo: false,
    Tunisie: false, Ouganda: false, Zambie: false, Zimbabwe: false
  },
  Amérique: {
    AntiguaEtBarbuda: false, Argentine: false, Bahamas: false, Barbade: false, Belize: false, Bolivie: false,
    Brésil: false, Canada: false, Chili: false, Colombie: false, CostaRica: false, Cuba: false, Dominique: false,
    RépubliqueDominicaine: false, Équateur: false, Salvador: false, Grenade: false, Guatemala: false, Guyana: false,
    Haïti: false, Honduras: false, Jamaïque: false, Mexique: false, Nicaragua: false, Panama: false, Paraguay: false,
    Pérou: false, SaintKittsEtNevis: false, SainteLucie: false, SaintVincentEtLesGrenadines: false, Suriname: false,
    TrinitéEtTobago: false, ÉtatsUnis: false, Uruguay: false, Venezuela: false
  },
  Asie: {
    Afghanistan: false, Arménie: false, Azerbaïdjan: false, Bahreïn: false, Bangladesh: false, Bhoutan: false,
    Brunéi: false, Cambodge: false, Chine: false, TimorOriental: false, Géorgie: false, Inde: false, Indonésie: false,
    Iran: false, Irak: false, Israël: false, Japon: false, Jordanie: false, Kazakhstan: false, Koweït: false,
    Kirghizistan: false, Laos: false, Liban: false, Malaisie: false, Maldives: false, Mongolie: false, Myanmar: false,
    Népal: false, CoréeDuNord: false, Oman: false, Pakistan: false, Palestine: false, Philippines: false, Qatar: false,
    ArabieSaoudite: false, Singapour: false, CoréeDuSud: false, SriLanka: false, Syrie: false, Taïwan: false, Tadjikistan: false,
    Thaïlande: false, Turquie: false, Turkménistan: false, ÉmiratsArabesUnis: false, Ouzbékistan: false, ViêtNam: false,
    Yémen: false
  },
  Océanie: {
    Australie: false, Fidji: false, Kiribati: false, ÎlesMarshall: false, Micronésie: false, Nauru: false,
    NouvelleZélande: false, Palaos: false, PapouasieNouvelleGuinée: false, Samoa: false, ÎlesSalomon: false, Tonga: false,
    Tuvalu: false, Vanuatu: false
  },
  Antarctique: false
};

function App() {
  const [formData, setFormData] = useState({
    visitedCountries: initialVisitedCountriesState,
    name: ''
  });

  // Function to toggle all countries in a continent
  const toggleContinent = (continent) => {
    const updatedFormData = { ...formData };
    const continentData = updatedFormData.visitedCountries[continent];

    // Toggle all countries in the continent
    for (let country in continentData) {
      continentData[country] = !continentData[country];
    }

    setFormData(updatedFormData);
  };

  // Function to toggle a specific country in a continent
  const toggleCountry = (continent, country) => {
    const updatedFormData = { ...formData };
    updatedFormData.visitedCountries[continent][country] = !updatedFormData.visitedCountries[continent][country];
    setFormData(updatedFormData);
  };

  // Function to handle name input change
  const handleNameChange = (event) => {
    setFormData({ ...formData, name: event.target.value });
  };

  return (
    <div>
      <h1>Pays visités</h1>
      <div>
        <label htmlFor="nameInput">Nom:</label>
        <input
          type="text"
          id="nameInput"
          value={formData.name}
          onChange={handleNameChange}
        />
      </div>
      {/* Render checkboxes for each continent */}
      {Object.keys(formData.visitedCountries).map(continent => (
        <div key={continent}>
          <h2>
            {continent}
            <input
              type="checkbox"
              checked={Object.values(formData.visitedCountries[continent]).every(country => country)}
              onChange={() => toggleContinent(continent)}
              style={{ marginLeft: '10px' }} // Adjust style as needed
            />
           
          </h2>
          <div>
            {/* Render checkboxes for each country in the continent */}
            {Object.keys(formData.visitedCountries[continent]).map(country => (
              <div key={country}>
                <input
                  type="checkbox"
                  checked={formData.visitedCountries[continent][country]}
                  onChange={() => toggleCountry(continent, country)}
                />
                <label>{country}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
