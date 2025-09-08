


function changeColor() {
    var colorName = document.getElementById("colorName")
    var hexCode = ""
    var arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    for (var i = 0; i <6; i++) {
        var randomIndex = Math.floor((Math.random()) * arr.length)
        hexCode = hexCode + arr[randomIndex]

    }

    document.body.style.backgroundColor = "#" + hexCode
    colorName.innerHTML = "Background Color Code--->" + " #" + hexCode
}