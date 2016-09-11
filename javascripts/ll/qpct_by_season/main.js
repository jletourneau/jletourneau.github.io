(function (data) {

  var marker_colors = [
    'rgba(255, 0, 0, 0.4)',
    'rgba(0, 153, 0, 0.4)',
    'rgba(0, 0, 255, 0.4)'
  ];
  var line_colors = [
    'rgba(255, 0, 0, 0.5)',
    'rgba(0, 153, 0, 0.5)',
    'rgba(0, 0, 255, 0.5)'
  ];
  var fill_colors = [
    'rgba(255, 0, 0, 0.1)',
    'rgba(0, 153, 0, 0.1)',
    'rgba(0, 0, 255, 0.1)'
  ];

  var data_defaults = {
    type: 'box',
    orientation: 'v',
    boxpoints: 'all',
    line: {
      width: 1.0,
    },
    jitter: 0.8,
    pointpos: 0.0,
    boxgap: 1.0,
    marker: {
      color: '#666666',
      size: 4.0
    }
  };

  var seasons = []
  $.each(data, function(season, qpct_list) {
    var season_data = $.extend(true, {}, data_defaults, {
      name: ('LL' + season),
      fillcolor: fill_colors[season % fill_colors.length],
      line: { color: line_colors[season % line_colors.length] },
      marker: { color: marker_colors[season % marker_colors.length] },
      y: qpct_list
    });
    seasons.push(season_data);
  });

  var layout = {
    title: 'Rundle overall QPct by season, LL47–69',
    showlegend: false,
    height: 700,
    font: {
      family: '"Helvetica Neue", Helvetica, Arial',
      size: 18.0
    },
    yaxis: {
      tickvals: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      tickformat: '.3f',
      range: [0.2, 0.9]
    }
  };

  var plot = document.getElementById('plot')
  Plotly.plot(plot, seasons, layout);

})(QPCT_BY_LL);
