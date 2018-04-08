function doToggle(ProjectID)
{

		var elementUL = document.getElementById("ulProj"+ProjectID);
		var elementButton = document.getElementById("btnProj"+ProjectID);
		// document.getElementById("liPR1").style.display = "none";
		// document.getElementById("liPT1").style.display = "none";

		if (elementUL.style.display != "block"){
			elementUL.style.display = "block";
			elementButton.innerText = "Hide Details";

		}else{
			elementUL.style.display = "none";
			elementButton.innerText = "View Details";
		}
	
}