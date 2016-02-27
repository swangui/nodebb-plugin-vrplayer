(function() {
    "use strict";

    var topicAttachments = {
        config: {},
        onLoad: function(params, callback) {
            function render(req, res, next) {
                res.render('admin/plugins/topic-attachments', {});
            }
            params.router.get('/admin/plugins/topic-attachments', params.middleware.admin.buildHeader, render);
            params.router.get('/api/admin/plugins/topic-attachments', render);
    
            callback();
        },
        decorate: function(topicData, callback) {
            topicData.posts[0].content += 'hello world';
            callback(null, topicData);
        },
        admin: {
            menu: function(custom_header, callback) {
                custom_header.plugins.push({
                    "route": '/plugins/topic-attachments',
                    "icon": 'fa-edit',
                    "name": 'Topic Attachments'
                });
                
                callback(null, custom_header);
            }
        }
    };

    module.exports = topicAttachments;
})();
