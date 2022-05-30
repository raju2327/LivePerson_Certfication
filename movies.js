var updateCallback = function(data){
    var value = data.newValue;
    console.log("value : "+value);
    var line = value[value.length -1];
    console.log("line : "+line);
    var movieName = line.text;
	var key = "80a3537a";
    if (line.source.toLowerCase()==="visitor"){
    var url = "https://www.omdbapi.com?t="+movieName+"&apikey="+key;
    
    fetch(url)
    .then(function(response){
    
    return response.json();
    }
    ).then(function(res){
    document.getElementById("Title").innerHTML = res.Title;
    document.getElementById("Year").innerHTML = res.Year;
    document.getElementById("Genre").innerHTML = res.Genre;
    document.getElementById("Plot").innerHTML = res.Plot;
    document.getElementById("Director").innerHTML = res.Director;
    document.getElementById("Poster").innerHTML = res.Poster;
    
       
    }).catch(function(error){
    console.log("Error Message from OMDB API : "+error);
    })
    }
    };
    
    
    
    var notifyWhenDone = function(error) {
    if (err){
    console.log("Error Occured in notification : "+err);
    }
    
    errorMessage.innerHTML = "Unable to find the movie name you've entered...Please provide valid movie name";
    };
    
    var chatData = "chatData.lines";
    
    lpTag.agentSDK.init({});
    lpTag.agentSDK.bind(chatData, updateCallback, notifyWhenDone);

