$(function () {
$('select').select2();

  /*************************************************/
  /*********** SIDE MENU ***************************/
  /*************************************************/
/*

CODE MOVED TO ui.dashboard.js:enable_fxWidgetSearchBehaviour()

*/

$( "input[type='date']" ).datepick({
  showTrigger: '.ui-datepicker-trigger',
  dateFormat: 'mm/dd/yyyy'
});

var editable = function(options) {
  var _options = $.extend({
        klass: '.editable',
        enable: '.show-edit-box',
        hide: '.edit-box-hidden',
        placeholder: 'Please enter...',
        editElClass: 'edit-box-class'
        
      }, options);

  var init = function () {
    var editableElID,
        preVal
        postVal;
    $(_options.enable).on('click', function() {
          editableElID = $(this).attr('data-editable-for');
          preVal = $('#'+editableElID).text();
          $('#'+editableElID).after('<div class="edit-box"><input type="text" placeholder="'+_options.placeholder+'" value="'+preVal+'" /></div>')
          $(_options.hide + ', #'+editableElID).hide();

        });
  }
};

function edit () {
  var editableElId, preVal;
$('.show-edit-box').on('click', function () {
  var editableElId = $(this).attr('data-editable-for'),
  preVal = $('#'+editableElId).text().trim();
  $('.edit-box input').val(preVal);
  $('.editable, .edit-box-hidden, .edit-box, .edit-box-buttons').toggle();
  $('.edit-box').focus();
});

$('.edit-box input').on('blur', function () {
  $('#'+editableElId).text($('.edit-box input').val());
  $('.editable, .edit-box-hidden, .edit-box, .edit-box-buttons').toggle();    
});

$('.edit-box-buttons .action').on('click', function(){
  $('#'+editableElId).text($('.edit-box input').val());
  $('.editable, .edit-box-hidden, .edit-box, .edit-box-buttons').toggle();
});

};
edit();




//$.fn.editable.defaults.mode = 'inline';
//$editableContent = $('.editable').editable({showbuttons: false});

});
//# sourceMappingURL=app.js.map
