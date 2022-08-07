<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leave Application</title>
    @include('frontend.layout.include_css')
</head>

<body>
    <div id="wrapper">
        @include('frontend.layout.sidebar')
        <div id="page-wrapper" class="gray-bg">
            @include('frontend.layout.header')
            <div class="row wrapper border-bottom white-bg page-heading">
                <div class="col-sm-5">
                    <h2>Leave Dashboard</h2>
                    <ol class="breadcrumb">
                        <li><a href="">Home</a></li>
                        <li class="active">
                            <strong> Leave Dashboard</strong>
                        </li>
                    </ol>
                </div>
                <!--<div class="col-sm-2">
                <h2>Total Leaves</h2>
                <h3 class="no-margins"><?php //echo $leaves->leaves; 
                                        ?></h3>
            </div>-->
                <div class="col-sm-1">
                    <h2>CL/SL</h2>
                    
                    <h3 class="no-margins"></h3>
                </div>

                <!-- <div class="col-sm-1">
                <h2>SL</h2>
                <h3 class="no-margins"><? //php echo $sick_leaves->sick_leave; 
                                        ?></h3>
            </div> -->

                <div class="col-sm-1">
                    <h2>PL</h2>
                    <h3 class="no-margins"></h3>
                </div>
                <div class="col-sm-1">
                    <h2>Total LWP</h2>
                    <h3 class="no-margins"></h3>
                </div>

                <div class="col-sm-12 divdot">
                    <ul>
                        <li><span class="dot-leave dashbordbudge"></span> <label> Leaves </label></li>
                        <li><span class="dot-lwp dashbordbudge"></span> <label> LWP </label></li>
                        <li><span class="dot-work-leave dashbordbudge"></span> <label> Work Leaves </label></li>
                        <li><span class="dot-first-half dashbordbudge"></span> <label> First Half </label></li>
                        <li><span class="dot-second-half dashbordbudge"></span> <label> Second Half </label></li>
                        <li><span class="dot-birthday dashbordbudge"></span> <label> Birthday </label></li>
                        <li><span class="dot-holiday dashbordbudge"></span> <label> Holidays </label></li>
                        <li><span class="dot-current-date dashbordbudge"></span> <label> Current Date </label></li>
                        <li><span class="dot-unplanned dashbordbudge"></span> <label> Unplanned </label></li>
                    </ul>
                </div>

            </div>
            <div class="wrapper wrapper-content animated fadeInRight">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="ibox float-e-margins">
                            <div class="ibox-title">
                                <h5>Calender</h5>
                            </div>
                            <div class="ibox-content">
                                <div id="calendar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            @include('frontend.layout.footer');
        </div>
        
    </div>

</body>
<script>
    $(document).ready(function() {
        var year = parseInt($("#year option:selected").val());
        var today = new Date();
        var date = today.getDate();
        var month = today.getMonth();
        $('#calendar').fullCalendar({
            height: 800,
            // defaultDate: new Date(2016, 4, 20),
            defaultDate: new Date(year, month, date),
            eventSources: [{
                url: 'dashboard/get_calender',
                type: 'POST', // Send post data
                //data: {facilitylist_id : facility_list_id},
                error: function() {
                    alert('there was an error while fetching events!');
                }
            }],
            utc: true,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'year,month,agendaWeek,agendaDay'
            },
            selectable: false,
            selectHelper: false,

            editable: false,
            eventRender: function(event, element, view) {

                // event.start is already a moment.js object
                // we can apply .format()

                var dateString = event.start.format("YYYY-MM-DD");
                var get_class_color = event.class_color;

                // alert(dateString);
                if (get_class_color != '') {
                    $(view.el[0]).find('.fc-day[data-date=' + dateString + ']').css('background-color', '#ff6666');
                }
                
                element.popover({
                    // title: event.title,
                    content: event.description,
                    trigger: 'hover',
                    placement: 'top',
                    container: 'body'
                });
            },
            eventAfterRender: function(event, element, view) {

                if (event.half == "1") {
                    $(element).css('width', "90px");
                } else if (event.half == "2") {
                    $(element).css('width', "90px");
                    $(element).css('float', "right");
                }
            }
        });

        $('#year').change(function() {
            $('#change_year').submit();
        });
    });
</script>

</html>