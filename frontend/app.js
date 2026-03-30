const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

// Реєстрація
registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = registerForm.email.value;
  const password = registerForm.password.value;

  const res = await fetch("https://test-enter-form2.vercel.app/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  alert(JSON.stringify(data));
});

// Логін
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;

  const res = await fetch("https://test-enter-form2.vercel.app/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  alert(JSON.stringify(data)); // тут можна зберегти JWT в localStorage
});