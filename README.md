# Restaurants-Near-Me
When you or you partner have no idea what to eat- this project let's you roll the dice on your local feasts!

## Project Design
The project has been designed to generate infromation from two API's- a restaurant API, *Documenu API Documentation*  and a recipie API, *The Meal DB*.  On the first page of the website the user chooses between two options **Staying In** or **Going Out**.  When the user chooses the **Going Out** function they will be required to enter their zipcode into the designated search bar.  The webstie then 'fetches' the information for a randomized local restaurant based on the zipcode entry.  The user is then presenter with the 'fetched' information which includes:  
- restaurant name
- address
- menu items- located in the modal, including: the menu item name, list of ingridients and the menu item price.  

Directions to the local restaurant will be sourced to the user's default map application.

If the user chooses **Going** the website will take them to a 'comment/rating' page.  This page will allow the user to write comments and rate their visit using a 5-star rating system.  This information can be saved to local storage and accessed for reference or edits at the users will.  If the user chooses **Not Going** the website will generate an alternate retaurant based on the initial zipcode entry.

When the user chooses the **Staying In** option the website will 'fetch' the called information from the recipes API.  The API will pull:
- recipe name
- picture of the recipe
- recipe instructions

The user has the option to save the recipe as well as any comments to local storage for future use.  There is a **Get New Recipie** button avaialble on the page that will generate an alternate recipe if it is clicked.

The website utilizes a navigation bar to help the user maneuver from the HOME page to the saved COMMENTS for their dining/cooking experience.

## Functionality

Home Screen
![](\assets\Images.PNG\projectshot1.PNG)

**Going Out** button generates the search bar for the users zipcode
![](\assets\Images.PNG\ProGoingOut.PNG)

Search Results
![](\assets\Images\ProjSearched.PNG)

Link for Directions to randomized restaurant
![](\assets\Images\ProjMap.PNG)

Restuarant Menu
![](assets\Images\ProjMenu.PNG)

**Staying In** button generates a **Look for Recipe** button to pull a randomized recipe
![](\assets\Images\ProjStayingIn.PNG)

The buttons on the Recipe page will allow the user to save the recipe, read the recipe instructions or generate a new recipe 
![](\assets\Images\ProjRecipe.PNG)

The comment section in the navigation bar allows the user to toggle between the comments on the Restaurant page and the Recipe page
![](assets\Images\ProjComments.PNG)




## Deployed Application

* The URL of the functional, [deployed](https://scashmore.github.io/Restaurants-Near-Me/) application.

* The URL of the GitHub [repository](https://github.com/scashmore/Restaurants-Near-Me)
