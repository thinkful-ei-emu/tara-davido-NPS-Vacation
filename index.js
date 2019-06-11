'use strict';

const apiKey = "w4rEa9hoE0tiEke8xpTEJuSFgWllr1087DLeUvRB";
const baseURL = "https://developer.nps.gov/api/v1/parks?"

//This function accepts the parameters(an object) and converts them into a string.  
function formatQueryParams(params){
  //end url => stateCode=tx&stateCode=md&stateCode=az&api_key=dfgdfg
  //params.stateCode => "tx md az"
  const stateCodeArray = params.stateCode.split(" ");
  //stateCodeArray => ['tx', 'md', 'az']
  const queryItems= [];
  stateCodeArray.forEach(state =>{
    queryItems.push(`stateCode=${state}`);
    //['stateCode=tx', 'stateCode=md', 'stateCode=az']
  });
  queryItems.push(`api_key=${apiKey}`);
  return stateCodeArray.join('&');   


//parks?stateCode=tx&stateCode=md&stateCode=&
}

//This line is going to take the input recieved from getParks and add the neccesary sections to the html file. 
//Then dispaly those results.
function displayResults(responseJson,maxResults){

}


//This function is going to accept input paramaters from a user and turn it into a searchable url. 
//It then fetches the url based off the input params. it calls the function display results. 
function getParks(query, MaxResults = 10){
  const params = {
    apiKey,
    stateCode: query,
  }

  const queryString = formatQueryParams(params);
  /*
  {
    apiKey,
    stateCode: "tx az md"
  }
  */
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