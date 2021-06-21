const product = [
      {name: 'apple', price: 800},
      {name:'banana', price: 600}, 
      {name: 'milk', price: 700},
      {name: 'tomato', price: 114.99}
];
   // для проверки также рассмотрим случай, когда стоимость товара – 114,99.
   // Общий принцип работы:
   // 1)114, 99 + 114.99 * 0,15 = 132,2385  
   // 2) С помощью Math.round округляем до ближайшего целого – 132
   // 3) 132 / 5 = 26,4 
   // 4) Округляем до ближайшего большего целого – 27, так как нам необходимо обеспечить минимум 15% прибыли
   // (иначе было бы 26 * 5 = 130, что явно не подходит)
   // 5) 27 * 5 = 135 по условию корректируем так, чтобы последняя цифра была 5 или 0

let precent = 15,
      multiple = 5; 

let result = product.map(function (item) {
      item.price = Math.ceil((Math.round(item.price + item.price * precent/100))/multiple) * multiple;
      return item;
});

console.log(result);