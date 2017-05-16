/**
 * var map = new BMap.Map("myMap"); 
 * @authors Your Name (you@example.org)
 * @date    2017-05-04 14:11:38
 * @version $Id$
 */
var map1 = new BMap.Map("myMap1"); 
var point1 = new BMap.Point(120.14305,30.24609);
map1.centerAndZoom(new BMap.Point(120.14305,30.24609),18);
var local = new BMap.LocalSearch(map1, {
  renderOptions: {
    map: map1,
    autoViewport: true
  }
});
local.searchNearby("西湖", "宾馆");

var map2 = new BMap.Map("myMap2"); 
map2.centerAndZoom(new BMap.Point(120.15,30.2),17);
var transit = new BMap.TransitRoute(map2, {
  renderOptions: {
    map: map2,
    panel: "results"
  }
});
transit.search("杭州师范大学", "宾馆");

var map = new BMap.Map("myMap3");
var point = new BMap.Point(120.015015,30.296074);
map.centerAndZoom(point, 17);
map.enableScrollWheelZoom();
map.addControl(new BMap.OverviewMapControl({
    isOpen: true
}));
map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.ScaleControl());
map.addControl(new BMap.OverviewMapControl());
map.addControl(new BMap.MapTypeControl());
map.setCurrentCity("杭州");



function setsContent(name,score,review,price,imgname){
    return "<div class=\"ui-info\"> \
              <div class=\"container-fluid\"> \
                  <div class=\"fir-row\"> \
                      <div class=\"ui-img\"><img src=\"img/"+imgname+"\" id=\"img\"></div> \
                  </div> \
                  <div class=\"sec-row\"> \
                      <div class=\"col-sm-8\"> \
                          <div class=\"ui-info-left\"> \
                              <div class=\"ui-info-name\">" + name+ "</div> \
                              <div class=\"ui-info-star\">\
                                <i class=\"fa fa-star\"></i>\
                                <i class=\"fa fa-star\"></i>\
                                <i class=\"fa fa-star\"></i>\
                              </div>\
                              <span class=\"ui-info-score\">" + score + "</span> \
                              <span class=\"ui-info-review\">" + review + "</span> \
                          </div> \
                      </div> \
                      <div class=\"col-sm-4\"> \
                          <div class=\"ui-info-right\"> \
                        \
                              <div class=\"ui-info-more\">查看详情</div> \
                          </div> \
                      </div> \
                  </div> \
              </div> \
            </div>";
}
var data_info =[
            [120.01232, 30.296261,"杭州师范大学篮球场","x.x/5分","xxx条点评","￥xxx起","1.jpg"],
            [120.014314, 30.295139,"体育场","x.x/5分","xxx条点评","￥xxx起","2.jpg"],
            [120.016794, 30.293564,"博文印象","x.x/5分","xxx条点评","￥xxx起","3.jpg"],
            [120.01625, 30.294784,"博文苑3号楼","x.x/5分","xxx条点评","￥xxx起","4.jpg"],
            [120.015181, 30.29639,"博文苑8号楼","x.x/5分","xxx条点评","￥xxx起","5.jpg"],
            [120.015756, 30.296514,"博文苑9号楼","x.x/5分","xxx条点评","￥xxx起","6.jpg"],
            [120.016214, 30.296635,"学生事务服务中心","x.x/5分","xxx条点评","￥xxx起","7.jpg"],
            [120.016803, 30.296253,"菜鸟驿站","x.x/5分","xxx条点评","￥xxx起","8.jpg"],
            [120.016987, 30.295376,"超市","x.x/5分","xxx条点评","￥xxx起","9.jpg"],
            [120.01683, 30.295497,"帮帮数码","x.x/5分","xxx条点评","￥xxx起","10.jpg"],
            [120.019138, 30.296401,"一鸣奶吧","x.x/5分","xxx条点评","￥xxx起","11.jpg"],
            [120.017723, 30.29667,"恕园19号楼","x.x/5分","xxx条点评","￥xxx起","10.jpg"],
            [120.017494, 30.296889,"恕园24号楼","x.x/5分","xxx条点评","￥xxx起","9.jpg"],
            [120.018168, 30.296417,"外国语学院","x.x/5分","xxx条点评","￥xxx起","8.jpg"],
            [120.019336, 30.29669,"恕园14号楼","x.x/5分","xxx条点评","￥xxx起","7.jpg"],
            [120.019816, 30.296398,"恕园11号楼","x.x/5分","xxx条点评","￥xxx起","6.jpg"],
            [120.019825, 30.296791,"恕园12号楼","x.x/5分","xxx条点评","￥xxx起","5.jpg"],
            [120.020441, 30.296955,"恕园10号楼","x.x/5分","xxx条点评","￥xxx起","4.jpg"],
            [120.020418, 30.295715,"恕园2号楼","x.x/5分","xxx条点评","￥xxx起","3.jpg"],
            [120.022197, 30.298725,"图书馆","x.x/5分","xxx条点评","￥xxx起","2.jpg"],
            [120.018316, 30.29745,"公共艺术教育部","x.x/5分","xxx条点评","￥xxx起","5.jpg"],
            [120.020032, 30.294846,"阿里巴巴商学院","x.x/5分","xxx条点评","￥xxx起","9.jpg"]
                   ];
    for(var i=0;i<data_info.length;i++)
    {
      var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]));
      map.addOverlay(marker);
      marker.addEventListener("click", function(){
                var infoWindow;
                for(var i=0;i<data_info.length;i++){
                    if(this.getPosition().equals(new BMap.Point(data_info[i][0],data_info[i][1])))
                    {
                        infoWindow= new BMap.InfoWindow(setsContent(data_info[i][2],data_info[i][3],data_info[i][4],data_info[i][5],data_info[i][6]));
                        break;
                    }
                }
         this.openInfoWindow(infoWindow);
         document.getElementById('img').onload = function (){
         infoWindow.redraw();  
      }
         });
    };
  