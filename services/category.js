export default {
    category: (axios, params) => axios.get(`/category`, {params}),
    get: (axios, id, params) => axios.get(`/category/${id}`, params)
}


// Highcharts.chart('container', {
//
//     title: {
//         text: 'Statistika turista u Slovackoj'
//     },
//
//     subtitle: {
//         text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>'
//     },
//
//     yAxis: {
//         title: {
//             text: 'Broj turista u Slovačkoj'
//         }
//     },
//
//     xAxis: {
//         accessibility: {
//             rangeDescription: 'Range: 1998 to 2014'
//         }
//     },
//
//     legend: {
//         layout: 'vertical',
//         align: 'right',
//         verticalAlign: 'middle'
//     },
//
//     plotOptions: {
//         series: {
//             label: {
//                 connectorAllowed: false
//             },
//             pointStart: 1998
//         }
//     },
//
//     series: [{
//         showInLegend: false,
//         name: 'Češka Republika',
//         data: [250000, 286000, 289000, 315000, 449000, 475000, 410000, 414000, 460000, 492000, 525000, 420000, 430000, 480000, 495000, 498000, 438000]
//     },{
//         name: 'Poljska',
//         data: [117000, 176000, 205000, 271000, 267000, 211000, 190000, 200000, 220000, 250000, 302000, 180000, 175000, 185000, 180000, 182000, 175000]
//     },{
//         name: 'Nemačka',
//         data: [130000, 124000, 160000, 172000, 195000, 180000, 193000, 198000, 193000, 180000, 162000, 130000, 132000, 140000, 144000, 162000, 150000]
//     },{
//         name: 'Маđarska',
//         data: [60000, 65000, 70000, 85000, 95000, 100000, 107000, 112000, 113000, 98000, 94000, 69000, 64000, 69000, 75000, 80000, 77000]
//     },{
//         name: 'Ukrajina',
//         data: [47000, 45000, 38000, 26000, 25000, 24000, 22000, 25000, 31000, 39000, 29000, 26000, 28000, 39000, 47000, 87000, 76800]
//     },{
//         name: 'Austrija',
//         data: [44000, 45000, 48000, 54000, 56000, 59000, 59000, 61000, 62000, 63000, 61000, 62000, 62000, 64000, 77000, 84000, 81000]
//     },{
//         name: 'Italija',
//         data: [40000, 42000, 44000, 48000, 50000, 53000, 58000, 62000, 62000, 61000, 61000, 62000, 62000, 63000, 62000, 63000, 61000]
//     },{
//         name: 'Velika Britanija',
//         data: [24000, 23000, 25000, 26000, 34000, 39000, 55000, 61000, 62000, 63000, 65000, 58000, 55000, 52000, 57000, 55000, 52000]
//     },{
//         name: 'Rusija',
//         data: [40000, 40000, 42000, 30000, 26000, 26000, 22000, 22000, 21000, 23000, 28000, 27000, 29000, 39000, 47000, 55000, 52000]
//     }],
//
//     responsive: {
//         rules: [{
//             condition: {
//                 maxWidth: 500
//             },
//             chartOptions: {
//                 legend: {
//                     layout: 'horizontal',
//                     align: 'center',
//                     verticalAlign: 'bottom'
//                 }
//             }
//         }]
//     }
//
// });