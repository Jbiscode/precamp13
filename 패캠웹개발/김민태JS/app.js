let ajax = new XMLHttpRequest();     //new XMLH를 변수 ajax에 저장

ajax.open('GET','https://api.hnpwa.com/v0/news/1.json' ,false);
ajax.send();

// console.log(ajax.response);

const newsFeed = JSON.parse(ajax.response);
console.log(newsFeed)

// for(let i = 0;i<10;i++){                                    overwrite 돼서 마지막
//     document.getElementById('root').innerHTML = `<ul>           한개만 뜨는것
//     <li>${newsFeed[i].title}</li>
//     </ul>`;
// }

// document.getElementById('root').innerHTML = `<ul>
//     <li>${newsFeed[0].title}</li>
//     <li>${newsFeed[1].title}</li>
//     <li>${newsFeed[2].title}</li>
// </ul>`

// 반복문으로 overwrite 안되고 모두 뜨게하기
const ul = document.createElement('ul');            //ul 태그 생성하기
for(let i = 0; i < 10; i++){                         //반복문
    const li = document.createElement('li');           //li태그 생성
    li.innerHTML = newsFeed[i].title;

    ul.appendChild(li);                               // ul 자식에 li추가
}
document.getElementById('root').appendChild(ul); 
