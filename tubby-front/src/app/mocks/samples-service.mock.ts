import { Injectable } from '@angular/core';

declare var Mock: any;
let Random = Mock.Random;

@Injectable()
export class SamplesServiceMock {

    constructor() {

        Mock.mock(/\/api\/samples\/persons\/([\w\d-]+)/, 'get', {
            id: '@guid',
            email: '@email',
            firstName: '@cfirst',
            lastName: '@clast',
            gender: '0',
            age: 20,
            birth: '@date',
            married: '0',
            telephone: '186-1234-5678',
            grade: '3',
            intro: '@cparagraph()'
        });

        Mock.mock(/\/api\/samples\/persons/, 'get', {
            'content|15': [{
                'id': '@guid',
                'email': '@email',
                'firstName': '@cfirst',
                'lastName': '@clast',
                'gender|1': ['0', '1', '10'],
                'age|1-100': 20,
                'birth': '@date',
                'married|1': ['0', '1'],
                'telephone': '186-1234-5678',
                'grade|1': ['1', '2', '3', '4'],
                'intro': '@cparagraph()'
            }],
            'totalPages': 10,
            'totalElements': 150,
            'last': false,
            'size': 15,
            'number': 0,
            'sort': null,
            'numberOfElements': 15,
            'first': true
        });

        Mock.mock(/\/api\/samples\/persons/, 'post', {
            id: '@guid',
            email: '@email',
            firstName: '@cfirst',
            lastName: '@clast',
            gender: '0',
            age: 20,
            birth: '@date',
            married: '0',
            telephone: '186-1234-5678',
            grade: '3',
            intro: '@cparagraph()'
        });

        Mock.mock(/\/api\/samples\/persons\/([\w\d-]+)/, 'put', {

        });

        Mock.mock(/\/api\/samples\/persons\/([\w\d-]+)/, 'delete', {

        });

        Mock.mock(/\/api\/samples\/docs/, 'get', () => {
            return {
                label: 'root',
                data: 'root',
                children: [
                    {
                        label: 'Documents',
                        data: 'Documents Folder',
                        expandedIcon: 'fa-folder-open',
                        collapsedIcon: 'fa-folder',
                        children: [
                            {
                                label: 'Work',
                                data: 'Work Folder',
                                expandedIcon: 'fa-folder-open',
                                collapsedIcon: 'fa-folder',
                                children: [
                                    {
                                        label: 'Expenses.doc',
                                        icon: 'fa-file-word-o',
                                        data: 'Expenses Document'
                                    },
                                    {
                                        label: 'Resume.doc',
                                        icon: 'fa-file-word-o',
                                        data: 'Resume Document'
                                    }
                                ]
                            },
                            {
                                label: 'Home',
                                data: 'Home Folder',
                                expandedIcon: 'fa-folder-open',
                                collapsedIcon: 'fa-folder',
                                children: [
                                    {
                                        label: 'Invoices.txt',
                                        icon: 'fa-file-word-o',
                                        data: 'Invoices for this month'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: 'Pictures',
                        data: 'Pictures Folder',
                        expandedIcon: 'fa-folder-open',
                        collapsedIcon: 'fa-folder',
                        children: [
                            {
                                label: 'barcelona.jpg',
                                icon: 'fa-file-image-o',
                                data: 'Barcelona Photo'
                            },
                            {
                                label: 'logo.jpg',
                                icon: 'fa-file-image-o',
                                data: 'PrimeFaces Logo'
                            },
                            {
                                label: 'primeui.png',
                                icon: 'fa-file-image-o',
                                data: 'PrimeUI Logo'
                            }
                        ]
                    },
                    {
                        label: 'Movies',
                        data: 'Movies Folder',
                        expandedIcon: 'fa-folder-open',
                        collapsedIcon: 'fa-folder',
                        children: [
                            {
                                label: 'Al Pacino',
                                data: 'Pacino Movies',
                                children: [
                                    {
                                        label: 'Scarface',
                                        icon: 'fa-file-video-o',
                                        data: 'Scarface Movie'
                                    },
                                    {
                                        label: 'Serpico',
                                        icon: 'fa-file-video-o',
                                        data: 'Serpico Movie'
                                    }
                                ]
                            },
                            {
                                label: 'Robert De Niro',
                                data: 'De Niro Movies',
                                children: [
                                    {
                                        label: 'Goodfellas',
                                        icon: 'fa-file-video-o',
                                        data: 'Goodfellas Movie'
                                    },
                                    {
                                        label: 'Untouchables',
                                        icon: 'fa-file-video-o',
                                        data: 'Untouchables Movie'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            };
        });

        Mock.mock(/\/api\/samples\/gdp/, 'get', () => {
            return [
                [
                    {
                        gdp: 28604,
                        life: 77,
                        population: 17096869,
                        id: {
                            country: '澳大利亚',
                            year: 1990
                        }
                    },
                    {
                        gdp: 37062,
                        life: 75.4,
                        population: 252847810,
                        id: {
                            country: '美国',
                            year: 1990
                        }
                    }
                ],
                [
                    {
                        gdp: 44056,
                        life: 81.8,
                        population: 23968973,
                        id: {
                            country: '澳大利亚',
                            year: 2015
                        }
                    },
                    {
                        gdp: 53354,
                        life: 79.1,
                        population: 321773631,
                        id: {
                            country: '美国',
                            year: 2015
                        }
                    }
                ]
            ];
        });

    }
}
