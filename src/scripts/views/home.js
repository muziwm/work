 var sa = require('../lib/swiper.animate1.0.2.min.js');

var tplHome = require('../templates/home.string');

// 引用公共方法
var util = require('../utils/fn.js');

SPA.defineView('home', {
  html: tplHome,

  plugins: ['delegated',{
    name: 'avalon',
    options: function (vm) {
      vm.livelist = [];
    }
  }],

  init: {
    mySwiper: null
  },

  bindActions: {
    'tap.slide': function (e, data) {
      this.mySwiper.slideTo($(e.el).index())
    }
  },
  
  bindEvents: {
    /*'beforeShow': function(){
      var that = this;
      var vm = that.getVM();

      $.ajax({
        url:'/api/getDatalist.php',
        data:{
          rtype:'origin'
        },
        success:function(){
          
        }
      })
    }
    */

    'show': function () {
      this.mySwiper = new Swiper('#home-swiper', {
        loop: true,
         pagination: '.swiper-pagination',
          autoplay: 3000,
        
      });
         // var lifenavScroll = this.widgets.himglistscroll;
         // 不能用中括号
      var lifenavScroll = this.widgets.himglistscroll;
      lifenavScroll.options.scrollX = true;
      lifenavScroll.options.scrollY = false;
      
      // lifenavScroll.options.alwaysScrollX = true;
      // lifenavScroll.options.alwaysScrollY = false;
      // console.log(lifenavScroll.options.alwaysScrollY )
      //console.log(sa.animate);
  


      
    }
  }
});





  
