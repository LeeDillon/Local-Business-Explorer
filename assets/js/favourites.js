let favourites = getStoredResults();
console.log('this works');
favourites.forEach(function (result) {
    console.log('this works');
    $('#favouritesContainer').append($('<p>').text(result.name))
})



// clear button within function to remove card and remove from local storage
// filter function for local storage favourites.filter()
// clear all local.storage.clear()


// document ready all files 