  
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

let barLocation = [{
    coords: {
        lat:51.518929,
        lng: -0.102710
    },
    content: `<h4 class="place-name">Oriole Bar</h4>
    <h6 class="place-address">E Poultry Ave, Farringdon, London EC1A 9LH</h6>
    <div class="place-info">
    <ul>
    <li>Opening Hours: 12–11pm</li>
    <li>Menu: <a target="blank" https://www.oriolebar.com/cocktails"></span>Drinks Menu</a></li>
    <li>Contact Number: 020 3457 8099</li>
    </ul>
    </div>`
},
{ coords: {
        lat:51.510471,
        lng: -0.120920
    },
    content: `<h4 class="place-name">Beaufort Bar</h4>
    <h6 class="place-address">1 Strand, London WC2R 0EZ</h6>
    <div class="place-info">
    <ul>
    <li>Opening Hours: 12–11pm</li>
    <li>Menu: <a target="blank" href="https://www.thesavoylondon.com/restaurant/beaufort-bar/"></span>Drinks Menu</a></li>
    <li>Contact Number: 020 7420 2111</li>
    </ul>
    </div>`
},
{ coords: {
        lat:51.524899,
        lng:-0.093010
    },
    content: `<h4 class="place-name">The Gibson</h4>
    <h6 class="place-address">44 Old St, London EC1V 9AQ</h6>
    <div class="place-info">
    <ul>
    <li>Opening Hours: 11am–10pm</li>
    <li>Menu: <a target="blank" href="http://www.thegibsonbar.london/pdf/menu.pdf"></span>Drinks Menu</a></li>
    <li>Contact Number: 020 7608 2774</li>
    </ul>
    </div>`
},
{ coords: {
        lat:51.507069,
        lng: -0.111630
    },
    content: `<h4 class="place-name">Lyaness</h4>
    <h6 class="place-address">20 Upper Ground, South Bank, London SE1 9PD</h6>
    <div class="place-info">
    <ul>
    <li>Opening Hours: 12pm–11pm</li>
    <li>Menu: <a target="blank" href="https://lyaness.com/menus/"></span>Drinks Menu</a></li>
    <li>Contact Number: 020 3747 1063</li>
    </ul>
    </div>`
},
{ coords: {
        lat:51.538342,
        lng: -0.099340
    },
    content: `<h4 class="place-name">HomeBoy Bar</h4>
    <h6 class="place-address">108 Essex Rd, Islington, London N1 8LX</h6>
    <div class="place-info">
    <ul>
    <li>Opening Hours: 12pm–11pm</li>
    <li>Menu: <a target="blank" href="https://homeboybar.com/menu-1"></span>Drinks Menu</a></li>
    <li>Contact Number: 020 3319 8130</li>
    <li>Cuisine: Spanish</li>
    </ul>
    </div>`
},

];


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

document.getElementById("cocktails").addEventListener("click", () => {
    initMap(barLocation);
});

document.getElementById("wineBars").addEventListener("click", () => {
    initMap(barLocation);
});


