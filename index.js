'use strict';

//This function accepts the parameters(an object) and converts them into a string.  
function formatQueryParams(params){

}

//This line is going to take the input recieved from getParks and add the neccesary sections to the html file. 
//Then dispaly those results.
function displayResults(responseJson,maxResults){

}


//This function is going to accept input paramaters from a user and turn it into a searchable url. 
//It then fetches the url based off the input params. it calls the function display results. 
function getParks(query, MaxResults = 10){
    const params = 
}

// fetch(url,options)


// /This function watches the submit button and then when a user clicks it runs the getParks function. 
function handlesubmit(){
  $('#planning-form').submit(event =>{
    event.preventDefault();
    const searchTerm = $('.search-state').val();
    const MaxResults = $('.search-number').val();
    getParks(searchTerm,MaxResults);    
  })

}

$(handlesubmit());