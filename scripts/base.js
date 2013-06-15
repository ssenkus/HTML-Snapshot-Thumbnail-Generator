	function ajaxLoad() {
	    var ed = tinyMCE.get('content');
	    ed.setContent(	'<div style="text-align:center">' + 
							'<h1>AWESOME PICTURE</h1>' +
							'<p><img style="width: 100px; height: 100px; float:left; margin: 10px;" src="images/mount_hood_USGS.jpg" />"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ' + 
							'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' + 
							' ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>' + 
						'</div>');
	}

	function ajaxSave() {
	    var ed = tinyMCE.get('content');
	    $('#output').empty().append(ed.getContent());
	    //$.ajax({});

	    var target = document.getElementById('output');

	    html2canvas(target, {
	        onrendered: function (canvas) {
	            var data = canvas.toDataURL();
	            $('#testImg').attr("src", data); /*.css({
	                'width': '160px',
	                'height': '160px'
	            }); */
	        }
	    });
	}


	$(document).ready(function () {
	    tinyMCE.init({
	        mode: "textareas",
	        theme: "modern",
	        plugins: "preview,media,charmap,textcolor,visualblocks,code",
	        toolbar: "preview,media,charmap,textcolor,visualblocks,code",
	        width: 450,
            height: 250
	    });
        $('#load').click(function() {
            ajaxLoad();
        });
        $('#save').click(function() {
            ajaxSave();
        });

	});

