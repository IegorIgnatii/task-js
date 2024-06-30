// Задача-1
// Напишіть функцію для охоронця нічного клубу яка приймає два параметри age та balance. Функція повинна повернути рядок "Wellcome" якщо age більший за 18 та balance більший за 100. В іншому випадку функцію повинна повернути рядок "Goodbye".

// function nightClub(age, balance) {
//   if (age >= 18 && balance > 100) {
//     console.log('Wellcome');
//   } else {
//     console.log('Goodbye');
//   }
// }

// nightClub(17, 120);
// nightClub(18, 120);
// nightClub(21, 20);
// nightClub(21, 120);

// Задача-2
// Напишіть функцію яка для магазину яка приймає кількість товару (amount) та його вартість (price). Функція повинна повернути рядок "Ми це купуємо" якщо загальна вартість не перевищує 1000, в іншому випадку функція повинна повернути рядок "Це занадто дорого".

// function purchase(amount, price) {
//   if (amount * price <= 1000) {
//     return 'Ми це купуємо';
//   } else {
//     return 'Це занадто дорого';
//   }
// }

// console.log(purchase(10, 90));
// console.log(purchase(10, 110));
// console.log(purchase(19, 100));
// console.log(purchase(9, 100));

// Задача-4
// Напишіть функцію, яка приймає 2 числа: number та divisor. Якщо number ділиться на divisor без остатку, поверніть рядок "Ділиться", в іншому випадку поверніть "Не ділиться".

// function numDivisor(number, divisor) {
//   if (number % divisor) {
//     return 'Не ділиться';
//   } else {
//     return 'Ділиться';
//   }
// }

// console.log(numDivisor(8, 7));
// console.log(numDivisor(8, 3));
// console.log(numDivisor(4, 1));
// console.log(numDivisor(2, 7));

// Задача-5

// Напишіть функцію, яка приймає 2 параметри: isRaining (булевий) і hasUmbrella (булевий). Якщо дощить і у вас є парасоля, поверніть "Не змокнеш", якщо дощить і немає парасолі, поверніть "Змокнеш", в іншому випадку поверніть "Без дощу".

// function rain(pisRaining, hasUmbrella) {
//   if (pisRaining === true && hasUmbrella === true) {
//     return 'Не змокнеш';
//   } else if (pisRaining === true && hasUmbrella === false) {
//     return 'Змокнеш';
//   } else return 'Без дощу';
// }

// console.log(rain(true, false));
// console.log(rain(true, true));
// console.log(rain(false, false));
// console.log(rain(false, true));

// Задача-6
// Напишіть функцію, яка приймає оцінку студента (grade) за шкалою від 0 до 100. Якщо оцінка 90 і більше, поверніть "Відмінно", від 75 до 89 - "Добре", від 50 до 74 - "Задовільно", нижче 50 - "Незадовільно".

// function assessment(grade) {
//   if (grade >= 90) {
//     return 'Відмінно';
//   } else if (grade >= 75) {
//     return 'Добре';
//   } else if (grade >= 50) {
//     return 'Задовільно';
//   } else return 'Незадовільно';
// }

// console.log(assessment(99));
// console.log(assessment(90));
// console.log(assessment(80));
// console.log(assessment(75));
// console.log(assessment(60));
// console.log(assessment(40));

// Задача-7
// Напишіть функцію, яка приймає два параметри: dayOfWeek та isHoliday. Якщо dayOfWeek це "Saturday" або "Sunday" або isHoliday є true, поверніть "Вихідний", в іншому випадку поверніть "Робочий день".

// function weekend(dayOfWeek, isHoliday) {
//   if (
//     isHoliday === true ||
//     dayOfWeek === 'Saturday' ||
//     dayOfWeek === 'Sunday'
//   ) {
//     return 'Вихідний';
//   } else return 'Робочий день';
// }

// console.log(weekend('Saturday', true));
// console.log(weekend('Sunday', false));
// console.log(weekend('Saturday', false));
// console.log(weekend('Sunday', true));
// console.log(weekend('Monday', true));
// console.log(weekend('Monday', false));
// console.log(weekend('Wednesday', false));
// console.log(weekend('Wednesday', true));

// Задача-9
// Напишіть функцію, яка приймає два параметри: hasInvitation (булевий) і isFriend (булевий). Якщо у вас є запрошення або ви друг, поверніть "Ви запрошені", в іншому випадку поверніть "Вхід заборонено".

// function wellcome(hasInvitation, isFriend) {
//   if (hasInvitation === true || isFriend === true) {
//     return 'Ви запрошені';
//   } else {
//     return 'Вхід заборонено';
//   }
// }

// console.log(wellcome(true, false));
// console.log(wellcome(true, true));
// console.log(wellcome(false, true));
// console.log(wellcome(false, false));

// Задача-10
// Напишіть функцію, яка приймає вік особи (age). Якщо вік менший за 12, поверніть "Дитина", якщо від 12 до 18, поверніть "Підліток", якщо від 18 до 60, поверніть "Дорослий", більше 60 - "Пенсіонер".

// function statusAge(age) {
//   if (age >= 60) {
//     return 'Пенсіонер';
//   } else if (age >= 18) {
//     return 'Дорослий';
//   } else if (age >= 12) {
//     return 'Підліток';
//   } else return 'Дитина';
// }

// console.log(statusAge(0));
// console.log(statusAge(3));
// console.log(statusAge(12));
// console.log(statusAge(14));
// console.log(statusAge(17));
// console.log(statusAge(18));
// console.log(statusAge(56));
// console.log(statusAge(67));

// Задача-11
// Напишіть функцію, яка приймає два параметри: isLoggedIn (булевий) та hasAdminRights (булевий). Якщо ви увійшли в систему і маєте права адміністратора, поверніть "Адмін-сторінка", якщо увійшли, але не є адміністратором, поверніть "Користувач", в іншому випадку - "Користувач".

// function akk(isLoggedIn, hasAdminRights) {
//   if (isLoggedIn === true && hasAdminRights === true) {
//     return 'Адмін-сторінка';
//   } else if (isLoggedIn === true && hasAdminRights === false) {
//     return 'Користувач';
//   } else return 'Гість';
// }

// console.log(akk(true, false));
// console.log(akk(true, true));
// console.log(akk(false, true));
// console.log(akk(false, false));

// Задача-12
// Напишіть функцію, яка приймає один параметр speed. Якщо швидкість менша за 60 км/год, поверніть "Безпечно", якщо від 60 до 100 км/год, поверніть "Увага", якщо більше 100 км/год, поверніть "Небезпечно".

// function speedTest(speed) {
//   if (speed <= 60) {
//     return 'Безпечно';
//   } else if (speed <= 100) {
//     return 'Увага';
//   } else return 'Небезпечно';
// }

// console.log(speedTest(20));
// console.log(speedTest(55));
// console.log(speedTest(60));
// console.log(speedTest(67));
// console.log(speedTest(100));
// console.log(speedTest(130));
// console.log(speedTest(170));

// Задача-13
// Напишіть функцію, яка приймає два параметри: time та isWeekend. Якщо time менше 12 і це не вихідний день, поверніть "Ранок буднього дня", якщо більше 12 і менше 18 і це вихідний, поверніть "День вихідного дня", в іншому випадку поверніть "Вечір".

// function isDoba(time, isWeeken) {
//   if (time < 12 && isWeeken === false) {
//     return 'Ранок буднього дня';
//   } else if (time > 12 && time < 18 && isWeeken === true) {
//     return 'День вихідного дня';
//   } else return 'Вечір';
// }

// console.log(isDoba(12, false));
// console.log(isDoba(1, true));
// console.log(isDoba(15, false));
// console.log(isDoba(15, true));
// console.log(isDoba(8, false));
// console.log(isDoba(15, true));

// Задача-14
// Напишіть функцію, яка приймає два параметри: hasGlutenAllergy (булевий) та containsGluten (булевий). Якщо у вас є алергія на глютен і продукт містить глютен, поверніть "Не можна їсти", в іншому випадку поверніть "Можна їсти".

// function isGluten(hasGlutenAllergy, containsGluten) {
//   if (hasGlutenAllergy === true && containsGluten === true) {
//     return 'Не можна їсти';
//   } else return 'Можна їсти';
// }

// console.log(isGluten(true, false));
// console.log(isGluten(true, true));
// console.log(isGluten(false, true));
// console.log(isGluten(false, false));

// Задача-15
// Напишіть функцію, яка приймає один параметр age. Якщо вік менше 18, поверніть "Не можна купувати алкоголь", якщо 18 або більше, поверніть "Можна купувати алкоголь".

// function alko(age) {
//   if (age >= 18) {
//     return 'Можна купувати алкоголь';
//   } else return 'Не можна купувати алкоголь';
// }

// console.log(alko(15));
// console.log(alko(19));
// console.log(alko(55));

// Задача-16
// Напишіть функцію, яка приймає один параметр isSunny (булевий). Якщо сонячно, поверніть "Вийдемо на прогулянку", якщо ні, поверніть "Залишимося вдома".

// function isMotion(isSunny) {
//   if (isSunny === true) {
//     return 'Вийдемо на прогулянку';
//   } else return 'Залишимося вдома';
// }

// console.log(isMotion(true));
// console.log(isMotion(false));
// console.log(isMotion(true));

// Задача-17
// Напишіть функцію, яка приймає один параметр number. Якщо число парне, поверніть "Парне", якщо непарне, поверніть "Непарне".

// function duble(num) {
//   if (num % 2 === 0) {
//     return 'Парне';
//   } else return 'Непарне';
// }

// console.log(duble(33));
// console.log(duble(44));
// console.log(duble(55));

// Задача-18
// Напишіть функцію, яка приймає два параметри: password та confirmPassword. Якщо ці два паролі однакові, поверніть "Паролі збігаються", якщо ні, поверніть "Паролі не збігаються".

// function passwordCheck(password, confirmPassword) {
//   if (password === confirmPassword) {
//     return 'Паролі збігаються';
//   } else return 'Паролі не збігаються';
// }

// console.log(passwordCheck('qwerty', 'qwerty'));
// console.log(passwordCheck('qwerty', 'qworty'));
// console.log(passwordCheck('qwerfy', 'qwerty'));

// Задача-19
// Напишіть функцію, яка приймає один параметр temperature в градусах Цельсія. Якщо температура нижче 0, поверніть "Зима", якщо від 0 до 15, поверніть "Весна", якщо від 16 до 25, поверніть "Літо", якщо більше 25, поверніть "Осінь".

// function seasons(temperature) {
//   if (temperature < 0) {
//     return 'Зима';
//   } else if (temperature < 15) {
//     return 'Весна';
//   } else if (temperature < 25) {
//     return 'Літо';
//   } else return 'Осінь';
// }

// console.log(seasons(-1));
// console.log(seasons(4));
// console.log(seasons(8));
// console.log(seasons(50));
// console.log(seasons(8));
// console.log(seasons(17));
// console.log(seasons(29));

// Задача-20
// Напишіть функцію, яка приймає два параметри: number1 та number2. Якщо number1 більше number2, поверніть "Перше більше", якщо менше, поверніть "Перше менше", якщо рівні, поверніть "Рівні".

// function twoNumbers(number1, number2) {
//   if (number1 > number2) {
//     return 'Перше більше';
//   } else if (number1 < number2) {
//     return 'Перше менше';
//   } else return 'Рівні';
// }

// console.log(twoNumbers(2, 5));
// console.log(twoNumbers(2, 1));
// console.log(twoNumbers(2, 2));
// console.log(twoNumbers(5, 5));
// console.log(twoNumbers(25, 35));
// console.log(twoNumbers(21, 25));
// console.log(twoNumbers(25, 25));

// Задача-21
// Напишіть функцію, яка приймає один параметр isBatteryFull (булевий). Якщо акумулятор повний, поверніть "Не потрібно заряджати", якщо ні, поверніть "Заряджати".

// function battarey(isBatteryFull) {
//   if (isBatteryFull === true) {
//     return 'Не потрібно заряджати';
//   } else {
//     return 'Заряджати';
//   }
// }

// console.log(battarey(false));
// console.log(battarey(true));
// Задача-22
// Напишіть функцію, яка приймає два параметри: isStudent (булевий) та hasID (булевий). Якщо ви студент і маєте посвідчення, поверніть "Вхід дозволено", якщо ні, поверніть "Вхід заборонено".
// Задача-23
// Напишіть функцію, яка приймає два параметри: temperature та isRaining. Якщо температура менша за 0 або йде дощ, поверніть "Потрібно носити теплий одяг", в іншому випадку поверніть "Легка одяг".
// Задача-24
// Напишіть функцію, яка приймає два параметри: hasCar (булевий) та hasLicense (булевий). Якщо у вас є автомобіль та водійські права, поверніть "Можете водити машину", якщо ні, поверніть "Водити заборонено".
// Задача-25
// Напишіть функцію, яка приймає два параметри: age та hasParentConsent (булевий). Якщо вік менше 18 і немає батьківської згоди, поверніть "Доступ заборонено", якщо старше 18 або є згода батьків, поверніть "Доступ дозволено".
// Задача-26
// Напишіть функцію, яка приймає два параметри: isVegetarian (булевий) та containsMeat (булевий). Якщо ви вегетаріанець і страва містить м'ясо, поверніть "Не можна їсти", в іншому випадку поверніть "Можна їсти".
// Задача-27
// Напишіть функцію, яка приймає два параметри: hoursWorked та overtime. Якщо ви працювали більше 40 годин або у вас є понаднормові, поверніть "Отримуєте бонус", в іншому випадку поверніть "Без бонусу".
// Задача-28
// Напишіть функцію, яка приймає два параметри: number та isPositive. Якщо число більше 0 і isPositive дорівнює true, поверніть "Це позитивне число", в іншому випадку поверніть "Це не позитивне число".
// Задача-29
// Напишіть функцію, яка приймає два параметри: temperature та isSunny. Якщо температура більше 20 і це сонячний день, поверніть "Час для прогулянки", в іншому випадку поверніть "Залишимося вдома".
// Задача-30
// Напишіть функцію, яка приймає два параметри: weight та height. Якщо вага більше 100 кг і зріст менше 150 см, поверніть "Перевищено допустимий ліміт", в іншому випадку поверніть "У межах норми".
// Задача-31
// Напишіть функцію, яка приймає два параметри: year та isLeapYear (булевий). Якщо рік ділиться на 4 і isLeapYear є true, поверніть "Це високосний рік", в іншому випадку поверніть "Звичайний рік".
// Задача-32
// Напишіть функцію, яка приймає три параметри: age, isStudent (булевий), і isSeniorCitizen (булевий). Якщо вік менший за 18 або є студентом, або якщо старший за 65 і є пенсіонером, поверніть "Знижка на квиток", в іншому випадку поверніть "Повна вартість квитка".
// Задача-33
// Напишіть функцію, яка приймає три параметри: temperature, isRaining, і hasUmbrella (булевий). Якщо температура більше 25 і йде дощ, і у вас є парасоля, поверніть "Візьміть парасолю та одягніться легше", якщо немає парасолі, поверніть "Залишайтеся вдома", в іншому випадку поверніть "Виходьте на прогулянку".
// Задача-34
// Напишіть функцію, яка приймає три параметри: isMember (булевий), hasCoupon (булевий), і purchaseAmount. Якщо ви є членом клубу або маєте купон, і сума покупки більше 100, поверніть "Отримаєте знижку", в іншому випадку поверніть "Знижка не доступна".
// Задача-35
// Напишіть функцію, яка приймає два параметри: password і confirmPassword. Якщо password містить як мінімум одну цифру і збігається з confirmPassword, поверніть "Пароль прийнято", в іншому випадку поверніть "Пароль не відповідає вимогам".
// Задача-36
// Напишіть функцію, яка приймає три параметри: isOnline (булевий), hasCamera (булевий), і hasMicrophone (булевий). Якщо ви онлайн і маєте камеру або мікрофон, поверніть "Готові до відеоконференції", якщо ви не онлайн або не маєте жодного з них, поверніть "Немає можливості для відеоконференції".
// Задача-37
// Напишіть функцію, яка приймає три параметри: currentTime, isWeekend, і isHoliday. Якщо зараз менше 8 ранку і це не вихідний день, і це не свято, поверніть "Скоро час на роботу", в іншому випадку поверніть "Вільний час".
// Задача-38
// Напишіть функцію, яка приймає три параметри: temperature, isSnowing, і hasHeater (булевий). Якщо температура нижче 0 і йде сніг, і у вас є обігрівач, поверніть "Тепло та затишно", якщо обігрівача немає, поверніть "Потрібно зігрітися", в іншому випадку поверніть "Погода нормальна".
// Задача-39
// Напишіть функцію, яка приймає три параметри: age, hasDriverLicense (булевий), і isInsured (булевий). Якщо ви старше 18 років, маєте водійське посвідчення і страховку, поверніть "Можна керувати автомобілем", в іншому випадку поверніть "Не можна керувати автомобілем".
// Задача-40
// Напишіть функцію, яка приймає три параметри: currentDay, hasMeeting (булевий), і isHoliday. Якщо сьогодні понеділок, середа або п'ятниця, і у вас є зустріч, і це не свято, поверніть "Є зустріч", в іншому випадку поверніть "Немає зустрічі".
// Задача-41
// Напишіть функцію, яка приймає три параметри: itemPrice, isDiscounted (булевий), і discountAmount. Якщо ціна товару більше 1000, і він знижений на 10% або більше, поверніть "Скидка доступна", в іншому випадку поверніть "Скидка не доступна".
// Задача-42
// Напишіть функцію, яка приймає один параметр dayOfWeek. Використовуючи switch, поверніть "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота" або "Неділя" залежно від введеного числа (1 - Понеділок, 2 - Вівторок, і т.д.). Якщо введене число не в діапазоні від 1 до 7, поверніть "Невідомий день".
// Задача-43
// Напишіть функцію, яка приймає один параметр grade. Використовуючи switch, поверніть "Відмінно", "Добре", "Задовільно", "Незадовільно" в залежності від оцінки: "A" - "Відмінно", "B" - "Добре", "C" - "Задовільно", "D" або "F" - "Незадовільно".
// Задача-44
// Напишіть функцію, яка приймає один параметр fruit. Використовуючи switch, поверніть "Цитрус", "Яблуко", "Груша", або "Ягода" в залежності від введеного фрукта. Наприклад, "Лимон", "Апельсин", "Грейпфрут" повинні повернути "Цитрус", "Яблуко" - "Яблуко", "Груша" - "Груша", "Полуниця", "Малина", "Чорниця" - "Ягода".
// Задача-45
// Напишіть функцію, яка приймає один параметр vehicleType. Використовуючи switch, поверніть "Легковий автомобіль", "Вантажівка", "Мотоцикл", або "Інше" в залежності від введеного типу транспортного засобу. Наприклад, "Car" - "Легковий автомобіль", "Truck" - "Вантажівка", "Motorcycle" - "Мотоцикл", і інші випадки - "Інше".

// Задача-46 Напишіть функцію, яка приймає один параметр animal. Використовуючи switch, поверніть "Ссавець", "Птах", "Риба", або "Рептилія" в залежності від введеної тварини. Наприклад, "Кішка", "Собака", "Кінь" - "Ссавець", "Голуб", "Орлан", "Горобець" - "Птах", "Лосось", "Тунець", "Тріска" - "Риба", "Ящірка", "Черепаха", "Змія" - "Рептилія".

// Задача-47
// Напишіть функцію, яка приймає один параметр weather. Використовуючи switch, поверніть "Сонячно", "Хмарно", "Дощ", або "Сніг" в залежності від введеного типу погоди. Наприклад, "Sunny" - "Сонячно", "Cloudy" - "Хмарно", "Rainy" - "Дощ", "Snowy" - "Сніг".
// Задача-48
// Напишіть функцію, яка приймає один параметр mood. Використовуючи switch, поверніть "Щасливий", "Сумний", "Злий", або "Здивований" в залежності від введеного настрою. Наприклад, "Happy" - "Щасливий", "Sad" - "Сумний", "Angry" - "Злий", "Surprised" - "Здивований".
// Задача-49
// Напишіть функцію, яка приймає один параметр month. Використовуючи switch, поверніть назву сезону ("Весна", "Літо", "Осінь", "Зима") в залежності від місяця. Наприклад, "Березень", "Квітень", "Травень" - "Весна", "Червень", "Липень", "Серпень" - "Літо", "Вересень", "Жовтень", "Листопад" - "Осінь", "Грудень", "Січень", "Лютий" - "Зима".
// Задача-50
// Напишіть функцію, яка приймає один параметр color. Використовуючи switch, поверніть "Теплий колір" або "Холодний колір" в залежності від кольору. Наприклад, "Red", "Orange", "Yellow" - "Теплий колір", "Blue", "Green", "Purple" - "Холодний колір".
// Задача-51
// Напишіть функцію, яка приймає один параметр continent. Використовуючи switch, поверніть назву континенту або "Невідомий континент" в залежності від введеного значення. Наприклад, "Africa", "Europe", "Asia", "North America", "South America", "Antarctica", "Australia" - відомі континенти, інші випадки - "Невідомий континент".

// Задача-3
// Напишіть функцію, яка приймає температуру (temp) в градусах Цельсія. Якщо температура нижче 0, функція повинна повернути рядок "Замерзає", якщо більше 0 але менше 25 - "Нормальна температура", якщо більше 25 - "Спекотно".

// function tempTodey(temp) {
//   if (temp < 0) {
//     return 'Замерзає';
//   } else if (temp > 0 && temp < 25) {
//     return 'Нормальна температура';
//   } else return 'Спекотно';
// }

// console.log(tempTodey(-39));
// console.log(tempTodey(-3));
// console.log(tempTodey(0));

// console.log(tempTodey(3));
// console.log(tempTodey(27));
// console.log(tempTodey(+5));

// Задача-8
// Напишіть функцію, яка приймає один параметр year. Якщо рік ділиться на 4 і не ділиться на 100, або ділиться на 400, поверніть "Високосний рік", в іншому випадку - "Звичайний рік".

// function leapYear(year) {
//   let four = year % 4 === 0;
//   let hundred = year % 100 !== 0;
//   let fourhundred = year % 400 === 0;

//   let isleapYear = (four && hundred) || fourhundred;
//   return isleapYear ? 'Високосний рік' : 'Звичайний рік';
// }

// console.log(leapYear(2020));
// console.log(leapYear(2021));
// console.log(leapYear(2022));
// console.log(leapYear(2023));
// console.log(leapYear(2024));
// console.log(leapYear(2025));
// console.log(leapYear(2026));
