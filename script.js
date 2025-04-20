const form = document.getElementById('akanForm');
const result = document.getElementById('result');

const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const birthdate = document.getElementById('birthdate').value;
  const gender = document.querySelector('input[name="gender"]:checked');

  if (!birthdate || !gender) {
    alert("Please enter your birthdate and select a gender.");
    return;
  }

  const date = new Date(birthdate);
  const dayIndex = date.getDay(); // 0 (Sun) - 6 (Sat)
  const genderValue = gender.value;

  const akanName = genderValue === "male" ? maleNames[dayIndex] : femaleNames[dayIndex];
  const dayName = daysOfWeek[dayIndex];

  result.innerHTML = `You were born on a <strong>${dayName}</strong>. Your Akan name is <strong>${akanName}</strong>!`;
});
