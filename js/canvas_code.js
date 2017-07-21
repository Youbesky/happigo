
function changeCode(){
	var cvs = document.getElementById('canvas');
	var img_code=document.getElementsByClassName("img_code")[0];
	
	cvs.width=img_code.offsetHeight*2;
	cvs.height=img_code.offsetHeight*0.6;
	
	var ocWidth=cvs.width;
	var ocHeight=cvs.height;
	var ctx = cvs.getContext('2d');
	
	//随机验证码数字
	var num1 = parseInt(Math.random()*10);
	var num2 = parseInt(Math.random()*10);
	var num3 = parseInt(Math.random()*10);
	var num4 = parseInt(Math.random()*10);
	
	//背景填充颜色
	var colors = ["#33b5e5","#0099cc","#aa66cc","#99cc00","#669900","#ffbb33","#ff8800","#ff4444","#cc0000","#77dd00"];
	
	ctx.fillStyle = colors[Math.floor(Math.random()*colors.length)];
	ctx.strokeRect(0,0,ocWidth,ocHeight);
	ctx.fillRect(0,0,ocWidth,ocHeight);
	
	//干扰点
	for(var i=0;i<30;i++){
		ctx.beginPath();
		ctx.fillStyle = 'cadetblue';
		var x = Math.random()*(ocWidth-5)+5;
		var y = Math.random()*(ocHeight-5)+5;
		var r = Math.random()*2+1;
		ctx.arc(x,y,r,0,2*Math.PI);
		ctx.fill();
		ctx.restore();
	}
	
	var code = String(num1)+num2+num3+num4;
	
	//绘制验证码
	ctx.beginPath();
	ctx.fillStyle = 'white';
	ctx.font="25px Arial";
	ctx.fillText(num1,Math.random()*24,Math.random()*5+20);
	ctx.fillText(num2,Math.random()*20+28,Math.random()*5+20);
	ctx.fillText(num3,Math.random()*15+50,Math.random()*5+20);
	ctx.fillText(num4,Math.random()*10+66,Math.random()*5+20);
	ctx.restore();
	//绘制干扰线
	for(var i=0;i<3;i++){
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(Math.random()*25+1,Math.random()*25+1);
		ctx.lineTo(Math.random()*25+60,Math.random()*25+1);
		ctx.stroke();
	}
	
	return code;
}

changeCode();







