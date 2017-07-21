$(function(){
	//判断头部下载是否被点击关闭
	var top_close = true;
	//设置支撑轮播图不被遮挡的高度
	var top_height = 0;
	$(window).scroll(function(){
		if($(this).scrollTop()>55){
			$('.bn').css({"display":"none"});
			$('.top_fix').css({"top":0});
		}else{
			if(top_close){
				//头部下载没有被关闭时执行
				$('.bn').css({"display":"block"});
				$('.top_fix').css({"top":110/50+'rem'});
			}else{
				//头部下载被关闭后执行
				$('.top_fix').css({"top":0});
				$('.top_height').css({'height':186/50+'rem'})
			}

		}
	});
	//头部下载关闭后执行的样式变化
	$('.bn_close').on('touchstart',function(){
		$('.bn').css({"display":"none"});
		$('.top_fix').css({"top":0});
		$('.top_height').animate({"height":186/50+'rem'});
		console.log(top_height);
		top_close = false;
		
	});	
	//跳转到搜索页面
	$('.search_box').on('touchstart',function(){
		window.location.href = 'search.html';
	});
	
	touchMove('.nav_list','.nav_box');
	touchMove('#goods1','.wrap');
	touchMove('#goods2','.wrap');
	function touchMove(target,targetbox){
		var StartX = 0;//开始触摸的位置坐标
		var ScrollDis = 0;//滑动的距离
		var StartScroll = 0;//初始滚动距离
		var MaxDis = $(target).outerWidth()-$(targetbox).outerWidth()+20;
	//	console.log(MaxDis);
		$(target).on('touchstart',function(ev){
			StartX = ev.originalEvent.targetTouches[0].pageX;
			StartScroll = ScrollDis;
	//		console.log("X:"+StartX);
		});
		
		$(target).on('touchmove',function(ev){
			var Dis = ev.originalEvent.targetTouches[0].pageX - StartX;
			ScrollDis = StartScroll + Dis;
	//		console.log("Dis:"+Dis);
			move();
		});
		
		$(target).on('touchend',function(ev){
			var Dis = ev.originalEvent.changedTouches[0].pageX - StartX;
			ScrollDis = StartScroll + Dis;
	//		console.log("Dis:"+ScrollDis);
			if(ScrollDis>0){
				ScrollDis = 0;
			}else if(ScrollDis<-MaxDis){
				ScrollDis = -MaxDis;
			}
			move();
		});
		
		function move(){
			$(target).css({"transform":"translateX("+ScrollDis+"px)"});
		}
	}
	
	touchMove('#silder1','.sort_wrap');
	touchMove('#silder2','.sort_wrap');
	touchMove('#silder3','.sort_wrap');
	touchMove('#silder4','.sort_wrap');
	
	
	//轮播图的滑动
	/*var Start_X = 0;//开始触摸的位置坐标
	var Scroll_Dis = 0;//滑动的距离
	var Start_Scroll = 0;//初始滚动距离
	var Num = 0;
	var imgNum = $('.img_list li').length-1;
	
//	console.log(MaxDis);
	$('.img_list').on('touchstart',function(ev){
		Start_X = ev.originalEvent.targetTouches[0].pageX;
		Start_Scroll = Scroll_Dis;
//		console.log("X:"+StartX);
	});
	
	$('.img_list').on('touchmove',function(ev){
		var Dis = ev.originalEvent.targetTouches[0].pageX - Start_X;
		Scroll_Dis = Start_Scroll + Dis;
//		console.log("Dis:"+Dis);
		moveImg();
	});
	
	$('.img_list').on('touchend',function(ev){
		var Dis = ev.originalEvent.changedTouches[0].pageX - Start_X;
		Scroll_Dis = Start_Scroll + Dis;

		Num = -Scroll_Dis/window.screen.width;
		var movescale = Dis/window.screen.width;
//		console.log('移动占比：'+Math.abs(movescale));
		//dis>0往右滑，dis<0往左滑
		//floor向下取整，ceil向上取整
		//(注意负数向上或者向下取整问题,比如-5.9向上就是-5,而不是-6;-5.9向下是-6,而不是-5)
		//占比大于，floor;占比小于，ceil
		//先判断占比，在判断方向
		if(Dis<0){
			//往左滑，占比没有超过规定值，向下取整取当前张数，超过向上取整取下一张
			Num = (Math.abs(movescale))<0.4?-Math.floor(Num):-Math.ceil(Num);
		}else{
			//往右滑，占比没有超过规定值，向上取整取当前张数，超过向下取整取前一张
			Num = (Math.abs(movescale))<0.4?-Math.ceil(Num):-Math.floor(Num);
		}
 
		if(Num>0){
			Num = -imgNum;
		}else if(Num<-imgNum){
			Num = 0;
		}
		
		Scroll_Dis = Num*window.screen.width;
//		console.log(Num);
//		console.log(Scroll_Dis);
		moveImg();
	});
	
	function moveImg(){
		$('.img_list').css({"transform":"translate3d("+Scroll_Dis+"px,0,0)","transition-duration":500+"ms"});
		$('.select_point span').eq(Math.abs(Num)).addClass('on').siblings().removeClass('on');
	}*/
	
	
});
