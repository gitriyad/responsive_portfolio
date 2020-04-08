function img_move(id, dir, delay) {
    var id = document.getElementById(id);
    document.addEventListener("scroll", function () {
        var scrollpos = window.scrollY - 120;
        var el_pos = id.scrollHeight;
        if (scrollpos >= el_pos) {
            if (dir == "top") {
                style("top");
                id.style.animation = "top 0.5s linear";
                id.style.animationFillMode = "forwards";
                id.style.animationDelay = delay + "s";
            }
            if (dir == "right") {
                style("right");
                id.style.animation = "right 0.5s linear";
                id.style.animationFillMode = "forwards";
                id.style.animationDelay = delay + "s";
            }
            if (dir == "bottom") {
                style("bottom");
                id.style.animation = "bottom 0.5s linear";
                id.style.animationFillMode = "forwards";
                id.style.animationDelay = delay + "s";
            }
            if (dir == "left") {
                style("left");
                id.style.animation = "left 0.5s linear";
                id.style.animationFillMode = "forwards";
                id.style.animationDelay = delay + "s";
            }
        }
        if (el_pos > scrollpos) {
            id.style.animation = "a 0.5s linear";
        }

        function style(dir) {
            var st_el = document.createElement("style");
            var head = document.getElementsByTagName("head")[0];
            if (dir == "top") {
                st_el.innerHTML = "@-webkit-keyframes top{0%{opacity:0;margin-top:-100px}100%{opacity:1;margin-top:0}}@keyframes top{0%{opacity:0;margin-top:-100px}100%{opacity:1;margin-top:0}}";
                head.appendChild(st_el);
            }

            if (dir == "left") {
                st_el.innerHTML = "@-webkit-keyframes left{0%{opacity:0;margin-left:-100px}100%{opacity:1;margin-left:0}}@keyframes left{0%{opacity:0;margin-left:-100px}100%{opacity:1;margin-left:0}}";
                head.appendChild(st_el);
            }

            if (dir == "right") {
                st_el.innerHTML = "@-webkit-keyframes right{0%{opacity:0;margin-left:100px}100%{opacity:1;margin-left:0}}@keyframes right{0%{opacity:0;margin-left:100px}100%{opacity:1;margin-left:0}}";
                head.appendChild(st_el);
            }

            if (dir == "bottom") {
                st_el.innerHTML = "@-webkit-keyframes bottom{0%{opacity:0;margin-top:100px}100%{opacity:1;margin-top:0}}@keyframes bottom{0%{opacity:0;margin-top:100px}100%{opacity:1;margin-top:0}}";
                head.appendChild(st_el);
            }

        }

    });
}
