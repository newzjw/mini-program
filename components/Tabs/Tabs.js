// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 要接收的数据的名称
    // aaa:{
    //   // type  要接收的数据的类型 
    //   type:String,
    //   // value  默认值
    //   value:""
    // }
    tabs:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    /* 
      1 绑定点击事件  需要在methods中绑定
      2 获取被点击的索引 
      3 获取原数组 
      4 对数组循环
        1 给每一个循环性 选中属性 改为 false
        2 给 当前的索引的 项 添加激活选中效果就可以了！！！
       5 点击事件触发的时候 
          触发父组件中的自定义事件 同时传递数据给  父组件  
          this.triggerEvent("父组件自定义事件的名称",要传递的参数)
       */
    hanldeItemTap(e) {
      console.log(e)
      //  2 获取索引
      const {index}=e.currentTarget.dataset
      console.log(index);
      let {tabs}=this.data
      // 4 循环数组
      // [].forEach 遍历数组 遍历数组的时候 修改了 v ，也会导致源数组被修改
      tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false)
      this.setData({
        tabs
      })
    }
  }
})
