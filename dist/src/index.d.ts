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
declare function delegate($container: HTMLElement, selector: string, eType: String, callback: Function, useCapture?: boolean, once?: boolean): {
    delegate: Function;
    undelegate: Function;
} | void;
export { delegate };
