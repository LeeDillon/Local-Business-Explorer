let favourites = getStoredResults();

console.log(favourites);

favourites.forEach(function (element) {

    let cardName = element.name;
    let cardAddress = element.address.formatted_address;
    let cardCategory = element.category;

    let li = $("<li>");

    $('#favouritesContainer').append(li);

    let card = $("<div>")
    card.addClass("card mb-3");
    li.append(card);

    let removeButton = $('<button>');
    removeButton.attr('type', 'button');
    removeButton.addClass('favouritedIcon card-header');
    card.append(removeButton);

    let i = $('<i>');
    i.addClass('fas fa-heart');
    removeButton.append(i);

    card.append(` 
    <div class="card-body">
<h5 class="card-title">${cardName}</h5>
<p class="card-text">Address: ${cardAddress}</p>
<p class="card-category">Category: ${cardCategory}</p>
</div>
`);

    removeButton.on('click', function () {

        // localStorage.removeItem(element);

        let storageValue = getStoredResults();

        let removePlace = storageValue.filter(function (storedElement) {
            console.log(storedElement.name)
            console.log(element.name)
            return storedElement.name !== element.name;
        })

        if (removePlace) {

            localStorage.setItem('favouritePlaces', JSON.stringify(removePlace));

            li.remove();
        }

    })
})


$('#clearAll').on('click', function () {

    $('#favouritesContainer').remove();

    localStorage.clear();

})


// induvidual clear buttons
// filter function for local storage favourites.filter()
// clear all local.storage.clear()


// document ready all files 