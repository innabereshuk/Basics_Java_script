(function(){
     'use strict';
    
    // 1. Поздороваться с пользователем
    
    let userName = new Array();

    do  {
          userName = prompt ('Как Вас зовут?', 'Вася' , " ");
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
      let userOfBirth = prompt('Напишите, пожалуйста, год своего рождения');
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
  
    

    // 3.  Вычисляем перимитр квадрата

     let lengthSquareSide = prompt('Введите длину стороны квадрата', '');
     let perimeterSquare = 4 * lengthSquareSide;
     lengthSquareSide = /^[0-9]+$/g;
     alert('Периметр квадрата равен ' + `${(parseInt(perimeterSquare * 100) / 100)}` + 'метров квадратных');
    

//   4. Вычисляем радиус окружности

do {
     let circleRadius = prompt('Введите, пожалуйста радиус окружности', '');
     let pi = 3.14;
     let areaOfTheCircle = 2 * circleRadius * pi;
     let registr = /^[0-9]+$/i;
     let rezult = registr.test(circleRadius);

      if (rezult == false)  {
           ('Допускается ввод только цифр больше 0');
     }
      if (rezult == true && circleRadius.length >= 1) {
 
            alert('Радиус окружности равен ' + `${(parseInt(areaOfTheCircle * 100) / 100)}` + 'см');
            break;
}
} while (true);
          
})();     


//     let distanceInKilometers = prompt('Введите расстояние между двумя городами в километрах', '10');
//     let travelTime = prompt('Введите время, за которое вы хотите добраться в пункт назначения, в часах', '1.30');
//     let movementSpeed = distanceInKilometers / travelTime;
//     alert('Чтобы добраться в пункт назначения за указанное время, вам нужно двигаться со скоростью ' + movementSpeed + ' километров в час');


//     const USDRATE = 24.0854;
//     const EURORITE = 27.0406;
//     let  coefficientValut = USDRATE / EURORITE;
//     let amountOfDollars =prompt('Введите сумму долларов, которую вы хотите обменять', '10');
//     alert('Вы получите ' + amountOfDollars * coefficientValut + ' евро');


//     let flashDriveVolume = prompt('Укажите, пожалуйста, объем вашей флешки в Гигабайтах', '10');
//     let file_1_Volume = 820 / 1000; 
//     let numberOfFiles = flashDriveVolume / file_1_Volume;
//     alert('У вас на флешке поместится ' + (parseInt(numberOfFiles * 1) / 1) + ' файлов объемом по 820 Мб');


//     let amountOfFunds = prompt('Введите сумму имеющихся у вас денег в гривнах', '10.00');
//     let priceOfChocolate = prompt('Введите стоимость одной шоколадки', '10.00');
//     let numberOfChocolates = amountOfFunds / priceOfChocolate;
//     let change = amountOfFunds % priceOfChocolate;
//     alert('На сумму ' + amountOfFunds + ' вы сможете купить ' + (parseInt(numberOfChocolates * 1) / 1) + ' шоколадок. И у вас останется сдача ' + (parseInt(change * 100) / 100) + ' грн.');
    
//     let depositAmount = prompt('Введите сумму депозита, который желаете внести в валюте вклада');
//     let timeOfDeposit = prompt('Введите желаемый срок депозита в месяцах', '2');
//     let interestRateOneMonth = 5 /100 / 12;
//     let amountOfInterest = depositAmount * interestRateOneMonth * timeOfDeposit;
//     alert('За ' + timeOfDeposit + ' месяцев вы получите от суммы депозита в ' + depositAmount + ' гривен процентов ' + (parseInt(amountOfInterest  * 100) / 100) + ' гривен');

 
