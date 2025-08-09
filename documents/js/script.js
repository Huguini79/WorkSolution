document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('create_button').addEventListener('click', function() {
		const title = document.getElementById('title_input').value;
		const body = document.getElementById('body_input').value;
		const background_color = document.getElementById('background_color_input').value;
		if(background_color === "") {
			background_color = "white";
		}
		const file_name = document.getElementById('file_name_input').value + ".html";
		const file = new File(["<style>body {background-color: "+ background_color + "; text-align: center;}</style>"+ "<h1>"+ title + "</h1>"+ "<br><br><br><br>" + "<p>"+ body+ "</p>"], file_name, {
			type: "text/html",
		});
		
		const url = URL.createObjectURL(file);
        const a = document.createElement("a");
        a.href = url;
        a.download = file_name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
		
	});
});