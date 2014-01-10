// Main Javascript File
// EDIT THE LINKS BELOW

var MultiBotScript = 'http://guiscripts.6te.net/plugdj/MultiBot.js';
var MultiBotPlugins = ['http://guiscripts.6te.net/plugdj/BasicCommands.js',
                       'http://guiscripts.6te.net/plugdj/DJBot.js',
                       'http://guiscripts.6te.net/plugdj/ChatManager.js'];

// DON'T EDIT BELOW
// @author Guichaguri

function isUndefined(obj) { return obj === void 0; };
function BOT_load() {
    console.log('Loading MultiBot');
    $.getScript(MultiBotScript, function(){
        for(var i = 0; i < MultiBotPlugins.length; i++) $.getScript(MultiBotPlugins[i]);
    });
}
function BOT_reload() {
    console.log('Reloading MultiBot'); BOT.INTERNAL.close();
    setTimeout(function(){BOT_load();}, 1000);
}
$("*").ready(function(){
    while(true) {
        if((!isUndefined(API)) && (!isUndefined(API.getUser))) { var u = API.getUser();
            if((!isUndefined(u)) && (u != null) && (!isUndefined(u['id']))) {BOT_load();break;}
        }
    }
});
