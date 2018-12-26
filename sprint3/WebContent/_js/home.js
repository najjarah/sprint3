function init(){
	showDate();
	showTables();
}

var dataM = [
	{
		status: "success",
		app: "BLM",
		code: "00004",
		seve: "C",
		des: "some des",
		sol: "solve it"
		 
	},
	{
		status: "danger",
		app: "CLM",
		code: "000036",
		seve: "w",
		des: "some des",
		sol: "solve it"
		 
	},
	{
		status: "info",
		app: "KLM",
		code: "000046",
		seve: "e",
		des: "some des",
		sol: "solve it"
		 
	},
	{
		status: "warning",
		app: "CLM",
		code: "0000366",
		seve: "w",
		des: "some des",
		sol: "solve it"
		 
	},
	{
		status: "active",
		app: "GLM",
		code: "000086",
		seve: "w",
		des: "some des",
		sol: "solve it"
		 
	},
	{
		status: "warning",
		app: "CLM",
		code: "0000366",
		seve: "w",
		des: "some des",
		sol: "solve it"
		 
	},
	{
		status: "success",
		app: "BLM",
		code: "00004",
		seve: "C",
		des: "some des",
		sol: "solve it"
		 
	},
	{
		status: "danger",
		app: "CLM",
		code: "000036",
		seve: "w",
		des: "some des",
		sol: "solve it"
		 
	},

	
];

var dataLeft = [
	{
		status: "success",
		app: "BLM",
		DN: 50,
		DP: 30		 
	},
	{
		status: "danger",
		app: "CLM",
		DN: 30,
		DP: 20	 
	},
	{
		status: "info",
		app: "KLM",
		DN: 20,
		DP: 10		 
	},
	{
		status: "warning",
		app: "GLM",
		DN: 10,
		DP: 5		 
	},
	
];



var dataRight = [
	{
		status: "danger",
		sev: "critical",
		DN: 50,
		DP: 30		 
	},
	{
		status: "warning",
		sev: "warning",
		DN: 30,
		DP: 20	 
	},
	{
		status: "info",
		sev: "error",
		DN: 20,
		DP: 10		 
	},
	
];



function showDate(){
	var d = new Date();
	document.getElementById("navdate").innerHTML = d.toDateString();
	document.getElementById("mydate").innerHTML += " " + d.toDateString();
}


function showTables(){
	showMidTable();
	showLeftTable();
	showRightTable();
}

function showMidTable()
{
	for(i = 0; i < dataM.length; i++){
		$("#mid-table").append("<tr class='" + dataM[i].status + "'><td>" + i + "</td>"
				+ "<td>" + dataM[i].app + "</td>"
				+ "<td>" + dataM[i].code + "</td>"
				+ "<td>" + dataM[i].seve + "</td>"
				+ "<td>" + dataM[i].des + "</td>"
				+ "<td>" + dataM[i].sol + "</td>"
				+"</tr>");
	}
}


function showLeftTable()
{
	for(i = 0; i < dataLeft.length; i++){
		$("#left-table").append("<tr class='" + dataLeft[i].status + "'>"
				+ "<td>" + dataLeft[i].app + "</td>"
				+ "<td>" + dataLeft[i].DN + "</td>"
				+ "<td>" + dataLeft[i].DP + "</td>"
				+"</tr>");
	}
}




function showRightTable()
{
	for(i = 0; i < dataRight.length; i++){
		$("#right-table").append("<tr class='" + dataRight[i].status + "'>"
				+ "<td>" + dataRight[i].sev + "</td>"
				+ "<td>" + dataRight[i].DN + "</td>"
				+ "<td>" + dataRight[i].DP + "</td>"
				+"</tr>");
	}
}