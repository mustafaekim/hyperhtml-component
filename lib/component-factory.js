import { wire } from "hyperhtml/esm";

import uuidv1 from "uuid/v1";


var notifier = (function () {

    var subscriber;

    function subscribe(f) {
        subscriber = f;
    }

    function notify() {
        if (subscriber)
            subscriber();
    }

    return {
        subscribe, notify
    }

})();


function ComponentFactory(builder, label) {

    function ComponentRenderer(keyObj, ...args) {
        let instance = ComponentRenderer.instances.get(keyObj);
        if (!instance) {
            instance = builder.call({
                template: wire(keyObj, `:${label}`)
                , notify: notifier.notify
                , id: uuidv1()
            }, ...args);
            ComponentRenderer.instances.set(keyObj, instance);
        }
        return instance.render();
    }

    ComponentRenderer.instances = new WeakMap();

    return ComponentRenderer;
}

export { ComponentFactory, notifier }