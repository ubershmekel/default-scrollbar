const failedSheets = {};

function getBackToDefaultScrollbars() {
    // https://superuser.com/questions/380629/is-there-a-way-to-disable-custom-webkit-scrollbars/1585452#1585452

    for (var sheetI = 0; sheetI < document.styleSheets.length; ++sheetI) {
        var sheet = document.styleSheets[sheetI];
        if (failedSheets[sheet.href]) {
            continue;
        }
        try {
            var ruleSet = sheet.rules || sheet.cssRules;
            for (var i = 0; i < ruleSet.length; ++i) {
                var rule = ruleSet[i];
                if (/scrollbar/.test(rule.selectorText)) {
                    console.log("deleting scrollbar css rule at", sheet.href);
                    sheet.deleteRule(i--);
                }
            }
        } catch (e) {
            console.warn("Can't read the css rules of: " + sheet.href, e);
            failedSheets[sheet.href] = true;
        }
    };
}

setInterval(getBackToDefaultScrollbars, 2000);
