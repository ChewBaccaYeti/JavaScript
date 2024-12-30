function ask(question, yes, no) {
    if (confirm(question)) {
        yes()
    } else {
        no()
    }
};

function Yes() {
    alert('Yes')
};

function No() {
    alert('No')
};

ask('Are you agree?', Yes, No);

let age = prompt('How old are you?', 18);

let welcome;

if (age < 18) {
    welcome = function deny() {
        alert('You are too young for this sh!t.')
    }
} else {
    welcome = function getIt() {
        alert('Damn boy, get it!')
    }
};

welcome();

let blablarism = (age < 18) ? function () { alert('Wazzup!!!') } : function () { alert('How are you, sir?') };

blablarism();