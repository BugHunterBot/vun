editAreaLoader.load_syntax["cs"] = {
	'COMMENT_SINGLE' : {1 : '//'}
	,'COMMENT_MULTI' : {'/*' : '*/'}
	,'QUOTEMARKS' : {1: "'", 2: '"'}
	,'KEYWORD_CASE_SENSITIVE' : true
	,'KEYWORDS' : {
		'constants' : [
			'null', 'false', 'true'
		]
		,'types' : [
			'bool', 'byte', 'char', 'class', 'const', 'decimal', 'double', 'extern', 'fixed', 'float', 'int', 'interface', 'long', 'operator', 'short', 'static', 'string', 'struct', 'uint', 'ulong', 'ushort', 'void', 'volatile'
		]
		,'statements' : [
			'case', 'catch', 'continue', 'default', 'do', 'else', 'enum', 'finally', 'for', 'foreach', 'goto', 'if', 'sizeof', 'switch', 'this', 'throw', 'try', 'while'
		]
 		,'keywords' : [
			'abstract', 'as', 'base', 'break', 'checked', 'delegate', 'event', 'explicit', 'implicit', 'in', 'internal', 'is', 'lock', 'namespace', 'new', 'object', 'out', 'override', 'params', 'private', 'protected', 'public', 'readonly', 
			'ref', 'return', 'sbyte', 'sealed', 'stackalloc', 'typeof', 'unchecked', 'unsafe', 'using', 'virtual'
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
			,'types' : 'color: #A31515;'
			,'statements' : 'color: #48BDDF;'
			,'keywords' : 'color: #0000FF;'
		}
		,'OPERATORS' : 'color: #FF00FF;'
		,'DELIMITERS' : 'color: #0038E1;'
		,'REGEXPS' : {
			'precompiler' : 'color: #009900;'
			,'precompilerstring' : 'color: #994400;'
		}
	}
};
