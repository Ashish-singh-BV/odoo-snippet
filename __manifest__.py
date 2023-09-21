{
    'name': 'website work',
    'version': '1.0',
    'category': 'Apps',
    
    'author': 'Ashish singh',
    'depends': ['base','website'],
    'data': [
        "security/ir.model.access.csv",
        "data/loading_img.xml",
        "views/model.xml",
        "views/form_view.xml",
        "views/snippets/s_buttons.xml",
        "views/snippets/s_slider.xml",
        "views/snippets/snippet_load.xml",
        "views/dynamic_snippet/dynamic.xml",
        "views/dynamic_snippet/dynamic_snippet_load.xml",
        "views/templates/form_template.xml",
    ],
    'assets': {
        'web.assets_frontend': [
            'custom_website/static/src/scss/custom.scss',
            'custom_website/static/src/xml/dynamic_temp.xml',
            'custom_website/static/src/js/dynamic_snippet.js',
            'custom_website/static/src/js/form_temp.js',
        ],
        },
    "application": True,
    
    "sequence": 1
}