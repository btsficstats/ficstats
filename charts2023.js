var totalnumbers = bb.generate({
    bindto: "#totalNumbers23",
    data: {
        type: "line",
        x: "x",
        columns: [
            ["x", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"],
            ["Number of fics", 370, 3444, 12286, 21253, 32032, 37625, 47573, 42915, 35108, 28245],
        ],
        labels: true,
    },
    axis: {
        x: {
            label: "year"
        },
        y: {
            label: "number of fics",
            min: 0,
            padding: {
                bottom: 0,
            },
        }
    },
    legend: {
        show: false,
    },
    tooltip: {
        show: false,
    },
    title: {
        text: 'Number of fics per year',
        position: 'left',
    }
});

var allyearschart = bb.generate({
    bindto: "#allYearsChart23",
    data: {
        type: "line",
        x: "x",
        columns: [
            ["x", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"],
            ["Taehyung/Jungkook", 46, 552, 2058, 3943, 6009, 7057, 8846, 7950, 6479, 5450],
            ["Yoongi/Jimin", 79, 741, 2393, 3803, 5503, 5350, 5591, 4686, 4005, 3692],
            ["Jin/Namjoon", 24, 329, 1420, 3045, 4526, 5245, 5778, 4501, 3191, 2727],
            ["Jimin/Jungkook", 22, 416, 1733, 3053, 4436, 5208, 7473, 6300, 5006, 4090],
            ["Yoongi/Hoseok", 27, 261, 1134, 2552, 3554, 3729, 4232, 3342, 2501, 1823],
            ["Yoongi/Jungkook", 6, 126, 916, 1459, 2685, 3025, 3375, 2781, 2312, 1664],
            ["Taehyung/Jimin", 10, 270, 889, 1731, 2286, 2917, 4098, 3368, 2331, 1579],
            ["Yoongi/Taehyung", 21, 106, 567, 1188, 1874, 2349, 2857, 2019, 1424, 1087],
            ["Namjoon/Jimin", 3, 78, 368, 649, 1101, 1748, 1836, 1455, 1128, 910],
            ["Jin/Yoongi", 36, 247, 630, 1032, 1280, 1577, 2001, 2097, 1696, 1337],
            ["Namjoon/Jungkook", 3, 28, 140, 382, 869, 1576, 2233, 1960, 1596, 1391],
            ["Yoongi/Namjoon", 9, 145, 362, 703, 1145, 1458, 1904, 1909, 1382, 1070],
            ["Jin/Jungkook", 6, 61, 318, 615, 863, 1297, 2065, 2305, 1870, 1674],
            ["Jin/Taehyung", 9, 73, 188, 409, 730, 1233, 1625, 1906, 1579, 1082],
            ["Hoseok/Jimin", 10, 151, 490, 700, 1002, 1209, 1246, 947, 785, 690],
            ["Hoseok/Taehyung", 22, 171, 550, 728, 922, 1087, 1227, 982, 706, 538],
            ["Namjoon/Taehyung", 1, 38, 192, 367, 456, 971, 964, 834, 670, 616],
            ["Hoseok/Jungkook", 5, 24, 196, 420, 646, 954, 1258, 989, 845, 620],
            ["Hoseok/Namjoon", 3, 32, 138, 383, 710, 992, 1171, 1018, 763, 561],
            ["Jin/Jimin", 6, 46, 200, 351, 508, 698, 804, 841, 703, 560],
            ["Jin/Hoseok", 0, 35, 101, 277, 495, 670, 857, 998, 890, 708],
        ]
    },
    axis: {
        x: {
            type: "category",
            label: "year"
        },
        y: {
            label: "number of fics",
            min: 0,
            padding: 0,
        }
    },
    legend: {
        position: 'right',
    },
    tooltip: {
        order: 'desc',
    },
    title: {
        text: 'Number of fics per ship per year',
        position: 'left',
        padding: {
            bottom: 10
        }
    }
});

var allyearspercentagechart = bb.generate({
    bindto: "#allYearsPercentageChart23",
    data: {
        type: "line",
        x: "x",
        columns: [
            ["x", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2023"],
            ["Taehyung/Jungkook", 12.4, 16.0, 16.8, 18.6, 18.8, 18.8, 18.6, 18.5, 18.4, 19.3],
            ["Yoongi/Jimin", 21.4, 21.5, 19.5, 17.9, 17.2, 14.2, 11.8, 10.9, 11.4, 13.0],
            ["Jin/Namjoon", 6.5, 9.6, 11.6, 14.3, 14.1, 13.9, 12.1, 10.5, 9.1, 9.6],
            ["Jimin/Jungkook", 5.9, 12.1, 14.1, 14.4, 13.8, 13.8, 15.7, 14.7, 14.3, 14.5],
            ["Yoongi/Hoseok", 7.3, 7.6, 9.2, 12.0, 11.1, 9.9, 8.9, 7.8, 7.1, 6.4],
            ["Yoongi/Jungkook", 1.6, 3.7, 7.5, 6.9, 8.4, 8.0, 7.1, 6.5, 6.6, 5.9],
            ["Taehyung/Jimin", 2.7, 7.8, 7.2, 8.1, 7.1, 7.8, 8.6, 7.8, 6.6, 5.6],
            ["Yoongi/Taehyung", 5.7, 3.1, 4.6, 5.6, 5.9, 6.2, 6.0, 4.7, 4.1, 3.8],
            ["Namjoon/Jimin", 8, 2.3, 3.0, 3.1, 3.4, 4.6, 3.9, 3.4, 3.2, 3.2],
            ["Jin/Yoongi", 9.7, 7.2, 5.1, 4.9, 4.0, 4.2, 4.2, 4.9, 4.8, 4.7],
            ["Namjoon/Jungkook", .8, .8, 1.1, 1.8, 2.7, 4.2, 4.7, 4.6, 4.6, 4.9],
            ["Yoongi/Namjoon", 2.4, 4.2, 2.9, 3.3, 3.6, 3.9, 4.0, 4.4, 3.9, 3.8],
            ["Jin/Jungkook", 1.6, 1.8, 2.6, 2.9, 2.7, 3.4, 4.3, 5.4, 5.3, 5.9],
            ["Jin/Taehyung", 2.4, 2.1, 1.5, 1.9, 2.3, 3.3, 3.4, 4.4, 4.5, 3.8],
            ["Hoseok/Jimin", 2.7, 4.4, 4.0, 3.3, 3.1, 3.2, 2.6, 2.2, 2.2, 2.4],
            ["Hoseok/Taehyung", 5.9, 5.0, 4.5, 3.4, 2.9, 2.9, 2.6, 2.3, 2.0, 1.9],
            ["Namjoon/Taehyung", .3, 1.1, 1.6, 1.7, 1.4, 2.6, 2.0, 1.9, 1.9, 2.2],
            ["Hoseok/Jungkook", 1.4, .7, 1.6, 2.0, 2.0, 2.5, 2.6, 2.3, 2.4, 2.2],
            ["Hoseok/Namjoon", .8, .9, 1.1, 1.8, 2.2, 2.6, 2.5, 2.4, 2.2, 2.0],
            ["Jin/Jimin", 1.6, 1.3, 1.6, 1.7, 1.6, 1.9, 1.7, 2.0, 2.0, 2.0],
            ["Jin/Hoseok", .0, 1.0, .8, 1.3, 1.5, 1.8, 1.8, 2.3, 2.5, 2.5],
        ]
    },
    axis: {
        x: {
            type: "category",
            label: "year"
        },
        y: {
            label: "% of fics",
            min: 0,
            padding: 0,
        }
    },
    legend: {
        position: 'right',
    },
    tooltip: {
        order: 'desc',
    },
    title: {
        text: 'Percentage of fics per ship per year',
        position: 'left',
        padding: {
            bottom: 10
        }
    }
});

var number2021chart = bb.generate({
    bindto: "#number2023",
    data: {
        type: "bar",
        x: "x",
        columns: [
            ["x", "taekook", "jikook", "yoonmin", "namjin", "sope", "jinkook", "yoonkook", "vmin", "namkook", "yoonjin", "taegi", "taejin", "namgi", "minjoon", "2seok", "jihope", "hopekook", "vmon", "namseok", "jinmin", "vhope"],
            ["2023", 5450,4090,3692,2727,1823,1674,1664,1579,1391,1337,1087,1082,1070, 910, 708, 690, 620, 616, 561, 560, 538],
        ],
        order: 'asc',
        labels: true,
    },
    bar: {
        width: {
            ratio: .85,
        },
        padding: 3,
    },
    axis: {
        rotated: true,
        x: {
            type: "category",
        },
        y: {
            label: "number of fics"
        }
    },
    legend: {
        show: false,
    },
    tooltip: {
        show: false,
    },
    title: {
        text: 'Number of fics 2023',
        position: 'left',
        padding: {
            bottom: 10
        }
    }
});

var numbercomparechart = bb.generate({
    bindto: "#numbercompare23",
    data: {
        type: "bar",
        x: "x",
        columns: [
            ["x", "taekook", "jikook", "yoonmin", "namjin", "sope", "jinkook", "yoonkook", "vmin", "namkook", "yoonjin", "taegi", "taejin", "namgi", "minjoon", "2seok", "jihope", "hopekook", "vmon", "namseok", "jinmin", "vhope"],
            ["*2023", 5450, 4090, 3692, 2727, 1823, 1674, 1664, 1579, 1391, 1337, 1087, 1082, 1070, 910, 708, 690, 620, 616, 561, 560, 538],
            ["*2022", 6479, 5006, 4005, 3191, 2501, 1870, 2312, 2331, 1596, 1696, 1424, 1579, 1382, 1128, 890, 785, 845, 670, 763, 703, 706],
        ],
        order: null,
        labels: true,
    },
    bar: {
        width: {
            ratio: .75,
        },
    },
    legend: {
        position: "right"
    },
    axis: {
        rotated: true,
        x: {
            type: "category",
        },
        y: {
            label: "number of fics"
        }
    },
    tooltip: {
        show: false,
    },
    title: {
        text: 'Number of fics 2023 v 2022',
        position: 'left',
        padding: {
            bottom: 10
        }
    }
});

var number2021piechart = bb.generate({
    bindto: "#numberpie2023",
    data: {
        type: "pie",
        x: "x",
        columns: [
            ["taekook", 5450],
            ["jikook", 4090],
            ["yoonmin", 3692],
            ["namjin", 2727],
            ["sope", 1823],
            ["jinkook", 1674],
            ["yoonkook", 1664],
            ["vmin", 1579],
            ["namkook", 1391],
            ["yoonjin", 1337],
            ["taegi", 1087],
            ["taejin", 1082],
            ["namgi", 1070],
            ["minjoon", 910],
            ["2seok", 708],
            ["jihope", 690],
            ["hopekook", 620],
            ["vmon",  616],
            ["namseok", 561],
            ["jinmin", 560],
            ["vhope", 538],
        ],
        labels: false,
    },
    legend: {
        show: true,
        position: 'right',
        item: {
            onclick: function(id) { return false },
        },
        order: 'desc'
    },
    pie: {
        padding: 1,
        label: {
            ratio: 1.2,
            format: (value, ratio, id) => `${id}\n${(value * 100 / 28245).toFixed(1)}%`
        }
    },
    title: {
        text: 'Percentage of fics 2023',
        position: 'left',
        padding: {
            bottom: 10
        }
    }
});

var member2021 = bb.generate({
    bindto: "#member2023",
    data: {
        type: "bar",
        x: "x",
        columns: [
            ["x", "jungkook", "jimin", "yoongi", "taehyung", "seokjin", "namjoon", "hoseok"],
            ["2021", 14889, 11521, 10673, 10352, 8088, 7275, 5018],
        ],
        labels: true,
    },
    bar: {
        width: {
            ratio: .85,
        },
        padding: 3,
    },
    axis: {
        x: {
            type: "category",
        },
        y: {
            label: "number of fics"
        }
    },
    legend: {
        show: false,
    },
    tooltip: {
        show: false,
    },
    title: {
        text: 'Number of fics per member 2023',
        position: 'left',
    }
});

var harem2021 = bb.generate({
    bindto: "#harem2023",
    data: {
        type: "bar",
        x: "x",
        columns: [
            ["x", "jungkook", "seokjin", "jimin", "yoongi", "namjoon", "taehyung", "hoseok"],
            ["2021", 542, 415, 320, 301, 265, 263, 262],
        ],
        labels: true,
    },
    bar: {
        width: {
            ratio: .85,
        },
        padding: 3,
    },
    axis: {
        x: {
            type: "category",
        },
        y: {
            label: "number of fics"
        }
    },
    legend: {
        show: false,
    },
    tooltip: {
        show: false,
    },
    title: {
        text: 'Number of member/everyone (OT7) fics 2023',
        position: 'left',
    }
});

var ot32021 = bb.generate({
    bindto: "#ot32023",
    data: {
        type: "bar",
        x: "x",
        columns: [
            ["x", "jimin tae jk", "yoongi hoseok jimin", "jin joon jk", "yoongi joon jk", "jin hoseok joon", "yoongi hoseok joon", "yoongi jimin jk", "jin tae jk", "joon jimin jk", "jin yoongi jk", "yoongi hoseok tae", "hoseok tae jk", "jin yoongi joon", "yoongi joon jimin", "yoongi tae jk", "jin yoongi hoseok", "jin jimin tae", "yoongi jimin tae", "joon tae jk", "jin joon jimin", "joon jimin tae", "hoseok jimin tae", "hoseok joon jk", "jin joon tae", "jin yoongi tae", "hoseok jimin jk", "jin hoseok tae", "jin hoseok jk", "jin hoseok jimin", "yoongi joon tae", "yoongi hoseok jk", "jin jimin jk", "jin yoongi jimin", "hoseok joon jimin", "hoseok joon tae"],
            ["2023",289,116,77,74,74,63,57,56,54,53,47,46,45,42,39,37,34,31,31,28,28,26,26,25,25,24,22,21,19,19,18,18,17,14,11],
        ],
        order: 'asc',
        labels: true,
    },
    bar: {
        width: {
            ratio: .85,
        },
        padding: 3,
    },
    axis: {
        rotated: true,
        x: {
            type: "category",
            tick: {
                width: 150
            }
        },
        y: {
            label: "number of fics",
        }
    },
    legend: {
        show: false,
    },
    tooltip: {
        show: false,
    },
    title: {
        text: 'Number of ot3 fics 2023',
        position: 'left',
        padding: {
            bottom: 10
        }
    }
});

var relativegrowth = bb.generate({
    bindto: "#relativegrowth23",
    data: {
        type: "bar",
        x: "x",
        columns: [
            ["x", "yoonmin", "vmon", "jinkook", "jihope", "namkook", "namjin", "taekook", "jikook", "minjoon", "jinmin", "2seok", "yoonjin", "namgi", "taegi", "vhope", "namseok", "junghope", "yoonseok", "yoonkook", "taejin", "vmin"],
            ["growth", 2.19,1.92,-0.76,-2.56,-3.38,-5.27,-6.75,-9.43,-10.57,-11.70,-11.82,-12.61,-14.17,-15.38,-15.52,-18.49,-18.66,-19.20,-20.22,-24.04,-24.91]
        ],
        order: 'asc',
        labels: true,
    },
    bar: {
        width: {
            ratio: .85,
        },
        padding: 3,
    },
    axis: {
        rotated: true,
        x: {
            type: "category",
        },
        y: {
            label: "%",
            min: -20,
            max: 20
        }
    },
    legend: {
        show: false,
    },
    tooltip: {
        show: false,
    },
    title: {
        text: 'Relative growth 2023 v 2022',
        position: 'left',
        padding: {
            bottom: 10
        }
    }
});