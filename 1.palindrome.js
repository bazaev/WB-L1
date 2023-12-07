function isPalindrome(str) {
  // Удаляем пробелы из строки
  str = str.replaceAll(" ", "");

  // Реверсируем строку
  const reversed = str.split('').reverse().join('');

  // Возвращаем результат сравнения строк
  return str === reversed;
}

const result = isPalindrome("аргентина манит негра");

console.log(result)