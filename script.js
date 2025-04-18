function toCase(text) {
  // write your code here
	let firstText = text.toLowerCase();
	let secondText = text.toUpperCase();
	return firstText + '-' + secondText;
	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
