/**
 * Created by vas on 29.10.2015.
 */

var obj = document.getElementById('obj');
var field = new Array();
field.m = document.getElementById('m');
field.mid = document.getElementById('mid');
field.pt = document.getElementById('pt');
field.x = document.getElementById('x');
field.y = document.getElementById('y');
field.pr = document.getElementById('pr');
field.info = document.getElementById('info');

if(!obj.isWacom) {
    field.info.textContent = "No plugin or tablet found.";
} else {
    // Get tablet for this window.
    obj.SetFocus = true;

    m.textContent = obj.TabletModel;
    mid.textContent = obj.TabletModelID;

    setInterval(function(){
        field.x.textContent = obj.sysX;
        field.y.textContent = obj.sysY;
        field.pr.textContent = obj.pressure;

        var pt = obj.pointerType;
        field.pt.textContent =  ["Out of Proximity", "Pen", "puck", "Eraser"][pt];
    }, 100);
}

