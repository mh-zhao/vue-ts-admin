/*
 * @Author: mhzhao
 * @Date: 2020-06-03 11:33:55
 * @LastEditTime: 2020-06-03 15:48:06
 */

import Mock from "mockjs";

Mock.mock("/api/ce", "get", () => {
  return Mock.mock({
    "list|10-20": [{ address: "@county()" }]
  });
});

Mock.mock("/api/data", "post", () => {
  return Mock.mock({
    "list|10-20": [{ address: "@cname" }]
  });
});

Mock.mock("/api/table", "get", () => {
  return Mock.mock({
    "list|10-20": [
      {
        "id|+1": 1,
        name: "@cname",
        test1: "@cparagraph",
        "children|0-6": [
          {
            "id|+50": 50,
            name: "@cname",
            test1: "@cparagraph"
          }
        ]
      }
    ]
  });
});

Mock.mock("/api/postTableData", "get", () => {
  return Mock.mock({
    "list|10-20": [
      {
        "id|+1": 1,
        name: "@cname",
        test1: "@cparagraph"
      }
    ]
  });
});

Mock.mock("/api/rankTableData", "get", () => {
  return Mock.mock({
    "list|10-20": [
      {
        "id|+1": 1,
        name: "@cname",
        test1: "@cparagraph"
      }
    ]
  });
});

export default Mock;
