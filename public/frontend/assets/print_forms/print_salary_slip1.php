<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta http-equiv="content-type"
	content="text/html; charset=windows-1252">
<link rel="STYLESHEET" href="invoice1_files/print_static.css"
	type="text/css">
</head>
<body>
	<div id="body">
	<img src="imgpsh_fullsizeheader.png" alt="no image" width="100%"/>
		<div id="content">
			<br/><br/>
				<div style="text-align: center">
					<b>Salary Slip for the month of %pay_slip_month% </b>
				</div>
			<br/><br/>
			<table width="100%">
			<tr>
				<td>
					<table style="width: 100%; font-size: 12pt;">
						<tbody>
							<tr>
								<td>Employee Id:</td>
								<td>%card_no%</td>
							</tr>
							<tr>
								<td>Employee Name:</td>
								<td>%username%</td>
							</tr>
							<tr>
								<td>Department:</td>
								<td>%department%</td>
							</tr>
							<tr>
								<td>Designation:</td>
								<td>%designation%</td>
							</tr>
						</tbody>
					</table>
				</td>
				<td>
					<table style="width: 100%; font-size: 12pt;">
						<tbody>
							<tr>
								<td>Joining date:</td>
								<td>%joining_date%</td>
							</tr>
							<tr>
								<td>Bank Name:</td>
								<td>%bank_name%</td>
							</tr>
							<tr>
								<td>Bank Account No:</td>
								<td>%account_no%</td>
							</tr>
							<tr>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
							</tr>
							<tr>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
			</table>
			<br/><br/>
			<table width="100%">
			<tr>
			<td>
				<table width="100%">
				<tbody>
					<tr><td colspan ="2" style="text-align: center;">EARNINGS</td></tr>
					<tr style="background-color: #eee; font-size: 12pt;">
						<th style="padding: 8px 6px; text-align: left;">Salary Head</th>
						<th style="padding: 8px 6px; text-align: center ;">Amount(Rs.)</th>
					</tr>
					<tr style="font-size: 10pt;">
						<td style="padding: 4px; text-align: left; font-weight: normal">Basic</td>
						<td style="padding: 4px; text-align: center; font-weight: normal;">%basic%</td>
					</tr>
					<tr style="font-size: 10pt;">
						<td style="padding: 4px; text-align: left; font-weight: normal;">H R A</td>
						<td style="padding: 4px; text-align: center; font-weight: normal;">%hra%</td>
					</tr>
					<tr style="font-size: 10pt;">
						<td style="padding: 4px; text-align: left; font-weight: normal;">Medical Re</td>
						<td style="padding: 4px; text-align: center; font-weight: normal;">%medical_re%</td>
					</tr>
					<tr style="font-size: 10pt;">
						<td style="padding: 4px; text-align: left; font-weight: normal;">Conveyance</td>
						<td style="padding: 4px; text-align: center; font-weight: normal;">%conveyance%</td>
					</tr>
					<tr style="font-size: 10pt;">
						<td style="padding: 4px; text-align: left; font-weight: normal;">Special Allowance</td>
						<td style="padding: 4px; text-align: center; font-weight: normal;">%special_allowance%</td>
					</tr>
					<tr style="font-size: 10pt;">
						<td style="padding: 4px; text-align: left; font-weight: normal;">Others</td>
						<td style="padding: 4px; text-align: center; font-weight: normal;">%other%</td>
					</tr>
					<tr style="background-color: #eee; font-size: 12pt;">
						<th style="padding: 8px 6px; text-align: left;">Salary(ctc)/pm</th>
						<th style="padding: 8px 6px; text-align: center ;">%salary%</th>
					</tr>
				</tbody>
				</table>
			</td>
			<td>
				<table width="100%">
				<tbody>
				<tr><td colspan ="2" style="text-align: center;">DEDUCTIONS</td></tr>
					<tr style="background-color: #eee; font-size: 12pt;">
						<th style="padding: 8px 6px; text-align: left;">Salary Head</th>
						<th style="padding: 8px 6px; text-align: center;">Amount(Rs.)</th>
					</tr>
					<tr style="font-size: 10pt;">
						<td style="padding: 4px; text-align: left; font-weight: normal">PF Employee</td>
						<td style="padding: 4px; text-align: center; font-weight: normal;">-</td>
					</tr>
					<tr style="font-size: 10pt;">
						<td style="padding: 4px; text-align: left; font-weight: normal;">ESI Employee</td>
						<td style="padding: 4px; text-align: center; font-weight: normal;">-</td>
					</tr>
					<tr style="font-size: 10pt;">
						<td style="padding: 4px; text-align: left; font-weight: normal;">&nbsp;</td>
						<td style="padding: 4px; text-align: center; font-weight: normal;">&nbsp;</td>
					</tr>
					<tr style="font-size: 10pt;">
						<td style="padding: 4px; text-align: left; font-weight: normal;">P.T.</td>
						<td style="padding: 4px; text-align: center; font-weight: normal;">%pt%</td>
					</tr>
					<tr style="font-size: 10pt;">
						<td style="padding: 4px; text-align: left; font-weight: normal;">TDS</td>
						<td style="padding: 4px; text-align: center; font-weight: normal;">%tds%</td>
					</tr>
					<tr style="font-size: 10pt;">
						<td style="padding: 4px; text-align: left; font-weight: normal;">Leave Without Pay</td>
						<td style="padding: 4px; text-align: center; font-weight: normal;">%lwp%</td>
					</tr>					
					<tr style="background-color: #eee; font-size: 12pt;">
						<th style="padding: 8px 6px; text-align: left;">Total Deduction</th>
						<th style="padding: 8px 6px; text-align: center ;">%total_deduction%</th>
					</tr>
				</tbody>
				</table>
			</td>
			</tr>
			<tr>
				<th>&nbsp;</th>
				<th>&nbsp;</th>
			</tr>
			<tr>
				<th colspan="2" style="text-align: left;">Net Amount Payable :&nbsp; &nbsp; %net_payable_amount%</th>
				<th></th>
			</tr>
			<tr>
				<th>&nbsp;</th>
				<th>&nbsp;</th>
			</tr>
			<tr>
				<th>&nbsp;</th>
				<th>&nbsp;</th>
			</tr>
			<tr>
				<th colspan="2">Message :- This is a computer generated pay slip, Company Seal & Signature are not required.</th>
			</tr>
			</table>
		</div>
		<br/><br/><br/><br/><br/>
		<img src="imgpsh_fullsizefooter.png" alt="no image" width="100%"/>
	</div>
	<br>
	<br>
</body>
</html>