$('.countries__content__filter').on('click', 'li', function(){
	$(".countries__content__filter li").removeClass("activ"); //удаляем класс во всех вкладках
	$(this).addClass("activ"); //добавляем класс текущей (нажатой)
	});

var noCulture=$('div.noCulture');
var culture=$('div.culture');
var disable=$('div.disable');
var exstreme=$('div.exstreme');
var noExstreme=$('.culture.noExtreme');
var atmosphere=$('div.atmosphere');
var noAtmosphere=$('.culture.noAtmosphere');
var people=$('div.people');
var noPeople=$('div.noPeople');
$('li.all').on('click', function(){
	culture.show();
	noCulture.show();
	disable.hide();	
	noExstreme.hide();
	noAtmosphere.hide();	
});
$('li.culture').on('click', function(){	
	noCulture.hide();
	culture.show();
	disable.hide();
});
$('li.exstreme').on('click', function(){
	culture.hide();
	noCulture.hide();
	disable.show();
	exstreme.show();
	noExstreme.show();	    	 
});	
$('li.atmosphere').on('click', function(){	
    culture.hide();
	noCulture.hide();
	disable.show();
	atmosphere.show();
	noAtmosphere.show();	
});
$('li.people').on('click', function(){	
    culture.hide();
    noCulture.hide();
    disable.show();
	noPeople.show();	
    people.show();
});