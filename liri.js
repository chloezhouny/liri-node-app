require("dotenv").config();
var axios = require("axios");

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var fs = require("fs");

// to access your keys information
var spotify = new Spotify(keys.spotify);

var website = process.argv[2];
var searchName = process.argv.slice(3).join(" ");

// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)


	
	function check()
	{

		console.log("in check")
		if (website === "concert-this")
		{
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



		 if (website === "movie-this")
		 {
			 	if (!searchName)
		 	{
		 		searchName = "Mr. Nobody";
		 	}


		 	axios.get("http://www.omdbapi.com/?t=" + searchName + "&y=&plot=short&apikey=trilogy").then(
			  	function(response) {
			    console.log("Title: ", response.data.Title);
			    console.log("Year: ", response.data.Year);
			    console.log("imbd Rating: ", response.data.imdbRating);
			    console.log("Rotten Tomatoes Rating: ", response.data.Ratings[1].Value);
			    console.log("Country produced: ", response.data.Country);
			    console.log("Language: ", response.data.Language);
			    console.log("Plot: ", response.data.Plot);
			     console.log("Actors: ", response.data.Actors);
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
		 	console.log("In spotify");
			if (!searchName)
		 	{
		 		searchName = "Ace of Base The Sign";
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
	
}



	 if (website === "do-what-it-says")
	 {
	 	 fs.readFile("random.txt", "utf8", function(error, data) {

	        // If the code experiences any errors it will log the error to the console.
	        if (error) {
	          return console.log(error);
	        }

	        var dataArr = [];       
	        dataArr = data.split(",");
	        console.log(dataArr);
	        website = dataArr[0];
	        searchName = dataArr[1];   
	        check();

		}); 	

	 }
	 else
	 {
	 	check();
	 }
