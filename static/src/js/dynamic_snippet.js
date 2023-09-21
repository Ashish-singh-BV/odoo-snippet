/** @odoo-module **/
import publicWidget from "web.public.widget"
import core from 'web.core'

var Qweb = core.qweb
publicWidget.registry.dynamicSnippet = publicWidget.Widget.extend({
    selector: '.student_info',

    start() {
        this._rpc({
            route: "/student",
            params: {}
        }).then((data) => {
            console.log(data,'Done')
            this.$target.replaceWith(Qweb.render("custom_website.student_info_qweb", {data: data}))
        });
    }
});
export default publicWidget.registry.dynamicSnippet;