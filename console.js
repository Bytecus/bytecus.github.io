document.console = {};

document.console.line = 0;

document.console.debug = false;

function editline(str, l = document.console.line) {
	$("#" + l).html(str);
}

function print(str) {
	document.console.line++;
	$("body").append("<div class=\"line\" id=\"" + document.console.line + "\">" + str + "</div><br>");
}

function run(input) {
	var args = input.split(" ");
	switch(args[0]) {
		case "credits":
			print("Webconsole created by Alexander Hill and Nicholas McDaniel");
			print("https://github.com/NicksWorld");
			break;
		case "socials":
			window.location = "https://twitter.com/bytecus";
			break;
		case "code":
			print("press keys on your keyboard in this order: 1, 2, 3");
			codes.setTrigger(["1","2","3"], function(){
				alert("Code cracked!");
			});
			break;
		case "help":
			print("Commands:<br>credits<br>socials - goto twitter page<br>code - Crack the code (Using js lib)");
			break;
		default:
			print("Invalid command. Use help for a list of commands");
	}
}

document.console.input = "";
document.console.processing = false;

$(document).ready(function() {
	$(document).keydown(function(event) {
		if(!document.console.processing) {
			if(document.console.debug) {
				console.log(event.keyCode + " pressed");
			}
			switch(event.keyCode) {
				case 8:
					document.console.input = document.console.input.substring(0, document.console.input.length - 1);
					break;
				case 13:
					document.console.processing = true;
					run(document.console.input);
					print("guest@bytecus.io:/$ ");
					document.console.processing = false;
					document.console.input = "";
					break;
				case 9:
				case 20:
				case 16:
				case 17:
				case 91:
				case 18:
				case 93:
				case 92:
				case 45:
				case 36:
				case 33:
				case 46:
				case 35:
				case 34:
				case 37:
				case 38:
				case 39:
				case 40:
				case 19:
				case 145:
				case 144:
				case 112:
				case 113:
				case 114:
				case 115:
				case 116:
				case 117:
				case 118:
				case 119:
				case 120:
				case 121:
				case 122:
				case 123:
				case 224:
				case 12:
				case 27:
					break;
				default:
					document.console.input += event.key;
			}
			editline("guest@bytecus.io:/$ " + document.console.input);
		} else {
			if(document.console.debug) {
				console.log(event.keyCode + " ignored");
			}
		}
	});
	print("Logged in as guest@bytecus");
	print("guest@bytecus.io:/$ ");
});
