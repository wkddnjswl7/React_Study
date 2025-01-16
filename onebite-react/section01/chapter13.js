function main(value){
    value();
}

main(() => {
    console.log("sub");
});

// function repeat(count){
//     for(let idx = 0; idx < count; idx++){
//         console.log(idx+1);
//     }
// }

// repeat(5);

function repeat(count){
    for(let idx = 0; idx < count; idx++){
        console.log(idx + 1);
    }
}

function repeatDouble(count){
    for(let idx = 0; idx < count; idx++){
        console.log((idx + 1)*2);
    }
}

repeatDouble(5);


// function repeat(count, callback){
//     for(let idx = 0; idx < count; idx++){
//         console.log(idx+1);
//     }
// }

// function origin(count){
//     console.log(count);
// }

// repeat(5, origin);