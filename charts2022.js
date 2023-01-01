var totalnumbers = bb.generate({
    bindto: "#totalNumbers",
    data: {
        type: "line",
        x: "x",
        columns: [
            ["x", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
            ["Number of fics", 370, 3444, 12286, 21253, 32032, 37625, 47573, 42915, 35108],
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
    bindto: "#allYearsChart",
    data: {
        type: "line",
        x: "x",
        columns: [
            ["x", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
            ["Taehyung/Jungkook", 46, 552, 2058, 3943, 6009, 7057, 8846, 7950, 6479],
            ["Yoongi/Jimin", 79, 741, 2393, 3803, 5503, 5350, 5591, 4686, 4005],
            ["Jin/Namjoon", 24, 329, 1420, 3045, 4526, 5245, 5778, 4501, 3191],
            ["Jimin/Jungkook", 22, 416, 1733, 3053, 4436, 5208, 7473, 6300, 5006],
            ["Yoongi/Hoseok", 27, 261, 1134, 2552, 3554, 3729, 4232, 3342, 2501],
            ["Yoongi/Jungkook", 6, 126, 916, 1459, 2685, 3025, 3375, 2781, 2312],
            ["Taehyung/Jimin", 10, 270, 889, 1731, 2286, 2917, 4098, 3368, 2331],
            ["Yoongi/Taehyung", 21, 106, 567, 1188, 1874, 2349, 2857, 2019, 1424],
            ["Namjoon/Jimin", 3, 78, 368, 649, 1101, 1748, 1836, 1455, 1128],
            ["Jin/Yoongi", 36, 247, 630, 1032, 1280, 1577, 2001, 2097, 1696],
            ["Namjoon/Jungkook", 3, 28, 140, 382, 869, 1576, 2233, 1960, 1596],
            ["Yoongi/Namjoon", 9, 145, 362, 703, 1145, 1458, 1904, 1909, 1382],
            ["Jin/Jungkook", 6, 61, 318, 615, 863, 1297, 2065, 2305, 1870],
            ["Jin/Taehyung", 9, 73, 188, 409, 730, 1233, 1625, 1906, 1579],
            ["Hoseok/Jimin", 10, 151, 490, 700, 1002, 1209, 1246, 947, 785],
            ["Hoseok/Taehyung", 22, 171, 550, 728, 922, 1087, 1227, 982, 706],
            ["Namjoon/Taehyung", 1, 38, 192, 367, 456, 971, 964, 834, 670],
            ["Hoseok/Jungkook", 5, 24, 196, 420, 646, 954, 1258, 989, 845],
            ["Hoseok/Namjoon", 3, 32, 138, 383, 710, 992, 1171, 1018, 763],
            ["Jin/Jimin", 6, 46, 200, 351, 508, 698, 804, 841, 703],
            ["Jin/Hoseok", 0, 35, 101, 277, 495, 670, 857, 998, 890],
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
    bindto: "#allYearsPercentageChart",
    data: {
        type: "line",
        x: "x",
        columns: [
            ["x", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
            ["Taehyung/Jungkook", 12.4, 16.0, 16.8, 18.6, 18.8, 18.8, 18.6, 18.5, 18.4],
            ["Yoongi/Jimin", 21.4, 21.5, 19.5, 17.9, 17.2, 14.2, 11.8, 10.9, 11.4],
            ["Jin/Namjoon", 6.5, 9.6, 11.6, 14.3, 14.1, 13.9, 12.1, 10.5, 9.1],
            ["Jimin/Jungkook", 5.9, 12.1, 14.1, 14.4, 13.8, 13.8, 15.7, 14.7, 14.3],
            ["Yoongi/Hoseok", 7.3, 7.6, 9.2, 12.0, 11.1, 9.9, 8.9, 7.8, 7.1],
            ["Yoongi/Jungkook", 1.6, 3.7, 7.5, 6.9, 8.4, 8.0, 7.1, 6.5, 6.6],
            ["Taehyung/Jimin", 2.7, 7.8, 7.2, 8.1, 7.1, 7.8, 8.6, 7.8, 6.6],
            ["Yoongi/Taehyung", 5.7, 3.1, 4.6, 5.6, 5.9, 6.2, 6.0, 4.7, 4.1],
            ["Namjoon/Jimin", 8, 2.3, 3.0, 3.1, 3.4, 4.6, 3.9, 3.4, 3.2],
            ["Jin/Yoongi", 9.7, 7.2, 5.1, 4.9, 4.0, 4.2, 4.2, 4.9, 4.8],
            ["Namjoon/Jungkook", .8, .8, 1.1, 1.8, 2.7, 4.2, 4.7, 4.6, 4.6],
            ["Yoongi/Namjoon", 2.4, 4.2, 2.9, 3.3, 3.6, 3.9, 4.0, 4.4, 3.9],
            ["Jin/Jungkook", 1.6, 1.8, 2.6, 2.9, 2.7, 3.4, 4.3, 5.4, 5.3],
            ["Jin/Taehyung", 2.4, 2.1, 1.5, 1.9, 2.3, 3.3, 3.4, 4.4, 4.5],
            ["Hoseok/Jimin", 2.7, 4.4, 4.0, 3.3, 3.1, 3.2, 2.6, 2.2, 2.2],
            ["Hoseok/Taehyung", 5.9, 5.0, 4.5, 3.4, 2.9, 2.9, 2.6, 2.3, 2.0],
            ["Namjoon/Taehyung", .3, 1.1, 1.6, 1.7, 1.4, 2.6, 2.0, 1.9, 1.9],
            ["Hoseok/Jungkook", 1.4, .7, 1.6, 2.0, 2.0, 2.5, 2.6, 2.3, 2.4],
            ["Hoseok/Namjoon", .8, .9, 1.1, 1.8, 2.2, 2.6, 2.5, 2.4, 2.2],
            ["Jin/Jimin", 1.6, 1.3, 1.6, 1.7, 1.6, 1.9, 1.7, 2.0, 2.0],
            ["Jin/Hoseok", .0, 1.0, .8, 1.3, 1.5, 1.8, 1.8, 2.3, 2.5],
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
    bindto: "#number2021",
    data: {
        type: "bar",
        x: "x",
        columns: [
            ["x", "taekook", "jikook", "yoonmin", "namjin", "yoonseok", "vmin", "yoonkook", "jinkook", "yoonjin", "namkook", "taejin", "taegi", "namgi", "minjoon", "2seok", "junghope", "jihope", "namseok", "vhope", "jinmin", "vmon"],
            ["2022", 6479, 5006, 4005, 3191, 2501, 2331, 2312, 1870, 1696, 1596, 1579, 1424, 1382, 1128, 890, 845, 785, 763, 706, 703, 670],
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
        text: 'Number of fics 2022',
        position: 'left',
        padding: {
            bottom: 10
        }
    }
});

var numbercomparechart = bb.generate({
    bindto: "#numbercompare",
    data: {
        type: "bar",
        x: "x",
        columns: [
            ["x", "taekook", "jikook", "yoonmin", "namjin", "yoonseok", "vmin", "yoonkook", "jinkook", "yoonjin", "namkook", "taejin", "taegi", "namgi", "minjoon", "2seok", "junghope", "jihope", "namseok", "vhope", "jinmin", "vmon"],
            ["*2022", 6479, 5006, 4005, 3191, 2501, 2331, 2312, 1870, 1696, 1596, 1579, 1424, 1382, 1128, 890, 845, 785, 763, 706, 703, 670],
            ["*2021", 7950, 6300, 4686, 4501, 3342, 3368, 2781, 2305, 2097, 1960, 1906, 2019, 1909, 1455, 998, 989, 947, 1018, 982, 841, 834],
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
        text: 'Number of fics 2022 v 2021',
        position: 'left',
        padding: {
            bottom: 10
        }
    }
});

var number2021piechart = bb.generate({
    bindto: "#numberpie2021",
    data: {
        type: "pie",
        x: "x",
        columns: [
            ["taekook", 6479],
            ["jikook", 5006],
            ["yoonmin", 4005],
            ["namjin", 3191],
            ["yoonseok", 2501],
            ["vmin", 2331],
            ["yoonkook", 2312],
            ["jinkook", 1870],
            ["yoonjin", 1696],
            ["namkook", 1596],
            ["taejin", 1579],
            ["taegi", 1424],
            ["namgi", 1382],
            ["minjoon", 1128],
            ["2seok", 890],
            ["junghope", 845],
            ["jihope", 785],
            ["namseok", 763],
            ["vope", 706],
            ["jinmin", 703],
            ["vmon", 670],
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
            format: (value, ratio, id) => `${id}\n${(value * 100 / 42915).toFixed(1)}%`
        }
    },
    title: {
        text: 'Percentage of fics 2021',
        position: 'left',
        padding: {
            bottom: 10
        }
    }
});

var member2021 = bb.generate({
    bindto: "#member2021",
    data: {
        type: "bar",
        x: "x",
        columns: [
            ["x", "jungkook", "jimin", "taehyung", "yoongi", "seokjin", "namjoon", "hoseok"],
            ["2021", 18127, 14128, 13359, 13150, 12648, 8730, 6301],
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
        text: 'Number of fics per member 2022',
        position: 'left',
    }
});

var harem2021 = bb.generate({
    bindto: "#harem2021",
    data: {
        type: "bar",
        x: "x",
        columns: [
            ["x", "jungkook", "seokjin", "jimin", "yoongi", "namjoon", "taehyung", "hoseok"],
            ["2021", 708, 551, 404, 397, 365, 381, 326],
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
        text: 'Number of member/everyone (OT7) fics 2022',
        position: 'left',
    }
});

var ot32021 = bb.generate({
    bindto: "#ot32021",
    data: {
        type: "bar",
        x: "x",
        columns: [
            ["x", "jimin tae jk", "yoongi hoseok jimin", "yoongi hoseok joon", "jin hoseok joon", "yoongi tae jk", "yoongi hoseok tae", "jin yoongi jk", "jin joon jk", "yoongi joon jk", "yoongi jimin jk", "jin tae jk", "jin yoongi joon", "joon jimin jk", "yoongi jimin tae", "jin yoongi hoseok", "hoseok jimin tae", "jin joon tae", "hoseok jimin jk", "jin jimin tae", "joon jimin tae", "yoongi joon jimin", "hoseok tae jk", "joon tae jk", "jin yoongi tae", "jin hoseok jk", "jin joon jimin", "jin jimin jk", "jin hoseok tae", "yoongi hoseok jk", "jin yoongi jimin", "jin hoseok jimin", "hoseok joon jk", "hoseok joon tae", "yoongi joon tae", "hoseok joon jimin"],
            ["2021", 631, 203, 174, 118, 106, 101, 100, 99, 97, 95, 73, 73, 62, 61, 61, 54, 53, 51, 50, 47, 46, 45, 42, 42, 41, 40, 39, 37, 35, 33, 30, 26, 21, 18, 17],
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
        text: 'Number of ot3 fics 2022',
        position: 'left',
        padding: {
            bottom: 10
        }
    }
});

var relativegrowth = bb.generate({
    bindto: "#relativegrowth",
    data: {
        type: "bar",
        x: "x",
        columns: [
            ["x", "2seok", "yoonmin", "junghope", "jinmin", "yoonkook", "jihope", "taejin", "taekook", "namkook", "jinkook", "yoonjin", "vmon", "jikook", "minjoon", "namseok", "yoonseok", "namgi", "vhope", "namjin", "taegi", "vmin"],
            ["growth", 9.02, 4.48, 4.45, 2.18, 1.63, 1.33, 1.27, -0.37, -0.46, -0.83, -1.13, -1.79, -2.86, -5.23, -8.38, -8.52, -11.5, -12.11, -13.33, -13.78, -15.39]
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
            min: -35,
            max: 35
        }
    },
    legend: {
        show: false,
    },
    tooltip: {
        show: false,
    },
    title: {
        text: 'Relative growth 2022 v 2021',
        position: 'left',
        padding: {
            bottom: 10
        }
    }
});