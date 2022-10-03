function firstGame() {
  let userAnswer = prompt("Введите номер месяца");
  if ((userAnswer >= 1 && userAnswer < 3) || userAnswer == 12) {
    alert("Время года - Зима");
  } else if (userAnswer >= 3 && userAnswer < 6) {
    alert("Время года - Весна");
  } else if (userAnswer >= 6 && userAnswer < 9) {
    alert("Время года - Лето");
  } else if (userAnswer >= 9 && userAnswer < 12) {
    alert("Время года - Осень");
  } else {
    alert("Вы ввели неправильное значение");
  }
}

function secondGame() {
  let list = [
    "Яблоко",
    "Груша",
    "Дыня",
    "Виноград",
    "Персик",
    "Апельсин",
    "Мандарин",
  ];
  list = list.sort(() => Math.random() - 0.5);
  alert(list);

  let question = prompt("Чему равнялся первый элемент массива?");
  let question2 = prompt("Чему равнялся последний элемент массива?");

  let firstWord = list[0];
  let secondWord = list[list.length - 1];

  if (
    question.toLowerCase() === firstWord.toLowerCase() &&
    question2.toLowerCase() === secondWord.toLowerCase()
  ) {
    alert("молодец!");
  } else if (
    question.toLowerCase() === firstWord.toLowerCase() ||
    question2.toLowerCase() === secondWord.toLowerCase()
  ) {
    alert("Вы были близки к победе!");
  } else {
    alert("не угадал");
  }
}

function thirdGame() {
  const question = "Зимой и летом одним цветом?";
  let userAnswer2 = prompt(question).toLowerCase();
  const various = ["елка", "ёлка", "ель"];
  const hints = ["что-то зеленое", "с шишками"];

  for (let i = 0; i <= hints.length; i++) {
    if (various.includes(userAnswer2)) {
      alert("молодец угадал");
      break;
    } else if (!various.includes(userAnswer2) && i < hints.length) {
      userAnswer2 = prompt(hints[i]);
      continue;
    } else {
      alert("ты проиграл");
    }
  }
}
