/**
 * This is a test
 **/


module.exports = function(RED) {

  var aio = require('asterisk.io'),
    agi = null;

  function AsteriskControllerNode(config) {
    console.log("AsteriskControllerNode", config);
    RED.nodes.createNode(this, config);

    console.log("start service");

    agi = aio.agi(14000); // port and host
    // if host is missing then
    // '0.0.0.0' is used as host
    agi.on('error', function(err) {
      throw err;
    });

    agi.on('listening', function() {
      console.log('listening on port 14000');
    });

    agi.on('close', function() {
      console.log('close');
    });

    console.log("service started");


  }
  RED.nodes.registerType("asterisk-controller", AsteriskControllerNode);


  function AsteriskInputNode(config) {
    console.log("AsteriskInputNode", config);
    RED.nodes.createNode(this, config);

    this.on("input", function(msg) {
      if (msg != null) {
        console.log(msg);
      };
    });

  }
  RED.nodes.registerType("asterisk-in", AsteriskInputNode);




}
