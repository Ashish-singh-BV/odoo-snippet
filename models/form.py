from odoo import models, fields

class formData(models.Model):
    _name = "form.data"
    _description = "testing controller"

    first_name = fields.Char()
    last_name = fields.Char()