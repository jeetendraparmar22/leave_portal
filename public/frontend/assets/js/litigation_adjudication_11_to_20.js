$(document).ready(function()
{
	$('#stage_seletion2').hide();
	
	// Read Only Date Field Hidden When Page Load
	$('#rostagedate11').hide();
	$('#rostagedate12').hide();
	$('#rostagedate13').hide();
	$('#rostagedate14').hide();
	$('#rostagedate15').hide();
	$('#rostagedate16').hide();
	$('#rostagedate17').hide();
	$('#rostagedate18').hide();

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
    }
   
	// Show Particular Stage When Page Load   
	//$('#stage'+stageno).show();
	/*for(var i=counter_11_to_20; i <= total_stage_11_to_20; i++)
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
	//$('#stage11_date').val(today);
	
	// Date Picker
	$('#data_11 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });

	//$('#stage12_date').val(today);
	$('#data_12 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });

	//$('#stage13_date').val(today);
	$('#data_13 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });

	//$('#stage14_date').val(today);
	$('#data_14 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });
	
	//$('#stage15_date').val(today);
	$('#data_15 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });
	
	//$('#stage16_date').val(today);
	$('#data_16 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });
	
	//$('#stage17_date').val(today);
	$('#data_17 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });
	
	//$('#stage18_date').val(today);
	$('#data_18 .input-group.date').datepicker({
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
         url: base_url+"litigation/adjudication/addstage11",
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
                	$('#stage12').show();
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not saved due to technical reasons!')
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

$('#btnAdd12').click(function(e){
	var formData = new FormData($('#frmStage12')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/addstage12",
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
                	$('#stage12').hide();
                	$('#stage13').show();
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not saved due to technical reasons!')
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

$('#btnAdd13').click(function(e){
	var formData = new FormData($('#frmStage13')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/addstage13",
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
                	$('#stage13').hide();
                	//$('#stage14').show();
                	if(obj['stage']=='stop')
					{
						window.location.href = base_url+"litigation/adjudication";
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

$('#btnAdd_seletion2').click(function(e){
	var result1=validate_radio('order_acquital_convection_tribunal');
	var result2=validate_radio('department_apply_tribunal_high');
	var result3=validate_radio('fbo_apply_high');
	
	var checkboxval=$("input[name='order_acquital_convection_tribunal']:checked").val();
	
	if(result1==false)
	{
		$('#errormsg_orderacqconvtrib').show();
		
		document.getElementById('errormsg_orderacqconvtrib').innerHTML="Select Order is Acquittal or Conviction!";
		//alert('Select Order is Acquittal or Conviction!');
		return false;	
	}
	else if(result1==true && checkboxval==0 && result2==false)
	{
		$('#errormsg_orderacqconvtrib').hide();
		$('#errormsg_depapptribhigh').show();
		
		document.getElementById('errormsg_depapptribhigh').innerHTML="Select Department want to apply for high court!";
		//alert('Select Department want to apply for high court!');
		return false;
	}
	else if(result1==true && checkboxval==1 && result3==false)
	{
		$('#errormsg_orderacqconvtrib').hide();
		$('#errormsg_fboapphigh').show();
		
		document.getElementById('errormsg_fboapphigh').innerHTML="Select FBO want to apply for high court!";
		//alert('Select FBO want to apply for high court!');
		return false;
	}
	else
	{
		var formData = new FormData($('#frmStage_seletion2')[0]);
	    $.ajax({
	         type: "POST",
	         url: base_url+"litigation/adjudication/addstageseletion2",
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
						$('#order_acquital_convection_tribunal').hide();
						$('#acquittal').hide();
						$('#conviction').hide();
						
						if(obj['stage']=='stop')
						{
							window.location.href = base_url+"litigation/adjudication";
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
	}
});

$('#btnAdd14').click(function(e){
	var result1=onlynumeric('stage14_fine_amt_fbo_high');
	var result2=onlynumeric('stage14_fine_amt_dist_high');
	var result3=onlynumeric('stage14_fine_amt_manu_high');
	
	if(result1==true && result2==true && result3==true)
	{
		var formData = new FormData($('#frmStage14')[0]);
	    $.ajax({
	         type: "POST",
	         url: base_url+"litigation/adjudication/addstage14",
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
	                	/*$('#stage14').hide();
	                	$('#stage15').show();*/
	                	window.location.href = base_url+"litigation/adjudication";
	                }
	                else if(obj['status'] == "false")
	                {
	                    if (obj['code'] == 0 || obj['code'] == 1) {
	                    	alert('Record not saved due to technical reasons!')
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
	}
	else
	{
		if(result1==false)
		{
			$('#errormsg_fineamtfbohigh').show();
			$('#errormsg_fineamtdisthigh').hide();
			$('#errormsg_fineamtmanuhigh').hide();
			
			document.getElementById('errormsg_fineamtfbohigh').innerHTML="Accept only Digit";
   			document.getElementById('stage14_fine_amt_fbo_high').focus();
   			return false;
		}
		
		if(result2==false)
		{
			$('#errormsg_fineamtdisthigh').show();
			$('#errormsg_fineamtfbohigh').hide();
			$('#errormsg_fineamtmanuhigh').hide();
			
			document.getElementById('errormsg_fineamtdisthigh').innerHTML="Accept only Digit";
   			document.getElementById('stage14_fine_amt_dist_high').focus();
   			return false;
		}
		
		if(result3==false)
		{
			$('#errormsg_fineamtmanuhigh').show();
			$('#errormsg_fineamtfbohigh').hide();
			$('#errormsg_fineamtdisthigh').hide();
			
			document.getElementById('errormsg_fineamtmanuhigh').innerHTML="Accept only Digit";
   			document.getElementById('stage14_fine_amt_manu_high').focus();
   			return false;
		}
	}
});

$('#btnAdd15').click(function(e){
	var formData = new FormData($('#frmStage15')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/addstage15",
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
                	$('#stage15').hide();
                	$('#stage16').show();
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not saved due to technical reasons!')
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

$('#btnAdd16').click(function(e){
	var formData = new FormData($('#frmStage16')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/addstage16",
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
                	$('#stage16').hide();
                	$('#stage17').show();
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not saved due to technical reasons!')
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

$('#btnAdd17').click(function(e){
	var formData = new FormData($('#frmStage17')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/addstage17",
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
                	$('#stage17').hide();
                	$('#stage18').show();
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not saved due to technical reasons!')
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

$('#btnAdd18').click(function(e){
	var formData = new FormData($('#frmStage18')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/addstage18",
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
                	window.location.href = base_url+"litigation/adjudication";
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not saved due to technical reasons!')
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
//Add Functions End

//Skip Functions Start
$('#btnSkip11').click(function(e){
	var formData = new FormData($('#frmStage11')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/skipstage11",
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

$('#btnSkip12').click(function(e){
	var formData = new FormData($('#frmStage12')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/skipstage12",
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

$('#btnSkip13').click(function(e){
	var formData = new FormData($('#frmStage13')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/skipstage13",
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
                	/*var stageno = obj['stage'];
                	var nextstageno = obj['stage']+1;
                	$('#stage'+stageno).hide();
                	$('#stage'+nextstageno).show();*/
                	
                	$('#stage13').hide();
                	
                	if(obj['stage']=='stop')
					{
						window.location.href = base_url+"litigation/adjudication";
					}
					else
					{
						$('#stage'+obj['stage']).show();
					}
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not skip due to technical reasons!')
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

$('#btnSkip14').click(function(e){
	var formData = new FormData($('#frmStage14')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/skipstage14",
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
                	/*var stageno = obj['stage'];
                	var nextstageno = obj['stage']+1;
                	$('#stage'+stageno).hide();
                	$('#stage'+nextstageno).show();*/
                	window.location.href = base_url+"litigation/adjudication";
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not skip due to technical reasons!')
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

$('#btnSkip15').click(function(e){
	var formData = new FormData($('#frmStage15')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/skipstage15",
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

$('#btnSkip16').click(function(e){
	var formData = new FormData($('#frmStage16')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/skipstage16",
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

$('#btnSkip17').click(function(e){
	var formData = new FormData($('#frmStage17')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/skipstage17",
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

$('#btnSkip18').click(function(e){
	var formData = new FormData($('#frmStage18')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/skipstage18",
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
                	window.location.href = base_url+"litigation/adjudication";
                }
                else if(obj['status'] == "false")
                {
                    if (obj['code'] == 0 || obj['code'] == 1) {
                    	alert('Record not skip due to technical reasons!')
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
//Skip Functions End

//Next Functions Start
$('#btnNext11').click(function(e){
	$('#stage11').hide();
	$('#stage12').show();
});

$('#btnNext12').click(function(e){
	$('#stage12').hide();
	$('#stage13').show();
});

$('#btnNext13').click(function(e){
	/*$('#stage13').hide();
	$('#stage14').show();*/
	var formData = new FormData($('#frmStage8')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/nextstage13",
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
                	var litigation_adjudication_detail = obj['litigation_adjudication_detail'];
                	var stagenumber = obj['stage'];
                	
                	$('#stage13').hide();
                	
                	if(stagenumber==13)
                	{
                		$('#stage13').show();
                		
                		if(obj['next_status']==1)
                		{
							$('#btnNext13').show();	
							$('#btnSkip13').hide();
						}
                		else
                		{
                			$('#btnNext13').hide();
                			$('#btnSkip13').show();
                		}
                		
						$('#stage13_remark').val(litigation_adjudication_detail['orderrectrib_remark']);
						
						if(litigation_adjudication_detail['orderrectrib_date']!=null)
	                	{
	                		$("#stagedate13").hide();
	                		$('#rostagedate13').val(litigation_adjudication_detail['orderrectrib_date']);
	                		$('#rostagedate13').show();
	                	}
	                	else
	                	{
	                		$('#rostagedate13').hide();
	                		$("#stagedate13").show();
	                	}
	                	
	                	if(litigation_adjudication_detail['orderrectrib_date'] != null && litigation_adjudication_detail['orderrectrib_remark'] != '')
		                {
		                	window.location.href = base_url+"litigation/adjudication";
		                }
					}
					
					if(stagenumber==14)
                	{
                		$('#stage14').show();
                		
                		if(obj['next_status']==1)
                		{
							$('#btnNext14').show();	
							$('#btnSkip14').hide();
						}
                		else
                		{
                			$('#btnNext14').hide();
                			$('#btnSkip14').show();
                		}
                		
						$('#stage14_remark').val(litigation_adjudication_detail['isfboapphighno_remark']);
						
						if(litigation_adjudication_detail['isfboapphighno_date']!=null)
	                	{
	                		$("#stagedate14").hide();
	                		$('#rostagedate14').val(litigation_adjudication_detail['isfboapphighno_date']);
	                		$('#rostagedate14').show();
	                	}
	                	else
	                	{
	                		$('#rostagedate14').hide();
	                		$("#stagedate14").show();
	                	}
					}
					
					if(stagenumber==15)
                	{
                		$('#stage15').show();
                		
                		if(obj['next_status']==1)
                		{
							$('#btnNext15').show();	
							$('#btnSkip15').hide();
						}
                		else
                		{
                			$('#btnNext15').hide();
                			$('#btnSkip15').show();
                		}
                		
						$('#stage15_remark').val(litigation_adjudication_detail['apphighcourt_remark']);
						
						if(litigation_adjudication_detail['apphighcourt_date']!=null)
	                	{
	                		$("#stagedate15").hide();
	                		$('#rostagedate15').val(litigation_adjudication_detail['apphighcourt_date']);
	                		$('#rostagedate15').show();
	                	}
	                	else
	                	{
	                		$('#rostagedate15').hide();
	                		$("#stagedate15").show();
	                	}
					}
					
					if(stagenumber=='seletion2')
                	{
                		$('#stage_seletion2').show();
                		
                		/*$('#btnNext9').hide();
                		$('#btnSkip9').hide();*/
                		
						/*$('#stage9_remark').val(litigation_adjudication_detail['isfboapptrino_remark']);
						
						if(litigation_adjudication_detail['isfboapptrino_date']!=null)
	                	{
	                		$("#stagedate7").hide();
	                		$('#rostagedate7').val(litigation_adjudication_detail['isfboapptrino_date']);
	                		$('#rostagedate7').show();
	                	}
	                	else
	                	{
	                		$('#rostagedate7').hide();
	                		$("#stagedate7").show();
	                	}*/
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

$('#btnNext14').click(function(e){
	$('#stage14').hide();
	//$('#stage15').show();
	window.location.href = base_url+"litigation/adjudication";
});

$('#btnNext15').click(function(e){
	$('#stage15').hide();
	$('#stage16').show();
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
	window.location.href = base_url+"litigation/adjudication";
});
//Next Functions End

//Previous Functions Start
$('#btnPrev11').click(function(e){
	var formData = new FormData($('#frmStage11')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/previousstage",
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
                	var litigation_adjudication_detail = obj['litigation_adjudication_detail'];
                	$('#stage10_remark').val(litigation_adjudication_detail['apptotrib_remark']);
                	
                	$('#stage11').hide();
                	$('#stage10').show();
                	
                	$('#btnNext10').show();
                	$('#btnSkip10').hide();
                	
                	if(litigation_adjudication_detail['apptotrib_date']!=null)
                	{
                		$("#stagedate10").hide();
                		$('#rostagedate10').val(litigation_adjudication_detail['apptotrib_date']);
                		$('#rostagedate10').show();
                	}
                	else
                	{
                		$('#rostagedate10').hide();
                		$("#stagedate10").show();
                	}
                	
                	if(litigation_adjudication_detail['apptotrib_remark']!='')
                	{
                		$("#stage10_remark").attr("readonly","readonly");
                	}
                	else
                	{
						$("#stage10_remark").removeAttr("readonly","readonly");
					}
					
					if(litigation_adjudication_detail['apptotrib_date'] != null && litigation_adjudication_detail['apptotrib_remark'] != '')
	                {
	                	$('#btnAdd10').hide();
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
         url: base_url+"litigation/adjudication/previousstage",
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
                	var litigation_adjudication_detail = obj['litigation_adjudication_detail'];
                	$('#stage11_remark').val(litigation_adjudication_detail['legalargutrib_remark']);
                	
                	$('#stage12').hide();
                	$('#stage11').show();
                	
                	$('#btnNext11').show();
                	$('#btnSkip11').hide();
                	
                	if(litigation_adjudication_detail['legalargutrib_date']!=null)
                	{
                		$("#stagedate11").hide();
                		$('#rostagedate11').val(litigation_adjudication_detail['legalargutrib_date']);
                		$('#rostagedate11').show();
                	}
                	else
                	{
                		$('#rostagedate11').hide();
                		$("#stagedate11").show();
                	}
                	
                	if(litigation_adjudication_detail['legalargutrib_remark']!='')
                	{
                		$("#stage11_remark").attr("readonly","readonly");
                	}
                	else
                	{
						$("#stage11_remark").removeAttr("readonly","readonly");
					}
					
					if(litigation_adjudication_detail['legalargutrib_date'] != null && litigation_adjudication_detail['legalargutrib_remark'] != '')
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

$('#btnPrev13').click(function(e){
	var formData = new FormData($('#frmStage13')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/previousstage",
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
                	var litigation_adjudication_detail = obj['litigation_adjudication_detail'];
                	$('#stage12_remark').val(litigation_adjudication_detail['orderdatetrib_remark']);
                	
                	$('#stage13').hide();
                	$('#stage12').show();
                	
                	$('#btnNext12').show();
                	$('#btnSkip12').hide();
                	
                	if(litigation_adjudication_detail['orderdatetrib_date']!=null)
                	{
                		$("#stagedate12").hide();
                		$('#rostagedate12').val(litigation_adjudication_detail['orderdatetrib_date']);
                		$('#rostagedate12').show();
                	}
                	else
                	{
                		$('#rostagedate12').hide();
                		$("#stagedate12").show();
                	}
                	
                	if(litigation_adjudication_detail['orderdatetrib_remark']!='')
                	{
                		$("#stage12_remark").attr("readonly","readonly");
                	}
                	else
                	{
						$("#stage12_remark").removeAttr("readonly","readonly");
					}
					
					if(litigation_adjudication_detail['orderdatetrib_date'] != null && litigation_adjudication_detail['orderdatetrib_remark'] != '')
	                {
	                	$('#btnAdd12').hide();
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

$('#btnPrev_seletion2').click(function(e){
	var formData = new FormData($('#frmStage_seletion2')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/previousstage",
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
                	var litigation_adjudication_detail = obj['litigation_adjudication_detail'];
                	$('#stage13_remark').val(litigation_adjudication_detail['orderrectrib_remark']);
                	
                	$('#stage_seletion2').hide();
                	$('#stage13').show();
                	
                	$('#btnNext13').show();
                	$('#btnSkip13').hide();
                	
                	if(litigation_adjudication_detail['orderrectrib_date']!=null)
                	{
                		$("#stagedate13").hide();
                		$('#rostagedate13').val(litigation_adjudication_detail['orderrectrib_date']);
                		$('#rostagedate13').show();
                	}
                	else
                	{
                		$('#rostagedate13').hide();
                		$("#stagedate13").show();
                	}
                	
                	if(litigation_adjudication_detail['orderrectrib_date'] != null && litigation_adjudication_detail['orderrectrib_remark'] != '')
	                {
	                	$('#btnAdd13').hide();
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

$('#btnPrev14').click(function(e){
	var formData = new FormData($('#frmStage14')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/previousstage",
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
                	var litigation_adjudication_detail = obj['litigation_adjudication_detail'];
                	$('#stage13_remark').val(litigation_adjudication_detail['orderrectrib_remark']);
                	
                	$('#stage14').hide();
                	$('#stage13').show();
                	
                	$('#btnNext13').show();
                	$('#btnSkip13').hide();
                	
                	if(litigation_adjudication_detail['orderrectrib_date']!=null)
                	{
                		$("#stagedate13").hide();
                		$('#rostagedate13').val(litigation_adjudication_detail['orderrectrib_date']);
                		$('#rostagedate13').show();
                	}
                	else
                	{
                		$('#rostagedate13').hide();
                		$("#stagedate13").show();
                	}
                	
                	if(litigation_adjudication_detail['orderrectrib_remark']!='')
                	{
                		$("#stage13_remark").attr("readonly","readonly");
                	}
                	else
                	{
						$("#stage13_remark").removeAttr("readonly","readonly");
					}
					
					if(litigation_adjudication_detail['orderrectrib_date'] != null && litigation_adjudication_detail['orderrectrib_remark'] != '')
	                {
	                	$('#btnAdd13').hide();
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

$('#btnPrev15').click(function(e){
	var formData = new FormData($('#frmStage15')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/previousstage",
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
                	/*var litigation_adjudication_detail = obj['litigation_adjudication_detail'];
                	$('#stage14_remark').val(litigation_adjudication_detail['isfboapphighno_remark']);
                	
                	$('#stage15').hide();
                	$('#stage14').show();
                	
                	$('#btnNext14').show();
                	$('#btnSkip14').hide();
                	
                	$('#errormsg_fineamtfbohigh').hide();
					$('#errormsg_fineamtdisthigh').hide();
					$('#errormsg_fineamtmanuhigh').hide();
					
                	if(litigation_adjudication_detail['isfboapphighno_date']!=null)
                	{
                		$("#stagedate14").hide();
                		$('#rostagedate14').val(litigation_adjudication_detail['isfboapphighno_date']);
                		$('#rostagedate14').show();
                	}
                	else
                	{
                		$('#rostagedate14').hide();
                		$("#stagedate14").show();
                	}*/
                	var litigation_adjudication_detail = obj['litigation_adjudication_detail'];
                	$('#stage13_remark').val(litigation_adjudication_detail['orderrectrib_remark']);
                	
                	$('#stage15').hide();
                	$('#stage13').show();
                	
                	$('#btnNext13').show();
                	$('#btnSkip13').hide();
                	
                	if(litigation_adjudication_detail['orderrectrib_date']!=null)
                	{
                		$("#stagedate13").hide();
                		$('#rostagedate13').val(litigation_adjudication_detail['orderrectrib_date']);
                		$('#rostagedate13').show();
                	}
                	else
                	{
                		$('#rostagedate13').hide();
                		$("#stagedate13").show();
                	}
                	
                	if(litigation_adjudication_detail['orderrectrib_remark']!='')
                	{
                		$("#stage13_remark").attr("readonly","readonly");
                	}
                	else
                	{
						$("#stage13_remark").removeAttr("readonly","readonly");
					}
					
					if(litigation_adjudication_detail['orderrectrib_date'] != null && litigation_adjudication_detail['orderrectrib_remark'] != '')
	                {
	                	$('#btnAdd13').hide();
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
         url: base_url+"litigation/adjudication/previousstage",
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
                	var litigation_adjudication_detail = obj['litigation_adjudication_detail'];
                	$('#stage15_remark').val(litigation_adjudication_detail['apphighcourt_remark']);
                	
                	$('#stage16').hide();
                	$('#stage15').show();
                	
                	$('#btnNext15').show();
                	$('#btnSkip15').hide();
                	
                	if(litigation_adjudication_detail['apphighcourt_date']!=null)
                	{
                		$("#stagedate15").hide();
                		$('#rostagedate15').val(litigation_adjudication_detail['apphighcourt_date']);
                		$('#rostagedate15').show();
                	}
                	else
                	{
                		$('#rostagedate15').hide();
                		$("#stagedate15").show();
                	}
                	
                	if(litigation_adjudication_detail['apphighcourt_remark']!='')
                	{
                		$("#stage15_remark").attr("readonly","readonly");
                	}
                	else
                	{
						$("#stage15_remark").removeAttr("readonly","readonly");
					}
					
					if(litigation_adjudication_detail['apphighcourt_date'] != null && litigation_adjudication_detail['apphighcourt_remark'] != '')
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

$('#btnPrev17').click(function(e){
	var formData = new FormData($('#frmStage17')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/previousstage",
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
                	var litigation_adjudication_detail = obj['litigation_adjudication_detail'];
                	$('#stage16_remark').val(litigation_adjudication_detail['legalarguhigh_remark']);
                	
                	$('#stage17').hide();
                	$('#stage16').show();
                	
                	$('#btnNext16').show();
                	$('#btnSkip16').hide();
                	
                	if(litigation_adjudication_detail['legalarguhigh_date']!=null)
                	{
                		$("#stagedate16").hide();
                		$('#rostagedate16').val(litigation_adjudication_detail['legalarguhigh_date']);
                		$('#rostagedate16').show();
                	}
                	else
                	{
                		$('#rostagedate16').hide();
                		$("#stagedate16").show();
                	}
                	
                	if(litigation_adjudication_detail['legalarguhigh_remark']!='')
                	{
                		$("#stage16_remark").attr("readonly","readonly");
                	}
                	else
                	{
						$("#stage16_remark").removeAttr("readonly","readonly");
					}
					
					if(litigation_adjudication_detail['legalarguhigh_date'] != null && litigation_adjudication_detail['legalarguhigh_remark'] != '')
	                {
	                	$('#btnAdd16').hide();
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

$('#btnPrev18').click(function(e){
	var formData = new FormData($('#frmStage18')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/previousstage",
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
                	var litigation_adjudication_detail = obj['litigation_adjudication_detail'];
                	$('#stage17_remark').val(litigation_adjudication_detail['dateorderhigh_remark']);
                	
                	$('#stage18').hide();
                	$('#stage17').show();
                	
                	$('#btnNext17').show();
                	$('#btnSkip17').hide();
                	
                	if(litigation_adjudication_detail['dateorderhigh_date']!=null)
                	{
                		$("#stagedate17").hide();
                		$('#rostagedate17').val(litigation_adjudication_detail['dateorderhigh_date']);
                		$('#rostagedate17').show();
                	}
                	else
                	{
                		$('#rostagedate17').hide();
                		$("#stagedate17").show();
                	}
                	
                	if(litigation_adjudication_detail['dateorderhigh_remark']!='')
                	{
                		$("#stage17_remark").attr("readonly","readonly");
                	}
                	else
                	{
						$("#stage17_remark").removeAttr("readonly","readonly");
					}
					
					if(litigation_adjudication_detail['dateorderhigh_date'] != null && litigation_adjudication_detail['dateorderhigh_remark'] != '')
	                {
	                	$('#btnAdd17').hide();
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
//Previous Functions End

$('#order_acquital_tribunal').click(function(e){
	$('#acquittal_high').show();
	$('#conviction_high').hide();
});

$('#order_convection_tribunal').click(function(e){
	$('#conviction_high').show();
	$('#acquittal_high').hide();
});
