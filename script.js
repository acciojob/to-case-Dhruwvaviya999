function toCase(text) {
  // write your code here
	let firstText = text[0].toUpperCase() + text.slice(1);
	let secondText = text.toUpperCase();
	return firstText + '-' + secondText;
	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
