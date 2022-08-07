<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta http-equiv="content-type" content="text/html; charset=windows-1252">
</head>
<body>
<img src="header.png" alt="no image" width="100%"/>
<br/><br/>
<table width="100%" style="border: 1px solid #8e8e8e; font-family: arial;" cellpadding="0" cellspacing="0">
	<tr valign="top">
		<td colspan="2" style="text-align:center;border: 1px solid #8e8e8e;line-height: 28px;">Salary Slip for the month of %pay_slip_month%</td>
	</tr>
	<tr valign="top" >
		<td width="50%" style="border:1px solid #8e8e8e; border-right: 0px;">
			<table width="100%" cellpadding="0" cellspacing="0">
				<tr>
					<td style="width:30%;padding-left: 5px;">Employee Id</td>
					<td style="width:70%;padding-left: 5px;">%card_no%</td>
				</tr>
				<tr>
					<td style="width:30%;padding-left: 5px;">Employee Name</td>
					<td style="width:70%;padding-left: 5px;">%username%</td>
				</tr>
				<tr>
					<td style="width:30%;padding-left: 5px;">Department</td>
					<td style="width:70%;padding-left: 5px;">%department%</td>
				</tr>
				<tr>
					<td style="width:30%;padding-left: 5px;">Designation</td>
					<td style="width:70%;padding-left: 5px;">%designation%</td>
				</tr>
			</table>
		</td>
		<td width="50%" style="border:1px solid #8e8e8e; border-left: 0px;">
			<table width="100%" cellpadding="0" cellspacing="0">
				<tr>
					<td style="width:30%;padding-left: 5px;">DOJ</td>
					<td style="width:70%;padding-left: 5px;">%joining_date%</td>
				</tr>
				<tr>
					<td style="width:30%;padding-left: 5px;">Bank</td>
					<td style="width:70%;padding-left: 5px;">%bank_name%</td>
				</tr>
				<tr>
					<td style="width:30%;padding-left: 5px;">Bank A/C No</td>
					<td style="width:70%;padding-left: 5px;">%account_no%</td>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td style="width: 60%;border: 1px solid #8e8e8e;">
			<table style="width:100%;" cellpadding="0" cellspacing="0">
				<tr>
					<th style="width: 40%;text-align:left;line-height: 30px;border-bottom: 1px solid #8e8e8e;padding-left: 5px;">EARNING</th>
					<th style="width: 30%;text-align:left;line-height: 30px;border-bottom: 1px solid #8e8e8e;border-right: 1px solid #8e8e8e;padding-left: 5px;">Amount(Rs.)</th>
				</tr>
				<tr>
					<td style="padding-left: 5px;">Basic</td>
					<td style="padding-left: 5px;">%basic%</td>
				</tr>
				<tr>
					<td style="padding-left: 5px;">H R A</td>
					<td style="padding-left: 5px;">%hra%</td>
				</tr>
				<tr>
					<td style="padding-left: 5px;">Medical Re</td>
					<td style="padding-left: 5px;">%medical_re%</td>
				</tr>
				<tr>
					<td style="padding-left: 5px;">Conveyance</td>
					<td style="padding-left: 5px;">%conveyance%</td>
				</tr>
				<tr>
					<td style="padding-left: 5px;">Special Allowance</td>
					<td style="padding-left: 5px;">%special_allowance%</td>
				</tr>
				<tr>
					<td style="padding-left: 5px;">Others</td>
					<td style="padding-left: 5px;">%other%</td>
				</tr>
				<tr>
					<td style="padding-left: 5px;">Leave Encashment</td>
					<td style="padding-left: 5px;">%leave_encashment%</td>
				</tr>
				<tr>
					<td style="padding-left: 5px;">Other Allowance</td>
					<td style="padding-left: 5px;">%other_allowance%</td>
				</tr>
				<tr>
					<td>&nbsp;</td>
					<td></td>
				</tr>
				<tr>
					<td>&nbsp;</td>
					<td></td>
				</tr>
				<tr>
					<td>&nbsp;</td>
					<td></td>
				</tr>
				<tr>
					<td>&nbsp;</td>
					<td></td>
				</tr>
			</table>
		</td>
		<td style="width: 40%;border: 1px solid #8e8e8e;vertical-align: top;border-left: 0px;">
			<table style="width:100%;" cellpadding="0" cellspacing="0">
				<tr >
					<th style="width: 50%;text-align:left;line-height: 30px;border-bottom: 1px solid #8e8e8e;padding-left: 5px;">DEDUCTIONS</th>
					<th style="width: 50%;text-align:left;line-height: 30px;border-bottom: 1px solid #8e8e8e;padding-left: 5px;">Amount(Rs.)</th>
				</tr>
				<tr>
					<td style="padding-left: 5px;">PT</td>
					<td style="padding-left: 5px;">%pt%</td>
				</tr>
				%tds_display%
				%lwp_display%
				<tr>
					<td style="padding-left: 5px;">Other Deductions</td>
					<td style="padding-left: 5px;">%other_deductions%</td>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td style="width:60%;border-bottom: 1px solid #8e8e8e;">
			<table style="width:100%;" cellpadding="0" cellspacing="0">
				<tr>
					<td style="width: 50%;padding: 10px;font-weight: 700;">Total Earnings</td>
					<td style="width: 50%;text-align: right;padding: 10px;font-weight: 700;">%salary%</td>
				</tr>
			</table>
		</td>
		<td style="width: 40%;border-bottom: 1px solid #8e8e8e;">
			<table style="width:100%;" cellpadding="0" cellspacing="0">
				<tr>
					<td style="width: 50%;padding: 10px;font-weight: 700;">Total Deduction</td>
					<td style="width: 50%;text-align: right;padding: 10px;font-weight: 700;">%total_deduction%</td>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td colspan="2" style="width: 30%;font-weight: 700;padding: 10px;border-bottom:1px solid #8e8e8e;">Net Salary &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; %net_payable_amount%</td>
	</tr>
	<tr>
		<td colspan="2" style="padding: 10px;width: 100%;">
			Message <br>
			This is a computer generated pay slip, Company Seal & Signature are not required.
		</td>
	</tr>
</table>
<br/><br/><br/><br/><br/><br/><br/><br><br/><br/><br/><br/><br/>
<img src="footer.png" alt="no image" width="100%"/>
</body></html>