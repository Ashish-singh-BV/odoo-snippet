/** @odoo-module **/
import publicWidget from "web.public.widget"

publicWidget.registry.formTemp = publicWidget.Widget.extend({
    selector: '#custom_section',
    events: {
        'click button#submit_button': '_submit_button',
        'click button#redirect_button': function () {
            var link = $('button#redirect_button').data('link');
            if (link) {
                window.location.href = link;
            }
        }
    },



    _submit_button: function () {
        function popup(el, title = "title", msg = "nothing", button_name = null, link = null) {
            var popup_el = el.find('div#exampleModal');
            var popup_title = el.find('h1#exampleModalLabel')[0]
            var popup_msg = el.find('div#pop_msg')[0]
            var popup_ok = el.find('button#redirect_button')
            popup_title.innerHTML = title
            popup_msg.innerHTML = msg
            if (link != null && button_name != null) {
                popup_ok[0].innerHTML = button_name
                popup_ok.attr('data-link', link);
            } else {
                popup_ok[0].style.display = 'none'
            }
            popup_el.modal('show');
        }

        if (this.getSession().user_id) {
            let first_name = this.$el.find('input#first_name')[0].value
            let last_name = this.$el.find('input#last_name')[0].value

            if (!(first_name == "" && last_name == "")) {
                this._rpc({
                    route: "/form/data",
                    params: {
                        'first_name': first_name,
                        'last_name': last_name,
                    }
                }).then((data) => {
                    if (data) {
                        popup(this.$el, 'Success', 'Your Data Saved successfully')

                    }
                    else {
                        popup(this.$el, 'Data Base Error','Some error occur while saving your data')
                    }
                });
            }else{
                popup(this.$el, 'Validation Wrong','Please fill details before submit')
            }

        } else {
            popup(this.$el, 'Login', 'You are not Login', 'Sign In', 'http://localhost:8069/web/login')
        }

    }


});
export default publicWidget.registry.formTemp;