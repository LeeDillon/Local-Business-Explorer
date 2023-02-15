let favourites = getStoredResults();

favourites.forEach(function (element) {

    let cardName = element.name;
    let cardAddress = element.address.formatted_address;
    let cardCategory = element.category;

    let li = $("<li>");

    $('#favouritesContainer').append(li);

    let card = $("<div>")
    card.addClass("card mb-3");
    li.append(card);

    let button = $('<button>');
    button.attr('type', 'button');
    button.addClass('favouritedIcon card-header');
    card.append(button);

    let i = $('<i>');
    i.addClass('fas fa-heart');
    button.append(i);

    card.append(` 
    <div class="card-body">
<h5 class="card-title">${cardName}</h5>
<p class="card-text">Address: ${cardAddress}</p>
<p class="card-category">Category: ${cardCategory}</p>
</div>
`);

})



// clear button within function to remove card and remove from local storage
// filter function for local storage favourites.filter()
// clear all local.storage.clear()


// document ready all files 