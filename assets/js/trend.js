var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [{
      label: 'Oil Trend',
      data: [0,
        -100,
        -210,
        -250,
        200,
        100,
        250, 100,
        200, 200
        , 200, 500],
      backgroundColor: 'transparent',
      borderColor: '#007bff',
      borderWidth: 2,
      pointBackgroundColor: '#007bff',
    }]
  },
  
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});