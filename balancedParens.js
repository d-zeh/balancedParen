// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

let balancer = string => {
    let i = 0;
    for(let j = 0; j < string.length; j++) {
        if(string[j] == "(") {
            i++
        } else if (string[j] == ")") {
            i--;
        }
    }
    if(i == 0) {
        console.log("Balanced")
    } else {
        console.log("Not balanced")
    }

}

balancer(sample4)