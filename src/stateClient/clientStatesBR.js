export const getDataByStateBR = (stateBR) => {
  const endpoint =
    "https://brasil.io/api/dataset/covid19/caso/data?place_type=state&state=" +
    stateBR;

  const result = [
    {
      id: "Confirmados",
      data: [],
    },
    {
      id: "Mortes",
      data: [],
    },
  ];

  return fetch(endpoint)
    .then((response) => response.json())
    .then(({ results }) => {
      results.forEach((element) => {
        const parsedDate = new Date(element.date);

        result
          .find(({ id }) => id === "Confirmados")
          .data.push({
            x: parsedDate,
            y: element.confirmed,
          });

        result
          .find(({ id }) => id === "Mortes")
          .data.push({
            x: parsedDate,
            y: element.deaths,
          });
      });

      return result;
    });
};
