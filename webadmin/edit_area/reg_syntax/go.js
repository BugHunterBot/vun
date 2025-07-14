editAreaLoader.load_syntax["go"] = {
	'COMMENT_SINGLE' : {1 : '//'}
	,'COMMENT_MULTI' : {'/*' : '*/'}
	,'QUOTEMARKS' : {1: "'", 2: '"'}
	,'KEYWORD_CASE_SENSITIVE' : true
	,'KEYWORDS' : {
		'constants' : [
			'nil', 'false', 'std', 'stdin', 'stdout', 'stderr','true'
		]
		,'types' : [
			"bool", "byte", "complex", "complex64", "complex128", "float", "float32", "float64", "int", "int8", "int16", "int32", "int64", "string", "uint", "uint8", "uint16", "uint32", "uint64", "uintptr"
		]
		,'statements' : [
			'package', 'go', 'else', 'enum', 'for', 'goto', 'if', 'sizeof', 'switch', 'this', 'throw', 'try', 'while'
		]
 		,'keywords' : [
			"break", "case", "chan", "const", "continue", "default", "defer", "else", "fallthrough", "func", "handle", "import", "interface", "load", "make", "map", "new", "process", "range", "return", "select", "struct", "type", "var"
		]
		,'functions' : [
			"append", "cap", "close", "closed", "cmplx", "copy", "imag", "len", "make", "new", "panic", "print", "println", "real", "recover", "4s", "adler32", "aes", "archive", "ascii85", "asn1", "ast", "av", "base64", "big", "bignum", "binary", "block", "bufio", "bytes", "compress", "container", "crc32", "crypto", "datafmt", "debug", "doc", "draw", "dwarf", "ebnf", "elf", "encoding", "eval", "exec", "exp", "expvar", "flag", "flate", "fmt", "git85", "go", "gob", "gosym", "gzip", "hash", "heap", "hex", "hmac", "http", "image", "io", "iotest", "iterable", "json", "list", "log", "macho", "malloc", "math", "md5", "net", "ogle", "once", "os", "parser", "patch", "path", "pem", "png", "printer", "proc", "quick", "rand", "rc4", "reflect", "regexp", "ring", "rpc", "rsa", "runtime", "scanner", "script", "sha1", "spacewar", "srpc", "strconv", "strings", "sort", "subtle", "sync", "syscall", "tabwriter", "tar", "template", "testing", "time", "tls", "token", "unicode", "unsafe", "utf8", "vector", "x509", "xml", "zlib"
		]
	}
	,'OPERATORS' :[
		'+', '-', '/', '*', '=', '<', '>', '%', '!', '?', ':', '&'
	]
	,'DELIMITERS' :[
		'(', ')', '[', ']', '{', '}'
	]
	,'REGEXPS' : {
		'precompiler' : {
			'search' : '()(#[^\r\n]*)()'
			,'class' : 'precompiler'
			,'modifiers' : 'g'
			,'execute' : 'before'
		}
/*		,'precompilerstring' : {
			'search' : '(#[\t ]*include[\t ]*)([^\r\n]*)([^\r\n]*[\r\n])'
			,'class' : 'precompilerstring'
			,'modifiers' : 'g'
			,'execute' : 'before'
		}*/
	}
	,'STYLES' : {
		'COMMENTS': 'color: #AAAAAA;'
		,'QUOTESMARKS': 'color: #6381F8;'
		,'KEYWORDS' : {
			'constants' : 'color: #EE0000;'
			,'types' : 'color: #0000EE;'
			,'functions' : 'color: #0040FD;'
			,'statements' : 'color: #60CA00;'
			,'keywords' : 'color: #48BDDF;'
		}
		,'OPERATORS' : 'color: #FF00FF;'
		,'DELIMITERS' : 'color: #0038E1;'
		,'REGEXPS' : {
			'precompiler' : 'color: #009900;'
			,'precompilerstring' : 'color: #994400;'
		}
	}
};
