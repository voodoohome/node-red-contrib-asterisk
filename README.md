# node-red-contrib-asterisk
This project is my first attempt to write a node-red module. The main purpose of this module is to open an AGI socket for so you can create an Asterisk extension which points to the AGI process.

## Installation
Just install this module in your node-RED configuration folder

    cd $HOME/.node-red
    npm install node-red-contrib-asterisk
Or globally:

    npm install -g node-red-contrib-asterisk

## Required setup steps in Asterisk

to make the plugin work you need to make sure you add an AGI trigger in the Asterisk ```/etc/asterisk/extension.conf```

    [default]
    ...
    exten => 5555,1,Agi(agi://192.168.2.42:14000/)
    ...

You need to make sure the address (in my case 192.168.2.42) matches with the node-red server address or hostname and the port fits to what you configure in the node controller configuration.

## Usage
Coming soon ..
