// function getID(theID){
	// console.log(theID)
	// if(theID=="spotify"){
		
	// 	var topic = "Spotify Street Team";

	// 	var data = ["In Spotify Street Team am I the company's",
	// 	"face towards students at Linköpings University.",
	// 	"I am planning and hosting events, in collaboration",
	// 	"with KTH and Chalmers.", "December 2014 - now"];
	// }
	// else {
	// 	var data = ["hej"];
	// }

	var svg1 = d3.select(".fancyDiv")
			   .append("svg")
			   .attr("preserveAspectRatio", "xMidYMid")
				.attr("viewBox", "0 0 700 400");

				console.log("hej");

	//creating the objects
	var svgText = svg1.selectAll("text")
                  .data("topic")
                  .enter()


    svgText.append("text")
			.attr("font-size", "29px")
			.attr("fill", "#000000")
			.attr("x", 0)
			.attr("y", 150)
			.text(function(d){
				return d;
			})
// }