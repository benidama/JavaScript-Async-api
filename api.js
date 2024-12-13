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

function callBack(any) {
  document.getElementById("kanu").innerHTML = any;
}

function subBack(a, b, kanuma) {
  const sum = a + b;
  kanuma(sum);
}
subBack(4, 6, callBack);
