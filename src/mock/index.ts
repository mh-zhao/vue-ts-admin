/*
 * @Author: mhzhao
 * @Date: 2020-06-03 11:33:55
 * @LastEditTime: 2020-06-03 15:48:06
 */ 
import Mock from 'mockjs'

Mock.mock('/api/ce','get',()=>{
  return Mock.mock({
    "list|10-20": [
      {address: "@county()"}
    ]
  })
})

Mock.mock('/api/data','post',()=>{
  return Mock.mock({
    "list|10-20": [
      {address: "@cname"}
    ]
  })
})

export default Mock;