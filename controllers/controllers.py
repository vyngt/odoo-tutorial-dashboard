# -*- coding: utf-8 -*-
from odoo import http


class TutorialDashboard(http.Controller):
    @http.route("/tutorial/rpc/library/books", auth="user", type="json")
    def books(self, **kw):
        return http.request.env["tutorial.library.book"].get_statistics()
