var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { useState } from "react";
import { parse } from "node-html-parser";
export var useCopyTextToClipBoard = function () {
    var _a = __read(useState("copy link"), 2), feedBackText = _a[0], setFeeBackText = _a[1];
    var copyToClipboard = function (slug) {
        var _a;
        if (typeof window === "undefined")
            return;
        var baseUrl = location.origin;
        var postLink = "".concat(baseUrl, "/blog").concat(slug);
        var type = "text/plain";
        var blob = new Blob([postLink], { type: type });
        var data = [new ClipboardItem((_a = {}, _a[type] = blob, _a))];
        navigator.clipboard.write(data);
        setFeeBackText("copied");
        setTimeout(function () {
            setFeeBackText("copy link");
        }, 5000);
    };
    return {
        feedBackText: feedBackText,
        copyToClipboard: copyToClipboard,
    };
};
export var useCalculateMinutesRead = function () {
    var extractTextFromHtml = function (html) {
        return parse(html !== null && html !== void 0 ? html : "<p></p>").textContent;
    };
    var calculateMinutesRead = function (content) {
        var _a;
        var wordCount = ((_a = extractTextFromHtml(content)) !== null && _a !== void 0 ? _a : content).split(/\s+/).length;
        var minutesRead = Math.ceil(wordCount / 250);
        return minutesRead <= 1 ? "1 minute" : minutesRead + " minutes";
    };
    return calculateMinutesRead;
};
