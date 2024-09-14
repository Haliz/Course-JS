'use strict';

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (!arr || !arr.length) {
        return 'Семья пуста';
    } else {
        const familyValue = family.join(' ');
        return 'Семья состоит из: ' + familyValue;
    }
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(value => console.log(value.toLowerCase()));
}

standardizeStrings(favoriteCities);

const someString = 'This is some strange string';

/*function reverse(str) {
    let rsl = '';
    if (typeof str != 'string') {
        rsl = "Ошибка!"
    } else {
        let arr = str.split('');
        let revArr = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            revArr[(arr.length - 1) - i] = arr[i];
        }
        rsl = revArr.join('');
    }
    return rsl;
}

console.log(reverse(someString));*/

function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }
    // Самый оптимальный вариант решения
    return str.split('').reverse().join('');

    // Решение при помощи цикла
    // let newStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i];
    // }
    // return newStr
}

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if (!arr || !arr.length) {
        return  'Нет доступных валют';
    } else {
       let rsl = "Доступные валюты:\n";
       const index = arr.indexOf(missingCurr);
       delete arr[index];
       arr.forEach(value => rsl += value + "\n");
       return rsl;
    }
}