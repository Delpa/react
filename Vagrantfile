require 'json'
require 'yaml'

VAGRANTFILE_API_VERSION = "2"
confDir = $confDir ||= File.expand_path("~/.homestead")

homesteadYamlPath = "Homestead/Homestead.yaml"
homesteadJsonPath = "Homestead/Homestead.json"
afterScriptPath = "Homestead/after.sh"
aliasesPath = "Homestead/aliases"

require File.expand_path('~/Homestead/scripts/homestead.rb')

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
    if File.exists? aliasesPath then
        config.vm.provision "file", source: aliasesPath, destination: "~/.bash_aliases"
    end

    if File.exists? homesteadYamlPath then
        Homestead.configure(config, YAML::load(File.read(homesteadYamlPath)), "Project"+File.basename(Dir.getwd))
    elsif File.exists? homesteadJsonPath then
        Homestead.configure(config, JSON.parse(File.read(homesteadJsonPath)), "Project"+File.basename(Dir.getwd))
    end

    if File.exists? afterScriptPath then
        config.vm.provision "shell", path: afterScriptPath
    end
end