
function giveItBackLater(value, callback){
    setTimeout(function(){
        callback (value)} ,1000 )}


function addSomePromises(somePromise){
return somePromise
    .then(function(value){
        return value+value})

    .catch(function(value){
        return value+value+value})
}



function promiseToGiveItBackLater(value){
    return new Promise((resolve, reject) => {
        giveItBackLater(value, resolve)
    })
}



module.exports= {giveItBackLater,addSomePromises,promiseToGiveItBackLater}
