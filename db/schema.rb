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

ActiveRecord::Schema.define(version: 20151031165610) do

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

  create_table "clients", force: :cascade do |t|
    t.string   "first_name",     limit: 255,                           null: false
    t.string   "last_name",      limit: 255
    t.string   "title",          limit: 255
    t.string   "email",          limit: 255
    t.string   "phone",          limit: 18
    t.text     "biography",      limit: 65535
    t.string   "website_link",   limit: 255
    t.string   "facebook_link",  limit: 255
    t.string   "twitter_link",   limit: 255
    t.string   "instagram_link", limit: 255
    t.string   "youtube_link",   limit: 255
    t.string   "slug",           limit: 255,                           null: false
    t.string   "location",       limit: 255,   default: "Los Angeles", null: false
    t.datetime "created_at",                                           null: false
    t.datetime "updated_at",                                           null: false
  end

  create_table "news", force: :cascade do |t|
    t.string   "subject",    limit: 512,                  null: false
    t.text     "body",       limit: 65535,                null: false
    t.string   "location",   limit: 255
    t.boolean  "featured",                 default: true, null: false
    t.string   "slug",       limit: 255,                  null: false
    t.boolean  "published",                default: true, null: false
    t.datetime "created_at",                              null: false
    t.datetime "updated_at",                              null: false
  end

  create_table "newsletters", force: :cascade do |t|
    t.string   "email_address", limit: 255, null: false
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  create_table "staffs", force: :cascade do |t|
    t.string   "first_name", limit: 255,                           null: false
    t.string   "last_name",  limit: 255
    t.string   "email",      limit: 255,                           null: false
    t.string   "position",   limit: 255,                           null: false
    t.text     "biography",  limit: 65535
    t.string   "location",   limit: 255,   default: "Los Angeles", null: false
    t.string   "department", limit: 255
    t.string   "gender",     limit: 255,   default: "male",        null: false
    t.string   "slug",       limit: 255,                           null: false
    t.integer  "order",      limit: 4,     default: 0,             null: false
    t.datetime "created_at",                                       null: false
    t.datetime "updated_at",                                       null: false
  end

  add_foreign_key "client_resumes", "clients"
end
