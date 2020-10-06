import { AttachmentUpload } from "ecommerce-project-api/vendor/bundle/ruby/2.7.0/gems/actiontext-6.0.3.3/app/javascript/actiontext/attachment_upload"

addEventListener("trix-attachment-add", event => {
  const { attachment, target } = event

  if (attachment.file) {
    const upload = new AttachmentUpload(attachment, target)
    upload.start()
  }
})
