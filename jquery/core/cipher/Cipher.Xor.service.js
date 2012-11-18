/** *	@service CipherXor *	@desc Applies XOR Cipher to data using key * *	@param data object [memory] optional default '' *	@param key string [memory] optional default VaultGuard.core.constant.accesskey * *	@return result string [memory] * *	@reference http://codecraft.proboards.com/index.cgi?board=web&action=display&thread=1137 *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/VaultGuard.core.service.CipherXor = {	input : function(){		return {			optional : { 				data : '', 				key : VaultGuard.core.constant.accesskey			}		};	},		run : function($memory){		var $result = '';		if($memory['key']){			var $data = $memory['data'];			var $key = $memory['key'];			var i, j = 0;						for(i = j = 0; i < $data.length; i++){				$result += String.fromCharCode($data.charCodeAt(i) ^ $key.charCodeAt(j));				j = (j + 1) % $key.length;			}		}			$memory['result'] = $result;		$memory['valid'] = true;		return $memory;	},		output : function(){		return ['result'];	}};