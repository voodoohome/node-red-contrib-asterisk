/**
 * This is a test
 **/


module.exports = function(RED) {

    function AsteriskControllerNode(config) {
        RED.nodes.createNode(this,config);

    }
    RED.nodes.registerType("asterisk-controller",AsteriskControllerNode);


    function AsteriskInputNode(config) {
        RED.nodes.createNode(this,config);

        this.on("input", function(msg) {
            if (msg != null) {
              console.log(msg);
            };
        });

    }
    RED.nodes.registerType("asterisk-in",AsteriskInputNode);




}
