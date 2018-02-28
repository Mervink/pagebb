import '../scss/main.scss';
//import $ from 'jquery';

function $(id) {
    return document.getElementById(id);
}
  
  dragula([$('avail-modules-source'), $('modules-target')], {
    revertOnSpill: true,
    copy: true
  });
  