// Initialize your app

var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

var view1 = myApp.addView('#view-1');
var view2 = myApp.addView('#view-2', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var view3 = myApp.addView('#view-3');
var view4 = myApp.addView('#view-4');
var view5 = myApp.addView('#view-5');
 
// javascript for createtrip.html -> to switch toolbar
function toggle_visibility(id1,id2) {
	var e = document.getElementById(id1);
	var e2 = document.getElementById(id2);
	if(e.style.display == 'block'){
		e.style.display = 'none';
		e2.style.display = 'block';
	}

	else {
		e.style.display = 'block';
		e2.style.display = 'none';
	}
}
