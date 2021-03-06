<%@ page import="ru.vaszol.Main" %>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
	<title>WebDopog</title>
	<meta name="keywords" content="" />
	<meta name="description" content="" />
	<link href="css/style.css" rel="stylesheet" type="text/css">
	<link href="css/video.css" rel="stylesheet" type="text/css">

</head>

<body>

<div class="wrapper">

	<header class="header">
		<strong>Header:</strong>
	</header><!-- .header-->

	<div class="middle">

		<div class="container">
			<main class="content">
				WebDopog presents!<br/>
				Сегодня проводим <%=Main.test()%>
				<div id="allow">▲ ▲ ▲ Разрешите использовать камеру ▲ ▲ ▲ <br/> ( Сверху текущей страницы )</div>
				<p>
				<div class="item" id="videoDiv">
					<span> Камера </span>
					<video id="video" width="320" height="240" autoplay="autoplay" ></video>
					<input id="makeFoto" type="button" value="Птичка!!" />
					<input id="undoFoto" type="button" value="отмена" />
				</div>
				<div class="item" id="fotoDiv">
					<span> Фото </span>
					<canvas id="canvas" width="320" height="240" ></canvas>
					<input id="getCamera" type="button" value="Сфотографировать" />
				</div>
				<div class="it" id="sign">
					<span> Подпись </span>
					<canvas id="signatureCanvas" width="500" height="300" style.border="1px solid #ccc"></canvas>
					<input id="getSign" type="button" value="подписать" />
				</div>
				</p>
			</main><!-- .content -->
		</div><!-- .container-->

		<aside class="left-sidebar">
			<strong>Left Sidebar:</strong>
		</aside><!-- .left-sidebar -->

	</div><!-- .middle-->

</div><!-- .wrapper -->

<footer class="footer">
	<strong>Footer:</strong>

<script src="js/video.js"></script>
<script src="js/sign.js"></script>
</body>
</html>