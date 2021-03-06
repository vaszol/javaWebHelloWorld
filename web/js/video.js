window.onload = function () {
    var canvas = document.getElementById('canvas');
    var video = document.getElementById('video');
    var makeFotoButton = document.getElementById('makeFoto');
    var getCameraButton = document.getElementById('getCamera');
    var undoFotoButton = document.getElementById('undoFoto');
    var allow = document.getElementById('allow');
    var context = canvas.getContext('2d');
    var videoStreamUrl = false;

    document.getElementById('fotoDiv').style.display='';
    document.getElementById('videoDiv').style.display='none';
    //canvas.style.display='';
    //makeFotoButton.style.display='none';
    //video.style.display = 'none';

//  функция для получения доступа к камере
    var getCamera = function(){

        //videoStreamUrl = true;
// скрываем canvas и "кнопку запроса камеры", и отображаем video и "кнопку птичка!!"
//        canvas.style.display='none';
//        getCameraButton.style.display='none';
//        document.getElementById('video').style.display='';
//        document.getElementById('makeFoto').style.display='';
        document.getElementById('fotoDiv').style.display='none';
        document.getElementById('videoDiv').style.display='';
        document.getElementById('undoFoto').style.display='';
    }
// функция которая будет выполнена при нажатии на кнопку захвата кадра
    var captureMe = function () {
        if (!videoStreamUrl) alert('То-ли вы не нажали "разрешить" в верху окна, то-ли что-то не так с вашим видео стримом')
// переворачиваем canvas зеркально по горизонтали (см. описание внизу статьи)
        context.translate(canvas.width, 0);
        context.scale(-1, 1);
// отрисовываем на канвасе текущий кадр видео
        context.drawImage(video, 0, 0, video.width, video.height);
// получаем data: url изображения c canvas
        var base64dataUrl = canvas.toDataURL('image/png');
        context.setTransform(1, 0, 0, 1, 0, 0); // убираем все кастомные трансформации canvas
// на этом этапе можно спокойно отправить  base64dataUrl на сервер и сохранить его там как файл (ну или типа того)
// но мы добавим эти тестовые снимки в наш пример:
//        var img = new Image();
//        img.src = base64dataUrl;
//        window.document.body.appendChild(img);
        undoFoto();
//// скрываем canvas и "кнопку запроса камеры", и отображаем video и "кнопку птичка!!"
////        canvas.style.display='';
////        getCameraButton.style.display='';
////        document.getElementById('video').style.display='none';
////        document.getElementById('makeFoto').style.display='none';
//        document.getElementById('fotoDiv').style.display='';
//        document.getElementById('videoDiv').style.display='none';
// //убиваем захват
//        navigator.getUserMedia({video: false});
//        videoStreamUrl = false;
    }

    var undoFoto = function () {
//скрываем canvas и "кнопку запроса камеры", и отображаем video и "кнопку птичка!!"
        document.getElementById('fotoDiv').style.display='';
        document.getElementById('videoDiv').style.display='none';
        document.getElementById('undoFoto').style.display='none';
//убиваем захват
        navigator.getUserMedia({video: false});
        videoStreamUrl = false;
    }

    makeFotoButton.addEventListener('click', captureMe);
    getCameraButton.addEventListener('click', getCamera);
    undoFotoButton.addEventListener('click', undoFoto);


// navigator.getUserMedia  и   window.URL.createObjectURL (смутные времена браузерных противоречий 2012)
    navigator.getUserMedia
        = navigator.getUserMedia
        || navigator.webkitGetUserMedia
        || navigator.mozGetUserMedia
        || navigator.msGetUserMedia;
    window.URL.createObjectURL
        = window.URL.createObjectURL
        || window.URL.webkitCreateObjectURL
        || window.URL.mozCreateObjectURL
        || window.URL.msCreateObjectURL;
// запрашиваем разрешение на доступ к поточному видео камеры
    navigator.getUserMedia({video: true}, function (stream) {
// разрешение от пользователя получено
// скрываем подсказку
        allow.style.display = "none";
// получаем url поточного видео
        videoStreamUrl = window.URL.createObjectURL(stream);
// устанавливаем как источник для video
        video.src = videoStreamUrl;
        video.visibility = false;
        makeFotoButton.visibility = false;
    }, function () {
        console.log('что-то не так с видеостримом или пользователь запретил его использовать :P');
    });
};