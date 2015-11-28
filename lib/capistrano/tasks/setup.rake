namespace :setup do

  desc "Build application front end"
  task :build_client_app do
    on roles(:app) do
      execute "cd #{release_path} && gulp build"
   end
  end

end
