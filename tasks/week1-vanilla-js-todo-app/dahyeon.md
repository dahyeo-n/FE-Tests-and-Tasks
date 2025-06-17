# Vanilla JS To-do List

바닐라 자바스크립트(순수 JS)로 구현한 간단한 To-do 리스트 애플리케이션입니다.
할 일 생성, 조회, 삭제 기능을 포함하며 테스트 코드를 통과하도록 구현되었습니다.

## Repository 링크

https://github.com/dahyeo-n/vanilla-js-todo

## 기능 요약

- ✏️ **할 일 생성**: 입력창에 내용을 작성 후 '추가' 버튼 클릭 또는 Enter 키 입력 시, 할 일 생성
- 📄 **할 일 조회**: 작성된 모든 할 일 목록 표시
- 🗑 **할 일 삭제**: 할 일 옆 삭제 버튼 클릭 시, 해당 항목 제거
- ✅ **테스트 코드 통과**: Playwright 기반 테스트 코드에 맞춰 TC1~TC3 모두 통과

## 프로젝트 구조

```bash
vanilla-js-todo/
├── index.html # HTML 구조
├── style.css # 선택적 스타일링
└── script.js # 메인 로직 (할 일 추가/삭제 등)
```

## 테스트 방법

```bash
npm install
npm test
```
