<div class="row">
  <div class="col-lg-9">
    <form class="form topic-attachments-settings">
      <div class="panel panel-default">
        <div class="panel-heading">General Settings</div>
        <div class="panel-body">
          <div class="row">
            <div class="col-lg-12">
              <div class="form-group">
                <label for="isThumbnailsEnabled">
                  <input type="checkbox" name="isThumbnailsEnabled" id="isThumbnailsEnabled" />
                  Enable topic thumbnails
                </label>
              </div>
              <div class="form-group">
                <label for="isAttachmentsEnabled">
                  <input type="checkbox" name="isAttachmentsEnabled" id="isAttachmentsEnabled" />
                  Enable topic attachments
                </label>
              </div>
              <div class="form-group">
                <label for="isApprovalRequired">
                  <input type="checkbox" name="isApprovalRequired" id="isApprovalRequired" />
                  Approval is required before attachment being publicly accessible
                </label>
              </div>
              <div class="form-group">
                <label for="isAWSS3Enabled">
                  <input type="checkbox" name="isAWSS3Enabled" id="isAWSS3Enabled" checked readonly />
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
                  <input type="text" name="AWSS3AccessKey" id="AWSS3AccessKey" />
                </label>
              </div>
              <div class="form-group">
                <label for="AWSS3SecretKey">
                  AWSSecretKey
                  <input type="text" name="AWSS3SecretKey" id="AWSS3SecretKey" />
                </label>
              </div>
              <div class="form-group">
                <label for="AWSS3Buckect">
                  Bucket
                  <input type="text" name="AWSS3Buckect" id="AWSS3Buckect" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">Topic Thumbnails</div>
        <div class="panel-body">
          <div class="row">
            <div class="col-lg-12">
              <div class="form-group">
                <label for="thumbnailAllowedFormats">
                  Allowed file formats
                  <input type="text" name="thumbnailAllowedFormats" id="thumbnailAllowedFormats" />
                </label>
              </div>
              <div class="form-group">
                <label for="thumbnailWidth">
                  Thumbnail width
                  <input type="text" name="thumbnailWidth" id="thumbnailWidth" />
                </label>
              </div>
              <div class="form-group">
                <label for="thumbnailHeight">
                  Thumbnail height
                  <input type="text" name="thumbnailHeight" id="thumbnailHeight" />
                </label>
              </div>
              <div class="form-group">
                <label for="thumbnailMaxNum">
                  Max number of thumbnails
                  <input type="text" name="thumbnailMaxNum" id="thumbnailMaxNum" readonly />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">Topic Attachments</div>
        <div class="panel-body">
          <div class="row">
            <div class="col-lg-12">
              <div class="form-group">
                <label for="attachmentAllowedFormats">
                  Allowed file formats
                  <input type="text" name="attachmentAllowedFormats" id="attachmentAllowedFormats" />
                </label>
              </div>
              <div class="form-group">
                <label for="attachmentMaxNum">
                  Max number of attachments
                  <input type="text" name="attachmentMaxNum" id="attachmentMaxNum" readonly />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel panel-default" style="display:none;">
        <div class="panel-heading">Hooks</div>
        <div class="panel-body">
          <div class="row">
            <div class="col-lg-12">
              <div class="form-group">
                <label for="">
                  action:plugin.topicAttachment.thumbnail.click
                  <textarea>console.log('action:plugin.topicAttachment.thumbnail.click');</textarea>
                </label>
              </div>
              <div class="form-group">
                <label for="">
                  filter:plugin.topicAttachment.thumbnail.render
                  <textarea>console.log('filter:plugin.topicAttachment.thumbnail.render');</textarea>
                </label>
              </div>
              <div class="form-group">
                <label for="">
                  action:plugin.topicAttachment.attachments.click
                  <textarea>console.log('action:plugin.topicAttachment.attachments.click');</textarea>
                </label>
              </div>
              <div class="form-group">
                <label for="">
                  filter:plugin.topicAttachment.attachments.render
                  <textarea>console.log('filter:plugin.topicAttachment.attachments.render');</textarea>
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
      <div class="panel-heading">Topic Attachments Panel</div>
      <div class="panel-body">
        <button class="btn btn-primary" id="save">Save Settings</button>
      </div>
    </div>
  </div>
</div>
