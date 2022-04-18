am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("chartdiv2", am4charts.XYChart);

    chart.data = [{
        "year": "2019Q4",
        "cars": 21.6,
        "motorcycles": 20.3,
        "bicycles": 7.4
    }, {
        "year": "2020Q1",
        "cars": 6.5,
        "motorcycles": 7.7,
        "bicycles": 3.6
    }, {
        "year": "2020Q2",
        "cars": 8.5,
        "motorcycles": 8.7,
        "bicycles": 4.7
    }, {
        "year": "2020Q3",
        "cars": 15.7,
        "motorcycles": 15.0,
        "bicycles": 6.2
    }, {
        "year": "2020Q4",
        "cars": 16.5,
        "motorcycles": 18.8,
        "bicycles": 7.2
    }, {
        "year": "2021Q1",
        "cars": 10.4,
        "motorcycles": 11.8,
        "bicycles": 4.9
    }, {
        "year": "2021Q2",
        "cars": 16.7,
        "motorcycles": 14.9,
        "bicycles": 5.6
    }, {
        "year": "2021Q3",
        "cars": 14.8,
        "motorcycles": 14.1,
        "bicycles": 6.5
    }, {
        "year": "2021Q4",
        "cars": 14.0,
        "motorcycles": 15.6,
        "bicycles": 6.6

    }];

    var label = chart.chartContainer.createChild(am4core.Label);
    label.text = "(Sources: Ministry of Culture and Tourism of PRC, China Hotel Association)";
    label.align = "center";
    // label.isMeasured = false;
    label.fontSize = 13;
    label.x = 300;
    label.y = 300;

    // chart.dateFormatter.inputDateFormat = "yyyy.q";
    // var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    // dateAxis.renderer.minGridDistance = 60;
    // dateAxis.startLocation = 0.5;
    // dateAxis.endLocation = 0.5;
    // dateAxis.baseInterval = {
    //     timeUnit: "quarter",
    //     count: 1
    // }

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;

    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.categoryX = "year";
    series.name = "Room Revenue";
    series.dataFields.valueY = "cars";
    // series.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/car.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
    series.tooltipText = "[#000]{valueY.value}[/]";
    series.tooltip.background.fill = am4core.color("#FFF");
    series.tooltip.getStrokeFromObject = true;
    series.tooltip.background.strokeWidth = 3;
    series.tooltip.getFillFromObject = false;
    series.fillOpacity = 0.6;
    series.strokeWidth = 2;
    series.stacked = true;

    var series2 = chart.series.push(new am4charts.LineSeries());
    series2.name = "Food Service Revenue";
    series2.dataFields.categoryX = "year";
    series2.dataFields.valueY = "motorcycles";
    // series2.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/motorcycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
    series2.tooltipText = "[#000]{valueY.value}[/]";
    series2.tooltip.background.fill = am4core.color("#FFF");
    series2.tooltip.getFillFromObject = false;
    series2.tooltip.getStrokeFromObject = true;
    series2.tooltip.background.strokeWidth = 3;
    series2.sequencedInterpolation = true;
    series2.fillOpacity = 0.6;
    series2.stacked = true;
    series2.strokeWidth = 2;

    var series3 = chart.series.push(new am4charts.LineSeries());
    series3.name = "Other Revenue";
    series3.dataFields.categoryX = "year";
    series3.dataFields.valueY = "bicycles";
    // series3.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
    series3.tooltipText = "[#000]{valueY.value}[/]";
    
    series3.tooltip.background.fill = am4core.color("#FFF");
    series3.tooltip.getFillFromObject = false;
    series3.tooltip.getStrokeFromObject = true;
    series3.tooltip.background.strokeWidth = 3;
    series3.sequencedInterpolation = true;
    series3.fillOpacity = 0.6;
    series3.defaultState.transitionDuration = 1000;
    series3.stacked = true;
    series3.strokeWidth = 2;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = categoryAxis;
    // chart.scrollbarX = new am4core.Scrollbar();

    // Add a legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";

    // axis ranges
    var range = categoryAxis.axisRanges.create();
    range.category = "2020Q1";
    range.endcategory = "2020Q3";
    range.axisFill.fill = chart.colors.getIndex(7);
    range.axisFill.fillOpacity = 0.2;

    range.label.text = "Outbreak";
    range.label.inside = true;
    range.label.rotation = 90;
    range.label.horizontalCenter = "right";
    range.label.verticalCenter = "bottom";
    // range.label.x = 0;
    // range.label.y = 30;

    var range2 = categoryAxis.axisRanges.create();
    range2.category = "2021Q1";
    range2.endcategory = "2021Q3";
    range2.axisFill.fill = chart.colors.getIndex(7);
    range2.axisFill.fillOpacity = 0.2;

    range2.label.text = "Recurrence";
    range2.label.inside = true;
    range2.label.rotation = 90;
    range2.label.horizontalCenter = "right";
    range2.label.verticalCenter = "bottom";

    var title = chart.titles.create();
    title.text = "Revenue Decline across the National Hotel Industry";
    title.fontSize = 20;
    title.marginTop = 20;
    title.textAlign = "left";
    title.marginBottom = 20;

}); // end am4core.ready()