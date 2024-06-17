document.getElementById("openModal").addEventListener("click", function() {
    document.getElementById("modal").style.display = "flex";
});

document.querySelector(".confirm").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

function novaSenha(){
    window.location.href = "novaSenha.html"
}