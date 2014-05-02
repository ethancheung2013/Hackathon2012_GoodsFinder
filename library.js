/* requires jQuery */
/* created by Ethan Cheung, ethancheung2013@gmail.com, July 26, 2012 */

/* define the app object */
var app = {
	model: {
		map: null,	/* reference the Google map */
		markerBounds: null,   /* bounderies of visible markers*/
		markerCacheList: [],	
		user: {
			name: "Tony Wu",
			contact: "tonycwu@yahoo.com"
		},
		searchResults: [],

		items:[
		{
        "name": "Mr. Clean 441382, Deluxe Corn Broom",
        "desc": "",
        "gps": {
            "lat": 34.030469,
            "lng": -118.335457
        },
        "category": "Home, Garden & Tools",
        "sellerName": "Walmart",
        "contact": "",
        "price": 15.23,
        "isVendor": true,
        "picture": "images/items/mrclean.jpg"
    },
    {
        "name": "Libman Precision Angle Broom with Dustpan",
        "desc": "",
        "gps": {
            "lat": 34.030469,
            "lng": -118.335457
        },
        "category": "Home, Garden & Tools",
        "sellerName": "Walmart",
        "contact": "",
        "price": 18.13,
        "isVendor": true,
        "picture": "images/items/libman.jpg"
    },
    {
        "name": "DVI Gear HDMI Cable 2M (6 Feet)",
        "desc": "",
        "gps": {
            "lat": 34.030469,
            "lng": -118.335457
        },
        "category": "Electronics & Computers",
        "sellerName": "Walmart",
        "contact": "",
        "price": 1.62,
        "isVendor": true,
        "picture": "images/items/dvi_hdmi.jpg"
    },
    {
        "name": "BlueRigger High Speed HDMI Cable with Ethernet 6.6 Feet (2m)",
        "desc": "",
        "gps": {
            "lat": 34.030469,
            "lng": -118.335457
        },
        "category": "Electronics & Computers",
        "sellerName": "Walmart",
        "contact": "",
        "price": 4.55,
        "isVendor": true,
        "picture": "images/items/blue_rigger_hdmi.jpg"
    },
    {
        "name": "Monster Cable Ultimate High Speed Hdmi 1000 HDX 4ft - THX Certified",
        "desc": "",
        "gps": {
            "lat": 34.030469,
            "lng": -118.335457
        },
        "category": "Electronics & Computers",
        "sellerName": "Walmart",
        "contact": "",
        "price": 29.95,
        "isVendor": true,
        "picture": "images/items/monster_hdmi.jpg"
    },
    {
        "name": "Monster Cable THX 1000 HDX-8 Ultimate High Speed Hdmi - THX Certified (8 feet)",
        "desc": "",
        "gps": {
            "lat": 34.030469,
            "lng": -118.335457
        },
        "category": "Electronics & Computers",
        "sellerName": "Walmart",
        "contact": "",
        "price": 39.95,
        "isVendor": true,
        "picture": "images/items/monster_hdmi8.jpg"
    },
    {
        "name": "Home Basix 2026 Household Angle Broom",
        "desc": "",
        "gps": {
            "lat": 34.030469,
            "lng": -118.335457
        },
        "category": "Electronics & Computers",
        "sellerName": "Walmart",
        "contact": "",
        "price": 12.99,
        "isVendor": true,
        "picture": "images/items/home_basix.jpg"
    },
    {
        "name": "BISSELL Smart Details Polished Floor Broom",
        "desc": "",
        "gps": {
            "lat": 34.030469,
            "lng": -118.335457
        },
        "category": "Electronics & Computers",
        "sellerName": "Walmart",
        "contact": "",
        "price": 23.39,
        "isVendor": true,
        "picture": "images/items/bissel.jpg"
    },
    {
        "name": "Monster Cable THX 1000 HDX-8 Ultimate High Speed Hdmi - THX Certified (8 feet)",
        "desc": "",
        "gps": {
            "lat": 40.030469,
            "lng": -119.335457
        },
        "category": "Electronics & Computers",
        "sellerName": "Best Buy",
        "contact": "",
        "price": 38.21,
        "isVendor": true,
        "picture": "images/items/monster_hdmi8.jpg"
    },
    {
        "name": "Monster Cable Ultimate High Speed Hdmi 1000 HDX 4ft - THX Certified",
        "desc": "",
        "gps": {
            "lat": 40.030469,
            "lng": -119.335457
        },
        "category": "Electronics & Computers",
        "sellerName": "Best Buy",
        "contact": "",
        "price": 35.01,
        "isVendor": true,
        "picture": "images/items/monster_hdmi.jpg"
    },
    {
        "name": "Mr. Clean 441382, Deluxe Corn Broom",
        "desc": "",
        "gps": {
            "lat": 33.030469,
            "lng": -117.535457
        },
        "category": "Home, Garden & Tools",
        "sellerName": "CVS",
        "contact": "",
        "price": 13.52,
        "isVendor": true,
        "picture": "images/items/mrclean.jpg"
    },
    {
        "name": "Libman Precision Angle Broom with Dustpan",
        "desc": "",
        "gps": {
            "lat": 33.030469,
            "lng": -117.535457
        },
        "category": "Home, Garden & Tools",
        "sellerName": "CVS",
        "contact": "",
        "price": 21.32,
        "isVendor": true,
        "picture": "images/items/libman.jpg"
    },
    {
        "name": "Ferrite Cores HDMI Cable",
        "desc": "",
        "gps": {
            "lat": 40.030469,
            "lng": -119.335457
        },
        "category": "Electronics & Computers",
        "sellerName": "Best Buy",
        "contact": "",
        "price": 4.95,
        "isVendor": true,
        "picture": "images/items/ferrite.jpg"
    },
    {
        "name": "Used Lost Mayhem Subdriver 5'11 Surfboard",
        "desc": "The model was developed by Kolohe Andino asking Matt to make something that was between a Driver and a Sub Scorcher and the result is a board that has been ridden from knee high Southern California through to fun sized Indo.  The Sub Driver has more nose rocker and less tail rocker (with no vee) than the sub scorcher and is a great all round small to mid sized wave board",
        "gps": {
            "lat": 33.99422,
            "lng": -118.441973
        },
        "category": "Sports & Outdoors",
        "sellerName": "Rider Shack",
        "contact": "",
        "price": 625,
        "isVendor": true,
        "picture": "images/items/mayhem.jpg"
    },
    {
        "name": "Used Lost Mayhem Subdriver 5'11 Surfboard",
        "desc": "The model was developed by Kolohe Andino asking Matt to make something that was between a Driver and a Sub Scorcher and the result is a board that has been ridden from knee high Southern California through to fun sized Indo.  The Sub Driver has more nose rocker and less tail rocker (with no vee) than the sub scorcher and is a great all round small to mid sized wave board",
        "gps": {
            "lat": 35.321,
            "lng": -118.013
        },
        "category": "Sports & Outdoors",
        "sellerName": "The Surf Shop",
        "contact": "",
        "price": 600,
        "isVendor": true,
        "picture": "images/items/mayhem.jpg"
    },
    {
        "name": "Used Lost Mayhem Subdriver 5'11 Surfboard",
        "desc": "Used Lost Subdriver.  A couple repaired dings.  Some yellowing.  Good condition overall.",
        "gps": {
            "lat": 32.321,
            "lng": -117.013
        },
        "category": "Sports & Outdoors",
        "sellerName": "John Smith",
        "contact": "john.smith@email.com",
        "price": 250,
        "isVendor": false,
        "picture": "images/items/mayhem.jpg"
    },
    {
        "name": "Used Lost Mayhem Subdriver 5'11 Surfboard",
        "desc": "Used Lost Subdriver.  One professionally repaired ding, otherwise in great condition.",
        "gps": {
            "lat": 34.2331,
            "lng": -118.231
        },
        "category": "Sports & Outdoors",
        "sellerName": "Jane Doe",
        "contact": "jane.doe@email.com",
        "price": 300,
        "isVendor": false,
        "picture": "images/items/mayhem.jpg"
    }
]
	},
	
	/* ========================================================= */
	
	addItem: function(item) {
		
		item.id = app.model.items.length;
		
		app.model.items.push(item);
		
		app.addItemMarker(item);			
	},
	
	search: function(query) {
		
		//== remove all previous search results
		app.model.searchResults.length = 0;
		
		query.category = query.category.toLowerCase();
		query.searchText = query.searchText.toLowerCase();
		
		
		for(var i=0, count=app.model.items.length; i<count; i++) {
			
			var isMatch = true;
			
			var item = app.model.items[i];
			
			//== check name and desc
			if(query.searchText!='' && item.name.toLowerCase().indexOf(query.searchText)==-1 && item.desc.toLowerCase().indexOf(query.searchText)==-1) {
				isMatch = false;
			}
			
			//== check category
			if(isMatch && query.category!='' ) {
				if(query.category.toLowerCase() != item.category.toLowerCase()) {
					isMatch = false;
				}
			}
			
			if(isMatch) app.model.searchResults.push(item);
		
		}
		
		app.mapItems();
		
	},
	
	findMarker: function(position) {

		var marker = null;
		
		for (var i=0, count=app.model.searchResults.length; i<count; i++) {
			
			if(app.model.searchResults[i].marker) {			
				var latlng = app.model.searchResults[i].marker.getPosition();
				if(latlng.lat() == position.lat() && latlng.lng() == position.lng()) {
					marker = app.model.searchResults[i].marker;
					break;
				}
			}
		}
		
		return marker;		
	},
	
	getMarkerInfo: function(marker) {
		var html = '';
		
		var list = new Array();
		
		var position = marker.getPosition();
		
	//html += '<ul data-role="listview">';
		
	for (index in app.model.searchResults) {
		
		var item = app.model.searchResults[index];

		if(item.marker) {			
			var latlng = item.marker.getPosition();
			if(latlng.lat() == position.lat() && latlng.lng() == position.lng()) {	//== it's the same marker
	
				/* we want to generate a jQuery Mobile List view like below 
				<ul data-role="listview">
					<li><a href="index.html">
						<img src="images/album-bb.jpg" />
						<h3>Broken Bells</h3>
						<p>Broken Bells</p>
					</a></li>
					...
				</ul>		
				*/
				
				html += '<img src="' + item.picture + '" style="float:left;max-height:100px;height:auto;max-width:100px;"/>';
				html += '<a href="#itemdetail">';		
				html += '<b>$' + item.price + ' - ' + item.name + '</b>';
				html += '</a><p>';
				html += 'Seller: ' + item.sellerName + '<br/>';				
				html += item.desc + '</p>';
				//html += '</li>';
			}
		
		}
		//app.model.map.setCenter(latlng, 11);
	}
	
	//html + '</ul>';
					
		return html;

	},
	
	addItemMarker: function(item) {
		if(item.marker) {
				item.marker.setVisible(true);
			} else {
				//== check if another marker already at the EXACT position, if so, assume it's from the same seller

				var latlng = new google.maps.LatLng(item.gps.lat, item.gps.lng);
								
				var marker = app.findMarker(latlng);
				
				if(marker==null) {
					marker = new google.maps.Marker({
						position: latlng,
						map: app.model.map,
						title: item.name + ', ' + item.desc
					});
					
					google.maps.event.addListener(marker, "click", function() {
						 var html = '<p class="infoWindow">' + app.getMarkerInfo(this) + '</p>';
						 
						 var infowindow = new google.maps.InfoWindow(
						  { content: html,
							size: new google.maps.Size(150,50)
						  });
						  
						infowindow.open(app.model.map,this);
						
						$('p .infoWindow').trigger('create');

				   });
				}

				item.marker = marker;
				
				marker.setVisible(true);
			}
			
			app.model.markerBounds.extend(item.marker.getPosition());
			
	},
		
	mapItems: function() {
		
		app.model.markerCacheList.length = 0;
		
		//== hide all markers first
		for(index in app.model.items) {
			var item = app.model.items[index];
			if(item.marker) {
				item.marker.setVisible(false);	
			}
		}
		
		//== detect bounderies of all markers
		app.model.markerBounds = new google.maps.LatLngBounds();
		
		for (index in app.model.searchResults) {
			
			var item = app.model.searchResults[index];
			
			app.addItemMarker(item);
			
			//app.model.map.setCenter(latlng, 11);
		}

		//== zoom to the marker bounds so all markers are viewable on same screen
		app.model.map.fitBounds(app.model.markerBounds);
		
	}
}

$(document).ready(function(e) {
	initialize();
});

function initialize() {

    var center = new google.maps.LatLng(33,-118);

	var mapOptions = {
	  zoom: 4,
	  center: center,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	
	var googleMap = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
	app.model.map = googleMap;
	
	//== since we don't have database, let's generate some unique ids for items
	for (var i=0, count=app.model.items.length; i<count; i++) {
		var item = app.model.items[i];
		item.id = i;	//== use the index as the id
	}	
	
	setTimeout('doSearch()', 500);
	
/*
	for (index in app.model.items) {
		
		var item = app.model.items[index];
		
		var latlng = new google.maps.LatLng(item.gps.lat, item.gps.lng);
		
		var marker = new google.maps.Marker({
			position: latlng,
			map: map,
			title: item.name + ', ' + item.desc
		});
		
		map.setCenter(latlng, 11);

	}
*/
}

function doSearch() {
	var sText = $('#searchText').val();
	var sCategory = $('#searchCategory').val();
	
	var query = {
		searchText : sText ,
		category : sCategory 	
	};
	
	app.search(query);

}

function postNewItem() {
	
	var item = {
		"name": $('#itemname').val(),
        "desc": $('#itemdesc').val(),
        "gps": {
            "lat": 35.030469,
            "lng": -120.335457
        },
        "category": $('#itemcategory').val(),
        "sellerName": app.model.user.name,
        "contact": app.model.user.contact,
        "price": parseFloat($('#itemprice').val()),
        "isVendor": false
	};
	
	app.addItem(item);

}

function showListView() {

	var html = '';

	html += '<ul data-role="listview">';
		
	for (index in app.model.searchResults) {
		
		var item = app.model.searchResults[index];
		
		/* we want to generate a jQuery Mobile List view like below 
		<ul data-role="listview">
			<li><a href="index.html">
				<img src="images/album-bb.jpg" />
				<h3>Broken Bells</h3>
				<p>Broken Bells</p>
			</a></li>
			...
		</ul>		
		*/
		
		html += '<li><a href="#itemdetail">';		
		html += '<img src="' + item.picture + '"/>';
		html += '<h3>$' + item.price + ' - ' + item.name + '</h3>';
		html += '<p>';
		html += 'Seller: ' + item.sellerName + '<br/>';
		
		html += item.desc + '</p>';
		html += '</a></li>';
		
		//app.model.map.setCenter(latlng, 11);
	}
	
	html + '</ul>';
	
	$('#listContentDiv').html(html);
	$('#listContentDiv').trigger('create');		

}