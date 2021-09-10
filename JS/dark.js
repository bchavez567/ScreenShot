$("#theme").on("click", () => {
    if (localStorage.getItem("theme") == "dark") {
        lightTheme()
    } else {
        darkTheme()
    }
})


const darkTheme = () => {

    $("nav").css("background-color", "white")
    $("a").css("color", "black")
    $("footer").css({
        "background-color": " white",
        "color": "black"
    })
    $("#theme").css({
        "background-color": "black",
        "color": "white"
    })
    $("span").css("color", "black")
    $("h1").css("color", "white")
    $("h5").css("color", "white")
    $("h4").css("color", "white")

    $("p").css("color", "white")

    $("body").css("background-color", "black")

    localStorage.setItem("theme", "dark")
}

const lightTheme = () => {

    $("nav").css("background-color", "black")
    $("a").css("color", "white")
    $("footer").css({
        "background-color": " black",
        "color": "white"
    })
    $("#theme").css({
        "background-color": " white",
        "color": "black"
    })
    $("span").css("color", "white")
    $("h1").css("color", "black")
    $("h5").css("color", "black")
    $("h6").css("color", "black")

    $("p").css("color", "black")
    $("body").css("background-color", "white")


    localStorage.setItem("theme", "light")
}
