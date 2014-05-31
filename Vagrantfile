# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

# This development setup only requires you have Vagrant[1] and Virtualbox[2] installed and that
# teams, pledgeservice, and authservice are cloned in a sibling relationship
# to this repo.
#
# [1] http://www.vagrantup.com/
# [2] https://www.virtualbox.org/
#
# Run "vagrant up" and wait for the command to complete
# Run "vagrant plugin install vagrant-exec"
# You now have a virtual machine all set up to run each part of the MayOne
# platform! To run them all at once, do "vagrant exec /vagrant/start.sh"
# Access them at the following URLs:
# - Home page: http://127.0.0.1:4000
# - Teams: http://127.0.0.1:8080
# - Pledgeservice: http://127.0.0.1:8081
# - Authservice: http://127.0.0.1:8082
#
# To ssh into your new virtual machine, use "vagrant ssh"
# Inside the virtual machine, the projects are located in the following locations:
# - Home page: /vagrant
# - Teams: /teams
# - Pledgeservice: /pledgeservice
# - Authservice: /authservice
#
# Once ssh'd into the virtual machine you can run each project individually
# using the instructions given for that project. For an example, see this shell
# transcript:
#     [your_user@your_machine homepage_redesign]$ vagrant ssh
#     vagrant@precise64:~$ cd /vagrant
#     vagrant@precise64:/vagrant$ jekyll serve --watch --force_polling


Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box = "precise64"

  config.vm.network "forwarded_port", guest: 4000, host: 4000
  config.vm.network "forwarded_port", guest: 8080, host: 8080
  config.vm.network "forwarded_port", guest: 8081, host: 8081
  config.vm.network "forwarded_port", guest: 8082, host: 8082
  config.ssh.forward_agent = true

  config.vm.synced_folder "../teams", "/teams"
  config.vm.synced_folder "../pledgeservice", "/pledgeservice"
  config.vm.synced_folder "../authservice", "/authservice"

  config.vm.provision :shell, :path => "bootstrap.sh"
end
