  
let map;

let restaurantLocation = [{
    coords: {
        lat:51.503000,
        lng: -0.084110
    },
    content: `<h4 class="place-name">Aqua Shard</h4>
    <h6 class="place-address">Level 31, The Shard, London SE1 9RY</h6>
    <div class="place-info">
    <ul>
    <li>Opening Hours: 12–11pm</li>
    <li>Menu: <a target="blank" href="https://aquashard.co.uk/menu"></span>Food</a></li>
    <li>Contact Number: 020 3011 1256</li>
    <li>Cuisine: Modern British</li>
    </ul>
    </div>`
},
{ coords: {
        lat:51.513950,
        lng: -0.131550
    },
    content: `<h4 class="place-name">Chotto Matte</h4>
    <h6 class="place-address">11 - 13 Frith St, Soho, London W1D 4RB</h6>
    <div class="place-info">
    <ul>
    <li>Opening Hours: 12–11pm</li>
    <li>Menu: <a target="blank" href="https://chotto-matte.com/soho/menu/"></span>Food</a></li>
    <li>Contact Number: 020 7042 7171</li>
    <li>Cuisine: Japanese</li>
    </ul>
    </div>`
},
{ coords: {
        lat:51.512058,
        lng: -0.120480
    },
    content: `<h4 class="place-name">Christopher's</h4>
    <h6 class="place-address">118 Wellington St, Covent Garden, London WC2E 7DD</h6>
    <div class="place-info">
    <ul>
    <li>Opening Hours: 11am–10pm</li>
    <li>Menu: <a target="blank" href="http://www.christophersgrill.com/menus/"></span>Food</a></li>
    <li>Contact Number: 020 7240 4222</li>
    <li>Cuisine: American</li>
    </ul>
    </div>`
},
{ coords: {
        lat:51.515140,
        lng: -0.146670
    },
    content: `<h4 class="place-name">Beast</h4>
    <h6 class="place-address">3 Chapel Pl, Marylebone, London W1G 0BG</h6>
    <div class="place-info">
    <ul>
    <li>Opening Hours: 12pm–11pm</li>
    <li>Menu: <a target="blank" href="https://www.beastrestaurant.com/london/about-beast-london/menus/"></span>Food</a></li>
    <li>Contact Number: 020 7495 1816</li>
    <li>Cuisine: Norwegian</li>
    </ul>
    </div>`
},
{ coords: {
        lat:51.510979,
        lng: -0.139100
    },
    content: `<h4 class="place-name">Sabor</h4>
    <h6 class="place-address">35-37 Heddon St, Mayfair, London W1B 4BR</h6>
    <div class="place-info">
    <ul>
    <li>Opening Hours: 12pm–11pm</li>
    <li>Menu: <a target="blank" href="https://www.saborrestaurants.co.uk/restaurant"></span>Food</a></li>
    <li>Contact Number: 020 3319 8130</li>
    <li>Cuisine: Spanish</li>
    </ul>
    </div>`
},

];

let barLocations = [{
    

}]


// Generate map

function initMap(selectedLocations) {
    let myLatlng = {
        lat: 51.5074,
        lng: -0.1278
    };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: myLatlng,
        disableDefaultUI: true,
    });

    // Change zoom level on smaller screen sizes

    if (window.screen.width < 768) {
        let myLatlng = {
            lat: 51.5074,
            lng: -0.1278
        };

        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 12,
            center: myLatlng,
            disableDefaultUI: true,
        });
    }

    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // array of locations and place markers 

    if (selectedLocations) {
        for (let i = 0; i < selectedLocations.length; i++) {
            let marker = new google.maps.Marker({
                position: selectedLocations[i].coords,
                map: map,
                animation: google.maps.Animation.DROP,
            });

            // Info window

            const infowindow = new google.maps.InfoWindow({
                content: selectedLocations[i].content,
            });

            // Close info window 

            google.maps.event.addListener(marker, 'click', function () {
                if (currentInfoWindow != null) {
                    currentInfoWindow.close();
                }

                infowindow.open(map, marker);
                currentInfoWindow = infowindow;
            });

            var currentInfoWindow = null;
        }
    }
}

document.getElementById("restaurants").addEventListener("click", () => {
    initMap(restaurantLocation);
    
});

document.getElementById("bars").addEventListener("click", () => {
    initMap(barLocation);
});


