require("dotenv").config();
var axios = require("axios");

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

// to access your keys information
var spotify = new Spotify(keys.spotify);

var website = process.argv[2];
var searchName = process.argv.slice(3).join(" ");

// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)


if (website === "concert-this")
{
	// Then run a request with axios to the OMDB API with the movie specified
	axios.get("https://rest.bandsintown.com/artists/" + searchName + "/events?app_id=codingbootcamp").then(
	  function(response) {
	    console.log("Data", response.data);
	    console.log("Name of the venue:", response.data[0].venue.name);
	    console.log("Venue Location: ", response.data[0].venue.city, " ", response.data[0].venue.region, " ",response.data[0].venue.country);
	    console.log("Date of event: ", response.data[0].datetime);

	  })
	  .catch(function(error) {
	    if (error.response) {
	      // The request was made and the server responded with a status code
	      // that falls out of the range of 2xx
	      console.log("---------------Data---------------");
	      console.log(error.response.data);
	      console.log("---------------Status---------------");
	      console.log(error.response.status);
	      console.log("---------------Status---------------");
	      console.log(error.response.headers);
	    } else if (error.request) {
	      // The request was made but no response was received
	      // `error.request` is an object that comes back with details pertaining to the error that occurred.
	      console.log(error.request);
	    } else {
	      // Something happened in setting up the request that triggered an Error
	      console.log("Error", error.message);
	    }
	    console.log(error.config);
	  });
 }

 if (website === "spotify-this-song")
 {

 	if (searchName === undefined)
 	{
 		searchName = "Ace of Base The Sign"
 	}
 
	 	spotify.search({ type: 'track', query: searchName }, function(err, data) {
	  if (err) {
	    return console.log('Error occurred: ' + err);
	  }
	 
		console.log("Artist name: ", data.tracks.items[0].artists[0].name); 
		console.log("Song name: ", data.tracks.items[0].name); 
		console.log("Preview link: ", data.tracks.items[0].album.external_urls.spotify); 
		console.log("Album: ", data.tracks.items[0].album.name);
		


	});
 }
