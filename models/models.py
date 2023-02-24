# -*- coding: utf-8 -*-

from odoo import models, fields, api


class TutorialLibraryBook(models.Model):
    _inherit = "tutorial.library.book"

    @api.model
    def get_statistics(self):
        count = self.search_count([])
        return {
            "count": count,
        }
