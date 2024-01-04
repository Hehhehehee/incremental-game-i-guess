news = [
    "Wtf is a news ticker",
    "I'm a news ticker! yay",
    "was that the bite of 1e308?!",
    "the achievments for this game are criminally hard",
    "big news!",
    "i,m going to download the universe and put it on internet archive",
    "developer announcement: next update coming in 5 hours"
]
nextnews = news[Math.floor(Math.random(1,2)*4)]
$("#news").text(nextnews)
setInterval(() => {
    nextnews = news[Math.floor(Math.random(1,2)*4)]
    $("#news").text(nextnews)
}, 15000);