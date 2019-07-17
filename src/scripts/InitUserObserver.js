export class InitUserObservable {
    constructor() {
        this._observers = []
    }

    addObserver(observer) {
        this._observers.push(observer);
    }

    notify(msg) {
        console.log(msg)
        this._observers.forEach((observer) => {
            observer.notify(msg);
        })
    }

}

export class InitUserObserver {
    constructor(behavior) {
        this._behavior = behavior || null;
    }

    notify(msg) {
        this._behavior(msg)
    }

    set behavior(func) {
        this._behavior = func;
    }
}

