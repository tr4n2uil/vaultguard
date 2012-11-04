/**
 * @initialize VaultGuard
**/
var VaultGuard = {
	core : {
		service : {},
		workflow : {},
		helper : {},
		constant : {}
	}
};

function hex2str($hex) {
    var str = '';
    for (var i = 0; i < $hex.length; i += 2)
        str += String.fromCharCode(parseInt($hex.substr(i, 2), 16));
    return str;
}
