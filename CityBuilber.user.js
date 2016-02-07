// ==UserScript==
// @name CityBuilder
// @description Upgrades City by Selection
// @namespace       
// @include         
// @version 1.0
// @author Holeghost
// @grant none
// ==/UserScript==
function waitForClientLib() {
    qx = unsafeWindow.qx;
    ClientLib = unsafeWindow.ClientLib;
    webfrontend = unsafeWindow.webfrontend;
    if (typeof ClientLib == 'undefined' || typeof qx == 'undefined' || qx.core
        .Init.getApplication().initDone === false) {
        setTimeout(waitForClientLib, 1000);
        return;
    }
    // Create a button
    var app = qx.core.Init.getApplication();
    var button1 = new qx.ui.form.Button('CityBuilder');
    // Add button to position on screen
    app.getDesktop().add(button1, {
        right: 128,
        bottom: 3
    });
    //Makes button open and close window
    button1.addListener('execute', function(e) {
        if (win.isVisible()) win.close();
        else win.open();
    });
    // Create the Window
    var win = new qx.ui.window.Window("CityBuilder",
        'https://eaassets-a.akamaihd.net/cncalliancesgame/cdn/data/494e4f699414810a14455a5b58fe1c72.png'
    );
    win.setLayout(new qx.ui.layout.VBox(10));
    win.setShowStatusbar(false);
    win.setStatus("");
    win.set({
        allowMaximize: 0,
        showMaximize: 0,
        allowMinimize: 0,
        showMinimize: 0,
        allowClose: 1,
        showClose: 1,
        resizable: true
    });
    app.getDesktop().add(win, {
        left: 20,
        top: 20
    });
	
	//rowCount
	// function createRandomRows(rowCount) {
	  // var rowData = [];
	  // var nextId = 0;
	  // for (var row = 0; row < rowCount; row++) {
		// rowData.push([ nextId++]);
	  // }
	  // return rowData;
	// }
    // Add a TabView to window
    var tabView = new qx.ui.tabview.TabView;
    win.add(tabView, {
        flex: 1
    });
	
    ///////////All About TibPage///////////
    var page1 = new qx.ui.tabview.Page('Tib',
        'https://eaassets-a.akamaihd.net/cncalliancesgame/cdn/data/98abd73f92a4fb8f5f3a28a1b2a82344.png'
    );
	page1.setLayout(new qx.ui.layout.HBox());
	tabView.add(page1);
	//Tib table
	
	//var tableA = new qx.ui.table.Table(tableModelA)
		//.set({
			// decorator: null,
			 // Padding: 3,
			// height: 200,
			 // width: 300
		// });
	
	// tableModelA = new qx.ui.table.model.Simple();
	// tableModelA.setColumns([
		// "baseName",
		// "Boolean",
		// "Status"
	// ]);
	// tableModelA.setData(createRandomRows(1000));
	// page1.add(tableA);
		
	//////////All About CryPage///////////
    var page2 = new qx.ui.tabview.Page('Cry',
        'https://eaassets-a.akamaihd.net/cncalliancesgame/cdn/data/61f096dde442bd3be1843a0929900194.png'
    );
	page2.setLayout(new qx.ui.layout.VBox());
    tabView.add(page2);
	
	///////////All About PowPage//////////
    var page3 = new qx.ui.tabview.Page('Pow',
        'https://eaassets-a.akamaihd.net/cncalliancesgame/cdn/data/fa6798783e2c662ce81e861990aef03a.png'
    );
	page3.setLayout(new qx.ui.layout.VBox());
    tabView.add(page3);
	
	///////////All About CashPage///////////
    var page4 = new qx.ui.tabview.Page('Cash',
        'https://eaassets-a.akamaihd.net/cncalliancesgame/cdn/data/a7d2f83e4fe41fc03990192217fd0330.png'
    );
	page4.setLayout(new qx.ui.layout.VBox());
    tabView.add(page4);
	
	///////////All About BasePage///////////
    var page5 = new qx.ui.tabview.Page('Base',
        'https://eaassets-a.akamaihd.net/cncalliancesgame/cdn/data/70271aea3ca93c19f84c3fbe7645b76d.png'
    );
	page5.setLayout(new qx.ui.layout.VBox());
    tabView.add(page5);
	
	///////////All About DefPage///////////
    var page6 = new qx.ui.tabview.Page('Def',
        'https://eaassets-a.akamaihd.net/cncalliancesgame/cdn/data/17dab9ef93b23f2156ff6c0f235ccfd7.png'
    );
	page6.setLayout(new qx.ui.layout.VBox());
    tabView.add(page6);
	
	///////////All About OffPage///////////
    var page7 = new qx.ui.tabview.Page('Off',
        'https://eaassets-a.akamaihd.net/cncalliancesgame/cdn/data/c4c2f864fc9ca46d3b1ff48b5a7bc3d2.png'
    );
	page7.setLayout(new qx.ui.layout.VBox());
    tabView.add(page7);
	
	///////////All About OptionPage///////////
    var page8 = new qx.ui.tabview.Page('Options',
        'https://eaassets-a.akamaihd.net/cncalliancesgame/cdn/data/43a60ec424bfe28a3d97315b949dd826.png'
    );
	page8.setLayout(new qx.ui.layout.VBox());
    tabView.add(page8);
	
	
	////////////////////////////////////////////////////////////////////////////////////////////////////
    
    /**
     *
     * @return {qx.ui.window.Window} modal window
     * @lint ignoreDeprecated(alert)
     */
}

function startup() {
    setTimeout(waitForClientLib, 1000);
}
startup();
