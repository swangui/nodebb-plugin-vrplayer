"use strict";

var clientTopicAttachments = {
    loadTpl: function(settings) {
        ajaxify.loadTemplate('attachments', function(tpl) {
            var html = templates.parse(tpl, settings);
        
            var wait = setInterval(function(){
                if ($('.title-container').size() === 1) {
        
                    console.log(html);
                    $(html).insertAfter($('.title-container'));
        
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
            var plugin = {id:'topic-attachments'};
            settings.sync(plugin.id, null, function(){
                console.log(settings.get());
            });
        });
*/
        socket.emit(
           'plugins.settings.syncClientTopicAttachments',
            null,
            function(err, settings){
            console.log(settings);
            clientTopicAttachments.loadTpl(settings);
        });

    });
});
