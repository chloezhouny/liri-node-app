require("dotenv").config();
var axios = require("axios");

var keys = require("./keys.js");




var Spotify = require('node-spotify-api');

const chalk = require('chalk');

const chalkAnimation = require('chalk-animation');
var rainbow;
function createAnimation()
 {
    rainbow = 
    chalkAnimation.rainbow('        Here is what you need');
}


var fs = require("fs");

// to access your keys information
var spotify = new Spotify(keys.spotify);

var website = process.argv[2];
var searchName = process.argv.slice(3).join(" ");


// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)


	
	function check()
	{
		 var divider = "\nnunununununununununununununununununununununununununununununun\n\n";

		
		if (website === "concert-this")
		{
			axios.get("https://rest.bandsintown.com/artists/" + searchName + "/events?app_id=codingbootcamp").then(
			  function(response) {


			  	 var showData = [
			    chalk.cyan("         Name of the venue: ") + response.data[0].venue.name,
			    chalk.cyan("         Venue Location: ")  + response.data[0].venue.city + " " + response.data[0].venue.region +  " " + response.data[0].venue.country,
			    chalk.cyan("         Date of event: ") +  response.data[0].datetime
                ].join("\n\n");

	                 fs.appendFile("log.txt", showData + divider, function(err) {
	        		if (err) throw err;
	        		 console.log(showData);	
	        		 console.log(" ");  
	        		 console.log(" ");        
	     			 });
	     			 
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
			  		 var showData = [
			    chalk.magenta("         Title: ") + response.data.Title,
			    chalk.magenta("         Year: ") + response.data.Year,
			    chalk.magenta("         imbd Rating: ") + response.data.imdbRating,
			    chalk.magenta("         Rotten Tomatoes Rating: ") + response.data.Ratings[1].Value,
			    chalk.magenta("         Country produced: ") + response.data.Country,
			    chalk.magenta("         Language: ") + response.data.Language,
			    chalk.magenta("         Plot: ") + response.data.Plot,
			     chalk.magenta("        Actors: ") + response.data.Actors
			     ].join("\n\n");

			     fs.appendFile("log.txt", showData + divider, function(err) {
	        		if (err) throw err;
	        		 console.log(showData);	
	        		 console.log(" "); 
	        		 console.log(" ");           
	     			 });
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
		 	
			if (!searchName)
		 	{
		 		searchName = "Ace of Base The Sign";
		 	}
		 
			 spotify.search({ type: 'track', query: searchName }, function(err, data) {
			  if (err) {
			    return console.log('Error occurred: ' + err);
			  }
			 	 var showData = [
				chalk.green(`         Artist name:  `) + data.tracks.items[0].artists[0].name,
				chalk.green(`         Song name:  `) + data.tracks.items[0].name,
				chalk.green(`         Preview link: `) + data.tracks.items[0].album.external_urls.spotify,
				chalk.green(`         Album: `) + data.tracks.items[0].album.name].join("\n\n");
				 fs.appendFile("log.txt", showData + divider, function(err) {
	        		if (err) throw err;
	        		 console.log(showData);	
	        		 console.log(" ");
	        		 console.log(" ");        
	     			 });

			});
		 }
	
}


	setTimeout(() => {
	 if (website === "do-what-it-says")
	 {
	 	 fs.readFile("random.txt", "utf8", function(error, data) {

	        // If the code experiences any errors it will log the error to the console.
	        if (error) {
	          return console.log(error);
	        }
	        var dataArr = [];       
	        dataArr = data.split(",");
	        website = dataArr[0];
	        searchName = dataArr[1];   
	        check();

		}); 	

	 }
	 else
	 {
	 	check();
	 }

	}, 2000);



     console.log("                   ");
	 console.log("                   ");
	 createAnimation();
	   setTimeout(() => {
	 console.log(chalk.red(`                                                                                                
				      /\\        _/\\                                       
				     |  \\      /   |                                      
				     |   | __ /   |                                       
				     |    |  |   |                                        
				      |..------..|`)
				 
				,chalk.yellow(`
				    .-~ /\\    \\\\ ~-.                                      
				   / ~~~  ~~~~~ ~~~ \\`),
				chalk.white(`
				  |`),chalk.magenta(` *  |    | *  |`),chalk.white(`||                                    
				  |`),chalk.magenta(`--'/      \\ -'.'`),chalk.white(`|`),
				chalk.white(`
				   \\~    |_|   ~~~~~/                                     
				.--_~-.._      __.-~                                      
				\`-._~~~  ~~~~~~  |`)+chalk.yellow(`\\`),
				chalk.white(`                                     
				    ~~~~`)+ chalk.magenta(`|______|`)+chalk.white(` |`), chalk.yellow(`|                                      
				      / `)+ chalk.magenta(`|______|`)+chalk.white(` |`), chalk.yellow(` \\`));
				console.log("                                "+
				  chalk.yellow(`   \\-~ /`)+ chalk.magenta(`|      |`), chalk.white(`|`), chalk.yellow(`\\  ~-/`));
				console.log( "                                "+                                 
				  chalk.yellow(`    ~-._`)+ chalk.magenta(`|______\``)+ chalk.white(`-`)+ chalk.yellow(`'_.--~ `)); 
				console.log(  "                                "+                                
				  chalk.white(`        |  |   |`)+ chalk.yellow(`~~`));
				console.log(  "                                "+                                      
				  chalk.white(`        |__|___|`));
				console.log( "                                "+                                         
				  chalk.white(`        |_|| _||   Amw                                    
				        \`--'\`--'`));  
				console.log(`            `); 
				console.log(`            `); 
				console.log(`            `); 
				console.log(`            `);             
			}, 1000);	







