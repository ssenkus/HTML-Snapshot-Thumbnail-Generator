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
			    var extra_canvas = document.createElement("canvas");
                extra_canvas.setAttribute('width',100);
                extra_canvas.setAttribute('height',100);
                var ctx = extra_canvas.getContext('2d');
                ctx.drawImage(canvas,0,0,canvas.width, canvas.height,0,0,100,100);
                var dataURL = extra_canvas.toDataURL();
                var img = $(document.createElement('img'));
                img.attr('src', dataURL);
                // insert the thumbnail at the top of the page
                $('#result').append(img);
			
			

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

