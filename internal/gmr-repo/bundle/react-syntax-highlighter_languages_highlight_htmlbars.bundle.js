(self.webpackChunkcom_dergoogler_mmrl_web=self.webpackChunkcom_dergoogler_mmrl_web||[]).push([[8458],{93202:e=>{function l(e){return e?"string"==typeof e?e:e.source:null}function o(...e){return e.map(e=>l(e)).join("")}function a(e){var n={"builtin-name":["action","bindattr","collection","component","concat","debugger","each","each-in","get","hash","if","in","input","link-to","loc","log","lookup","mut","outlet","partial","query-params","render","template","textarea","unbound","unless","view","with","yield"]},a=/\[\]|\[[^\]]+\]/,t=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,s="("+[/""|"[^"]+"/,/''|'[^']+'/,a,t].map(e=>l(e)).join("|")+")",s=o(o("(",/\.|\.\/|\//,")?"),s,(s=o(/(\.|\/)/,s),o("(",s,")*"))),a=o("(",a,"|",t,")(?==)"),t={begin:s,lexemes:/[\w.\/]+/},s=e.inherit(t,{keywords:{literal:["true","false","undefined","null"]}});const i={begin:/\(/,end:/\)/};var a={className:"attr",begin:a,relevance:0,starts:{begin:/=/,end:/=/,starts:{contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,s,i]}}},a={contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:/as\s+\|/,keywords:{keyword:"as"},end:/\|/,contains:[{begin:/\w+/}]},a,s,i],returnEnd:!0},s=e.inherit(t,{className:"name",keywords:n,starts:e.inherit(a,{end:/\)/})}),s=(i.contains=[s],e.inherit(t,{keywords:n,className:"name",starts:e.inherit(a,{end:/\}\}/})})),r=e.inherit(t,{keywords:n,className:"name"}),t=e.inherit(t,{className:"name",keywords:n,starts:e.inherit(a,{end:/\}\}/})});return{name:"Handlebars",aliases:["hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,subLanguage:"xml",contains:[{begin:/\\\{\{/,skip:!0},{begin:/\\\\(?=\{\{)/,skip:!0},e.COMMENT(/\{\{!--/,/--\}\}/),e.COMMENT(/\{\{!/,/\}\}/),{className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[s],starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[r]},{className:"template-tag",begin:/\{\{#/,end:/\}\}/,contains:[s]},{className:"template-tag",begin:/\{\{(?=else\}\})/,end:/\}\}/,keywords:"else"},{className:"template-tag",begin:/\{\{(?=else if)/,end:/\}\}/,keywords:"else if"},{className:"template-tag",begin:/\{\{\//,end:/\}\}/,contains:[r]},{className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,contains:[t]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[t]}]}}e.exports=function(e){const n=a(e);return n.name="HTMLbars",e.getLanguage("handlebars")&&(n.disableAutodetect=!0),n}}}]);