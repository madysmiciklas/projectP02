// Inspired by 
// Lecture tutorial in Javascript of Paul Brokenshire
// https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp
'use strict';

console.log('Javascript is running.');

var menuAll = document.querySelector('#menuAll');
var menuBrush = document.querySelector('#menuBrush');
var menuBooks = document.querySelector('#menuBooks');
var menuPaint = document.querySelector('#menuPaint');
var menuSale = document.querySelector('#menuSale');
var menuNew = document.querySelector('#menuNew');

var productItem = document.getElementsByClassName('product-item');
var brush = document.getElementsByClassName('brush');
var paint = document.getElementsByClassName('paint');
var book = document.getElementsByClassName('book');
var newItem = document.getElementsByClassName('new');
var sale = document.getElementsByClassName('sale');

menuBrush.addEventListener('click',
    function(){
        console.log('Brushes has been clicked');

        if (document.getElementsByClassName("product-item").classList.contains("brush")){
            productItem.classList.remove('hidden');
        }
        else {
            productItem.classList.add('hidden');
        }
    }

)