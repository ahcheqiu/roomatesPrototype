(function(){
    var siteBase = window.location.protocol + '//' + window.location.host;
    var componentsBase = siteBase + '/bower_components/';
    var components = [
        'paper-drawer-panel/paper-drawer-panel.html',
        'paper-header-panel/paper-header-panel.html',
        'paper-scroll-header-panel/paper-scroll-header-panel.html',
        'paper-toolbar/paper-toolbar.html',
        'paper-icon-button/paper-icon-button.html',
        'iron-icons/iron-icons.html',
        'paper-tabs/paper-tabs.html'
    ];
    var componentsLen = components.length;
    var script,pageReady;

    script = document.createElement('link');
    script.href = componentsBase + 'polymer/polymer.html';
    script.rel = 'import';
    script.onload = function(){
        pageReady = new Promise(function(resolve){
            for( var x in components ){
                if( components.hasOwnProperty(x) ){
                    Polymer.Base.importHref(componentsBase + components[x],function(){
                        if( --componentsLen == 0 ){
                            resolve();
                        }
                    });
                }
            }
        }).then(function(){
            script = document.createElement('script');
            script.src = siteBase + '/js/app.js';
            document.head.appendChild(script);
        });
    };
    document.head.appendChild(script);
})();