// SPDX-License-Identifier: GPL-3.0-or-later

/**
 * The HTML h1 element responsible for
 * displaying the current time.
 * @type {?HTMLElement}
 */
const clockText = document.getElementById('clock-text');

/**
 * Returns the specified time formatted with
 * HH:MM:SS format.
 *
 * @param {Date} date The date to format.
 * @returns {string} The formatted time.
 */
function getFormattedTime(date) {
    return date.toLocaleTimeString('en-US', {
        hour12: false,
    });
}

/**
 * Updates the {@link clockText} element with
 * the current time in HH:MM:SS format.
 *
 * @returns {void}
 */
function updateTime() {
    clockText.innerText = getFormattedTime(new Date());
}

window.onload = () => {
    updateTime();
    setInterval(updateTime, 1000);
};
