import { statesBrazil } from "../constants/statesBrazil";
import { days, months } from "../constants/calendarConstants";

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

export const getDailyDeathsByStateBR = (stateData) => {
  const reversedData = stateData.reverse();

  const stateBRDeaths = [];
  let prevDay = 0;

  reversedData.forEach((element, index, arr) => {
    if (index > 0) {
      prevDay = arr[index - 1].y;
    }

    const dayWeek = days[element.x.getDay()];
    const dayOfMonth = element.x.getDate();
    const month = months[element.x.getMonth()];

    stateBRDeaths.push({
      x: `${dayWeek} ${dayOfMonth} ${month}`,
      y: element.y - prevDay,
    });
  });

  return stateBRDeaths;
};

export const loadStates = () => {
  const endpoint =
    "https://brasil.io/api/dataset/covid19/caso/data?is_last=True&place_type=state";

  const statesBR = [];

  return fetch(endpoint)
    .then((response) => response.json())
    .then(({ results }) => {
      results.forEach((element) => {
        statesBR.push({
          initials: element.state,
          name: statesBrazil.find((st) => st.sigla === element.state).nome,
          estimated_population_2019: element.estimated_population_2019,
          confirmed: element.confirmed,
          confirmed_per_100k_inhabitants:
            element.confirmed_per_100k_inhabitants,
        });
      });

      statesBR.sort((a, b) => (a.confirmed < b.confirmed ? 1 : -1));

      return statesBR;
    });
};
