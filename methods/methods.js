let restaurant = {
	name: "Dom's Burger Joint",
	guestsCapacity: 75,
	guestCount: 0,
	checkAvailability: function(partySize) {
		let seatsLeft = this.guestsCapacity - this.guestCount
		return partySize <= seatsLeft
	 },
	 seatParty: function(partySize) {
		 this.guestCount = this.guestCount + partySize
	 },
	 removeParty: function(partySize) {
		this.guestCount = this.guestsCapacity - partySize
	 }
}

/*
seatParty = partySize + guestCount
removeParty = partySize - guestCount
*/
restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(12)
console.log(restaurant.checkAvailability(4))



