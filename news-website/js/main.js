$(function () {
    $.get('https://www.cbr-xml-daily.ru/daily_json.js', function (response) {
        var json = JSON.parse(response);
        $('#eur').html(json.Valute.EUR.Value.toFixed(2));
        $('#usd').html(json.Valute.USD.Value.toFixed(2));
    });
});


let bar = document.querySelector('.menu_bar');
let menu = document.querySelector('.menu_container');
let close = document.querySelector('.menu_container');

bar.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.add('menu_container_open');
});

close.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.remove('menu_container_open');
});
