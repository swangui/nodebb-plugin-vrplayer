define('admin/plugins/topic-attachments', ['settings'], function(Settings) {
    var topicAttachments = {};
/*   
    topicAttachments.init = function() {
        Settings.load('topic-attachments',
                      $('.topic-attachments-settings'),
                      function(err, settings) {
            var defaults = {
                'isThumbnailsEnabled': 0,
                'isAttachmentsEnabled': 0,
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
                'attachmentMaxNum': 1,
            };

            // Set defaults
            for(var setting in defaults) {
                if (!settings.hasOwnProperty(setting)) {
                    if (typeof defaults[setting] === 'boolean') {
                        $('#' + setting).prop('checked', defaults[setting]);
                    } else {
                        $('#' + setting).val(defaults[setting]);
                    }
                }
            }
        });

        $('#save').on('click', function() {
            Settings.save('topic-attachments',
                          $('.topic-attachments-settings'),
                          function() {
                app.alert({
                    type: 'success',
                    alert_id: 'topic-attachments-saved',
                    title: 'Reload Required',
                    message: 'Please reload your NodeBB to have your changes take effect',
                    clickfn: function() {
                        socket.emit('admin.reload');
                    }
                });
            });
        });
    };
*/
    return topicAttachments;
});
