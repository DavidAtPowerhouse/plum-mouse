export default {
    type: 'document',
    name: 'blogPost',
    fields: [
    {
        title: 'Title',
        type: 'string',
        name: 'title'
    },
    {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
            source: 'title'
        }
    },
    {
        title: 'Body',
        name: 'body',
        type: 'array',
        of: [
            {
                type: 'block',
                styles: [
                    {title: 'Normal', value: 'normal'},
                    {title: 'H1', value: 'h1'},
                    {title: 'H2', value: 'h2'},
                    {title: 'H3', value: 'h3'},
                    {title: 'H4', value: 'h4'},
                    {title: 'H5', value: 'h5'},
                    {title: 'H6', value: 'h6'},
                    {title: 'Caption', value: 'caption'}
                ],
                lists: [
                    {title: 'Numbered', value: 'number'},
                    {title: 'Bullet', value: 'bullet'}
                ],
                marks: {
                    annotations: [
                        {
                            name: 'link',
                            type: 'object',
                            title: 'External link',
                            fields: [
                                {
                                    name: 'href',
                                    type: 'url',
                                    title: 'URL'
                                },
                                {
                                    title: 'Open in new tab',
                                    name: 'blank',
                                    description: 'Read https://css-tricks.com/use-target_blank/',
                                    type: 'boolean'
                                }
                            ]
                        },
                        {
                            name: 'internalLink',
                            type: 'object',
                            title: 'Internal link',
                            fields: [
                                {
                                    name: 'reference',
                                    type: 'reference',
                                    title: 'Reference',
                                    to: [
                                        { type: 'blogPost' },
                                        // other types you may want to link to
                                    ]
                                }
                            ]
                        }
                    ],
                    decorators: [
                        { title: "Strong", value: "strong" },
                        { title: "Emphasis", value: "em" },
                    ],
                }
            },
            {
                type: 'imageResource'
            }
        ]
    }
]
}