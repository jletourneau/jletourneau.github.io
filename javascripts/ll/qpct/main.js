(function (data) {

  var colors = {
    gray: '#4D4D4D',
    blue: '#5DA5DA',
    orange: '#FAA43A',
    green: '#60BD68',
    pink: '#F17CB0',
    brown: '#B2912F',
    purple: '#B276B2',
    yellow: '#DECF3F',
    red: '#F15854'
  };

  var rundle_defaults = {
    type: 'box',
    boxpoints: 'all',
    line: {
      width: 2.0
    },
    jitter: 0.8,
    pointpos: 2.0,
    marker: {
      size: 4.0
    }
  };

  var a_rundles = $.extend(true, {}, rundle_defaults, {
    name: 'A',
    y: data.a,
    marker: { color: colors.red }
  });
  // console.log('A rundles', a_rundles.y.length);

  var b_rundles = $.extend(true, {}, rundle_defaults, {
    name: 'B',
    y: data.b,
    marker: { color: colors.orange }
  });
  // console.log('B rundles', b_rundles.y.length);

  var c_rundles = $.extend(true, {}, rundle_defaults, {
    name: 'C',
    y: data.c,
    marker: { color: colors.yellow }
  });
  // console.log('C rundles', c_rundles.y.length);

  var d_rundles = $.extend(true, {}, rundle_defaults, {
    name: 'D',
    y: data.d,
    marker: { color: colors.green }
  });
  // console.log('D rundles', d_rundles.y.length);

  var e_rundles = $.extend(true, {}, rundle_defaults, {
    name: 'E',
    y: data.e,
    marker: { color: colors.blue }
  });
  // console.log('E rundles', e_rundles.y.length);

  var r_rundles = $.extend(true, {}, rundle_defaults, {
    name: 'R',
    y: data.r,
    marker: { color: colors.pink }
  });
  // console.log('R rundles', r_rundles.y.length);

  var grouped_layout = {
    title: 'Rundle-wide QPct by level, LL47–LL69',
    showlegend: false,
    height: 700,
    boxgap: 0.3,
    boxgroupgap: 0.3,
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
  Plotly.plot(
    document.getElementById('grouped_plot'),
    [a_rundles, b_rundles, c_rundles, d_rundles, e_rundles, r_rundles],
    grouped_layout
  );

  ////////////////////////////////////////////////////////////////////////////////

  var all_rundles = $.extend(true, {}, rundle_defaults, {
    name: 'All rundles',
    x: a_rundles.y
        .concat(b_rundles.y)
        .concat(c_rundles.y)
        .concat(d_rundles.y)
        .concat(e_rundles.y)
        .concat(r_rundles.y),
    marker: { color: colors.gray },
    orientation: 'h',
    pointpos: -2.0
  });
  // console.log('All rundles', all_rundles.x.length);

  var combined_layout = {
    title: 'All rundle-wide QPcts, LL47–LL69',
    showlegend: false,
    height: 400,
    font: {
      family: '"Helvetica Neue", Helvetica, Arial',
      size: 18.0
    },
    xaxis: {
      tickvals: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      tickformat: '.3f',
      range: [0.2, 0.9]
    },
    yaxis: {
      showticklabels: false
    }
  };

  Plotly.plot(
    document.getElementById('combined_plot'),
    [all_rundles],
    combined_layout
  );

})(LL_DATA);
