export var getCurrency = function (currency) {
    var symbol = '';
    switch (currency) {
        case 'USD':
            symbol = '$';
            break;
        case 'NGN':
            symbol = '₦';
            break;
        case 'GBP':
            symbol = '£';
            break;
        default:
            symbol = '$';
            break;
    }
    return symbol;
};
