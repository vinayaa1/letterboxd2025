# letterboxd2025
## a personal film ranking page inspired by letterboxd. displays my top watched movies with poster art, star ratings, and reviews.
files

###index.html — page structure
###style.css — all styling
###script.js — movie data and interactivity

##how to use
open index.html in a browser. click any poster to read the review.
##how to edit
all movie data lives in the movies array at the top of script.js. each film has the following fields:

###rank ~ position in the list
###title ~ film name
###year ~ release year
###director ~ director's name
###rating ~ score out of 5, supports half stars (e.g. 4.5)
###posterUrl ~ direct image url to the poster, leave as "" for a placeholder
###description ~ your personal review
###tags ~ array of genre or mood labels

###to add more films, copy an existing object in the array and update the fields. the grid will expand automatically.
poster urls
###go to imdb, find the film, right-click the poster image and copy the image address. paste it into the posterUrl field.
