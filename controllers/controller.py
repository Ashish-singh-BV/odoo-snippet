from odoo import http
# from odoo.exceptions import ValidationError


class WebControle(http.Controller):

    @http.route('/student', auth="public", type="json", methods=['POST'])
    def data(self, **kw):
        record = http.request.env['controller'].search_read([])    
        return record
    

    @http.route('/form', auth="public", website=True)
    def form(self, **kw):
        record = http.request.render('custom_website.form_template') 
        return record
    

    @http.route('/form/data', auth="user", type="json", methods=['POST'])
    def form_data(self, **kw):
   
        print(kw)
        try:
            # raise ValidationError('sdfghjkl')
            http.request.env['form.data'].create([kw])
        except:
            return False
        return True    
    
    