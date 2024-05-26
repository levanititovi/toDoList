var itemElements = document.getElementsByClassName("item");
for (var i = 0; i < itemElements.length; i++) {
    itemElements[i].addEventListener("click", function() {
        var currentColor = this.style.color;
        if (currentColor !== "blue") {
            this.style.color = 'blue';
        } else if (currentColor !== "red") {
            this.style.color = 'red';
        } else {
            return(
                this.style.color = 'black'
            )
        };
    });
}
