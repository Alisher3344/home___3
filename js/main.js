// // 1
// let a = -2;
// if (a > 0) {
//   console.log(a + 2);
// }
// else{
//   console.log(a);
// }

// // 2
// let a = -1;
// if (a > 0) {
//   console.log(a + 1);
// } else if (a == 0) {
//   console.log(a + 10);
// } else {
//   console.log(a - 2);
// }

// // 3
// let a = 4;
// let b = 2;
// let c = -20;
// let y = 0;

// if (a > 0) {
//   y++;
// }
// if (b > 0) {
//   y++;
// }
// if (c > 0) {
//   y++;
// }
// console.log(y);

// // 4
// let a = 1;
// let b = 3;
// if (a > b) {
//   console.log(a);
// } else {
//   console.log(b);
// }

// // 5
// let x = 4;
// let y = 8;

// if (x < y) {
//   console.log("birinchisi kichina");
// } else {
//   console.log("ikkinchisi kichina");
// }

// // 6
// let x = 2;
// let y = 10;

// if (x > y) {
//   console.log(x);
//   console.log(y);
// } else {
//   console.log(y);
//   console.log(x);
// }

// // 8
// let a = 5;
// let b = 4;
// let y = 0;
// if (a == b) {
//   console.log(y);
// } else {
//   console.log("A:",a);
//   console.log("B:",b);
//   console.log("A + B = ",a + b);
// }

// // 9
// let a = 1;
// let b = 12;
// let c = 123;

// let min;

// if (a < b && b < c) {
//   min = a;
// } else if (c < b && b < a) {
//   min = c;
// } else if (b < a && a < c) {
//   min = b;
// } else if (c < a && a < b) {
//   min = c;
// } else if (a < c && c < b) {
//   min = a;
// } else if (b < c && c < a) {
//   min = b;
// }
// console.log("min: ", min);

// // 10
// let a = 3;
// let b = 1;
// let c = 1;
// let d = 1;
// if (a == b) {
//   console.log(c);
// } else if (a == c) {
//   console.log(b);
// } else if (b == c) {
//   console.log(a);
// }
// else if (a==d){

// }

// // 11
// let x = -1;
// if (x > 0) {
//   console.log(2 * x);
// } else {
//   console.log(x - 6);
// }

// // 12
// let x = 0;

// if (x == 4) {
//   console.log(34343);
// } else if (x <= 0) {
//   console.log(-x);
// } else if (0 < x < 2) {
//   console.log(x);
// }

// // 13
// let x = 3;
// if (x > 0) {
//   if (x % 2 == 0) {
//     console.log("musbat juft");
//   } else {
//     console.log("musbat to'q");
//   }
// } else if (x < 0) {
//   if (x % 2 == 0) {
//     console.log("manfiy juft");
//   } else {
//     console.log("manfiy to'q");
//   }
// } else {
//   console.log("No'l");
// }

// // 14
// let y = 11;

// if (10>y < 100) {
//   if (y % 2 == 0) {
//     console.log("ikki xonali juft");
//   } else {
//     console.log("ikki xonali to'q");
//   }
// } else if (y < 999) {
//   if (y % 2 == 0) {
//     console.log("uch xonali juft");
//   } else {
//     console.log("uch xonali to'q");
//   }
// } else {
//   console.log("no'l");
// }

// // 15
// let x = 0;

// if (x > 0) {
//   if (x % 2 == 0) {
//     console.log("musbat juft");
//   } else {
//     console.log("musbat to'q");
//   }
// }
// else if (x < -1) {
//   if (x % 2 == 0) {
//     console.log("manfiy juft");
//   } else {
//     console.log("manfiy to'q");
//   }
// }
// else {
//   console.log("no'l");
// }

// // 16
// let a=5;
// switch (a) {
//   case 1:
//   console.log("1-yomon");
//     break;
//   case 2:
//   console.log("2-qoniqarsiz");
//     break;
//   case 3:
//   console.log("3-qoniqarli");
//     break;
//   case 4:
//   console.log("4-yaxshi");
//     break;
//   case 5:
//   console.log("5-a'lo");
//     break;

//   default:
//     console.log("xato");
//     break;
// }

// // 17
// let a = 11;
// switch (a) {
//   case 12 && 1 && 2:
//     console.log("qish");
//     break;
//   case 3 && 4 && 5:
//     console.log("bahor");
//     break;
//   case 6 && 7 && 8:
//     console.log("yoz");
//     break;
//   case 9 && 10 && 11:
//     console.log("yoz");
//     break;

//   default:
//     break;
// }

// // 18
// let a = 2;
// switch (a) {
//   case 1 && 3 && 5 && 7 && 8 && 10 && 12:
//     console.log("31-kun bor");
//     break;
//   case 4 && 6 && 9 && 11:
//     console.log("30-kun bor");
//     break;
//   case 2:
//     console.log("29-kun bor");
//     break;

//   default:
//     break;
// }

// 20
let abc = 1023;
let ab = abc % 100;
let b = parseInt(ab / 10);
let c = abc % 10;
let a = parseInt(abc / 100);
let res = "";
switch (a) {
  case 1:
    res += "yuz ";
    break;
  case 2:
    res += "ikki yuz ";
    break;
  case 3:
    res += "uch yuz ";
    break;
  case 4:
    res += "to'rt yuz ";
    break;
  case 5:
    res += "bexh yuz ";
    break;
  case 6:
    res += "olti yuz ";
    break;
  case 7:
    res += "yetti yuz ";
    break;
  case 8:
    res += "sakkiz yuz ";
    break;
  case 9:
    res += "to'qqiz yuz ";
    break;
  // default:
  //   res += "noto'g'ri ";
  //   break;
}
switch (b) {
  case 1:
    res += "o'n ";
    break;
  case 2:
    res += "yigirma ";
    break;
  case 3:
    res += "o'ttiz ";
    break;
  case 4:
    res += "qirq ";
    break;
  case 5:
    res += "ellik ";
    break;
  case 6:
    res += "oltmish ";
    break;
  case 7:
    res += "yetmish ";
    break;
  case 8:
    res += "sakson ";
    break;
  case 9:
    res += "to'qson ";
    break;
}
switch (c) {
  case 1:
    res += "bir";
    break;
  case 2:
    res += "ikki";
    break;
  case 3:
    res += "uch";
    break;
  case 4:
    res += "to'rt";
    break;
  case 5:
    res += "besh";
    break;
  case 6:
    res += "olti";
    break;
  case 7:
    res += "yetti";
    break;
  case 8:
    res += "sakkiz";
    break;
  case 9:
    res += "to'qqiz";
    break;
  default:
    console.log("fvfsdgbd");
    break;
}
console.log(res);
