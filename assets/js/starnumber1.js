am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiv3", am4charts.XYChart);
    // chart.scrollbarX = new am4core.Scrollbar();
    
    // Add data
    chart.data = [{
      "country": "2019Q4",
      "visits": 7434
    }, {
      "country": "2020Q1",
      "visits": 7101
    }, {
      "country": "2020Q2",
      "visits": 6345
    }, {
      "country": "2020Q3",
      "visits": 7060
    }, {
      "country": "2020Q4",
      "visits": 7222
    }, {
      "country": "2021Q1",
      "visits": 7104
    }, {
      "country": "2021Q2",
      "visits": 6894
    }, {
      "country": "2021Q3",
      "visits": 6999
    }, {
      "country": "2021Q4",
      "visits": 6801
    }];

    var label = chart.chartContainer.createChild(am4core.Label);
    label.text = "(Sources: Ministry of Culture and Tourism of PRC, China Hotel Association)";
    label.align = "center";
    // label.isMeasured = false;
    label.fontSize = 13;
    label.x = 300;
    label.y = 300;
    
    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 315;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 110;
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;
    
    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;
    
    series.tooltip.pointerOrientation = "vertical";
    
    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;
    
    // on hover, make corner radiuses bigger
    var hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;
    
    series.columns.template.adapter.add("fill", function(fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });
    
    // Cursor
    chart.cursor = new am4charts.XYCursor();

    var title = chart.titles.create();
    title.text = "Number of Star-rated Hotels Nationwide (by Quarter)";
    title.fontSize = 20;
    title.marginTop = 20;
    title.textAlign = "left";
    title.marginBottom = 20;
    
    }); // end am4core.ready()