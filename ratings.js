import Chart from "chart.js/auto";

(async function () {
  let user_data = parseInt(localStorage.getItem("rating"), 10);
  console.log(user_data);

  // Define the data
  let data = [
    { Rating: 1 },
    { Rating: 1 },
    { Rating: 5 },
    { Rating: 1 },
    { Rating: 3 },
    { Rating: 1 },
    { Rating: 1 },
    { Rating: 2 },
    { Rating: 2 },
    { Rating: 1 },
  ];

  ratings = [0, 0, 0, 0, 0];
  data.forEach((item) => {
    const Rating = item.Rating;
    ratings[Rating - 1] += 1;
  });

  ratings[user_data - 1] += 1;

  const labels = ["1", "2", "3", "4", "5"];
  const counts = ratings;

  new Chart(document.getElementById("ratings"), {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Ratings",
          data: counts,
        },
      ],
    },
  });
})();
