# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160121025517) do

  create_table "active_admin_comments", force: :cascade do |t|
    t.string   "namespace",     limit: 255
    t.text     "body",          limit: 65535
    t.string   "resource_id",   limit: 255,   null: false
    t.string   "resource_type", limit: 255,   null: false
    t.integer  "author_id",     limit: 4
    t.string   "author_type",   limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "active_admin_comments", ["author_type", "author_id"], name: "index_active_admin_comments_on_author_type_and_author_id", using: :btree
  add_index "active_admin_comments", ["namespace"], name: "index_active_admin_comments_on_namespace", using: :btree
  add_index "active_admin_comments", ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource_type_and_resource_id", using: :btree

  create_table "admin_users", force: :cascade do |t|
    t.string   "email",                  limit: 255, default: "", null: false
    t.string   "encrypted_password",     limit: 255, default: "", null: false
    t.string   "reset_password_token",   limit: 255
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          limit: 4,   default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip",     limit: 255
    t.string   "last_sign_in_ip",        limit: 255
    t.datetime "created_at",                                      null: false
    t.datetime "updated_at",                                      null: false
  end

  add_index "admin_users", ["email"], name: "index_admin_users_on_email", unique: true, using: :btree
  add_index "admin_users", ["reset_password_token"], name: "index_admin_users_on_reset_password_token", unique: true, using: :btree

  create_table "affiliates", force: :cascade do |t|
    t.string   "name",               limit: 255,               null: false
    t.string   "url",                limit: 255
    t.text     "description",        limit: 65535
    t.string   "image_file_name",    limit: 255
    t.string   "image_content_type", limit: 255
    t.integer  "image_file_size",    limit: 4
    t.datetime "image_updated_at"
    t.integer  "order",              limit: 4,     default: 0, null: false
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
  end

  create_table "client_categories", force: :cascade do |t|
    t.integer  "client_id",  limit: 4
    t.string   "category",   limit: 255, null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "client_categories", ["client_id"], name: "index_client_categories_on_client_id", using: :btree

  create_table "client_photos", force: :cascade do |t|
    t.integer  "client_id",          limit: 4
    t.string   "image_file_name",    limit: 255
    t.string   "image_content_type", limit: 255
    t.integer  "image_file_size",    limit: 4
    t.datetime "image_updated_at"
    t.boolean  "cover",                          default: false, null: false
    t.boolean  "default",                        default: false, null: false
    t.string   "caption",            limit: 255
    t.integer  "order",              limit: 4
    t.datetime "created_at",                                     null: false
    t.datetime "updated_at",                                     null: false
  end

  add_index "client_photos", ["client_id"], name: "index_client_photos_on_client_id", using: :btree

  create_table "client_presses", force: :cascade do |t|
    t.integer  "client_id",          limit: 4
    t.string   "image_file_name",    limit: 255
    t.string   "image_content_type", limit: 255
    t.integer  "image_file_size",    limit: 4
    t.datetime "image_updated_at"
    t.string   "caption",            limit: 255
    t.integer  "order",              limit: 4,   default: 0, null: false
    t.datetime "created_at",                                 null: false
    t.datetime "updated_at",                                 null: false
  end

  add_index "client_presses", ["client_id"], name: "index_client_presses_on_client_id", using: :btree

  create_table "client_reels", force: :cascade do |t|
    t.integer  "client_id",  limit: 4
    t.string   "video_id",   limit: 255,             null: false
    t.string   "title",      limit: 255
    t.integer  "video_type", limit: 4,   default: 0, null: false
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
  end

  add_index "client_reels", ["client_id"], name: "index_client_reels_on_client_id", using: :btree

  create_table "client_resumes", force: :cascade do |t|
    t.integer  "client_id",  limit: 4
    t.string   "project",    limit: 255, null: false
    t.string   "credit",     limit: 255
    t.string   "company",    limit: 255
    t.string   "job_type",   limit: 255, null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "client_resumes", ["client_id"], name: "index_client_resumes_on_client_id", using: :btree

  create_table "client_videos", force: :cascade do |t|
    t.integer  "client_id",  limit: 4
    t.string   "video_id",   limit: 255,             null: false
    t.string   "title",      limit: 255
    t.integer  "video_type", limit: 4,   default: 0, null: false
    t.integer  "order",      limit: 4,   default: 0, null: false
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
  end

  add_index "client_videos", ["client_id"], name: "index_client_videos_on_client_id", using: :btree

  create_table "clients", force: :cascade do |t|
    t.string   "first_name",       limit: 255,                           null: false
    t.string   "last_name",        limit: 255
    t.string   "title",            limit: 255
    t.string   "email",            limit: 255
    t.string   "phone",            limit: 18
    t.text     "biography",        limit: 65535
    t.string   "website_link",     limit: 255
    t.string   "facebook_link",    limit: 255
    t.string   "twitter_link",     limit: 255
    t.string   "instagram_link",   limit: 255
    t.string   "youtube_link",     limit: 255
    t.boolean  "basic",                          default: false,         null: false
    t.boolean  "la_casting",                     default: false,         null: false
    t.string   "la_casting_url",   limit: 255
    t.integer  "default_image_id", limit: 4
    t.integer  "cover_image_id",   limit: 4
    t.string   "slug",             limit: 255,                           null: false
    t.boolean  "search_hide",                    default: false,         null: false
    t.boolean  "page_hide",                      default: false,         null: false
    t.string   "location",         limit: 255,   default: "Los Angeles", null: false
    t.datetime "created_at",                                             null: false
    t.datetime "updated_at",                                             null: false
  end

  create_table "company", force: :cascade do |t|
    t.string   "reel_id",    limit: 255
    t.integer  "reel_type",  limit: 4
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "faqs", force: :cascade do |t|
    t.text     "question",   limit: 65535,             null: false
    t.text     "answer",     limit: 65535,             null: false
    t.integer  "order",      limit: 4,     default: 0, null: false
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
  end

  create_table "news", force: :cascade do |t|
    t.string   "subject",            limit: 512,                  null: false
    t.text     "body",               limit: 65535,                null: false
    t.string   "location",           limit: 255
    t.boolean  "featured",                         default: true, null: false
    t.string   "image_file_name",    limit: 255
    t.string   "image_content_type", limit: 255
    t.integer  "image_file_size",    limit: 4
    t.datetime "image_updated_at"
    t.string   "slug",               limit: 255,                  null: false
    t.boolean  "published",                        default: true, null: false
    t.datetime "created_at",                                      null: false
    t.datetime "updated_at",                                      null: false
  end

  create_table "newsletters", force: :cascade do |t|
    t.string   "email_address", limit: 255, null: false
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  create_table "page_slides", force: :cascade do |t|
    t.string   "image_file_name",    limit: 255,                  null: false
    t.string   "image_content_type", limit: 255,                  null: false
    t.integer  "image_file_size",    limit: 4,                    null: false
    t.datetime "image_updated_at",                                null: false
    t.string   "media_source",       limit: 255
    t.integer  "media_type",         limit: 4
    t.string   "caption",            limit: 255
    t.string   "link",               limit: 255
    t.integer  "link_target",        limit: 4,   default: 0
    t.string   "section",            limit: 255, default: "home", null: false
    t.integer  "slide_type",         limit: 4,   default: 0,      null: false
    t.integer  "order",              limit: 4,   default: 1,      null: false
    t.datetime "created_at",                                      null: false
    t.datetime "updated_at",                                      null: false
  end

  create_table "staff_photos", force: :cascade do |t|
    t.integer  "staff_id",           limit: 4
    t.string   "image_file_name",    limit: 255
    t.string   "image_content_type", limit: 255
    t.integer  "image_file_size",    limit: 4
    t.datetime "image_updated_at"
    t.string   "caption",            limit: 255
    t.boolean  "cover",                          default: false, null: false
    t.boolean  "default",                        default: false, null: false
    t.integer  "order",              limit: 4,   default: 0,     null: false
    t.datetime "created_at",                                     null: false
    t.datetime "updated_at",                                     null: false
  end

  add_index "staff_photos", ["staff_id"], name: "index_staff_photos_on_staff_id", using: :btree

  create_table "staff_videos", force: :cascade do |t|
    t.integer  "staff_id",   limit: 4
    t.string   "video_id",   limit: 255,             null: false
    t.string   "title",      limit: 255
    t.integer  "video_type", limit: 4,   default: 0, null: false
    t.integer  "order",      limit: 4,   default: 0, null: false
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
  end

  add_index "staff_videos", ["staff_id"], name: "index_staff_videos_on_staff_id", using: :btree

  create_table "staffs", force: :cascade do |t|
    t.string   "first_name",       limit: 255,                           null: false
    t.string   "last_name",        limit: 255
    t.string   "email",            limit: 255,                           null: false
    t.string   "position",         limit: 255,                           null: false
    t.text     "biography",        limit: 65535
    t.string   "location",         limit: 255,   default: "Los Angeles", null: false
    t.string   "department",       limit: 255
    t.integer  "default_image_id", limit: 4
    t.integer  "cover_image_id",   limit: 4
    t.string   "gender",           limit: 255,   default: "male",        null: false
    t.string   "slug",             limit: 255,                           null: false
    t.integer  "order",            limit: 4,     default: 0,             null: false
    t.datetime "created_at",                                             null: false
    t.datetime "updated_at",                                             null: false
  end

  add_foreign_key "client_categories", "clients"
  add_foreign_key "client_photos", "clients"
  add_foreign_key "client_presses", "clients"
  add_foreign_key "client_reels", "clients"
  add_foreign_key "client_resumes", "clients"
  add_foreign_key "client_videos", "clients"
  add_foreign_key "staff_photos", "staffs"
  add_foreign_key "staff_videos", "staffs"
end
