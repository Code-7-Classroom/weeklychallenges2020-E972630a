const singleChar = (string) => {
    for(let i = 0; i < string.length; i++){
        let a = string.charAt(i)

        if(string.indexOf(a) == string.lastIndexOf(a)){
            return a;
        }
    }
}
console.log(singleChar('the quick brown fox jumps over the calm kitten quietly'));
console.log(singleChar('this hat is the greatest!'));
console.log(singleChar('what a wonderful day it has been!'));