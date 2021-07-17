function searchFun() {
    console.log("Event Triggered");
    let searchInput = document.getElementById("headerSearch").value;
    let searchValue = document.getElementsByClassName("search");

    for (var i = 0; i < 4; i++) {
        searchValue[i].classList.remove("highlight");
    }

    for (var i = 0; i < 4; i++) {
        let checkValue = searchValue[i].innerText;

        if (checkValue.indexOf(searchInput) > -1 && (searchInput != "")) {
            searchValue[i].classList.add("highlight");
        }
    }

    searchInput.value = "";
}