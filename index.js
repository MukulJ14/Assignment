const content = document.getElementsByClassName('content');
const rightContainer = document.querySelector('.right');
const leftContainer = document.querySelector('.left');


for (item of content) {
    item.addEventListener("dragstart", (event) => {
        let selected = event.target;
        selected.classList.add("hold");

        rightContainer.addEventListener("dragover", (event) => {
            event.preventDefault();
        });
        rightContainer.addEventListener("drop", (event) => {
            selected.classList = ["content"];
            rightContainer.appendChild(selected);
            selected = null;
        });
        leftContainer.addEventListener("dragover", (event) => {
            event.preventDefault();
        });
        leftContainer.addEventListener("drop", (event) => {
            selected.classList = ["content"];
            leftContainer.appendChild(selected);
            selected = null;
        });

    })

}