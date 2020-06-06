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

export const getCountryData = (countryName, data, rangeDays) => {
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

  let startDate = new Date("2020-03-03");
  let endDate = new Date("2020-03-03");

  startDate.setDate(startDate.getDate() + rangeDays[0]);
  endDate.setDate(endDate.getDate() + rangeDays[1]);

  data[countryName].forEach(({ date, confirmed, recovered, deaths }) => {
    let parsedDate = new Date(date);

    if (parsedDate > startDate && parsedDate < endDate) {
      result
        .find(({ id }) => id === "Confirmados")
        .data.push({
          x: parsedDate,
          y: confirmed,
        });

      result
        .find(({ id }) => id === "Recuperados")
        .data.push({
          x: parsedDate,
          y: recovered,
        });

      result
        .find(({ id }) => id === "Mortes")
        .data.push({
          x: parsedDate,
          y: deaths,
        });

      result
        .find(({ id }) => id === "Casos Ativos")
        .data.push({
          x: parsedDate,
          y: confirmed - recovered,
        });
    }
  });

  return result;
};

var days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
var months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

export const getDeaths = (countryData, rangeDays) => {
  const deathData = [];

  let prevDay = {
    y: 0,
  };

  let startDate = new Date("2020-03-03");
  let endDate = new Date("2020-03-03");

  startDate.setDate(startDate.getDate() + rangeDays[0] + 1);
  endDate.setDate(endDate.getDate() + rangeDays[1]);

  countryData
    .find(({ id }) => id === "Mortes")
    .data.forEach((day, index, arr) => {
      if (index > 0) {
        prevDay = arr[index - 1];
      }

      const parsedDate = new Date(day.x);
      if (parsedDate > startDate && parsedDate < endDate) {
        const dayWeek = days[parsedDate.getDay()];
        const dayOfMonth = parsedDate.getDate();
        const month = months[parsedDate.getMonth()];

        deathData.push({
          x: `${dayWeek} ${dayOfMonth} ${month}`,
          y: day.y - prevDay.y,
        });
      }
    });

  return deathData;
};

export const getWeekDeaths = (countryData, rangeDays) => {
  let prevDay = {
    y: 0,
  };

  let startDate = new Date("2020-03-03");
  let endDate = new Date("2020-03-03");

  startDate.setDate(startDate.getDate() + rangeDays[0] + 1);
  endDate.setDate(endDate.getDate() + rangeDays[1]);

  const deathData = [];

  countryData
    .find(({ id }) => id === "Mortes")
    .data.forEach((day, index, arr) => {
      if (index > 0) {
        prevDay = arr[index - 1];
      }

      const parsedDate = new Date(day.x);
      if (parsedDate > startDate && parsedDate < endDate) {
        deathData.push({
          x: parsedDate,
          y: day.y - prevDay.y,
        });
      }
    });

  const weekDeaths = [];
  let dayOfWeek = -1;

  let sumWeek = 0;

  deathData.forEach((data) => {
    if (data.x.getDay() > dayOfWeek) {
      sumWeek = sumWeek + data.y;
    } else {
      const currentDate = data.x;

      const dayWeek = days[currentDate.getDay()];
      const dayOfMonth = currentDate.getDate();
      const month = months[currentDate.getMonth()];

      weekDeaths.push({
        x: `${dayWeek} ${dayOfMonth} ${month}`,
        y: sumWeek,
      });

      sumWeek = data.y;
    }

    dayOfWeek = data.x.getDay();
  });

  return weekDeaths;
};
