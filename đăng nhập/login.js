function search() {
  const inputValue = document.getElementById('search-data').value.toLowerCase();
  const reportEle = document.getElementById('report-form');
  const notiEle = document.getElementById('notification-form');
  const stdListEle = document.getElementById('student-list');
  const resultEle = document.getElementById('result');

  reportEle.classList.add('disable');
  notiEle.classList.add('disable');
  stdListEle.classList.add('disable');

  if (inputValue === 'báo cáo thống kê') {
      reportEle.classList.remove('disable');
      resultEle.textContent = 'Kết quả cho: ' + inputValue;
  } else if (inputValue === 'danh sách sinh viên') {
      stdListEle.classList.remove('disable');
      resultEle.textContent = 'Kết quả cho: ' + inputValue;
  } else if (inputValue === 'thông báo') {
      notiEle.classList.remove('disable');
      resultEle.textContent = 'Kết quả cho: ' + inputValue;
  } else {
      resultEle.textContent = 'Không tìm thấy: ' + inputValue;
  }
}

const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');
const loginMessage = document.getElementById('login-message');

const validAccounts = [
    { username: 'tanhxinhzai', password: '123456' },
    { username: 'chubedan', password: '123456' },
    { username: 'th26.14', password: '123456' },
];

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username && password) {
        const account = validAccounts.find(account => account.username === username && account.password === password);

        if (account) {
            loginMessage.textContent = 'Đăng nhập thành công!';
            loginMessage.style.color = 'green';
            // Tự chuyển sang top.html nếu đăng nhập đúng mk đã lưu
            window.location.href = './top.html';
        } else {
            loginMessage.textContent = 'Tên đăng nhập hoặc mật khẩu không chính xác!';
            loginMessage.style.color = 'ed';
        }
    } else {
        loginMessage.textContent = 'Vui lòng nhập tên đăng nhập và mật khẩu!';
        loginMessage.style.color = 'ed';
    }
});
