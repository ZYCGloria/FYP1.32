am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // var label = chart.chartContainer.createChild(am4core.Label);
    //   label.text = "(Sources: Ministry of Finance of PRC)";
    //   label.align = "center";
    //   // label.isMeasured = false;
    //   label.fontSize = 13;
    //   label.x = 300;
    //   label.y = 400;
  
    var data = [{
      "country": "2017",
      "units": 3746,
      "pie": [{
        "value": 671,
        "title": "Num of Hotels Owned"
      }, {
        "value": 3075,
        "title": "Num of Franchised Hotels"
      }]
    }, {
      "country": "2018",
      "units": 4230,
      "pie": [{
        "value": 699,
        "title": "Num of Hotels Owned"
      }, {
        "value": 3531,
        "title": "Num of Franchised Hotels"
      }]
    }, {
      "country": "2019",
      "units": 5618,
      "pie": [{
        "value": 688,
        "title": "Num of Hotels Owned"
      }, {
        "value": 4930,
        "title": "Num of Franchised Hotels"
      }]
    }, {
      "country": "2020",
      "units": 6789,
      "pie": [{
        "value":681,
        "title": "Num of Hotels Owned"
      }, {
        "value": 6108,
        "title": "Num of Franchised Hotels"
      }]
    }, {
      "country": "2021",
      "units": 7830,
      "pie": [{
        "value": 662,
        "title": "Num of Hotels Owned"
      }, {
        "value": 7168,
        "title": "Num of Franchised Hotels"
      }]
    }];
     
       
    // Create chart instance
    var chart = am4core.create("chartdiv8", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    
    // Add data
    chart.data = data;
    
    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.disabled = true;
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.title.text = "Total Healthcare Expenditure (RMB Billion)";
    valueAxis.min = 0;
    valueAxis.renderer.baseGrid.disabled = true;
    valueAxis.renderer.grid.template.strokeOpacity = 0.07;
    
    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "units";
    series.dataFields.categoryX = "country";
    series.tooltip.pointerOrientation = "vertical";
    
    
    var columnTemplate = series.columns.template;
    // add tooltip on column, not template, so that slices could also have tooltip
    columnTemplate.column.tooltipText = "Total Number of Hotels: {valueY}";
    columnTemplate.column.tooltipY = 0;
    columnTemplate.column.cornerRadiusTopLeft = 20;
    columnTemplate.column.cornerRadiusTopRight = 20;
    columnTemplate.strokeOpacity = 0;
    
    
    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    columnTemplate.adapter.add("fill", function(fill, target) {
      var color = chart.colors.getIndex(target.dataItem.index * 1);
      return color;
    });
  
    var title = chart.titles.create();
        title.text = "Number of Different Types of Hotels by Year";
        title.fontSize = 20;
        title.marginTop = 20;
        title.marginBottom = 20;
        
    var label = chart.chartContainer.createChild(am4core.Label);
      label.text = "(Sources: Company Financial Reports)";
      label.align = "center";
      // label.isMeasured = false;
      label.fontSize = 13;
      label.x = 300;
      label.y = 400;
    
    // create pie chart as a column child
    var pieChart = series.columns.template.createChild(am4charts.PieChart);
    pieChart.width = am4core.percent(80);
    pieChart.height = am4core.percent(80);
    pieChart.align = "center";
    pieChart.valign = "middle";
    pieChart.dataFields.data = "pie";
    
    var pieSeries = pieChart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "title";
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
    pieSeries.slices.template.stroke = am4core.color("#ffffff");
    pieSeries.slices.template.strokeWidth = 1;
    pieSeries.slices.template.strokeOpacity = 0;
    
    pieSeries.slices.template.adapter.add("fill", function(fill, target) {
      return am4core.color("#ffffff")
    });
    
    pieSeries.slices.template.adapter.add("fillOpacity", function(fillOpacity, target) {
      return (target.dataItem.index + 1) * 0.2;
    });
    
    pieSeries.hiddenState.properties.startAngle = -90;
    pieSeries.hiddenState.properties.endAngle = 270;
    
  
    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    
    // Add data
    chart.data = data;
    
    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.disabled = true;
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Units sold (M)";
    valueAxis.min = 0;
    valueAxis.renderer.baseGrid.disabled = true;
    valueAxis.renderer.grid.template.strokeOpacity = 0.07;
    
    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "units";
    series.dataFields.categoryX = "country";
    series.tooltip.pointerOrientation = "vertical";
    
    
    var columnTemplate = series.columns.template;
    // add tooltip on column, not template, so that slices could also have tooltip
    columnTemplate.column.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
    columnTemplate.column.tooltipY = 0;
    columnTemplate.column.cornerRadiusTopLeft = 20;
    columnTemplate.column.cornerRadiusTopRight = 20;
    columnTemplate.strokeOpacity = 0;
    
    
    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    columnTemplate.adapter.add("fill", function(fill, target) {
      var color = chart.colors.getIndex(target.dataItem.index * 3);
      return color;
    });
    
    // create pie chart as a column child
    var pieChart = series.columns.template.createChild(am4charts.PieChart);
    pieChart.width = am4core.percent(80);
    pieChart.height = am4core.percent(80);
    pieChart.align = "center";
    pieChart.valign = "middle";
    pieChart.dataFields.data = "pie";
    
    var pieSeries = pieChart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "title";
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
    pieSeries.slices.template.strokeWidth = 1;
    
    pieSeries.slices.template.adapter.add("stroke", function(stroke, target) {
      return chart.colors.getIndex(target.parent.parent.dataItem.index * 3);
    });
    
    pieSeries.slices.template.adapter.add("fill", function(fill, target) {
      return am4core.color("#ffffff")
    });
    
    pieSeries.slices.template.adapter.add("fillOpacity", function(fillOpacity, target) {
      return (target.dataItem.index + 1) * 0.2;
    });
    
    pieSeries.hiddenState.properties.startAngle = -90;
    pieSeries.hiddenState.properties.endAngle = 270;
    
    // this moves the pie out of the column if column is too small
    pieChart.adapter.add("verticalCenter", function(verticalCenter, target) {
      var point = am4core.utils.spritePointToSprite({ x: 0, y: 0 }, target.seriesContainer, chart.plotContainer);
      point.y -= target.dy;
    
      if (point.y > chart.plotContainer.measuredHeight - 15) {
        target.dy = -target.seriesContainer.measuredHeight - 15;
      }
      else {
        target.dy = 0;
      }
      return verticalCenter
    })
    
    // var title = chart.titles.create();
    //     title.text = "Surging Healthcare Expenditure due to Covid(RMB Billion)";
    //     title.fontSize = 20;
    //     title.marginTop = 20;
    //     title.marginBottom = 20;
  
    // var label = chart.chartContainer.createChild(am4core.Label);
    //   label.text = "(Sources: Ministry of Finance of PRC)";
    //   label.align = "center";
    //   // label.isMeasured = false;
    //   label.fontSize = 13;
    //   label.x = 300;
    //   label.y = 400;
  
    }); // end am4core.ready()