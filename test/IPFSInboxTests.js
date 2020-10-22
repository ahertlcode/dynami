const IPFSInbox = artifacts.require("./IPFSInbox.sol");

contract("IPFSInbox", accounts => {
    it("...should emit an event when you send an IPFS address.", 
    async () => {        
        // Wait for the contract to be deployed
        const ipfsInbox = await IPFSInbox.deployed();

        // Set a variable to false, and create an event listener
        // to set it to true if the event fires.   
        var eventEmitted = false;
        
        ipfsInbox.getPastEvents("ipfsSent", (err, res) => {
            if (!err) eventEmitted = true;
        });

        
          // Call the contract function which sends an IPFS address
        await ipfsInbox.sendIPFS(accounts[1], 
            "SampleAddress", { from: accounts[0] });        
        
        // Check if the variable is set to true by this time
        if (!eventEmitted) {
            assert.equal(eventEmitted, false, 
            "Sending an IPFS request does not emit an event.");
        } else {
            assert.equal(eventEmitted, true, 
            "Sending an IPFS request does emit an event.");
        }

        var gotEvent = false;

        ipfsInbox.getPastEvents("inboxResponse", (err, res) => {
            if (!err) gotEvent = true;
        });

        await ipfsInbox.checkInbox({from: accounts[0]});

        if (!gotEvent) {
            assert.equal(gotEvent, false, "Checking inbox does not emit an event");
        } else {
            assert.equal(gotEvent, true, "Checking inbox does emit an event");
        }
        
    });
});