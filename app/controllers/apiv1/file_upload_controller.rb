require 'aws-sdk'

class Apiv1::FileUploadController < ApplicationController
    protect_from_forgery with: :null_session

    def upload_file_to_s3
        status = true
        error_msg = ''
        file_path = ''

        begin
            file_path = "submissions/#{DateTime.now.to_date}/#{params[:file].original_filename}"

            s3 = Aws::S3::Resource.new(
                    region: S3_CONFIG['region'],
                    access_key_id: S3_CONFIG['access_key_id'],
                    secret_access_key: S3_CONFIG['secret_access_key']
                )

            obj = s3.bucket(S3_CONFIG['bucket']).object(file_path)
            obj.upload_file(params[:file].tempfile)
        rescue Exception => e
            logger.info e

            status = false
            error_msg = e.message
        end

        render json: { success: status, error: error_msg, file_path: "https://#{S3_CONFIG['bucket']}.s3.amazonaws.com/#{file_path}" }
    end
end
