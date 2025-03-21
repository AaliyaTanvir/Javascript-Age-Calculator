function CalculateAge(){
	let Bage = document.getElementById('birthdate').value;
	const dob = new Date(Bage);
	let current_date = new Date();
	
	let y = current_date.getFullYear() - dob.getFullYear();
	let m = current_date.getMonth() - dob.getMonth();
	let d = current_date.getDate() - dob.getDate();
	document.getElementById("result").innerHTML = `You are ${y} year ${m} months ${d} days old`;
}