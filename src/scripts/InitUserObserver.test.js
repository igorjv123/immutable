import {InitUserObservable, InitUserObserver} from './InitUserObserver'

describe('InitUserObservable', () => {
    let observable;
    const mockObserver = {
        notify: jasmine.createSpy('Observer.notify')
    };
    beforeAll(()=>{
        observable = new InitUserObservable();
    });

    it('should add new observer', function () {
        observable.subscribe(mockObserver)
        expect(observable._observers.length).toBe(1)
    });
    it('should call notify', function () {
        observable.subscribe(mockObserver)
        observable.notify(1)
        expect(mockObserver.notify).toHaveBeenCalled()
    });
});

describe('InitUserObserver', () => {
    let observer, mockObservable, behavior, newBehavior;
    beforeAll(() => {

        behavior = jasmine.createSpy('InitObserver.behavior')
        newBehavior = jasmine.createSpy('InitObserver.set behavior')

        observer = new InitUserObserver(behavior);
        mockObservable = {
            _observers: [observer],

        }
        observer.unsubscribe = (function() {
            this._observers.splice(0,1)
        }).bind(mockObservable)
    })

    it('should unsubscribe', function () {
        observer.unsubscribe()
        expect(mockObservable._observers.length).toBe(0)
    });

    it('should call behavior', function () {
        observer.notify()
        expect(observer._behavior).toHaveBeenCalled()
    });
    it('should set behavior', function () {
        observer.behavior = newBehavior
        observer.notify()
        expect(newBehavior).toHaveBeenCalled()
    });
})