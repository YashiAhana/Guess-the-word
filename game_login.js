function Login(){
    player_1=document.getElementById("player1").value
    player_2=document.getElementById("player2").value

    localStorage.setItem("player_1",player_1)
    localStorage.setItem("player_2",player_2)
    window.location="game_page.html"
}