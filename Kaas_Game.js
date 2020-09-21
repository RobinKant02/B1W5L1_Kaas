alert("Welkom bij mijn kaas spel");
alert("Beantwoord de vragen met ja of nee");
var kaas_geel = prompt("Is de kaas geel");
kaas_geel = kaas_geel.toLowerCase();


if(kaas_geel == "ja"){
	var gaten = prompt("Zitten er gaten in?");
	if(gaten == "ja"){
		var duur = prompt("Is de kaas belachlijk duur?");
		if(emmenthaler == "ja"){
			alert("Uw kaas is Emmenthaler");
		}
		else{
			alert("Uw kaas is Leerdammer");
		}
	}
	else{
		var hard = prompt("Is de kaas hard als steen?");
		if(hard == "ja"){
			alert("Uw kaas is Parmigiano Reggiano");			
		}
		else{
			alert("Uw kaas is Goude Kaas");
		}
	}
}
else{
	var schimmels = prompt("Heeft de kaas blauwe schimmels?");
	if(schimmels == "ja"){
		var korst_ja = prompt("Heeft de kaas een korst?");
		if(bleu_de_rochbaron == "ja"){
			alert("Uw kaas is de Bleu de Rochbaron");
		}
		else{
			alert("Uw kaas is de Fourme D Ambert");
		}
	}
	else{
		var korst_nee = ("Heeft de kaas een korst?");
		if(camembert == "ja"){
			alert("Uw kaas is Camembert");
		}
		else{
			alert("Uw kaas is Mozzarella");
		}
	}
}