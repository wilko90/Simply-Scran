<h1 align="center">IFD Milestone Project - Simply Scrans</h1>

For full readme [click here](README.md)

# Table of Contents

1. [User Story Testing](#user-story)
2. [Features Testing ](#features-testing)
3. [Further Testing](#further-testing)
4. [Browser Testing](#browser-testing)
5. [Validation Testing](#validation-testing)
6. [Bugs](#bugs)



# User Story Testing <a name="user-story"></a>
# "As a visiting user I want to be able to understand the websites purpose so I can decide if i want to continue navigating"
Benchmark - A user must be able to understand the main purpose of the websites goals.

* On initial contact the user is welcomed by the logo that remains in its own container and is visable to the the user at all times.
* On inital contact the user is greeted with a short introduction and hero image which explains the websites purpose.
* on inital contact the user is greeted with a list of engagable features which will navigate the user through out the page.


Outcome: Successful 

<img src="static/img/testing-img/userstory-1.png">

# "As an invovled user I want the surface to be simple with an aesthetically pleasing design"
Benchmark - Website should be intuative and be consitent with colour throughout

* On inital contact the user is greeted with a heading that summarizes the websites purpose.
* Consitancy in colours throughout chosen by inital colour palette.
* All interactive features match with aesthetics and are descriptive of purpose.
* Surface is simple and easy to navigate.

Outcome: Successful 

<img src="static/img/testing-img/userstory-2-3.png"> 
<img src="static/img/testing-img/userstory-2-4.png">
<img src="static/img/testing-img/userstory-2-1.png"> 
<img src="static/img/testing-img/userstory-2-2.png"> 

# "As a connected user I want to be able to browse your favourite recipes and receive clear insturctions on how to cook them"
Benchmark - To easily navigate to a recipe and be presented with introductions and the method on how to cook.

* The user can navigate by simply scrolling through the sections to find there desired recipe. 
* The user can interact via the navigation and bar and be sent to there desired recipe.
* When the user has chosen there desired recipe they can initiate the recipe by interacting with the view recipe button.
* The user is presented with a descriptive yet intuative intructons on how to cook and what ingrediants they need.

Outcome: Successful 

<img src="static/img/testing-img/userstory-3-1.png"> 
<img src="static/img/testing-img/userstory-3-2.png"> 
<img src="static/img/testing-img/userstory-3-3.png">  

# "As a connected user I want to be able to communicate with the site admin in a easy User-friendly way"

Benchmark - To comfortably locate the contact form and input the relative data to be able to conntect to the site admin.

* The user can navigate by simply scrolling through the sections to find the contact section
* The user can interact via the navigation and bar and be sent to the contact section.
* The user is greeted with a short yet descriptive heading heading to inform the user that they are in the correct section to contact the admin.
* The contact form is engaged by a large interactive C2A adjacent to the contact heading
* The user is presented with a pop up form (modal) with five input fields and a large submit button.

Outcome: Successful

<img src="static/img/testing-img/userstory-4-1.png">
<img src="static/img/testing-img/userstory-4-4.png">
<img src="static/img/testing-img/userstory-4-2.png">
<img src="static/img/testing-img/userstory-4-3.png">



# "As a connected user I want to be able to find the best places to eat, drink in london and know information on that venue"

Benchmark - A user should be able to locate the top picks section, select one of three options, where a map will intiate markers that will have the relevant inforamtion on the venue.

* The user can navigate to the top picks section
* The user is presented with an informative header to lead the user in to engagement.
* Three clickable buttons that alow the user to engage with the map
* When user engages with desired buttons, the user will be prompted on the map via a marker giving them the location of five venues.
* Each marker placed on the map can be interacted with showing the user a descriptive info window about the selected venue.

Outcome: Successful

<img src="static/img/testing-img/userstory-5-4.png">
<img src="static/img/testing-img/userstory-5-1.png">
<img src="static/img/testing-img/userstory-5-2.png">
<img src="static/img/testing-img/userstory-5-3.png">


# As a mobile user I want to be able to have the same features as the dektop site so I can connect with recipes on the go

Benchmark - A user should be able to use all the features in any chosen viewport

* This website uses bootstraps functionality to be able to allow native compatability in any viewport
* The top picks section allows the user to select there favourite venues on a mobile device by targeting classes with media queries.
* The map zoom has been increased for medium to small devices.
* Modals have been targeted with media queries to allow recipe content to be responsive to all viewports.

Outcome: Successful

<img src="static/img/testing-img/userstory-6-1.png">
<img src="static/img/testing-img/userstory-6-2.png">


# Features Testing <a name="features-testing"></a>

### Fetching API 

* Once page has fully loaded open google Dev tools.
   * Navigate to the console.
   * In the search bar search google.
   * Select maps in the curley braces.
   * large list of entries will show that lead too subdirectories.
* Further testing in dev tools.
   * Navigate to the network Tab.
   * Refresh page, where the Dom and the load time will take place.
   * Under the name tab select the request name tag for google maps.
   * in the headers tab you will be present with a status code of 200.

### Navigation Bar
* On initial load ensure the navigation bar loads the full width of the screen with correct links and logo.
* Ensure each navigation link is active when pressed.
* Ensure each link when pressed sends user to correct section of the webpage.
* Ensure when logo is initated that the user is directed back to the home section.
* `Home`-`Menu`-`About Us`-`Top Picks`-`Contact`
* `Menu`-`About Us`-`Top Picks`-`Contact`-`Home`
* `About Us`-`Top Picks`-`Conacts`-`Home`-`Menu`
* `Top Picks`-`Contacts`-`Home`-`Menu`- `About Us`
* `Contacts`-`Home`-`Menu`- `About Us`- `Top Picks`
* Ensure when manually scrolling that the navigation bar remains at the head of the page at all times.


# Further Testing <a name="further-testing"></a>



# Browser Testing <a name="browser-testing"></a>

 



# Validation Testing <a name="validation-testing"></a>



# Bugs <a name="bugs"></a>

