;dashboard.factory("dashboardSharedDataModel",function($rootScope){
	var obj={
		dataModel : [],
		showHeader : true,
		prefs:{},
		ccp:{},
		viewName : "My Dashboard",
                windowName: 'Window 1',
                showfxwidget: false,
		dataChanged:function(){
			$rootScope.$broadcast("dataChanged");
		}
	}

        function prepareFxWidgetsDataModel () {
          obj.dataModel.fxWidgets = [
            {'acronym': 'C', 'name': 'Charts' },
            {'acronym': 'CP', 'name': 'Currency Position' },
            {'acronym': 'EP', 'name': 'EYD Pricer' },
            {'acronym': 'EQ', 'name': 'EYD Quick Trade' },
            /*{'acronym': 'OB', 'name': 'Order Board' },
            {'acronym': 'PB', 'name': 'Position Blotter' },
            {'acronym': 'TB', 'name': 'Trade Blotter' },
            {'acronym': 'C', 'name': 'Charts' },
            {'acronym': 'CP', 'name': 'Currency Position' },
            {'acronym': 'EP', 'name': 'EYD Pricer' },
            {'acronym': 'EQ', 'name': 'EYD Quick Trade' },
            {'acronym': 'OB', 'name': 'Order Board' },
            {'acronym': 'PB', 'name': 'Position Blotter' },*/
            {'acronym': 'TB', 'name': 'Trade Blotter' }
          ];

        }

	function preparePreferencesDataModel(){
		console.log("[preparePreferencesDataModel]: called");
		obj.dataModel.prefs=[];
	}

        function prepareFxAdminDataModel() {
          console.log('prepareFxAdminDataModel called');
          obj.dataModel.fxadmin= {
            'roles': [
              {roleVal: '1', role : 'Buffet'},
              {roleVal: '2', role : 'EYD'},
              {roleVal: '3', role : 'TradeBlotter'},
              {roleVal: '4', role : 'General'}
            ],
            'user' : {
              'lastName': '',
              'firstName' : '',
              'role' : ''
            },
            'users' : [
            {lanId: 'U374829', 'lastName': 'Mathew', 'firstName': 'Henry', 'role': 'None'},
            {lanId: 'U389494', 'lastName': 'Thomas', 'firstName': 'Karl', 'role': 'Buffet, EYD'},
            {lanId: 'U392874', 'lastName': 'Peter', 'firstName': 'Kevin', 'role': 'None'},
            {lanId: 'U367474', 'lastName': 'Hob', 'firstName': 'Jack', 'role': 'None'},
            {lanId: 'U360954', 'lastName': 'Wilson', 'firstName': 'Paul', 'role': 'Buffet, EYD, Trade Blotter, Gerneral'},
            {lanId: 'U374829', 'lastName': 'Kim', 'firstName': 'Lucifer', 'role': 'None'},
            {lanId: 'U389494', 'lastName': 'Eddi', 'firstName': 'Peter', 'role': 'Buffet, EYD, Trade Blotter, Gerneral'}
            ],
            grid: {
              small: '12',
              medium: '6',
              large: '4',
              xlarge: '4',
              xxlargei: '4'
            },
            selectedUser: {
              name: 'Thomas Henry',
              img: 'img/user2.png',
              currentRoles: [
              {id: '1', role: 'EYD Pricer', code: 'EP'},
              {id: '2', role: 'Buffet', code: 'B'},
              {id: '3', role: 'Trade Blotter', code: 'TB'},
              {id: '4', role: 'Widget 1', code: 'W1'},
              {id: '5', role: 'Widget 2', code: 'W2'},
              {id: '6', role: 'Widget 3', code: 'W3'},
              {id: '7', role: 'Position Blotter', code: 'PB'},
              {id: '8', role: 'Currency Blotter', code: 'CB'}
              ],
              newRoles: [
                {id: '9', role: 'Reports', code: 'R'},
                {id: '10', role: 'General', code: 'G'},
                {id: '11', role: 'Charts', code: 'C'}
              ],
              newRole: {
                id: '',
                role: ''
              },
              unassignedRoles: [
                {id: '12', role: 'Spot Booking', code: 'SB'},
                {id: '13', role: 'Trade Booking', code: 'TB'},
              ]
            },
            columnDefs : [
              {field: 'lanId', displayName: 'Lan ID'},
              {field: 'lastName', displayName: 'Last Name'},
              {field: 'firstName', displayName: 'First Name'},
              {field: 'role', displayName: 'Role Privileges'}
            ],
            gridOptions : {
              showColumnMenu : true,
              showGroupPanel : true,
              enablePaging: true,
              pagingOptions: {
                pageSizes: [10, 25, 50, 100], 
                pageSize: 25,
                totalServerItems: 0,
                currentPage: 1
              },
              showFooter: false,
              rowHeight: '30',
              headerRowHeight: '30'
            },
            eydQuoteWidget: [
              {id: 'w1', name: 'Widget 1', isSelected: false},
              {id: 'w2', name: 'Widget 2', isSelected: false},
              {id: 'w3', name: 'Widget 3', isSelected: false},
              {id: 'w4', name: 'Widget 4', isSelected: true},
              {id: 'w5', name: 'Widget 5', isSelected: true},
              {id: 'w6', name: 'Widget 6', isSelected: true},
              {id: 'w7', name: 'Widget 7', isSelected: false},
              {id: 'w8', name: 'Widget 8', isSelected: false},
              {id: 'w9', name: 'Widget 9', isSelected: true},
              {id: 'w10', name: 'Widget 10', isSelected: true},
              {id: 'w11', name: 'Widget 11', isSelected: false}
            ],
            eydQuoteWidgetSearch: ''
          };
                  
        }

	function prepareCurrencyDataModel(){
		setInterval(function(){
			obj.dataModel.ccp=getCurrencies(["USDEUR","USDGBP","USDJPY","USDCAD","USDAUD"]);
			obj.dataChanged();
		},800);
	};
	function prepareTradeDataModel(){
		setInterval(function(){
			obj.dataModel.tradeBlotter=getBlotter(20);
			obj.dataChanged();
		},1200);
	};
// calling the method to do its business.
	prepareCurrencyDataModel();
	prepareTradeDataModel();
	preparePreferencesDataModel();
        prepareFxAdminDataModel();
        prepareFxWidgetsDataModel();
	return obj;
});


/* Currency monitor Stub */
function getCurrencies(ccyPairs){
	//console.log("[getCurrencies]: Called");
	var result=[];
	for(ccyPair in ccyPairs){
		var ccy=ccyPairs[ccyPair];
		var obj={
			"baseCurrency":ccy.substring(0,3),
			"counterCurrency":ccy.substring(3,6),
			"bid":Math.random().toFixed(4),
			"mid":Math.random().toFixed(4),
			"ask":Math.random().toFixed(4),
			"upDown":(Math.random()>0.2),
			"npUpDown":(Math.random()>0.2),
			"netPosition":100*(Math.random()/Math.random()).toFixed(2),
			"netPL":100*(Math.random()/Math.random()).toFixed(2),

		};
		result.push(angular.copy(obj));
	}
	return result;
}

var count=1;

function getBlotter(rowCount){
	//console.log("[getCurrencies]: Called");

var ccp=["USD/EUR","USD/INR","USD/GBP","USD/CAD","USD/AUD"]

	var result=[];
	for(var i=0;i<rowCount;i++){
		var obj={
			"id":count++,
			"Product":"FXSPOT",
			"ccp":ccp [i%5],
			"spotBook":"ECOM",
			"amount":100*(Math.random()/Math.random()),
			"ctrAmount":100*(Math.random()/Math.random()),
			"marketRate":(Math.random()),
			"customerAllInRate":100*(Math.random()/Math.random()),
			"ps":(Math.random()>0.2)?"P":"S",
			"br":Math.floor(10*Math.random()),
			"status":(Math.random()>0.2)?"AMEND":"SUCCESS"
		};
		result.push(angular.copy(obj));
	}
	return result;	
}

