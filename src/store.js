import { reactive } from 'vue'

export const store = reactive({

    navLinks: [
        {
            name: 'Home',
            links: [
                { name: 'Main Home', href: '/' },
                { name: 'Floating Portfolio', href: '#' },
                { name: 'Portfolio Pinterest', href: '#' },
                { name: 'Animated Slider', href: '#' },
                { name: 'Portfolio Metro', href: '#' },
                { name: 'Portfolio Gallery', href: '#' },
                { name: 'Interactivce Links', href: '#' },
                { name: 'Split Side Showcase', href: '#' },
                { name: 'Portfolio Carousel', href: '#' },
                { name: 'Landing', href: '#' }
            ],
        },
        {
            name: 'Pages',
            links: [

                { name: 'About Us', href: '#' },
                { name: 'About Me', href: '#' },
                { name: 'What we Offer', href: '/whatweoffer' },
                { name: 'Working Process', href: '#' },
                { name: 'Our Team', href: '/ourteam' },
                { name: 'Pricing Plans', href: '#' },
                { name: 'Contact Us', href: '#' },
                { name: 'Cooming Soon', href: '#' },
                { name: '404 Error Page', href: '/error' }
            ]

        },
        {
            name: 'Portfolio',
            links: [
                {
                    name: 'Types',
                    links: [
                        { name: 'Standard', href: '#' },
                        { name: 'Gallery', href: '#' },
                        { name: 'Gallery Joined', href: '#' },
                        { name: 'Masonary', href: '#' },
                        { name: 'Pinterest', href: '#' },
                        { name: 'Pricing Plans', href: '#' },
                        { name: 'Scattered', href: '#' },
                        { name: 'Slider', href: '#' }
                    ]
                },
                {
                    name: 'Layouts',
                    links: [
                        { name: 'Two Columns', href: '#' },
                        { name: 'Three Columns', href: '#' },
                        { name: 'Three Columns Wide', href: '#' },
                        { name: 'Four Columns', href: '#' },
                        { name: 'Five Columns', href: '#' },
                        { name: 'Five Columns Wide', href: '#' },
                        { name: 'Six Columns Wide', href: '#' }
                    ]
                },
                {
                    name: 'Hover Types',
                    links: [
                        { name: 'Slide in', href: '#' },
                        { name: 'Floot', href: '#' },
                        { name: 'Overlay', href: '#' },
                        { name: 'Zoom', href: '#' },
                        { name: 'Shader', href: '#' },
                        { name: 'Clip Image', href: '#' }
                    ]
                },
                {
                    name: 'Singles',
                    links: [
                        { name: 'Split Screen', href: '#' },
                        { name: 'Full Width Slider', href: '#' },
                        { name: 'Wide Slider', href: '#' },
                        { name: 'Four Columns', href: '#' },
                        { name: 'Small Slider', href: '#' },
                        { name: 'Big Images', href: '#' },
                        { name: 'Small Images', href: '#' },
                        { name: 'Big Gallery', href: '#' },
                        { name: 'Small Gallery', href: '#' },
                        { name: 'Masonry', href: '#' }
                    ]
                }
            ],
        },
        {
            name: 'Blog',
            links: [
                { name: 'Right Sidebar', href: '#' },
                { name: 'Left Sidebar', href: '#' },
                { name: 'Centered', href: '#' },
                {
                    name: 'Post Types',
                    links: [
                        { name: 'Standard Post', href: '#' },
                        { name: 'No Sidebar Post', href: '#' },
                        { name: 'Gallery Post', href: '#' },
                        { name: 'Audio Post', href: '#' },
                        { name: 'Video Post', href: '#' },
                        { name: 'Link Post', href: '#' },
                        { name: 'Quote Post', href: '#' }
                    ]
                }
            ],
        },
        {
            name: 'Shop',
            links: [
                { name: 'Product List', href: '#' },
                { name: 'Product Single', href: '#' },
                {
                    name: 'Shop Layouts',
                    links: [
                        { name: 'Three Columns', href: '#' },
                        { name: 'Three Columns Wide', href: '#' },
                        { name: 'Four Columns', href: '#' },
                        { name: 'Four Columns Wide', href: '#' },
                        { name: 'Five Columns', href: '#' },
                        { name: 'Five Columns Wide', href: '#' }
                    ]
                },
                {
                    name: 'Shop Pages',
                    links: [
                        { name: 'My Account', href: '#' },
                        { name: 'Cart', href: '#' },
                        { name: 'Check Out', href: '#' }
                    ]
                }
            ],
        },
        {
            name: 'Elements',
            links: [
                {
                    name: 'Classic',
                    links: [
                        { name: 'Accordions', href: '#' },
                        { name: 'Tabs', href: '#' },
                        { name: 'Buttons', href: '#' },
                        { name: 'Blog List', href: '#' },
                        { name: 'Clients', href: '#' },
                        { name: 'Contact Form', href: '#' },
                        { name: 'Video Button', href: '#' },
                        { name: 'Image Gallery', href: '#' },
                    ]
                },
                {
                    name: 'Interactive',
                    links: [
                        { name: 'Vertical Split Slider', href: '#' },
                        { name: 'Portfolio Slider', href: '#' },
                        { name: 'INteractive Link Showcase', href: '#' },
                        { name: 'Portfolio List', href: '#' },
                        { name: 'Shop List', href: '#' },
                        { name: 'Process', href: '#' },
                        { name: 'Team', href: '#' },
                        { name: 'Testimonials', href: '#' },
                    ]
                },
                {
                    name: 'InfoGraphic',
                    links: [
                        { name: 'Counter', href: '#' },
                        { name: 'Count Down', href: '#' },
                        { name: 'Progress Bar', href: '#' },
                        { name: 'Pie Chart', href: '#' },
                        { name: 'Pricing Tables', href: '#' },
                        { name: 'Image With text', href: '#' },
                        { name: 'Icon List Item', href: '#' },
                        { name: 'Icon With Text', href: '#' },
                    ]
                },
                {
                    name: 'Typography',
                    links: [
                        { name: 'Headings', href: '#' },
                        { name: 'Columns', href: '#' },
                        { name: 'Section Title', href: '#' },
                        { name: 'Blockquote', href: '#' },
                        { name: 'Dropcaps', href: '#' },
                        { name: 'Highlights', href: '#' },
                        { name: 'Separator', href: '#' },
                        { name: 'Custom Font', href: '#' },
                    ]
                }
            ]
        },
    ],
})
