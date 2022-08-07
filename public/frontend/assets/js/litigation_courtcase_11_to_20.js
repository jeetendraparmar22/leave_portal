$(document).ready(function(){
	// Read Only Date Field Hidden When Page Load
	$('#rostagedate11').hide();
	$('#rostagedate12').hide();
	$('#rostagedate13').hide();
	$('#rostagedate14').hide();
	$('#rostagedate15').hide();
	$('#rostagedate16').hide();
	$('#rostagedate17').hide();
	$('#rostagedate18').hide();
	$('#rostagedate19').hide();
	$('#rostagedate20').hide();

	//IF Date exit show in Readonly
	if(stagedateicon11!='')
	{
		$("#stagedate11").hide();
		$('#rostagedate11').show();
	}
	if(stagedateicon12!='')
	{
		$("#stagedate12").hide();
		$('#rostagedate12').show();
	}
	if(stagedateicon13!='')
	{
		$("#stagedate13").hide();
		$('#rostagedate13').show();
	}
	if(stagedateicon14!='')
	{
		$("#stagedate14").hide();
		$('#rostagedate14').show();
	}
	if(stagedateicon15!='')
	{
		$("#stagedate15").hide();
		$('#rostagedate15').show();
	}
	if(stagedateicon16!='')
	{
		$("#stagedate16").hide();
		$('#rostagedate16').show();
	}
	if(stagedateicon17!='')
	{
		$("#stagedate17").hide();
		$('#rostagedate17').show();
	}
	if(stagedateicon18!='')
	{
		$("#stagedate18").hide();
		$('#rostagedate18').show();
	}
	if(stagedateicon19!='')
	{
		$("#stagedate19").hide();
		$('#rostagedate19').show();
	}
	if(stagedateicon20!='')
	{
		$("#stagedate20").hide();
		$('#rostagedate20').show();
	}

	//Skip button hide and Next button show
    if(next_status == 1)
    {
    	$('#btnSkip11').hide();
    	$('#btnNext11').show();

    	$('#btnSkip12').hide();
    	$('#btnNext12').show();

    	$('#btnSkip13').hide();
    	$('#btnNext13').show();
		
    	$('#btnSkip14').hide();
    	$('#btnNext14').show();
    	
    	$('#btnSkip15').hide();
    	$('#btnNext15').show();
    	
    	$('#btnSkip16').hide();
    	$('#btnNext16').show();
    	
    	$('#btnSkip17').hide();
    	$('#btnNext17').show();
    	
    	$('#btnSkip18').hide();
    	$('#btnNext18').show();
    	
    	$('#btnSkip19').hide();
    	$('#btnNext19').show();
    	
    	$('#btnSkip20').hide();
    	$('#btnNext20').show();
    }
    else
    {
    	$('#btnSkip11').show();
    	$('#btnNext11').hide();

    	$('#btnSkip12').show();
    	$('#btnNext12').hide();

    	$('#btnSkip13').show();
    	$('#btnNext13').hide();
    	
    	$('#btnSkip14').show();
    	$('#btnNext14').hide();
    	
    	$('#btnSkip15').show();
    	$('#btnNext15').hide();
    	
    	$('#btnSkip16').show();
    	$('#btnNext16').hide();
    	
    	$('#btnSkip17').show();
    	$('#btnNext17').hide();
    	
    	$('#btnSkip18').show();
    	$('#btnNext18').hide();
    	
    	$('#btnSkip19').show();
    	$('#btnNext19').hide();

    	$('#btnSkip20').show();
    	$('#btnNext20').hide();
    }
   
	// Show Particular Stage When Page Load   
    //$('#stage'+stageno).show();
    /*for(var i=1; i <= total_stage; i++)
	{
		if(stageno == i)
		{
			$('#stage'+i).show();
		}
		else
		{
			$('#stage'+i).hide();
		}
	}*/
    
	var nowDate = new Date();
	var dd = nowDate.getDate();
	var mm = nowDate.getMonth()+1; //January is 0!

	var yyyy = nowDate.getFullYear();
	if(dd<10){
	    dd='0'+dd
	} 
	if(mm<10){
	    mm='0'+mm
	} 
	var today = dd+'/'+mm+'/'+yyyy;
	//$('#stage1_date').val(today);
	
	// Date Picker
	$('#data_11 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true
	    });

	//$('#stage2_date').val(today);
	$('#data_12 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });

	//$('#stage3_date').val(today);
	$('#data_13 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });

	//$('#stage4_date').val(today);
	$('#data_14 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });
	
	$('#data_15 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });
	
	$('#data_16 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });
	
	$('#data_17 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });
	
	$('#data_18 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });
	
	$('#data_19 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });
	
	$('#data_20 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });
});


//Add Functions Start
$('#btnAdd11').click(function(e){
	var formData = new FormData($('#frmStage11')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/addstage11",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                    $('#stage11').hide();
                    if(obj['stage']=='stop')
					{
						window.location.href = base_url+"litigation/courtcase";
					}
					else
					{
						$('#stage'+obj['stage']).show();
					}
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not saved due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnAdd_seletion1').click(function(e){
	var result1=validate_radio('order_acquital_convection');
	var result3=validate_radio('fbo_apply_sessions');
	
	var checkboxval=$("input[name='order_acquital_convection']:checked").val();
	
	if(result1==false)
	{
		$('#errormsg_orderacqconv').show();
		
		document.getElementById('errormsg_orderacqconv').innerHTML="Select Order is Acquittal or Conviction!";
		//alert('Select Order is Acquittal or Conviction!');
		return false;	
	}
	else if(result1==true && checkboxval==1 && result3==false)
	{
		$('#errormsg_orderacqconv').hide();
		$('#errormsg_fboapptrib').show();
		
		document.getElementById('errormsg_fboapptrib').innerHTML="Select FBO want to apply for sessions court!";
		//alert('Select FBO want to apply for tribunal court!');
		return false;
	}
	else
	{
		var formData = new FormData($('#frmStage_seletion1')[0]);
	    $.ajax({
	         type: "POST",
	         url: base_url+"litigation/courtcase/addstageseletion1",
	         data: formData,
	         cache: false,
	         async: false,
	         contentType: false,
	         processData: false,
	         success: function (json) {
	            //alert(json);
	            var obj = jQuery.parseJSON(json);
	            try { 
	                if (obj['status'] == "true") {
	                	$('#stage_seletion1').hide();
						$('#acquittal_conviction').hide();
						$('#conviction').hide();
						
						if(obj['stage']=='stop')
						{
							window.location.href = base_url+"litigation/courtcase";
						}
						else
						{
							$('#stage'+obj['stage']).show();
						}
	                }
	                else if(obj['status'] == "false")
	                {
	                    if (obj['code'] == 0 || obj['code'] == 1) {
	                    	alert('Record not saved due to technical reasons!')
	                    	window.location.href = base_url+"litigation/courtcase";
	                    }
	                }
	            }
	            catch (e) {
	                alert('Exception while request..');
	            }
	        },
	        error: function () {
	            alert("error");
	        }
	    });
	}
});

$('#btnAdd12').click(function(e){
	var formData = new FormData($('#frmStage12')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/addstage12",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                    //window.location.href = "<?php echo base_url(); ?>society/society_admins";
                	$('#stage12').hide();
                	$('#stage13').show();
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not saved due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnAdd13').click(function(e){
	var formData = new FormData($('#frmStage13')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/addstage13",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                    //window.location.href = "<?php echo base_url(); ?>society/society_admins";
                	$('#stage13').hide();
                	$('#stage14').show();
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not saved due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnAdd14').click(function(e){
	var formData = new FormData($('#frmStage14')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/addstage14",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	//window.location.href = base_url+"litigation/courtcase";
                	$('#stage14').hide();
                	$('#stage15').show();
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not saved due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnAdd15').click(function(e){
	var formData = new FormData($('#frmStage15')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/addstage15",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	//window.location.href = base_url+"litigation/courtcase";
                	$('#stage15').hide();
                	if(obj['stage']=='stop')
					{
						window.location.href = base_url+"litigation/courtcase";
					}
					else
					{
						$('#stage'+obj['stage']).show();
					}
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not saved due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnAdd_seletion2').click(function(e){
	var result1=validate_radio('dept_apply_sessions');
	
	var checkboxval=$("input[name='dept_apply_sessions']:checked").val();
	
	if(result1==false)
	{
		$('#errormsg_deptapptrib').show();
		
		document.getElementById('errormsg_deptapptrib').innerHTML="Select department want to apply for sessions court!";
		return false;	
	}
	else
	{
		var formData = new FormData($('#frmStage_seletion2')[0]);
	    $.ajax({
	         type: "POST",
	         url: base_url+"litigation/courtcase/addstageseletion2",
	         data: formData,
	         cache: false,
	         async: false,
	         contentType: false,
	         processData: false,
	         success: function (json) {
	            //alert(json);
	            var obj = jQuery.parseJSON(json);
	            try { 
	                if (obj['status'] == "true") {
	                	$('#stage_seletion2').hide();
						
						if(obj['stage']=='stop')
						{
							window.location.href = base_url+"litigation/courtcase";
						}
						else
						{
							$('#stage'+obj['stage']).show();
						}
	                }
	                else if(obj['status'] == "false")
	                {
	                    if (obj['code'] == 0 || obj['code'] == 1) {
	                    	alert('Record not saved due to technical reasons!')
	                    	window.location.href = base_url+"litigation/courtcase";
	                    }
	                }
	            }
	            catch (e) {
	                alert('Exception while request..');
	            }
	        },
	        error: function () {
	            alert("error");
	        }
	    });
	}
});

$('#btnAdd16').click(function(e){
	var formData = new FormData($('#frmStage16')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/addstage16",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	//window.location.href = base_url+"litigation/courtcase";
                	$('#stage16').hide();
                	$('#stage17').show();
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not saved due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnAdd17').click(function(e){
	var formData = new FormData($('#frmStage17')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/addstage17",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	//window.location.href = base_url+"litigation/courtcase";
                	$('#stage17').hide();
                	$('#stage18').show();
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not saved due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnAdd18').click(function(e){
	var formData = new FormData($('#frmStage18')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/addstage18",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	//window.location.href = base_url+"litigation/courtcase";
                	$('#stage18').hide();
                	if(obj['stage']=='stop')
					{
						window.location.href = base_url+"litigation/courtcase";
					}
					else
					{
						$('#stage'+obj['stage']).show();
					}
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not saved due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnAdd_seletion3').click(function(e){
	var result1=validate_radio('order_acquital_convection_high');
	var result3=validate_radio('fbo_apply_high');
	
	var checkboxval=$("input[name='order_acquital_convection_high']:checked").val();
	
	if(result1==false)
	{
		$('#errormsg_orderacqconvhigh').show();
		
		document.getElementById('errormsg_orderacqconvhigh').innerHTML="Select Order is Acquittal or Conviction!";
		//alert('Select Order is Acquittal or Conviction!');
		return false;	
	}
	else if(result1==true && checkboxval==1 && result3==false)
	{
		$('#errormsg_fboapphigh').show();
		
		document.getElementById('errormsg_fboapphigh').innerHTML="Select FBO want to apply for high court!";
		//alert('Select FBO want to apply for tribunal court!');
		return false;
	}
	else
	{
		var formData = new FormData($('#frmStage_seletion3')[0]);
	    $.ajax({
	         type: "POST",
	         url: base_url+"litigation/courtcase/addstageseletion3",
	         data: formData,
	         cache: false,
	         async: false,
	         contentType: false,
	         processData: false,
	         success: function (json) {
	            //alert(json);
	            var obj = jQuery.parseJSON(json);
	            try { 
	                if (obj['status'] == "true") {
	                	$('#stage_seletion3').hide();
						//$('#acquittal_conviction').hide();
						$('#conviction_high').hide();
						
						if(obj['stage']=='stop')
						{
							window.location.href = base_url+"litigation/courtcase";
						}
						else
						{
							$('#stage'+obj['stage']).show();
						}
	                }
	                else if(obj['status'] == "false")
	                {
	                    if (obj['code'] == 0 || obj['code'] == 1) {
	                    	alert('Record not saved due to technical reasons!')
	                    	window.location.href = base_url+"litigation/courtcase";
	                    }
	                }
	            }
	            catch (e) {
	                alert('Exception while request..');
	            }
	        },
	        error: function () {
	            alert("error");
	        }
	    });
	}
});

$('#btnAdd19').click(function(e){
	var formData = new FormData($('#frmStage19')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/addstage19",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	//window.location.href = base_url+"litigation/courtcase";
                	$('#stage19').hide();
                	$('#stage20').show();
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not saved due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnAdd20').click(function(e){
	var formData = new FormData($('#frmStage20')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/addstage20",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	//window.location.href = base_url+"litigation/courtcase";
                	$('#stage20').hide();
                	$('#stage21').show();
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not saved due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

//Add Functions End

//Skip Functions Start
$('#btnSkip11').click(function(e){
	var formData = new FormData($('#frmStage11')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage11",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	$('#stage11').hide();
                	$('#stage_seletion1').show();
                	/*var stageno = obj['stage'];
                	var nextstageno = obj['stage']+1;
                	$('#stage'+stageno).hide();
                	$('#stage'+nextstageno).show();*/
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not skip due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnSkip12').click(function(e){
	var formData = new FormData($('#frmStage12')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage12",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	var stageno = obj['stage'];
                	var nextstageno = obj['stage']+1;
                	$('#stage'+stageno).hide();
                	$('#stage'+nextstageno).show();
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not skip due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnSkip13').click(function(e){
	var formData = new FormData($('#frmStage13')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage13",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	var stageno = obj['stage'];
                	var nextstageno = obj['stage']+1;
                	$('#stage'+stageno).hide();
                	$('#stage'+nextstageno).show();
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not skip due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnSkip14').click(function(e){
	var formData = new FormData($('#frmStage14')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage14",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	//window.location.href = base_url+"litigation/courtcase";
                	var stageno = obj['stage'];
                	var nextstageno = obj['stage']+1;
                	$('#stage'+stageno).hide();
                	$('#stage'+nextstageno).show();
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not skip due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnSkip15').click(function(e){
	var formData = new FormData($('#frmStage15')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage15",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	//window.location.href = base_url+"litigation/courtcase";
                	$('#stage15').hide();
                	$('#stage_seletion2').show();
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not skip due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnSkip16').click(function(e){
	var formData = new FormData($('#frmStage16')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage16",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	//window.location.href = base_url+"litigation/courtcase";
                	var stageno = obj['stage'];
                	var nextstageno = obj['stage']+1;
                	$('#stage'+stageno).hide();
                	$('#stage'+nextstageno).show();
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not skip due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnSkip17').click(function(e){
	var formData = new FormData($('#frmStage17')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage17",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	//window.location.href = base_url+"litigation/courtcase";
                	var stageno = obj['stage'];
                	var nextstageno = obj['stage']+1;
                	$('#stage'+stageno).hide();
                	$('#stage'+nextstageno).show();
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not skip due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnSkip18').click(function(e){
	var formData = new FormData($('#frmStage18')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage18",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	//window.location.href = base_url+"litigation/courtcase";
                	$('#stage18').hide();
                	$('#stage_seletion3').show();
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not skip due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnSkip19').click(function(e){
	var formData = new FormData($('#frmStage19')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage19",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	//window.location.href = base_url+"litigation/courtcase";
                	var stageno = obj['stage'];
                	var nextstageno = obj['stage']+1;
                	$('#stage'+stageno).hide();
                	$('#stage'+nextstageno).show();
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not skip due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnSkip20').click(function(e){
	var formData = new FormData($('#frmStage20')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage20",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	//window.location.href = base_url+"litigation/courtcase";
                	var stageno = obj['stage'];
                	var nextstageno = obj['stage']+1;
                	$('#stage'+stageno).hide();
                	$('#stage'+nextstageno).show();
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not skip due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});
//Skip Functions End

//Next Functions Start
/*$('#btnNext11').click(function(e){
	$('#stage11').hide();
	$('#stage12').show();
});*/

$('#btnNext11').click(function(e){
	var formData = new FormData($('#frmStage11')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/nextstage11",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	var litigation_courtcase_detail = obj['litigation_courtcase_detail'];
                	var stagenumber = obj['stage'];
                	
                	$('#stage11').hide();
                	
                	if(stagenumber==12)
                	{
                		$('#stage12').show();
                		
                		if(obj['next_status']==1)
                		{
							$('#btnNext12').show();	
							$('#btnSkip12').hide();
						}
                		else
                		{
                			$('#btnNext12').hide();
                			$('#btnSkip12').show();
                		}
                		
						$('#stage12_remark').val(litigation_courtcase_detail['appforjudg_remark']);
						
						if(litigation_courtcase_detail['appforjudg_date']!=null)
	                	{
	                		$("#stagedate12").hide();
	                		$('#rostagedate12').val(litigation_courtcase_detail['appforjudg_date']);
	                		$('#rostagedate12').show();
	                	}
	                	else
	                	{
	                		$('#rostagedate12').hide();
	                		$("#stagedate12").show();
	                	}
					}
					
					if(stagenumber==16)
                	{
                		$('#stage16').show();
                		
                		if(obj['next_status']==1)
                		{
							$('#btnNext16').show();	
							$('#btnSkip16').hide();
						}
                		else
                		{
                			$('#btnNext16').hide();
                			$('#btnSkip16').show();
                		}
                		
						$('#stage16_remark').val(litigation_courtcase_detail['appsescourt_remark']);
						
						if(litigation_courtcase_detail['appsescourt_date']!=null)
	                	{
	                		$("#stagedate16").hide();
	                		$('#rostagedate16').val(litigation_courtcase_detail['appsescourt_date']);
	                		$('#rostagedate16').show();
	                	}
	                	else
	                	{
	                		$('#rostagedate16').hide();
	                		$("#stagedate16").show();
	                	}
					}
					
					if(stagenumber=='stop')
                	{
						window.location.href = base_url+"litigation/courtcase";
					}
					
					if(stagenumber=='seletion1')
                	{
                		$('#stage_seletion1').show();
					}
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not found due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnNext12').click(function(e){
	$('#stage12').hide();
	$('#stage13').show();
});

$('#btnNext13').click(function(e){
	$('#stage13').hide();
	$('#stage14').show();
});

$('#btnNext14').click(function(e){
	$('#stage14').hide();
	$('#stage15').show();
});

$('#btnNext15').click(function(e){
	var formData = new FormData($('#frmStage15')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/nextstage15",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	var litigation_courtcase_detail = obj['litigation_courtcase_detail'];
                	var stagenumber = obj['stage'];
                	
                	$('#stage15').hide();
                	
                	if(stagenumber==16)
                	{
                		$('#stage16').show();
                		
                		if(obj['next_status']==1)
                		{
							$('#btnNext16').show();	
							$('#btnSkip16').hide();
						}
                		else
                		{
                			$('#btnNext16').hide();
                			$('#btnSkip16').show();
                		}
                		
						$('#stage16_remark').val(litigation_courtcase_detail['appsescourt_remark']);
						
						if(litigation_courtcase_detail['appsescourt_date']!=null)
	                	{
	                		$("#stagedate16").hide();
	                		$('#rostagedate16').val(litigation_courtcase_detail['appsescourt_date']);
	                		$('#rostagedate16').show();
	                	}
	                	else
	                	{
	                		$('#rostagedate16').hide();
	                		$("#stagedate16").show();
	                	}
					}
					
					if(stagenumber=='stop')
                	{
						window.location.href = base_url+"litigation/courtcase";
					}
					
					if(stagenumber=='seletion2')
                	{
                		$('#stage_seletion2').show();
					}
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not found due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});


$('#btnNext16').click(function(e){
	$('#stage16').hide();
	$('#stage17').show();
});

$('#btnNext17').click(function(e){
	$('#stage17').hide();
	$('#stage18').show();
});

$('#btnNext18').click(function(e){
	var formData = new FormData($('#frmStage18')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/nextstage18",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	var litigation_courtcase_detail = obj['litigation_courtcase_detail'];
                	var stagenumber = obj['stage'];
                	
                	$('#stage18').hide();
                	
                	if(stagenumber==19)
                	{
                		$('#stage19').show();
                		
                		if(obj['next_status']==1)
                		{
							$('#btnNext19').show();	
							$('#btnSkip19').hide();
						}
                		else
                		{
                			$('#btnNext19').hide();
                			$('#btnSkip19').show();
                		}
                		
						$('#stage19_remark').val(litigation_courtcase_detail['appjudghigh_remark']);
						
						if(litigation_courtcase_detail['appjudghigh_date']!=null)
	                	{
	                		$("#stagedate19").hide();
	                		$('#rostagedate19').val(litigation_courtcase_detail['appjudghigh_date']);
	                		$('#rostagedate19').show();
	                	}
	                	else
	                	{
	                		$('#rostagedate19').hide();
	                		$("#stagedate19").show();
	                	}
					}
					
					if(stagenumber==26)
                	{
                		$('#stage26').show();
                		
                		if(obj['next_status']==1)
                		{
							$('#btnNext26').show();	
							$('#btnSkip26').hide();
						}
                		else
                		{
                			$('#btnNext26').hide();
                			$('#btnSkip26').show();
                		}
                		
						$('#stage26_remark').val(litigation_courtcase_detail['applyhighcourt_remark']);
						
						if(litigation_courtcase_detail['applyhighcourt_date']!=null)
	                	{
	                		$("#stagedate26").hide();
	                		$('#rostagedate26').val(litigation_courtcase_detail['applyhighcourt_date']);
	                		$('#rostagedate26').show();
	                	}
	                	else
	                	{
	                		$('#rostagedate26').hide();
	                		$("#stagedate26").show();
	                	}
					}
					
					if(stagenumber=='stop')
                	{
						window.location.href = base_url+"litigation/courtcase";
					}
					
					if(stagenumber=='seletion3')
                	{
                		$('#stage_seletion3').show();
					}
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not found due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnNext19').click(function(e){
	$('#stage19').hide();
	$('#stage20').show();
});

$('#btnNext20').click(function(e){
	$('#stage20').hide();
	$('#stage21').show();
});
//Next Functions End

//Previous Functions Start
$('#btnPrev11').click(function(e){
	var formData = new FormData($('#frmStage11')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/previousstage",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	var litigation_courtcase_detail = obj['litigation_courtcase_detail'];
                	$('#stage10_remark').val(litigation_courtcase_detail['legalargu_remark']);
                	
                	$('#stage11').hide();
                	$('#stage10').show();
                	
                	$('#btnNext10').show();
                	$('#btnSkip10').hide();
                	
                	if(litigation_courtcase_detail['legalargu_date']!=null)
                	{
                		$("#stagedate10").hide();
                		$('#rostagedate10').val(litigation_courtcase_detail['legalargu_date']);
                		$('#rostagedate10').show();
                	}
                	else
                	{
                		$('#rostagedate10').hide();
                		$("#stagedate10").show();
                	}
                	
                	if(litigation_courtcase_detail['legalargu_remark']!='')
                    {
                		$("#stage10_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage10_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['legalargu_date'] != null && litigation_courtcase_detail['legalargu_remark'] != '')
                	{
                		$('#btnAdd10').hide();
                	}
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not found due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnPrev_seletion1').click(function(e){
	var formData = new FormData($('#frmStage_seletion1')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/previousstage",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	var litigation_courtcase_detail = obj['litigation_courtcase_detail'];
                	$('#stage11_remark').val(litigation_courtcase_detail['judgment_remark']);
                	
                	$('#stage_seletion1').hide();
            		$('#stage11').show();
                	
                	$('#btnNext11').show();
                	$('#btnSkip11').hide();
                	
                	if(litigation_courtcase_detail['judgment_date']!=null)
                	{
                		$("#stagedate11").hide();
                		$('#rostagedate11').val(litigation_courtcase_detail['judgment_date']);
                		$('#rostagedate11').show();
                	}
                	else
                	{
                		$('#rostagedate11').hide();
                		$("#stagedate11").show();
                	}
                	
                	if(litigation_courtcase_detail['judgment_remark']!='')
                    {
                		$("#stage11_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage11_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['judgment_date'] != null && litigation_courtcase_detail['judgment_remark'] != '')
                	{
                		$('#btnAdd11').hide();
                	}
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not found due to technical reasons!')
                    	window.location.href = base_url+"litigation/adjudication";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnPrev12').click(function(e){
	var formData = new FormData($('#frmStage12')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/previousstage",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	var litigation_courtcase_detail = obj['litigation_courtcase_detail'];
                	$('#stage11_remark').val(litigation_courtcase_detail['judgment_remark']);
                	
                	$('#stage12').hide();
                	$('#stage11').show();
                	
                	$('#btnNext11').show();
                	$('#btnSkip11').hide();
                	
                	if(litigation_courtcase_detail['judgment_date']!=null)
                	{
                		$("#stagedate11").hide();
                		$('#rostagedate11').val(litigation_courtcase_detail['judgment_date']);
                		$('#rostagedate11').show();
                	}
                	else
                	{
                		$('#rostagedate11').hide();
                		$("#stagedate11").show();
                	}
                	
                	if(litigation_courtcase_detail['judgment_remark']!='')
                    {
                		$("#stage11_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage11_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['judgment_date'] != null && litigation_courtcase_detail['judgment_remark'] != '')
                	{
                		$('#btnAdd11').hide();
                	}
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not found due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnPrev13').click(function(e){
	var formData = new FormData($('#frmStage13')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/previousstage",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	var litigation_courtcase_detail = obj['litigation_courtcase_detail'];
                	$('#stage12_remark').val(litigation_courtcase_detail['appforjudg_remark']);
                	
                	$('#stage13').hide();
                	$('#stage12').show();
                	
                	$('#btnNext12').show();
                	$('#btnSkip12').hide();
                	
                	if(litigation_courtcase_detail['appforjudg_date']!=null)
                	{
                		$("#stagedate12").hide();
                		$('#rostagedate12').val(litigation_courtcase_detail['appforjudg_date']);
                		$('#rostagedate12').show();
                	}
                	else
                	{
                		$('#rostagedate12').hide();
                		$("#stagedate12").show();
                	}
                	
                	if(litigation_courtcase_detail['appforjudg_remark']!='')
                    {
                		$("#stage12_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage12_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['appforjudg_date'] != null && litigation_courtcase_detail['appforjudg_remark'] != '')
                	{
                		$('#btnAdd12').hide();
                	}
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not found due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnPrev14').click(function(e){
	var formData = new FormData($('#frmStage14')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/previousstage",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	var litigation_courtcase_detail = obj['litigation_courtcase_detail'];
                	$('#stage13_remark').val(litigation_courtcase_detail['judgcopyrec_remark']);
                	
                	$('#stage14').hide();
                	$('#stage13').show();
                	
                	$('#btnNext13').show();
                	$('#btnSkip13').hide();
                	
                	if(litigation_courtcase_detail['judgcopyrec_date']!=null)
                	{
                		$("#stagedate13").hide();
                		$('#rostagedate13').val(litigation_courtcase_detail['judgcopyrec_date']);
                		$('#rostagedate13').show();
                	}
                	else
                	{
                		$('#rostagedate13').hide();
                		$("#stagedate13").show();
                	}
                	
                	if(litigation_courtcase_detail['judgcopyrec_remark']!='')
                    {
                		$("#stage13_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage13_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['judgcopyrec_date'] != null && litigation_courtcase_detail['judgcopyrec_remark'] != '')
                	{
                		$('#btnAdd13').hide();
                	}
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not found due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnPrev15').click(function(e){
	var formData = new FormData($('#frmStage15')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/previousstage",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	var litigation_courtcase_detail = obj['litigation_courtcase_detail'];
                	$('#stage14_remark').val(litigation_courtcase_detail['subtooffice_remark']);
                	
                	$('#stage15').hide();
                	$('#stage14').show();
                	
                	$('#btnNext14').show();
                	$('#btnSkip14').hide();
                	
                	if(litigation_courtcase_detail['subtooffice_date']!=null)
                	{
                		$("#stagedate14").hide();
                		$('#rostagedate14').val(litigation_courtcase_detail['subtooffice_date']);
                		$('#rostagedate14').show();
                	}
                	else
                	{
                		$('#rostagedate14').hide();
                		$("#stagedate14").show();
                	}
                	
                	if(litigation_courtcase_detail['subtooffice_remark']!='')
                    {
                		$("#stage14_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage14_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['subtooffice_date'] != null && litigation_courtcase_detail['subtooffice_remark'] != '')
                	{
                		$('#btnAdd14').hide();
                	}
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not found due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnPrev_seletion2').click(function(e){
	var formData = new FormData($('#frmStage_seletion2')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/previousstage",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	var litigation_courtcase_detail = obj['litigation_courtcase_detail'];
                	$('#stage15_remark').val(litigation_courtcase_detail['forwtoheadoff_remark']);
                	
                	$('#stage_seletion2').hide();
            		$('#stage15').show();
                	
                	$('#btnNext15').show();
                	$('#btnSkip15').hide();
                	
                	if(litigation_courtcase_detail['forwtoheadoff_date']!=null)
                	{
                		$("#stagedate15").hide();
                		$('#rostagedate15').val(litigation_courtcase_detail['forwtoheadoff_date']);
                		$('#rostagedate15').show();
                	}
                	else
                	{
                		$('#rostagedate15').hide();
                		$("#stagedate15").show();
                	}
                	
                	if(litigation_courtcase_detail['forwtoheadoff_remark']!='')
                    {
                		$("#stage15_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage15_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['forwtoheadoff_date'] != null && litigation_courtcase_detail['forwtoheadoff_remark'] != '')
                	{
                		$('#btnAdd15').hide();
                	}
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not found due to technical reasons!')
                    	window.location.href = base_url+"litigation/adjudication";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnPrev16').click(function(e){
	var formData = new FormData($('#frmStage16')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/previousstage",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	var litigation_courtcase_detail = obj['litigation_courtcase_detail'];
                	var judgment_isjudgacqorcon = litigation_courtcase_detail['judgment_isjudgacqorcon'];
                	var judgment_isfboappses = litigation_courtcase_detail['judgment_isfboappses'];
                	$('#stage16').hide();
                	
                	if(judgment_isjudgacqorcon==0)
                	{
            			$('#stage15_remark').val(litigation_courtcase_detail['forwtoheadoff_remark']);
	                	
	                	$('#stage15').show();
	                	
	                	$('#btnNext15').show();
	                	$('#btnSkip15').hide();
	                	
	                	if(litigation_courtcase_detail['forwtoheadoff_date']!=null)
	                	{
	                		$("#stagedate15").hide();
	                		$('#rostagedate15').val(litigation_courtcase_detail['forwtoheadoff_date']);
	                		$('#rostagedate15').show();
	                	}
	                	else
	                	{
	                		$('#rostagedate15').hide();
	                		$("#stagedate15").show();
	                	}
	                	
	                	if(litigation_courtcase_detail['forwtoheadoff_remark']!='')
	                    {
	                		$("#stage15_remark").attr("readonly","readonly");
	                    }
	                    else
	                    {
	                    	$("#stage15_remark").removeAttr("readonly","readonly");
				        }
	                	
	                	if(litigation_courtcase_detail['forwtoheadoff_date'] != null && litigation_courtcase_detail['forwtoheadoff_remark'] != '')
	                	{
	                		$('#btnAdd15').hide();
	                	}
                	}
                	
                	if(judgment_isjudgacqorcon==1 && judgment_isfboappses==1)
                	{
                		$('#stage11_remark').val(litigation_courtcase_detail['judgment_remark']);
                    	
                    	$('#stage11').show();
                    	
                    	$('#btnNext11').show();
                    	$('#btnSkip11').hide();
                    	
                    	if(litigation_courtcase_detail['judgment_date']!=null)
                    	{
                    		$("#stagedate11").hide();
                    		$('#rostagedate11').val(litigation_courtcase_detail['judgment_date']);
                    		$('#rostagedate11').show();
                    	}
                    	else
                    	{
                    		$('#rostagedate11').hide();
                    		$("#stagedate11").show();
                    	}
                    	
                    	if(litigation_courtcase_detail['judgment_remark']!='')
                        {
                    		$("#stage11_remark").attr("readonly","readonly");
                        }
                        else
                        {
                        	$("#stage11_remark").removeAttr("readonly","readonly");
    			        }
                    	
                    	if(litigation_courtcase_detail['judgment_date'] != null && litigation_courtcase_detail['judgment_remark'] != '')
                    	{
                    		$('#btnAdd11').hide();
                    	}
                	}
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not found due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnPrev17').click(function(e){
	var formData = new FormData($('#frmStage17')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/previousstage",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	var litigation_courtcase_detail = obj['litigation_courtcase_detail'];
                	$('#stage16_remark').val(litigation_courtcase_detail['appsescourt_remark']);
                	
                	$('#stage17').hide();
                	$('#stage16').show();
                	
                	$('#btnNext16').show();
                	$('#btnSkip16').hide();
                	
                	if(litigation_courtcase_detail['appsescourt_date']!=null)
                	{
                		$("#stagedate16").hide();
                		$('#rostagedate16').val(litigation_courtcase_detail['appsescourt_date']);
                		$('#rostagedate16').show();
                	}
                	else
                	{
                		$('#rostagedate16').hide();
                		$("#stagedate16").show();
                	}
                	
                	if(litigation_courtcase_detail['appsescourt_remark']!='')
                    {
                		$("#stage16_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage16_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['appsescourt_date'] != null && litigation_courtcase_detail['appsescourt_remark'] != '')
                	{
                		$('#btnAdd16').hide();
                	}
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not found due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnPrev18').click(function(e){
	var formData = new FormData($('#frmStage18')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/previousstage",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	var litigation_courtcase_detail = obj['litigation_courtcase_detail'];
                	$('#stage17_remark').val(litigation_courtcase_detail['legalarguses_remark']);
                	
                	$('#stage18').hide();
                	$('#stage17').show();
                	
                	$('#btnNext17').show();
                	$('#btnSkip17').hide();
                	
                	if(litigation_courtcase_detail['legalarguses_date']!=null)
                	{
                		$("#stagedate17").hide();
                		$('#rostagedate17').val(litigation_courtcase_detail['legalarguses_date']);
                		$('#rostagedate17').show();
                	}
                	else
                	{
                		$('#rostagedate17').hide();
                		$("#stagedate17").show();
                	}
                	
                	if(litigation_courtcase_detail['legalarguses_remark']!='')
                    {
                		$("#stage17_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage17_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['legalarguses_date'] != null && litigation_courtcase_detail['legalarguses_remark'] != '')
                	{
                		$('#btnAdd17').hide();
                	}
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not found due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnPrev_seletion3').click(function(e){
	var formData = new FormData($('#frmStage_seletion3')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/previousstage",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	var litigation_courtcase_detail = obj['litigation_courtcase_detail'];
                	$('#stage18_remark').val(litigation_courtcase_detail['judgmentses_remark']);
                	
                	$('#stage_seletion3').hide();
            		$('#stage18').show();
                	
                	$('#btnNext18').show();
                	$('#btnSkip18').hide();
                	
                	if(litigation_courtcase_detail['judgmentses_date']!=null)
                	{
                		$("#stagedate18").hide();
                		$('#rostagedate18').val(litigation_courtcase_detail['judgmentses_date']);
                		$('#rostagedate18').show();
                	}
                	else
                	{
                		$('#rostagedate18').hide();
                		$("#stagedate18").show();
                	}
                	
                	if(litigation_courtcase_detail['judgmentses_remark']!='')
                    {
                		$("#stage18_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage18_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['judgmentses_date'] != null && litigation_courtcase_detail['judgmentses_remark'] != '')
                	{
                		$('#btnAdd18').hide();
                	}
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not found due to technical reasons!')
                    	window.location.href = base_url+"litigation/adjudication";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnPrev19').click(function(e){
	var formData = new FormData($('#frmStage19')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/previousstage",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	var litigation_courtcase_detail = obj['litigation_courtcase_detail'];
                	$('#stage18_remark').val(litigation_courtcase_detail['judgmentses_remark']);
                	
                	$('#stage19').hide();
                	$('#stage18').show();
                	
                	$('#btnNext18').show();
                	$('#btnSkip18').hide();
                	
                	if(litigation_courtcase_detail['judgmentses_date']!=null)
                	{
                		$("#stagedate18").hide();
                		$('#rostagedate18').val(litigation_courtcase_detail['judgmentses_date']);
                		$('#rostagedate18').show();
                	}
                	else
                	{
                		$('#rostagedate18').hide();
                		$("#stagedate18").show();
                	}
                	
                	if(litigation_courtcase_detail['judgmentses_remark']!='')
                    {
                		$("#stage18_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage18_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['judgmentses_date'] != null && litigation_courtcase_detail['judgmentses_remark'] != '')
                	{
                		$('#btnAdd18').hide();
                	}
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not found due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});

$('#btnPrev20').click(function(e){
	var formData = new FormData($('#frmStage20')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/previousstage",
         data: formData,
         cache: false,
         async: false,
         contentType: false,
         processData: false,
         success: function (json) {
            //alert(json);
            var obj = jQuery.parseJSON(json);
            try { 
                if (obj['status'] == "true") {
                	var litigation_courtcase_detail = obj['litigation_courtcase_detail'];
                	$('#stage19_remark').val(litigation_courtcase_detail['appjudghigh_remark']);
                	
                	$('#stage20').hide();
                	$('#stage19').show();
                	
                	$('#btnNext19').show();
                	$('#btnSkip19').hide();
                	
                	if(litigation_courtcase_detail['appjudghigh_date']!=null)
                	{
                		$("#stagedate19").hide();
                		$('#rostagedate19').val(litigation_courtcase_detail['appjudghigh_date']);
                		$('#rostagedate19').show();
                	}
                	else
                	{
                		$('#rostagedate19').hide();
                		$("#stagedate19").show();
                	}
                	
                	if(litigation_courtcase_detail['appjudghigh_remark']!='')
                    {
                		$("#stage19_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage19_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['appjudghigh_date'] != null && litigation_courtcase_detail['appjudghigh_remark'] != '')
                	{
                		$('#btnAdd19').hide();
                	}
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not found due to technical reasons!')
                    	window.location.href = base_url+"litigation/courtcase";
                    }
                }
            }
            catch (e) {
                alert('Exception while request..');
            }
        },
        error: function () {
            alert("error");
        }
    });
});
//Previous Functions End
$('#order_acquital').click(function(e){
	$('#conviction').hide();
});

$('#order_convection').click(function(e){
	$('#conviction').show();
});

$('#order_acquital_high').click(function(e){
	$('#conviction_high').hide();
});

$('#order_convection_high').click(function(e){
	$('#conviction_high').show();
});