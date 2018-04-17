import { Injectable } from '@angular/core';

declare var Mock: any;

export let onlineStatus = {
  onlinePerc: '97.1',
  offlinePerc: '2.9'
};

export let succRate = [
  { dataDate: '12/17', succRate: '68.1' },
  { dataDate: '12/18', succRate: '79.8' },
  { dataDate: '12/19', succRate: '92.3' },
  { dataDate: '12/20', succRate: '69.6' },
  { dataDate: '12/21', succRate: '75.6' },
  { dataDate: '12/22', succRate: '80' },
  { dataDate: '12/23', succRate: '94.3' }
];

export let taskStatus = [
  { taskName: '拉闸', taskEntries: [
    { taskName: '拉闸', taskStatus: '01', planTime: '2017-12-17 09:23:12', execTime: '2017-12-17 09:23:12' },
    { taskName: '拉闸', taskStatus: '01', planTime: '2017-12-17 09:23:13', execTime: '2017-12-17 09:23:13' },
    { taskName: '拉闸', taskStatus: '02', planTime: '2017-12-17 09:23:14', execTime: '2017-12-17 09:23:14' },
    { taskName: '拉闸', taskStatus: '02', planTime: '2017-12-17 09:23:15', execTime: '2017-12-17 09:23:15' },
    { taskName: '拉闸', taskStatus: '01', planTime: '2017-12-17 09:23:16', execTime: '2017-12-17 09:23:16' }
  ]},
  { taskName: '合闸', taskEntries: [
    { taskName: '合闸', taskStatus: '01', planTime: '2017-12-17 09:23:17', execTime: '2017-12-17 09:23:17' },
    { taskName: '合闸', taskStatus: '01', planTime: '2017-12-17 09:23:18', execTime: '2017-12-17 09:23:18' },
    { taskName: '合闸', taskStatus: '01', planTime: '2017-12-17 09:23:19', execTime: '2017-12-17 09:23:19' },
    { taskName: '合闸', taskStatus: '00', planTime: '2017-12-17 09:23:20', execTime: '2017-12-17 09:23:20' },
    { taskName: '合闸', taskStatus: '01', planTime: '2017-12-17 09:23:21', execTime: '2017-12-17 09:23:21' }
  ]},
  { taskName: '对时', taskEntries: [
    { taskName: '对时', taskStatus: '01', planTime: '2017-12-17 09:23:22', execTime: '2017-12-17 09:23:22' },
    { taskName: '对时', taskStatus: '01', planTime: '2017-12-17 09:23:23', execTime: '2017-12-17 09:23:23' },
    { taskName: '对时', taskStatus: '02', planTime: '2017-12-17 09:23:24', execTime: '2017-12-17 09:23:24' },
    { taskName: '对时', taskStatus: '01', planTime: '2017-12-17 09:23:25', execTime: '2017-12-17 09:23:25' },
    { taskName: '对时', taskStatus: '00', planTime: '2017-12-17 09:23:26', execTime: '2017-12-17 09:23:26' }
  ]},
  { taskName: '开端子盖', taskEntries: [
    { taskName: '开端子盖', taskStatus: '01', planTime: '2017-12-17 09:23:27', execTime: '2017-12-17 09:23:27' },
    { taskName: '开端子盖', taskStatus: '02', planTime: '2017-12-17 09:23:28', execTime: '2017-12-17 09:23:28' },
    { taskName: '开端子盖', taskStatus: '01', planTime: '2017-12-17 09:23:29', execTime: '2017-12-17 09:23:29' },
    { taskName: '开端子盖', taskStatus: '02', planTime: '2017-12-17 09:23:30', execTime: '2017-12-17 09:23:30' },
    { taskName: '开端子盖', taskStatus: '00', planTime: '2017-12-17 09:23:31', execTime: '2017-12-17 09:23:31' }
  ]},
  { taskName: '磁场干扰', taskEntries: [
    { taskName: '磁场干扰', taskStatus: '00', planTime: '2017-12-17 09:23:32', execTime: '2017-12-17 09:23:32' },
    { taskName: '磁场干扰', taskStatus: '01', planTime: '2017-12-17 09:23:33', execTime: '2017-12-17 09:23:33' },
    { taskName: '磁场干扰', taskStatus: '01', planTime: '2017-12-17 09:23:34', execTime: '2017-12-17 09:23:34' },
    { taskName: '磁场干扰', taskStatus: '01', planTime: '2017-12-17 09:23:35', execTime: '2017-12-17 09:23:35' },
    { taskName: '磁场干扰', taskStatus: '01', planTime: '2017-12-17 09:23:36', execTime: '2017-12-17 09:23:36' }
  ]},
  { taskName: '数据回传', taskEntries: [
    { taskName: '数据回传', taskStatus: '00', planTime: '2017-12-17 09:23:37', execTime: '2017-12-17 09:23:37' },
    { taskName: '数据回传', taskStatus: '02', planTime: '2017-12-17 09:23:38', execTime: '2017-12-17 09:23:38' },
    { taskName: '数据回传', taskStatus: '01', planTime: '2017-12-17 09:23:39', execTime: '2017-12-17 09:23:39' },
    { taskName: '数据回传', taskStatus: '01', planTime: '2017-12-17 09:23:40', execTime: '2017-12-17 09:23:40' },
    { taskName: '数据回传', taskStatus: '02', planTime: '2017-12-17 09:23:41', execTime: '2017-12-17 09:23:41' }
  ]},
  { taskName: '电压监测', taskEntries: [
    { taskName: '电压监测', taskStatus: '01', planTime: '2017-12-17 09:23:42', execTime: '2017-12-17 09:23:42' },
    { taskName: '电压监测', taskStatus: '01', planTime: '2017-12-17 09:23:43', execTime: '2017-12-17 09:23:43' },
    { taskName: '电压监测', taskStatus: '01', planTime: '2017-12-17 09:23:44', execTime: '2017-12-17 09:23:44' },
    { taskName: '电压监测', taskStatus: '01', planTime: '2017-12-17 09:23:45', execTime: '2017-12-17 09:23:45' },
    { taskName: '电压监测', taskStatus: '02', planTime: '2017-12-17 09:23:46', execTime: '2017-12-17 09:23:46' }
  ]},
  { taskName: '电流监测', taskEntries: [
    { taskName: '电流监测', taskStatus: '02', planTime: '2017-12-17 09:23:47', execTime: '2017-12-17 09:23:47' },
    { taskName: '电流监测', taskStatus: '01', planTime: '2017-12-17 09:23:48', execTime: '2017-12-17 09:23:48' },
    { taskName: '电流监测', taskStatus: '01', planTime: '2017-12-17 09:23:49', execTime: '2017-12-17 09:23:49' },
    { taskName: '电流监测', taskStatus: '02', planTime: '2017-12-17 09:23:50', execTime: '2017-12-17 09:23:50' },
    { taskName: '电流监测', taskStatus: '00', planTime: '2017-12-17 09:23:51', execTime: '2017-12-17 09:23:51' }
  ]}
];

export let eventStatus = [
  { eventId: '01_3_1.0.12.31.0.255_2_02', eventName: '拉闸', eventCnt: 200 },
  { eventId: '01_3_1.0.72.33.0.255_2_02', eventName: '合闸', eventCnt: 160 },
  { eventId: '01_1_0.0.96.7.2.255_2_02', eventName: '对时', eventCnt: 150 },
  { eventId: '01_3_0.0.96.7.15.255_2_02', eventName: '开端子盖', eventCnt: 120 },
  { eventId: '01_3_1.0.52.34.0.255_2_02', eventName: '磁场干扰', eventCnt: 103 }
];

export let event = [
  { eventName: '拉闸', logicalAddr: '0001', physicalAddr: '12345', eventTime: '2017-11-07 11:28:38' },
  { eventName: '合闸', logicalAddr: '0001', physicalAddr: '12346', eventTime: '2017-11-07 11:26:27' },
  { eventName: '对时', logicalAddr: '0001', physicalAddr: '12347', eventTime: '2017-11-07 11:25:08' },
  { eventName: '开端子盖', logicalAddr: '0001', physicalAddr: '12348', eventTime: '2017-11-07 11:24:13' },
  { eventName: '磁场干扰', logicalAddr: '0001', physicalAddr: '12349', eventTime: '2017-11-07 11:22:38' }
];

export let cmdStatus = [
  { cmdId: '002e076b2356489b8e3364070477488e', cmdName: '拉闸', cmdCnt: 300 },
  { cmdId: '005a2a7d9e4e4608a123186a7734adf8', cmdName: '合闸', cmdCnt: 280 },
  { cmdId: '0090dd22e7d6422e9bb575cba0701920', cmdName: '对时', cmdCnt: 260 },
  { cmdId: '0166e7ddb0b74c4a98c094e52cc847c2', cmdName: '开端子盖', cmdCnt: 230 },
  { cmdId: '027c32ac47964c7a82c884a0b05f0462', cmdName: '磁场干扰', cmdCnt: 180 }
];

export let cmd = [
  { cmdName: '拉闸', logicalAddr: '0001', physicalAddr: '12345', cmdTime: '2017-11-07 11:28:38' },
  { cmdName: '合闸', logicalAddr: '0001', physicalAddr: '12346', cmdTime: '2017-11-07 11:28:35' },
  { cmdName: '对时', logicalAddr: '0001', physicalAddr: '12347', cmdTime: '2017-11-07 11:28:33' },
  { cmdName: '开端子盖', logicalAddr: '0001', physicalAddr: '12348', cmdTime: '2017-11-07 11:28:18' },
  { cmdName: '磁场干扰', logicalAddr: '0001', physicalAddr: '12349', cmdTime: '2017-11-07 11:28:16' }
];

export let cmdTraffic = [
  { dataTime: '00:00', receiveCnt: 491, processCnt: 461 },
  { dataTime: '01:00', receiveCnt: 177, processCnt: 161 },
  { dataTime: '02:00', receiveCnt: 110, processCnt: 87 },
  { dataTime: '03:00', receiveCnt: 301, processCnt: 273 },
  { dataTime: '04:00', receiveCnt: 106, processCnt: 60 },
  { dataTime: '05:00', receiveCnt: 210, processCnt: 163 },
  { dataTime: '06:00', receiveCnt: 300, processCnt: 255 },
  { dataTime: '07:00', receiveCnt: 78, processCnt: 60 },
  { dataTime: '08:00', receiveCnt: 411, processCnt: 387 },
  { dataTime: '09:00', receiveCnt: 171, processCnt: 152 },
  { dataTime: '10:00', receiveCnt: 398, processCnt: 366 },
  { dataTime: '11:00', receiveCnt: 93, processCnt: 80 },
  { dataTime: '12:00', receiveCnt: 270, processCnt: 248 },
  { dataTime: '13:00', receiveCnt: 122, processCnt: 86 },
  { dataTime: '14:00', receiveCnt: 200, processCnt: 150 },
  { dataTime: '15:00', receiveCnt: 192, processCnt: 158 },
  { dataTime: '16:00', receiveCnt: 345, processCnt: 303 },
  { dataTime: '17:00', receiveCnt: 490, processCnt: 449 },
  { dataTime: '18:00', receiveCnt: 184, processCnt: 144 },
  { dataTime: '19:00', receiveCnt: 329, processCnt: 309 }
];

@Injectable()
export class HomeServiceMock {
  constructor() {
    Mock.mock(/\/api\/home\/onlineStatus/, 'get', onlineStatus);

    Mock.mock(/\/api\/home\/succRate/, 'get', succRate);

    Mock.mock(/\/api\/home\/taskStatus/, 'get', taskStatus);

    Mock.mock(/\/api\/home\/eventStatus/, 'get', eventStatus);

    Mock.mock(/\/api\/home\/lastEvent/, 'get', event);

    Mock.mock(/\/api\/home\/cmdStatus/, 'get', cmdStatus);

    Mock.mock(/\/api\/home\/lastCmd/, 'get', cmd);

    Mock.mock(/\/api\/home\/cmdTraffic/, 'get', cmdTraffic);
  }
}
