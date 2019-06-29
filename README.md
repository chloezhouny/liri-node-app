# liri-node-app

This project makes LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.
LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

<br>

## Demo 

![](demo.gif)

<br>

## Installation
```
$ npm init -y
$ npm install axios
$ npm install node-spotify-api
$ npm install chalk
$ npm install chalk-animation
```

<br>
<br>

## Usage
liri.js can take in one of the following commands:


1. ```node liri.js concert-this <artist/band name here>```

    This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal
    * Name of the venue
    * Venue location
    * Date of the Event (use moment to format this as "MM/DD/YYYY")

2. ```node liri.js spotify-this-song '<song name here>'```

    This will show the following information about the song in your terminal/bash window
    * Artist(s)
    * The song's name
    * A preview link of the song from Spotify
    * The album that the song is from

3. ```node liri.js movie-this '<movie name here>'```

    This will output the following information to your terminal/bash window
    * Title of the movie.
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Rotten Tomatoes Rating of the movie.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie.

4. ```node liri.js do-what-it-says```

    Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
    It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
    Edit the text in random.txt to test out the feature for movie-this and concert-this.


<br>

## Technology Used


* Command Line
* Node.js
* Axios NPM
* Spotify NPM
* Chalk NPM
* Chalk Animation NPM



<br>

## Author
Chloe Zhou