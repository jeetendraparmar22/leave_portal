function ajaxindicatorstart()
{
	$('#resultLoading').css({
		'width':'100%',
		'height':'100%',
		'position':'fixed',
		'z-index':'10000000',
		'top':'0',
		'left':'0',
		'right':'0',
		'bottom':'0',
		'margin':'auto'
	});	
	
	$('#resultLoading .bg').css({
		'background':'#000000',
		'opacity':'0.7',
		'width':'100%',
		'height':'100%',
		'position':'absolute',
		'top':'0'
	});
	
	$('#resultLoading>div:first').css({
		'width': '250px',
		'height':'75px',
		'text-align': 'center',
		'position': 'fixed',
		'top':'0',
		'left':'0',
		'right':'0',
		'bottom':'0',
		'margin':'auto',
		'font-size':'16px',
		'z-index':'10',
		'color':'#ffffff'
		
	});

    $('#resultLoading .bg').height('100%');
    $('#resultLoading').fadeIn(300);
    $('body').css('cursor', 'wait');
}

function ajaxindicatorstop()
{
    $('#resultLoading .bg').height('100%');
    $('#resultLoading').fadeOut(300);
    $('body').css('cursor', 'default');
}

/*$(document).ajaxStart(function () {
	//show ajax indicator
	ajaxindicatorstart();
}).ajaxStop(function () {
	//hide ajax indicator
	ajaxindicatorstop();
});*/

$(function() {
    var url = $(location).attr('href');
    //var segments = url.split("/").splice(4); // use this on local server
	var segments = url.split("/").splice(3); // use this on live server
	if(!segments[1])
	{
		$("#nav ul li").each(function(){
			/*
			 * if(/\s/.test(str)) --- check there is any white space in the particular string or not
			 * (We are using this for give more than one class in the li class attribute)
			 */
			if(/\s/.test($(this).attr("class")))
			{
				var classname = $(this).attr("class");
				var classnames = classname.split(" ");
				var len = classnames.length;
				for(var i=0; i<len; i++)
				{
					if(classnames[i] == segments[0])
					{
						$(this).addClass("active");
						$(this).children("ul").addClass("in");
					}
				}
			}
			else
			{
				if($(this).attr("class") == segments[0])
				{
					$(this).addClass("active");
					$(this).children("ul").addClass("in");
				}
				else
				{
					$(this).removeClass("active");
					$(this).children("ul").removeClass("in");
				}
			}
			
			if($(this).attr("id") == segments[0])
				$(this).addClass("active");
			/*if($(this).attr("class") == segments[0])
			{
				$(this).addClass("active");
				$(this).children("ul").addClass("in");
			}
			else
			{
				$(this).removeClass("active");
				$(this).children("ul").removeClass("in");
			}
			
			if($(this).attr("id") == segments[0])
				$(this).addClass("active");*/
		})
	}
	else
	{
		$("#nav ul li").each(function(){
			/*if($(this).attr("class") == segments[0])
			{
				$(this).addClass("active");
				$(this).children("ul").addClass("in");
			}
			else
			{
				$(this).removeClass("active");
				$(this).children("ul").removeClass("in");
			}*/
			if(/\s/.test($(this).attr("class")))
			{
				var classname = $(this).attr("class");
				var classnames = classname.split(" ");
				var len = classnames.length;
				for(var i=0; i<len; i++)
				{
					if(classnames[i] == segments[0])
					{
						$(this).addClass("active");
						$(this).children("ul").addClass("in");
					}
				}
			}
			else
			{
				if($(this).attr("class") == segments[0])
				{
					$(this).addClass("active");
					$(this).children("ul").addClass("in");
				}
				else
				{
					$(this).removeClass("active");
					$(this).children("ul").removeClass("in");
				}
			}
			
			if($(this).attr("id") == segments[1])
			{
				$(this).addClass("active");
				$("#nav ul li").each(function(){
					if($(this).attr("id") == segments[0])
						$(this).removeClass("active");
				})
			}
			else
			{
				$("#nav ul li").each(function(){
					if($(this).attr("id") == segments[0] && $(this).attr("class") == "main")
						$(this).addClass("active");
				})
			}
		})
	}
	
});

$('#year').change(function () {
	 $('#change_year').submit();
	 
   });

