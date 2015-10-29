<%--
  Created by IntelliJ IDEA.
  User: vas
  Date: 29.10.2015
  Time: 20:25
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<style>span { font-weight: bold; }</style>

<body>
<div>
  <p>Tablet Model: <span id="m">???</span></p>
  <p>Tablet Model ID: <span id="mid">???</span></p>
  <p>Pointer Type: <span id="pt">???</span></p>
  <p>X: <span id="x">???</span></p>
  <p>Y: <span id="y">???</span></p>
  <p>Pressure: <span id="pr">???</span></p>
  <p>Additional info: <span id="info"></span></p>
</div>
<object id="obj" type="application/x-wacomtabletplugin" style="visibility: hidden"></object>
<%--<embed  id="obj" type="application/x-wacomtabletplugin" style="visibility: hidden"></embed>--%>
<script>
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

</script>


