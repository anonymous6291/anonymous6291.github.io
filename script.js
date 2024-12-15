const message = "Hello! My Name is Anish Kumar Shaw. I am a curious programmer. I am not expert in any programming language but I always try to learn new things. I believe in multitasking and consistency. I have made few repositories in Github and solved few questions in Leetcode. You can visit my profiles using the links given below.";
const alphaDelay = 20;
const spaceDelay = 80;
const infoLabel = document.getElementById("information");
var displayInformation = function (i) {
    let n = message.length;
    if (i > n) {
        return;
    }
    infoLabel.innerText = message.substring(0, i).concat("|");
    i += 1
    if (i <= n) {
        if (i < n && message.charAt(i) == ' ') {
            setTimeout(() => { displayInformation(i); }, spaceDelay);
        } else {
            setTimeout(() => { displayInformation(i); }, alphaDelay);
        }
    }
};
displayInformation(0);