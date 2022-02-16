const fruits = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
];

for (let i = 0; i < 10; i++) {
  console.log(fruits[i].number + " " + fruits[i].title);
}

//-----------------------------------------------

let students = ["철수", "영희", "말포이", "도비", "그루트", "자스민"];

for (let i = 0; i < students.length; i++) {
  console.log(students[i] + "님 안녕하세요");
}

//------------------------------------------------
let persons = [
  { name: "철수", age: 18 },
  { name: "영희", age: 22 },
  { name: "도우너", age: 5 },
  { name: "말포이", age: 14 },
  { name: "도비", age: 3 },
];

for (let n = 0; n < persons.length; n++) {
  if (persons[n].age > 18) {
    console.log(persons[n].name + "님은 성인입니다");
  } else {
    console.log(persons[n].name + "님은 미성년자입니다");
  }
}
