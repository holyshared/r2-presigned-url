const s3 = require('@aws-sdk/client-s3')
const presigner = require('@aws-sdk/s3-request-presigner')

const accountId = process.env.R2_ACCOUNT_ID || 'example'
const bucket = process.env.R2_BUCKET || 'example'

const client = new s3.S3Client({
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
  region: 'auto',
  endpoint: `https://${accountId}.r2.cloudflarestorage.com` // bucket?
})

exports.presignedURL = {
  async of(path) {
    const command = new s3.PutObjectCommand({
      Bucket: bucket,
      Key: path,
      ContentType: "image/jpeg",
    })
    return presigner.getSignedUrl(client, command, { expiresIn: 3600 });
  }
}
