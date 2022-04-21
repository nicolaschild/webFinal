class Visitor {
    //Visitor object to hold all of the form information
    constructor(id, first, last, address, city, state, zip, email, phone, referalButtons, comment){
            this.id = id;
            this.first = first;
            this.last = last;
            this.address = address;
            this.city = city;
            this.state = state;
            this.zip = zip;
            this.email = email;
            this.phone = phone;
            //Going to be an array with bool values
            this.source = referalButtons;
            this.comment = comment;
    }

    get fullName() {
        //Method to get the full name
        return `${this.first} ${this.last}`;
    }

    get fullAddress() {
        //Method to get the full address
        return `${this.address}, ${this.city}, ${this.state}, ${this.zip}`;
    }
}

//Global array of visitor objects
let visitors = [];

function modelAddVisitor(visitor) {
    //Add visitor instance to global visitor array
    visitors.push(visitor);
}

function modelDeleteVisitor(id) {
    //Removes visitor instance from global visitor array given an ID
    for (let i = 0; i < visitors.length; i++) {
        if (visitors[i].id == id) {
            visitors.pop(i);
        }
    }
}

function findVisitor(id) {
    //Removes visitor instance with given ID from array
    //Linear approach of time complexity (n)
    for (let i = 0; i < visitors.length; i++) {
        if (visitors[i].id == id) {
            return visitors[i];
        }
    }
}

function findVisitorIndex(id) {
    //Returns the index of an instance with the specified ID
    for (let i = 0; i < visitors.length; i++) {
        if (visitors[i].id == id) {
            return i;
        }
    }
}

// function modelUpdateVisitor(visitor) {
//  Uncomment if you decide to do extra credit
// }

