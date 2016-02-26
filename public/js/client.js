"use strict";

$(document).ready(function() {
    $(window).on('action:composer.topic.new', function() {
        console.log('new topic captured!');
        ajaxify.loadTemplate('attachments', function(tpl) {
            var html = templates.parse(tpl, {});

            var wait = setInterval(function(){
                if ($('.title-container').size() === 1) {
                    console.log(html);
                    $(html).insertAfter($('.title-container'));
                    clearTimeout(wait);
                }
            }, 100);
            

        });
    });
});
