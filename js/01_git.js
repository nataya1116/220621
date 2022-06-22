// git 프로젝트

// git은 무엇인가

// 1. 형상관리도구 중에 하나
//    형상관리 도구 : 버전 고나리 시스템
//    작업을 하면서 작업의 리스트를 관리 할 수 있다.

// 2. git의 장점
// 협업하는 단계에서 소스코드를 파일로 주고 받을 필요 없이 같은 파일을
// 팀원들과 동시에 병렬로 작업이 가능하다.

// A작업을 하고 -> B작업을 넘겨주는대
// A 랑 B랑 메인페이지를 같이 작업을 하고 있는대
// A는 상품페이지, B는 장바구니 페이지
// 파일로 넘겨주고 어디가 다른지 눈으로 보고 작업을 하게 되면
// 차이점을 찾는대 시간도 오래 걸리고 버그도 잡기 힘들다(변수명 등등)

// git에 푸쉬를 하면 저장소에 갱신이 된다 차후에 팀원이 추가되더라도 저장소를 클론하면 된다.


// git init
// 새로운 git 저장소를 생성할때 사용하는 명령어

// git 저장소를 생성한 폴더에서 숨김파일 보기를 체크하면 .git

// git add 커밋을 추가하는데 git저장소에 추가하려고 대기
// git add README.md 이렇게 쓰면 git 저장소에 추가하려고 대기

// git commit -m 커밋 메시지를 작성할 수 있다.
// git commit -m "first commit" 이거면 저장소에 추가하면서
// 작업 내용 메세지는 first commit 메세지가 보인다.

// git branch -M (master명) 마스터 브런치를 설정한다.
// git branch -M main 이렇게 하면 main이라는 이름의 마스터 브런치 설정

// git remote add origin 깃 저장소 링크를 추가한다.
// origin : 복제한 원격 git 저장소의 기본 이름
// git remote : origin 복제한 url을 참조하기 위해
// git remote add origin https://github.com/nataya1116/220621.git 자신의 깃주소를 추가해준것

// cd "들어갈 경로" : 경로 이동
// cd .. : 한단계 위로 이동

// git push -u origin main 깃 저장소에 첫 커밋을 푸쉬

// vsc 확장프로그램 Git Graph 설치

// 소스제어 탭을 선택tl git 그래프에 변경사항 중 파일 이름 옆에 표시
// 로컬 저장소는 init 한 경로이다.

// U : 저장소에 없는 새로운 파일
// M : 저장소에 있던 파일이 수정됨
// D : 저장소에 있는 파일이 제거됨
// A : 인덱스 추가됨

// 1. git 설정

// 깃 로컬 저장소 사용자 설정
// git config --global user.name "본인 닉네임"
// git config --global user.email "본인 이메일"

// 사용자 설정 정보 조회
// git config --global --list

// git 저장소 초기화 저장소 생성
// 로컬 저장소로 사용할 경로로 이동해서 명령어 입력
// git init

// github에 있는 저장소 로컬로 복제
// git clone (url)

// git이 다른 프로세서에서 사용하고 있다고 말할때 해결 방법
// rm -f ./.git/index.lock
