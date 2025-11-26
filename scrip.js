
function randomAlert(name) {
    alert(name + " button clicked!");
}

function searchNow() {
    let query = document.getElementById("searchInput").value;
    if (query.trim() === "") {
        alert("Please enter search text!");
    } else {
        alert("You searched for: " + query);
    }
}

function generateNum() {
    document.getElementById("rnd").innerText = Math.floor(Math.random() * 10000);
}

function showDate() {
    document.getElementById("dateBox").innerText = new Date().toLocaleString();
}
