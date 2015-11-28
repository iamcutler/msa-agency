namespace :setup do

  desc "Build application front end"
  task :build_client_app do
    on roles(:app) do
      execute "rm -rf #{release_path}/gulp/tasks/test.js"
      execute "rm -rf #{release_path}/gulp/tasks/watch.js"
      execute "cd #{release_path} && gulp build"
   end
  end

end
