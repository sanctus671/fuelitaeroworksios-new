(self.webpackChunkaerowork=self.webpackChunkaerowork||[]).push([[1550],{1550:function(t,e,n){"use strict";n.r(e),n.d(e,{TanktotankPageModule:function(){return v}});var o=n(1116),i=n(1041),r=n(4812),a=n(4258),s=n(6570),c=n(752),l=n(3034),u=n(7767),g=n(8933),m=n(7686),d=n(3059),p=n(8153),f=n(7233),h=n(2977);function T(t,e){if(1&t&&(s.TgZ(0,"ion-select-option",12),s._uU(1),s.qZA()),2&t){var n=e.$implicit;s.s9C("value",n.trailer_id),s.xp6(1),s.Oqu(n.trailer_name)}}function k(t,e){if(1&t&&(s.TgZ(0,"ion-select-option",12),s._uU(1),s.qZA()),2&t){var n=e.$implicit;s.s9C("value",n.trailer_id),s.xp6(1),s.Oqu(n.trailer_name)}}var _=[{path:"",component:function(){function t(t,e,n,o,r,a,s,c,l,u,g,m,d){var p=this;this.builder=t,this.loadingController=e,this.toastController=n,this.configurationService=o,this.plantService=r,this.tankService=a,this.transactionService=s,this.operatorService=c,this.timesheetService=l,this.bluetoothService=u,this.events=g,this.zone=m,this.geolocation=d,this.tankToTankForm=t.group({from_trailer_id:new i.NI("",i.kI.required),to_trailer_id:new i.NI("",i.kI.required),amount:new i.NI("")}),this.events.subscribe("tanks:loaded",function(t){return p.populateTanks(t)}),this.populateTanks(null),o.get("operator").then(function(t){p.operator=t}),this.configurationService.get("tank").then(function(t){console.log("[CreateTankToTankPage] - constructor() :: trailer_id: ",t),p.tankToTankForm.patchValue({from_trailer_id:t})}),this.onMeterData=function(t){p._onMeterData(t)},this.onMeterComplete=function(){p._onMeterComplete()},this.onMeterListing=function(t){p.loader.setContent("Listing meters.")},this.onMeterListingSelect=function(t){p.loader.dismiss()},this.onMeterListingSelected=function(t){p.loader.present(),p.loader.setContent("Meter Selected.")},this.onMeterConnecting=function(t){p.loader.setContent("Connecting to meter.")},this.onMeterConnected=function(t){p.loader.setContent("Connected to meter.")},this.onMeterReading=function(t){p.loader.setContent("Reading data.")}}return t.prototype.populateTanks=function(t){var e=this;console.log("[CreateTankToTankPage] - populateTanks() :: Attempt to load tanks from cache, with mode "+t),this.tankService.findAll().then(function(t){console.log("[CreateTankToTankPage] - populateTanks() :: Found "+t.res.rows.length+" tanks in cache."),e.tanks=[];for(var n=0;n<t.res.rows.length;n++)e.tanks.push({trailer_id:t.res.rows.item(n).trailer_id,trailer_no:t.res.rows.item(n).trailer_no,trailer_name:t.res.rows.item(n).trailer_name});console.log("[CreateTankToTankPage] - populateTanks() :: Tanks found are "+e.tanks)})},t.prototype.openSettings=function(t){console.log("[CreateTankToTankPage] - openSettings()"),this.events.publish("settings:open",t)},t.prototype.readMeter=function(t){var e=this;console.log("[CreateTransactionPage] - readMeter() :: "),this.events.subscribe("meter:listing",function(t){e.onMeterListing()}),this.events.subscribe("meter:listingselect",function(t){e.onMeterListingSelect()}),this.events.subscribe("meter:connecting",function(t){e.onMeterConnecting()}),this.events.subscribe("meter:connected",function(t){e.onMeterConnected()}),this.events.subscribe("meter:reading",function(t){e.onMeterReading()}),this.events.subscribe("meter:complete",function(t){e.onMeterComplete()}),this.events.subscribe("meter:data",function(t){e.onMeterData()}),this.loadingController.create({message:"Contacting meter."}).then(function(t){e.loader=t,e.loader.present()}),this.bluetoothService.list()},t.prototype._onMeterComplete=function(){this.loader.dismiss()},t.prototype._onMeterData=function(t){var e=this;console.log("[CreateTransactionPage] - _onMeterData() :: ",t),this.events.unsubscribe("meter:data",function(t){e.onMeterData()}),this.events.unsubscribe("meter:listing",function(t){e.onMeterListing()}),this.events.unsubscribe("meter:connecting",function(t){e.onMeterConnecting()}),this.events.unsubscribe("meter:connected",function(t){e.onMeterConnected()}),this.events.unsubscribe("meter:reading",function(t){e.onMeterReading()});var n=t.pop();n?(this.zone.run(function(){var t=n.getData().endVolume-n.getData().startVolume;e.tankToTankForm.patchValue({amount:t})}),t.forEach(function(t){console.log("[CreateTransactionPage] - _onMeterData() :: Got BT data to upload in the background");var o={pad_id:"-1",operator_id:e.operator.operator_id,battery_percentage:"-1",long:-1,lat:-1,transaction_end_date:t.getData().endDateTime,end_total_value:t.getData().endVolume,end_value:t.getData().startVolume,plant_id:null,trailer_id:n.getData().meterID,odometer:"-1"};e.transactionService.create(o)}),this.onSubmit(this.tankToTankForm.value)):console.warn("[CreateTransactionPage] - _onMeterData() :: Received empty response, exiting.",n)},t.prototype.onSubmit=function(t){var e=this;console.log("[CreateTankToTankPage] - onSubmit() :: Attempt to create TankToTank from data ",t),this.transactionService.createRefill({from_trailer_id:t.from_trailer_id,to_trailer_id:t.to_trailer_id,operator_id:this.operator.operator_id,amount:t.amount}).then(function(t){e.toastController.create({message:"Transaction saved!",duration:2e3}).then(function(t){t.present()}),e.tankToTankForm.patchValue({from_trailer_id:null}),e.tankToTankForm.patchValue({to_trailer_id:null}),e.tankToTankForm.patchValue({amount:null})}).catch(function(t){e.toastController.create({message:"Error saving transaction!",duration:2e3,cssClass:"toast-error"}).then(function(t){t.present()})})},t.prototype.getGPS=function(){this.geolocation.getCurrentPosition({timeout:1e4}).then(function(t){JSON.stringify(t),console.log(t)},function(t){console.log(t),JSON.stringify(t)}).catch(function(t){console.log(t)})},t.\u0275fac=function(e){return new(e||t)(s.Y36(i.qu),s.Y36(r.HT),s.Y36(r.yF),s.Y36(c.e),s.Y36(l.L),s.Y36(u.A),s.Y36(g.p),s.Y36(m.p),s.Y36(d.r),s.Y36(p.G),s.Y36(f.z),s.Y36(s.R0b),s.Y36(h.b))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-tanktotank"]],decls:26,vars:4,consts:[["color","primary"],["slot","end"],["color","light",3,"click"],["name","settings"],[1,"ion-padding","form"],[3,"formGroup","ngSubmit"],["floating",""],["formControlName","from_trailer_id"],[3,"value",4,"ngFor","ngForOf"],["formControlName","to_trailer_id"],["type","number","name","amount","formControlName","amount","readonly","true"],["fill","outline","expand","block",3,"disabled","click"],[3,"value"]],template:function(t,e){1&t&&(s.TgZ(0,"ion-header"),s.TgZ(1,"ion-toolbar",0),s.TgZ(2,"ion-title"),s._uU(3,"Tank to Tank"),s.qZA(),s.TgZ(4,"ion-buttons",1),s.TgZ(5,"ion-button",2),s.NdJ("click",function(t){return e.openSettings(t)}),s._UZ(6,"ion-icon",3),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(7,"ion-content",4),s.TgZ(8,"ion-list"),s.TgZ(9,"form",5),s.NdJ("ngSubmit",function(){return e.onSubmit(e.tankToTankForm.value)}),s.TgZ(10,"ion-item"),s.TgZ(11,"ion-label",6),s._uU(12,"From Tank"),s.qZA(),s.TgZ(13,"ion-select",7),s.YNc(14,T,2,2,"ion-select-option",8),s.qZA(),s.qZA(),s.TgZ(15,"ion-item"),s.TgZ(16,"ion-label",6),s._uU(17,"To Tank"),s.qZA(),s.TgZ(18,"ion-select",9),s.YNc(19,k,2,2,"ion-select-option",8),s.qZA(),s.qZA(),s.TgZ(20,"ion-item"),s.TgZ(21,"ion-label"),s._uU(22,"Amount (L)"),s.qZA(),s._UZ(23,"ion-input",10),s.qZA(),s.TgZ(24,"ion-button",11),s.NdJ("click",function(t){return e.readMeter(t)}),s._uU(25,"Transfer Completed"),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(9),s.Q6J("formGroup",e.tankToTankForm),s.xp6(5),s.Q6J("ngForOf",e.tanks),s.xp6(5),s.Q6J("ngForOf",e.tanks),s.xp6(5),s.Q6J("disabled",!e.tankToTankForm.valid))},directives:[r.Gu,r.sr,r.wd,r.Sm,r.YG,r.gu,r.W2,r.q_,i._Y,i.JL,i.sg,r.Ie,r.Q$,r.t9,r.QI,i.JJ,i.u,o.sg,r.pK,r.as,r.n0],styles:[".form[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-top:20px}"]}),t}()}],b=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[a.Bz.forChild(_)],a.Bz]}),t}(),v=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[o.ez,i.u5,i.UX,r.Pc,b]]}),t}()}}]);