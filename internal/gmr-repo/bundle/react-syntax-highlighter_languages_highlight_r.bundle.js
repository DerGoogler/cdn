(self.webpackChunkcom_dergoogler_mmrl_web=self.webpackChunkcom_dergoogler_mmrl_web||[]).push([[8176],{30806:e=>{function i(...e){return e.map(e=>{return e?"string"==typeof e?e:e.source:null}).join("")}e.exports=function(e){var a=/(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/;return{name:"R",illegal:/->/,keywords:{$pattern:a,keyword:"function if in break next repeat else for while",literal:"NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",built_in:"LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"},compilerExtensions:[(a,e)=>{if(a.beforeMatch){if(a.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},a);Object.keys(a).forEach(e=>{delete a[e]}),a.begin=i(n.beforeMatch,i("(?=",n.begin,")")),a.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},a.relevance=0,delete n.beforeMatch}}],contains:[e.COMMENT(/#'/,/$/,{contains:[{className:"doctag",begin:"@examples",starts:{contains:[{begin:/\n/},{begin:/#'\s*(?=@[a-zA-Z]+)/,endsParent:!0},{begin:/#'/,end:/$/,excludeBegin:!0}]}},{className:"doctag",begin:"@param",end:/$/,contains:[{className:"variable",variants:[{begin:a},{begin:/`(?:\\.|[^`\\])+`/}],endsParent:!0}]},{className:"doctag",begin:/@[a-zA-Z]+/},{className:"meta-keyword",begin:/\\[a-zA-Z]+/}]}),e.HASH_COMMENT_MODE,{className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\(/,end:/\)(-*)"/}),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\{/,end:/\}(-*)"/}),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\[/,end:/\](-*)"/}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\(/,end:/\)(-*)'/}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\{/,end:/\}(-*)'/}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\[/,end:/\](-*)'/}),{begin:'"',end:'"',relevance:0},{begin:"'",end:"'",relevance:0}]},{className:"number",relevance:0,beforeMatch:/([^a-zA-Z0-9._])/,variants:[{match:/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/},{match:/0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/},{match:/(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/}]},{begin:"%",end:"%"},{begin:i(/[a-zA-Z][a-zA-Z_0-9]*/,"\\s+<-\\s+")},{begin:"`",end:"`",contains:[{begin:/\\./}]}]}}}}]);