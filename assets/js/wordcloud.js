am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("chartdiv5", am4plugins_wordCloud.WordCloud);
    chart.fontFamily = "Courier New";
    var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    series.randomness = 0.1;
    series.rotationThreshold = 0.5;
    
    series.data = [ {
        "tag": "disinfection",
        "count": "1765836"
    }, {
        "tag": "quarantine",
        "count": "1517355"
    }, {
        "tag": "hotels",
        "count": "1287629"
    }, {
        "tag": "prevention and control",
        "count": "1263946"
    }, {
        "tag": "infection",
        "count": "1174721"
    }, {
        "tag": "pandemic",
        "count": "1116769"
    }, {
        "tag": "covid",
        "count": "944983"
    }, {
        "tag": "travel",
        "count": "805679"
    }, {
        "tag": "masks",
        "count": "606051"
    }, {
        "tag": "fighting",
        "count": "591410"
    }, {
        "tag": "policy",
        "count": "574684"
    }, {
        "tag": "room rate",
        "count": "550916"
    }, {
        "tag": "thank-you",
        "count": "479892"
    }, {
        "tag": "cencel",
        "count": "343092"
    }, {
        "tag": "normal",
        "count": "303311"
    }, {
        "tag": "severe",
        "count": "296963"
    }, {
        "tag": "worry",
        "count": "288445"
    }, {
        "tag": "isolation",
        "count": "286823"
    }, {
        "tag": "meals",
        "count": "280079"
    }, {
        "tag": "allowance",
        "count": "277144"
    }, {
        "tag": "operations",
        "count": "263451"
    }, {
        "tag": "loss",
        "count": "257159"
    }, {
        "tag": "challenge",
        "count": "255661"
    }, {
        "tag": "testing",
        "count": "253824"
    }, {
        "tag": "temperature",
        "count": "222387"
    }, {
        "tag": "delivery",
        "count": "219827"
    }, {
        "tag": "QR Code",
        "count": "203121"
    }, {
        "tag": "holiday",
        "count": "202547"
    }, {
        "tag": "helping",
        "count": "196727"
    }, {
        "tag": "delay",
        "count": "191174"
    }, {
        "tag": "comfortable",
        "count": "188787"
    }, {
        "tag": "closure",
        "count": "180742"
    }, {
        "tag": "panic",
        "count": "178291"
    }, {
        "tag": "happy new year",
        "count": "173278"
    }, {
        "tag": "return to work",
        "count": "154447"
    }, {
        "tag": "database",
        "count": "153581"
    }, {
        "tag": "online",
        "count": "147538"
    }, {
        "tag": "wifi",
        "count": "147456"
    }, {
        "tag": "delivery",
        "count": "145801"
    }, {
        "tag": "grocery",
        "count": "145685"
    }, {
        "tag": "immune",
        "count": "139940"
    }, {
        "tag": "recovery",
        "count": "136649"
    }, {
        "tag": "luxury",
        "count": "130591"
    }, {
        "tag": "refund",
        "count": "127680"
    }, {
        "tag": "danger",
        "count": "125021"
    }, {
        "tag": "pandemic",
        "count": "122559"
    }, {
        "tag": "spring",
        "count": "118810"
    }, {
        "tag": "depressed",
        "count": "115802"
    }, {
        "tag": "lonely",
        "count": "113719"
    }, {
        "tag": "blow",
        "count": "110348"
    }, {
        "tag": "hope",
        "count": "109340"
    }, {
        "tag": "responsibility",
        "count": "108797"
    }, {
        "tag": "relief",
        "count": "108075"
    }, {
        "tag": "booking",
        "count": "106936"
    }, {
        "tag": "days",
        "count": "96225"
    // }, {
    //     "tag": "postgresql",
    //     "count": "96027"
    // }, {
    //     "tag": "twitter-bootstrap",
    //     "count": "94348"
    // }, {
    //     "tag": "forms",
    //     "count": "92995"
    // }, {
    //     "tag": "image",
    //     "count": "92131"
    // }, {
    //     "tag": "macos",
    //     "count": "90327"
    // }, {
    //     "tag": "algorithm",
    //     "count": "89670"
    // }, {
    //     "tag": "python-2.7",
    //     "count": "88762"
    // }, {
    //     "tag": "scala",
    //     "count": "86971"
    // }, {
    //     "tag": "visual-studio",
    //     "count": "85825"
    // }, {
    //     "tag": "list",
    //     "count": "84392"
    // }, {
    //     "tag": "excel-vba",
    //     "count": "83948"
    // }, {
    //     "tag": "winforms",
    //     "count": "83600"
    // }, {
    //     "tag": "apache",
    //     "count": "83367"
    // }, {
    //     "tag": "facebook",
    //     "count": "83212"
    // }, {
    //     "tag": "matlab",
    //     "count": "82452"
    // }, {
    //     "tag": "performance",
    //     "count": "81443"
    // }, {
    //     "tag": "css3",
    //     "count": "78250"
    // }, {
    //     "tag": "entity-framework",
    //     "count": "78243"
    // }, {
    //     "tag": "hibernate",
    //     "count": "76123"
    // }, {
    //     "tag": "typescript",
    //     "count": "74867"
    // }, {
    //     "tag": "linq",
    //     "count": "73128"
    // }, {
    //     "tag": "swing",
    //     "count": "72333"
    // }, {
    //     "tag": "function",
    //     "count": "72043"
    // }, {
    //     "tag": "amazon-web-services",
    //     "count": "71155"
    // }, {
    //     "tag": "qt",
    //     "count": "69552"
    // }, {
    //     "tag": "rest",
    //     "count": "69138"
    // }, {
    //     "tag": "shell",
    //     "count": "68854"
    // }, {
    //     "tag": "azure",
    //     "count": "67431"
    // }, {
    //     "tag": "firebase",
    //     "count": "66411"
    // }, {
    //     "tag": "api",
    //     "count": "66158"
    // }, {
    //     "tag": "maven",
    //     "count": "66113"
    // }, {
    //     "tag": "powershell",
    //     "count": "65467"
    // }, {
    //     "tag": ".htaccess",
    //     "count": "65014"
    // }, {
    //     "tag": "sqlite",
    //     "count": "64888"
    // }, {
    //     "tag": "file",
    //     "count": "62783"
    // }, {
    //     "tag": "codeigniter",
    //     "count": "62393"
    // }, {
    //     "tag": "unit-testing",
    //     "count": "61909"
    // }, {
    //     "tag": "perl",
    //     "count": "61752"
    // }, {
    //     "tag": "loops",
    //     "count": "61015"
    // }, {
    //     "tag": "symfony",
    //     "count": "60820"
    // }, {
    //     "tag": "selenium",
    //     "count": "59855"
    // }, {
    //     "tag": "google-maps",
    //     "count": "59616"
    // }, {
    //     "tag": "csv",
    //     "count": "59600"
    // }, {
    //     "tag": "uitableview",
    //     "count": "59011"
    // }, {
    //     "tag": "web-services",
    //     "count": "58916"
    // }, {
    //     "tag": "cordova",
    //     "count": "58195"
    // }, {
    //     "tag": "class",
    //     "count": "58055"
    // }, {
    //     "tag": "numpy",
    //     "count": "57132"
    // }, {
    //     "tag": "google-chrome",
    //     "count": "56836"
    // }, {
    //     "tag": "ruby-on-rails-3",
    //     "count": "55962"
    // }, {
    //     "tag": "android-studio",
    //     "count": "55801"
    // }, {
    //     "tag": "tsql",
    //     "count": "55736"
    // }, {
    //     "tag": "validation",
    //     "count": "55531"
    } ];
    
    series.dataFields.word = "tag";
    series.dataFields.value = "count";
    
    series.heatRules.push({
     "target": series.labels.template,
     "property": "fill",
     "min": am4core.color("#0000CC"),
     "max": am4core.color("#CC00CC"),
     "dataField": "value"
    });
    
    // series.labels.template.url = "https://stackoverflow.com/questions/tagged/{word}";
    series.labels.template.urlTarget = "_blank";
    series.labels.template.tooltipText = "{word}: {value}";
    
    var hoverState = series.labels.template.states.create("hover");
    hoverState.properties.fill = am4core.color("#FF0000");
    
    var subtitle = chart.titles.create();
    subtitle.text = "@ Weibo";
    
    var title = chart.titles.create();
    title.text = "Popular Tags under Quarantine Hotels Discussion";
    title.fontSize = 20;
    title.fontWeight = "800";
    
    }); // end am4core.ready()