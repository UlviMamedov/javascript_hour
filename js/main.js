function convertMinutesToTime(minutes) {
    if (isNaN(minutes)) {
        return "Будь ласка, введіть число.";
    }

    if (minutes <= 0) {
        return "Будь ласка, введіть значення більше 0.";
    }

    if (minutes > 6000) {
        return "Це занадто багато хвилин. Будь ласка, введіть адекватне значення.";
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    let result = `${hours} годин`;

    if (remainingMinutes > 0) {
        result += ` ${remainingMinutes} хвилин`;
    }

    return result;
}

const inputMinutes = prompt("Введіть кількість хвилин:");

// Конвертація введених хвилин і виведення результату
const result = convertMinutesToTime(parseInt(inputMinutes));
alert(result);