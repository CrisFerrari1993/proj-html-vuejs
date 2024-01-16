import { reactive } from 'vue'

export const store = reactive({

    // home links
    homeLinks: [
        { name: 'Floating Portfolio', href: '#'},
        { name: 'Portfolio Pinterest', href: '#'},
        { name: 'Animated Slider', href: '#'},
        { name: 'Portfolio Metro', href: '#'},
        { name: 'Portfolio Gallery', href: '#'},
        { name: 'Interactivce Links', href: '#'},
        { name: 'Split Side Showcase', href: '#'},
        { name: 'Portfolio Carousel', href: '#'},
        { name: 'Landing', href: '#'}
    ],

    // pages links
    pagesLinks: [
        { name: 'About Us', href: '#'},
        { name: 'About Me', href: '#'},
        { name: 'What we Offer', href: '#'},
        { name: 'Working Process', href: '#'},
        { name: 'Our Team', href: '#'},
        { name: 'Pricing Plans', href: '#'},
        { name: 'Contact Us', href: '#'},
        { name: 'Cooming Soon', href: '#'},
        { name: '404 Error Page', href: '#'}
    ]

})