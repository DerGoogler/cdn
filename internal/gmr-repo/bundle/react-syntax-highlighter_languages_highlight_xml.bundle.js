(self.webpackChunkcom_dergoogler_mmrl_web=self.webpackChunkcom_dergoogler_mmrl_web||[]).push([[7019],{42157:e=>{function l(e){return e?"string"==typeof e?e:e.source:null}function g(e){return m("(?=",e,")")}function m(...e){return e.map(e=>l(e)).join("")}e.exports=function(e){var n=m(/[A-Z_]/,m("(",/[A-Z0-9_.-]*:/,")?"),/[A-Z0-9_.-]*/),a={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},s={begin:/\s/,contains:[{className:"meta-keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},t=e.inherit(s,{begin:/\(/,end:/\)/}),i=e.inherit(e.APOS_STRING_MODE,{className:"meta-string"}),r=e.inherit(e.QUOTE_STRING_MODE,{className:"meta-string"}),c={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:/[A-Za-z0-9._:-]+/,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[a]},{begin:/'/,end:/'/,contains:[a]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[s,r,i,t,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[s,t,r,i]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},a,{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[c],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[c],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:m(/</,g(m(n,"("+[/\/>/,/>/,/\s/].map(e=>l(e)).join("|")+")"))),end:/\/?>/,contains:[{className:"name",begin:n,relevance:0,starts:c}]},{className:"tag",begin:m(/<\//,g(m(n,/>/))),contains:[{className:"name",begin:n,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}}}]);