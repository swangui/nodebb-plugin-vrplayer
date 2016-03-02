"use strict";

var clientVrplayer = {
    loadTpl: function(settings) {
        ajaxify.loadTemplate('vrplayer', function(tpl) {
            var html = templates.parse(tpl, settings);
        
            var wait = setInterval(function(){
                if ($('.tags-container.inline-block').size() === 1) {
        
                    console.log(html);
                    $(html).insertBefore($('.tags-container.inline-block'));
        
                    clearTimeout(wait);
                }
            }, 100);
        });
    },
};

$(document).ready(function() {
    $(window).on('action:composer.topic.new', function() {
        console.log('new topic captured!');
/*
        require(['settings'], function (settings) {
            var plugin = {id:'vrplayer'};
            settings.sync(plugin.id, null, function(){
                console.log(settings.get());
            });
        });
*/
        socket.emit(
           'plugins.settings.syncClientVrplayer',
            null,
            function(err, settings){
            console.log(settings);
            clientVrplayer.loadTpl(settings);
        });

    });
});
