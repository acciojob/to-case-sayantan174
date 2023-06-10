function toCase(text) {
  // write your code here
	text=text.toLowerCase()+"-"+text.toUpperCase();
	return text;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
