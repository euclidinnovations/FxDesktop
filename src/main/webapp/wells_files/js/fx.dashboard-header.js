Ext.require([
    'Ext.ux.form.field.BoxSelect'
    ])
Ext.onReady(function () {

    Ext.QuickTips.init();

    var tb = Ext.create('Ext.toolbar.Toolbar',{id:'tootlbarId', height:57});        
    tb.suspendLayouts();


    complogo = Ext.create('Ext.Component', {	
    				id:'webLogo',      
					html: '<a href="javascript:void(0)"><img src="wells_files/wells-fargo-logo.png"><span>FX DESKTOP</span></a>',        
    			});
    complogo.render('complogo');

    hlines = Ext.create('Ext.Button', {
			    //text: 'Click me',	
			    id: 'hLines',	
			    html: '<a href="#left-panel-menu" class="menu-link sidebar-toggler">&#9776;</a>',	    
			    enableToggle: true,
			    handler: function() {
			    	var element = Ext.get('sidebar-container');
			    	var dashboard = Ext.get('togglemargin');

			    	if(element.isVisible()){	// TRUE
			    		console.log(element.isVisible());
			    		dashboard.setStyle('margin-left','0rem');
			    	}
			    	else{						// FALSE
			    		console.log(element.isVisible());
			    		
			    		dashboard.setStyle('margin-left','6.25rem');
			    	}
					element.toggle();			    	
			    }
	});
    hlines.render('hlines');

    var store = Ext.create('Ext.data.ArrayStore', {
        fields: ['searchopt'],
        data : [['Search'],['EYD Pricer']],
        id:'searchItems',
    });

    combo = Ext.create('Ext.form.field.ComboBox', {
        id:'searchOptId',      
        hideLabel: true,    
        typeAhead: true,
        triggerAction: 'all',
        emptyText:'Search',
        selectOnFocus:true,
        store: store,
        queryMode: 'local',
        displayField: 'searchopt',
        valueField: 'searchopt',
        listeners: {
            beforequery: function (record) {
                record.query = new RegExp(record.query, 'i');
                record.forceAll = true;
            }
        }        
    });    
    combo.render('searchDrop');
    combo.select(combo.getStore().getAt(0));


    var baseExampleConfig = {
        
        labelWidth: 130,
        emptyText: 'Start typing...',
    };
    var addExampleSelect = function(config, renderTo) {
        var fieldCfg = Ext.applyIf(config, baseExampleConfig);
        var fieldCmp = Ext.create('Ext.ux.form.field.BoxSelect', Ext.applyIf({
            renderTo: renderTo
        }, fieldCfg));        
    }
    var searchTips = [ 'trade', 'buy', 'cell', ];
    var multiSearch = addExampleSelect({
        id:'searchBox',
        width: 401,
        growMin: 28,
        growMax: 120,
        labelWidth: 130,
        store: searchTips,
        queryMode: 'local',
        forceSelection: false,
        createNewOnEnter: true,
        createNewOnBlur: true,
        filterPickList: true
    }, 'multiSearch');
    
    profPic = Ext.create('Ext.Component', {	
    				id:'profilePic',      
					html: '<a href="javascript:void(0)" class="circular-view profile-pic-container"><img src="./wells_files/user.png"></a>',        
    			});
    profPic.render('profPic');

	userInfo = Ext.create('Ext.Component', {	
    				id:'usersInfo',      
					html: '<span class="username ng-binding" ng-bind="userName">Sample User</span><span class="last-login">Last Login: <label ng-bind="lastLogin | date:&#39;medium&#39;" class="ng-binding">Nov 4, 2014 10:26:23 AM</label></span>',        
    			});
    userInfo.render('userInfo');
    
 	dropInfo = Ext.create('Ext.Button', {
			    //text: 'Click me',	
			    id: 'dropInfoID',	
			    html: '<span class="icon-down"></span>',	
			    cls:'icon-down',    
			    border:0,			    
			    enableToggle: true,
			    handler: function() {
			    	var element = Ext.get('userDrop');
					element.toggle();					
			    }
	});
    dropInfo.render('dropInfo');


    var alrt_notify = Ext.get('alerts_notify');
    alrt_notify.on("click", function (){
			    var alerts_list = Ext.get('alerts_list');
			    alerts_list.toggle();
    })        

}); // On onReady