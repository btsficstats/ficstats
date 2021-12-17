var chart = bb.generate({
    bindto: "#allYearsChart",
    data: {
        type: "line",
        x: "x",
        columns: [
            ["x", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
            ["Taehyung/Jungkook", 46, 552, 2058, 3943, 6009, 7057, 8846],
            ["Yoongi/Jimin", 79, 741, 2393, 3803, 5503, 5350, 5591],
            ["Jin/Namjoon", 24, 329, 1420, 3045, 4526, 5245, 5778],
            ["Jimin/Jungkook", 22, 416, 1733, 3053, 4436, 5208, 7473],
            ["Yoongi/Hoseok", 27, 261, 1134, 2552, 3554, 3729, 4232],
            ["Yoongi/Jungkook", 6, 126, 916, 1459, 2685, 3025, 3375],
            ["Taehyung/Jimin", 10, 270, 889, 1731, 2286, 2917, 4098],
            ["Yoongi/Taehyung", 21, 106, 567, 1188, 1874, 2349, 2857],
            ["Namjoon/Jimin", 3, 78, 368, 649, 1101, 1748, 1836],
            ["Jin/Yoongi", 36, 247, 630, 1032, 1280, 1577, 2001],
            ["Namjoon/Jungkook", 3, 28, 140, 382, 869, 1576, 2233],
            ["Yoongi/Namjoon", 9, 145, 362, 703, 1145, 1458, 1904],
            ["Jin/Jungkook", 6, 61, 318, 615, 863, 1297, 2065],
            ["Jin/Taehyung", 9, 73, 188, 409, 730, 1233, 1625],
            ["Hoseok/Jimin", 10, 151, 490, 700, 1002, 1209, 1246],
            ["Hoseok/Taehyung", 22, 171, 550, 728, 922, 1087, 1227],
            ["Namjoon/Taehyung", 1, 38, 192, 367, 456, 971, 964],
            ["Hoseok/Jungkook", 5, 24, 196, 420, 646, 954, 1258],
            ["Hoseok/Namjoon", 3, 32, 138, 383, 710, 992, 1171],
            ["Jin/Jimin", 6, 46, 200, 351, 508, 698, 804],
            ["Jin/Hoseok", 0, 35, 101, 277, 495, 670, 857],
        ]
    },
    axis: {
        x: {
            type: "category",
        }
    },
    legend: {
        position: 'right',
    },
    tooltip: {
        order: 'desc',
    },
    title: {
        text: 'Number of fics per ship per year'
    }
});

var chart = bb.generate({
    bindto: "#allYearsPercentageChart",
    data: {
        type: "line",
        x: "x",
        columns: [
            ["x", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
            ["Taehyung/Jungkook", 12.4, 16.0, 16.8, 18.6, 18.8, 18.8, 18.6],
            ["Yoongi/Jimin", 21.4, 21.5, 19.5, 17.9, 17.2, 14.2, 11.8],
            ["Jin/Namjoon", 6.5, 9.6, 11.6, 14.3, 14.1, 13.9, 12.1],
            ["Jimin/Jungkook", 5.9, 12.1, 14.1, 14.4, 13.8, 13.8, 15.7],
            ["Yoongi/Hoseok", 7.3, 7.6, 9.2, 12.0, 11.1, 9.9, 8.9],
            ["Yoongi/Jungkook", 1.6, 3.7, 7.5, 6.9, 8.4, 8.0, 7.1],
            ["Taehyung/Jimin", 2.7, 7.8, 7.2, 8.1, 7.1, 7.8, 8.6],
            ["Yoongi/Taehyung", 5.7, 3.1, 4.6, 5.6, 5.9, 6.2, 6.0],
            ["Namjoon/Jimin", 8, 2.3, 3.0, 3.1, 3.4, 4.6, 3.9],
            ["Jin/Yoongi", 9.7, 7.2, 5.1, 4.9, 4.0, 4.2, 4.2],
            ["Namjoon/Jungkook", .8, .8, 1.1, 1.8, 2.7, 4.2, 4.7],
            ["Yoongi/Namjoon", 2.4, 4.2, 2.9, 3.3, 3.6, 3.9, 4.0],
            ["Jin/Jungkook", 1.6, 1.8, 2.6, 2.9, 2.7, 3.4, 4.3],
            ["Jin/Taehyung", 2.4, 2.1, 1.5, 1.9, 2.3, 3.3, 3.4],
            ["Hoseok/Jimin", 2.7, 4.4, 4.0, 3.3, 3.1, 3.2, 2.6],
            ["Hoseok/Taehyung", 5.9, 5.0, 4.5, 3.4, 2.9, 2.9, 2.6],
            ["Namjoon/Taehyung", .3, 1.1, 1.6, 1.7, 1.4, 2.6, 2.0],
            ["Hoseok/Jungkook", 1.4, .7, 1.6, 2.0, 2.0, 2.5, 2.6],
            ["Hoseok/Namjoon", .8, .9, 1.1, 1.8, 2.2, 2.6, 2.5],
            ["Jin/Jimin", 1.6, 1.3, 1.6, 1.7, 1.6, 1.9, 1.7],
            ["Jin/Hoseok", .0, 1.0, .8, 1.3, 1.5, 1.8, 1.8],
        ]
    },
    axis: {
        x: {
            type: "category",
        }
    },
    legend: {
        position: 'right',
    },
    tooltip: {
        order: 'desc',
    },
    title: {
        text: 'Percentage of fics per ship per year'
    }
});