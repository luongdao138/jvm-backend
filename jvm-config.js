const dotenv = require("dotenv-safe");

let ENV_FILE_NAME = "";
switch (process.env.NODE_ENV) {
  case "production":
    ENV_FILE_NAME = ".env.production";
    break;
  case "staging":
    ENV_FILE_NAME = ".env.staging";
    break;
  case "test":
    ENV_FILE_NAME = ".env.test";
    break;
  case "development":
  default:
    ENV_FILE_NAME = ".env";
    break;
}

try {
  dotenv.config({ path: process.cwd() + "/" + ENV_FILE_NAME });
} catch (e) {}

const PORT = Number(process.env.PORT) || 9000
// cors
const FRONT_CORS = process.env.FRONT_CORS || 'http://localhost:3000,http://localhost:3001'
const ADMIN_CORS = process.env.ADMIN_CORS || 'http://localhost:3000,http://localhost:3001'

// token
const JWT_SECRET = process.env.JWT_SECRET || 'supersecret'
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'supersecret-refresh'
const JWT_REGISTER_SECRET = process.env.JWT_REGISTER_SECRET || 'supersecret-register'
const PAGINATION_CURSOR_SECRET = process.env.PAGINATION_CURSOR_SECRET || 'ee6817060586c1ce35f8b9dfa4e0994fabb88d43c1c20a3c461aeaef00da2994' 

// db
const DATABASE_TYPE = process.env.DATABASE_TYPE || "postgres";
const DATABASE_LOGGING = process.env.DATABASE_LOGGING || false;
const DATABASE_URL = process.env.DATABASE_URL || "postgres://postgres:postgres@localhost/jvm-development";
const REDIS_URL = process.env.REDIS_URL;

// oauth
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '130885629649-vc2ktg2ir54j5tg3fljss86t3tak1oa2.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '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'

// upload
const UPLOAD_S3_ENDPOINT = process.env.NODE_ENV === 'development'
    ? 'http://localhost:4566'
    : process.env.UPLOAD_S3_ENDPOINT || undefined
const UPLOAD_S3_PRIVATE_BUCKET = process.env.UPLOAD_S3_PRIVATE_BUCKET
const UPLOAD_S3_PUBLIC_BUCKET = process.env.UPLOAD_S3_PUBLIC_BUCKET 
const UPLOAD_S3_REGION = process.env.UPLOAD_S3_REGION || 'ap-northeast-1'

// email
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || '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'
const EMAIL_FROM = process.env.EMAIL_FROM || 'luong.dao@pionero.io'
const EMAIL_FROM_NAME = process.env.EMAIL_FROM_NAME || 'luongdao'

const HTTP_LOGGING = process.env.HTTP_LOGGING === 'true'

/** @type {import('./src/types/globals').ConfigModule['projectConfig']} */
const projectConfig = {
     port: PORT,
     redis_url: REDIS_URL,
     database_type: DATABASE_TYPE,
     database_url: DATABASE_URL,
     database_logging: DATABASE_LOGGING, 
     http_logging: HTTP_LOGGING,
     front_cors: FRONT_CORS,
     admin_cors: ADMIN_CORS,
     jwt_secret: JWT_SECRET,
     jwt_refresh_secret: JWT_REFRESH_SECRET,
     jwt_register_secret: JWT_REGISTER_SECRET,
     pagination_cursor_secret: PAGINATION_CURSOR_SECRET, 
     oauth: {
       google: {
         google_client_id: GOOGLE_CLIENT_ID,
         google_client_secret: GOOGLE_CLIENT_SECRET,
       }
     },
     upload: {
       s3: {
        endpoint: UPLOAD_S3_ENDPOINT,
        private_bucket: UPLOAD_S3_PRIVATE_BUCKET,
        public_bucket: UPLOAD_S3_PUBLIC_BUCKET,
        region: UPLOAD_S3_REGION
       }
     },
     email: {
       sendgrid_api_key: SENDGRID_API_KEY,
       email_from: EMAIL_FROM,
       email_from_name: EMAIL_FROM_NAME
     }
}

/** @type {import('./src/types/globals').ConfigModule} */
module.exports = {
    projectConfig,
}