document.addEventListener("DOMContentLoaded", function() {
    var toggleLinks = document.querySelectorAll(".toggleLink");

    toggleLinks.forEach(function(toggleLink) {
        toggleLink.addEventListener("click", function(event) {
            event.preventDefault(); // Evita que o link atualize a página
            
            var content = this.nextElementSibling;

            if (content.style.display === "none") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
               
            }
        });
    });
});
