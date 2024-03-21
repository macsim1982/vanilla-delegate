/**
 * Simple function check.
 *
 * @see https://stackoverflow.com/questions/5999998/how-can-i-check-if-a-javascript-variable-is-function-type
 * @param {any} fn
 * @returns {boolean}
 */
function isFunction(fn: Function): boolean {
    return !!(fn && typeof fn === 'function');
}

function isString(str: String): boolean {
    return typeof str === 'string';
}

/**
 * Check is DOM Element
 * https://stackoverflow.com/questions/9979172/difference-between-node-object-and-element-object
 *
 * @param {any} el elementToCheck
 * @returns {boolean}
 */
function isElement(el: HTMLElement): boolean {
    return !!(typeof HTMLElement === 'object' ? el instanceof HTMLElement : el && typeof el === 'object' && el !== null && el.nodeType === 1 && typeof el.nodeName === 'string');
}


interface DelegateEvent extends Event {
    delegateTarget: Element,
    once: boolean
}
/**
 * Bind given callback onto existing and upcoming elements matching the given
 * selector, for events of type eType.
 * Use e.delegateTarget instead of e.target in the callback function to get the HTMLElement representative of selector
 *
 * @param {HTMLElement} $container HTMLElement into which to apply Selector
 * @param {String} selector Selector matching HTMLElements onto which the callback will be bind
 * @param {String} eType String event or list of events seperated by , (ex: 'touchstart,touchmove,touchend')
 * @param {Function} callback Function to execute when catching the event
 * @param {boolean} useCapture Boolean that dertemine if the event must use capture or not (default: false)
 * @param {boolean} once Boolean that dertemine if the event must trigger only once
 * @returns {{delegate: Function, undelegate: Function}|void}
 */
function delegate($container: HTMLElement, selector: string, eType: String, callback: Function, useCapture = false, once = false): {delegate: Function, undelegate: Function} | void {
    if (!isElement($container) || !isString(selector) || !isString(eType) || !isFunction(callback)) {
        console.error('Delegate Event', 'invalid parameter', $container, selector, eType, callback);
        return;
    }

    function switchEvent($container, eventList, eventHandler, useCapture, remove) {
        eventList.split(',').forEach(event => {
            $container[`${remove ? 'remove' : 'add'}EventListener`](event.trim(), eventHandler, useCapture);
        });
    }

    function eventHandler(e: DelegateEvent) {
        // get target element
        const eventTarget: Element = e.target as Element;
        const currentTarget = e.currentTarget as Element;
        const target = eventTarget.matches(selector) ? e.target : eventTarget.closest(selector);

        // prevent to access element outside of parent
        if (eventTarget && currentTarget.contains(eventTarget)) {
            e.delegateTarget = eventTarget;
            callback.call($container, e);
            e.once = once;

            // Use event once and remove event handler
            if (once) {
                undelegate(); // eslint-disable-line no-use-before-define
            }
        }
    }

    function delegate() {
        switchEvent($container, eType, eventHandler, useCapture, false);
    }

    function undelegate() {
        switchEvent($container, eType, eventHandler, useCapture, true);
    }

    delegate();

    return {
        delegate,
        undelegate
    };
}

export { delegate };
