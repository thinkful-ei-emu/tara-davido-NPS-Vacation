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
  queryItems.push(`limit=${MaxResults}`);
  queryItems.push(`api_key=${apiKey}`);
  return stateCodeArray.join('&');   


//parks?stateCode=tx&stateCode=md&stateCode=&
}

//This line is going to take the input recieved from getParks and add the neccesary sections to the html file. 
//Then dispaly those results.
function displayResults(responseJson,maxResults){
  $('#results-list').empty();
  responseJson.data.forEach(park => {
    $('#results-list').append(
      `<li>
        <h3><a href="${park.url}>${park.fullName}</a></h3>
        <p>${park.description}</p>
      </li>`
    )
  });
  $('#results').removeClass('hidden');
}
//search through an object with an array of objects, each object representing a new park
//loop through responseJson.data(park => )
//display park.description, park.fullName, park.url



//This function is going to accept input paramaters from a user and turn it into a searchable url. 
//It then fetches the url based off the input params. it calls the function display results. 
function getParks(query, MaxResults = 10){
  const params = {
    apiKey,
    stateCode: query,
    MaxResults
  }
  /*
  {
    apiKey,
    stateCode: "tx az md"
  }
  */

  const queryString = formatQueryParams(params);
  const url = baseURL + queryString;

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(error => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

// /This function watches the submit button and then when a user clicks it runs the getParks function. 
function handleSubmit(){
  $('form').submit(event =>{
    event.preventDefault();
    console.log("Just got a submit!");
    const searchTerm = $('.search-state').val();
    const MaxResults = $('.search-number').val();
    getParks(searchTerm,MaxResults);    
  })

}

$(handleSubmit());