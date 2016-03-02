'use strict';
var Meta = module.parent.require('./meta');
var Settings = module.parent.require('./settings'),
    SocketAdmin = module.parent.require('./socket.io/admin'),
    SocketPlugins = module.parent.require('./socket.io/plugins'),
    Config = {};
    Config.plugin = {
        id: 'vrplayer',
        version: '1.0.0'
    };
    Config.defaults = {
        'isApprovalRequired': 1,
        'isAWSS3Enabled': 1,
        'AWSS3AccessKey': '',
        'AWSS3SecretKey': '',
        'AWSS3Buckect': '',
        'thumbnailExt': 'png,gif,jpg',
        'thumbnailWidth': 32,
        'thumbnailHeight': 32,
        'videoExt': 'mp4'
    };
    Config.global = {};
    Config.settings = new Settings(
        Config.plugin.id,
        Config.plugin.version,
        Config.defaults
    );
    
/*
    Meta.settings.get('vrplayer', function(err, _settings) {
        console.log(_settings);
    });
//*/

    SocketAdmin.settings.syncVrplayer = function() {
        Config.settings.sync();
    };

    SocketPlugins.settings = {};
    SocketPlugins.settings.syncClientVrplayer = function(socket, data, callback) {
        var omitted = Config.settings.get();
        omitted.config = {};
        delete omitted.AWSS3SecretKey;
        console.log(omitted);
        callback(null, omitted);
    };



    var vrplayer = {
        config: {},
        onLoad: function(params, callback) {
            function render(req, res, next) {
                res.render('admin/plugins/vrplayer', {});
            }
            params.router.get('/admin/plugins/vrplayer', params.middleware.admin.buildHeader, render);
            params.router.get('/api/admin/plugins/vrplayer', render);

            callback();
        },
        decorate: function(topicData, callback) {
            topicData.posts[0].content += 'hello world';
            callback(null, topicData);
        },
        admin: {
            menu: function(custom_header, callback) {
                custom_header.plugins.push({
                    "route": '/plugins/vrplayer',
                    "icon": 'fa-edit',
                    "name": 'vrplayer'
                });
                
                callback(null, custom_header);
            }
        }
    };

    module.exports = vrplayer;
