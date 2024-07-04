const schema = {
  type: "object",
  properties: {
    nom: {
      type: "string",
      title: "Nom"
    },
    visitedCountries: {
      type: "object",
      title: "Liste de pays classés par Continents",
      properties: {
        Europe: {
          type: "object",
          title: "Europe",
          properties: {
            Albania: { type: "boolean", title: "Albanie" },
            Andorra: { type: "boolean", title: "Andorre" },
            Austria: { type: "boolean", title: "Autriche" },
            Belarus: { type: "boolean", title: "Biélorussie" },
            Belgium: { type: "boolean", title: "Belgique" },
            BosniaAndHerzegovina: { type: "boolean", title: "Bosnie-Herzégovine" },
            Bulgaria: { type: "boolean", title: "Bulgarie" },
            Croatia: { type: "boolean", title: "Croatie" },
            Cyprus: { type: "boolean", title: "Chypre" },
            CzechRepublic: { type: "boolean", title: "République Tchèque" },
            Denmark: { type: "boolean", title: "Danemark" },
            Estonia: { type: "boolean", title: "Estonie" },
            Finland: { type: "boolean", title: "Finlande" },
            France: { type: "boolean", title: "France" },
            Germany: { type: "boolean", title: "Allemagne" },
            Greece: { type: "boolean", title: "Grèce" },
            Hungary: { type: "boolean", title: "Hongrie" },
            Iceland: { type: "boolean", title: "Islande" },
            Ireland: { type: "boolean", title: "Irlande" },
            Italy: { type: "boolean", title: "Italie" },
            Kosovo: { type: "boolean", title: "Kosovo" },
            Latvia: { type: "boolean", title: "Lettonie" },
            Liechtenstein: { type: "boolean", title: "Liechtenstein" },
            Lithuania: { type: "boolean", title: "Lituanie" },
            Luxembourg: { type: "boolean", title: "Luxembourg" },
            Malta: { type: "boolean", title: "Malte" },
            Moldova: { type: "boolean", title: "Moldavie" },
            Monaco: { type: "boolean", title: "Monaco" },
            Montenegro: { type: "boolean", title: "Monténégro" },
            Netherlands: { type: "boolean", title: "Pays-Bas" },
            NorthMacedonia: { type: "boolean", title: "Macédoine du Nord" },
            Norway: { type: "boolean", title: "Norvège" },
            Poland: { type: "boolean", title: "Pologne" },
            Portugal: { type: "boolean", title: "Portugal" },
            Romania: { type: "boolean", title: "Roumanie" },
            Russia: { type: "boolean", title: "Russie" },
            SanMarino: { type: "boolean", title: "Saint-Marin" },
            Serbia: { type: "boolean", title: "Serbie" },
            Slovakia: { type: "boolean", title: "Slovaquie" },
            Slovenia: { type: "boolean", title: "Slovénie" },
            Spain: { type: "boolean", title: "Espagne" },
            Sweden: { type: "boolean", title: "Suède" },
            Switzerland: { type: "boolean", title: "Suisse" },
            Ukraine: { type: "boolean", title: "Ukraine" },
            UnitedKingdom: { type: "boolean", title: "Royaume-Uni" },
            VaticanCity: { type: "boolean", title: "Cité du Vatican" }
          }
        },
        Afrique: {
          type: "object",
          title: "Afrique",
          properties: {
            Algeria: { type: "boolean", title: "Algérie" },
            Angola: { type: "boolean", title: "Angola" },
            Benin: { type: "boolean", title: "Bénin" },
            Botswana: { type: "boolean", title: "Botswana" },
            BurkinaFaso: { type: "boolean", title: "Burkina Faso" },
            Burundi: { type: "boolean", title: "Burundi" },
            CaboVerde: { type: "boolean", title: "Cap-Vert" },
            Cameroon: { type: "boolean", title: "Cameroun" },
            CentralAfricanRepublic: { type: "boolean", title: "République centrafricaine" },
            Chad: { type: "boolean", title: "Tchad" },
            Comoros: { type: "boolean", title: "Comores" },
            DemocraticRepublicOfTheCongo: { type: "boolean", title: "République Démocratique du Congo" },
            Djibouti: { type: "boolean", title: "Djibouti" },
            Egypt: { type: "boolean", title: "Égypte" },
            EquatorialGuinea: { type: "boolean", title: "Guinée équatoriale" },
            Eritrea: { type: "boolean", title: "Érythrée" },
            Eswatini: { type: "boolean", title: "Eswatini" },
            Ethiopia: { type: "boolean", title: "Éthiopie" },
            Gabon: { type: "boolean", title: "Gabon" },
            Gambia: { type: "boolean", title: "Gambie" },
            Ghana: { type: "boolean", title: "Ghana" },
            Guinea: { type: "boolean", title: "Guinée" },
            GuineaBissau: { type: "boolean", title: "Guinée-Bissau" },
            IvoryCoast: { type: "boolean", title: "Côte d'Ivoire" },
            Kenya: { type: "boolean", title: "Kenya" },
            Lesotho: { type: "boolean", title: "Lesotho" },
            Liberia: { type: "boolean", title: "Libéria" },
            Libya: { type: "boolean", title: "Libye" },
            Madagascar: { type: "boolean", title: "Madagascar" },
            Malawi: { type: "boolean", title: "Malawi" },
            Mali: { type: "boolean", title: "Mali" },
            Mauritania: { type: "boolean", title: "Mauritanie" },
            Mauritius: { type: "boolean", title: "Île Maurice" },
            Morocco: { type: "boolean", title: "Maroc" },
            Mozambique: { type: "boolean", title: "Mozambique" },
            Namibia: { type: "boolean", title: "Namibie" },
            Niger: { type: "boolean", title: "Niger" },
            Nigeria: { type: "boolean", title: "Nigéria" },
            RepublicOfTheCongo: { type: "boolean", title: "République du Congo" },
            Rwanda: { type: "boolean", title: "Rwanda" },
            SaoTomeAndPrincipe: { type: "boolean", title: "Sao Tomé-et-Principe" },
            Senegal: { type: "boolean", title: "Sénégal" },
            Seychelles: { type: "boolean", title: "Seychelles" },
            SierraLeone: { type: "boolean", title: "Sierra Leone" },
            Somalia: { type: "boolean", title: "Somalie" },
            SouthAfrica: { type: "boolean", title: "Afrique du Sud" },
            SouthSudan: { type: "boolean", title: "Soudan du Sud" },
            Sudan: { type: "boolean", title: "Soudan" },
            Tanzania: { type: "boolean", title: "Tanzanie" },
            Togo: { type: "boolean", title: "Togo" },
            Tunisia: { type: "boolean", title: "Tunisie" },
            Uganda: { type: "boolean", title: "Ouganda" },
            Zambia: { type: "boolean", title: "Zambie" },
            Zimbabwe: { type: "boolean", title: "Zimbabwe" }
          }
        },
        Amérique: {
          type: "object",
          title: "Amérique",
          properties: {
            AntiguaAndBarbuda: { type: "boolean", title: "Antigua-et-Barbuda" },
            Bahamas: { type: "boolean", title: "Bahamas" },
            Barbados: { type: "boolean", title: "Barbade" },
            Belize: { type: "boolean", title: "Belize" },
            Canada: { type: "boolean", title: "Canada" },
            CostaRica: { type: "boolean", title: "Costa Rica" },
            Cuba: { type: "boolean", title: "Cuba" },
            Dominica: { type: "boolean", title: "Dominique" },
            DominicanRepublic: { type: "boolean", title: "République dominicaine" },
            ElSalvador: { type: "boolean", title: "El Salvador" },
            Grenada: { type: "boolean", title: "Grenade" },
            Guatemala: { type: "boolean", title: "Guatemala" },
            Haiti: { type: "boolean", title: "Haïti" },
            Honduras: { type: "boolean", title: "Honduras" },
            Jamaica: { type: "boolean", title: "Jamaïque" },
            Mexico: { type: "boolean", title: "Mexique" },
            Nicaragua: { type: "boolean", title: "Nicaragua" },
            Panama: { type: "boolean", title: "Panama" },
            SaintKittsAndNevis: { type: "boolean", title: "Saint-Christophe-et-Niévès" },
            SaintLucia: { type: "boolean", title: "Sainte-Lucie" },
            SaintVincentAndTheGrenadines: { type: "boolean", title: "Saint-Vincent-et-les-Grenadines" },
            TrinidadAndTobago: { type: "boolean", title: "Trinité-et-Tobago" },
            UnitedStates: { type: "boolean", title: "États-Unis" },
            Argentina: { type: "boolean", title: "Argentine" },
            Bolivia: { type: "boolean", title: "Bolivie" },
            Brazil: { type: "boolean", title: "Brésil" },
            Chile: { type: "boolean", title: "Chili" },
            Colombia: { type: "boolean", title: "Colombie" },
            Ecuador: { type: "boolean", title: "Équateur" },
            Guyana: { type: "boolean", title: "Guyana" },
            Paraguay: { type: "boolean", title: "Paraguay" },
            Peru: { type: "boolean", title: "Pérou" },
            Suriname: { type: "boolean", title: "Suriname" },
            Uruguay: { type: "boolean", title: "Uruguay" },
            Venezuela: { type: "boolean", title: "Venezuela" }
          }
        },
        Asie: {
          type: "object",
          title: "Asie",
          properties: {
            Afghanistan: { type: "boolean", title: "Afghanistan" },
            Armenia: { type: "boolean", title: "Arménie" },
            Azerbaijan: { type: "boolean", title: "Azerbaïdjan" },
            Bahrain: { type: "boolean", title: "Bahreïn" },
            Bangladesh: { type: "boolean", title: "Bangladesh" },
            Bhutan: { type: "boolean", title: "Bhoutan" },
            Brunei: { type: "boolean", title: "Brunéi" },
            Cambodia: { type: "boolean", title: "Cambodge" },
            China: { type: "boolean", title: "Chine" },
            Georgia: { type: "boolean", title: "Géorgie" },
            India: { type: "boolean", title: "Inde" },
            Indonesia: { type: "boolean", title: "Indonésie" },
            Iran: { type: "boolean", title: "Iran" },
            Iraq: { type: "boolean", title: "Irak" },
            Israel: { type: "boolean", title: "Israël" },
            Japan: { type: "boolean", title: "Japon" },
            Jordan: { type: "boolean", title: "Jordanie" },
            Kazakhstan: { type: "boolean", title: "Kazakhstan" },
            Kuwait: { type: "boolean", title: "Koweït" },
            Kyrgyzstan: { type: "boolean", title: "Kirghizistan" },
            Laos: { type: "boolean", title: "Laos" },
            Lebanon: { type: "boolean", title: "Liban" },
            Malaysia: { type: "boolean", title: "Malaisie" },
            Maldives: { type: "boolean", title: "Maldives" },
            Mongolia: { type: "boolean", title: "Mongolie" },
            Myanmar: { type: "boolean", title: "Myanmar" },
            Nepal: { type: "boolean", title: "Népal" },
            NorthKorea: { type: "boolean", title: "Corée du Nord" },
            Oman: { type: "boolean", title: "Oman" },
            Pakistan: { type: "boolean", title: "Pakistan" },
            Palestine: { type: "boolean", title: "Palestine" },
            Philippines: { type: "boolean", title: "Philippines" },
            Qatar: { type: "boolean", title: "Qatar" },
            SaudiArabia: { type: "boolean", title: "Arabie Saoudite" },
            Singapore: { type: "boolean", title: "Singapour" },
            SouthKorea: { type: "boolean", title: "Corée du Sud" },
            SriLanka: { type: "boolean", title: "Sri Lanka" },
            Syria: { type: "boolean", title: "Syrie" },
            Taiwan: { type: "boolean", title: "Taïwan" },
            Tajikistan: { type: "boolean", title: "Tadjikistan" },
            Thailand: { type: "boolean", title: "Thaïlande" },
            TimorLeste: { type: "boolean", title: "Timor oriental" },
            Turkey: { type: "boolean", title: "Turquie" },
            Turkmenistan: { type: "boolean", title: "Turkménistan" },
            UnitedArabEmirates: { type: "boolean", title: "Émirats arabes unis" },
            Uzbekistan: { type: "boolean", title: "Ouzbékistan" },
            Vietnam: { type: "boolean", title: "Vietnam" },
            Yemen: { type: "boolean", title: "Yémen" }
          }
        },
        Océanie: {
          type: "object",
          title: "Océanie",
          properties: {
            Australia: { type: "boolean", title: "Australie" },
            Fiji: { type: "boolean", title: "Fidji" },
            Kiribati: { type: "boolean", title: "Kiribati" },
            MarshallIslands: { type: "boolean", title: "Îles Marshall" },
            Micronesia: { type: "boolean", title: "Micronésie" },
            Nauru: { type: "boolean", title: "Nauru" },
            NewZealand: { type: "boolean", title: "Nouvelle-Zélande" },
            Palau: { type: "boolean", title: "Palaos" },
            PapuaNewGuinea: { type: "boolean", title: "Papouasie-Nouvelle-Guinée" },
            Samoa: { type: "boolean", title: "Samoa" },
            SolomonIslands: { type: "boolean", title: "Îles Salomon" },
            Tonga: { type: "boolean", title: "Tonga" },
            Tuvalu: { type: "boolean", title: "Tuvalu" },
            Vanuatu: { type: "boolean", title: "Vanuatu" }
          }
        }
      }
    }
  }
};

// Utilisation de JSON.stringify pour vérifier le schéma
console.log(JSON.stringify(schema, null, 2));