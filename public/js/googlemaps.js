function initMap() {
   // Create a center marker for UCSD
   //var ucsd_ltlng = {lat:32.880, lng:-117.236};
   var cicc_building = {lat:32.885033, lng:-117.241327};

   // Create a map object and specify the DOM element for display
   var map = new google.maps.Map(document.getElementById('map'), {
      //center: ucsd_ltlng,
      center: cicc_building,
      zoom: 18
   });

   var marker = new google.maps.Marker({
      //position: ucsd_ltlng,
      position: cicc_building,
      map: map,
      title: 'UCSD'
   });
}
