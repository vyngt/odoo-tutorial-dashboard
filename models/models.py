# -*- coding: utf-8 -*-

from odoo import models, api


class TutorialLibraryCheckout(models.Model):
    _inherit = "tutorial.library.checkout"

    @api.model
    def get_statistics(self):
        total_book = self.env["tutorial.library.book"].search_count([])

        Checkout = self.env["tutorial.library.checkout"]

        by_states = Checkout.read_group(
            [], ["num_books", "stage_id.state"], ["stage_id"]
        )

        return {
            "total_books": total_book,
            "by_state": {str(s["stage_id"][1]): s["stage_id_count"] for s in by_states},
        }
