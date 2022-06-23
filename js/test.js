// 정규 표현식
// 정규 표현식은 문자 검색과 교체에 사용되는 패턴을 제공한다.
// 자바스크립트에서 RegExp 객체의 문자 함수를 조합해 정규 표현식을 사용할 수 있다.

// box 변수에 box 태그를 선택자로 담아 놓는다.
let box = document.querySelector(".box");

// box의 innerHTML에 안녕하세요 값 넣기
// box.innerHTML = "안녕하세요";

// let reg = new RegExp("안녕");

// RegExp는 두개의 매개변수 string | RegExp, flags? : string
// 앞은 찾는 문자
// 두번째는 플래그
// 플래그는 정규표현식에 영향을 주는 옵션

// 플래그의 종료에는

// i : 대소문자 구분없이 구별 A, a

// g : 패턴과 일치하는 모든 것을 찾는다. g가 없으면 일치하는 것에서 첫번째 것만 가져온다.

// m : 다중 행모드 줄이 내려져있어도 찾아온다. 백틱 같은 걸로 행차이가 있어도 가져옴

let string = "안녕하세요";

// 문자열 함수 match("찾는 문자열", flags);
box.innerHTML = string.match("하");

let string2 = "하하하하하하하하하하하하하하";


//  / 슬래시는 자바스크립트에서 정규표현식을 생성하고 있다는 것을 알려준다.
// 문자열에 따음표를 쓰는것과 같다.

// g 플래그 사용
box.innerHTML = string2.match(/하/g); // 패턴과 일치하는 모든것을 찾아서 구분자를 쉼표로 구분

// 정규식을 사용하는 이유는 
// 이메일 주소인지 체크하는 정규식
// 아이디 특수문자등이 있는지 체크할 때 사용
// 문자열 정규식 뽑기 등

// i 플래그
// i는 대소문자 구분없이 문자를 찾는다.
let str1 = "나는 abc, 나는 문자열"

let str2 = str1.match(/aBc/i) // 기본적으로는 대소문자를 구분함

// 찾은 문자열을 배열의 형태로 담아 둔다.
// console.log(str2);
// console.log(str2[0]);
// console.log(str2.length);

// box.innerHTML = str2;

// 나는 웹 개발자 본인 이름
// 
// 
// box.innerHTML = "이수진"
let nameStr = "나는 웹 개발자 이수진";
box.innerHTML = "";
box.innerHTML += nameStr.match(/나는/)+" ";
box.innerHTML += nameStr.match(/웹/)+" ";
box.innerHTML += nameStr.match(/개발자/)+" ";
box.innerHTML += nameStr.match(/이수진/);

// console.log(nameStr.match(/나는/));

// // 하나씩 가져와서 조합하는 식으로
// let tmp = ["바동", "부ㅡ부", "바바"];
// console.log(tmp);
// console.log(["바봉"]);

// // html innerHtml에 배열을 넣으면 자동으로 쉼표를 구분자로 넣어줌
// // 배열 안의 배열도 동일
// // value도 동일 객체는 오브젝트라고 나옴
// box.innerHTML += "<br>";
// box.innerHTML += tmp;
// box.innerHTML += "<br>";
// box.innerHTML += [["바동1", "부ㅡ부1", "바바1"], ["바동2", "부ㅡ부2", "바바2"]]


// _input.value = tmp;

// 편하게 바꿔보기
// replace(정규식 생성, 찾은 문자열을 바꿔줄 문자)
let nameStr2 = "나는 웹 개발자 이수진";
nameStr2 = nameStr2.replace(/ 이수진/i, " 이순현");

// replace()를 사용해서 바꿔보았는대
// replace()의 두번자 인자에 특수문자를 입력하면 특수한 방법으로 문자열을 교체할 수 있다.

// 특수한 방법에는
// $& 패턴과 일치하는 부분의 문자열을 교체하는 것이 아니라 붙여준다.
// &` 일치하기 전의 문자열의 일부를 대입
// &' 일치한 후의 문자열의 일부를 대입
let nameStr3 = box.innerHTML;
box.innerHTML = nameStr3.replace(/개발자/,"$' 집에 가고 싶다.");

// 과제
// 1. input을 2개 만들어서 하고 싶은 일, 이름 입력
// 2. 입력 버튼 누르면 화면(html이나 콘솔)에 출력
// 3. 교체 버튼을 누르면 자리 바꾸기 이름 뒤에 하고 싶은 일을 대입
// 4. 3번까지 완료되면 이름과 하고 싶은 일 사이에 시간도
//sogkjos;kjf;oks;dkf;sddsfjlksjdlfs
