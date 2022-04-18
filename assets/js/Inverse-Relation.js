am4core.ready(function() {

      // Apply chart themes
  am4core.useTheme(am4themes_animated);
  // am4core.useTheme(am4themes_kelly);

  // Create chart instance
  var chart = am4core.create("chartdiv1", am4charts.XYChart);

  // Add data
  chart.data = [{
    "country": "2019Q4",
    "litres": 56.7,
    "units": 1
  }, {
    "country": "2020Q1",
    "litres": 22.83,
    "units": 80977
  }, {
    "country": "2020Q2",
    "litres": 33.08,
    "units": 2011
  }, {
    "country": "2020Q3",
    "litres": 49.02,
    "units": 1878
  }, {
    "country": "2020Q4",
    "litres": 49.81,
    "units": 1659
  }, {
    "country": "2021Q1",
    "litres": 35.39,
    "units": 3146
  }, {
    "country": "2021Q2",
    "litres": 50.06,
    "units": 1675
  }, {
    "country": "2021Q3",
    "litres": 43.68,
    "units": 4375
  }, {
    "country": "2021Q4",
    "litres": 42.22,
    "units": 6152
  }];

  var label = chart.chartContainer.createChild(am4core.Label);
    label.text = "(Sources: Ministry of Culture and Tourism of PRC, National Health Commission)";
    label.align = "center";
    // label.isMeasured = false;
    label.fontSize = 13;
    label.x = 300;
    label.y = 300;

  // Create axes
  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "country";
  // categoryAxis.title.text = "Quarters";

  // First value axis
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.title.text = "Average Occupancy Rate (%)";
  // am4core.NumberFormatter();
  // valueAxis.numberFormatter = new
  // valueAxis.numberFormatter.numberFormat = "#'%'"
  valueAxis.renderer.labels.template.adapter.add("text", function(text) {
    return text + "%";
  });

  // Second value axis
  var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis2.title.text = "New Cases";
  valueAxis2.renderer.opposite = true;
  valueAxis2.logarithmic = true;
  // valueAxis2.numberFormatter.numberFormat = false;
  

  // First series
  var series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueY = "litres";
  series.dataFields.categoryX = "country";
  series.name = "Occupancy Rate";
  series.tooltipText = "{name}: [bold]{valueY}[/]";

  // Second series
  var series2 = chart.series.push(new am4charts.LineSeries());
  series2.dataFields.valueY = "units";
  series2.dataFields.categoryX = "country";
  series2.name = "New Cases";
  series2.tooltipText = "{name}: [bold]{valueY}[/]";
  series2.strokeWidth = 3;
  series2.yAxis = valueAxis2;

  // Add legend
  chart.legend = new am4charts.Legend();
  chart.legend.position = "top";
  // chart.legend.position = "left";


  // Add cursor
  chart.cursor = new am4charts.XYCursor();
  
  var title = chart.titles.create();
    title.text = " Inverse Relationship between Occupancy Rates and Covid Cases";
    title.fontSize = 20;
    title.marginTop = 20;
    title.textAlign = "left";
    title.marginBottom = 20;
  
  }); // end am4core.ready()


  