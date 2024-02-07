
var timer = null;
box.onclick = function() {
    cancelAnimationFrame(timer);
    //获取当前毫秒数
    var startTime = +new Date();
    //获取当前页面的滚动高度
    var b = document.body.scrollTop || document.documentElement.scrollTop;
    var d = 500;
    var c = b;
    timer = requestAnimationFrame(function func() {
        var t = d - Math.max(0, startTime - (+new Date()) + d);
        document.documentElement.scrollTop = document.body.scrollTop = t * (-c) / d + b;
        timer = requestAnimationFrame(func);
        if (t == d) {
            cancelAnimationFrame(timer);
        }
    });
}



document.addEventListener("copy", function() {
    var e = document.getElementById("popup");
    e.style.display = "block", setTimeout(function() {
        e.style.opacity = "1"
    }, 50)
}), document.getElementById("confirmButton").addEventListener("click", function() {
    var e = document.getElementById("popup");
    e.style.opacity = "0", setTimeout(function() {
        e.style.display = "none"
    }, 300)
}), window.addEventListener("load", function() {
    const e = document.querySelector(".scrollable-container");
    e.addEventListener("wheel", function(t) {
        e.scrollWidth > e.clientWidth && (t.preventDefault(), e.scrollLeft += t.deltaY)
    })
});