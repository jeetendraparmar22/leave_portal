$(document).ready(function(){
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
	
	//IF Date exist show in Readonly
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
	
	// Read Only Court Name Field Hidden When Page Load
	$('#rocourtname').hide();
	
	//IF Court Name exist show in Readonly
	if(courtid!='0')
	{
		$("#divCourt").hide();
		$('#rocourtname').show();
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
	
	$('#data_5 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });
	
	$('#data_6 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });
	
	$('#data_7 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });
	
	$('#data_8 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });
	
	$('#data_9 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });
	
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
         url: base_url+"litigation/courtcase/addstage1",
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
                	$('#stage1').hide();
                	$('#stage2').show();
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

$('#btnAdd2').click(function(e){
	var formData = new FormData($('#frmStage2')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/addstage2",
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
                	$('#stage2').hide();
                	$('#stage3').show();
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

$('#btnAdd3').click(function(e){
	var formData = new FormData($('#frmStage3')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/addstage3",
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
                	$('#stage3').hide();
                	$('#stage4').show();
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

$('#btnAdd4').click(function(e){
	var formData = new FormData($('#frmStage4')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/addstage4",
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
                	$('#stage4').hide();
                	$('#stage5').show();
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

$('#btnAdd5').click(function(e){
	var formData = new FormData($('#frmStage5')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/addstage5",
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
                	$('#stage5').hide();
                	$('#stage6').show();
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

$('#btnAdd6').click(function(e){
	var formData = new FormData($('#frmStage6')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/addstage6",
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
                	$('#stage6').hide();
                	$('#stage7').show();
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

$('#btnAdd7').click(function(e){
	var resultCourtRequired = validate_required('courtid');
	var resultCaseNoRequired = validate_required('caseno');
	var resultCaseNoFormat=alphanumericspace('caseno');
	if(resultCourtRequired && resultCaseNoRequired && resultCaseNoFormat)
	{
		var formData = new FormData($('#frmStage7')[0]);
	    $.ajax({
	         type: "POST",
	         url: base_url+"litigation/courtcase/addstage7",
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
	                	$('#stage7').hide();
	                	$('#stage8').show();
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
	else
	{
		if(resultCaseNoFormat == false)
		{
			$('#errormsg_caseno').show(); 
	   		document.getElementById('errormsg_caseno').innerHTML="Accept only Space, Character & Digit";
	   		document.getElementById('caseno').focus();
		}
		
		if(resultCaseNoRequired == false)
		{
			$('#errormsg_caseno').show(); 
	   		document.getElementById('errormsg_caseno').innerHTML="Case number is required";
	   		document.getElementById('caseno').focus();
		}
		
		if(resultCourtRequired == false)
		{
			$('#errormsg_court').show(); 
	   		document.getElementById('errormsg_court').innerHTML="Please select court";
	   		document.getElementById('courtid').focus();
		}
	}
});

$('#btnAdd8').click(function(e){
	var formData = new FormData($('#frmStage8')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/addstage8",
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
                	$('#stage8').hide();
                	$('#stage9').show();
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

$('#btnAdd9').click(function(e){
	var formData = new FormData($('#frmStage9')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/addstage9",
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
                	$('#stage9').hide();
                	$('#stage10').show();
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

$('#btnAdd10').click(function(e){
	var formData = new FormData($('#frmStage10')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/addstage10",
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
                	$('#stage10').hide();
                	$('#stage11').show();
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
$('#btnSkip1').click(function(e){
	var formData = new FormData($('#frmStage1')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage1",
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

$('#btnSkip2').click(function(e){
	var formData = new FormData($('#frmStage2')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage2",
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

$('#btnSkip3').click(function(e){
	var formData = new FormData($('#frmStage3')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage3",
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

$('#btnSkip4').click(function(e){
	var formData = new FormData($('#frmStage4')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage4",
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

$('#btnSkip5').click(function(e){
	var formData = new FormData($('#frmStage5')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage5",
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

$('#btnSkip6').click(function(e){
	var formData = new FormData($('#frmStage6')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage6",
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

$('#btnSkip7').click(function(e){
	var formData = new FormData($('#frmStage7')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage7",
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

$('#btnSkip8').click(function(e){
	var formData = new FormData($('#frmStage8')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage8",
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

$('#btnSkip9').click(function(e){
	var formData = new FormData($('#frmStage9')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage9",
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

$('#btnSkip10').click(function(e){
	var formData = new FormData($('#frmStage10')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage10",
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
	$('#stage8').hide();
	$('#stage9').show();
});

$('#btnNext9').click(function(e){
	$('#stage9').hide();
	$('#stage10').show();
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
                	$('#stage1_remark').val(litigation_courtcase_detail['reprecfso_remark']);
                	
                	$('#stage2').hide();
                	$('#stage1').show();
                	
                	$('#btnNext1').show();
                	$('#btnSkip1').hide();
                	
                	if(litigation_courtcase_detail['reprecfso_date']!=null)
                	{
                		$("#stagedate1").hide();
                		$('#rostagedate1').val(litigation_courtcase_detail['reprecfso_date']);
                		$('#rostagedate1').show();
                	}
                	else
                	{
                		$('#rostagedate1').hide();
                		$("#stagedate1").show();
                	}
                	
                	if(litigation_courtcase_detail['reprecfso_remark']!='')
                    {
                		$("#stage1_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage1_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['reprecfso_date'] != null && litigation_courtcase_detail['reprecfso_remark'] != '')
                	{
                		$('#btnAdd1').hide();
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

$('#btnPrev3').click(function(e){
	var formData = new FormData($('#frmStage3')[0]);
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
                	$('#stage2_remark').val(litigation_courtcase_detail['prosenddo_remark']);
                	
                	$('#stage3').hide();
                	$('#stage2').show();
                	
                	$('#btnNext2').show();
                	$('#btnSkip2').hide();
                	
                	if(litigation_courtcase_detail['prosenddo_date']!=null)
                	{
                		$("#stagedate2").hide();
                		$('#rostagedate2').val(litigation_courtcase_detail['prosenddo_date']);
                		$('#rostagedate2').show();
                	}
                	else
                	{
                		$('#rostagedate2').hide();
                		$("#stagedate2").show();
                	}
                	
                	if(litigation_courtcase_detail['prosenddo_remark']!='')
                    {
                		$("#stage2_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage2_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['prosenddo_date'] != null && litigation_courtcase_detail['prosenddo_remark'] != '')
                	{
                		$('#btnAdd2').hide();
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

$('#btnPrev4').click(function(e){
	var formData = new FormData($('#frmStage4')[0]);
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
                	$('#stage3_remark').val(litigation_courtcase_detail['sendprocfs_remark']);
                	
                	$('#stage4').hide();
                	$('#stage3').show();
                	
                	$('#btnNext3').show();
                	$('#btnSkip3').hide();
                	
                	if(litigation_courtcase_detail['sendprocfs_date']!=null)
                	{
                		$("#stagedate3").hide();
                		$('#rostagedate3').val(litigation_courtcase_detail['sendprocfs_date']);
                		$('#rostagedate3').show();
                	}
                	else
                	{
                		$('#rostagedate3').hide();
                		$("#stagedate3").show();
                	}
                	
                	if(litigation_courtcase_detail['sendprocfs_remark']!='')
                    {
                		$("#stage3_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage3_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['sendprocfs_date'] != null && litigation_courtcase_detail['sendprocfs_remark'] != '')
                	{
                		$('#btnAdd3').hide();
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

$('#btnPrev5').click(function(e){
	var formData = new FormData($('#frmStage5')[0]);
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
                	$('#stage4_remark').val(litigation_courtcase_detail['cfsgivsanc_remark']);
                	
                	$('#stage5').hide();
                	$('#stage4').show();
                	
                	$('#btnNext4').show();
                	$('#btnSkip4').hide();
                	
                	if(litigation_courtcase_detail['cfsgivsanc_date']!=null)
                	{
                		$("#stagedate4").hide();
                		$('#rostagedate4').val(litigation_courtcase_detail['cfsgivsanc_date']);
                		$('#rostagedate4').show();
                	}
                	else
                	{
                		$('#rostagedate4').hide();
                		$("#stagedate4").show();
                	}
                	
                	if(litigation_courtcase_detail['cfsgivsanc_remark']!='')
                    {
                		$("#stage4_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage4_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['cfsgivsanc_date'] != null && litigation_courtcase_detail['cfsgivsanc_remark'] != '')
                	{
                		$('#btnAdd4').hide();
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

$('#btnPrev6').click(function(e){
	var formData = new FormData($('#frmStage6')[0]);
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
                	$('#stage5_remark').val(litigation_courtcase_detail['receivalbydo_remark']);
                	
                	$('#stage6').hide();
                	$('#stage5').show();
                	
                	$('#btnNext5').show();
                	$('#btnSkip5').hide();
                	
                	if(litigation_courtcase_detail['receivalbydo_date']!=null)
                	{
                		$("#stagedate5").hide();
                		$('#rostagedate5').val(litigation_courtcase_detail['receivalbydo_date']);
                		$('#rostagedate5').show();
                	}
                	else
                	{
                		$('#rostagedate5').hide();
                		$("#stagedate5").show();
                	}
                	
                	if(litigation_courtcase_detail['receivalbydo_remark']!='')
                    {
                		$("#stage5_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage5_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['receivalbydo_date'] != null && litigation_courtcase_detail['receivalbydo_remark'] != '')
                	{
                		$('#btnAdd5').hide();
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

$('#btnPrev7').click(function(e){
	var formData = new FormData($('#frmStage7')[0]);
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
                	
                	$('#stage6_remark').val(litigation_courtcase_detail['fsorecsanc_remark']);
                	
                	$('#stage7').hide();
                	$('#stage6').show();
                	
                	$('#btnNext6').show();
                	$('#btnSkip6').hide();
                	
                	if(litigation_courtcase_detail['fsorecsanc_date']!=null)
                	{
                		$("#stagedate6").hide();
                		$('#rostagedate6').val(litigation_courtcase_detail['fsorecsanc_date']);
                		$('#rostagedate6').show();
                	}
                	else
                	{
                		$('#rostagedate6').hide();
                		$("#stagedate6").show();
                	}
                	
                	if(litigation_courtcase_detail['fsorecsanc_remark']!='')
                    {
                		$("#stage6_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage6_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['fsorecsanc_date'] != null && litigation_courtcase_detail['fsorecsanc_remark'] != '')
                	{
                		$('#btnAdd6').hide();
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

$('#btnPrev8').click(function(e){
	var formData = new FormData($('#frmStage8')[0]);
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
                	var court_name = obj['court_name'];
                	$('#stage7_remark').val(litigation_courtcase_detail['fsoprosec_remark']);
                	$('#errormsg_caseno').hide();
                	$('#errormsg_court').hide();
                	
                	$('#stage8').hide();
                	$('#stage7').show();
                	
                	$('#btnNext7').show();
                	$('#btnSkip7').hide();
                	
                	if(litigation_courtcase_detail['court_id']!=0)
                    {
                		$('#rocourtname').val(court_name);
                		$('#rocourtname').show();
                		$("#divCourt").hide();
                    }
                    else
                    {
                    	$('#rocourtname').hide();
                		$("#divCourt").show();
			        }
                	
                	if(litigation_courtcase_detail['case_no']!='')
                	{
                		$("#caseno").attr("readonly","readonly");
                	}
                	else
                	{
						$("#caseno").removeAttr("readonly","readonly");
					}
                	
                	if(litigation_courtcase_detail['fsoprosec_date']!=null)
                	{
                		$("#stagedate7").hide();
                		$('#rostagedate7').val(litigation_courtcase_detail['fsoprosec_date']);
                		$('#rostagedate7').show();
                	}
                	else
                	{
                		$('#rostagedate7').hide();
                		$("#stagedate7").show();
                	}
                	
                	if(litigation_courtcase_detail['fsoprosec_remark']!='')
                    {
                		$("#stage7_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage7_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['court_id'] != 0 && litigation_courtcase_detail['case_no'] != '' && litigation_courtcase_detail['fsoprosec_date'] != null && litigation_courtcase_detail['fsoprosec_remark'] != '')
                	{
                		$('#btnAdd7').hide();
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

$('#btnPrev9').click(function(e){
	var formData = new FormData($('#frmStage9')[0]);
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
                	$('#stage8_remark').val(litigation_courtcase_detail['evidence_remark']);
                	
                	$('#stage9').hide();
                	$('#stage8').show();
                	
                	$('#btnNext8').show();
                	$('#btnSkip8').hide();
                	
                	if(litigation_courtcase_detail['evidence_date']!=null)
                	{
                		$("#stagedate8").hide();
                		$('#rostagedate8').val(litigation_courtcase_detail['evidence_date']);
                		$('#rostagedate8').show();
                	}
                	else
                	{
                		$('#rostagedate8').hide();
                		$("#stagedate8").show();
                	}
                	
                	if(litigation_courtcase_detail['evidence_remark']!='')
                    {
                		$("#stage8_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage8_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['evidence_date'] != null && litigation_courtcase_detail['evidence_remark'] != '')
                	{
                		$('#btnAdd8').hide();
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

$('#btnPrev10').click(function(e){
	var formData = new FormData($('#frmStage10')[0]);
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
                	$('#stage9_remark').val(litigation_courtcase_detail['witness_remark']);
                	
                	$('#stage10').hide();
                	$('#stage9').show();
                	
                	$('#btnNext9').show();
                	$('#btnSkip9').hide();
                	
                	if(litigation_courtcase_detail['witness_date']!=null)
                	{
                		$("#stagedate9").hide();
                		$('#rostagedate9').val(litigation_courtcase_detail['witness_date']);
                		$('#rostagedate9').show();
                	}
                	else
                	{
                		$('#rostagedate9').hide();
                		$("#stagedate9").show();
                	}
                	
                	if(litigation_courtcase_detail['witness_remark']!='')
                    {
                		$("#stage9_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage9_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['witness_date'] != null && litigation_courtcase_detail['witness_remark'] != '')
                	{
                		$('#btnAdd9').hide();
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