function repeat(count, callback){
    for(let idx = 0; idx < count; idx++){
        callback(idx + 1);
    }
}

repeat(5,(count) => {
    console.log(count*2);
})