(function(){
    // Поздороваться с пользователем
    let userName = prompt('Как Вас зовут?', 'Вася');
    alert('Привет, ' + userName + '!');
   
    
    // Вычислить сколько лет пользователю
    let userOfBirth = prompt('Напишите, пожалуйста, год своего рождения');
    
    if (userOfBirth.replace(/\s/g, '').length === 0 || isNaN(userOfBirth)) {
        alert('Нужно писать число!');
        return false;
    } else {
        const CURRENTYEAR = 2020;
        let userCurrentAge = CURRENTYEAR - userOfBirth; 
        document.write('Вам сейчас ' + userCurrentAge + ' лет!');
        return true;
    }


    //  Вычисляем перимитр квадрата
    let lengthSquareSide = prompt('Введите длину стороны квадрата, любое число', '10');
    let perimeterSquare = 4 * lengthSquareSide;
    alert('Периметр квадрата равен ' + perimeterSquare);
    

    let circleRadius = prompt('Введите, пожалуйста радиус окружности', 'любое число');
    let areaOfTheCircle = 2 * circleRadius * 3.14;
    alert('Радиус окружности равен ' + areaOfTheCircle);


    let distanceInKilometers = prompt('Введите расстояние между двумя городами в километрах', '10');
    let travelTime = prompt('Введите время, за которое вы хотите добраться в пункт назначения, в часах', '1.30');
    let movementSpeed = distanceInKilometers / travelTime;
    alert('Чтобы добраться в пункт назначения за указанное время, вам нужно двигаться со скоростью ' + movementSpeed + ' километров в час');


    const USDRATE = 24.0854;
    const EURORITE = 27.0406;
    let  coefficientValut = USDRATE / EURORITE;
    let amountOfDollars =prompt('Введите сумму долларов, которую вы хотите обменять', '10');
    alert('Вы получите ' + amountOfDollars * coefficientValut + ' евро');


    let flashDriveVolume = prompt('Укажите, пожалуйста, объем вашей флешки в Гигабайтах', '10');
    let file_1_Volume = 820 / 1000; 
    let numberOfFiles = flashDriveVolume / file_1_Volume;
    alert('У вас на флешке поместится ' + (parseInt(numberOfFiles * 1) / 1) + ' файлов объемом по 820 Мб');


    let amountOfFunds = prompt('Введите сумму имеющихся у вас денег в гривнах', '10.00');
    let priceOfChocolate = prompt('Введите стоимость одной шоколадки', '10.00');
    let numberOfChocolates = amountOfFunds / priceOfChocolate;
    let change = amountOfFunds % priceOfChocolate;
    alert('На сумму ' + amountOfFunds + ' вы сможете купить ' + (parseInt(numberOfChocolates * 1) / 1) + ' шоколадок. И у вас останется сдача ' + (parseInt(change * 100) / 100) + ' грн.');
    
    let depositAmount = prompt('Введите сумму депозита, который желаете внести в валюте вклада');
    let timeOfDeposit = prompt('Введите желаемый срок депозита в месяцах', '2');
    let interestRateOneMonth = 5 /100 / 12;
    let amountOfInterest = depositAmount * interestRateOneMonth * timeOfDeposit;
    alert('За ' + timeOfDeposit + ' месяцев вы получите от суммы депозита в ' + depositAmount + ' гривен процентов ' + (parseInt(amountOfInterest  * 100) / 100) + ' гривен');

 })()
