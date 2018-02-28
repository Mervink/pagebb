import '../scss/main.scss';
import bb from 'jquery';

function $(id) {
    return document.getElementById(id);
}
  
  dragula([$('avail-modules-source'), $('modules-target')], {
    revertOnSpill: true
  });
  
  bb("#modules-target").on("drop", function(){
        console.log("dsfdsfsdf");

  });