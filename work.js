

	var dataText = ["2015", "2014"];
	var dataWork = ["LiTHehack", "Twiik", "Lab assistent", "Spotify Street Team", "CoderDojo Nkpg"];
	var dataProj = ["H2inf0", "Kuling", "Quadcopter", "Incognito", "WakeMeApp"];
	var dataSet = [0, 1];
	var dataSetPoly = [0,1,2];
	// console.log(dataWork.length)
	var dataRecRight = [0, 1, 2, 3, 4];
	var dataRectLeft = [0, 1, 2];


	var yCirclePos;



// creating the svg
	var svg = d3.select(".graph")
	   .append("svg")
	   .attr("preserveAspectRatio", "xMidYMid")
	   .attr("viewBox", "0 0 700 500");

	var svgHeader = d3.select(".headerSvg")
	   .append("svg")
	   .attr("preserveAspectRatio", "xMidYMid")
	   .attr("viewBox", "0 0 700 50");

	var svgHeaderText = svgHeader.selectAll("text")
							.data(["PROJECTS", "EXPERIENCE"])
							.enter()

	var svgCircle = svg.selectAll("circle")
	                  .data(dataSet)
	                  .enter()

	var svgText = svg.selectAll("text")
                  .data(dataText)
                  .enter()

    var svgTextWork = svg.selectAll("text")
                  .data(dataWork)
                  .enter()

    var svgTextProj = svg.selectAll("text")
						.data(dataProj)
						.enter()

	var svgRectRight = svg.selectAll("rect")
	                  .data(dataRecRight)
	                  .enter()

	var svgRectLeft = svg.selectAll("rect")
	                  .data(dataRectLeft)
	                  .enter()

	
	var svgLine = svg.selectAll("line")
	                  .data(dataSet)
	                  .enter()

	var svgLineLeft = svg.selectAll("line")
	                  .data(dataSet)
	                  .enter() 

	var svgLineVertical = svg.selectAll("line")
	                  .data(dataSet)
	                  .enter()

	var svgLine2 = svg.selectAll("line")
	                  .data(dataSet)
	                  .enter() 

	var polyline = svg.selectAll("line")
	                  .data(dataSetPoly)
	                  .enter() 

	var polylineLeft = svg.selectAll("line")
	                  .data(dataRectLeft)
	                  .enter() 


drawCircles();

svgHeaderText.append("text")
				.attr("font-size", "30px")
				.attr("x", function(d, i){
					// console.log(d, i)
					return (51+ (i*445));
				})
				.attr("y", 45)
				.attr("fill", "#3a3c3d")
				.text(function(d){
					return d;
				})

// drawing circles and lines
function drawCircles(){
	// drawing the circles
	svgCircle.append("circle")
		.attr("cx", 350)
		.attr("cy", function(d){
		    var yPos = 50 + (d*250);
		    return yPos;
	   	})
		.attr("r", 50)
		.attr("fill", "#d06969");


	// drawing the text in the circles
	svgText.append("text")
			.attr("font-size", "25px")
			.attr("fill", "#ffffff")
			.attr("x", 328)
			.attr("y", function(d, i){
			    var yPos = 58 + (i*300);
			    return yPos;
	   		})
			.text(function(d){
				return d;
			});
}

	// drawing boxes and text

	
	

	

	// drawing the boxes
	svgRectRight.append("rect")
			.attr("height", 35)
			.attr("width", 160)
			.attr("x", 490)
			.attr("y", function(d){
				var yPos = 30 + (d*60); 
				if(d > 2) yPos = 100 + (d*60);
				return yPos;
			})
			.attr("fill", "#3a3c3d")
			.on('click', function(d){ 

				console.log(d)
				// window.location = 'file:///Users/kajsaffranzen/Documents/kajen/fbImage.html';
				// document.getElementById('work').className = 'fancybox';
				document.getElementById('fancybox').style.display = 'none';


			})

	


	svgTextWork.append("text")
				// .attr("font-size", "20px")
				.attr("font-size", function(d){
					if(d.length > 14) return "17px";
					else return "20px";
				})
				
				.attr("x", function(d){
					if(d.length < 6) return 550;
					else if(d.length > 7 && d.length < 12) return 530;
					else if(d.length > 12 && d.length < 14) return 520;
					else if(d.length == 14) return 506;
					else return 504;
				})
				.attr("y", function(d, i){
					var yPos = 55 +(i*60);
					// console.log(d + " " + d.length)
					if(i >= 3) yPos = 125 +(i*60);
					return yPos;
				})
				.attr("fill", "#ffffff")
				.text(function(d){
					return d;
				})

	// drawing the lines
	svgLine.append("line")
			.attr("x1", 399)
			.attr("x2", 490)
			.attr("y1", function(d){
				var yPos = 50 +(d*250)
				return yPos;
			})
			.attr("y2", function(d){
				var yPos = 50 +(d*250)
				return yPos;
			})
			.attr("stroke-width", 2)
			.attr("stroke", "#d06969");


	polyline.append("polyline")      // attach a polyline
		    .style("stroke", "#d06969")  // colour the line
		    .style("fill", "none") 
		    .attr("stroke-width", 2)
		    .attr("points", function(d){
		    	if(d==0) return "420,50 420,169, 490,169";
		    	else if (d==1) return "450,50 450,108, 490,108";
		    	else return "420,300 420,357 490,357"
		    })   					


projectsGraph();			// d=1: y = 170; x: 440->490

// Left side - project
function projectsGraph(){
	
	// drawing the lines
	svgLineLeft.append("line")
			.attr("x1", 199)
			.attr("x2", 300)
			.attr("y1", function(d){
				var yPos = 50 +(d*200)
				return yPos;
			})
			.attr("y2", function(d){
				var yPos = 50 +(d*200)
				return yPos;
			})
			.attr("stroke-width", 2)
			.attr("stroke", "#d06969");

	// drawing the boxes
	svgRectLeft.append("rect")
			.attr("height", 35)
			.attr("width", 160)
			.attr("x", 40)
			.attr("y", function(d){
				var yPos = 30 + (d*60);
				return yPos;
			})
			.attr("fill", "#3a3c3d")
			.on('click', function(d){ 

				console.log(d)
			})
	// adding text
	

	svgTextProj.append("text")
				// .attr("font-size", "20px")
				.attr("text-anchor", "middle")
				.attr("font-size", function(d){
					if(d.length > 14) return "17px";
					else return "20px";
				})
				
				.attr("x", function(d){
					console.log(d + " " + d.length)
					if(d.length < 7) return 115;
					else if(d.length > 7 && d.length < 12) return 120;
					else if(d.length > 12 && d.length < 14) return 60;
					else if(d.length == 14) return 50;
					else return 30;
				})
				// .attr("x", 90)
				.attr("y", function(d, i){
					var yPos = 55 +(i*60);
					return yPos;
				})
				.attr("fill", "#ffffff")
				.text(function(d){
					return d;
				})

	polylineLeft.append("polyline")      // attach a polyline
		    .style("stroke", "#d06969")  // colour the line
		    .style("fill", "none") 
		    .attr("stroke-width", 2)
		    .attr("points", function(d){
		    	if(d==0) return "280,50 280,169, 200,169";
		    	else if (d==1) return "250,50 250,108, 200,108";
		    	else return "250,250 250,307 200,307"
		    }) 

}
	
