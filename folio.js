const transition =
document.getElementById("page-transition");

const links =
document.querySelectorAll("a");

links.forEach(link => {

    link.addEventListener("click", e => {

        const target =
        link.getAttribute("href");

        if(target.includes(".html")){

            e.preventDefault();

            transition.classList.add("active");

            setTimeout(() => {

                window.location.href =
                target;

            }, 700);

        }

    });

});