//вкл строгий режим
'use strict';

$(function() {

//создаём объект вопросов и ответов
var objQuestions =[
		{
			question_1: 'true + false',
			variant_1: 'true',
			variant_2: 'false',
			variant_3: '1'
		},
		{
			question_1: '7 / 0',
			variant_1: 'null',
			variant_2: 'undefined',
			variant_3: 'infinity'
		},
		{
			question_1: '5 || 0',
			variant_1: 'null',
			variant_2: '0',
			variant_3: '5'
		}
	];

//записываем объект в localStorage
localStorage.setItem('strQuestions', JSON.stringify(objQuestions));
//получаем значение
var result = localStorage.getItem('strQuestions');
//проверяем, что это действительно строка
console.log(result);
//парсим строку в объект
result = JSON.parse(result);


//template
	var html = $('#test').html();
	var content = tmpl(html, {
		data: result
	});
	$('body').append(content);


//создаём массив правильных ответов
//и переводим в строку, чтобы сравнить
var objAnswers = ['three', 'three','three'];
var strAnswers = JSON.stringify(objAnswers);

//забераем значение с чекбоксов
$('.btnInput').on('click', function(e) {
	e.preventDefault();
//создаём новый массив из выбранных чекбоксов
	var selectedItems = new Array();

	$('input[class="inputs"]:checked').each(function() {
		selectedItems.push($(this).val());
	});


//записать в строку массив выделенных ответов
//для того чтобы сравнить с правильными
var strSelected = JSON.stringify(selectedItems);

//проверяем ответы
	if (strSelected == strAnswers) {
		$('.modal p').text('Это победа!');
	} else {
		$('.modal p').text('Попробуй ещё..');
	}
//показываем модальное окно
$('.modal').css('display', 'block');
//очистить чекбоксы
$('input:checkbox').removeAttr('checked');
//окончание функции click
});
//закрываем модальное окно
$('.close-modal').on('click', function() {
	$('.modal').css('display', 'none');
})

//окончание скрипта
});