async function getFile() {
  let myPromise = new Promise(function (resolve) {
    let req = new XMLHttpRequest();
    req.open("GET", "mycar.html");
    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        resolve("File not Found");
      }
    };
    req.send();
  });
  document.getElementById("data").innerHTML = await myPromise;
}

getFile();

function func1(a, b) {
  document.getElementById("callBack").innerHTML = a + b;
}

function func2() {
  func1(25, 7);
}
function func3() {
  func1(45, 78);
}

func3();
func2();

// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function myFirst() {
//   myDisplayer("Hell");
// }

// function mySecond() {
//   myDisplayer("Goodbye");
// }

// mySecond();
// myFirst();

let ypromise = new Promise(function (resolve) {
  resolve("Oh my God");
});
ypromise.then(function (res) {
  document.getElementById("promo").innerHTML = res;
});

function callBacka(any) {
  document.getElementById("kanu").innerHTML = any;
}
function callBack(any) {
  document.getElementById("kanub").innerHTML = any;
}

function subBack(a, b, kanuma) {
  const sum = a + b;
  kanuma(sum);
}
subBack(4, 6, callBack);

async function asyncFunc() {
  return "This is async function";
}
asyncFunc().then(function (ina) {
  callBacka(ina);
});

async function myAsy() {
  let prom = new Promise(function (resolve, reject) {
    resolve("This is an async func!");
  });
  document.getElementById("kanuma").innerHTML = await prom;
}
myAsy();

const data = "https://jsonplaceholder.typicode.com/users";
async function fetching() {
  let a = await fetch(data);
  let b = await a.text();
  document.getElementById("dates").innerHTML = b;
}

fetching();
