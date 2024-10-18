/*jslint nomen:true*/
/*global chrome*/
/**
 * It just deletes the cache from the "beginning of time"
 *
 * @constructor
 */
var ClearCache = function () {
    "use strict";
};

ClearCache.prototype = {
  
  /**
   * Handle a success/failure callback from the `browsingData` API methods,
   * updating the UI appropriately.
   *
   * @private
   */
    handleCallback_: function () {
        "use strict";
        document.getElementById("status").innerHTML = "Clear Cache!";
        var success = document.createElement('div');
        success.classList.add('overlay');
        success.setAttribute('role', 'alert');
        success.textContent = 'Data has been cleared.';
        document.body.appendChild(success);

        setTimeout(function () { success.classList.add('visible'); window.close(); }, 10);

    },

  /**
   * When a user clicks the button, this method is called: it reads the current
   * state of `timeframe_` in order to pull a timeframe, then calls the clearing
   * method with appropriate arguments.
   *
   * @private
   */
    handleClick_: function () {
        "use strict";
        var removal_start = 0; //beginning of TIME

        document.getElementById("status").innerHTML = "Clearing...";

        chrome.browsingData.remove({ "since" : removal_start }, {
            // "cache": true,
            "cookies": true,
            "formData": true,
            // "indexedDB": true,
            "localStorage": true,
        }, this.handleCallback_.bind(this));
        sessionStorage.clear();
    }
};

document.addEventListener('DOMContentLoaded', function () {
    "use strict";
    window.CC = new ClearCache();
    window.CC.handleClick_();
});