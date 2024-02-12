function fetchDogData(endpoint, breed = '', subBreed = '') {
    let apiUrl = `https://dog.ceo/api/${endpoint}`;
    // This is the initial url??
    if (breed) {
      apiUrl += `/${breed}`;
    }
  
    if (subBreed) {
      apiUrl += `/${subBreed}`;
    }
    // These are the api URL
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
    // Fetch function is to make network request. it returns completion or failure
        
        console.log(`Data from ${apiUrl}:`, data);
        console.log(`Data type: ${typeof data}`);
      })
      .catch(error => {
        console.error(`Error fetching data from ${apiUrl}:`, error.message);
      });
  }
  
  // Example usage
  fetchDogData('breeds/list'); 
    //   Array of texts (dog breeds)
  fetchDogData('breed/husky/images/random');
    //   Text (URL of an image) 
  fetchDogData('breed/hound/list'); 
    //   Array of texts (sub-breeds)
  fetchDogData('breed/hound/blood/images'); 
    //   Array of texts (URL of images)