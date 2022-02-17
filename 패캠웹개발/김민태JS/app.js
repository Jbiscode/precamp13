const container = document.getElementById('root');     //동일한 코드가 반복되는건 오타를 방지하기위해 지정하는게좋음
const ajax = new XMLHttpRequest();     //new XMLH를 변수 ajax에 저장
const content = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

ajax.open('GET',NEWS_URL ,false);
ajax.send();

// console.log(ajax.response);

// console.log(newsFeed)

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

const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');            //ul 태그 생성하기

window.addEventListener('hashchange', function(){
    const id = location.hash.substr(1);    //substr() 인덱스~번째부터 표시한다는것
    // 1을쓰는이유는 0인덱스에는 #이있고 아이디값은 #을 빼고 아이디값을 추출해야 하기때문에
    
    ajax.open('get',CONTENT_URL.replace('@id',id),false);
    ajax.send();

    const newsContent = JSON.parse(ajax.response);
    const title = document.createElement('h1');

    title.innerHTML = newsContent.title;
    content.appendChild(title);
    console.log(newsContent);

});

for(let i = 0; i < 10; i++){                         //반복문
    const div = document.createElement('div');
    const li = document.createElement('li');           //li태그 생성
    const a = document.createElement('a');             //a태그생성

    div.innerHTML= `
    <li>
        <a href="#${newsFeed[i].id}">
        ${newsFeed[i].title} (${newsFeed[i].comments_count})
        </a>
    </li>
    `;
    
    // a.href = `#`;                  //a태그에 href속성추가   #을 쓰는이유는 id링크를 쓰기위해
    // a.innerHTML = ``;      //innerHTML은 <tag> 이사이에 쓰는것 </tag>
    // 안에 데이터를 불러오려면 `${ }`  형식으로 불러와야한다.
    // `` 는 숫자키보드 옆에있는거 

    ul.appendChild(div.firstElementChild);
    //또는 ul.appendChild(div.children[0]);
}
container.appendChild(ul);           //똑같은 코드는 오타위험이있어서 이렇게 등록해놓고 사용
container.appendChild(content); 