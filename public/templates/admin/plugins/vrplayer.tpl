<div class="row">
  <div class="col-lg-9">
    <form class="form vrplayer-settings">
      <div class="panel panel-default">
        <div class="panel-heading">General Settings</div>
        <div class="panel-body">
          <div class="row">
            <div class="col-lg-12">
              <div class="form-group">
                <label for="isApprovalRequired">
                  <input type="checkbox" data-key="isApprovalRequired" id="isApprovalRequired" />
                  Approval is required before attachment being publicly accessible
                </label>
              </div>
              <div class="form-group">
                <label for="isAWSS3Enabled">
                  <input type="checkbox" data-key="isAWSS3Enabled" id="isAWSS3Enabled" checked readonly />
                  Enable AWS S3
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">AWS S3 Settings</div>
        <div class="panel-body">
          <div class="row">
            <div class="col-lg-12">
              <div class="form-group">
                <label for="AWSS3AccessKey">
                  AWSAccessKeyId
                  <input type="text" data-key="AWSS3AccessKey" id="AWSS3AccessKey" />
                </label>
              </div>
              <div class="form-group">
                <label for="AWSS3SecretKey">
                  AWSSecretKey
                  <input type="text" data-key="AWSS3SecretKey" id="AWSS3SecretKey" />
                </label>
              </div>
              <div class="form-group">
                <label for="AWSS3Buckect">
                  Bucket
                  <input type="text" data-key="AWSS3Buckect" id="AWSS3Buckect" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">vrplayer Thumbnail</div>
        <div class="panel-body">
          <div class="row">
            <div class="col-lg-12">
              <div class="form-group">
                <label for="thumbnailExt">
                  Allowed file extensions
                  <input type="text" data-key="thumbnailExt" id="thumbnailExt" />
                </label>
              </div>
              <div class="form-group">
                <label for="thumbnailWidth">
                  Thumbnail width
                  <input type="text" data-key="thumbnailWidth" id="thumbnailWidth" />
                </label>
              </div>
              <div class="form-group">
                <label for="thumbnailHeight">
                  Thumbnail height
                  <input type="text" data-key="thumbnailHeight" id="thumbnailHeight" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">vrplayer Video</div>
        <div class="panel-body">
          <div class="row">
            <div class="col-lg-12">
              <div class="form-group">
                <label for="videoExt">
                  Allowed video extensions
                  <input type="text" data-key="videoExt" id="videoExt" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
  <div class="col-lg-3">
    <div class="panel panel-default">
      <div class="panel-heading">vrplayer Panel</div>
      <div class="panel-body">
        <button class="btn btn-primary" id="save">Save Settings</button>
      </div>
    </div>
  </div>
</div>

<script>
    require(['settings'], function (settings) {
        var plugin = {id:'vrplayer'};
        var wrapper = $('.vrplayer-settings');
        settings.sync(plugin.id, wrapper, function(){
            console.log(settings.get());
        });
        $('#save').click(function(event) {
            event.preventDefault();
            settings.persist(plugin.id, wrapper, function(){
                socket.emit('admin.settings.syncVrplayer');
            });
        });
    });
</script>
