(function(window) {
  'use strict';
  var App = windows.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;

  var myTruck = new Truck('ncc-1701', new DataStore());
  window.myTruck = myTruck;
})(window);
