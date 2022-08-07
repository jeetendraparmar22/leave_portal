<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Bazarprivee | Order Print</title>

<link href='%BasePath%files/assets/css/bootstrap.min.css' rel="stylesheet">
<link href='%BasePath%files/assets/font-awesome/css/font-awesome.css' rel="stylesheet">
<link href='%BasePath%files/assets/css/animate.css' rel="stylesheet">
<link href='%BasePath%files/assets/css/style.css' rel="stylesheet">

<link href="%BasePath%files/assets/css/custom.css" rel="stylesheet">

</head>

<body class="white-bg">

<table id="printbutton" width="100%" border="0" cellspacing="0" cellpadding="0">
	<tr>
    <td height="20">&nbsp;</td>
  </tr>
  <tr>
    <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
    	<tr>
          <td height="34" align="center" valign="middle" style="font-size:24px; font-weight:bold;">
          	<input type="button" onclick="printDiv('printableArea')" value="print!" class="btn btn-primary" style="padding:3px;">
          </td>
        </tr>
      </table></td>
  </tr>
  <tr>
    <td height="20">&nbsp;</td>
  </tr>
</table>
<div id="printableArea">
                <div class="wrapper wrapper-content p-xl">
                    <div class="ibox-content p-xl">
                            <div class="row">
                                <div class="col-sm-6">
                                    <h5>To:</h5>
                                    <address>
                                        <strong>%customer_name%</strong><br>
                                        %address_line1%<br>
                                        %address_line2%<br>
                                        %area%<br>
                                        %landmark%<br>
                                        %pincode%<br>
                                        <abbr title="mobile">Contact No:</abbr> %contact_no%
                                    </address>
                                </div>

                                <div class="col-sm-6 text-right">
                                    <h4>Order No.</h4>
                                    <h4 class="text-navy">%order_id%</h4>
                                    <p>
                                        <span><strong>Created Date:</strong> %created_date%</span><br/>
                                        <span><strong>Delivery Date & Time:</strong> %delivery_date_time%</span>
                                    </p>
                                </div>
                            </div>

                            <div class="table-responsive m-t">
                                <table class="table invoice-table">
                                    <thead>
                                    <tr>
                                        <th>Item List</th>
                                        <th>Unit Price</th>
                                        <th>Quantity</th>
                                        <th>Amount</th>
                                        <th>Discount</th>                                        
                                        <th>Total Price</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    %data%
                                    </tbody>
                                </table>
                            </div><!-- /table-responsive -->

                            <table class="table invoice-total">
                                <tbody>
                                <tr>
                                    <td><strong>Sub Total:</strong></td>
                                    <td>%sub_total%</td>
                                </tr>
                                <tr>
                                    <td><strong>TAX:</strong></td>
                                    <td>%tax%</td>
                                </tr>
                                <tr>
                                    <td><strong>Shipping Cost:</strong></td>
                                    <td>%shipping_cost%</td>
                                </tr>
                                <tr>
                                    <td><strong>Payable Amount:</strong></td>
                                    <td>%payable_amount%</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

    </div>
</div>
    <!-- Mainly scripts -->
    
    
    <script src="%BasePath%files/assets/js/jquery-2.1.1.js"></script>
<script src="%BasePath%files/assets/js/bootstrap.min.js"></script>
<script src="%BasePath%files/assets/js/plugins/metisMenu/jquery.metisMenu.js"></script>
<script src="%BasePath%files/assets/js/plugins/slimscroll/jquery.slimscroll.min.js"></script>
<script src="%BasePath%files/assets/js/plugins/jquery-ui/jquery-ui.min.js"></script>
<script src="%BasePath%files/assets/js/plugins/jsTree/jstree.min.js"></script>
<script src="%BasePath%files/assets/js/inspinia.js"></script>

    <script type="text/javascript">
        //window.print();
        
        function printDiv(divName) 
	{
		var printContents = document.getElementById(divName).innerHTML;
		var originalContents = document.body.innerHTML;
		document.body.innerHTML = printContents;
		window.print();
		document.body.innerHTML = originalContents;
	}
    </script>

</body>

</html>