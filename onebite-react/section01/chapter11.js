// 함수 (내가 작성한 코드)
// function getArea(a, b){
//     let width = a;
//     let height = b;
//     let area = a * b;

//     console.log(area);
// }

// getArea(20, 20);

// 함수 (학습한 코드)
function getArea(width, height){
    function another(){
        console.log("another");
    }

    another();

    let area = width * height;

    //console.log(area);
    // 반환값
    return area;
}

// getArea(200, 200);
let area1 = getArea(14, 14);
console.log(area1);

let area2 = getArea(120, 120);
console.log(area2);