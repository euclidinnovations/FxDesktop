Ext.onReady(function () {
	var cmrwindow,ireportswindow, cur_blot_win,openbuffetwindow,opencmrwindow,openireportswindow,openbuffet,opencmr,openireports;
    Ext.require(['Ext.ux.form.field.BoxSelect',
				 'ParentApp.util.HttpStorageProvider'
					]);

    Ext.QuickTips.init();
	
	Ext.require([
	    'Ext.ux.form.field.BoxSelect',
	    'ParentApp.util.HttpStorageProvider'
	    ])
	Ext.QuickTips.init();
	
	var stateprovdata = Ext.create('ParentApp.util.HttpStorageProvider',{
		 userid: 'Parent',
		 url: "http://localhost:8040/fxdesktop/state"
	});
	Ext.state.Manager.setProvider(stateprovdata);  
	Ext.state.Manager.set('buffetwindow',"false");
	Ext.state.Manager.set('cmrwindow',"false");
	Ext.state.Manager.set('ireportswindow',"false");
	
// for browser window state
	var buffetstatus = Ext.state.Manager.get('buffetstatus');
	var cmrstatus = Ext.state.Manager.get('cmrstatus');
	var ireportsstatus = Ext.state.Manager.get('ireportsstatus');
	
	
	if(buffetstatus=="open"){
		var openbuffetwindow=Ext.state.Manager.get('buffetwindow');
		var buffetw = Ext.state.Manager.get('buffetwidth');
		var buffeth = Ext.state.Manager.get('buffetheight');
		
		var buffetx = Ext.state.Manager.get('buffetxpos');
		var buffety = Ext.state.Manager.get('buffetypos');
		
		
		if(openbuffetwindow!=true){
  		  openbuffetwindow = window.open('http://localhost:8041/buffet', '','toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
  		  openbuffetwindow.resizeTo(buffetw,buffeth);
  		  openbuffetwindow.moveTo(buffetx,buffety);
  		  Ext.state.Manager.set('buffetstatus',"true");
  	  	}  	
		openbuffetwindow.focus();
	}
	
	if(cmrstatus=="open"){
		var opencmrwindow=Ext.state.Manager.get('cmrwindow');
		var cmrw = Ext.state.Manager.get('cmrwidth');
		var cmrh = Ext.state.Manager.get('cmrheight');
		
		var cmrx = Ext.state.Manager.get('cmrxpos');
		var cmry = Ext.state.Manager.get('cmrypos');
		
		
		if(opencmrwindow!=true){
  		  opencmrwindow = window.open('http://localhost:8042/cmr', '','toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
  		  opencmrwindow.resizeTo(cmrw,cmrh);
  		  opencmrwindow.moveTo(cmrx,cmry);
  		  Ext.state.Manager.set('cmrstatus',"true");
  	  	}  
		opencmrwindow.focus();
	}
	
	if(ireportsstatus=="open"){
		var openireportswindow=Ext.state.Manager.get('ireportswindow');
		var ireportsw = Ext.state.Manager.get('ireportswidth');
		var ireportsh = Ext.state.Manager.get('ireportsheight');
		
		var ireportsx = Ext.state.Manager.get('ireportsxpos');
		var ireportsy = Ext.state.Manager.get('ireportsypos');
		
		
		if(openireportswindow!=true){
  		  openireportswindow = window.open('http://localhost:8043/ireports', '','toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
  		  openireportswindow.resizeTo(ireportsw,ireportsh);
  		  openireportswindow.moveTo(ireportsx,ireportsy);
  		  Ext.state.Manager.set('ireportsstatus',"true");
  	  	}  
		openireportswindow.focus();
	}
	
	opencmr = Ext.get('fx_cmr');
 	opencmr.on("click",function(){
 		var opencmrwindow = Ext.state.Manager.get('cmrwindow');
 		if(opencmrwindow!=true){ 			
 			opencmrwindow=window.open('http://localhost:8042/cmr', '','width=800, height=600' ,'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
 			Ext.state.Manager.set('cmrwindow',"true");
 		}
 		opencmrwindow.focus();
 		
 	});
 	
 	openireports = Ext.get('fx_ireports');
	openireports.on("click",function(){
		var openireportswindow = Ext.state.Manager.get('ireportswindow');
		if(openireportswindow!=true){
			openireportswindow = window.open('http://localhost:8043/ireports', '','width=800, height=600' ,'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
			Ext.state.Manager.set('ireportswindow',"true");
		}
		ireportswindow.focus();
	});	
	
	  openbuffet = Ext.get('fx_buffet');
	  openbuffet.on("click",function(){
		  var openbuffetwindow=Ext.state.Manager.get('buffetwindow');
			if(openbuffetwindow!=true){
			  openbuffetwindow = window.open('http://localhost:8041/buffet', '','width=800, height=600', 'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
			  Ext.state.Manager.set('buffetwindow',"true");
		  	}
		  	openbuffetwindow.focus();
	  });
	
/*END WORKSPACE SAVIND CODE*/
	
	

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

                    if(element.isVisible()){    // TRUE
                        //console.log(element.isVisible());
                        dashboard.setStyle('margin-left','0rem');
                    }
                    else{                       // FALSE
                        //console.log(element.isVisible());
                        
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





var active      =   1;
    var itemData    =   [{
            title: 'P0',
            listeners: {
                beforeactivate: function(){
                    return false;
                }
            }
        },{   
            text:'first',    
            items: [{html: '<div class="frame" id="fxwidgets" style="overflow: hidden;"><ul class="slidee" style="transform: translateZ(0px);" ><li id="currency_blotter_on_off"><div class="content"><div class="table-cell"><span class="acronym bold ng-binding">CB</span></div><div class="table-cell"><label class="ng-binding">Currency Blotter</label></div></div></li><li id="position_blotter_on_off"><div class="content"><div class="table-cell"><span class="acronym bold ng-binding">PB</span></div><div class="table-cell"><label class="ng-binding">Position Blotter</label></div></div></li><li id="trade_blotter_on_off"><div class="content"><div class="table-cell"><span class="acronym bold ng-binding">TB</span></div><div class="table-cell"><label class="ng-binding">Trade Blotter</label></div></div></li><li id="eyd_on_off"><div class="content"><div class="table-cell"><span class="acronym bold ng-binding">EYD</span></div><div class="table-cell"><label class="ng-binding">Quick EYD Trade</label></div></div></li></ul></div>'}] 
        },{   
            text:'second',    
            items: [{html: '<div class="frame" id="fxwidgets" style="overflow: hidden;"><ul class="slidee" style="transform: translateZ(0px);" ><li><div class="content"><div class="table-cell"><span class="acronym bold ng-binding">EQ</span></div><div class="table-cell"><label class="ng-binding">Trade Blotter</label></div></div></li><li><div class="content"><div class="table-cell"><span class="acronym bold ng-binding">EP</span></div><div class="table-cell"><label class="ng-binding">Trade Blotter</label></div></div></li><li><div class="content"><div class="table-cell"><span class="acronym bold ng-binding">CP</span></div><div class="table-cell"><label class="ng-binding">Trade Blotter</label></div></div></li><li><div class="content"><div class="table-cell"><span class="acronym bold ng-binding">C</span></div><div class="table-cell"><label class="ng-binding">Trade Blotter</label></div></div></li><li><div class="content"><div class="table-cell"><span class="acronym bold ng-binding">TB</span></div><div class="table-cell"><label class="ng-binding">Trade Blotter</label></div></div></li></ul></div>'}] 
        },{
            title: 'P10',
            listeners: {
                beforeactivate: function(){
                    return false;
                }
            }
        }];
    var nextBTN =   Ext.create('Ext.button.Button', {
                        //text: 'Next',
                        id : 'nextID',                        
                        handler: function(fn){
                            var layout = widgets.getLayout();
                            
                            //console.log(active);
                            if(active   ==   itemCount) {
                                fn.setDisabled(true);
                                prevBTN.setDisabled(false);
                            }
                            else if(active   >=   1)
                                prevBTN.setDisabled(false);
                            ++active;
                            layout.setActiveItem(active);
                            active = widgets.items.indexOf(layout.getActiveItem());
                        }
                    });
    var prevBTN  =  Ext.create('Ext.button.Button', {
                        //text: 'Prev',
                        id : 'prevID',
                        align : 'right',
                        disabled : true,
                        handler: function(fn){        
                                   
                            var layout      =   widgets.getLayout();
                            
                            //console.log(active);
                            if(active   <=   2) {
                                fn.setDisabled(true);
                                nextBTN.setDisabled(false);
                            }
                            
                            --active;
                            layout.setActiveItem(active);
                            active = widgets.items.indexOf(layout.getActiveItem());
                        }
                    });

    var widgets = Ext.create('Ext.panel.Panel', {
        width:850,
        height:71,
        layout: 'card',
        //tbar: [nextBTN,prevBTN],
        items: itemData,
        id:'fxwidget',
    });

    var itemCount   =   widgets.items.length - 3;
    widgets.getLayout().setActiveItem(1);
    widgets.render('fxdeskWidgets');
    prevBTN.render('prevWidgets');
    nextBTN.render('nextWidgets');


widgetOnOff = Ext.create('Ext.Button', {
                //text: 'Click me', 
                id: 'widgetOnOff',   
                html: '<a class="pop-button has-icon" href="javascript:void(0)" ng-click="showfxwidget=!showfxwidget" ng-class="{&#39;on&#39;: showfxwidget}"><span class="icon-fxwidget-small"></span>FX Widgets<span class="icon-doublearrow"></span></a>',       
                enableToggle: true,
                handler: function() {
                    var element = Ext.get('fxwidget-area');                    

                    if(element.isVisible()){    // TRUE
                        //console.log(element.isVisible());
                        element.setStyle('display','none');
                    }
                    else{                       // FALSE
                        //console.log(element.isVisible());                                                
                        element.setStyle('display','block');
                    }                

                    
                    var cur_blot_win = Ext.get('cur_blot_win');
                },
                width:120,
                height:50,

    });
    widgetOnOff.render('widgetOnOff');

    var cb_on_off = Ext.get('currency_blotter_on_off');
    cb_on_off.on("click", function (){
                var this_cb = Ext.get('currency_blotter');
                this_cb.toggle();
    });
    
    var tb_on_off = Ext.get('trade_blotter_on_off');
    tb_on_off.on("click", function (){
                var this_tb = Ext.get('trade_blotter');
                this_tb.toggle();
    });

    var pb_on_off = Ext.get('position_blotter_on_off');
    pb_on_off.on("click", function (){
                var this_pb = Ext.get('position_blotter');
                this_pb.toggle();
    });

    var eyd_on_off = Ext.get('eyd_on_off');
    eyd_on_off.on("click", function (){
                var this_eyd = Ext.get('qeydtrade');
                //console.log('i am pressed');
                this_eyd.toggle();
    });

//START THREE TABS  ----------------------------------------------------------------------
    // second tabs built from JS
    var fxAdminTabs = Ext.createWidget('tabpanel', {        
        activeTab: 0,
        id:'fxAdminTabsID',
        height: 850,
        plain: true,
        defaults :{
            autoScroll: true,
            bodyPadding: 10,
        },
        cls:'MainPanel',     
        items: [{
                title: '<span class="add_user_tab">Add User</span>',
                id:'adduserID',
                padding:25,
                html: '<div id="search_manage"><div id="search_users" class="title"><h3 class="uppercase workspace-name">Add Users</h3><div id="add_user"></div><div class="usertitle addeduserlist"><h4>User List</h4><div id="added_users"></div></div></div><div id="manage_roles" class="title"><h3>MANAGE ROLES</h3><div id="manageUserRoleWrap"></div><div id="privilegesWrap"></div><div id="curprivilegesWrap"></div></div></div>',                
                /*loader: {
                    url: 'fxAdminTabsSearchUser.html',
                    contentType: 'html',
                    loadMask: true,      
                    autoLoad: true,              
                },*/
                /*listeners: {
                    activate: function(tab) {
                        tab.loader.load();
                    }
                }*/
            },{
                title: 'Manage User Privileges',
                /*loader: {
                    url: 'ajax2.htm',
                    contentType: 'html',
                    autoLoad: true,
                    params: 'foo=123&bar=abc'
                }*/
            },{
                title: 'Workspaces Templates',
                /*listeners: {
                    activate: function(tab){
                        alert(tab.title + ' was activated.');
                    }
                },
                html: "I am tab 4's content. I also have an event listener attached."*/
            }
        ]
    });
    fxAdminTabs.render('fxAdminTabs');
//END THREE TABS  ----------------------------------------------------------------------
// for messaging
  
Ext.ns('MessageBus');
 


// message bus simulation
MessageBus.Bus = new Ext.util.Observable();
MessageBus.Bus.addEvents('message');

// panel that sends and receives bus messages
MessageBus.Panel = Ext.extend(Ext.Panel, {
         autoScroll:true
        ,bodyStyle:'font-size:12px'
        ,initComponent:function() {
                var config = {
                        bbar:{
                                 itemId:'bbar'
                                ,items:[{
                                         xtype:'button'
                                        ,text:'Clear'
                                        ,scope:this
                                        ,handler:function() {
                                                this.body.update('');
                                        }
                                }
                                ,'->'
                                ,{
                                         xtype:'label'
                                        ,text:'Message: '
                                },{
                                    xtype:'button'
	                                ,text:'Send'
	                                ,scope:this
	                                ,handler:function() {
	                                        var textField = this.getBottomToolbar().getComponent('msgtext');
	                                        MessageBus.Bus.fireEvent('message', textField.getValue());
	                                }
                                },
                                {
                                         xtype:'textfield'      
                                        ,itemId:'msgtext'

                                },{
                                         xtype:'button'
                                        ,text:'Send'
                                        ,scope:this
                                        ,handler:function() {
                                                var textField = this.getBottomToolbar().getComponent('msgtext');
                                                MessageBus.Bus.fireEvent('message', textField.getValue());
                                        }
                                }]
                        }
                }; // eo config
                Ext.apply(this, Ext.apply(this.initialConfig, config));
                MessageBus.Panel.superclass.initComponent.apply(this, arguments);
        }
        ,onRender:function() {
        	MessageBus.Panel.superclass.onRender.apply(this, arguments);
        	MessageBus.Bus.on('message', this.onMessage, this);
        }
        ,onMessage:function(message) {
                this.body.createChild({html:message});
        }

}); // eo class Example.Panel


        var c1 = new MessageBus.Panel({
                 title:'fxdesktop Messages'
                ,renderTo:'fx-messages'
                ,id:'c1'
                ,width:450
                ,height:150
        });

       


 
// eof
//    
//    Ext.create('Ext.panel.Panel', {
//    	width: 450,
//        height: 200,
//        defaults: {
//            
//            bodyStyle: 'padding:15px'
//        },
//        layout: {
//            
//            type: 'accordion',
//            titleCollapse: false,
//            animate: true,
//            activeOnTop: true
//        },
//        items: [{
//            title: 'Incoming Messages',
//            html: '<div id="tradeackMessage" style="color: #0440A4;"></div><div id="tradeMessage" style="color: #0440A4;"></div>'
//        }, {
//            title: 'Send Message',
//            
//        }],
//        renderTo: 'fx-messages'
//    });

//end of messaging
//START MANGE USER  --------------------------------------------------------------------------
    var manageUserRole    =   Ext.create('Ext.form.Panel', {
        bodyPadding: 5,
        height:100,
        id:'manageUserRoleID',
        defaultType: 'textfield',
        items: [{
                xtype : 'image',
                src : 'img/user2.png',
                mode : 'image',
                id : 'mangeUserImage',
            },{
                xtype: 'label',
                text: '',
                id: 'manageUserName',
            },{
                fieldLabel: 'Assign Name',
                //emptyText : 'Name',
                name: 'asign_name',
                allowBlank: false
            },
            
        ],
    });
    manageUserRole.render('manageUserRoleWrap');
//END MANGE USER  --------------------------------------------------------------------------

//START - SETTING PREVILEDGES USER  --------------------------------------------------------
    var deselectSelected = function () {
        Ext.select("div.meselected").removeCls('meselected');
    }
    var getTheFullString = function(str1,str2) {
        return '<div class="content"><span class="acronym bold">'+str1+'</span><label>'+str2+'</label></div>';
    }    
    var countTheItems = function(cntrID) {
                return Ext.getCmp(cntrID).items.getCount();
    }    
    //New previledges container
    var newPrvlCntr =
        Ext.create('Ext.container.Container', 
            {
                id:'prvlButtonsID',
                items :[
                      {
                        xtype: 'button',
                        text: '<div class="content"><span class="acronym bold">R</span><label>Reports</label></div>',
                        id: 'r_reports_userID',
                        overCls:'overme',
                        handler: function(button) {
                                    deselectSelected();
                                    button.addCls('meselected');
                                 }
                      },{
                        xtype: 'button',
                        text: '<div class="content"><span class="acronym bold">G</span><label>General</label></div>',
                        id: 'g_general_userID',
                        overCls:'overme',
                        handler: function(button) {
                                    deselectSelected();
                                    button.addCls('meselected');
                                 }
                      },{
                        xtype: 'button',
                        text: '<div class="content"><span class="acronym bold">C</span><label>Charts</label></div>',
                        id: 'c_charts_userID',
                        value: 'C/Charts',
                        overCls:'overme',
                        handler: function(button) {
                                    deselectSelected();
                                    button.addCls('meselected');
                                 }
                      },
                    ],
            });            
    //count(newPrvlCntr);    
    var newPrvlCnt      =   countTheItems('prvlButtonsID');
    var newPrevledges    =   Ext.create('Ext.form.Panel', {
        bodyPadding: 5,
        width:540,    
        id:'newPrevledgesID',
        defaultType: 'button',
        items: 
        [
            {
                xtype: 'label',
                html: 'NEW PRIVILEGES (<span id="newPrvlCntID">'+newPrvlCnt+'</span>)',
                cls:'prvl_label',
                id: 'prvl_labelID',
            },
                newPrvlCntr,
        ],
        buttons: [{
                    text: 'CANCEL',
                    id:'prvl_can',
                    cls:'uppercase grey bold',
                    //style:'border: 1px solid #b42525;background: #f34d4d;color:#FFF; font-size:14px;',
                    handler: function() {
                        //this.up('form').getForm().reset();
                        //this.up('window').hide();
                        deselectSelected();
                    }
                },{
                    text: 'SAVE',
                    id:'prvl_save',   
                    cls:'uppercase white bold',                 
                    //style:'border: 1px solid #b42525;background: #f34d4d;color:#FFF; font-size:14px;',
                    handler: function() {
                        //this.up('form').getForm().reset();
                        //this.up('window').hide();
                        /*var getButton   =   Ext.get('prvl_reports');
                        newPrvlCntr.remove('prvl_reports',true);
                        curPrvlCntr.insert(1,getButton);
                        curPrvlCntr.doLayout();*/
                        //var DomEl = Ext.getCmp('.meselected').getEl().dom.id;    
                        //console.log(DomEl);
                        var parent = Ext.get("newPrevledgesID");
                        var elems  = parent.select(".meselected").elements;
                        //console.log(elems);
                        var addel  = elems;
                        var elID   = elems[0].id;
                        //var str    = 'hello-world';    
                        var group = elID.split('_');
                        //console.log(group);
                        var smallStr =   group[0];
                        var longStr =   group[1];
                        //Ext.get(elID).getValue();
                        var fullString  =   getTheFullString(smallStr,longStr);
                        //console.log(elID);
                        //console.log(fullString);
                        //var addel  = Ext.get(elID);
                        newPrvlCntr.remove(elID,true);
                        //curPrvlCntr.add(addel);
                        curPrvlCntr.add({
                            xtype: 'button',
                            text: fullString,                    
                        });

                        var curPrvlCntNow = countTheItems('curButtonsID');
                        Ext.get('curPrvlCntID').update(curPrvlCntNow);                            
                        curPrvlCntr.doLayout();

                        var newPrvlCntNow = countTheItems('prvlButtonsID');
                        Ext.get('newPrvlCntID').update(newPrvlCntNow);                            
                        newPrvlCntr.doLayout();
                        //var addelems = elems;
                        //var id = Ext.get(".meselected");
                        //Ext.element.getAttributeNS(namespace, attribute)
                        //console.log();
                        /*newPrvlCntr.remove('button-1067',true);
                        newPrvlCntr.doLayout();
                        curPrvlCntr.add(addelems);
                        curPrvlCntr.doLayout();*/
                        
                    }
                },],
    });
    newPrevledges.render('privilegesWrap');
//END   - SETTING PREVILEDGES USER  --------------------------------------------------------


//****************************************************************************************************


//START - CURRENT PREVILEDGES USER  --------------------------------------------------------
//This is the container for the current privledges
var curPrvlCntr =   Ext.create('Ext.container.Container', {
                        id:'curButtonsID',
                        items :[
                          {
                            xtype: 'button',
                            text: '<div class="content"><span class="acronym bold">EP</span><label>EYD Pricer</label></div>',                    
                          },{
                            xtype: 'button',
                            text: '<div class="content"><span class="acronym bold">B</span><label>Buffet</label></div>',                    
                          },{
                            xtype: 'button',
                            text: '<div class="content"><span class="acronym bold">TB</span><label>Trade Blotter</label></div>',                    
                          },
                          {
                            xtype: 'button',
                            text: '<div class="content"><span class="acronym bold">W1</span><label>Widget 1</label></div>',                    
                          },{
                            xtype: 'button',
                            text: '<div class="content"><span class="acronym bold">W2</span><label>Widget 2</label></div>',                    
                          },{
                            xtype: 'button',
                            text: '<div class="content"><span class="acronym bold">W3</span><label>Widget 3</label></div>',                    
                          },
                          {
                            xtype: 'button',
                            text: '<div class="content"><span class="acronym bold">PB</span><label>Position<br />Blotter</label></div>',                    
                          },{
                            xtype: 'button',
                            text: '<div class="content"><span class="acronym bold">CB</span><label>Currency<br />Blotter</label></div>',                    
                          }],
                      });
var curPrvlCnt      = countTheItems('curButtonsID');
var curPrevledges    =   Ext.create('Ext.form.Panel', {
        bodyPadding: 5,       
        width:540,   
        id:'curPrevledgesID',
        defaultType: 'button',
        items: 
        [
            {
                xtype: 'label',
                html: 'CURRENT PRIVILEGES (<span id="curPrvlCntID">'+curPrvlCnt+'</span>)',
                cls:'cur_label',
                id: 'cur_labelID',
            },curPrvlCntr,

        ]
    });
    curPrevledges.render('curprivilegesWrap');
//END   - CURRENT PREVILEDGES USER  --------------------------------------------------------


    /*Create store with appropriate data, it is just a variable (Array)*/
    var addUserData = [        
    {
        Utype: "Admin",
        Uname: "Jacob",
        Uemail : "adminjacob@gmail.com",        
    },{
        Utype: "Trader",
        Uname: "Simmy",
        Uemail : "simmyjhones@gmail.com",        
    },];
        
    /*Create a model for the fields*/
    Ext.define('AddUsersModel', {    
        extend: 'Ext.data.Model',
        fields: ['Utype', 'Uname', 'Uemail']
    });
    
    /*Add prev store into new store with new model created - It will set data alongside fields*/
    var addUserStore = Ext.create('Ext.data.Store', {
                    data : addUserData,
                    model : 'AddUsersModel'  
        });
    
    /*Create a plugin which can edit the cell - by this we can have the ability to add row*/
    //var cellEditPlugin = Ext.create('Ext.grid.plugin.CellEditing', {});
    
    /*This is our Grid + Panel*/    
    var added_users = Ext.create('Ext.grid.Panel', {        
        id:'addUsersID',        
        stripeRows:true,
        store: addUserStore,        
        border:0,
        width:545,
        columns: 
        [   {
                text : '<span class="cb_head">Type</span>',
                dataIndex: 'Utype',     
                //editor : 'textfield',
                flex : 1,            
                //renderer : getCCYpairVal,        
            },{
                text: '<span class="cb_head">Name</span>',
                dataIndex: 'Uname',
                //editor : 'textfield',                
                flex : 1,     
            },{
                text: '<span class="cb_head">Email</span>',
                dataIndex: 'Uemail',
                flex : 1,                   
                //editor : 'textfield',                
                //renderer:changeColor,           
            }
        ],
        //plugins : [ cellEditPlugin ],
        listeners:{
            resize : function(){
                        var properties =this.getState();
                        //console.log(JSON.stringify(properties));
                        return properties;
                     },
                     
            afterrender: function(panel){
                        //panel.setPosition(550,-450);
                    },  
            itemclick : function(grid){
                            var row = grid.getSelectionModel().getSelection()[0];
                            
                            Ext.getCmp('manageUserName').setText(row.get('Uname'));
                              
            }                      
        },
    });    
    added_users.render('added_users');
// USER LIST END

// USER FORM STARTED
    var empType = Ext.create('Ext.data.ArrayStore', {
        fields: ['searchopt'],
        data : [['Admin'],['Trader']],
        id:'CUSTOMERitems',
    });
    var add_user    =   Ext.create('Ext.form.Panel', {
        //title: 'Simple Form',

        bodyPadding: 5,
        id:'addUserID',
        // The form will submit an AJAX request to this URL when submitted
        //url: 'save-form.php',

        // The fields
        defaultType: 'textfield',
        items: [{
                xtype: 'combobox',
                fieldLabel: 'Employee Type',
                emptyText : 'Select type',
                id:'emptype',                
                name: 'type',
                allowBlank: false,
                typeAhead: true,
                triggerAction: 'all',
                selectOnFocus:true,
                store: empType,
                queryMode: 'local',
                displayField: 'searchopt',
                valueField: 'searchopt',
                listeners: {
                    beforequery: function (record) {
                        record.query = new RegExp(record.query, 'i');
                        record.forceAll = true;
                    }
                }            
            },{
                fieldLabel: 'Name',
                emptyText : 'Name',
                name: 'name',
                allowBlank: false,
                id:'usernameID',
            },{
                fieldLabel: 'Email',
                name: 'email',
                emptyText : 'Email',
                allowBlank: false,
                width:170,
                vtype: 'email',
                id:'useremailID',
            },{               
                fieldLabel: 'City',
                emptyText : 'City',
                name: 'city',
                allowBlank: false,
                id:'usercityID',
            },{            
                fieldLabel: 'Zip',
                emptyText : 'Zip',
                name: 'zip',
                allowBlank: false,
                id:'userzipID',
                },
        ],

        // Reset and Submit buttons
        buttons: [/*{
            text: 'Reset',
            handler: function() {
                this.up('form').getForm().reset();
            }
        },*/ {
            text: 'Add',
            cls:'greyButton grey bold uppercase fontsize11',
            //formBind: true,
            //only enabled once the form is valid
            //disabled: true,
            handler: function(form,grid,store) {
                
                //ds = this.grid.dataSource;
                //console.log();
                //console.log(addUserStore.getPageSize());
                //getTotalCount
                //getData()
                //var storeCount  =   addUsers.getCount();
                //form.getForm().loadRecord(store.getAt(0));
                //c

                var form = this.up('form').getForm();
                if (form.isValid()) {
                    //console.log('in');
                    //console.log(addUserStore);
                    //console.log(form);
                    //fields: ['Utype', 'Uname', 'Uemail']
                    var name = form.findField("name").getValue();
                    var email = form.findField("email").getValue();
                    var type = form.findField("type").getValue();

                    //console.log(email);

                    var rec     =   [{Uname:name, Uemail:email, Utype:type}];
                    //console.log(rec);
                    addUserStore.add(rec);  
                    /*form.submit({
                        success: function(form, action) {
                            Ext.Msg.alert('Success', action.result.msg);
                        },
                        failure: function(form, action) {
                            Ext.Msg.alert('Failed', action.result.msg);
                        }
                    });*/
                }
            }
        }],
        //renderTo: Ext.getBody()
    });
    add_user.render('add_user');
//END MANGE USER TAB --------------------------------------------------------------------------

    function curchangeColor(value, metadata, record) {
        var ask     =   record.get('ask');
        if(ask >= 1.3)
            return "<div class='updownimg'><img src='images/arrow_up_double.png' align='center' /></div>";    
        else
            return "<div class='updownimg'><img src='images/arrow_down.png' align='center' /></div>";    
    }

    /*Create store with appropriate data, it is just a variable (Array)*/
    var curStore = [        
    {
        ccypair: "EUR/USD",
        bid: "1.2535",        
        ask : "1.2537",
        id : "curstore1",
    }, {
        ccypair: "GBP/USD",
        bid: "1.2565",
        ask : "1.2569",
        id : "curstore2",
    }, {
        ccypair: "NZD/USD",
        bid: "1.5254",
        ask : "1.5249",
        id : "curstore3",
    }, {
        ccypair: "USD/YPD",
        bid: "1.3615",
        ask : "1.3618",
        id : "curstore4",
    }, {
        ccypair: "INR/USD",
        bid: "1.2678",
        ask : "1.2566",
        id : "curstore5",
    }, {
        ccypair: "EUR/NZD",
        bid: "1.4524",
        ask : "1.4522",
        id : "curstore6",
    }];
        
    /*Create a model for the fields*/
    Ext.define('CurrencyBlotter', {
        height : 40,
        extend: 'Ext.data.Model',
        fields: ['ccypair', 'bid', 'ask', 'market_direction' ]
    });
    
    /*Add prev store into new store with new model created - It will set data alongside fields*/
    var curStoreData = Ext.create('Ext.data.Store', {
                    data : curStore,
                    model : 'CurrencyBlotter'  
        });
      
    /*Create a plugin which can edit the cell - by this we can have the ability to add row*/
    var cellEditPlugin = Ext.create('Ext.grid.plugin.CellEditing', {});
    
/*START Window option Menu*/
    var Ctb = Ext.create('Ext.toolbar.Toolbar',{id:'CBoptionsMenuID',width:35,height:35});
    Ctb.add({          
    id:'CBoptionsID',  
    cls:'optionsCLS',
    iconCls: 'icon-settings',
    plain:true,
    menu: {
        xtype: 'menu',
        plain: true,
        items: [{
                text: 'Minimize',  
                handler: function(){                            
                    cur_blot_win.setHeight(57);
                    cur_blot_win.setWidth(500);
                    Ext.get('addBlotter').hide();
                    Ext.get('removeBlotter').hide();
                    //cur_blot_win.collapse();
                    //cur_blot_win.minimize();                            
                }                                                                  
            },{
                text: 'Maximize',
                handler: function(){
                    cur_blot_win.maximize(); 
                    Ext.get('addBlotter').show();
                    Ext.get('removeBlotter').show();                                                                               
                    //cur_blot_win.setHeight(500);
                    //cur_blot_win.setWidth(1100);
                } 
            },{
                text: 'Default',
                handler: function(){
                    cur_blot_win.restore();
                    cur_blot_win.setHeight(458);
                    cur_blot_win.setWidth(500);
                    Ext.get('addBlotter').show();
                    Ext.get('removeBlotter').show();    
                    //cur_blot_win.setX(110);
                    //cur_blot_win.setY(225);
                } 
            },{
                text: 'Close',
                handler: function(){
                    cur_blot_win.hide();
                } 
            }]
    }
});
/*END Window option Menu*/
    	/*This is our Grid + Panel*/    
    var cur_blot = Ext.create('Ext.grid.Panel', {
        //title: '<span class="cb">Currency Blotter (G - 10)</span>',   
        id:'CurrencyBlotter',
        store: curStoreData,
        border:0,
        proxy: {
            type: 'localstorage',
            id  : 'twitter-Searches'
        },
        columns: 
        [   {
                text : '<span class="cb_head">CCY Pair</span>',
                dataIndex: 'ccypair',     
                editor : 'textfield',            
                flex:1,    
            },{
                text: '<span class="cb_head">Bid</span>',
                dataIndex: 'bid',
                editor : 'textfield',        
                flex:1,                                
            },{
                text: '<span class="cb_head">Ask</span>',
                dataIndex: 'ask',
                editor : 'textfield',    
                flex:1,     
            },{
                text: '<span class="cb_head">Market Direction</span>',
                dataIndex: 'market_direction',                
                renderer : curchangeColor,
                flex:1,
            }
        ],
        plugins : [ cellEditPlugin ],
        tbar: [            
          {
            text: 'Add New',
            cls:'addnew',
            handler : function() {
                var r = Ext.create('CurrencyBlotter', {
                    ccypair: '/',
                    bid: 'add bid',
                    ask: 'add ask',
                });

            curStoreData.insert(0, r);
            cellEditPlugin.startEdit(0, 0);
            }
          },{
            text: 'Remove ',
            cls:'removethis',
            handler : function() {
               var sm       =   cur_blot.getSelectionModel();
               var rec      =   sm.getSelection()[0];               
               curStoreData.remove(rec);
            }
          }, Ctb,        
        ],
        listeners:{
           
            afterrender : function( grid, store, record ){                                
                    setInterval(function(grid, store){
                        //Count the store data
                        var storeCount  =   curStoreData.getCount()-1;
                       
                        //Generate random number and delete that row from existing array
                        var removeStoreAt  =   Math.floor((Math.random() * storeCount) + 1);
                        //console.log('removed at '+removeStoreAt);
                        curStoreData.removeAt(removeStoreAt);
                        
                        //Create new set of ccypairArray
                        var ccypairArray    =   ['USD/INR','INR/USD','JYP/NZD','NZD/INR',
                                                 'EUR/USD','AUS/USD','YPD/USD','USD/GBP'];
                        var ccypairAcount   =   ccypairArray.length-1;
                        //Generate the random number and get that data index from ccypairArray
                        var fetchFromArray  =   Math.floor((Math.random() * ccypairAcount) + 0);                        
                        var ccypairNew  =   ccypairArray[fetchFromArray];
                        //Generate random number between 0.1111 and 1 for ASK and BID
                        var randomBid   =   (Math.random() * 0.1011) + 1;
                        randomBid       =   randomBid.toFixed(4);
                        var randomAsk   =   (Math.random() * 0.3111) + 1.1111;
                        randomAsk       =   randomAsk.toFixed(4);                    
                        //Set the array which will be add in the existing array for the same index which
                        //is deleted above
                        var rec     =   [{ccypair:ccypairNew, bid:randomBid, ask:randomAsk}];                        
                        //console.log('Add at '+removeStoreAt);
                        curStoreData.insert(removeStoreAt,rec);                                                                    
                    }, 1000);
            }
        },
        viewConfig: { 
            stripeRows: false, 
            getRowClass: function(record) {                 
                return record.get('ask') >= 1.3 ? 'green-row' : 'red-row'; 
            } 
        },
        stateId: "currencyblottergrid", // this is unique state ID
        stateful: true, // state should be preserved
     });   
   
   
           
    

   


    function poschangeColor(val) {
        if (val > 0) {
            return '<span class="green-val">' + val + '</span>';
        } else if (val < 0) {
            return '<span class="red-val">' + val + '</span>';
        }
        return val;
    }

    function getCCYpairVal(val) {        
        return '<span class="bold-val">' + val + '</span>';            
    }
    
    function getnetUSDposVal(value, metadata, record) {
        
        var val     =   record.get('net_profit_loss');
        var net_usd_pos     =   record.get('net_usd_pos');

        if (val > 0) {
            return net_usd_pos+'<span class="green-arrow"><img src="images/arrow-up-green.png" /></span>';
        } else if (val < 0) {
            return net_usd_pos+'<span class="red-arrow"><img src="images/arrow-down-red.png" /></span>';
        }
        return val;
    }
    

    /*Create store with appropriate data, it is just a variable (Array)*/
    var pospreStore = [        
    {
        ccypair: "EUR/USD",
        net_usd_pos: "44,685,786.00",
        net_profit_loss : "23491",        
        id : "prestore1",
    }, {
        ccypair: "GBP/USD",
        net_usd_pos: "595,863,607.00",
        net_profit_loss : "-22077",
        id : "prestore2",
    }, {
        ccypair: "NZD/USD",
        net_usd_pos: "213,453,185",
        net_profit_loss : "-23491",
        id : "prestore3",
    }, {
        ccypair: "USD/YPD",
        net_usd_pos: "409,710,702.00",
        net_profit_loss : "22077",
        id : "prestore4",
    }, {
        ccypair: "NZD/USD",
        net_usd_pos: "213,453,185.00",
        net_profit_loss : "-23491",
        id : "prestore5",
    }, {
        ccypair: "USD/JYP",
        net_usd_pos: "409,710,702.00",
        net_profit_loss : "22077",
        id : "prestore6",
    }];
        
    /*Create a model for the fields*/
    Ext.define('PositionBlotter', {
        height : 40,
        extend: 'Ext.data.Model',
        fields: ['ccypair', 'net_usd_pos', 'net_profit_loss']
    });
    
    /*Add prev store into new store with new model created - It will set data alongside fields*/
    var posStoreData = Ext.create('Ext.data.Store', {
                    data : pospreStore,
                    model : 'PositionBlotter'  
        });
    
    /*Create a plugin which can edit the cell - by this we can have the ability to add row*/
    var cellEditPlugin = Ext.create('Ext.grid.plugin.CellEditing', {});
    	/*START Window option Menu*/
        var Ptb = Ext.create('Ext.toolbar.Toolbar',{id:'PBoptionsMenuID',width:35,height:35});
        Ptb.add({          
                id:'PBoptionsID',  
                cls:'optionsCLS',
                iconCls: 'icon-settings',
                plain:true,
                menu: {
                    xtype: 'menu',
                    plain: true,
                    items: [{
                            text: 'Minimize',  
                            handler: function(){                            
                                pos_blot_win.setHeight(57);
                                pos_blot_win.setWidth(500);
                                //cur_blot_win.collapse();
                                pos_blot_win.minimize();                           
                            }                                                                  
                        },{
                            text: 'Maximize',
                            handler: function(){
                                pos_blot_win.maximize();                                                                              
                                //cur_blot_win.setHeight(500);
                                //cur_blot_win.setWidth(1100);
                            } 
                        },{
                            text: 'Default',
                            handler: function(){
                                pos_blot_win.restore();
                                pos_blot_win.setHeight(458);
                                pos_blot_win.setWidth(500);  
                                //cur_blot_win.setX(110);
                                //cur_blot_win.setY(225);
                            } 
                        },{
                            text: 'Close',
                            handler: function(){
                                pos_blot_win.hide();
                            } 
                        }]
                }
        });
    /*END Window option Menu*/
    /*This is our Grid + Panel*/    
    var pos_blot = Ext.create('Ext.grid.Panel', {
        //title: '<span class="cb">Position Blotter</span>',   
        id:'PositionBlotter',        
        store: posStoreData,        
        border:0,
        columns: 
        [   {
                text : '<span class="cb_head">CCY Pair</span>',
                dataIndex: 'ccypair',     
                editor : 'textfield',
                flex : 1,           
                width: 180,
                height : 40,  
                renderer : getCCYpairVal,        
            },{
                text: '<span class="cb_head">Net USD Position</span>',
                dataIndex: 'net_usd_pos',
                editor : 'textfield',
                width: 180,
                flex : 1,     
                renderer: getnetUSDposVal,
            },{
                text: '<span class="cb_head">Net Profit Loss</span>',
                dataIndex: 'net_profit_loss',
                editor : 'textfield',
                width: 140,  
                renderer:poschangeColor,           
            }
        ],
        plugins : [ cellEditPlugin ],
        tbar:[Ptb],
        stateId: "positionblottergrid", // this is unique state ID
        stateful: true, // state should be preserved
      });    
    //pos_blot.render('position_blotter');


    pos_blot_win = Ext.widget('window', {
                title: '<span class="cb">Position Blotter</span>',
                id:'pos_blot_win',
                closable:false,
                width:500,
                stateful:true,
                stateId:'positionblotterwindow',
                x:628,
                y:220,
                items: [pos_blot],
            });
       
        pos_blot_win.show();


        Ext.define('fxdesktop.currencyblotter.MyWindow', {
							extend : 'Ext.window.Window',
							title : '<span class="cb">Currency Blotter</span>',
							autoHeight:true,
							width : 500,
							x: 120,
                            y: 220,
							movable : true,
							id:'cur_blot_win',
							stateId : 'stateWindowCurrencyBlotter',
							stateful : true,
							resizable:'true',
							layout: 'anchor',
							defaults: {
								anchor: '100%'
							},
							closable:false
						});
   
	if(!cur_blot_win){
		cur_blot_win = Ext.create('fxdesktop.currencyblotter.MyWindow');		                            	
       		cur_blot_win.add(cur_blot);
       	}       	
       	cur_blot_win.show();

Ext.require([
    'Ext.form.*'
]);



    var win;
    var CUSTOMERstore = Ext.create('Ext.data.ArrayStore', {
        fields: ['searchopt'],
        data : [['--Select'],['djhl : 188001/Dan J Hill'],['sjvr : 188001/Steve J Vernon'],
                ['gdlu : 188001/George D Lucas'],['owka : 188001/Obie Wan Kanobie'] ],
        id:'CUSTOMERitems',
    });

    var CCYPAIRstore = Ext.create('Ext.data.ArrayStore', {
        fields: ['searchopt'],
        data : [['--Select'],['USD/EUR'],['USD/GBP'],
                ['USD/AUD'],['USD/CAD'] ],
        id:'CCYPAIRitems',
    });
    	/*START Window option Menu*/
        var Qtb = Ext.create('Ext.toolbar.Toolbar',{id:'EToptionsMenuID',width:35,height:35});
        Qtb.add({          
                id:'EToptionsID',  
                cls:'optionsCLS',
                iconCls: 'icon-settings',
                plain:true,
                menu: {
                    xtype: 'menu',
                    plain: true,
                    items: [{
                            text: 'Minimize',  
                            handler: function(){                            
                                quick_eyd_win.setHeight(57);
                                quick_eyd_win.setWidth(400);;                            
                            }                                                                  
                        },{
                            text: 'Maximize',
                            handler: function(){
                                quick_eyd_win.maximize();                                                                               
                            } 
                        },{
                            text: 'Default',
                            handler: function(){
                                quick_eyd_win.restore();
                                quick_eyd_win.setHeight(400);
                                quick_eyd_win.setWidth(400);
                            } 
                        },{
                            text: 'Close',
                            handler: function(){
                                quick_eyd_win.hide();
                            } 
                        }]
                }
        });
    /*END Window option Menu*/
    var QETform = Ext.widget('form', {
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                border: false,            
                fieldDefaults: {                    
                    labelWidth: 100,
                    labelStyle: 'font-weight:bold',                    
                },
                items: [ {
                    xtype: 'combobox',
                    fieldLabel: 'Customer',                
                    id:'eydCombo',      
                    //hideLabel: true,    
                    typeAhead: true,
                    triggerAction: 'all',
                    //emptyText:'Search',
                    selectOnFocus:true,
                    store: CUSTOMERstore,
                    queryMode: 'local',
                    displayField: 'searchopt',
                    valueField: 'searchopt',
                    listeners: {
                        beforequery: function (record) {
                            record.query = new RegExp(record.query, 'i');
                            record.forceAll = true;
                        }
                    }  
                },{
                    xtype: 'combobox',
                    fieldLabel: 'CCY Pair',                
                    id:'ccypairCombo',      
                    cls:'ccypcls',  
                    typeAhead: true,
                    triggerAction: 'all',
                    //emptyText:'Search',
                    selectOnFocus:true,
                    store: CCYPAIRstore,
                    queryMode: 'local',
                    displayField: 'searchopt',
                    valueField: 'searchopt',
                    listeners: {
                        beforequery: function (record) {
                            record.query = new RegExp(record.query, 'i');
                            record.forceAll = true;
                        }
                    }  
                }, {
                    xtype: 'numberfield',
                    anchor: '100%',
                    fieldLabel: 'Principaltrue',
                    allowBlank: false,
                    //emptyText:'Search',
                    cls:'ptcls',
                    id:'pptrueID', 
                    minValue: 0,
                    maxValue: 100,
                    allowDecimals: true,
                    decimalPrecision: 1,
                    incrementValue: 0.4,
                    alternateIncrementValue: 2.1,
                    accelerate: true,
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Tenor',
                    allowBlank: false,
                    emptyText:'1m',
                    cls:'tenorcls',  
                    id:'tenorID',
                },],

                buttons: [{
                    text: 'EYD PRICER',
                    id:'qetID',
                    cls:'button submit radius round tiny right',
                    style:'border: 1px solid #b42525;background: #f34d4d;color:#FFF; font-size:14px;',
                    /*handler: function() {
                        this.up('form').getForm().reset();
                        this.up('window').hide();
                    }*/
                }, /*{
                    text: 'Send',
                    handler: function() {
                        if (this.up('form').getForm().isValid()) {
                            // In a real application, this would submit the form to the configured url
                            // this.up('form').getForm().submit();
                            this.up('form').getForm().reset();
                            this.up('window').hide();
                            Ext.MessageBox.alert('Thank you!', 'Your inquiry has been sent. We will respond as soon as possible.');
                        }
                    }
                }*/]
            });

            QETwin = Ext.widget('window', {
                title: 'QUICK EYD TRADE',
                id:'qeydtrade',
                closable:false,
                width: 400,
                height: 300, 
                stateful:true,
                stateId:'Eydtradewindow',
                x:120,
                y:1180,             
                items: QETform,
                tbar:[Qtb]
            });
       
        QETwin.show();



    /*Create store with appropriate data, it is just a variable (Array)*/
    var tradepreStore = [        
        { tbid: '0716', product: 'FXSWAP', ccypair: 'EUR/USD', spotbook:'ECOM', amount:'200,400,032,000.00', ctr_amount:'200,000,300,020.00',  
        market_rate:'1.854', customer_all_in_rate:'1,556', p_s:'P', br:'02', status:'AMEND'},
        { tbid: '0711', product: 'FXSPOT', ccypair: 'GBP/USD', spotbook:'AKI', amount:'200,100,023,000.00', ctr_amount:'200,789,000,000.00',  
        market_rate:'1,354', customer_all_in_rate:'1.756', p_s:'S', br:'02', status:'AMEND'},
        { tbid: '0716', product: 'FXSWAP', ccypair: 'EUR/USD', spotbook:'ECOM', amount:'200,400,032,000.00', ctr_amount:'200,000,300,020.00',  
        market_rate:'1,854', customer_all_in_rate:'1,556', p_s:'P', br:'02', status:'AMEND'},
        { tbid: '0711', product: 'FXSPOT', ccypair: 'GBP/USD', spotbook:'AKI', amount:'200,100,023,000.00', ctr_amount:'200,789,000,000.00',  
        market_rate:'1,354', customer_all_in_rate:'1,756', p_s:'S', br:'02', status:'AMEND'},
        { tbid: '0711', product: 'FXSPOT', ccypair: 'GBP/USD', spotbook:'AKI', amount:'200,100,023,000.00', ctr_amount:'200,789,000,000.00',  
        market_rate:'1,354', customer_all_in_rate:'1,756', p_s:'S', br:'02', status:'AMEND'},
    ];
        
    /*Create a model for the fields*/
    Ext.define('TradeBlotter', {
        height : 40,
        extend: 'Ext.data.Model',
        fields: [ 'tbid', 'product', 'ccypair', 'spotbook', 'amount', 'ctr_amount', 'market_rate', 'customer_all_in_rate', 'p_s', 'br', 'status' ]
    });
    
    /*Add prev store into new store with new model created - It will set data alongside fields*/
    var tradeStoreData = Ext.create('Ext.data.Store', {
                    data : tradepreStore,
                    model : 'TradeBlotter'  
        });
    
    /*Create a plugin which can edit the cell - by this we can have the ability to add row*/
    var TradecellEditPlugin = Ext.create('Ext.grid.plugin.CellEditing', {});
    	/*START Window option Menu*/
        var Ttb = Ext.create('Ext.toolbar.Toolbar',{id:'TBoptionsMenuID',width:35,height:35});
        Ttb.add({          
                id:'TBoptionsID',  
                cls:'optionsCLS',
                iconCls: 'icon-settings',
                plain:true,
                menu: {
                    xtype: 'menu',
                    plain: true,
                    items: [{
                            text: 'Minimize',  
                            handler: function(){                            
                                trade_blot_win.setHeight(57);
                                trade_blot_win.setWidth(1220);
                                //cur_blot_win.collapse();                                                    
                            }                                                                  
                        },{
                            text: 'Maximize',
                            handler: function(){
                                trade_blot_win.maximize();                                                                              
                                //cur_blot_win.setHeight(500);
                                //cur_blot_win.setWidth(1100);
                            } 
                        },{
                            text: 'Default',
                            handler: function(){
                                trade_blot_win.restore();
                                trade_blot_win.setHeight(458);
                                trade_blot_win.setWidth(1220);  
                                //cur_blot_win.setX(110);
                                //cur_blot_win.setY(225);
                            } 
                        },{
                            text: 'Close',
                            handler: function(){
                                trade_blot_win.hide();
                            } 
                        }]
                }
        });
    /*END Window option Menu*/
    /*This is our Grid + Panel*/    
    var trade_blot = Ext.create('Ext.grid.Panel', {
        //title: '<span class="cb">Position Blotter</span>',   
        id:'TradeBlotter',
        width:1220,
        draggable : true,    
        store: tradeStoreData,
        border:0,
        columns: [
                    {
                        text: 'ID',                            
                        sortable: true,
                        dataIndex: 'tbid',
                        id:'id_id',
                        flex:1,
                    },
                    {
                        text: 'Product',                        
                        sortable: true,
                        dataIndex: 'product',
                        id:'product_id',
                        flex:1,
                    },
                    {
                        text: 'CCY Pair',
           
                        sortable: true,
                        dataIndex: 'ccypair',
                        id :'ccypair_id',
                        flex:1,
                    },{
                        text: 'Spot Book',
                 
                        sortable: true,
                        dataIndex: 'spotbook',
                        id :'spotbookr_id',
                        flex:1,
                    },{
                        text: 'Amount',
                
                        sortable: true,
                        dataIndex: 'amount',
                        id :'amount_id',
                        flex:1,
                    },{
                        text: 'CTR Amount',
              
                        sortable: true,
                        dataIndex: 'ctr_amount',
                        id :'ctr_amount_id',
                        flex:1,
                    },{
                        text: 'Market Rate',                         
                        sortable: true,
                        dataIndex: 'market_rate',
                        id :'market_rate_id',
                        flex:1,
                    },{
                        text: 'Customer All <br/> In Rate',                   
                        sortable: true,
                        dataIndex: 'customer_all_in_rate',
                        id :'customer_all_in_rate_id',
                        flex:1,
                    },{
                        text: 'P/S',                        
                        sortable: true,
                        dataIndex: 'p_s',
                        id :'p_s_id',
                        flex:1,
                    },{
                        text: 'BR',                    
                        sortable: true,
                        dataIndex: 'br',
                        id :'br_id',
                        flex:1,
                    },{
                        text: 'Status',                            
                        sortable: true,
                        dataIndex: 'status',
                        id :'status_id',
                        flex:1,
                    }
        ],
        tbar:[Ttb],
        plugins : [ TradecellEditPlugin ],
        stateId: "traderblottergrid", // this is unique state ID
        stateful: true, // state should be preserved
       });    
    

    trade_blot_win = Ext.widget('window', {
                title: '<span class="cb">Trade Blotter</span>',
                renderTo: Ext.getBody(),
                id:'trade_blot_win',
                closable:false,
                width:1220,
                minHeight: 380,
                stateful:true,
                stateId:'tradeblotterwindow',
                x:120,
                y:720,            
                items: [trade_blot],
            }); 
        trade_blot_win.show();
		
		var storeWS = Ext.create('Ext.data.ArrayStore', {
        fields: ['ws'],
        data : [['Workspace A']],
        id:'wsItems',        
    });

    comboWS = Ext.create('Ext.form.field.ComboBox', {
        id:'wsId',      
        hideLabel: true,    
        style: 'background: none;',
        typeAhead: true,
        triggerAction: 'all',
        width:158,        
        selectOnFocus:true,
        store: storeWS,
        queryMode: 'local',
        displayField: 'ws',
        valueField: 'ws',
        listeners: {
            beforequery: function (record) {
                record.query = new RegExp(record.query, 'i');
                record.forceAll = true;
            }
        }        
    });    
    comboWS.render('wsDivID');
    comboWS.select(comboWS.getStore().getAt(0));
	
	
/*Sidebar Home - Aadmin - User*/	
	Ext.get('fxAdminTabs').hide();
	var activateAdmin = Ext.get('fxAdmin');
	activateAdmin.on("click", function (){
		Ext.WindowMgr.hideAll();
		Ext.get('fxAdminTabs').setStyle('display','block');
		Ext.get('fxAdminTabs').show();
	});

	var activateHome = Ext.get('fxHome');
	activateHome.on("click", function (){
		var win1 = Ext.getCmp('cur_blot_win');
		var win2 = Ext.getCmp('pos_blot_win');
		var win3 = Ext.getCmp('qeydtrade');
		var win4 = Ext.getCmp('trade_blot_win');
		win1.show();win2.show();win3.show();win4.show();            
		Ext.get('fxAdminTabs').hide();
	});
/*Sidebar Home - Aadmin - User*/	
});