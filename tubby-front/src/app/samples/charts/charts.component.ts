import { Component, OnInit } from '@angular/core';
import { ChartsService } from './charts.service';
import * as echarts from 'echarts/lib/echarts';
import map from 'lodash/map';

@Component({
    templateUrl: './charts.component.html',
    selector: 'sample-charts'
})
export class ChartsComponent implements OnInit {

    private chartOption: any;
    private mapOption: any;

    constructor(private chartsService: ChartsService) { }

    public ngOnInit() {
        this.chartsService.getChartData().subscribe((data) => this.setChartData(data));

        this.chartsService.getMapData('china').subscribe((data) => {
            echarts.registerMap('china', data);
            this.setMapData();
        });
    }

    private setChartData(data) {
        console.log(data);
        let gdp1990 = map(data[0], (o) => {
            return [o['gdp'], o['life'], o['population'], o['id']['country'], o['id']['year']];
        });

        let gdp2015 = map(data[1], (o) => {
            return [o['gdp'], o['life'], o['population'], o['id']['country'], o['id']['year']];
        });

        this.chartOption = {
            backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                offset: 0,
                color: '#f7f8fa'
            }, {
                offset: 1,
                color: '#cdd0d5'
            }]),
            title: {
                text: '1990 与 2015 年各国家人均寿命与 GDP'
            },
            legend: {
                right: 10,
                data: ['1990', '2015']
            },
            xAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                }
            },
            yAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                scale: true
            },
            series: [{
                name: '1990',
                data: gdp1990,
                type: 'scatter',
                symbolSize: (series) => {
                    return Math.sqrt(series[2]) / 5e2;
                },
                label: {
                    emphasis: {
                        show: true,
                        formatter: (param) => {
                            return param.data[3];
                        },
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(120, 36, 50, 0.5)',
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: 'rgb(251, 118, 123)'
                        }, {
                            offset: 1,
                            color: 'rgb(204, 46, 72)'
                        }])
                    }
                }
            }, {
                name: '2015',
                data: gdp2015,
                type: 'scatter',
                symbolSize: (series) => {
                    return Math.sqrt(series[2]) / 5e2;
                },
                label: {
                    emphasis: {
                        show: true,
                        formatter: (param) => {
                            return param.data[3];
                        },
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(25, 100, 150, 0.5)',
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: 'rgb(129, 227, 238)'
                        }, {
                            offset: 1,
                            color: 'rgb(25, 183, 207)'
                        }])
                    }
                }
            }]
        };

    }

    private setMapData() {
        function randomData() {
            return Math.round(Math.random() * 1000);
        }

        this.mapOption = {
            title: {
                text: 'iPhone销量',
                subtext: '纯属虚构',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['iPhone3', 'iPhone4', 'iPhone5']
            },
            visualMap: {
                min: 0,
                max: 2500,
                left: 'left',
                top: 'center',
                text: ['高', '低'],
                calculable: true
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: { readOnly: false },
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: 'iPhone3',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: [
                        { name: '北京', value: randomData() },
                        { name: '天津', value: randomData() },
                        { name: '上海', value: randomData() },
                        { name: '重庆', value: randomData() },
                        { name: '河北', value: randomData() },
                        { name: '河南', value: randomData() },
                        { name: '云南', value: randomData() },
                        { name: '辽宁', value: randomData() },
                        { name: '黑龙江', value: randomData() },
                        { name: '湖南', value: randomData() },
                        { name: '安徽', value: randomData() },
                        { name: '山东', value: randomData() },
                        { name: '新疆', value: randomData() },
                        { name: '江苏', value: randomData() },
                        { name: '浙江', value: randomData() },
                        { name: '江西', value: randomData() },
                        { name: '湖北', value: randomData() },
                        { name: '广西', value: randomData() },
                        { name: '甘肃', value: randomData() },
                        { name: '山西', value: randomData() },
                        { name: '内蒙古', value: randomData() },
                        { name: '陕西', value: randomData() },
                        { name: '吉林', value: randomData() },
                        { name: '福建', value: randomData() },
                        { name: '贵州', value: randomData() },
                        { name: '广东', value: randomData() },
                        { name: '青海', value: randomData() },
                        { name: '西藏', value: randomData() },
                        { name: '四川', value: randomData() },
                        { name: '宁夏', value: randomData() },
                        { name: '海南', value: randomData() },
                        { name: '台湾', value: randomData() },
                        { name: '香港', value: randomData() },
                        { name: '澳门', value: randomData() }
                    ]
                },
                {
                    name: 'iPhone4',
                    type: 'map',
                    mapType: 'china',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: [
                        { name: '北京', value: randomData() },
                        { name: '天津', value: randomData() },
                        { name: '上海', value: randomData() },
                        { name: '重庆', value: randomData() },
                        { name: '河北', value: randomData() },
                        { name: '安徽', value: randomData() },
                        { name: '新疆', value: randomData() },
                        { name: '浙江', value: randomData() },
                        { name: '江西', value: randomData() },
                        { name: '山西', value: randomData() },
                        { name: '内蒙古', value: randomData() },
                        { name: '吉林', value: randomData() },
                        { name: '福建', value: randomData() },
                        { name: '广东', value: randomData() },
                        { name: '西藏', value: randomData() },
                        { name: '四川', value: randomData() },
                        { name: '宁夏', value: randomData() },
                        { name: '香港', value: randomData() },
                        { name: '澳门', value: randomData() }
                    ]
                },
                {
                    name: 'iPhone5',
                    type: 'map',
                    mapType: 'china',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: [
                        { name: '北京', value: randomData() },
                        { name: '天津', value: randomData() },
                        { name: '上海', value: randomData() },
                        { name: '广东', value: randomData() },
                        { name: '台湾', value: randomData() },
                        { name: '香港', value: randomData() },
                        { name: '澳门', value: randomData() }
                    ]
                }
            ]
        };

    }

}
