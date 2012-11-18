#	Ciphers Implementation
#
#	RC4 - http://www.joonis.de/content/RC4ARC4ARCFOURAlgorithmForPython
#

def xor( data, key ):
	i = 0
	out = []
	
	for char in data:
		out.append( chr( ord( char ) ^ ord( key[ i ] ) ) )
		i = ( i + 1 ) % len( key )
	
	return ''.join( out )

def rc4( data, key ):
	x = 0
	box = range( 256 )
	
	for i in range( 256 ):
		x = ( x + box[ i ] + ord( key[ i % len( key ) ] ) ) % 256
		box[ i ], box[ x ] = box[ x ], box[ i ]
	
	x = y = 0
	out = []
	for char in data:
		x = ( x + 1 ) % 256
		y = ( y + box[ x ] ) % 256
		box[ x ], box[ y ] = box[ y ], box[ x ]
		out.append( chr( ord( char ) ^ box[ ( box[ x ] + box[ y ] ) % 256 ] ) )
	
	return ''.join( out )
