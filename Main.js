// Main Javascript File
// EDIT THE URLS BELOW

var MultiBotScript = 'https://raw.github.com/Guichaguri/PlugDJ-MultiBot/master/MultiBot.js';
var MultiBotPlugins = ['https://raw.github.com/Guichaguri/PlugDJ-MultiBot/master/plugins/BasicCommands.js',
                       'https://raw.github.com/Guichaguri/PlugDJ-MultiBot/master/plugins/DJBot.js',
                       'https://raw.github.com/Guichaguri/PlugDJ-MultiBot/master/plugins/ChatManager.js'];

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
