function move(x, y, elem) {
    elem.style.transform = 'perspective(800px)rotateX(' + y / 50 + 'deg)rotateY(' + x / 50 + 'deg)';
}

function divAnim(id) {
    var elem = document.getElementById(id);
    var width = elem.offsetWidth;
    var height = elem.offsetHeight;
    var halfHeight = height / 2;
    var halfWidth = width / 2;
    elem.addEventListener("mousemove", function (e) {
        var x = e.clientX;
        var y = e.clientY;
        if (x <= halfWidth) {
            move(x, -y, elem);
        }
        if (x => halfWidth) {
            move(x, y, elem);
        }

    });
    elem.addEventListener("mouseleave", function () {
        move(0, 0, elem);
    })
}
