/*
 * @Author: mhzhao
 * @Date: 2020-06-09 15:38:58
 * @LastEditTime: 2020-06-11 13:54:03
 */
const echarts = require("echarts/lib/echarts");
const axisLabel = {
  fontSize: 14,
  color: "#fff"
};
const option = {
  bar: {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
          "旅游行业",
          "教育培训",
          "游戏行业",
          "医疗行业",
          "电商行业",
          "社交行业",
          "金融行业"
        ],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
            // width: 1,
            // type: "solid"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        barWidth: "35%",
        data: [0, 0, 0, 0, 0, 0],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  },
  line: {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985"
        }
      }
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      axisLabel,
      data: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月"
      ]
    },
    yAxis: {
      type: "value",
      axisLabel
    },
    series: [
      {
        name: "新建数",
        type: "line",
        top: "center",
        left: "center",
        smooth: true, // 是否平滑曲线显示
        showAllSymbol: true,
        symbol: "circle",
        symbolSize: 6,
        lineStyle: {
          normal: {
            color: "#4AADEB" // 线条颜色
          }
        },
        label: {
          show: false,
          position: "top",
          textStyle: {
            color: "#fff"
          }
        },
        itemStyle: {
          color: "#4AADEB",
          borderColor: "#fff",
          borderWidth: 3
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "#4AADEB"
                },
                {
                  offset: 1,
                  color: "#3fbbff0d"
                }
              ],
              false
            )
          }
        },
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  pie: {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
      position: function(p) {
        //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      }
    },
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "年龄分布",
        type: "pie",
        center: ["50%", "42%"],
        radius: ["40%", "60%"],
        color: [
          "#065aab",
          "#066eab",
          "#0682ab",
          "#0696ab",
          "#06a0ab",
          "#06b4ab",
          "#06c8ab",
          "#06dcab",
          "#06f0ab"
        ],
        label: { show: false },
        labelLine: { show: false },
        data: [
          { value: 0, name: "0岁以下" },
          { value: 0, name: "20-29岁" },
          { value: 0, name: "30-39岁" },
          { value: 0, name: "40-49岁" },
          { value: 0, name: "50岁以上" }
        ]
      }
    ]
  },
  radar: {
    // "backgroundColor": "#101736",
    color: ["#4A99FF", "#4BFFFC"],
    legend: {
      orient: "vertical",
      icon: "circle",
      data: ["车辆数", "设计车位"],
      bottom: 0,
      left: 0,
      itemWidth: 10,
      itemHeight: 10,
      // "itemGap": 21,
      textStyle: {
        fontSize: 14,
        color: "#00E4FF"
      }
    },
    radar: {
      name: {
        textStyle: {
          color: "#fff",
          fontSize: 16
        }
      },
      indicator: [
        {
          text: "小型车",
          max: 6000
        },
        {
          text: "中型车",
          max: 5000
        },
        {
          text: "大型车",
          max: 5000
        },
        {
          text: "货车",
          max: 5000
        },
        {
          text: "特种车",
          max: 5000
        },
        {
          text: "贵宾车",
          max: 5000
        }
      ],
      splitArea: {
        show: true,
        areaStyle: {
          color: ["rgba(255,255,255,0)", "rgba(255,255,255,0)"]
        }
      },
      axisLine: {
        lineStyle: {
          color: "#153269"
        }
      },
      splitLine: {
        lineStyle: {
          color: "#113865",
          width: 1
        }
      }
    },
    series: [
      {
        type: "radar",
        symbolSize: 8,
        data: [
          {
            value: [4300, 4700, 3600, 3900, 3800, 4200],
            name: "车辆数",
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#4A99FF"
                },
                shadowColor: "#4A99FF",
                shadowBlur: 10
              }
            },
            areaStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#4A99FF"
                    },
                    {
                      offset: 0.5,
                      color: "rgba(0,0,0,0)"
                    },
                    {
                      offset: 1,
                      color: "#4A99FF"
                    }
                  ],
                  globalCoord: false
                },
                opacity: 1
              }
            }
          },
          {
            value: [3200, 3000, 3400, 2000, 3900, 2000],
            name: "设计车位",
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#4BFFFC"
                },
                shadowColor: "#4BFFFC",
                shadowBlur: 10
              }
            },
            areaStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#4BFFFC"
                    },
                    {
                      offset: 0.5,
                      color: "rgba(0,0,0,0)"
                    },
                    {
                      offset: 1,
                      color: "#4BFFFC"
                    }
                  ],
                  globalCoord: false
                },
                opacity: 1
              }
            }
          }
        ]
      }
    ]
  },
  calendar: {
    // backgroundColor: '#fff',
    calendar: {
      left: "center",
      top: "20%",
      orient: "vertical",
      cellSize: 35, //大小
      range: "2019-10", //月份
      monthLabel: {
        show: false //隐藏左侧文字
      },
      dayLabel: {
        firstDay: 1, //开始时间 1号开始
        color: "#fff",
        nameMap: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
      },
      yearLabel: {
        show: false //隐藏title
      }
    },
    visualMap: {
      type: "continuous",
      min: 0,
      max: 14, //色值对比 最大值
      show: false, //隐藏工具栏
      inRange: {
        color: ["rgb(21,139,184)", "#FFD8C9", "#FF784C", "#FFAF8B"] //填充色
      }
    },
    series: [
      {
        type: "scatter",
        coordinateSystem: "calendar",
        symbolSize(params) {
          //核心2
          if (params[0] === "2019-10-24") {
            return 35; //当前日期高亮 宽度高度设置成和单元格宽度高度一样
          } else {
            return 1;
          }
        },
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#fff"
            }
          }
        },
        data: [
          { value: ["2019-10-01", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-02", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-03", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-04", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-05", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-06", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-07", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-08", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-09", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-10", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-11", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-12", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-13", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-14", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-15", 14], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-16", 2], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-17", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-18", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-19", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-20", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-21", 1], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-22", 3], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-23", 2], itemStyle: {}, symbol: "rect" },
          {
            value: ["2019-10-24", 1],
            itemStyle: { borderColor: "red" },
            symbol: "rect"
          },
          { value: ["2019-10-25", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-26", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-27", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-28", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-29", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-30", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-31", 0], itemStyle: {}, symbol: "rect" }
        ]
      },
      {
        type: "heatmap",
        coordinateSystem: "calendar",
        data: [
          { value: ["2019-10-01", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-02", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-03", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-04", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-05", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-06", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-07", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-08", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-09", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-10", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-11", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-12", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-13", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-14", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-15", 14], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-16", 2], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-17", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-18", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-19", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-20", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-21", 1], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-22", 3], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-23", 2], itemStyle: {}, symbol: "rect" },
          {
            value: ["2019-10-24", 1],
            itemStyle: { borderColor: "red" },
            symbol: "rect"
          },
          { value: ["2019-10-25", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-26", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-27", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-28", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-29", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-30", 0], itemStyle: {}, symbol: "rect" },
          { value: ["2019-10-31", 0], itemStyle: {}, symbol: "rect" }
        ]
      }
    ]
  },
  graph: {
    title: {
      text: ""
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    label: {
      normal: {
        show: true,
        textStyle: {
          fontSize: 12
        }
      }
    },
    series: [
      {
        type: "graph",
        layout: "force",
        symbolSize: 45,
        legendHoverLink: true,
        focusNodeAdjacency: true,
        roam: true,
        label: {
          normal: {
            show: true,
            position: "inside",
            textStyle: {
              fontSize: 12
            }
          }
        },
        force: {
          repulsion: 1000
        },
        edgeSymbolSize: [4, 50],
        edgeLabel: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 10
            },
            formatter: "{c}"
          }
        },
        categories: [
          {
            itemStyle: {
              normal: {
                color: "#BB8FCE"
              }
            }
          },
          {
            itemStyle: {
              normal: {
                color: "#0099FF"
              }
            }
          },
          {
            itemStyle: {
              normal: {
                color: "#5DADE2"
              }
            }
          }
        ],
        data: [
          {
            name: "项目",
            draggable: true
          },
          {
            name: "人员",
            category: 0,
            draggable: true
          },
          {
            name: "人员1",
            category: 0,
            draggable: true
          },
          {
            name: "人员2",
            category: 0,
            draggable: true
          },
          {
            name: "人员3",
            category: 0,
            draggable: true
          },
          {
            name: "机构",
            category: 1,
            draggable: true
          },
          {
            name: "机构1",
            category: 1,
            draggable: true
          },
          {
            name: "机构2",
            category: 1,
            draggable: true
          },
          {
            name: "机构3",
            category: 1,
            draggable: true
          },
          {
            name: "文献",
            category: 2,
            draggable: true
          },
          {
            name: "文献1",
            category: 2,
            draggable: true
          },
          {
            name: "文献2",
            category: 2,
            draggable: true
          },
          {
            name: "文献3",
            category: 2,
            draggable: true
          }
        ],
        links: [
          {
            source: 0,
            target: 1,
            value: ""
          },
          {
            source: 1,
            target: 2,
            value: ""
          },
          {
            source: 1,
            target: 3,
            value: ""
          },
          {
            source: 1,
            target: 4,
            value: ""
          },
          {
            source: 0,
            target: 5,
            value: ""
          },
          {
            source: 5,
            target: 6,
            value: ""
          },
          {
            source: 5,
            target: 7,
            value: ""
          },
          {
            source: 5,
            target: 8,
            value: ""
          },
          {
            source: 0,
            target: 9,
            value: ""
          },
          {
            source: 9,
            target: 10,
            value: ""
          },
          {
            source: 9,
            target: 11,
            value: ""
          },
          {
            source: 9,
            target: 12,
            value: ""
          }
        ],
        lineStyle: {
          normal: {
            opacity: 0.9,
            width: 1,
            curveness: 0
          }
        }
      }
    ]
  }
};

export default option;
