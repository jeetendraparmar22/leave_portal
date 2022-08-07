@include('frontend.layout.include_css')

<div class="row border-bottom">
	<nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
		<div class="navbar-header">
			<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>
			<div class="navbar-form-custom">
				<div class="form-group">

				</div>
			</div>
		</div>
		<ul class="nav navbar-top-links navbar-right">
			
			<li>Select Year : </li>
			<li>
				<form name="change_year" id="change_year" method="POST" action="">
					<select name="year" id="year" class="form-control">
						<option value="2022" >2022</option>
						<option value="2021" >2021</option>
						<option value="2020" >2020</option>
						<option value="2019" >2019</option>
						<option value="2018" >2018</option>
						<option value="2017" >2017</option>
					</select>
				</form>
			</li>
			<li>&nbsp;&nbsp;&nbsp;</li>
			<li>
				<span class="m-r-sm text-muted welcome-message">Welcome to Leave Application Admin Panel,&nbsp;
					</span>
			</li>
			<li>
				<a href="">
					<i class="fa fa-sign-out"></i> Log out
				</a>
			</li>
		</ul>

	</nav>
</div>