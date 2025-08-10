sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit() {
            this.onReadAll();
        },
        onReadAll: function(){
            var that = this;
            var oModel = this.getOwnerComponent().getModel();
            oModel.read("/Products",{
                success: function(odata){
                    console.log(odata);
                    var jModel = new sap.ui.model.json.JSONModel(odata);
                    that.getView().byId("idProducts").setModel(jModel);
                },error: function(oError){
                    console.log(oError);
                }
            });
        }
    });
});