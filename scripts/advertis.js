/* global $, alert, console */

$(function () {
    'use strict';
    
   
    $('#drp').hover(function () {
        $('#drp').addClass('open');
    }).mouseleave(function () {
        $('#drp').removeClass('open');
    });
});