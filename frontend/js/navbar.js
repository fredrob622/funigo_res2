document.addEventListener("DOMContentLoaded", function () {
    const icons = document.getElementById("icons");
    const nav = document.getElementById("nav");
    const containBas = document.getElementById("contain-bas");

    // Ajout et remove de classe active si on click sur icon
    icons.addEventListener("click", () => {
        nav.classList.toggle("active");
        containBas.classList.toggle("down");
    });

    // Si on click sur un onglet, la navbar disparaît
    const links = document.querySelectorAll('nav li');
    links.forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
            containBas.classList.remove("down");
        });
    });
});

var nameStateVariable = useState('React');
var name = nameStateVariable[0];
var setName = nameStateVariable[1];














