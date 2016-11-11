// Initialize your app

var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add views
// var mainView = myApp.addView('.searchView', {
//   // Because we want to use dynamic navbar, we need to enable it for this view:
//   dynamicNavbar: true
// })

var view1 = myApp.addView('#view-1');
var view2 = myApp.addView('#view-2', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var view3 = myApp.addView('#view-3');
var view4 = myApp.addView('#view-4');
var view5 = myApp.addView('#view-5');

// var filter = myApp.addView('#filter', {
// 	dynamicNavbar: true
// });

// var filter = myApp.addView('filter', {
//     // Because we use fixed-through navbar we can enable dynamic navbar
//     dynamicNavbar: true
// });
// var view6 = myApp.addView('#view-6', {
//     // Because we use fixed-through navbar we can enable dynamic navbar
//     dynamicNavbar: true
// });

// $$('#link-filter').on('click', function (e) {
    
//     view2.router.loadPage('filter.html');
// });

// myApp.onPageInit('about', function (page) {
//   // Do something here for "about" page
// })
