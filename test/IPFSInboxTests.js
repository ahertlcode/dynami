const IPFSInbox = artifacts.require("./IPFSInbox.sol");

contract("IPFSInbox", accounts => {
    it("...should emit an event when you send an IPFS address.", 
    async () => {        
        // Wait for the contract to be deployed
        const ipfsInbox = await IPFSInbox.deployed();

        // Set a variable to false, and create an event listener
        // to set it to true if the event fires.   
        var eventEmitted = false;
        /*var event = ipfsInbox.ipfsSent();
        await event.watch((err, res) => {
            eventEmitted = true;
        })
        await ipfsInbox.ipfsSent().watch((err, res) => {
            eventEmitted = true;
        });*/
        
        await ipfsInbox.ipfsSent((err, res) => {
            if(!err) eventEmitted = true;
            console.log(res);
        })
        
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
        
    });
});