	function ajaxLoad() {
	    var ed = tinyMCE.get('content');
	    ed.setContent('<h1>AWESOME VIDEO</h1><iframe width="240" height="155" src="http://www.youtube.com/embed/JeJCjifFIuI" frameborder="0" allowfullscreen></iframe><br /><p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>');
	}

	function ajaxSave() {
	    var ed = tinyMCE.get('content');
	    $('#output').empty().append(ed.getContent());
	    //$.ajax({});

	    var target = document.getElementById('output');

	    html2canvas(target, {
	        onrendered: function (canvas) {
	            var data = canvas.toDataURL();
	            $('#testImg').attr("src", data).css({
	                'width': '160px',
	                'height': '80px'
	            });
	        }
	    });
	}


	$(document).ready(function () {
	    tinyMCE.init({
	        mode: "textareas",
	        theme: "modern",
	        plugins: "preview,media,charmap,textcolor,visualblocks,code",
	        toolbar: "preview,media,charmap,textcolor,visualblocks,code",
	        width: 300,
            height: 200
	    });
        $('#load').click(function() {
            ajaxLoad();
        });
        $('#save').click(function() {
            ajaxSave();
        });

	});

