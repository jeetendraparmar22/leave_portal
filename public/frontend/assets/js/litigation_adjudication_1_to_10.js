$(document).ready(function()
{
	//Order is acquittal or conviction
	$('#stage_seletion1').hide();
	/*$('#acquittal').hide();
	$('#conviction').hide();*/
	
	// Read Only Date Field Hidden When Page Load
	$('#rostagedate1').hide();
	$('#rostagedate2').hide();
	$('#rostagedate3').hide();
	$('#rostagedate4').hide();
	$('#rostagedate5').hide();
	$('#rostagedate6').hide();
	$('#rostagedate7').hide();
	$('#rostagedate8').hide();
	$('#rostagedate9').hide();
	$('#rostagedate10').hide();

	//IF Date exit show in Readonly
	if(stagedateicon1!='')
	{
		$("#stagedate1").hide();
		$('#rostagedate1').show();
	}
	if(stagedateicon2!='')
	{
		$("#stagedate2").hide();
		$('#rostagedate2').show();
	}
	if(stagedateicon3!='')
	{
		$("#stagedate3").hide();
		$('#rostagedate3').show();
	}
	if(stagedateicon4!='')
	{
		$("#stagedate4").hide();
		$('#rostagedate4').show();
	}
	if(stagedateicon5!='')
	{
		$("#stagedate5").hide();
		$('#rostagedate5').show();
	}
	if(stagedateicon6!='')
	{
		$("#stagedate6").hide();
		$('#rostagedate6').show();
	}
	if(stagedateicon7!='')
	{
		$("#stagedate7").hide();
		$('#rostagedate7').show();
	}
	if(stagedateicon8!='')
	{
		$("#stagedate8").hide();
		$('#rostagedate8').show();
	}
	if(stagedateicon9!='')
	{
		$("#stagedate9").hide();
		$('#rostagedate9').show();
	}
	if(stagedateicon10!='')
	{
		$("#stagedate10").hide();
		$('#rostagedate10').show();
	}

	//Skip button hide and Next button show
    if(next_status == 1)
    {
    	$('#btnSkip1').hide();
    	$('#btnNext1').show();

    	$('#btnSkip2').hide();
    	$('#btnNext2').show();

    	$('#btnSkip3').hide();
    	$('#btnNext3').show();

    	$('#btnSkip4').hide();
    	$('#btnNext4').show();
    	
    	$('#btnSkip5').hide();
    	$('#btnNext5').show();
    	
    	$('#btnSkip6').hide();
    	$('#btnNext6').show();
    	
    	$('#btnSkip7').hide();
    	$('#btnNext7').show();
    	
    	$('#btnSkip8').hide();
    	$('#btnNext8').show();
    	
    	$('#btnSkip9').hide();
    	$('#btnNext9').show();
    	
    	$('#btnSkip10').hide();
    	$('#btnNext10').show();    	
    }
    else
    {
    	$('#btnSkip1').show();
    	$('#btnNext1').hide();

    	$('#btnSkip2').show();
    	$('#btnNext2').hide();

    	$('#btnSkip3').show();
    	$('#btnNext3').hide();

    	$('#btnSkip4').show();
    	$('#btnNext4').hide();
    	
    	$('#btnSkip5').show();
    	$('#btnNext5').hide();
    	
    	$('#btnSkip6').show();
    	$('#btnNext6').hide();
    	
    	$('#btnSkip7').show();
    	$('#btnNext7').hide();
    	
    	$('#btnSkip8').show();
    	$('#btnNext8').hide();
    	
    	$('#btnSkip9').show();
    	$('#btnNext9').hide();
    	
    	$('#btnSkip10').show();
    	$('#btnNext10').hide();
    }
    
    
	// Show Particular Stage When Page Load   
	$('#stage'+stageno).show();
	/*for(var i=counter_1_to_10; i <= total_stage_1_to_10; i++)
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
	$('#data_1 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });

	//$('#stage2_date').val(today);
	$('#data_2 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });

	//$('#stage3_date').val(today);
	$('#data_3 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });

	//$('#stage4_date').val(today);
	$('#data_4 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });
	
	//$('#stage5_date').val(today);
	$('#data_5 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });
	
	//$('#stage6_date').val(today);
	$('#data_6 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });
	
	//$('#stage7_date').val(today);
	$('#data_7 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });
	
	//$('#stage8_date').val(today);
	$('#data_8 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });
	
	//$('#stage9_date').val(today);
	$('#data_9 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });
	
	//$('#stage10_date').val(today);
	$('#data_10 .input-group.date').datepicker({
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
$('#btnAdd1').click(function(e){
	var formData = new FormData($('#frmStage1')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/addstage1",
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
                	$('#stage1').hide();
                	$('#stage2').show();
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

$('#btnAdd2').click(function(e){
	var formData = new FormData($('#frmStage2')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/addstage2",
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
                	$('#stage2').hide();
                	$('#stage3').show();
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

$('#btnAdd3').click(function(e){
	var formData = new FormData($('#frmStage3')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/addstage3",
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
                	$('#stage3').hide();
                	$('#stage4').show();
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

$('#btnAdd4').click(function(e){
	var result=alphanumericspace('caseno');
	var result1=validate_required('caseno');
	
	if(result==true && result1==true)
	{
    	var formData = new FormData($('#frmStage4')[0]);
	    $.ajax({
	         type: "POST",
	         url: base_url+"litigation/adjudication/addstage4",
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
	                	$('#stage4').hide();
	                	$('#stage5').show();
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
		$('#errormsg_caseno').show();
		if(result==false)
		{
			document.getElementById('errormsg_caseno').innerHTML="Accept only Space, Character & Digit";
		}
		if(result1==false)
		{
			document.getElementById('errormsg_caseno').innerHTML="Case Number is required field.";
		}
   		
   		document.getElementById('caseno').focus();
	}
});

$('#btnAdd5').click(function(e){
	var formData = new FormData($('#frmStage5')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/addstage5",
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
                	$('#stage5').hide();
                	$('#stage6').show();
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

$('#btnAdd6').click(function(e){
	var formData = new FormData($('#frmStage6')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/addstage6",
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
                	$('#stage6').hide();
                	$('#stage7').show();
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

$('#btnAdd7').click(function(e){
	var formData = new FormData($('#frmStage7')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/addstage7",
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
                	$('#stage7').hide();
                	$('#stage8').show();
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

$('#btnAdd8').click(function(e){
	var formData = new FormData($('#frmStage8')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/addstage8",
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
                	$('#stage8').hide();
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

$('#btnAdd_seletion1').click(function(e){
	var result1=validate_radio('order_acquital_convection');
	var result2=validate_radio('department_apply_tribunal');
	var result3=validate_radio('fbo_apply_tribunal');
	
	var checkboxval=$("input[name='order_acquital_convection']:checked").val();
	
	if(result1==false)
	{
		$('#errormsg_orderacqconv').show();
		
		document.getElementById('errormsg_orderacqconv').innerHTML="Select Order is Acquittal or Conviction!";
		//alert('Select Order is Acquittal or Conviction!');
		return false;	
	}
	else if(result1==true && checkboxval==0 && result2==false)
	{
		$('#errormsg_orderacqconv').hide();
		$('#errormsg_depapptrib').show();
		
		document.getElementById('errormsg_depapptrib').innerHTML="Select Department want to apply for tribunal court!";
		//alert('Select Department want to apply for tribunal court!');
		return false;
	}
	else if(result1==true && checkboxval==1 && result3==false)
	{
		$('#errormsg_orderacqconv').hide();
		$('#errormsg_fboapptrib').show();
		
		document.getElementById('errormsg_fboapptrib').innerHTML="Select FBO want to apply for tribunal court!";
		//alert('Select FBO want to apply for tribunal court!');
		return false;
	}
	else
	{
		var formData = new FormData($('#frmStage_seletion1')[0]);
	    $.ajax({
	         type: "POST",
	         url: base_url+"litigation/adjudication/addstageseletion1",
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

$('#btnAdd9').click(function(e){
	var result1=onlynumeric('stage9_fine_amt_fbo');
	var result2=onlynumeric('stage9_fine_amt_dist');
	var result3=onlynumeric('stage9_fine_amt_manu');
	
	if(result1==true && result2==true && result3==true)
	{
		var formData = new FormData($('#frmStage9')[0]);
	    $.ajax({
	         type: "POST",
	         url: base_url+"litigation/adjudication/addstage9",
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
	}
	else
	{
		if(result1==false)
		{
			$('#errormsg_fineamtfbo').show();
			$('#errormsg_fineamtdist').hide();
			$('#errormsg_fineamtmanu').hide();
			
			document.getElementById('errormsg_fineamtfbo').innerHTML="Accept only Digit";
   			document.getElementById('stage9_fine_amt_fbo').focus();
   			return false;
		}
		
		if(result2==false)
		{
			$('#errormsg_fineamtdist').show();
			$('#errormsg_fineamtfbo').hide();
			$('#errormsg_fineamtmanu').hide();
			
			document.getElementById('errormsg_fineamtdist').innerHTML="Accept only Digit";
   			document.getElementById('stage9_fine_amt_dist').focus();
   			return false;
		}
		
		if(result3==false)
		{
			$('#errormsg_fineamtmanu').show();
			$('#errormsg_fineamtfbo').hide();
			$('#errormsg_fineamtdist').hide();
			
			document.getElementById('errormsg_fineamtmanu').innerHTML="Accept only Digit";
   			document.getElementById('stage9_fine_amt_manu').focus();
   			return false;
		}
	}
});

$('#btnAdd10').click(function(e){
	var formData = new FormData($('#frmStage10')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/addstage10",
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
                	$('#stage10').hide();
                	$('#stage11').show();
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
$('#btnSkip1').click(function(e){
	var formData = new FormData($('#frmStage1')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/skipstage1",
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

$('#btnSkip2').click(function(e){
	var formData = new FormData($('#frmStage2')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/skipstage2",
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

$('#btnSkip3').click(function(e){
	var formData = new FormData($('#frmStage3')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/skipstage3",
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

$('#btnSkip4').click(function(e){
	var formData = new FormData($('#frmStage4')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/skipstage4",
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

$('#btnSkip5').click(function(e){
	var formData = new FormData($('#frmStage5')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/skipstage5",
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

$('#btnSkip6').click(function(e){
	var formData = new FormData($('#frmStage6')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/skipstage6",
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

$('#btnSkip7').click(function(e){
	var formData = new FormData($('#frmStage7')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/skipstage7",
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

$('#btnSkip8').click(function(e){
	var formData = new FormData($('#frmStage8')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/skipstage8",
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
                	//var stageno = obj['stage'];
                	//var nextstageno = obj['stage']+1;
                	//$('#stage'+stageno).hide();
                	//$('#stage'+nextstageno).show();
                	//$('#stage_seletion1').show();
                	
                	$('#stage8').hide();
                	
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

$('#btnSkip9').click(function(e){
	var formData = new FormData($('#frmStage9')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/skipstage9",
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

$('#btnSkip10').click(function(e){
	var formData = new FormData($('#frmStage10')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/skipstage10",
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
//Skip Functions End

//Next Functions Start
$('#btnNext1').click(function(e){
	$('#stage1').hide();
	$('#stage2').show();
});

$('#btnNext2').click(function(e){
	$('#stage2').hide();
	$('#stage3').show();
});

$('#btnNext3').click(function(e){
	$('#stage3').hide();
	$('#stage4').show();
});

$('#btnNext4').click(function(e){
	$('#stage4').hide();
	$('#stage5').show();
});

$('#btnNext5').click(function(e){
	$('#stage5').hide();
	$('#stage6').show();
});

$('#btnNext6').click(function(e){
	$('#stage6').hide();
	$('#stage7').show();
});

$('#btnNext7').click(function(e){
	$('#stage7').hide();
	$('#stage8').show();
});

$('#btnNext8').click(function(e){
	/*$('#stage8').hide();
	$('#stage9').show();*/
	var formData = new FormData($('#frmStage8')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/adjudication/nextstage8",
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
                	
                	$('#stage8').hide();
                	
                	if(stagenumber==10)
                	{
                		$('#stage10').show();
                		
                		if(obj['next_status']==1)
                		{
							$('#btnNext10').show();	
							$('#btnSkip10').hide();
						}
                		else
                		{
                			$('#btnNext10').hide();
                			$('#btnSkip10').show();
                		}
                		
						$('#stage10_remark').val(litigation_adjudication_detail['apptotrib_remark']);
						
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
					}
					
					if(stagenumber==8)
                	{
                		$('#stage8').show();
                		
                		if(obj['next_status']==1)
                		{
							$('#btnNext8').show();	
							$('#btnSkip8').hide();
						}
                		else
                		{
                			$('#btnNext8').hide();
                			$('#btnSkip8').show();
                		}
                		
						$('#stage8_remark').val(litigation_adjudication_detail['orderrec_remark']);
						
						if(litigation_adjudication_detail['orderrec_date']!=null)
	                	{
	                		$("#stagedate8").hide();
	                		$('#rostagedate8').val(litigation_adjudication_detail['orderrec_date']);
	                		$('#rostagedate8').show();
	                	}
	                	else
	                	{
	                		$('#rostagedate8').hide();
	                		$("#stagedate8").show();
	                	}
	                	
	                	if(litigation_adjudication_detail['orderrec_date'] != null && litigation_adjudication_detail['orderrec_remark'] != '')
		                {
		                	window.location.href = base_url+"litigation/adjudication";
		                }
					}
					
					if(stagenumber==9)
                	{
                		$('#stage9').show();
                		
                		if(obj['next_status']==1)
                		{
							$('#btnNext9').show();	
							$('#btnSkip9').hide();
						}
                		else
                		{
                			$('#btnNext9').hide();
                			$('#btnSkip9').show();
                		}
                		
						$('#stage9_remark').val(litigation_adjudication_detail['isfboapptrino_remark']);
						
						if(litigation_adjudication_detail['isfboapptrino_date']!=null)
	                	{
	                		$("#stagedate9").hide();
	                		$('#rostagedate9').val(litigation_adjudication_detail['isfboapptrino_date']);
	                		$('#rostagedate9').show();
	                	}
	                	else
	                	{
	                		$('#rostagedate9').hide();
	                		$("#stagedate9").show();
	                	}
					}
					
					if(stagenumber=='seletion1')
                	{
                		$('#stage_seletion1').show();
                		
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

$('#btnNext9').click(function(e){
	$('#stage9').hide();
	//$('#stage10').show();
	window.location.href = base_url+"litigation/adjudication";
});

$('#btnNext10').click(function(e){
	$('#stage10').hide();
	$('#stage11').show();
});
//Next Functions End

//Previous Functions Start
$('#btnPrev2').click(function(e){
	var formData = new FormData($('#frmStage2')[0]);
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
                	$('#stage1_remark').val(litigation_adjudication_detail['recfso_remark']);
                	
                	$('#stage2').hide();
                	$('#stage1').show();
                	
                	$('#btnNext1').show();
                	$('#btnSkip1').hide();
                	
                	if(litigation_adjudication_detail['recfso_date']!=null)
                	{
                		$("#stagedate1").hide();
                		$('#rostagedate1').val(litigation_adjudication_detail['recfso_date']);
                		$('#rostagedate1').show();
                	}
                	else
                	{
                		$('#rostagedate1').hide();
                		$("#stagedate1").show();
                	}
                	
                	if(litigation_adjudication_detail['recfso_remark']!='')
                	{
                		$("#stage1_remark").attr("readonly","readonly");
                	}
                	else
                	{
						$("#stage1_remark").removeAttr("readonly","readonly");
					}
					
					if(litigation_adjudication_detail['recfso_date'] != null && litigation_adjudication_detail['recfso_remark'] != '')
	                {
	                	$('#btnAdd1').hide();
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

$('#btnPrev3').click(function(e){
	var formData = new FormData($('#frmStage3')[0]);
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
                	$('#stage2_remark').val(litigation_adjudication_detail['fsoperdo_remark']);
                	
                	$('#stage3').hide();
                	$('#stage2').show();
                	
                	$('#btnNext2').show();
                	$('#btnSkip2').hide();
                	
                	if(litigation_adjudication_detail['fsoperdo_date']!=null)
                	{
                		$("#stagedate2").hide();
                		$('#rostagedate2').val(litigation_adjudication_detail['fsoperdo_date']);
                		$('#rostagedate2').show();
                	}
                	else
                	{
                		$('#rostagedate2').hide();
                		$("#stagedate2").show();
                	}
                	
                	if(litigation_adjudication_detail['fsoperdo_remark']!='')
                	{
                		$("#stage2_remark").attr("readonly","readonly");
                	}
                	else
                	{
						$("#stage2_remark").removeAttr("readonly","readonly");
					}
					
					if(litigation_adjudication_detail['fsoperdo_date'] != null && litigation_adjudication_detail['fsoperdo_remark'] != '')
	                {
	                	$('#btnAdd2').hide();
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

$('#btnPrev4').click(function(e){
	var formData = new FormData($('#frmStage4')[0]);
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
                	$('#stage3_remark').val(litigation_adjudication_detail['pergivdo_remark']);
                	
                	$('#stage4').hide();
                	$('#stage3').show();
                	
                	$('#btnNext3').show();
                	$('#btnSkip3').hide();
                	
                	if(litigation_adjudication_detail['pergivdo_date']!=null)
                	{
                		$("#stagedate3").hide();
                		$('#rostagedate3').val(litigation_adjudication_detail['pergivdo_date']);
                		$('#rostagedate3').show();
                	}
                	else
                	{
                		$('#rostagedate3').hide();
                		$("#stagedate3").show();
                	}
                	
                	if(litigation_adjudication_detail['pergivdo_remark']!='')
                	{
                		$("#stage3_remark").attr("readonly","readonly");
                	}
                	else
                	{
						$("#stage3_remark").removeAttr("readonly","readonly");
					}
					
					if(litigation_adjudication_detail['pergivdo_date'] != null && litigation_adjudication_detail['pergivdo_remark'] != '')
	                {
	                	$('#btnAdd3').hide();
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

$('#btnPrev5').click(function(e){
	var formData = new FormData($('#frmStage5')[0]);
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
                	$('#stage4_remark').val(litigation_adjudication_detail['adjapp_remark']);
                	$('#caseno').val(litigation_adjudication_detail['case_no']);
                	
                	$('#stage5').hide();
                	$('#errormsg_caseno').hide();
                	$('#stage4').show();
                	
                	$('#btnNext4').show();
                	$('#btnSkip4').hide();
                	
                	if(litigation_adjudication_detail['adjapp_date']!=null)
                	{
                		$("#stagedate4").hide();
                		$('#rostagedate4').val(litigation_adjudication_detail['adjapp_date']);
                		$('#rostagedate4').show();
                	}
                	else
                	{
                		$('#rostagedate4').hide();
                		$("#stagedate4").show();
                	}
                	
                	if(litigation_adjudication_detail['case_no']!='')
                	{
                		$("#caseno").attr("readonly","readonly");
                	}
                	else
                	{
						$("#caseno").removeAttr("readonly","readonly");
					}
					
					if(litigation_adjudication_detail['adjapp_remark']!='')
                	{
                		$("#stage4_remark").attr("readonly","readonly");
                	}
                	else
                	{
						$("#stage4_remark").removeAttr("readonly","readonly");
					}
					
					if(litigation_adjudication_detail['adjapp_date'] != null && litigation_adjudication_detail['adjapp_remark'] != '' && litigation_adjudication_detail['case_no'] != '')
	                {
	                	$('#btnAdd4').hide();
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

$('#btnPrev6').click(function(e){
	var formData = new FormData($('#frmStage6')[0]);
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
                	$('#stage5_remark').val(litigation_adjudication_detail['fsthearing_remark']);
                	
                	$('#stage6').hide();
                	$('#stage5').show();
                	
                	$('#btnNext5').show();
                	$('#btnSkip5').hide();
                	
                	if(litigation_adjudication_detail['fsthearing_date']!=null)
                	{
                		$("#stagedate5").hide();
                		$('#rostagedate5').val(litigation_adjudication_detail['fsthearing_date']);
                		$('#rostagedate5').show();
                	}
                	else
                	{
                		$('#rostagedate5').hide();
                		$("#stagedate5").show();
                	}
                	
                	if(litigation_adjudication_detail['fsthearing_remark']!='')
                	{
                		$("#stage5_remark").attr("readonly","readonly");
                	}
                	else
                	{
						$("#stage5_remark").removeAttr("readonly","readonly");
					}
					
					if(litigation_adjudication_detail['fsthearing_date'] != null && litigation_adjudication_detail['fsthearing_remark'] != '')
	                {
	                	$('#btnAdd5').hide();
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

$('#btnPrev7').click(function(e){
	var formData = new FormData($('#frmStage7')[0]);
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
                	$('#stage6_remark').val(litigation_adjudication_detail['legalargu_remark']);
                	
                	$('#stage7').hide();
                	$('#stage6').show();
                	
                	$('#btnNext6').show();
                	$('#btnSkip6').hide();
                	
                	if(litigation_adjudication_detail['legalargu_date']!=null)
                	{
                		$("#stagedate6").hide();
                		$('#rostagedate6').val(litigation_adjudication_detail['legalargu_date']);
                		$('#rostagedate6').show();
                	}
                	else
                	{
                		$('#rostagedate6').hide();
                		$("#stagedate6").show();
                	}
                	
                	if(litigation_adjudication_detail['legalargu_remark']!='')
                	{
                		$("#stage6_remark").attr("readonly","readonly");
                	}
                	else
                	{
						$("#stage6_remark").removeAttr("readonly","readonly");
					}
					
					if(litigation_adjudication_detail['legalargu_date'] != null && litigation_adjudication_detail['legalargu_remark'] != '')
	                {
	                	$('#btnAdd6').hide();
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

$('#btnPrev8').click(function(e){
	var formData = new FormData($('#frmStage8')[0]);
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
                	$('#stage7_remark').val(litigation_adjudication_detail['dtorder_remark']);
                	
                	$('#stage8').hide();
                	$('#stage7').show();
                	
                	$('#btnNext7').show();
                	$('#btnSkip7').hide();
                	
                	if(litigation_adjudication_detail['dtorder_date']!=null)
                	{
                		$("#stagedate7").hide();
                		$('#rostagedate7').val(litigation_adjudication_detail['dtorder_date']);
                		$('#rostagedate7').show();
                	}
                	else
                	{
                		$('#rostagedate7').hide();
                		$('#stage7_date').attr("value","");
                		$("#stagedate7").show();
                	}
                	
                	if(litigation_adjudication_detail['dtorder_remark']!='')
                	{
                		$("#stage7_remark").attr("readonly","readonly");
                	}
                	else
                	{
						$("#stage7_remark").removeAttr("readonly","readonly");
					}
					
					if(litigation_adjudication_detail['dtorder_date'] != null && litigation_adjudication_detail['dtorder_remark'] != '')
	                {
	                	$('#btnAdd7').hide();
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

$('#btnPrev_seletion1').click(function(e){
	var formData = new FormData($('#frmStage_seletion1')[0]);
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
                	$('#stage8_remark').val(litigation_adjudication_detail['orderrec_remark']);
                	
                	$('#stage_seletion1').hide();
                	$('#stage8').show();
                	
                	$('#btnNext8').show();
                	$('#btnSkip8').hide();
                	
                	if(litigation_adjudication_detail['orderrec_date']!=null)
                	{
                		$("#stagedate8").hide();
                		$('#rostagedate8').val(litigation_adjudication_detail['orderrec_date']);
                		$('#rostagedate8').show();
                	}
                	else
                	{
                		$('#rostagedate8').hide();
                		$("#stagedate8").show();
                	}
                	
                	if(litigation_adjudication_detail['orderrec_date'] != null && litigation_adjudication_detail['orderrec_remark'] != '')
	                {
	                	$('#btnAdd8').hide();
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

$('#btnPrev9').click(function(e){
	var formData = new FormData($('#frmStage9')[0]);
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
                	$('#stage8_remark').val(litigation_adjudication_detail['orderrec_remark']);
                	
                	$('#stage9').hide();
                	$('#stage8').show();
                	
                	$('#btnNext8').show();
                	$('#btnSkip8').hide();
                	
                	if(litigation_adjudication_detail['orderrec_date']!=null)
                	{
                		$("#stagedate8").hide();
                		$('#rostagedate8').val(litigation_adjudication_detail['orderrec_date']);
                		$('#rostagedate8').show();
                	}
                	else
                	{
                		$('#rostagedate8').hide();
                		$("#stagedate8").show();
                	}
                	
                	if(litigation_adjudication_detail['orderrec_remark']!='')
                	{
                		$("#stage8_remark").attr("readonly","readonly");
                	}
                	else
                	{
						$("#stage8_remark").removeAttr("readonly","readonly");
					}
					
					if(litigation_adjudication_detail['orderrec_date'] != null && litigation_adjudication_detail['orderrec_remark'] != '')
	                {
	                	$('#btnAdd8').hide();
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

$('#btnPrev10').click(function(e){
	var formData = new FormData($('#frmStage10')[0]);
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
                	$('#stage8_remark').val(litigation_adjudication_detail['orderrec_remark']);
                	
                	$('#stage10').hide();
                	$('#stage8').show();
                	
                	$('#btnNext8').show();
                	$('#btnSkip8').hide();
                	
                	if(litigation_adjudication_detail['orderrec_date']!=null)
                	{
                		$("#stagedate8").hide();
                		$('#rostagedate8').val(litigation_adjudication_detail['orderrec_date']);
                		$('#rostagedate8').show();
                	}
                	else
                	{
                		$('#rostagedate8').hide();
                		$("#stagedate8").show();
                	}
                	
                	if(litigation_adjudication_detail['orderrec_remark']!='')
                	{
                		$("#stage8_remark").attr("readonly","readonly");
                	}
                	else
                	{
						$("#stage8_remark").removeAttr("readonly","readonly");
					}
					
					if(litigation_adjudication_detail['orderrec_date'] != null && litigation_adjudication_detail['orderrec_remark'] != '')
	                {
	                	$('#btnAdd8').hide();
	                }
                	/*$('#stage9_remark').val(litigation_adjudication_detail['isfboapptrino_remark']);
                	
                	$('#stage10').hide();
                	$('#stage9').show();
                	
                	$('#btnNext9').show();
                	$('#btnSkip9').hide();
                	
                	if(litigation_adjudication_detail['isfboapptrino_date']!=null)
                	{
                		$("#stagedate9").hide();
                		$('#rostagedate9').val(litigation_adjudication_detail['isfboapptrino_date']);
                		$('#rostagedate9').show();
                	}
                	else
                	{
                		$('#rostagedate9').hide();
                		$("#stagedate9").show();
                	}*/
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


$('#order_acquital').click(function(e){
	$('#acquittal').show();
	$('#conviction').hide();
});

$('#order_convection').click(function(e){
	$('#conviction').show();
	$('#acquittal').hide();
});