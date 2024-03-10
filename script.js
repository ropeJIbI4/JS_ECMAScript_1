// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
const arr = [1, 5, 7, 9]
console.log(Math.min(...arr));
// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
const createCounter = () => {
  let counter = 0;

  return {
    increment: function() {
      counter += 1;
      return counter;
    },
    decrement: function() {
      counter -= 1;
      return counter;
    },
  };
}
const counter = createCounter();
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.decrement());


const counter2 = createCounter();
// console.log(counter2.increment());
// console.log(counter2.decrement());
// console.log(counter2.increment());



// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

const divContent = document.createElement('div');
divContent.id = 'content';
document.body.appendChild(divContent);

const titleContent = document.createElement('h1');
titleContent.classList = 'content__title';
titleContent.textContent = "THIS  IS A TITLE";
divContent.appendChild(titleContent);

const paragraphContent = document.createElement('p');
paragraphContent.classList = 'content__text';
paragraphContent.textContent = 'АБРАКАДАБРА';
divContent.appendChild(paragraphContent);

const secondDivContent = document.createElement('div');
secondDivContent.classList = 'secondContent';
document.body.appendChild(secondDivContent);

const titleSecond = document.createElement('h1');
titleSecond.classList = 'secondContent__title';
titleSecond.textContent = "THIS  IS A Second TITLE";
secondDivContent.appendChild(titleSecond);

const paragraphSecond = document.createElement('p');
paragraphSecond.classList = 'secondContent__text';
paragraphSecond.textContent = 'АБРАКАДАБРА SECOND';
secondDivContent.appendChild(paragraphSecond);


function findElementByClass(element, className) {
  if (element.classList.contains(className)) {
    return element;
  }

  for (const child of element.children) {
    const result = findElementByClass(child, className);
    if (result) {
      return result;
    }
  }

  return null;
}
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('content');
  
  const targetElement = findElementByClass(rootElement, 'content__title');
  console.log(targetElement);
});

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('content');
  
  const targetElement = findElementByClass(rootElement, 'second__title');
  console.log(targetElement);
});
// Пример
// const rootElement = document.getElementById('content');
// const targetElement = findElementByClass(rootElement, '__top');
// console.log(targetElement);

