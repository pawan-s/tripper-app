// Initialize app
var myApp = new Framework7();

var mySwiper3 = myApp.swiper('.swiper-3', {
  pagination:'.swiper-3 .swiper-pagination',
  spaceBetween: 10,
  slidesPerView: 3.5
});
 
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
 
// Add view
var mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: true
});
var view1 = myApp.addView('#view-1');
var view2 = myApp.addView('#view-2');
var view3 = myApp.addView('#view-3');
var personalise = myApp.addView('#personalise', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: true
});


// Onboarding Page
  var mySwiper = myApp.swiper('.swiper-container', {
    pagination:'.swiper-pagination'
  });

//Notification popup
$$('.confirm-ok-cancel').on('click', function () {
    myApp.modal({
    title:  'Allow “Tripper” to access your location while you use the app',
    buttons: [
      {
        text: "Don't Allow",
      },

      {
        text: 'Allow',
      },
    ]
  })
}); 

$$('.open-3-modal').on('click', function () {
    myApp.modal({
    title:  '“Tripper” Would Like to Send You Notifications',
    text: 'Notifications may include alerts, sounds and icon badges. These can be configured in Settings.',
    buttons: [
      {
        text: "Don't Allow",
      },

      {
        text: 'Allow',
      },
    ]
  })
});


// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
  // Do something here for "about" page
  
})
 
// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
  // Get page data from event data
  var page = e.detail.page;
  
  if (page.name === 'about') {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
  }
})
 
// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
  // Following code will be executed for page with data-page attribute equal to "about"
  myApp.alert('Here comes About page');
})