/*gif淡进淡出效果*/

 $(function(){

	/*
		* _aBtn是存储当前图片和按钮索引值的变量
		* timer存放定时器
		* Indexs是图片的总和-1  方便索引
	*/
		var _aBtn = 0;
		var timer = 0;
		var li_line=$('.nav > li');
		var Indexs = li_line.length-1;
		var timerSpeed =3500;




		/*初始化按钮和 和 图片的CSS*/	
		 li_line.eq(0).fadeIn(400).siblings().fadeOut(400);


	/*
	  	next,prev的点击函数
	  	*/
	  	function clickTabs(){	
	  		li_line.eq(_aBtn).stop(true,true).fadeIn(400).siblings().stop(true,true).fadeOut(400);
			
	}
	// $('.btn > a').click(tabs);
	
	/*
	  	自动轮播函数
	*/
	  	function autoTabs(){
	  		if(_aBtn < Indexs){
	  			_aBtn++;
	  		}else{
	  			_aBtn=0;
	  		};
	  		clickTabs()	
	  	}
	  	function tabFadeIn(aBtn,speed){
	  		$(aBtn).stop(true,true).fadeIn(speed);
	  	}
	  	function tabFadeOut(aBtn,speed){
	  		$(aBtn).stop(true,true).fadeOut(100);
	  	}
	/*
	 *   timer 启动定时器  自动轮播函数
	 *   为提高用户体验 每次当鼠标进入幻灯片的时候  都会清除定时器
	 */
	 $(document).ready(function(){
	 		$('.left_btn').fadeOut(200);
	 		$('.right_btn').fadeOut(200);
	 })
	 timer=setInterval(autoTabs,timerSpeed);
	 $('.arrow_box_l').hover(function(){
	 	clearInterval(timer);
	 	$('.left_btn').stop(true,true).fadeIn(200);
	 } , function(){
	 	timer=setInterval(autoTabs,timerSpeed)
	 	$('.left_btn').stop(true,true).fadeOut(200);
	 } );


	 $('.arrow_box_r').hover(function(){
	 	clearInterval(timer);
	 	$('.right_btn').stop(true,true).fadeIn(200);
	 } , function(){
	 	timer=setInterval(autoTabs,timerSpeed)
	 	$('.right_btn').stop(true,true).fadeOut(200);
	 } );


	/*
	 *   为按钮 next , right_btn  添加点击事件
	 *   通过获取当前_aBtn的值  来确定图片和按钮的索引值
	 */
	 $('.right_btn').click(function(){
	 	autoTabs();
	 });

	 $('.left_btn').click(function(){
	 	if(_aBtn > 0){
	 		_aBtn--;	
	 	}else{
	 		_aBtn=Indexs;
	 	}
	 	clickTabs();
	 })	

	})