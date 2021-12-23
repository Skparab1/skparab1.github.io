# Skparab1's Github Website
**[This website can now be viewed at skparab1.github.io](https://skparab1.github.io)**

## Pages
- [Homepage](https://skparab1.github.io)
- Subpages
  - Redirect
    - my url shortener
  - r
    - a shorter link for my url shortener
  - [search](https://skparab1.github.io/search)
    - a search page for my software and website content
  - [traffic simulator](https://skparab1.github.io/traffic_simulator)
    - a web host for my traffic simulator
  - [login](https://skparab1.github.io/login)
    - a webpage for logging in to skparab1 services
    - can be used across skparab1 web applications
  - [home](https://skparab1.github.io/home)
    - homepage for skparab1 web applications
    - also a graphics based webpage

## Url packing string query framework for search
- search results are displayed, and are narrowed down by filters
- the data of the filters is packed into the url as a query
- and the page is refreshed
- for example, if the user filters no python, then the string '&py=false' will be packed into the url
- when the page loads, it will unpack the url and filter the results accordingly
- multiple parameters can also be packed for example '&js=false&md=false&pas=false'
  - the & is used to seperate packed parameters
- try it [here](https://skparab1.github.io/search)

< add demo gif here >
clean this up later

## oskeyboard
- framework for on screen keyboard
- uses p5js graphics library
- has light up effect for keys
- is sizable to whatever size you want
  - put third parameter as a coefficient, default is 1
- is movable
  - put x and y coordinates as first and second parameters to function
- i'll probably make a repo for this later
- it would be nice to make it a module idk though
- idk though i can't figure out how to make it a module
- adding soon to private redirect (only for mobile)
