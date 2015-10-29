/**
 * Created by vas on 29.10.2015.
 */
//по загрузке страницы подключаем скрипт wacom.js
window.onload = function() {
    var el = document.createElement("script");
    el.type = "text/javascript";
    el.src = "wacom.js?"+Math.random();
    document.getElementsByTagName("head")[0].appendChild(el);
}