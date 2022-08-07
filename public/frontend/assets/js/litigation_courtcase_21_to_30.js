$(document).ready(function(){
	// Read Only Date Field Hidden When Page Load
	$('#rostagedate21').hide();
	$('#rostagedate22').hide();
	$('#rostagedate23').hide();
	$('#rostagedate24').hide();
	$('#rostagedate25').hide();
	$('#rostagedate26').hide();
	$('#rostagedate27').hide();
	$('#rostagedate28').hide();
	
	//IF Date exit show in Readonly
	if(stagedateicon21!='')
	{
		$("#stagedate21").hide();
		$('#rostagedate21').show();
	}
	if(stagedateicon22!='')
	{
		$("#stagedate22").hide();
		$('#rostagedate22').show();
	}
	if(stagedateicon23!='')
	{
		$("#stagedate23").hide();
		$('#rostagedate23').show();
	}
	if(stagedateicon24!='')
	{
		$("#stagedate24").hide();
		$('#rostagedate24').show();
	}
	if(stagedateicon25!='')
	{
		$("#stagedate25").hide();
		$('#rostagedate25').show();
	}
	if(stagedateicon26!='')
	{
		$("#stagedate26").hide();
		$('#rostagedate26').show();
	}
	if(stagedateicon27!='')
	{
		$("#stagedate27").hide();
		$('#rostagedate27').show();
	}
	if(stagedateicon28!='')
	{
		$("#stagedate28").hide();
		$('#rostagedate28').show();
	}

	//Skip button hide and Next button show
    if(next_status == 1)
    {
    	$('#btnSkip21').hide();
    	$('#btnNext21').show();

    	$('#btnSkip22').hide();
    	$('#btnNext22').show();

    	$('#btnSkip23').hide();
    	$('#btnNext23').show();
		
    	$('#btnSkip24').hide();
    	$('#btnNext24').show();
    	
    	$('#btnSkip25').hide();
    	$('#btnNext25').show();
    	
    	$('#btnSkip26').hide();
    	$('#btnNext26').show();
    	
    	$('#btnSkip27').hide();
    	$('#btnNext27').show();
    	
    	$('#btnSkip28').hide();
    }
    else
    {
    	$('#btnSkip21').show();
    	$('#btnNext21').hide();

    	$('#btnSkip22').show();
    	$('#btnNext22').hide();

    	$('#btnSkip23').show();
    	$('#btnNext23').hide();
    	
    	$('#btnSkip24').show();
    	$('#btnNext24').hide();
    	
    	$('#btnSkip25').show();
    	$('#btnNext25').hide();
    	
    	$('#btnSkip26').show();
    	$('#btnNext26').hide();
    	
    	$('#btnSkip27').show();
    	$('#btnNext27').hide();
    	
    	$('#btnSkip28').show();
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
	$('#data_21 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });

	//$('#stage2_date').val(today);
	$('#data_22 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });

	//$('#stage3_date').val(today);
	$('#data_23 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });

	//$('#stage4_date').val(today);
	$('#data_24 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });
	
	$('#data_25 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });
	
	$('#data_26 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });
	
	$('#data_27 .input-group.date').datepicker({
		format: "dd/mm/yyyy",
	        keyboardNavigation: false,
	        forceParse: false,
	        todayHighlight: true,
	        autoclose: true,
	        endDate: today,
	        clearBtn: true
	    });
	
	$('#data_28 .input-group.date').datepicker({
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
$('#btnAdd21').click(function(e){
	var formData = new FormData($('#frmStage21')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/addstage21",
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
                	$('#stage21').hide();
                	$('#stage22').show();
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

$('#btnAdd22').click(function(e){
	var formData = new FormData($('#frmStage22')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/addstage22",
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
                	$('#stage22').hide();
                	$('#stage23').show();
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

$('#btnAdd23').click(function(e){
	var formData = new FormData($('#frmStage23')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/addstage23",
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
                	$('#stage23').hide();
                	$('#stage24').show();
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

$('#btnAdd24').click(function(e){
	var formData = new FormData($('#frmStage24')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/addstage24",
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
                	$('#stage24').hide();
                	$('#stage25').show();
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

$('#btnAdd25').click(function(e){
	var formData = new FormData($('#frmStage25')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/addstage25",
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
                	$('#stage25').hide();
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

$('#btnAdd_seletion4').click(function(e){
	var result1=validate_radio('fit_for_appeal_yes_no');
	var result3=validate_radio('decision_filing');
	
	var checkboxval=$("input[name='fit_for_appeal_yes_no']:checked").val();
	
	if(result1==false)
	{
		$('#errormsg_fitforappealyesno').show();
		
		document.getElementById('errormsg_orderacqconvhigh').innerHTML="Select whether fit for appeal!";
		//alert('Select Order is Acquittal or Conviction!');
		return false;	
	}
	else if(result1==true && checkboxval==1 && result3==false)
	{
		$('#errormsg_decisionfiling').show();
		
		document.getElementById('errormsg_decisionfiling').innerHTML="Select FDCA intimated decision filing or not filing!";
		//alert('Select FBO want to apply for tribunal court!');
		return false;
	}
	else
	{
		var formData = new FormData($('#frmStage_seletion4')[0]);
	    $.ajax({
	         type: "POST",
	         url: base_url+"litigation/courtcase/addstageseletion4",
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
	                	$('#stage_seletion4').hide();
						//$('#acquittal_conviction').hide();
						$('#intimated_decision').hide();
						
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

$('#btnAdd26').click(function(e){
	var formData = new FormData($('#frmStage26')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/addstage26",
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
                	$('#stage26').hide();
                	$('#stage27').show();
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

$('#btnAdd27').click(function(e){
	var formData = new FormData($('#frmStage27')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/addstage27",
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
                	$('#stage27').hide();
                	$('#stage28').show();
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

$('#btnAdd28').click(function(e){
	var formData = new FormData($('#frmStage28')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/addstage28",
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
                	window.location.href = base_url+"litigation/courtcase";
                	//$('#stage18').hide();
                	//$('#stage19').show();
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
$('#btnSkip21').click(function(e){
	var formData = new FormData($('#frmStage21')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage21",
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

$('#btnSkip22').click(function(e){
	var formData = new FormData($('#frmStage22')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage22",
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

$('#btnSkip23').click(function(e){
	var formData = new FormData($('#frmStage23')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage23",
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

$('#btnSkip24').click(function(e){
	var formData = new FormData($('#frmStage24')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage24",
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

$('#btnSkip25').click(function(e){
	var formData = new FormData($('#frmStage25')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage25",
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
                	$('#stage25').hide();
                	$('#stage_seletion4').show();
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

$('#btnSkip26').click(function(e){
	var formData = new FormData($('#frmStage26')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage26",
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

$('#btnSkip27').click(function(e){
	var formData = new FormData($('#frmStage27')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage27",
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

$('#btnSkip28').click(function(e){
	var formData = new FormData($('#frmStage28')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/skipstage28",
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
                	window.location.href = base_url+"litigation/courtcase";
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
$('#btnNext21').click(function(e){
	$('#stage21').hide();
	$('#stage22').show();
});

$('#btnNext22').click(function(e){
	$('#stage22').hide();
	$('#stage23').show();
});

$('#btnNext23').click(function(e){
	$('#stage23').hide();
	$('#stage24').show();
});

$('#btnNext24').click(function(e){
	$('#stage24').hide();
	$('#stage25').show();
});

$('#btnNext25').click(function(e){
	var formData = new FormData($('#frmStage25')[0]);
    $.ajax({
         type: "POST",
         url: base_url+"litigation/courtcase/nextstage25",
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
                	
                	$('#stage25').hide();
                	
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
					
					if(stagenumber=='seletion4')
                	{
                		$('#stage_seletion4').show();
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

$('#btnNext26').click(function(e){
	$('#stage26').hide();
	$('#stage27').show();
});

$('#btnNext27').click(function(e){
	$('#stage27').hide();
	$('#stage28').show();
});
//Next Functions End

//Previous Functions Start
$('#btnPrev21').click(function(e){
	var formData = new FormData($('#frmStage21')[0]);
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
                	$('#stage20_remark').val(litigation_courtcase_detail['judgcopyrechigh_remark']);
                	
                	$('#stage21').hide();
                	$('#stage20').show();
                	
                	$('#btnNext20').show();
                	$('#btnSkip20').hide();
                	
                	if(litigation_courtcase_detail['judgcopyrechigh_date']!=null)
                	{
                		$("#stagedate20").hide();
                		$('#rostagedate20').val(litigation_courtcase_detail['judgcopyrechigh_date']);
                		$('#rostagedate20').show();
                	}
                	else
                	{
                		$('#rostagedate20').hide();
                		$("#stagedate20").show();
                	}
                	
                	if(litigation_courtcase_detail['judgcopyrechigh_remark']!='')
                    {
                		$("#stage20_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage20_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['judgcopyrechigh_date'] != null && litigation_courtcase_detail['judgcopyrechigh_remark'] != '')
                	{
                		$('#btnAdd20').hide();
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

$('#btnPrev22').click(function(e){
	var formData = new FormData($('#frmStage22')[0]);
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
                	$('#stage21_remark').val(litigation_courtcase_detail['subtoofficehigh_remark']);
                	
                	$('#stage22').hide();
                	$('#stage21').show();
                	
                	$('#btnNext21').show();
                	$('#btnSkip21').hide();
                	
                	if(litigation_courtcase_detail['subtoofficehigh_date']!=null)
                	{
                		$("#stagedate21").hide();
                		$('#rostagedate21').val(litigation_courtcase_detail['subtoofficehigh_date']);
                		$('#rostagedate21').show();
                	}
                	else
                	{
                		$('#rostagedate21').hide();
                		$("#stagedate21").show();
                	}
                	
                	if(litigation_courtcase_detail['subtoofficehigh_remark']!='')
                    {
                		$("#stage21_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage21_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['subtoofficehigh_date'] != null && litigation_courtcase_detail['subtoofficehigh_remark'] != '')
                	{
                		$('#btnAdd21').hide();
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

$('#btnPrev23').click(function(e){
	var formData = new FormData($('#frmStage23')[0]);
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
                	$('#stage22_remark').val(litigation_courtcase_detail['forwdistheadoff_remark']);
                	
                	$('#stage23').hide();
                	$('#stage22').show();
                	
                	$('#btnNext22').show();
                	$('#btnSkip22').hide();
                	
                	if(litigation_courtcase_detail['forwdistheadoff_date']!=null)
                	{
                		$("#stagedate22").hide();
                		$('#rostagedate22').val(litigation_courtcase_detail['forwdistheadoff_date']);
                		$('#rostagedate22').show();
                	}
                	else
                	{
                		$('#rostagedate22').hide();
                		$("#stagedate22").show();
                	}
                	
                	if(litigation_courtcase_detail['forwdistheadoff_remark']!='')
                    {
                		$("#stage22_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage22_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['forwdistheadoff_date'] != null && litigation_courtcase_detail['forwdistheadoff_remark'] != '')
                	{
                		$('#btnAdd22').hide();
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

$('#btnPrev24').click(function(e){
	var formData = new FormData($('#frmStage24')[0]);
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
                	$('#stage23_remark').val(litigation_courtcase_detail['recptheadoff_remark']);
                	
                	$('#stage24').hide();
                	$('#stage23').show();
                	
                	$('#btnNext23').show();
                	$('#btnSkip23').hide();
                	
                	if(litigation_courtcase_detail['recptheadoff_date']!=null)
                	{
                		$("#stagedate23").hide();
                		$('#rostagedate23').val(litigation_courtcase_detail['recptheadoff_date']);
                		$('#rostagedate23').show();
                	}
                	else
                	{
                		$('#rostagedate23').hide();
                		$("#stagedate23").show();
                	}
                	
                	if(litigation_courtcase_detail['recptheadoff_remark']!='')
                    {
                		$("#stage23_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage23_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['recptheadoff_date'] != null && litigation_courtcase_detail['recptheadoff_remark'] != '')
                	{
                		$('#btnAdd23').hide();
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

$('#btnPrev25').click(function(e){
	var formData = new FormData($('#frmStage25')[0]);
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
                	$('#stage24_remark').val(litigation_courtcase_detail['recptlegalfdca_remark']);
                	
                	$('#stage25').hide();
                	$('#stage24').show();
                	
                	$('#btnNext24').show();
                	$('#btnSkip24').hide();
                	
                	if(litigation_courtcase_detail['recptlegalfdca_date']!=null)
                	{
                		$("#stagedate24").hide();
                		$('#rostagedate24').val(litigation_courtcase_detail['recptlegalfdca_date']);
                		$('#rostagedate24').show();
                	}
                	else
                	{
                		$('#rostagedate24').hide();
                		$("#stagedate24").show();
                	}
                	
                	if(litigation_courtcase_detail['recptlegalfdca_remark']!='')
                    {
                		$("#stage24_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage24_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['recptlegalfdca_date'] != null && litigation_courtcase_detail['recptlegalfdca_remark'] != '')
                	{
                		$('#btnAdd24').hide();
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

$('#btnPrev_seletion4').click(function(e){
	var formData = new FormData($('#frmStage_seletion4')[0]);
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
                	$('#stage25_remark').val(litigation_courtcase_detail['forwheadoff_remark']);
                	
                	$('#stage_seletion4').hide();
            		$('#stage25').show();
                	
                	$('#btnNext25').show();
                	$('#btnSkip25').hide();
                	
                	if(litigation_courtcase_detail['forwheadoff_date']!=null)
                	{
                		$("#stagedate25").hide();
                		$('#rostagedate25').val(litigation_courtcase_detail['forwheadoff_date']);
                		$('#rostagedate25').show();
                	}
                	else
                	{
                		$('#rostagedate25').hide();
                		$("#stagedate25").show();
                	}
                	
                	if(litigation_courtcase_detail['forwheadoff_remark']!='')
                    {
                		$("#stage25_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage25_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['forwheadoff_date'] != null && litigation_courtcase_detail['forwheadoff_remark'] != '')
                	{
                		$('#btnAdd25').hide();
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

$('#btnPrev26').click(function(e){
	var formData = new FormData($('#frmStage26')[0]);
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
                	var judgmentses_isjudgaccorcon = litigation_courtcase_detail['judgmentses_isjudgaccorcon'];
                	var judgmentses_isfboapphigh = litigation_courtcase_detail['judgmentses_isfboapphigh'];
                	var stageno = obj['stage'];
                	$('#stage26').hide();
                	
                	if(judgmentses_isjudgaccorcon==0)
                	{
	                	$('#stage25_remark').val(litigation_courtcase_detail['forwheadoff_remark']);
	                	
	                	$('#stage25').show();
	                	
	                	$('#btnNext25').show();
	                	$('#btnSkip25').hide();
	                	
	                	if(litigation_courtcase_detail['forwheadoff_date']!=null)
	                	{
	                		$("#stagedate25").hide();
	                		$('#rostagedate25').val(litigation_courtcase_detail['forwheadoff_date']);
	                		$('#rostagedate25').show();
	                	}
	                	else
	                	{
	                		$('#rostagedate25').hide();
	                		$("#stagedate25").show();
	                	}
	                	
	                	if(litigation_courtcase_detail['forwheadoff_remark']!='')
	                    {
	                		$("#stage25_remark").attr("readonly","readonly");
	                    }
	                    else
	                    {
	                    	$("#stage25_remark").removeAttr("readonly","readonly");
				        }
	                	
	                	if(litigation_courtcase_detail['forwheadoff_date'] != null && litigation_courtcase_detail['forwheadoff_remark'] != '')
	                	{
	                		$('#btnAdd25').hide();
	                	}
                	}
                	
                	if(judgmentses_isjudgaccorcon==1 && judgmentses_isfboapphigh==1)
                	{
                		$('#stage18_remark').val(litigation_courtcase_detail['judgmentses_remark']);
                    	
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

$('#btnPrev27').click(function(e){
	var formData = new FormData($('#frmStage27')[0]);
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
                	$('#stage26_remark').val(litigation_courtcase_detail['applyhighcourt_remark']);
                	
                	$('#stage27').hide();
                	$('#stage26').show();
                	
                	$('#btnNext26').show();
                	$('#btnSkip26').hide();
                	
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
                	
                	if(litigation_courtcase_detail['applyhighcourt_remark']!='')
                    {
                		$("#stage26_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage26_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['applyhighcourt_date'] != null && litigation_courtcase_detail['applyhighcourt_remark'] != '')
                	{
                		$('#btnAdd26').hide();
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

$('#btnPrev28').click(function(e){
	var formData = new FormData($('#frmStage28')[0]);
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
                	$('#stage27_remark').val(litigation_courtcase_detail['legalarguhigh_remark']);
                	
                	$('#stage28').hide();
                	$('#stage27').show();
                	
                	$('#btnNext27').show();
                	$('#btnSkip27').hide();
                	
                	if(litigation_courtcase_detail['legalarguhigh_date']!=null)
                	{
                		$("#stagedate27").hide();
                		$('#rostagedate27').val(litigation_courtcase_detail['legalarguhigh_date']);
                		$('#rostagedate27').show();
                	}
                	else
                	{
                		$('#rostagedate27').hide();
                		$("#stagedate27").show();
                	}
                	
                	if(litigation_courtcase_detail['legalarguhigh_remark']!='')
                    {
                		$("#stage27_remark").attr("readonly","readonly");
                    }
                    else
                    {
                    	$("#stage27_remark").removeAttr("readonly","readonly");
			        }
                	
                	if(litigation_courtcase_detail['legalarguhigh_date'] != null && litigation_courtcase_detail['legalarguhigh_remark'] != '')
                	{
                		$('#btnAdd27').hide();
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
$('#fit_for_appeal_no').click(function(e){
	$('#intimated_decision').hide();
});

$('#fit_for_appeal_yes').click(function(e){
	$('#intimated_decision').show();
});