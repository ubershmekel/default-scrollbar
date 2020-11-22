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
                if (!rule.selectorText) {
                    continue;
                }
                if (rule.selectorText.indexOf("::-webkit-scrollbar") >= 0) {
                    console.log("deleting scrollbar css rule at", sheet.href);
                    console.debug("css rule deleted is", rule);
                    sheet.deleteRule(i--);
                } else if (rule.selectorText.indexOf("scrollbar") >= 0) {
                    // Github has some classes that are called "scrollbar"
                    // that if we delete them will break the file edit page.
                    // So this section is an attempt to debug similar cases if
                    // they arise.
                    console.debug("fishy scrollbar selector rule, but not deleting", rule);
                }
            }
        } catch (e) {
            console.debug("Can't read the css rules of: " + sheet.href, e);
            failedSheets[sheet.href] = true;
        }
    };
}

setInterval(getBackToDefaultScrollbars, 2000);
