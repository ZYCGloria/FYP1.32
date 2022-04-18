am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("chartdiv11", am4charts.RadarChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    
    chart.data = [
      {
        category: "2021H2",
        value5: 10,
        value4: 705,
        value3: 3196,
        value2: 2132,
        value1: 758
      },
      {
        category: "2021H1",
        value5: 20,
        value4: 782,
        value3: 3277,
        value2: 2079,
        value1: 736
      },
      {
        category: "2020H2",
        value5: 21,
        value4: 879,
        value3: 3462,
        value2: 2118,
        value1: 742
      },
      {
        category: "2020H1",
        value5: 19,
        value4: 784,
        value3: 2988,
        value2: 1874,
        value1: 680
      },
      {
        category: "2019H2",
        value5: 25,
        value4: 988,
        value3: 3565,
        value2: 2117,
        value1: 739
      },
      {
        category: "2019H1",
        value5: 73,
        value4: 1862,
        value3: 4961,
        value2: 2542,
        value1: 846
      }
    ];
    
    //chart.padding(20, 20, 20, 20);
    chart.colors.step = 4;
    
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.labels.template.location = 0.5;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.fontSize = 12;

    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.tooltipLocation = 0.5;
    categoryAxis.renderer.grid.template.strokeOpacity = 0.07;
    categoryAxis.renderer.axisFills.template.disabled = true;
    categoryAxis.interactionsEnabled = false;
    categoryAxis.renderer.minGridDistance = 10;
    
    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.labels.template.horizontalCenter = "left";
    valueAxis.min = 0;
    // valueAxis.max = 60;
    // valueAxis.strictMinMax = true;
    valueAxis.renderer.maxLabelPosition = 0.99;
    valueAxis.renderer.minGridDistance = 50;
    valueAxis.renderer.grid.template.strokeOpacity = 0.07;
    valueAxis.renderer.axisFills.template.disabled = true;
    valueAxis.interactionsEnabled = false;
    
    var series1 = chart.series.push(new am4charts.RadarColumnSeries());
    series1.columns.template.tooltipText = "{name}: {valueX.value}";
    series1.name = "5-star";
    series1.dataFields.categoryY = "category";
    series1.dataFields.valueX = "value1";
    series1.stacked = true;
    
    var series2 = chart.series.push(new am4charts.RadarColumnSeries());
    series2.columns.template.tooltipText = "{name}: {valueX.value}";
    series2.name = "4-star";
    series2.dataFields.categoryY = "category";
    series2.dataFields.valueX = "value2";
    series2.stacked = true;
    
    var series3 = chart.series.push(new am4charts.RadarColumnSeries());
    series3.columns.template.tooltipText = "{name}: {valueX.value}";
    series3.name = "3-star";
    series3.dataFields.categoryY = "category";
    series3.dataFields.valueX = "value3";
    series3.stacked = true;
    
    var series4 = chart.series.push(new am4charts.RadarColumnSeries());
    series4.columns.template.tooltipText = "{name}: {valueX.value}";
    series4.name = "2-star";
    series4.dataFields.categoryY = "category";
    series4.dataFields.valueX = "value4";
    series4.stacked = true;

    var series5 = chart.series.push(new am4charts.RadarColumnSeries());
    series5.columns.template.tooltipText = "{name}: {valueX.value}";
    series5.name = "1-star";
    series5.dataFields.categoryY = "category";
    series5.dataFields.valueX = "value5";
    series5.stacked = true;
    
    chart.seriesContainer.zIndex = -1;
    
    // chart.scrollbarX = new am4core.Scrollbar();
    // chart.scrollbarX.exportable = false;
    // chart.scrollbarY = new am4core.Scrollbar();
    // chart.scrollbarY.exportable = false;
    
    chart.cursor = new am4charts.RadarCursor();
    chart.cursor.lineY.disabled = true;

    var title = chart.titles.create();
        title.text = "Number of Star Hotels Nationwide (H)";
        title.fontSize = 20;
        title.marginTop = 20;
        title.marginBottom = 20;
        
    // var label = chart.chartContainer.createChild(am4core.Label);
    //   label.text = "(Sources: Company Financial Reports)";
    //   label.align = "center";
    //   // label.isMeasured = false;
    //   label.fontSize = 13;
    //   label.x = 300;
    //   label.y = 400;

    
    }); // end am4core.ready()