class SuperMath {
    check(obj) {
        let X = parseInt(obj.X);
        let Y = parseInt(obj.Y);
        let znak = obj.znak;
        let result = 0;
        let operation = prompt(`Do you want to do this operation ${obj.znak}?`, 'Yes');
        if(operation === 'Yes') {
            switch (znak) {
                case '+':
                    return alert(X + Y);
                    break;
                case '-':
                    return alert(X - Y);
                    break;
                case '/':
                    return alert(X / Y);
                    break;
                case '*':
                    return alert(X * Y);
                    break;
                case '%':
                    return alert(X % Y);
                    break;
            }
        } else {
            znak = this.input();
            X = obj.X;
            Y = obj.Y;
            switch (znak) {
                case '+':
                    return alert(X + Y);
                    break;
                case '-':
                    return alert(X - Y);
                    break;
                case '/':
                    return alert(X / Y);
                    break;
                case '*':
                    return alert(X * Y);
                    break;
                case '%':
                    return alert(X % Y);
                    break;
            }
        }
    }

    input() {
        let znak = prompt('Enter new operation (+, -, /, *, %): ', '+');
        obj.X = +prompt('Enter new X number', '1');
        obj.Y = +prompt('Enter new Y number', '1');
        if (znak === '+' || znak === '-' || znak === '/' || znak === '*' || znak === '%') {
            obj.znak = znak;
            return znak;
        } else {
            alert('Error. Enter the right option.');
            return this.input();
        }
    }

}

let obj = {X:12, Y:3, znak: '/'};
p = new SuperMath();
p.check(obj);


