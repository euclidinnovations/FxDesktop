var supportedEvents = "click tap touch";

$(document).ready(document_ready);

function document_ready() {
    //setupWidgetBehaviour();

    enableMenuSideBarToggleBehaviour();
    enable_flipImageAction();
    initCommandBar();
    enable_select2Expand();
    enable_select2Behaviour();
    enable_datePickerBehaviour();
    //closeFXWidgetSearchOnClickOutside();
    enable_fxWidgetSearchBehaviour();
    init_PreferencesWorkspaceRenameBehaviour();
    fixVerticalTab(); 
    enableFxWidgets();
}

function enableFxWidgets() {
  var $frame  = $('#fxwidgets');
  var $slidee = $frame.children('ul').eq(0);
  var $wrap   = $frame.parent();

  var options = {
      horizontal: 1,
      /*itemNav: 'basic',*/
      smart: 1,
      activateOn: 'click',
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 1,
      scrollBy: 1,
     /* pagesBar: $wrap.find('#fxwidgets .slidee'),*/
      activatePageOn: 'click',
      speed: 300,
      elasticBounds: 1,
      easing: 'easeOutExpo',
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,

      // Buttons
      prev: $wrap.find('#fxwidget-container .prev'),
      next: $wrap.find('#fxwidget-container .next')
  };

  var fxWidgets = new Sly($frame, options).init();

  $('.search-box').on('focus', function(){
    $('#fxwidget-container').css({
      width: ($('#fxwidget-container').width() - 140) + 'px',
      'margin-right': (Number($('#fxwidget-container').css('margin-right').replace(/px/gi, '')) + 140) + 'px'
    }); 
    $('.fxwidget-controls').css({
      width: ($('.fxwidget-controls').width + 140) + 'px'
    })
  })
  .on('blur', function (){
    $('#fxwidget-container').css({
      width: ($('#fxwidget-container').width() + 140) + 'px',
      'margin-right':  (Number($('#fxwidget-container').css('margin-right').replace(/px/gi, '')) - 140) + 'px'
    }); 
    $('.fxwidget-controls').css({
      width: ($('.fxwidget-controls').width - 140) + 'px'
    })
      
  });
  $('.icon-search').on('click', function () {
    $(this).prev('input,select,textarea,radio,checkbox').eq(0).focus();    
  });
}

function enable_select2Expand() {
$('.select2-input').focusin(function () {
    $(this).closest('.select2-container-multi').css({
        'min-height': '2.3125rem',
        height: 'auto',
        position: 'absolute'
      });
    });
$('.select2-input').focusout(function () {
    console.log('select2 input blurred');
      $(this).closest('.select2-container-multi').css({
        'height': '2.3125rem',
        position: 'relative'
      });
    });
}

function init_PreferencesWorkspaceRenameBehaviour(){
  var commonParentEl, editableElId, preVal, newVal, newEditableId;

  var editableToggle = function (e) {
    newVal = commonParentEl.find('.edit-box input').val().trim();
    $('#'+editableElId).text(newVal);
    $('#'+editableElId).closest('.tabs-content').siblings('ul.tabs').first()
      .find('li.active a').text(newVal);
    commonParentEl.find('.editable, .edit-box-hidden, .edit-box, .edit-box-buttons').toggle();
  }

$('.show-edit-box').on('click', function () {
  editableElId = $(this).attr('data-editable-for').trim(),
  commonParentEl = $('#'+editableElId).closest('li'),
  preVal = $('#'+editableElId).text().trim();
  commonParentEl.find('.edit-box input').val(preVal);
  commonParentEl.find('.editable, .edit-box-hidden, .edit-box, .edit-box-buttons').toggle();
  commonParentEl.find('.edit-box').focus();
});

$('.edit-box-buttons .action').on('click', editableToggle);
$('.edit-box input').on('blur', editableToggle);

}

function enable_adjustFocusAssociationBehaviour(){
    $('.side-nav li').bind(supportedEvents,function(){
        $('.side-nav li').removeClass('current');
        $(this).addClass('current');
    })
}

function enable_select2Behaviour(){
    //$('.select2').select2();
}

function makeFoundationReady() {
  $(document).foundation();
}


function enable_datePickerBehaviour(){
    datePickerOptions={ 
    rangeSelect: false, monthsToShow: 2, showTrigger: '#calImg'};
    $('input [type="date"]').datepick(datePickerOptions);
    $('.behaviour-date').datepick(datePickerOptions);
}

var tags = ["currency", "pair", "usdeur", "usdinr"];

function getRandomTag() {
    var num = tags.length + 10;
    while (num > tags.length) {
        num = getRandomNumber();
    }
    return tags[num];
}



function getRandomNumber() {
    var num = Math.floor(Math.random() * 10);
    return num;
}


function initCommandBar() {
    $('#commandBarText').select2({
        placeholder: "Enter Command Text...",
        //data:[{id:0,text:'eyd'},{id:1,text:'customer'},{id:2,text:'tenure'},{id:3,text:'principal'}],
        tags: tags,
        //dropdownCssClass: "bigdrop", // apply css that makes the dropdown taller
        tokenSeparators: [","],
        allowClear: true,
        multiple: true,
        //query:function(options){   return tags; },
        nextSearchTerm: function (selectedObject, currentSearchTerm) {
            return getRandomTag();
        }
    });
}


function enable_basicUserControls() {
    $('.action-show-user-options').bind(supportedEvents, function () {
        $('.user-dropdown').show('slide');
        closeViewOnClick("user-dropdown", 'action-show-user-options');
    });
}

function fixVerticalTab() {
  $('.ui-tabs-vertical li').removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
}

function closeViewOnClick(viewSelector, parentSelector) {
    $(document).bind(supportedEvents, function (e) {
        var parentClicked = $(e.target).filter(":has(." + parentSelector + ")");
        var viewClicked = $(e.target).filter(":has(." + viewSelector + ")");

        if (parentClicked || viewClicked) {
            // do nothing
            return;
        } else {
            $(viewSelector).find(".view-close-action-" + viewSelector).trigger('click');
            // this is necessary so that we dont overload the page with listerners.
            $(document).unbind(supportedEvents);
        }
    });
}

function enable_fxWidgetSearchBehaviour() {

    $('.has-side-menu').bind(supportedEvents, function () {
        $(this).siblings('.sub-menu').css({
            'margin-left': $(this).width(),
                'top': ($('.main').offset().top - $(this).closest('li').offset().top - 2) + 'px',
                'position': 'absolute',
                'margin-top': '0.063rem',
                'height': $('.main').height() + 'px',
                '-webkit-transition': 'left 300ms ease',
                '-moz-transition': 'left 300ms ease',
                '-ms-transition': 'left 300ms ease',
                '-o-transition': 'left 300ms ease',
                'transition': 'left 300ms ease',
                'z-index': 10
        }).slideToggle().find('input, select, checkbox, radio').first().focus();
    });
    $('.close-sub-menu body').bind(supportedEvents, function () {
        if ($('.sub-menu').is(":visible")) {
            $(this).closest('.sub-menu').slideToggle().closest('li');
        }
    }).toggleClass('hidden');
}

function enable_flipImageAction() {
    $('.action-flip-image').bind(supportedEvents, function () {
        $(this).toggleClass("flip-image", 200);
    })
}

function enableMenuSideBarToggleBehaviour() {
    $('.sidebar-toggler').bind(supportedEvents, function () {
        $('.left-panel-menu').slideToggle("slide", function () {
            $('.content-panel').toggleClass("margin-content-panel");
        });
    });
}

function prepareMenuCloseBehaviour(){
        $('.close-sub-menu-container').bind(supportedEvents,function(){
        $('.sub-menu').hide('slide',function(){
            $('.side-nav li').removeClass('current');
            $('.side-nav li:first').addClass('current');
        }).toggleClass('hidden');
    });
}

var effect = "slide";

function loadPreferences() {
    $('.active-content').hide(effect, "slow", function () {
        $('.preferences-container').show(effect, "slow").toggleClass('active-content');
    }).toggleClass("active-content");
    $('.fxd-horizontal-tabs').tabs();
    $('.fxd-vertical-tabs').tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( ".fxd-vertical-tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );;

}

function loadFxAdmin() {
    $('.active-content').hide(effect, "slow", function () {
        $('.fxadmin-container').show(effect, "slow").toggleClass('active-content');
    }).toggleClass("active-content");
    $('.fxd-horizontal-tabs').tabs();
    $('.fxd-vertical-tabs').tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( ".fxd-vertical-tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );;
}


function loadHome() {
    if(!$('.home-link').hasClass('current') || !$(".active-content").hasClass("widget-container")){
        $('.active-content').hide(effect, "slow", function () {
            $('.widget-container').show(effect, "slow").toggleClass("active-content");
        }).toggleClass("active-content");
    }
}

function loadFxAdmin() {
    $('.active-content').hide(effect, "slow", function () {
        $('.fxadmin-container').show(effect, "slow").toggleClass("active-content");
    }).toggleClass("active-content");
}

function loadEydPricer() {
    $('.active-content').hide(effect, "slow", function () {
        $('.eyd_pricer-container').show(effect, "slow").toggleClass("active-content");
    }).toggleClass("active-content");
}




function loadChartInfo() {
    $('#chartContainer').highcharts({
        chart: {
            type: 'area',
            height: '243'
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: null
            },
        },
        tooltip: {
            pointFormat: 'USD rate was <b>{point.y:,.0f}</b>'
        },

        legend: {
            enabled: false
        },
        series: [{
            name: 'USD',
            data: [
            /* 2009-01-01 */
            [1356998400000, 60],
            /* 2009-02-01 */
            [1359676800000, 61],
            /* 2009-03-01 */
            [1362096000000, 62],
            /* 2009-04-01 */
            [1364774400000, 61],
            /* 2009-05-01 */
            [1367366400000, 59],
            /* 2009-06-01 */
            [1370044800000, 59.5],
            /* 2009-07-01 */
            [1372636800000, 60],
            /* 2009-08-01 */
            [1375315200000, 61],
            /* 2009-09-01 */
            [1377993600000, 62],
            /* 2009-10-01 */
            ]
        }]
    });
}
