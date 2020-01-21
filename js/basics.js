(function(){
     'use strict';
    
    // 1. Поздороваться с пользователем
    
    let userName = new Array();

    do  {
          userName = prompt ('Как Вас зовут?', '');
          let registr = /^[а-яА-ЯёЁa-zA-Z.-]+$/;
          let rezult = registr.test(userName);

    if (rezult == false) {
          alert ("Некоректный ввод! Повторите еще раз!");
    }
    if (rezult == true) {
          alert('Привет, ' + `${userName}` + '!');
          break;
    }
    } while (true);
   

    // 2. Считаем сколько лет пользователю
         
   do {
      let userOfBirth = prompt('Напишите, пожалуйста, год своего рождения', '');
      const CURRENTYEAR = 2020;
      const latestDate = 1900;
      let userCurrentAge = CURRENTYEAR - userOfBirth; 
      let registr = /^[0-9]+$/g;
      let rezult = registr.test(userOfBirth);

      if (rezult == true && userOfBirth.length == 4 && userOfBirth <= CURRENTYEAR && userOfBirth > latestDate ) {
                 alert('Вам сейчас ' + `${userCurrentAge}` + ' лет!');
                 break;
                 
            } 
      if (rezult == false || userOfBirth.length < 4 || userOfBirth.length > 4 || userOfBirth > CURRENTYEAR ||userOfBirth < latestDate)  {
                  alert ("Некорректный ввод! Попробуйте еще раз!");
                 
      }
     
      } while (true);
  
    

    // 3.  Вычисляем периметр квадрата

    
    do {
            let lengthSquareSide = +prompt('Введите длину стороны квадрата', '');
            let perimeterSquare = 4 * lengthSquareSide;
            let registr = /^[0-9 \ ,\ .]+$/g;
            let rezult = registr.test(lengthSquareSide);
           
            
            if (rezult == false || lengthSquareSide <= 0) {
                  alert('Было введено не число, попробуйте еще раз');
            }
             if (rezult == true && lengthSquareSide > 0) { 
                  alert('Периметр квадрата равен ' + `${(parseInt(perimeterSquare * 100) / 100)}` + ' метров квадратных');
                  break;
             }
            
      } while (true);
            
 
   
     

//   4. Вычисляем радиус окружности
     
do {
      let circleRadius = +prompt('Введите, пожалуйста радиус окружности', '');
      const PI = Math.PI;
      let areaOfTheCircle = PI * 2 * circleRadius;
      let registr = /^[0-9 \ ,\ .]+$/g;
      let rezult = registr.test(circleRadius);
     
      
      if (rezult == false || circleRadius <= 0) {
            alert('Было введено не число, попробуйте еще раз');
      }
       if (rezult == true && circleRadius > 0) { 
            alert('Радиус окружности равен ' + `${(parseInt(areaOfTheCircle * 100) / 100)}` + ' см');
            break;
       }
      
} while (true);
      

//   5. Расчет скорости движения

      let distanceInKilometers = prompt('Введите расстояние между двумя городами в километрах', '');
      let travelTime = prompt('Введите время, за которое вы хотите добраться в пункт назначения, в часах', '');
      let movementSpeed = distanceInKilometers / travelTime;
      alert('Чтобы добраться в пункт назначения за указанное время, вам нужно двигаться со скоростью ' + `${(parseInt(movementSpeed * 100) / 100)}` + ' километров в час');
     
  
// Конвектор валют

     const USDRATE = 24.0854;
     const EURORITE = 27.0406;
     let  coefficientValut = USDRATE / EURORITE;
     let amountOfDollars =prompt('Введите сумму долларов, которую вы хотите обменять', '10');
     alert('Вы получите ' + `${(parseInt(amountOfDollars * 10) / 10)}` * `${(parseInt(coefficientValut *10) / 10)}` + ' евро');


// Рассчет сколько файлов поместится на флешке

     let flashDriveVolume = prompt('Укажите, пожалуйста, объем вашей флешки в Гигабайтах', '10');
     let file_1_Volume = 820 / 1000; 
     let numberOfFiles = flashDriveVolume / file_1_Volume;
     alert('У вас на флешке поместится ' + `${(parseInt(numberOfFiles * 1) / 1)}` + ' файлов объемом по 820 Мб');


// Сколько шоколадок можно купить на имеющуюся сумму

     let amountOfFunds = prompt('Введите сумму имеющихся у вас денег в гривнах', '10.00');
     let priceOfChocolate = prompt('Введите стоимость одной шоколадки', '10.00');
     let numberOfChocolates = amountOfFunds / priceOfChocolate;
     let change = amountOfFunds % priceOfChocolate;
     alert('На сумму ' + `${(parseInt(amountOfFunds * 100) / 100)}` + ' вы сможете купить ' + `${(parseInt(numberOfChocolates * 1) / 1)}` + ' шоколадок. И у вас останется сдача ' + (parseInt(change * 100) / 100) + ' грн.');
  
     
// Рассчет процентов депозита

     let depositAmount = prompt('Введите сумму депозита, который желаете внести в валюте вклада');
     let timeOfDeposit = prompt('Введите желаемый срок депозита в месяцах', '2');
     let interestRateOneMonth = 5 /100 / 12;
     let amountOfInterest = depositAmount * interestRateOneMonth * timeOfDeposit;
     alert('За ' + timeOfDeposit + ' месяцев вы получите от суммы депозита в ' + depositAmount + ' гривен процентов ' + `${(parseInt(amountOfInterest  * 100) / 100)}` + ' гривен');

})();  
