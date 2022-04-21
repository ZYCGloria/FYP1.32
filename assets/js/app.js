am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    var chart = am4core.create("chartdiv12", am4charts.XYChart);

    // Add data
    chart.data = [{
        "date": "2020Q1",
        "value": 341.1
    }, {
        "date": "2020Q2",
        "value": 326.8
    }, {
        "date": "2020Q3",
        "value": 346.3
    }, {
        "date": "2020Q4",
        "value": 339.9
    }, {
        "date": "2021Q1",
        "value": 359.3
    }, {
        "date": "2021Q2",
        "value": 406.1
    }];

    // Create axes
    // var dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.ticks.template.disabled = true;
    categoryAxis.renderer.line.opacity = 0;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.dataFields.category = "date";
    categoryAxis.startLocation = 0.2;
    categoryAxis.endLocation = 0.8;

    // Create value axis
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.valueY = "value";
    lineSeries.dataFields.categoryX = "date";
    lineSeries.name = "Number";
    lineSeries.strokeWidth = 3;

    // Add simple bullet
    var bullet = lineSeries.bullets.push(new am4charts.Bullet());
    var image = bullet.createChild(am4core.Image);
    image.href = "https://www.amcharts.com/lib/images/star.svg";
    image.width = 30;
    image.height = 30;
    image.horizontalCenter = "middle";
    image.verticalCenter = "middle";

    var title = chart.titles.create();
    title.text = "Number of Active Users of Online Travel Booking APPs (Million)";
    title.fontSize = 20;
    title.marginTop = 20;
    title.marginBottom = 20;

    var label = chart.chartContainer.createChild(am4core.Label);
    label.text = "(Source: Analysys International)";
    label.align = "center";
    // label.isMeasured = false;
    label.fontSize = 13;
    label.x = 300;
    label.y = 400;

}); // end am4core.ready()