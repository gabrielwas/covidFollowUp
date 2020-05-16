export const getData = () => {
  return fetch("https://pomber.github.io/covid19/timeseries.json")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const getCountries = () => {
  return fetch("https://pomber.github.io/covid19/timeseries.json")
    .then((response) => response.json())
    .then((data) => {
      const countries = [];

      for (let [key, value] of Object.entries(data)) {
        const confirmedCasesLast =
          value[value.length - 1].confirmed - value[value.length - 1].recovered;
        const confirmedCasesBeforeLast =
          value[value.length - 2].confirmed - value[value.length - 2].recovered;

        let newCountry = {
          name: key,
          cases: value[value.length - 1].confirmed,
          progression:
            confirmedCasesLast < confirmedCasesBeforeLast ? false : true,
        };
        countries.push(newCountry);
      }

      countries.sort((a, b) => (a.cases < b.cases ? 1 : -1));

      return countries;
    });
};

export const getCountryData = (countryName, data) => {
  const result = [
    {
      id: "Mortes",
      data: [],
    },
    {
      id: "Recuperados",
      data: [],
    },
    {
      id: "Casos Ativos",
      data: [],
    },
    {
      id: "Confirmados",
      data: [],
    },
  ];

  data[countryName].forEach(({ date, confirmed, recovered, deaths }) => {
    let fixedDate = new Date("2020-03-03");
    let parsedDate = new Date(date);

    if (parsedDate > fixedDate) {
      result
        .find(({ id }) => id === "Confirmados")
        .data.push({
          x: date,
          y: confirmed,
        });

      result
        .find(({ id }) => id === "Recuperados")
        .data.push({
          x: date,
          y: recovered,
        });

      result
        .find(({ id }) => id === "Mortes")
        .data.push({
          x: date,
          y: deaths,
        });

      result
        .find(({ id }) => id === "Casos Ativos")
        .data.push({
          x: date,
          y: confirmed - recovered,
        });
    }
  });

  console.log(getDeaths(result));

  return result;
};

export const getDeaths = (countryData) => {
  const objDeaths = {
    deaths: "Mortes",
  };

  countryData
    .find(({ id }) => id === "Mortes")
    .data.forEach((dia) => {
      let startDate = new Date();

      startDate.setDate(startDate.getDate() - 6);

      if (new Date(dia.x) > startDate) {
        objDeaths[dia.x] = dia.y;
      }
    });

  const deathData = [];

  deathData.push(objDeaths);

  return deathData;
};
