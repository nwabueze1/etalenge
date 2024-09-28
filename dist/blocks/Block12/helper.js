import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaFacebookF, FaTwitter, FaLinkedin, FaCopy } from "react-icons/fa";
export var getSocialMediaLinks = function (platform, _a, classes) {
    var slug = _a.slug, onCopyLink = _a.onCopyLink, feedBackText = _a.feedBackText;
    if (typeof window === "undefined")
        return null;
    var websiteLink = window.location.origin;
    var postLink = "".concat(websiteLink).concat(slug);
    switch (platform) {
        case "facebook":
            return (_jsx("a", { href: "https://www.facebook.com/sharer/sharer.php?u=".concat(postLink), className: classes.postLink, children: _jsx(FaFacebookF, { className: classes.icon }) }));
        case "twitter":
            return (_jsx("a", { href: "https://twitter.com/intent/tweet?url=".concat(postLink), className: classes.postLink, children: _jsx(FaTwitter, { className: classes.icon }) }));
        case "linkedin":
            return (_jsx("a", { href: "https://www.linkedin.com/shareArticle?mini=true&amp;url=".concat(postLink), className: classes.postLink, children: _jsx(FaLinkedin, { className: classes.icon }) }));
        case "copy":
            return (_jsxs("button", { className: classes.copyLinkButton, onClick: function () { return onCopyLink(slug); }, children: [_jsx(FaCopy, { className: classes.icon }), " ", _jsx("span", { children: feedBackText })] }));
        default:
            return null;
    }
};
