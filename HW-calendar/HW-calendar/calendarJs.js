const currentDate = new Date();

const renderCalendar = () => {

    const headerCurrentDate = currentDate.getDate();
    console.log(headerCurrentDate)


    const currentYear = currentDate.getFullYear();

    currentDate.setDate(1);
    const monthDays = document.querySelector('.dates__wrapper-list')

    const lastDay = new Date(currentDate.getFullYear(),
        currentDate.getMonth() + 1, 0).getDate();

    const firstDayIndex = currentDate.getDay() - 1

    const prevLastDay = new Date(currentDate.getFullYear(),
        currentDate.getMonth(), 0).getDate();

    const lastDayIndex = new Date(currentDate.getFullYear(),
        currentDate.getMonth() + 1, 0).getDay();

    const nextDays = 7 - lastDayIndex;


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


    document.querySelector('.header__title').innerText = (new Date().toDateString());

    document.querySelector('.right-side__title').innerText = `${months[currentDate.getMonth()]}
${currentYear}`;


    let days = '';


    for (let x = firstDayIndex; x > 0; x--) {
        days += `<li class="wrapper__list-item prev-month"><a href="#" class="wrapper__list-link">${prevLastDay - x + 1} </a></li>`;

    }

    for (let day = 1; day <= lastDay; day++) {
        if (day === new Date().getDate() && currentDate.getMonth() === new Date().getMonth()) {
            days += `<li class="wrapper__list-item wrapper__list-item-today"><a href="#" class="wrapper__list-link">${day} </a></li>`;


        } else days += `<li class="wrapper__list-item "><a href="#" class="wrapper__list-link">${day} </a></li>`;
        monthDays.innerHTML = days;

    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<li class="wrapper__list-item next-month"><a href="#" class="wrapper__list-link">${j} </a></li>`;
        monthDays.innerHTML = days;

    }


}




document.querySelector('.prev__button').addEventListener('click', () => {
currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
})

document.querySelector('.next__button').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
})

renderCalendar()
