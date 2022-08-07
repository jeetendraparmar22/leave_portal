<!DOCTYPE html>
<html>
<head>
    <title>Leave Application | Admin Panel Login</title>
    @include('frontend.layout.include_css')
    <script type="text/javascript">
        var __config = {
            key: 'IW3HLDXILDQE21QW'
        };
    </script>
    
</head>
<body class="gray-bg">
    <div class="middle-box text-center loginscreen animated fadeInDown">
        <div>
            <div>
               <img alt="logo"  src="{{ url('frontend/image/logo.png') }}"><br/>
            </div>
            <h3>Welcome to Leave Application Portal</h3>
            	
            	{{-- <div class="alert alert-danger fade in error" id="error">  --}}
            		
            	</div>
            	            	
					{{-- <div class="alert alert-success alert-dismissable">
						<button aria-hidden="true" data-dismiss="alert" class="close" type="button"><i class="fa fa-times"></i></button>
												
					</div>
            	 --}}
            	<form id="loginform" action="{{ route('authuser') }}" class="wizard-big" method="post">
                    @csrf
            	<div class="form-group">
                    <input name="username" id="username" type="text" class="form-control" 
                    pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$" placeholder="Username" value="">
                </div>
                <div class="form-group">
                    <input name="password" id="password" type="password" class="form-control" placeholder="Password" value="">
                </div>
                <button name="submit" id="submit" type="submit" class="btn btn-primary block full-width m-b">Login</button>
                
            </form>
            <a href=""><small>Forgot password?</small></a>
            <p class="m-t"> <small>&copy; <?php echo @date('Y');?> All rights reserved. Shiv Technolabs.</small> </p>
        </div>
    </div>
    @include('frontend.layout.include_js')
    <script>
            $(document).ready(function () {
            	$("#loginform").validate({
	                rules:
	                {
	                	username:{required: true, email: true},
	                	password:{required: true,},
	                },
	                messages:
	                {
	                	username:{required: 'Please enter username', 
                        email: 'Please enter a valid email address.',},
	                	password:{required: 'Please enter password.',},
	                },
	               	submitHandler: function (form) {
	               		form.submit();
	               	}
	             });
            });
        </script>
</body>
</html>