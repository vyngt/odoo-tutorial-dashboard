# -*- coding: utf-8 -*-
{
    "name": "Tutorial Dashboard",
    "summary": """
        Simple dashboard for library""",
    "description": """
        lalalala
    """,
    "author": "vyngt",
    "website": "https://github.com/vyngt",
    "category": "Website/Library",
    "version": "16.0.1.0.0",
    "depends": [
        "base",
        "web",
        "tutorial",
        "tutorial_member",
        "tutorial_checkout",
    ],
    "data": [
        # 'security/ir.model.access.csv',
        # "views/views.xml",
        # "views/templates.xml",
        "views/library_book.xml",
        "views/menu.xml",
    ],
    "demo": [
        "demo/demo.xml",
    ],
    "assets": {
        "web.assets_backend": [
            "tutorial_dashboard/static/src/**/*",
        ],
    },
}
