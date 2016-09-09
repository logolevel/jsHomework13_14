//вкл строгий режим
'use strict';

$(function() {

//создаём объект
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


});