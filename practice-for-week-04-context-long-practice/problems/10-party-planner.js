class PartyPlanner {
    
        guestList = [];
    

    addToGuestList(name) {
        this.guestList.push(name);
    }

    throwParty() {
        if (this.guestList.length > 0) {
            const ro = this.guestList.reduce((soto, guest, index) => {
                return index === 0 ? `${soto} ${guest}` : `${soto} and ${guest}`;
            }, "Welcome to the party");
            return ro;
        } else {
            return "Gotta add people to the guest list";
        }
    }
}








/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}