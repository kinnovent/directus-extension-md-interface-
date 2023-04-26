import{defineInterface as t}from"@directus/extensions-sdk";import{useCssVars as e,resolveComponent as n,resolveDirective as i,openBlock as a,createElementBlock as o,createBlock as r,mergeProps as l,toHandlers as d,withDirectives as s,createCommentVNode as p}from"vue";const f={props:{value:{type:String,default:null},disabled:{type:Boolean,default:!1}},setup:(t,{emit:e,attrs:n,listeners:i})=>({attrs:n,listeners:i})},m=()=>{e((t=>({"64969d30-previewFamily":t.previewFamily})))},v=f.setup;f.setup=v?(t,e)=>(m(),v(t,e)):m;const c={class:"markdown-preview"},u={key:1},g={key:0,class:"preview-box",style:"display:block"};var h=[],x=[];!function(t,e){if(t&&"undefined"!=typeof document){var n,i=!0===e.prepend?"prepend":"append",a=!0===e.singleTag,o="string"==typeof e.container?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(a){var r=h.indexOf(o);-1===r&&(r=h.push(o)-1,x[r]={}),n=x[r]&&x[r][i]?x[r][i]:x[r][i]=l()}else n=l();65279===t.charCodeAt(0)&&(t=t.substring(1)),n.styleSheet?n.styleSheet.cssText+=t:n.appendChild(document.createTextNode(t))}function l(){var t=document.createElement("style");if(t.setAttribute("type","text/css"),e.attributes)for(var n=Object.keys(e.attributes),a=0;a<n.length;a++)t.setAttribute(n[a],e.attributes[n[a]]);var r="prepend"===i?"afterbegin":"beforeend";return o.insertAdjacentElement(r,t),t}}("\n.preview-box[data-v-64969d30] {\n\tdisplay: none;\n\tpadding: 20px;\n}\n.preview-box[data-v-64969d30] h1 {\n\tmargin-top: 1em;\n\tmargin-bottom: 0;\n\tcolor: var(--foreground-normal-alt);\n\tfont-weight: 700;\n\tfont-size: 36px;\n\tfont-family: var(--64969d30-previewFamily), serif;\n\tline-height: 46px;\n}\n.preview-box[data-v-64969d30] h2 {\n\tmargin-top: 1.25em;\n\tmargin-bottom: 0;\n\tcolor: var(--foreground-normal-alt);\n\tfont-weight: 700;\n\tfont-size: 24px;\n\tfont-family: var(--64969d30-previewFamily), serif;\n\tline-height: 34px;\n}\n.preview-box[data-v-64969d30] h3 {\n\tmargin-top: 1.25em;\n\tmargin-bottom: 0;\n\tcolor: var(--foreground-normal-alt);\n\tfont-weight: 700;\n\tfont-size: 19px;\n\tfont-family: var(--64969d30-previewFamily), serif;\n\tline-height: 29px;\n}\n.preview-box[data-v-64969d30] h4 {\n\tmargin-top: 1.5em;\n\tmargin-bottom: 0;\n\tcolor: var(--foreground-normal-alt);\n\tfont-weight: 700;\n\tfont-size: 16px;\n\tfont-family: var(--64969d30-previewFamily), serif;\n\tline-height: 26px;\n}\n.preview-box[data-v-64969d30] h5 {\n\tmargin-top: 2em;\n\tmargin-bottom: 0;\n\tcolor: var(--foreground-normal-alt);\n\tfont-weight: 700;\n\tfont-size: 14px;\n\tfont-family: var(--64969d30-previewFamily), serif;\n\tline-height: 24px;\n}\n.preview-box[data-v-64969d30] h6 {\n\tmargin-top: 2em;\n\tmargin-bottom: 0;\n\tcolor: var(--foreground-normal-alt);\n\tfont-weight: 700;\n\tfont-size: 12px;\n\tfont-family: var(--64969d30-previewFamily), serif;\n\tline-height: 22px;\n}\n.preview-box[data-v-64969d30] p {\n\tmargin: 1.5em 0;\n\tfont-weight: 500;\n\tfont-size: 15px;\n\tfont-family: var(--64969d30-previewFamily), serif;\n\tline-height: 24px;\n}\n.preview-box[data-v-64969d30] a {\n\tcolor: var(--primary-125);\n\ttext-decoration: none;\n}\n.preview-box[data-v-64969d30] ul,\n.preview-box[data-v-64969d30] ol {\n\tmargin: 1.5em 0;\n\tfont-weight: 500;\n\tfont-size: 15px;\n\tfont-family: var(--64969d30-previewFamily), serif;\n\tline-height: 24px;\n}\n.remaining[data-v-64969d30] {\n\tposition: absolute;\n\tright: 10px;\n\tbottom: 5px;\n\tcolor: var(--foreground-subdued);\n\tfont-weight: 600;\n\ttext-align: right;\n\tvertical-align: middle;\n\tfont-feature-settings: 'tnum';\n}\n.warning[data-v-64969d30] {\n\tcolor: var(--warning);\n}\n.danger[data-v-64969d30] {\n\tcolor: var(--danger);\n}\n.preview-box[data-v-64969d30] ul ul,\n.preview-box[data-v-64969d30] ol ol,\n.preview-box[data-v-64969d30] ul ol,\n.preview-box[data-v-64969d30] ol ul {\n\tmargin: 0;\n}\n.preview-box[data-v-64969d30] b,\n.preview-box[data-v-64969d30] strong {\n\tfont-weight: 700;\n}\n.preview-box[data-v-64969d30] code {\n\tpadding: 2px 4px;\n\tfont-weight: 500;\n\tfont-size: 15px;\n\tfont-family: var(--family-monospace), monospace;\n\tline-height: 24px;\n\toverflow-wrap: break-word;\n\tbackground-color: var(--background-normal);\n\tborder-radius: var(--border-radius);\n}\n.preview-box[data-v-64969d30] pre {\n\tpadding: 1em;\n\toverflow: auto;\n\tfont-weight: 500;\n\tfont-size: 15px;\n\tfont-family: var(--family-monospace), monospace;\n\tline-height: 24px;\n\tbackground-color: var(--background-normal);\n\tborder-radius: var(--border-radius);\n}\n.preview-box[data-v-64969d30] blockquote {\n\tmargin-left: 0px;\n\tpadding-left: 1em;\n\tfont-weight: 500;\n\tfont-size: 15px;\n\tfont-family: var(--64969d30-previewFamily), serif;\n\tline-height: 24px;\n\tborder-left: 2px solid var(--border-normal);\n}\n.preview-box[data-v-64969d30] blockquote blockquote {\n\tmargin-left: 10px;\n}\n.preview-box[data-v-64969d30] video,\n.preview-box[data-v-64969d30] iframe,\n.preview-box[data-v-64969d30] img {\n\tmax-width: 100%;\n\theight: auto;\n\tborder-radius: var(--border-radius);\n}\n.preview-box[data-v-64969d30] hr {\n\theight: 1px;\n\tmargin-top: 2em;\n\tmargin-bottom: 2em;\n\tbackground-color: var(--border-normal);\n\tborder: none;\n}\n.preview-box[data-v-64969d30] table {\n\tfont-weight: 500;\n\tfont-size: 15px;\n\tline-height: 24px;\n\tborder-collapse: collapse;\n}\n.preview-box[data-v-64969d30] table th,\n.preview-box[data-v-64969d30] table td {\n\tpadding: 0.4rem;\n\tborder: 1px solid var(--border-normal);\n}\n.preview-box[data-v-64969d30] figure {\n\tdisplay: table;\n\tmargin: 1rem auto;\n}\n.preview-box[data-v-64969d30] figure figcaption {\n\tdisplay: block;\n\tmargin-top: 0.25rem;\n\tcolor: #999;\n\ttext-align: center;\n}\n\n",{}),f.render=function(t,e,f,m,v,h){const x=n("interface-input-rich-text-md"),w=i("md");return a(),o("div",c,[f.disabled?(a(),o("div",u,[f.value?s((a(),o("div",g,null,512)),[[w,f.value]]):p("v-if",!0)])):(a(),r(x,l({key:0,disabled:f.disabled,value:f.value},m.attrs,d(m.listeners)),null,16,["disabled","value"]))])},f.__scopeId="data-v-64969d30",f.__file="src/interface.vue";var w=t({id:"interface-markdown-preview",name:"interface-markdown-preview",description:"$t:interfaces.input-rich-text-md.description",icon:"functions",component:f,types:["text"],group:"standard",options:{standard:[{field:"toolbar",name:"$t:interfaces.input-rich-text-html.toolbar",type:"json",schema:{default_value:["heading","bold","italic","strikethrough","bullist","numlist","blockquote","code","link","table","image","empty"]},meta:{width:"half",interface:"select-multiple-dropdown",options:{choices:[{value:"heading",text:"$t:wysiwyg_options.heading"},{value:"bold",text:"$t:wysiwyg_options.bold"},{value:"italic",text:"$t:wysiwyg_options.italic"},{value:"strikethrough",text:"$t:wysiwyg_options.strikethrough"},{value:"blockquote",text:"$t:wysiwyg_options.blockquote"},{value:"bullist",text:"$t:wysiwyg_options.bullist"},{value:"numlist",text:"$t:wysiwyg_options.numlist"},{value:"table",text:"$t:wysiwyg_options.table"},{value:"code",text:"$t:wysiwyg_options.source_code"},{value:"image",text:"$t:wysiwyg_options.image"},{value:"link",text:"$t:wysiwyg_options.link"}]}}},{field:"placeholder",name:"$t:placeholder",type:"string",meta:{width:"half",interface:"system-input-translated-string",options:{placeholder:"$t:enter_a_placeholder"}}},{field:"folder",name:"$t:interfaces.system-folder.folder",type:"uuid",meta:{width:"half",interface:"system-folder",note:"$t:interfaces.system-folder.field_hint"},schema:{default_value:void 0}},{field:"imageToken",name:"$t:interfaces.input-rich-text-md.imageToken",type:"string",meta:{note:"$t:interfaces.input-rich-text-md.imageToken_label",width:"half",interface:"input"}}],advanced:[{field:"softLength",name:"$t:soft_length",type:"integer",meta:{width:"half",interface:"input",options:{placeholder:"255",min:1}}},{field:"editorFont",name:"$t:interfaces.input-rich-text-md.editorFont",type:"string",meta:{width:"half",interface:"select-dropdown",options:{choices:[{text:"$t:sans_serif",value:"sans-serif"},{text:"$t:monospace",value:"monospace"},{text:"$t:serif",value:"serif"}]}},schema:{default_value:"sans-serif"}},{field:"previewFont",name:"$t:interfaces.input-rich-text-md.previewFont",type:"string",meta:{width:"half",interface:"select-dropdown",options:{choices:[{text:"$t:sans_serif",value:"sans-serif"},{text:"$t:monospace",value:"monospace"},{text:"$t:serif",value:"serif"}]}},schema:{default_value:"sans-serif"}},{field:"customSyntax",name:"$t:interfaces.input-rich-text-md.customSyntax",type:"json",meta:{note:"$t:interfaces.input-rich-text-md.customSyntax_label",width:"full",interface:"list",options:{addLabel:"$t:interfaces.input-rich-text-md.customSyntax_add",template:"{{ name }}",fields:[{field:"name",type:"string",name:"$t:name",meta:{interface:"input",width:"half",options:{placeholder:"$t:name",default:null}}},{field:"icon",type:"string",name:"$t:icon",meta:{interface:"select-icon",width:"half"}},{field:"prefix",type:"string",name:"$t:prefix",meta:{interface:"input",width:"half",options:{placeholder:"$t:prefix",default:null}}},{field:"suffix",type:"string",name:"$t:suffix",meta:{interface:"input",width:"half",options:{placeholder:"$t:suffix",default:null}}},{field:"box",type:"string",name:"$t:interfaces.input-rich-text-md.box",meta:{interface:"select-radio",width:"half",options:{choices:[{text:"$t:inline",value:"inline"},{text:"$t:block",value:"block"}]}},schema:{default_value:"inline"}}]}}}]}});export{w as default};
