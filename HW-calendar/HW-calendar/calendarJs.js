const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const monthDays = document.querySelector('.dates__wrapper-list')

currentDate.setDate(1);


const lastDay = new Date(currentDate.getFullYear(),
    currentDate.getMonth() + 1, 0).getDate();

const firstDayIndex = currentDate.getDay() - 1
const prevLastDay = new Date(currentDate.getFullYear(),
    currentDate.getMonth(), 0).getDate();

const lastDayIndex = new Date(currentDate.getFullYear(),
    currentDate.getMonth() + 1, 0).getDay();

const nextDays = 7 - lastDayIndex ;


const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

document.querySelector('.right-side__title').innerText = `${months[currentDate.getMonth()]}
${currentYear}`;

document.querySelector('.header__title').innerText = (currentDate.toDateString());

let days = '';

for (let x = firstDayIndex; x > 0; x--) {
    days += `<li class="wrapper__list-item prev-month"><a href="#" class="wrapper__list-link">${prevLastDay - x + 1} </a></li>`;

}

for (let day = 1; day <= lastDay; day++) {
    days += `<li class="wrapper__list-item "><a href="#" class="wrapper__list-link">${day} </a></li>`;
    monthDays.innerHTML = days;
}

for (let j = 1; j <= nextDays; j++) {
    days += `<li class="wrapper__list-item next-month"><a href="#" class="wrapper__list-link">${j} </a></li>`;
    monthDays.innerHTML = days;

}






