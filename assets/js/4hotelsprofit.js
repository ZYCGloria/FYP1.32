am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end



    var chart = am4core.create('chartdiv10', am4charts.XYChart)
    chart.colors.step = 2;

    chart.legend = new am4charts.Legend()
    chart.legend.position = 'top'
    chart.legend.paddingBottom = 20
    chart.legend.labels.template.maxWidth = 95

    var xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'category'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;

    var yAxis = chart.yAxes.push(new am4charts.ValueAxis());


    function createSeries(value, name) {
        var series = chart.series.push(new am4charts.ColumnSeries())
        series.dataFields.valueY = value
        series.dataFields.categoryX = 'category'
        series.name = name

        // series.events.on("hidden", arrangeColumns);
        // series.events.on("shown", arrangeColumns);

        series.columns.template.tooltipText = "{name}: [bold]{valueY}m[/]";
        series.columns.template.height = am4core.percent(100);
        series.sequencedInterpolation = true;

        // var bullet = series.bullets.push(new am4charts.LabelBullet())
        // bullet.interactionsEnabled = false
        // bullet.dy = 30;
        // bullet.label.text = '{valueY}'
        // bullet.label.fill = am4core.color('#ffffff')

        return series;
    }

    var title = chart.titles.create();
        title.text = "Net Profit Change of Hotel Groups (RMB million)";
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

    chart.data = [
        {
            category: 'Jin Jiang',
            first: 1092.5,
            second: 110.2,
            third: 100.6
        },
        {
            category: 'BTG',
            first: 885,
            second: -496,
            third: 55.7
        },
        {
            category: 'Huazhu',
            first: 1761,
            second: -2204,
            third: -480
        },
        {
            category: 'IHG',
            first: 2457,
            second: -1655,
            third: 1687
        }
    ]


    createSeries('first', '2019');
    createSeries('second', '2020');
    createSeries('third', '2021');

    function arrangeColumns() {

        var series = chart.series.getIndex(0);

        var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
        if (series.dataItems.length > 1) {
            var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
            var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
            var delta = ((x1 - x0) / chart.series.length) * w;
            if (am4core.isNumber(delta)) {
                var middle = chart.series.length / 2;

                var newIndex = 0;
                chart.series.each(function (series) {
                    if (!series.isHidden && !series.isHiding) {
                        series.dummyData = newIndex;
                        newIndex++;
                    }
                    else {
                        series.dummyData = chart.series.indexOf(series);
                    }
                })
                var visibleCount = newIndex;
                var newMiddle = visibleCount / 2;

                chart.series.each(function (series) {
                    var trueIndex = chart.series.indexOf(series);
                    var newIndex = series.dummyData;

                    var dx = (newIndex - trueIndex + middle - newMiddle) * delta

                    series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                })
            }
        }
    }

}); // end am4core.ready()