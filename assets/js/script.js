
function showResultsPage() {
    $("#jumbotron").hide();
    $("#results-page").show();
    $(".search-bar").show();
    $(".searchIcon").removeAttr("hidden");
}

$("#search-button").click(function () {
    showResultsPage()
});

function generateCards(resultsArray) {
    for (let i = 0; i < resultsArray.length; i++) {
        const element = resultsArray[i];
        // From each element in the array get the icon info and insert into card
        var cardName = element.name;
        var cardAddress = element.address.formatted_address;
        var cardCategory = element.category;
        // var cardIcon = element.icon;
        // daysToAdd++
        // Code to dynamically generate a forecast card and populate variables using template literals that use above variables
        $('#cardList').append(`
            <li>
                <div class="card mb-3">
                    <a class="card-header">
                        <i class="addFavouriteIcon far fa-heart"></i>
                    </a>
                        <div class="card-body">
                            <h5 class="card-title">${cardName}</h5>
                            <p class="card-text">Address: ${cardAddress}
                            </p>
                            <p class="card-category">Category: ${cardCategory}
                            </p>
                        </div>
                </div>
            </li>`)
    };
}

