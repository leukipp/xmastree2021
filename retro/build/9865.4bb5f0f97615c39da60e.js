"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[9865,7043],{87043:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var a=n(70163),o=n(78241),s=n(56532),r=n(7451),l=n(32199),i=n(95187),c=n(95867),d=n(33498),u=n(18151);const p="jp-RetroKernelStatus-error",C="jp-RetroKernelStatus-warn",h="jp-RetroKernelStatus-info",k="jp-RetroKernelStatus-fade",v={id:"@retrolab/application-extension:checkpoints",autoStart:!0,requires:[r.IDocumentManager,i.ITranslator],optional:[c.IRetroShell],activate:(e,t,n,a)=>{const{shell:r}=e,l=n.load("retrolab"),i=new u.Widget;i.id=o.DOMUtils.createDomID(),i.addClass("jp-RetroCheckpoint"),e.shell.add(i,"top",{rank:100});const c=async()=>{const e=r.currentWidget;if(!e)return;const n=t.contextForWidget(e);null==n||n.fileChanged.disconnect(c),null==n||n.fileChanged.connect(c);const a=await(null==n?void 0:n.listCheckpoints());if(!a)return;const o=a[a.length-1];i.node.textContent=l.__("Last Checkpoint: %1",s.Time.formatHuman(new Date(o.last_modified)))};a&&a.currentChanged.connect(c),new d.Poll({auto:!0,factory:()=>c(),frequency:{interval:2e3,backoff:!1},standby:"when-hidden"})}},f={id:"@retrolab/application-extension:kernel-logo",autoStart:!0,requires:[c.IRetroShell],activate:(e,t)=>{const{serviceManager:n}=e;let a;const o=async()=>{var s,r,i,c,d;a&&(a.dispose(),a.parent=null);const p=t.currentWidget;if(!(p instanceof l.NotebookPanel))return;await p.sessionContext.ready,p.sessionContext.kernelChanged.disconnect(o),p.sessionContext.kernelChanged.connect(o);const C=null!==(i=null===(r=null===(s=p.sessionContext.session)||void 0===s?void 0:s.kernel)||void 0===r?void 0:r.name)&&void 0!==i?i:"",h=null===(d=null===(c=n.kernelspecs)||void 0===c?void 0:c.specs)||void 0===d?void 0:d.kernelspecs[C];if(!h)return;const k=h.resources["logo-64x64"];if(!k)return;const v=document.createElement("div"),f=document.createElement("img");f.src=k,f.title=h.display_name,v.appendChild(f),a=new u.Widget({node:v}),a.addClass("jp-RetroKernelLogo"),e.shell.add(a,"top",{rank:10010})};e.started.then((()=>{t.currentChanged.connect(o)}))}},g={id:"@retrolab/application-extension:kernel-status",autoStart:!0,requires:[c.IRetroShell],activate:(e,t)=>{const n=new u.Widget;n.addClass("jp-RetroKernelStatus"),e.shell.add(n,"menu",{rank:10010});const a=e=>{const t=e.kernelDisplayStatus;let a=`Kernel ${s.Text.titleCase(t)}`;switch(n.removeClass(p),n.removeClass(C),n.removeClass(h),n.removeClass(k),t){case"busy":case"idle":a="",n.addClass(k);break;case"dead":case"terminating":n.addClass(p);break;case"unknown":n.addClass(C);break;default:n.addClass(h),n.addClass(k)}n.node.textContent=a};t.currentChanged.connect((async()=>{const e=t.currentWidget;e instanceof l.NotebookPanel&&e.sessionContext.statusChanged.connect(a)}))}},m={id:"@retrolab/application-extension:paths",activate:e=>{if(!(e instanceof c.RetroApp))throw new Error(`${m.id} must be activated in RetroLab.`);return e.paths},autoStart:!0,provides:a.JupyterFrontEnd.IPaths},b=[v,f,g]}}]);
//# sourceMappingURL=9865.4bb5f0f97615c39da60e.js.map