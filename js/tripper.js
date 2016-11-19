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

//action sheet buttons
$$('.ac-1').on('click', function () {
    var buttons = [
        {
            text: 'Choose from library',
            bold: true
        },
        {
            text: 'Take photo'
        },
        {
            text: 'Cancel',
            color: 'red'
        },
    ];
    myApp.actions(buttons);
});

var pickerDevice = myApp.picker({
    input: '#picker-device',
    cols: [
        {
            textAlign: 'center',
            values: ['iPhone 4', 'iPhone 4S', 'iPhone 5', 'iPhone 5S', 'iPhone 6', 'iPhone 6 Plus', 'iPad 2', 'iPad Retina', 'iPad Air', 'iPad mini', 'iPad mini 2', 'iPad mini 3']
        }
    ]
});

 
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

