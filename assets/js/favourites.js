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

        let storageValue = getStoredResults();

        let removePlace = storageValue.filter(function (storedElement) {
            return storedElement.name = element.name;
        })

        if (removePlace) {
            // localStorage.storedElement.clear();
            storageValue.clear(element);
        }



        // console.log(element);

        // let removePlace = storageValue.filter(function (storedElement) {
        //     return storedElement.name === element.name;
        // })

        // if (removePlace) {
        //     return
        // }
    })




})



// clear button within function to remove card and remove from local storage
// filter function for local storage favourites.filter()
// clear all local.storage.clear()


// document ready all files 