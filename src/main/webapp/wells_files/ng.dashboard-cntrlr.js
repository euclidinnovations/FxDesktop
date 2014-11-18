var dashboard=angular.module("Dashboard",['ui.utils', 'ngGrid', 'ng-context-menu']);

dashboard.controller('AppController', ["$scope", function($scope) {
  $scope.openDialog = function (e) {
    e.preventDefault;
    var options = jQuery.parseJSON($(e.target).attr('data-options'));
    if(((options.id).match(/^\s*$/gm) == null)) {
      var dialogEl = jQuery("#" + options.id);
      var dOptions = dialogEl.attr('ui-options');
      dOptions = eval('[' + dOptions +']');
      dOptions[0].autoOpen = true;
      jQuery.fn.dialog.apply(dialogEl, dOptions);
    }
  };
  $scope.showContextMenu = function (path) {
    console.log(path);
  }
  if (!$scope.$$phase) {
    $scope.$apply();
  }
}]);

dashboard.controller('settingsCurrencyBlotter', ['$scope', function($scope){
  $scope.conditions = [{
                        'conditionVal': '1',
                        'currencyPair': 'EUR/USD',
                        'option': 'Buy',
                        'comparision': 'Greater Than 0.1',
                        'action': 'Prepare Booking'
                       },
                       {
                        'conditionVal': '2',
                        'currencyPair': 'JPY/USD',
                        'option': 'Buy',
                        'comparision': 'Between 0.1 & 0.2',
                        'action': 'QUOTE'
                       },
                       {
                        'conditionVal': '3',
                        'currencyPair': 'GBP/USD',
                        'option': 'Sell',
                        'comparision': 'Equals to 0.1',
                        'action': 'NOTIFY'
                       }
  
                       ];
  $scope.isEqual = function (variable, to) {
    return variable == to;
  };

  if (!$scope.$$phase) {
    $scope.$apply();
  }
    
}]);

dashboard.controller("HeaderController",["$scope",function($scope){
	$scope.commandText=[];
	$scope.userName="Sample User";
	// set to yesterday's date.
	$scope.lastLogin=new Date().getTime()-(24*60*60*60);

}]);

/*dashboard.controller("LeftMenuController",["$scope","dashboardSharedDataModel",function($scope,service){
	$scope.preparePreferences=function(){
		service.viewName="My Preferences";
		service.showHeader = true;
                service.windowName = false;
	}
	$scope.prepareFxAdmin=function(){
		service.viewName="FX Admin";
		service.showHeader = true;
                service.windowName = false;
	}
	$scope.prepareHome=function(){
		service.viewName="My Dashboard";		
                service.windowName = "Window 1";
		service.showHeader = true;
	}
	$scope.dataModel={};
	$scope.dataModel.prefs={};
	$scope.dataModel.prefs={
		preferedHeight:1500
	}
	$scope.dataModel.prefs=service.dataModel.prefs;
}]);*/


dashboard.controller("WidgetContainerController",["$scope","dashboardSharedDataModel",function($scope,service){
	$scope.dataModel=[];
	$scope.viewName=service.viewName ? "My Dashboard":"";
	$scope.showHeader=service.showHeader;
        $scope.windowName = service.windowName;
        $scope.showfxwidget = false;
	$scope.widgetSearchFilter="";
	$scope.sortAscending=true;
	$scope.class = service.class;
	$scope.workspaces = [
	      {name:'Workspace A', value:'1'},
	      {name:'Workspace B', value:'2'},
	      {name:'Workspace C', value:'3'},
	      {name:'Workspace D', value:'4'},
	      {name:'Workspace E', value:'5'}
	    ];
	$scope.currentWorkspace=$scope.workspaces[2];

	$scope.prepareEydPricer=function(){		
		$scope.viewName="EYD Pricer";
                $scope.windowName = false;
	}

	$scope.$on("dataChanged",function(){
		$scope.dataModel=service.dataModel;
		$scope.viewName=service.viewName;
		$scope.showHeader=service.showHeader;
                $scope.windowName = service.windowName;
		$scope.$apply();
	});
}]);


dashboard.controller("PreferencesController",["$scope","dashboardSharedDataModel",function($scope,service){
	$scope.prefs=service.dataModel.prefs;
	$scope.$on("dataChanged",function(){
		$scope.dataModel=service.dataModel;
		$scope.$apply();
	});
}]);

dashboard.controller("fxAdminController",["$scope","dashboardSharedDataModel",function($scope,service){
	$scope.fxadmin = service.dataModel.fxadmin;
	$scope.$on("dataChanged",function(){
		$scope.dataModel=service.dataModel;
		$scope.$apply();
	});
}]);

dashboard.controller("EydTradeController",["$scope","dashboardSharedDataModel",function($scope,service){

	$scope.principal=0;
	$scope.tenure="1m";


	$scope.prepareEydPricer=function(){
		console.log("prepare");
		service.viewName="EYD Pricer";
		service.showHeader=false;
                service.windowName = false;
		service.class="ep";
	}


	$scope.customers=[
		{shortName:"djhl", id:188001, "fullName":"Dan J Hill"},
		{shortName:"sjvr", id:188001, "fullName":"Steve J Vernon"},
		{shortName:"gdlu", id:188001, "fullName":"George D Lucas"},
		{shortName:"owka", id:188001, "fullName":"Obie Wan Kanobie"},
	];
	
	$scope.specialists=[
		{id:188001, fullName:"User 01"},
		{id:188001, fullName:"User 02"},
		{id:188001, fullName:"User 03"},
		{id:188001, fullName:"User 04"},
	];

	$scope.ccp=[
		{id:1, ccy:"USD/EUR"},
		{id:2, ccy:"USD/GBP"},
		{id:3, ccy:"USD/CAD"},
		{id:4, ccy:"USD/AUD"},
	];
	
	$scope.customer=$scope.customers[2];
	$scope.specialist=$scope.specialists[2];
	$scope.ccy=$scope.ccp[2];

	console.log("controller loaded.");
}])

dashboard.controller("ChartController",["$scope","dashboardSharedDataModel",function($scope,service){
	console.log("chart controller loaded");
	 $scope.labels= ['USD/EUR', 'USD/INR'];
      $scope.fxdChartData= [{
          label: 'USD/EUR',
          fillColor: 'rgba(220,220,220,0.2)',
          strokeColor: 'rgba(220,220,220,1)',
          pointColor: 'rgba(220,220,220,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        },{
          label: 'USD/INR',
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: [28, 48, 40, 19, 86, 27, 90]
        }];

    // Chart.js Options
    $scope.fxdChartOptions =  {
      responsive: true,
      scaleShowGridLines : true,
      scaleGridLineColor : "rgba(0,0,0,.05)",
      scaleGridLineWidth : 1,
      bezierCurve : true,
      bezierCurveTension : 0.4,
      pointDot : true,
      pointDotRadius : 4,
      pointDotStrokeWidth : 1,
      pointHitDetectionRadius : 20,
      datasetStroke : true,
      datasetStrokeWidth : 2,
      datasetFill : true,
      onAnimationProgress: function(){},
      onAnimationComplete: function(){},
//      legendTemplate : '<ul class="tc-chart-js-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
    };

}]);

dashboard.directive('droppable', function($compile) {
    return {
        restrict: 'A',
        link: function(scope,element,attrs){
            element.droppable({
            	tolerance: "fit",
    })
}
}
});

dashboard.directive('draggable', function($compile) {
    return {
        restrict: 'A',
        link: function(scope,element,attrs){
            element.draggable({
            	revert: function(item){
            		// check targets involved in this move
            		var col=$('.widget').overlaps(this);
            		var counter=0;
            		for(var k=0;k<col.targets.length-1;k++){
            			var elem=col.targets[k];
            			var next=col.targets[k+1];
            			if(elem!=next){
            				// if they are different targets, then we have collision
							counter++;
            			}
            		}
            		// if no collisions then we dont need to move.
            		return (counter > 0) ;
            	},
            	containment: '.widget-container',
            	scroll: true,
				grid: [ 20, 20 ], 
    });
}
}
});

dashboard.directive("currencyBlotter",function(){
	var dir={
		restrict:"E",
		templateUrl: 'template/140110.html',
		scope:{
			data:"=data"
		},
	};
	return dir;
});


dashboard.directive("menuPanel",function(){
	var dir={
		restrict:"E",
		templateUrl: 'template/110110.html',
		link:function(scope, element, attrs){
			enable_fxWidgetSearchBehaviour();
			prepareMenuCloseBehaviour();
			enable_adjustFocusAssociationBehaviour();
		}
	};
	return dir;
});



dashboard.directive("positionBlotter",function(){
	var dir={
		restrict:"E",
		templateUrl: 'template/140120.html',
		scope:{
			data:"=data"
		},
		};
	return dir;
});

dashboard.directive("tradeBlotter",function(){
	var dir={
		restrict:"E",
		templateUrl: 'template/140130.html',
		scope:{
			data:"=data"
		},
		};
	return dir;
});


dashboard.directive("preferencesView",function(){
	var dir={
		restrict:"E",
		templateUrl: 'template/210110.html',
		scope:{
			data:"=data"
		},
		link:function(scope,element,attrs){
                        makeFoundationReady();
			init_PreferencesWorkspaceRenameBehaviour();
			$(element).find(".select2").select2();
		}
		};
	return dir;
});

dashboard.directive("fxadminView",function($compile){
	var dir={
		restrict:"E",
		templateUrl: 'template/310110.html',
		scope:{
			data:"=data",
                        items: '=',
                        cols: '=',
                        selectedItems: '=',
                        customOptions: '='
		},
                //replace: true,
                transclude: false,
                controller: fixScope,
                link: redrawHeight
        };

          function fixScope ($scope, $element, $attrs) {
            var customOptions = $scope.customOptions;
            $scope.selectedItems = [];
            var fixedOptions = {
              columnDefs  : 'cols',
              data        : 'items'
            };

            var defaultOptions = {
              selectedItems: $scope.selectedItems,
              showSelectionCheckbox: false,
              showFooter: false,
              filterOptions: {
                filterText: '',
                useExternalFilter : false
              }
            };

            $scope.options = jQuery.extend({}, $scope.options, defaultOptions, fixedOptions);

            $scope.$watch('search', function(value) {
              $scope.options.filterOptions.filterText = value;
            });

            $scope.options = $attrs.$observe('custom-options', function(customOptions) {
                return angular.extend($scope.options, defaultOptions, fixedOptions, customOptions);
            });
          }

          function redrawHeight ($scope) {
            $scope.$watchCollection('options', function (options) {
              var isCustomOptionSet = false;
              if(!angular.isUndefined($scope.customOptions) && !isCustomOptionSet) {
                isCustomOptionSet = true;
                $scope.options = angular.extend ($scope.options, $scope.customOptions);
              var height = ($scope.options.rowHeight || 30) * ($scope.options.pagingOptions.pageSize || $scope.options.config.pagingOptions.pageSize)
              +
              ($scope.options.headerRowHeight || 30)
              +
              ($scope.options.footerRowHeight || 55);

            $('#'+$scope.options.gridId).css({
              'height': height+'px'
            });

              }
                  
            });
          }

          return dir;
});


dashboard.directive("quickEyd",function(){
	var dir={
		restrict:"E",
		templateUrl: 'template/140140.html',
		scope:{
			data:"=data"
		},
		link:function(scope,element,attrs){

			//enable_select2Behaviour();
			$(element).find(".select2").select2();

		}
		};
	return dir;
});

dashboard.directive("eydTradeView",function(){
	var dir={
		restrict:"E",
		templateUrl: 'template/150110.html',
		scope:{
			data:"=data"
		},
		link:function(scope,element,attrs){
    			$(element).find(".select2").select2();
			    enable_datePickerBehaviour();
			}
		};
	return dir;
});

dashboard.directive("charts",function(){
	var dir={
		restrict:"E",
		templateUrl: 'template/140150.html',
		link:function(scope,element,attrs){
			loadChartInfo();

		}
		};
	return dir;
});
