(()=>{var e={136:()=>{}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,o),l.exports}(()=>{"use strict";const e=window.wp.element,t=window.wp.editSite,r=window.wp.data,n=window.wp.blocks,l=window.wp.components,c=window.wp.i18n,i=window.wp.coreData,s=window.wp.blockEditor,a=window.wp.plugins;o(136);const d=e=>e.some((e=>"woocommerce/legacy-template"===e.name||d(e.innerBlocks))),u=()=>{var o,a,u;const{blocks:p,editedPostId:m}=(0,r.useSelect)((e=>({blocks:e(s.store).getBlocks(),editedPostId:e("core/edit-site").getEditedPostId()})),[]),{replaceBlocks:w}=(0,r.useDispatch)(s.store),g=(0,i.useEntityRecord)("postType","wp_template",m),v=(0,e.useMemo)((()=>d(p)),[p]),b=(0,e.useMemo)((()=>(e=>e.reduce(((e,t)=>"core/template-part"===t.name?e:[...e,t.clientId]),[]))(p)),[p]);return(0,e.createElement)(e.Fragment,null,!v&&(0,e.createElement)(t.PluginTemplateSettingPanel,null,(0,e.createElement)(l.PanelBody,{className:"wc-block-editor-revert-button-container"},(0,e.createElement)(l.Button,{variant:"secondary",onClick:()=>{var e;w(b,(0,n.createBlock)("core/group",{layout:{inherit:!0,type:"constrained"}},[(0,n.createBlock)("woocommerce/legacy-template",{template:null==g||null===(e=g.record)||void 0===e?void 0:e.slug})]))}},(0,c.__)("Revert to Classic Product Template","woocommerce")),(0,e.createElement)("span",null,(0,e.createInterpolateElement)((0,c.__)("The <strongText /> template doesn’t allow for reordering or customizing blocks, but might work better with your extensions","woocommerce"),{strongText:(0,e.createElement)("strong",null,null!==(o=null==g||null===(a=g.record)||void 0===a||null===(u=a.title)||void 0===u?void 0:u.rendered)&&void 0!==o?o:"")})))))},p=["single-product","archive-product","product-search-results","taxonomy-product_cat","taxonomy-product_tag","taxonomy-product_attribute"],m="woocommerce-blocks-revert-button-templates";let w;(0,r.subscribe)((()=>{const e=w,o=(0,r.select)("core/edit-site");if(!(e=>{if(!(e=>null===e)(t=e)&&t instanceof Object&&t.constructor===Object){const t=e.getEditedPostType();return"wp_template"===t||"wp_template_part"===t}var t;return!1})(o))return;if(w=null==o?void 0:o.getEditedPostId(),e===w)return;const n=p.some((e=>{var t;return null===(t=w)||void 0===t?void 0:t.includes(e)})),l=void 0!==t.PluginTemplateSettingPanel;if(n&&l){if((0,a.getPlugin)(m))return;return(0,a.registerPlugin)(m,{render:u})}void 0!==(0,a.getPlugin)(m)&&(0,a.unregisterPlugin)(m)}),"core/edit-site")})()})();