const name = "홍길동";
const useInfoCheck = false; // 사용자 정보 활용 동의 (필수)
const useEmailCheck = false; // 이메일 수신 동의 (선택)

const errors = [];

if (!name.trim()) {
  errors.push("이름을 입력하세요.");
}

if (!useInfoCheck) {
  errors.push("사용자 정보 동의를 체크해주세요. (필수)");
}

// 이메일 수신 동의는 선택 항목이라면 아래는 생략해도 됨
// 하지만 여기선 알림만 주는 방식으로 처리
if (!useEmailCheck) {
  errors.push("이메일 수신 동의는 선택사항입니다. 원하시면 체크해주세요.");
}

if (errors.length > 0) {
  alert(errors.join("\n"));
} else {
  console.log("저희 서비스를 자유롭게 활용하세요.");
}
