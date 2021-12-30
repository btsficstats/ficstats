var totalnumbers = bb.generate({
    bindto: "#totalNumbers",
    data: {
        type: "line",
        x: "x",
        columns: [
            ["x", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
            ["Number of fics", 370, 3444, 12286, 21253, 32032, 37625, 47573, 42915],
        ]
    },
    axis: {
        x: {
            label: "year"
        },
        y: {
            label: "number of fics"
        }
    },
    legend: {
        show: false,
    },
    tooltip: {
        order: 'desc',
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
            ["x", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
            ["Taehyung/Jungkook", 46, 552, 2058, 3943, 6009, 7057, 8846, 7950],
            ["Yoongi/Jimin", 79, 741, 2393, 3803, 5503, 5350, 5591, 4686],
            ["Jin/Namjoon", 24, 329, 1420, 3045, 4526, 5245, 5778, 4501],
            ["Jimin/Jungkook", 22, 416, 1733, 3053, 4436, 5208, 7473, 6300],
            ["Yoongi/Hoseok", 27, 261, 1134, 2552, 3554, 3729, 4232, 3342],
            ["Yoongi/Jungkook", 6, 126, 916, 1459, 2685, 3025, 3375, 2781],
            ["Taehyung/Jimin", 10, 270, 889, 1731, 2286, 2917, 4098, 3368],
            ["Yoongi/Taehyung", 21, 106, 567, 1188, 1874, 2349, 2857, 2019],
            ["Namjoon/Jimin", 3, 78, 368, 649, 1101, 1748, 1836, 1455],
            ["Jin/Yoongi", 36, 247, 630, 1032, 1280, 1577, 2001, 2097],
            ["Namjoon/Jungkook", 3, 28, 140, 382, 869, 1576, 2233, 1960],
            ["Yoongi/Namjoon", 9, 145, 362, 703, 1145, 1458, 1904, 1909],
            ["Jin/Jungkook", 6, 61, 318, 615, 863, 1297, 2065, 2305],
            ["Jin/Taehyung", 9, 73, 188, 409, 730, 1233, 1625, 1906],
            ["Hoseok/Jimin", 10, 151, 490, 700, 1002, 1209, 1246, 947],
            ["Hoseok/Taehyung", 22, 171, 550, 728, 922, 1087, 1227, 982],
            ["Namjoon/Taehyung", 1, 38, 192, 367, 456, 971, 964, 834],
            ["Hoseok/Jungkook", 5, 24, 196, 420, 646, 954, 1258, 989],
            ["Hoseok/Namjoon", 3, 32, 138, 383, 710, 992, 1171, 1018],
            ["Jin/Jimin", 6, 46, 200, 351, 508, 698, 804, 841],
            ["Jin/Hoseok", 0, 35, 101, 277, 495, 670, 857, 998],
        ]
    },
    axis: {
        x: {
            type: "category",
            label: "year"
        },
        y: {
            label: "number of fics"
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
            ["x", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
            ["Taehyung/Jungkook", 12.4, 16.0, 16.8, 18.6, 18.8, 18.8, 18.6, 18.5],
            ["Yoongi/Jimin", 21.4, 21.5, 19.5, 17.9, 17.2, 14.2, 11.8, 10.9],
            ["Jin/Namjoon", 6.5, 9.6, 11.6, 14.3, 14.1, 13.9, 12.1, 10.5],
            ["Jimin/Jungkook", 5.9, 12.1, 14.1, 14.4, 13.8, 13.8, 15.7, 14.7],
            ["Yoongi/Hoseok", 7.3, 7.6, 9.2, 12.0, 11.1, 9.9, 8.9, 7.8],
            ["Yoongi/Jungkook", 1.6, 3.7, 7.5, 6.9, 8.4, 8.0, 7.1, 6.5],
            ["Taehyung/Jimin", 2.7, 7.8, 7.2, 8.1, 7.1, 7.8, 8.6, 7.8],
            ["Yoongi/Taehyung", 5.7, 3.1, 4.6, 5.6, 5.9, 6.2, 6.0, 4.7],
            ["Namjoon/Jimin", 8, 2.3, 3.0, 3.1, 3.4, 4.6, 3.9, 3.4],
            ["Jin/Yoongi", 9.7, 7.2, 5.1, 4.9, 4.0, 4.2, 4.2, 4.9],
            ["Namjoon/Jungkook", .8, .8, 1.1, 1.8, 2.7, 4.2, 4.7, 4.6],
            ["Yoongi/Namjoon", 2.4, 4.2, 2.9, 3.3, 3.6, 3.9, 4.0, 4.4],
            ["Jin/Jungkook", 1.6, 1.8, 2.6, 2.9, 2.7, 3.4, 4.3, 5.4],
            ["Jin/Taehyung", 2.4, 2.1, 1.5, 1.9, 2.3, 3.3, 3.4, 4.4],
            ["Hoseok/Jimin", 2.7, 4.4, 4.0, 3.3, 3.1, 3.2, 2.6, 2.2],
            ["Hoseok/Taehyung", 5.9, 5.0, 4.5, 3.4, 2.9, 2.9, 2.6, 2.3],
            ["Namjoon/Taehyung", .3, 1.1, 1.6, 1.7, 1.4, 2.6, 2.0, 1.9],
            ["Hoseok/Jungkook", 1.4, .7, 1.6, 2.0, 2.0, 2.5, 2.6, 2.3],
            ["Hoseok/Namjoon", .8, .9, 1.1, 1.8, 2.2, 2.6, 2.5, 2.4],
            ["Jin/Jimin", 1.6, 1.3, 1.6, 1.7, 1.6, 1.9, 1.7, 2.0],
            ["Jin/Hoseok", .0, 1.0, .8, 1.3, 1.5, 1.8, 1.8, 2.3],
        ]
    },
    axis: {
        x: {
            type: "category",
            label: "year"
        },
        y: {
            label: "% of fics"
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
            ["x", "taekook", "jikook", "yoonmin", "namjin", "vmin", "yoonseok", "yoonkook", "jinkook", "yoonjin", "taegi", "namkook", "namgi", "taejin", "minjoon", "namseok", "2seok", "junghope", "vope", "jihope", "jinmin", "vmon"],
            ["2021", 7950, 6300, 4686, 4501, 3368, 3342, 2781, 2305, 2097, 2019, 1960, 1909, 1906, 1455, 1018, 998, 989, 982, 947, 841, 834],
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
        text: 'Number of fics 2021',
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
            ["x", "taekook", "jikook", "yoonmin", "namjin", "vmin", "yoonseok", "yoonkook", "jinkook", "yoonjin", "taegi", "namkook", "namgi", "taejin", "minjoon", "namseok", "2seok", "junghope", "vope", "jihope", "jinmin", "vmon"],
            ["*2021", 7950, 6300, 4686, 4501, 3368, 3342, 2781, 2305, 2097, 2019, 1960, 1909, 1906, 1455, 1018, 998, 989, 982, 947, 841, 834],
            ["*2020", 8846, 7473, 5591, 5778, 4098, 4232, 3375, 2065, 2001, 2857, 2233, 1904, 1625, 1836, 1171, 857, 1258, 1227, 1246, 804, 964],
        ],
        order: null,
        labels: true,
    },
    bar: {
        width: {
            ratio: .75,
        },
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
        text: 'Number of fics 2021 v 2020',
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
            ["taekook", 7950],
            ["jikook", 6300],
            ["yoonmin", 4686],
            ["namjin", 4501],
            ["vmin", 3368],
            ["yoonseok", 3342],
            ["yoonkook", 2781],
            ["jinkook", 2305],
            ["yoonjin", 2097],
            ["taegi", 2019],
            ["namkook", 1960],
            ["namgi", 1909],
            ["taejin", 1906],
            ["minjoon", 1455],
            ["namseok", 1018],
            ["2seok", 998],
            ["junghope", 989],
            ["vope", 982],
            ["jihope", 947],
            ["jinmin", 841],
            ["vmon", 834],
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