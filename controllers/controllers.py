# -*- coding: utf-8 -*-
# from odoo import http


# class TutorialDashboard(http.Controller):
#     @http.route('/tutorial_dashboard/tutorial_dashboard', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/tutorial_dashboard/tutorial_dashboard/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('tutorial_dashboard.listing', {
#             'root': '/tutorial_dashboard/tutorial_dashboard',
#             'objects': http.request.env['tutorial_dashboard.tutorial_dashboard'].search([]),
#         })

#     @http.route('/tutorial_dashboard/tutorial_dashboard/objects/<model("tutorial_dashboard.tutorial_dashboard"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('tutorial_dashboard.object', {
#             'object': obj
#         })
