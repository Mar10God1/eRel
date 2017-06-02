// Create the chart
Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Campaign Responses by Service'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        type: 'Services'
    },
    yAxis: {
        title: {
            text: 'Response Volume'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: false,
                format: '{point.name}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:2f}</b><br/>'
    },

    series: [{
        name: 'Services',
        colorByPoint: true,
        data: [{
            name: 'Botox',
            y: 7177,
            drilldown: 'Botox'
        }, {
            name: 'Dermal Fillers',
            y: 6663,
            drilldown: 'Dermal Fillers'
        }, {
            name: 'CoolSculpting',
            y: 4454,
            drilldown: 'CoolSculpting'
        }, {
            name: 'Laser Hair Removal',
            y: 2817,
            drilldown: 'Laser Hair Removal'
        }, {
            name: 'Ultherapy',
            y: 2317,
            drilldown: 'Ultherapy'
        }, {
            name: 'Kybella',
            y: 2248,
            drilldown: 'Kybella'
          }, {
              name: 'IPL Therapy',
              y: 1614,
              drilldown: 'IPL Therapy'
          }, {
            name: 'Micro-Needling',
            y: 1550,
            drilldown: 'Micro-Needling'
        }, {
            name: 'Chemical Peel',
            y: 1358,
            drilldown: 'Chemical Peel'
        }, {
            name: 'SculpSure',
            y: 1325,
            drilldown: 'SculpSure'
        }, {
            name: 'Medical Weight Loss',
            y: 1305,
            drilldown: 'Medical Weight Loss'
        }, {
            name: 'Vanquish Body',
            y: 963,
            drilldown: 'Vanquish Body'
        }, {
            name: 'Juvederm',
            y: 961,
            drilldown: 'Juvederm'
        }, {
            name: 'Bioidentical Hormone Therapy',
            y: 880,
            drilldown: 'Bioidentical Hormone Therapy'
        }, {
            name: 'Liposuction',
            y: 855,
            drilldown: 'Liposuction'
        }, {
            name: 'Microdermabrasion',
            y: 831,
            drilldown: 'Microdermabrasion'
        }]
    }],
    drilldown: {
        series: [{
          name: 'Botox',
          id: 'Botox',
          data: [
              [
                  'January',
                  1018
              ],
              [
                  'February',
                  836
              ],
              [
                  'March',
                  1188
              ],
              [
                  'April',
                  673
              ],
              [
                  'May',
                  669
              ],
              [
                  'June',
                  211
              ],
              [
                  'July',
                  280
              ],
              [
                  'August',
                  251
              ],
              [
                  'September',
                  372
              ],
              [
                  'October',
                  639
              ],
              [
                  'November',
                  631
              ],
              [
                  'December',
                  409
              ]
          ]
       }, {
            name: 'Dermal Fillers',
            id: 'Dermal Fillers',
            data: [
                [
                    'January',
                    398
                ],
                [
                    'February',
                    793
                ],
                [
                    'March',
                    897
                ],
                [
                    'April',
                    803
                ],
                [
                    'May',
                    755
                ],
                [
                    'June',
                    249
                ],
                [
                    'July',
                    209
                ],
                [
                    'August',
                    340
                ],
                [
                    'September',
                    229
                ],
                [
                    'October',
                    339
                ],
                [
                    'November',
                    850
                ],
                [
                    'December',
                    801
                ]
            ]
        }, {
          name: 'CoolSculpting',
          id: 'CoolSculpting',
          data: [
              [
                  'January',
                  584
              ],
              [
                  'February',
                  273
              ],
              [
                  'March',
                  532
              ],
              [
                  'April',
                  755
              ],
              [
                  'May',
                  455
              ],
              [
                  'June',
                  258
              ],
              [
                  'July',
                  345
              ],
              [
                  'August',
                  80
              ],
              [
                  'September',
                  291
              ],
              [
                  'October',
                  197
              ],
              [
                  'November',
                  323
              ],
              [
                  'December',
                  361
              ]
          ]
      }, {
        name: 'Laser Hair Removal',
        id: 'Laser Hair Removal',
        data: [
            [
                'January',
                153
            ],
            [
                'February',
                187
            ],
            [
                'March',
                272
            ],
            [
                'April',
                100
            ],
            [
                'May',
                287
            ],
            [
                'June',
                0
            ],
            [
                'July',
                50
            ],
            [
                'August',
                44
            ],
            [
                'September',
                123
            ],
            [
                'October',
                157
            ],
            [
                'November',
                121
            ],
            [
                'December',
                120
            ]
        ]
    }, {
      name: 'Ultherapy',
      id: 'Ultherapy',
      data: [
          [
              'January',
              153
          ],
          [
              'February',
              187
          ],
          [
              'March',
              272
          ],
          [
              'April',
              100
          ],
          [
              'May',
              287
          ],
          [
              'June',
              0
          ],
          [
              'July',
              50
          ],
          [
              'August',
              44
          ],
          [
              'September',
              123
          ],
          [
              'October',
              157
          ],
          [
              'November',
              121
          ],
          [
              'December',
              120
          ]
      ]
  }, {
    name: 'Kybella',
    id: 'Kybella',
    data: [
        [
            'January',
            153
        ],
        [
            'February',
            187
        ],
        [
            'March',
            272
        ],
        [
            'April',
            100
        ],
        [
            'May',
            287
        ],
        [
            'June',
            0
        ],
        [
            'July',
            50
        ],
        [
            'August',
            44
        ],
        [
            'September',
            123
        ],
        [
            'October',
            157
        ],
        [
            'November',
            121
        ],
        [
            'December',
            120
        ]
    ]
}, {
  name: 'IPL Therapy',
  id: 'IPL Therapy',
  data: [
      [
          'January',
          153
      ],
      [
          'February',
          187
      ],
      [
          'March',
          272
      ],
      [
          'April',
          100
      ],
      [
          'May',
          287
      ],
      [
          'June',
          8
      ],
      [
          'July',
          50
      ],
      [
          'August',
          44
      ],
      [
          'September',
          123
      ],
      [
          'October',
          157
      ],
      [
          'November',
          121
      ],
      [
          'December',
          120
      ]
  ]
  }, {
    name: 'Micro-Needling',
    id: 'Micro-Needling',
    data: [
        [
            'January',
            153
        ],
        [
            'February',
            187
        ],
        [
            'March',
            272
        ],
        [
            'April',
            100
        ],
        [
            'May',
            287
        ],
        [
            'June',
            0
        ],
        [
            'July',
            50
        ],
        [
            'August',
            44
        ],
        [
            'September',
            123
        ],
        [
            'October',
            157
        ],
        [
            'November',
            121
        ],
        [
            'December',
            120
        ]
    ]
    }, {
      name: 'Chemical Peel',
      id: 'Chemical Peel',
      data: [
          [
              'January',
              153
          ],
          [
              'February',
              187
          ],
          [
              'March',
              272
          ],
          [
              'April',
              100
          ],
          [
              'May',
              287
          ],
          [
              'June',
              0
          ],
          [
              'July',
              50
          ],
          [
              'August',
              44
          ],
          [
              'September',
              123
          ],
          [
              'October',
              157
          ],
          [
              'November',
              121
          ],
          [
              'December',
              120
          ]
      ]
      }, {
        name: 'SculpSure',
        id: 'SculpSure',
        data: [
            [
                'January',
                153
            ],
            [
                'February',
                187
            ],
            [
                'March',
                272
            ],
            [
                'April',
                100
            ],
            [
                'May',
                287
            ],
            [
                'June',
                0
            ],
            [
                'July',
                50
            ],
            [
                'August',
                44
            ],
            [
                'September',
                123
            ],
            [
                'October',
                157
            ],
            [
                'November',
                121
            ],
            [
                'December',
                120
            ]
        ]
        }, {
          name: 'Medical Weight Loss',
          id: 'Medical Weight Loss',
          data: [
              [
                  'January',
                  153
              ],
              [
                  'February',
                  187
              ],
              [
                  'March',
                  272
              ],
              [
                  'April',
                  100
              ],
              [
                  'May',
                  287
              ],
              [
                  'June',
                  0
              ],
              [
                  'July',
                  50
              ],
              [
                  'August',
                  44
              ],
              [
                  'September',
                  123
              ],
              [
                  'October',
                  157
              ],
              [
                  'November',
                  121
              ],
              [
                  'December',
                  120
              ]
          ]
          }, {
            name: 'Vanquish Body',
            id: 'Vanquish Body',
            data: [
                [
                    'January',
                    153
                ],
                [
                    'February',
                    187
                ],
                [
                    'March',
                    272
                ],
                [
                    'April',
                    100
                ],
                [
                    'May',
                    287
                ],
                [
                    'June',
                    0
                ],
                [
                    'July',
                    50
                ],
                [
                    'August',
                    44
                ],
                [
                    'September',
                    123
                ],
                [
                    'October',
                    157
                ],
                [
                    'November',
                    121
                ],
                [
                    'December',
                    120
                ]
            ]
            }, {
              name: 'Juvederm',
              id: 'Juvederm',
              data: [
                  [
                      'January',
                      153
                  ],
                  [
                      'February',
                      187
                  ],
                  [
                      'March',
                      272
                  ],
                  [
                      'April',
                      100
                  ],
                  [
                      'May',
                      287
                  ],
                  [
                      'June',
                      0
                  ],
                  [
                      'July',
                      50
                  ],
                  [
                      'August',
                      44
                  ],
                  [
                      'September',
                      123
                  ],
                  [
                      'October',
                      157
                  ],
                  [
                      'November',
                      121
                  ],
                  [
                      'December',
                      120
                  ]
              ]
              }, {
                name: 'Bioidentical Hormone Therapy',
                id: 'Bioidentical Hormone Therapy',
                data: [
                    [
                        'January',
                        153
                    ],
                    [
                        'February',
                        187
                    ],
                    [
                        'March',
                        272
                    ],
                    [
                        'April',
                        100
                    ],
                    [
                        'May',
                        287
                    ],
                    [
                        'June',
                        0
                    ],
                    [
                        'July',
                        50
                    ],
                    [
                        'August',
                        44
                    ],
                    [
                        'September',
                        123
                    ],
                    [
                        'October',
                        157
                    ],
                    [
                        'November',
                        121
                    ],
                    [
                        'December',
                        120
                    ]
                ]
                }, {
                  name: 'Liposuction',
                  id: 'Liposuction',
                  data: [
                      [
                          'January',
                          153
                      ],
                      [
                          'February',
                          187
                      ],
                      [
                          'March',
                          272
                      ],
                      [
                          'April',
                          100
                      ],
                      [
                          'May',
                          287
                      ],
                      [
                          'June',
                          0
                      ],
                      [
                          'July',
                          50
                      ],
                      [
                          'August',
                          44
                      ],
                      [
                          'September',
                          123
                      ],
                      [
                          'October',
                          157
                      ],
                      [
                          'November',
                          121
                      ],
                      [
                          'December',
                          120
                      ]
                  ]
                  }, {
                    name: 'Microdermabrasion',
                    id: 'Microdermabrasion',
                    data: [
                        [
                            'January',
                            153
                        ],
                        [
                            'February',
                            187
                        ],
                        [
                            'March',
                            272
                        ],
                        [
                            'April',
                            100
                        ],
                        [
                            'May',
                            287
                        ],
                        [
                            'June',
                            0
                        ],
                        [
                            'July',
                            50
                        ],
                        [
                            'August',
                            44
                        ],
                        [
                            'September',
                            13
                        ],
                        [
                            'October',
                            155
                        ],
                        [
                            'November',
                            131
                        ],
                        [
                            'December',
                            150
                        ]
                    ]
        }]
    }
});
