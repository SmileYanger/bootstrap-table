
// 个人网盘
(function(document, window, $) {
  'use strict';

  (function() {
    $('#test').bootstrapTable({
      url: "bootstrap_table_test2.json",
      
      height: "400",   //表格的高度
      iconSize: 'outline',
      striped: true,                      //是否显示行间隔色
      cache: false,  //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
      showColumns: true,
      pagination: true,  //是否显示分页
      paginationShowPageGo: true,//跳到第几页
      pageSize:12,
      pageNumber: 1,                       //初始化加载第一页，默认第一页
      pageSize: 6,                       //每页的记录行数（*）
      pageList: [2, 4, 6, 8],        //可供选择的每页的行数（*）
      search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
      strictSearch: true,
      showColumns: true,                  //是否显示所有的列
      showRefresh: true,                  //是否显示刷新按钮
      minimumCountColumns: 2,             //最少允许的列数
      clickToSelect: true,                //是否启用点击选中行
      height: 700,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
      uniqueId: "no",                     //每一行的唯一标识，一般为主键列
      showToggle: true,                    //是否显示详细视图和列表视图的切换按钮
      cardView: false,                    //是否显示详细视图
      detailView: false,                   //是否显示父子表
      icons: {
        refresh: 'glyphicon-repeat',
        toggle: 'glyphicon-list-alt',
        columns: 'glyphicon-list'
      }
    });
    
    
    
  })();








})(document, window, jQuery);
