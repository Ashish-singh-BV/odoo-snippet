{
    'name': 'website work',
    'version': '1.0',
    'category': 'Apps',
    
    'author': 'Ashish singh',
    # 'depends': ['base','point_of_sale'],
    'data': [
        "security/ir.model.access.csv",
        "data/loading_img.xml",
        "views/model.xml",
        "views/snippets/s_buttons.xml",
        "views/snippets/s_slider.xml",
        "views/snippets/snippet_load.xml",
    ],
    'assets': {
        'web.assets_frontend': [
            'custom_website/static/src/scss/custom.scss',
        ],
        },
    "application": True,
    
    "sequence": 1
}