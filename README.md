# 네이밍 규칙

1. 폴더/파일 네이밍

   - 컴포넌트 파일은 파스칼 케이스(PascalCase)
   - 그 외 케밥 케이스(kebob-case)
   - 스타일드 컴포넌트의 파일 이름은 Name.styled.tsx

2. 함수(이벤트 핸들러) 및 변수 네이밍

   - 컴포넌트는 파스칼 케이스(PascalCase)
   - 상수는 스네이크 케이스(SNAKE_CASE)
   - 변수는 카멜 케이스(camelCase)
   - 함수(이벤트 핸들러)는 동사로 시작(ex. createAction, increaseNumber)
   - 변수는 명사로 시작(ex. number, counter, increasement)
   - 커스텀 훅은 접두사 use 사용

# 컴포넌트 작성

1. 컴포넌트 -> 컨테이너 -> 페이지
2. 함수형 컴포넌트, 훅 사용
3. 유틸 등은 모듈로 파일 구분

# 함수 작성

1. 기본적으로 화살표 함수

# export, import

1. export는 파일 맨 아래 한꺼번에 기명

# 선언 순서

1. 상수 -> 변수 -> 함수 -> 컴포넌트

# payload

1. 액션 객체의 payload 이름은 payload로 통일

# 상태 관리

1. 상태 관리는 기본적으로 Redux 사용 (지역적으로 국한되는 상태의 경우, 논의 후 Context API 사용)

# 그 외

1. 그외 컨벤션은 CRA의 기본 설정된 eslint, prettier에 따름

---

# 커밋

1. 접두사 [추가], [수정], [삭제] (ex. [추가] 헤더 네비게이션)
2. 커밋 타이틀 뿐만 아니라 내용도 자세하게 작성

# 풀 리퀘

1. closed #이슈번호 로 이슈 자동 닫기
2. 컨플릭트는 각자 해결 후 풀 리퀘
3. 각 풀 리퀘는 코드 리뷰 후 머지
