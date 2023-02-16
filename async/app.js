function displaySync(callback){
    callback();
}

console.log("Start");

setTimeout(() => {
    console.log("timeout 500");
}, 500);

setTimeout(() => {
    console.log("timeout 100");
}, 100);

displaySync(function(){console.log("without timeout")});
console.log("Завершение работы программы");