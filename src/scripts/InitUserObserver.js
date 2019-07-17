class InitUserObservable {
    constructor(){
        this._observers = []
    }
    set addObserver(observer){
        this._observers.push(observer)
    }

    notify(msg) {
        this._observers.forEach((observer)=>{
            observer.notify(msg)
        })
    }

}

class InitUserObserver {
    constructor(behavior){
        this._behavior = behavior || null
    }

    notify(msg){
        this._behavior(msg)
    }
    set behavior(func) {
        this._behavior = func
    }
}

export default