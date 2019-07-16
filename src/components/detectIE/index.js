function msieversion() {
    const ua = window.navigator.userAgent;
    const msie = ua.indexOf("MSIE ");

    // If Internet Explorer, return version number
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
    } else {
        // If another browser, return 0
        console.log('Norm browser')
    }

    return false;
}

msieversion();