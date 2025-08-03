import{r as v,j as a,M as m,B as t}from"./index-DjALMzzH.js";const b=({isOpen:s,onClose:o,onConfirm:n,purchase:c})=>{const[e,l]=v.useState(""),d=[{key:"returned",label:"I've returned this item."},{key:"sold_gifted",label:"I sold or gave it away."},{key:"lost_broken",label:"It was lost or broken."},{key:"other_hide",label:"Just hide it from my vault."}],h=()=>{e&&n(e)};return a.jsx(m,{isOpen:s,onClose:o,title:"Archive Purchase",customWidth:"380px",children:a.jsxs("div",{className:"archive-modal",children:[a.jsxs("p",{className:"archive-modal__subtitle",children:['Archiving "',c?.name,'" will remove it from active lists and disable warranty alerts. Why are you archiving it?']}),a.jsx("div",{className:"archive-modal__reasons",children:d.map(r=>a.jsx("button",{className:`archive-modal__reason-btn ${e===r.key?"selected":""}`,onClick:()=>l(r.key),children:r.label},r.key))}),a.jsxs("div",{className:"archive-modal__actions",children:[a.jsx(t,{onClick:o,variant:"secondary",children:"Cancel"}),a.jsx(t,{onClick:h,variant:"primary",disabled:!e,children:"Confirm Archive"})]})]})})},i=document.createElement("style");i.innerHTML=`
  .archive-modal__subtitle {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.5;
    margin-bottom: var(--spacing-4);
    text-align: center;
  }
  .archive-modal__reasons {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
  }
  .archive-modal__reason-btn {
    width: 100%;
    padding: var(--spacing-3);
    text-align: left;
    background-color: var(--input-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-primary);
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .archive-modal__reason-btn:hover {
    border-color: var(--accent-primary);
    background-color: var(--accent-secondary);
  }
  .archive-modal__reason-btn.selected {
    border-color: var(--accent-primary);
    background-color: var(--accent-primary);
    color: #fff;
    box-shadow: 0 0 10px var(--accent-glow);
  }
  body[data-theme='light'] .archive-modal__reason-btn.selected {
      color: #fff;
  }
  .archive-modal__actions {
    display: flex;
    justify-content: flex-end;
    gap: var(--spacing-3);
    margin-top: var(--spacing-5);
    padding-top: var(--spacing-4);
    border-top: 1px solid var(--border-color);
  }
`;document.head.appendChild(i);export{b as default};
