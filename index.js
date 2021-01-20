// Your code here
function saturdayFun(string="roller-skate"){
    // console.log(`This Saturday, I want to ${string}!`)
    return "This Saturday, I want to " + string + "!"
}

function mondayWork(string="go to the office"){
    return "This Monday, I will " + string + "."
}

function wrapAdjective(visualFlair="*"){
    return function(string="special"){
        return "You are " + `${visualFlair}` + `${string}` + `${visualFlair}` + "!"
    }
}

const Calculator = {
    add: function(a,b) {
      return a + b;
    },
    subtract: function(a,b) {
        return a - b;
    },
    multiply: function(a,b) {
        return a * b;
    },
    divide: function(a,b) {
        return a / b;
    }
}

function actionApplyer(integer, arrayOfFunction){
    let a = integer
    for (let i = 0; i < arrayOfFunction.length; i++ ){
        a = arrayOfFunction[i](a)
      }
    
      return a
}
