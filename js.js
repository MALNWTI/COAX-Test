const roadLength = 1;
var nowLat = 0;
var nowLong = 0;
var needLat = 0;
var needLong = 0;
var perfect = 0;

function clickBtn() {
    nowLat = takeValue(nameParam = "nowLat");
    nowLong = takeValue(nameParam = "nowLong");
    needLat = takeValue(nameParam = "needLat");
    needLong = takeValue(nameParam = "needLong");

//    console.log("Step road lenght - ", roadLength);
    console.log("My cordinates: x-",nowLat ," y-",nowLong);
    console.log("Need cordinates: x-",needLat ," y-",needLong);

//    mathPerfect(p = nowLat);
    if (nowLat > needLat){
        xRoad = takeLength(big = nowLat, small = needLat);
        console.log('sum= ',xRoad);
    }
    else {
        xRoad = takeLength(big = needLat, small = nowLat);
        console.log('sum= ',xRoad);
    }
    if (nowLong > needLong){
        yRoad = takeLength(big = nowLong, small = needLong);
        console.log('sum= ',yRoad);
    }
    else {
        yRoad = takeLength(big = needLong, small = nowLong);
        console.log('sum= ',yRoad);
    }

    mathPerfect();
    changeHtml();
}

function takeValue() {
    let par;
    if (document.getElementById(nameParam).value==''){
        par = 0;
    }
    else{
        par = document.getElementById(nameParam).value;
//        par = par.toFixed(2);
        par = Math.trunc(par * 100) / 100;
    }
    return(par)
}

function mathPerfect(p) {
    perfect = Number(xRoad) + Number(yRoad);
    perfect = perfect.toFixed(2);
    console.log(perfect);
}

function changeHtml() {
    document.getElementById("result").innerHTML = perfect;
    document.getElementById("presult").classList.remove("visibleOf");
}

function takeLength(big, small) {
    let i, j, x;
    var sum = +"0";
    i = big - Math.trunc(big);
    i = i.toFixed(2);
    console.log(i);
    j = Math.ceil(small) - small;
    j = j.toFixed(2);
    console.log(j);
    x = Math.trunc(big) - Math.ceil(small);
    x = x.toFixed(2);
    console.log(x);
    sum = Number(x) + Number(i) + Number(j);
    sum = sum.toFixed(2);
    return(sum);
}
