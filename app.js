// 实例化vue对象
new Vue({
  //创建根元素，容器element
  el: '#app',
  //data内的属性内容只作用于#app的内部
  data() {
    return {
      name: 'uit',
      num: '073',
      website: 'https://www.baidu.com/',
      website2: 'https://www.163.com/',
      websiteTag: '<a href="https://www.taobao.com/" target="_blank">淘宝</a>',
      page: 18,
      x: 0,
      y: 0
    };
  },
  //方法
  methods: {
    //原先的写法
    // greet: function () {
    //   return 'Good night ' + this.name;
    // }
    // es6的写法
    greet() {
      return `Good night ${this.name}`;
    },
    //传参
    greet_parameter(time) {
      return `Good ${time} ${this.name}`;
    },
    // 增加/减少
    add(inc) {
      this.page += inc;
    },
    subtract(dec) {
      this.page -= dec;
    },
    // 获取鼠标在屏幕中的X轴和Y轴坐标，并赋予x和y
    updateXY(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
});