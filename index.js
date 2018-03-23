function toDou(n){
		if (n < 10){
			return '0'+n;
		}
		else{
			return ''+n;
		}
}

	//鼠标悬停交换
	function fun1(){
		var dow = document.getElementById("right3-down");
		var dow1 = document.getElementById("right3-down1");
		dow.style.display = "block";
		dow1.style.display = "none";
	}

	function fun2(){
		var dow = document.getElementById('right3-down');
		var dow1 = document.getElementById('right3-down1');
		dow.style.display = "none";
		dow1.style.display = "block";
	}

	function fun3(){
		var dow3 = document.getElementById('right4-down3');
		var dow4 = document.getElementById('right4-down4');
		var dow5 = document.getElementById('right4-down5');
		dow4.style.display = "none";
		dow5.style.display = "none";
		dow3.style.display = "block";
	}

	function fun4(){
		var dow3 = document.getElementById('right4-down3');
		var dow4= document.getElementById('right4-down4');
		var dow5 = document.getElementById('right4-down5');
		dow3.style.display = "none";
		dow5.style.display = "none";
		dow4.style.display = "block";
	}

	function fun5(){
		var dow3 = document.getElementById('right4-down3');
		var dow4 = document.getElementById('right4-down4');
		var dow5 = document.getElementById('right4-down5');
		dow3.style.display = "none";
		dow4.style.display = "none";
		dow5.style.display = "block";
	}

	//商品展示交换ban3-sondown1
	function func1(){
		var dow1 = document.getElementById('ban3-sondown1');
		var dow2 = document.getElementById('ban3-sondown2');
		var dow3 = document.getElementById('ban3-sondown3');
		dow3.style.display = "none";
		dow2.style.display = "none";
		dow1.style.display = "block";
	}

	function func2(){
		var dow1 = document.getElementById('ban3-sondown1');
		var dow2 = document.getElementById('ban3-sondown2');
		var dow3 = document.getElementById('ban3-sondown3');
		dow3.style.display = "none";
		dow1.style.display = "none";
		dow2.style.display = "block";
	}

	function func3(){
		var dow1 = document.getElementById('ban3-sondown1');
		var dow2 = document.getElementById('ban3-sondown2');
		var dow3 = document.getElementById('ban3-sondown3');
		dow1.style.display = "none";
		dow2.style.display = "none";
		dow3.style.display = "block";
	}

	function huan1(){
		var dow1 = document.getElementById('ban9-one');
		var dow2 = document.getElementById('ban9-two');
		dow1.style.display = "none";
		dow2.style.display = "block";
	}

	function huan2(){
		var dow1 = document.getElementById('ban9-one');
		var dow2 = document.getElementById('ban9-two');
		dow2.style.display = "none";
		dow1.style.display = "block";
	}


	/*缓慢移动到顶部*/
	var currentPosition,timer;  
	function GoTop(){  
	    timer = setInterval("runToTop()",1);  
	}  
	function runToTop(){  
	    currentPosition = document.documentElement.scrollTop || document.body.scrollTop;   
	    currentPosition -= 10;  
	    if(currentPosition > 0)  
	    {  
	        window.scrollTo(0,currentPosition);  
	    }  
	    else  
	    {  
	        window.scrollTo(0,0);  
	        clearInterval(timer);  
	    }  
	}  

		//轮播图
		 window.onload = function () {
		 	  var curIndex = 0; 
			  var timeInterval = 3000; 
			  var arr = new Array(); 
			  var temp = document.getElementById("index");
              var obj2 = temp.getElementsByTagName("li");
			  arr[0] = "lun/3.jpg"; 
			  arr[1] = "lun/4.jpg"; 
			  arr[2] = "lun/5.jpg"; 
			  arr[3] = "lun/6.jpg"; 
			  arr[4] = "lun/7.jpg"; 
			  arr[5] = "lun/8.jpg"; 
			  arr[6] = "lun/9.jpg"; 
			  var timer = setInterval(changeImg,timeInterval); 
			  obj2[0].style.backgroundColor = "red";//初始定义第一个的背景颜色为红色
			  function changeImg() { 
				   var obj = document.getElementById("obj"); 
				   
					obj.onmouseover = function (){
		        		clearInterval(timer);
		   			 }

		   			 obj.onmouseout = function (){
		        		timer = setInterval(changeImg, timeInterval);
		   			 }

				   if (curIndex == arr.length-1) { 
				    	curIndex = 0; 
				   } 
				   else { 
				    	curIndex += 1; 
				   } 
				   obj.src = arr[curIndex]; 
				   for (var j = 0; j < obj2.length; j++) {//设置索引的背景颜色
                           obj2[j].style.backgroundColor = "#868686";
                       	}
                   obj2[curIndex].style.backgroundColor = "red";
			  } 

		 	  flag = 0;
                //将移动和索引数字相对应起来
              for (var num = 0; num < obj2.length; num++) {
                   obj2[num].onmouseover = function () {//鼠标移动到index位置上的时候，执行滑动操作
                   		flag = this.innerHTML - 1; ////index值比数组下标值大1
                       	for (var j = 0; j < obj2.length; j++) {//设置索引的背景颜色
                           obj2[j].style.backgroundColor = "#868686";
                       	}
                      	obj2[flag].style.backgroundColor = "red";//给被选中的图片索引单独设置背景色
                      	curIndex = flag;
                      	obj.src = arr[flag]; 
                   }
               }


               //计时器
               var aLi=document.getElementById('pi');
               var aImg=aLi.getElementsByTagName('img');
               function tick(){
               		var oDate = new Date();
               		var str = toDou(oDate.getHours())+toDou(oDate.getMinutes())+toDou(oDate.getSeconds());
               		for (var i = 0; i < aImg.length; i++){
               			aImg[i].src='time/'+str[i]+'.jpg';
               		}
               }
               setInterval(tick,1000);
               tick();

		   	}

	        

	        
/*滑动监听*/
window.onscroll = function(){ 
     var t = document.documentElement.scrollTop || document.body.scrollTop;  //获取距离页面顶部的距离
     var uptop = document.getElementById( "left-list" ); //获取div元素
     var obj = uptop.getElementsByTagName("a");
     if( t >= 1520 && t <= 8400) { 
        uptop.style.display = "block";//出现
        if(t >= 1520 && t <= 2100){
                for (var j = 0; j < obj.length; j++) {//设置索引的背景颜色
                        obj[j].style.backgroundColor = "#909090";
                }
                obj[0].style.backgroundColor = "#ed0000";
                obj[9].style.backgroundColor = "#585858";
        }
        else if(t >= 2000 && t <= 2800){
        	for (var j = 0; j < obj.length; j++) {//设置索引的背景颜色
                        obj[j].style.backgroundColor = "#909090";
                }
                obj[1].style.backgroundColor = "#ed0000";
                obj[9].style.backgroundColor = "#585858";
        }
        else if(t >= 2800 && t <= 3350){
        	for (var j = 0; j < obj.length; j++) {//设置索引的背景颜色
                        obj[j].style.backgroundColor = "#909090";
                }
                obj[2].style.backgroundColor = "#ed0000";
                obj[9].style.backgroundColor = "#585858";
        }
        else if(t >= 3350 && t <= 3850){
        	for (var j = 0; j < obj.length; j++) {//设置索引的背景颜色
                        obj[j].style.backgroundColor = "#909090";
                }
                obj[3].style.backgroundColor = "#ed0000";
                obj[9].style.backgroundColor = "#585858";
        }
        else if(t >= 3850 && t <= 4450){
        	for (var j = 0; j < obj.length; j++) {//设置索引的背景颜色
                        obj[j].style.backgroundColor = "#909090";
                }
                obj[4].style.backgroundColor = "#ed0000";
                obj[9].style.backgroundColor = "#585858";
        }
        else if(t >= 4450 && t <= 5000){
        	for (var j = 0; j < obj.length; j++) {//设置索引的背景颜色
                        obj[j].style.backgroundColor = "#909090";
                }
                obj[5].style.backgroundColor = "#ed0000";
                obj[9].style.backgroundColor = "#585858";
        }
        else if(t >= 5000 && t <= 5500){
        	for (var j = 0; j < obj.length; j++) {//设置索引的背景颜色
                        obj[j].style.backgroundColor = "#909090";
                }
                obj[6].style.backgroundColor = "#ed0000";
                obj[9].style.backgroundColor = "#585858";
        }
        else if(t >= 5500 && t <= 6000){
        	for (var j = 0; j < obj.length; j++) {//设置索引的背景颜色
                        obj[j].style.backgroundColor = "#909090";
                }
                obj[7].style.backgroundColor = "#ed0000";
                obj[9].style.backgroundColor = "#585858";
        }
        else if(t >= 6000 && t <= 8400){
        	for (var j = 0; j < obj.length; j++) {//设置索引的背景颜色
                        obj[j].style.backgroundColor = "#909090";
                }
                obj[8].style.backgroundColor = "#ed0000";
                obj[9].style.backgroundColor = "#585858";
        }
     } else {
        uptop.style.display = "none";//隐藏
     } 

} 
