(self.webpackChunkcom_dergoogler_mmrl_web=self.webpackChunkcom_dergoogler_mmrl_web||[]).push([[5740],{29560:e=>{function t(e){return e?"string"==typeof e?e:e.source:null}function c(...e){return e.map(e=>t(e)).join("")}e.exports=function(e){var n={className:"number",relevance:0,variants:[{begin:/([+-]+)?[\d]+_[\d_]+/},{begin:e.NUMBER_RE}]};const a=e.COMMENT();a.variants=[{begin:/;/,end:/$/},{begin:/#/,end:/$/}];var s={className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{begin:/\$\{(.*?)\}/}]},i={className:"literal",begin:/\bon|off|true|false|yes|no\b/},e={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:"'''",end:"'''",relevance:10},{begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'},{begin:"'",end:"'"}]},r={begin:/\[/,end:/\]/,contains:[a,i,s,e,n,"self"],relevance:0},l=c(l="("+[/[A-Za-z0-9_-]+/,/"(\\"|[^"])*"/,/'[^']*'/].map(e=>t(e)).join("|")+")","(\\s*\\.\\s*",l,")*",c("(?=",/\s*=\s*[^#\s]/,")"));return{name:"TOML, also INI",aliases:["toml"],case_insensitive:!0,illegal:/\S/,contains:[a,{className:"section",begin:/\[+/,end:/\]+/},{begin:l,className:"attr",starts:{end:/$/,contains:[a,r,i,s,e,n]}}]}}}}]);