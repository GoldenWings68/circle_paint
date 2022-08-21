var canvas = document.getElementById("myCanvas");
var cxt = canvas.getContext("2d");


cxt.beginPath();
cxt.strokeStyle = "#0c23f2";
cxt.lineWidth = 5;
cxt.arc(200, 200, 50, 0, 2*Math.PI);
cxt.stroke();

cxt.beginPath();
cxt.strokeStyle = "black";
cxt.lineWidth = 5;
cxt.arc(325, 200, 50, 0, 2*Math.PI);
cxt.stroke();

cxt.beginPath();
cxt.strokeStyle = "red";
cxt.lineWidth = 5;
cxt.arc(450, 200, 50, 0, 2*Math.PI);
cxt.stroke();

cxt.beginPath();
cxt.strokeStyle = "#f2cc0c"; 
lineWidth = 5;
cxt.arc(262.5, 260, 50, 0, 2*Math.PI);
cxt.stroke();

cxt.beginPath();
cxt.strokeStyle = "green";
cxt.lineWidth = 5;
cxt.arc(387.5, 260, 50, 0, 2*Math.PI);
cxt.stroke();





