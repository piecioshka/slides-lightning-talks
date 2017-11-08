interface MobileInterface {
    screen: string;
    size: {
        width: number;
        height: number;
    };
    callMe: CallFunction
}

interface CallFunction {
    (now: number): string
}

abstract class Mobile {
    screen: 'retina';
    size: {
        width: 10;
        height: 5;
    };
}

class iPhone extends Mobile implements MobileInterface {
    callMe(time: number) {
        return 'callMe-' + time;
    };
}

const myPhone = new iPhone();
const number = myPhone.callMe(Date.now());
console.log('phone number:', number);
