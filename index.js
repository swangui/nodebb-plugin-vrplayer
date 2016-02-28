'use strict';
var Meta = module.parent.require('./meta');
var Settings = module.parent.require('./settings'),
    SocketAdmin = module.parent.require('./socket.io/admin'),
    SocketPlugins = module.parent.require('./socket.io/plugins'),
    Config = {};
    Config.plugin = {
        id: 'topic-attachments',
        version: '1.0.0'
    };
    Config.defaults = {
        'isThumbnailsEnabled': 1,
        'isAttachmentsEnabled': 1,
        'isApprovalRequired': 1,
        'isAWSS3Enabled': 1,
        'AWSS3AccessKey': '',
        'AWSS3SecretKey': '',
        'AWSS3Buckect': '',
        'thumbnailAllowedFormats': 'png,gif,jpg',
        'thumbnailWidth': 32,
        'thumbnailHeight': 32,
        'thumbnailMaxNum': 1,
        'attachmentAllowedFormats': 'mp4,zip,png,gif,jpg',
        'attachmentMaxNum': 1
    };
    Config.global = {};
    Config.settings = new Settings(
        Config.plugin.id,
        Config.plugin.version,
        Config.defaults
    );
    
/*
    Meta.settings.get('topic-attachments', function(err, _settings) {
        console.log(_settings);
    });
//*/

    SocketAdmin.settings.syncTopicAttachments = function() {
        Config.settings.sync();
    };

    SocketPlugins.settings = {};
    SocketPlugins.settings.syncClientTopicAttachments = function(socket, data, callback) {
        var omitted = Config.settings.get();
        omitted.config = {};
        delete omitted.AWSS3SecretKey;
        console.log(omitted);
        callback(null, omitted);
    };



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
