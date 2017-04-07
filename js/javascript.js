$(document).ready(function () { 
  var today = new Date();
  var dd = today.getDate();
    var options = { year: 'numeric', month: 'long'};
     var month_year = today.toLocaleDateString('en-GB', options);
   
function getOrdinal(n) {
   var s = ["th","st","nd","rd"],
       v = n%100;
   return n+(s[(v-20)%10]||s[v]||s[0]);
} 
    var date_string = getOrdinal(dd) + " of " + month_year;
    var date_element = document.getElementById("date_h");
    date_element.insertAdjacentHTML('beforeend', date_string );
    
   
 $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22prague%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function (json) {
   var forecast_string = json.query.results.channel.item.condition.text;
     var forecast_element = document.getElementById("forecast_h");
     forecast_element.insertAdjacentHTML('beforeend', forecast_string );
    });   
    
    var portHeight =  $( window ).height();
    var halfHeight = $(window).height()/2;
    
    jQuery(window).scroll(function() {
if($(window).scrollTop() > $(document).height()/5) {
    jQuery('#scroll-header').stop().animate({ top: '0px' });
} else {
    jQuery('#scroll-header').stop().animate({ top: '-100vw' });
}
});
    
 }); // document ready