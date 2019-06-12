import dialog from './dialog-login.vue'


var mydialog = {}
mydialog.install = function(Vue,options){
   
    Vue.component(dialog.name,dialog)
}

export default mydialog