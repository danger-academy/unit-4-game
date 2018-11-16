// Global variables
var baseAttack = 0; // original attack strength
var player; // holds the player Object
var defender; // holds the current defender Object
var charArray = []; // array that stores the game characters (Objects)
var playerSelected = false; // flag to mark if we picked a player yet
var defenderSelected = false; // flag to mark if we picked a defender


// Character build
function Character(name, hp, ap, counter, pic) {
    this.name = name;
    this.healthPoints = hp;
    this.attackPower = ap;
    this.counterAttackPower = counter;
    this.pic = pic;
}


// Increase the attack strength (this attack strength + original attack strength)
Character.prototype.increaseAttack = function () {
    this.attackPower += baseAttack;
};

// Performs an attack
Character.prototype.attack = function (Obj) {
    Obj.healthPoints -= this.attackPower;
    $("#msg").html("You out-coded " +
        Obj.name + "for " + this.attackPower + " developer points.");
    this.increaseAttack();
};

// Performs a counter attack
Character.prototype.counterAttack = function (Obj) {
    Obj.healthPoints -= this.counterAttackPower;
    $("#msg").append("<br>" + this.name + " counter-coded you for " + this.counterAttackPower + " developer points.");
};


// Initialize all the characters
function initCharacters() {
    var tom = new Character("Tom", 200, 30, 25, "./assets/images/tom.PNG");
    var andrew = new Character("Andrew", 160, 40, 20, "./assets/images/andrew.PNG");
    var jj = new Character("JJ", 150, 25, 10, "./assets/images/jj.PNG");
    var byron = new Character("Byron", 150, 20, 15, "./assets/images/byron.PNG");
    var tomr = new Character("Tom R", 130, 20, 10, ".assets/images/tomr.jpg" );
    charArray.push(tom, andrew, jj, byron, tomr);
}

// "Save" the original attack value
function setBaseAttack(Obj) {
    baseAttack = Obj.attackPower;
}

// Checks if character is alive
function isAlive(Obj) {
    if (Obj.healthPoints > 0) {
        return true;
    }
    return false;
}

// Checks if the player has won
function isWinner() {
    if (charArray.length == 0 && player.healthPoints > 0)
        return true;
    else return false;
}

// Create the character cards onscreen


// Update the characters pictures location on the screen (move them between divs)


// plays audio file (.mp3)



// Change the view from the first screen to the second screen




    // Stores the defender the user has clicked on in the defender variable and removes it from the charArray
    
    
    // Stores the character the user has clicked on in the player variable and removes it from charArray
    



// The attack button functionality


// EXECUTE

