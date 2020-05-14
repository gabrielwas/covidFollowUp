export const getData = (countryName) => {
  return fetch("https://pomber.github.io/covid19/timeseries.json")
    .then((response) => response.json())
    .then((data) => {
      const result = [
        {
          id: "confirmed",
          data: [],
        },
        {
          id: "recovered",
          data: [],
        },
        {
          id: "deaths",
          data: [],
        },
        {
          id: "activeCases",
          data: [],
        },
      ];

      data[countryName].forEach(({ date, confirmed, recovered, deaths }) => {
        let fixedDate = new Date("2020-03-03");
        let parsedDate = new Date(date);

        if (parsedDate > fixedDate) {
          result
            .find(({ id }) => id === "confirmed")
            .data.push({
              x: date,
              y: confirmed,
            });

          result
            .find(({ id }) => id === "recovered")
            .data.push({
              x: date,
              y: recovered,
            });

          result
            .find(({ id }) => id === "deaths")
            .data.push({
              x: date,
              y: deaths,
            });

            result
            .find(({ id }) => id === "activeCases")
            .data.push({
              x: date,
              y: confirmed - recovered,
            });
        }
      });

      return result;
    });
};