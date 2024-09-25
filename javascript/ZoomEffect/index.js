function imageZoom(imgId) {
    let img = document.getElementById(imgId);
    let lens = document.getElementById("lens");

    // Set background image for the lens
    lens.style.backgroundImage = `url(${img.src})`;

    // Define the zoom ratio
    let ratio = 3;

    // Set background size for lens
    lens.style.backgroundSize = (img.width * ratio) + 'px ' + (img.height * ratio) + 'px';

    // Add event listeners for mouse and touch
    img.addEventListener("mousemove", moveLens);
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("touchmove", moveLens);

    function moveLens(e) {
        // Get cursor position
        let position = getCursor(e);

        // Calculate lens position (centered around the cursor)
        let positionLeft = position.x - (lens.offsetWidth / 2);
        let positionTop = position.y - (lens.offsetHeight / 2);

        // Prevent lens from moving out of the image bounds
        if (positionLeft < 0) positionLeft = 0;
        if (positionTop < 0) positionTop = 0;
        if (positionLeft > img.width - lens.offsetWidth / 3) {
            positionLeft = img.width - lens.offsetWidth / 3;
        }
        if (positionTop > img.height - lens.offsetHeight / 3) {
            positionTop = img.height - lens.offsetHeight / 3;
        }

        // Set lens position
        lens.style.left = positionLeft + "px";
        lens.style.top = positionTop + "px";

        // Set background position for the lens to simulate zoom effect
        lens.style.backgroundPosition = `-${position.x * ratio}px -${position.y * ratio}px`;
    }

    function getCursor(e) {
        // Get image bounds
        let bounds = img.getBoundingClientRect();

        // Calculate cursor's x and y positions relative to the image
        let x = e.pageX - bounds.left;
        let y = e.pageY - bounds.top;

        // Adjust for page scrolling
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;

        return { x: x, y: y };
    }
}

// Initialize image zoom function
imageZoom('zoom');
