var dataText = ["JavaScript", "HTML", "CSS", "Java", "C++", 
				"Objective C", "Wordpress", "Dart","Angular","MATLAB",
				"Agile Development","Photoshop/Illustrator"];
var data = [9.5, 9.5, 9.5, 6, 7, 
			6, 4, 7, 8, 7, 
			8.7, 8];

// creating the svg
var svg = d3.select(".bars")
   .append("svg")
   .attr("preserveAspectRatio", "xMidYMid")
   .attr("viewBox", "0 0 700 650");

var svgText = svg.selectAll("text")
                  .data(dataText)
                  .enter()

var svgRect = svg.selectAll("rect")
                  .data(data)
                  .enter()


svgText.append("text")
	.attr("font-size", "25px")
	.attr("fill", "#d06969")
	.attr("x", 0)
	.attr("y", function(d, i){
		return 55 + (i*50);
	})
	.text(function(d){
		return d;
	})



svgRect.append("rect")
		.attr("height", 40)
		// .attr("width", 160)
		.attr("width", function(d){
			return 190;
		})
		.attr("x", 480)
		.attr("y", function(d,i){
			return 30 + (i*50);
		})
		.attr("fill", "#3a3c3d")

svgRect.append("rect")
		.attr("height", 40)
		// .attr("width", 160)
		.attr("width", function(d){
			return d*19;
		})
		.attr("x", 480)
		.attr("y", function(d,i){
			return 30 + (i*50);
		})
		.attr("fill", "#d06969")