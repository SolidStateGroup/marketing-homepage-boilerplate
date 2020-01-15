const Constants = global.Constants = {
    events: {
        'LOGIN': { 'event': 'User login', 'category': 'User' },
        'REGISTER': { 'event': 'User register', 'category': 'User' },
    },
    defaultLocale: 'en',
    simulate: {
        FORCE_LANGUAGE: false, // set to "en" etc to specify a language
    },
    // <title>
    titles: {
        home: 'Site name', // Used by default on all pages
        blog: 'Blog | Site name',
    },
    // meta:description
    descriptions: {
        // Used by default
        home: 'This is your website description',
    },
    // meta:description
    keywords: {
        // Used by default
        home: 'marketing, business',
    },
    pages: {

    },
};

export default Constants;
