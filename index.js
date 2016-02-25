(function() {
    "use strict";

    var fileUploader = {
        decorate: function(topicData, callback) {
            topicData.posts[0].content += 'hello world';
            callback(null, topicData);
        }
    };

    module.exports = fileUploader;
})();
