const PRODUCTS = [
    {
        id: 11,
        type: 'microphone',
        img: './img/cards/microphones/lauten-audio-condensatormicrofoon-diaphragm-sound.png',
        title: "Микрофон Lauten Audio Condensatormicrofoon",
        price: 6634,
        date: '08-09-2021',

    },

    {
        id: 12,
        type: 'microphone',
        img: './img/cards/microphones/georg-neumann.png',
        title: "Микрофон Georg Neumann",
        price: 2344,
        date: '02-02-2022',

    },

    {
        id: 13,
        type: 'microphone',
        img: './img/cards/microphones/studio-microphone-clip.png',
        title: "Studio Microphone Clip",
        price: 1114,
        date: '12-12-2022',

    },

    {
        id: 14,
        type: 'microphone',
        img: './img/cards/microphones/georg-neumann.png',
        title: "Микрофон Georg Neumann",
        price: 2344,
        date: '02-02-2022',

    },

    {
        id: 15,
        type: 'microphone',
        img: './img/cards/microphones/studio-microphone-clip.png',
        title: "Studio Microphone Clip",
        price: 1114,
        date: '12-12-2022',

    },

    {
        id: 16,
        type: 'microphone',
        img: './img/cards/microphones/georg-neumann.png',
        title: "Микрофон Georg Neumann",
        price: 2344,
        date: '02-02-2022',

    },

    {
        id: 17,
        type: 'microphone',
        img: './img/cards/microphones/studio-microphone-clip.png',
        title: "Studio Microphone Clip",
        price: 1114,
        date: '12-12-2022',

    },

    {
        id: 18,
        type: 'microphone',
        img: './img/cards/microphones/georg-neumann.png',
        title: "Микрофон Georg Neumann",
        price: 2344,
        date: '02-02-2022',

    },

    {
        id: 19,
        type: 'microphone',
        img: './img/cards/microphones/georg-neumann.png',
        title: "Микрофон Georg Neumann",
        price: 2344,
        date: '02-02-2022',

    },

    {
        id: 110,
        type: 'microphone',
        img: './img/cards/microphones/studio-microphone-clip.png',
        title: "Studio Microphone Clip",
        price: 1114,
        date: '12-12-2022',

    },

    
    {
        id: 111,
        type: 'microphone',
        img: './img/cards/microphones/georg-neumann.png',
        title: "Микрофон Georg Neumann",
        price: 2344,
        date: '03-02-2022',

    },

    {
        id: 112,
        type: 'microphone',
        img: './img/cards/microphones/studio-microphone-clip.png',
        title: "Studio Microphone Clip",
        price: 1114,
        date: '10-12-2022',

    },
    {
        id: 113,
        type: 'microphone',
        img: './img/cards/microphones/georg-neumann.png',
        title: "Микрофон Georg Neumann",
        price: 2344,
        date: '02-02-2022',

    },


    {
        id: 21,
        type: 'phone',
        img: './img/cards/phones/iPhone-x-IPhone-8-Plus-iPhone-7.png',
        title: "iPhone x IPhone 8-Plus iPhone 7",
        price: 2123,
        date: '02-11-2022',

    },

    {
        id: 22,
        type: 'phone',
        img: './img/cards/phones/lg-v30-lg-g6-samsung-galaxy.png',
        title: "LG V30 LG G6 Samsung Galaxy",
        price: 2322,
        date: '02-11-2022',

    },

    {
        id: 23,
        type: 'phone',
        img: './img/cards/phones/fingerprint-vivo.png',
        title: "Fingerprint VIVO",
        price: 3211,
        date: '06-10-2021',

    },

    {
        id: 24,
        type: 'phone',
        img: './img/cards/phones/iPhone-x-IPhone-8-Plus-iPhone-7.png',
        title: "iPhone x IPhone 8-Plus iPhone 7",
        price: 2123,
        date: '02-11-2022',

    },

    {
        id: 25,
        type: 'phone',
        img: './img/cards/phones/iPhone-x-IPhone-8-Plus-iPhone-7.png',
        title: "iPhone x IPhone 8-Plus iPhone 7",
        price: 2123,
        date: '02-11-2022',

    },

    {
        id: 26,
        type: 'phone',
        img: './img/cards/phones/lg-v30-lg-g6-samsung-galaxy.png',
        title: "LG V30 LG G6 Samsung Galaxy",
        price: 2322,
        date: '02-11-2022',

    },

    {
        id: 27,
        type: 'phone',
        img: './img/cards/phones/fingerprint-vivo.png',
        title: "Fingerprint VIVO",
        price: 2341,
        date: '06-10-2021',

    },

    {
        id: 28,
        type: 'phone',
        img: './img/cards/phones/iPhone-x-IPhone-8-Plus-iPhone-7.png',
        title: "iPhone x IPhone 8-Plus iPhone 7",
        price: 5332,
        date: '02-11-2020',

    },

    {
        id: 29,
        type: 'phone',
        img: './img/cards/phones/iPhone-x-IPhone-8-Plus-iPhone-7.png',
        title: "iPhone x IPhone 8-Plus iPhone 7",
        price: 5312,
        date: '02-11-2022',

    },

    {
        id: 210,
        type: 'phone',
        img: './img/cards/phones/lg-v30-lg-g6-samsung-galaxy.png',
        title: "LG V30 LG G6 Samsung Galaxy",
        price: 2134,
        date: '06-06-2021',

    },

    {
        id: 211,
        type: 'phone',
        img: './img/cards/phones/fingerprint-vivo.png',
        title: "Fingerprint VIVO",
        price: 1111,
        date: '06-10-2021',

    },





    {
        id: 31,
        type: 'laptop',
        img: './img/cards/laptops/isus.png',
        title: "Isus",
        price: 1000,
        date: '03-23-2022',

    },

    {
        id: 32,
        type: 'laptop',
        img: './img/cards/laptops/hp-eliteBook-intel-core-i5-hewlett-packard.png',
        title: "Hp eliteBook intel core i5 hewlett packard",
        price: 1500,
        date: '03-22-2022',

    },
    {
        id: 33,
        type: 'laptop',
        img: './img/cards/laptops/dell-computer-hp-pavilion.png',
        title: "Dell computer hp pavilion",
        price: 2000,
        date: '03-21-2022',

    },

    {
        id: 34,
        type: 'laptop',
        img: './img/cards/laptops/hp-eliteBook-intel-core-i5-hewlett-packard.png',
        title: "Hp eliteBook intel core i5 hewlett packard",
        price: 2134,
        date: '03-20-2022',

    },

    {
        id: 35,
        type: 'laptop',
        img: './img/cards/laptops/dell-computer-hp-pavilion.png',
        title: "Dell computer hp pavilion",
        price: 1459,
        date: '03-19-2022',

    },

    {
        id: 36,
        type: 'laptop',
        img: './img/cards/laptops/isus.png',
        title: "Isus",
        price: 2314,
        date: '03-18-2022',

    },


    {
        id: 37,
        type: 'laptop',
        img: './img/cards/laptops/hp-eliteBook-intel-core-i5-hewlett-packard.png',
        title: "Hp eliteBook intel core i5 hewlett packard",
        price: 1500,
        date: '02-22-2022',

    },
    {
        id: 38,
        type: 'laptop',
        img: './img/cards/laptops/dell-computer-hp-pavilion.png',
        title: "Dell computer hp pavilion",
        price: 2000,
        date: '01-21-2022',

    },

    {
        id: 39,
        type: 'laptop',
        img: './img/cards/laptops/hp-eliteBook-intel-core-i5-hewlett-packard.png',
        title: "Hp eliteBook intel core i5 hewlett packard",
        price: 2134,
        date: '02-20-2022',

    },
    {
        id: 310,
        type: 'laptop',
        img: './img/cards/laptops/hp-eliteBook-intel-core-i5-hewlett-packard.png',
        title: "Hp eliteBook intel core i5 hewlett packard",
        price: 2134,
        date: '03-20-2022',

    },

    {
        id: 311,
        type: 'laptop',
        img: './img/cards/laptops/dell-computer-hp-pavilion.png',
        title: "Dell computer hp pavilion",
        price: 1459,
        date: '03-19-2022',

    },

    {
        id: 312,
        type: 'laptop',
        img: './img/cards/laptops/isus.png',
        title: "Isus",
        price: 2314,
        date: '03-18-2022',

    },








    {
        id: 41,
        type: 'headphone',
        img: './img/cards/headphones/pioneer-corporation-pioneer-dj.png',
        title: "Pioneer Corporation Pioneer DJ",
        price: 1132,
        date: '11-01-2022',

    },
    
    {
        id: 42,
        type: 'headphone',
        img: './img/cards/headphones/beats-electronics.png',
        title: "Beats electronics",
        price: 1323,
        date: '08-05-2022',

    },

    {
        id: 43,
        type: 'headphone',
        img: './img/cards/headphones/jbl-audio.png',
        title: "Jbl audio",
        price: 3123,
        date: '11-05-2022',

    },

    {
        id: 44,
        type: 'headphone',
        img: './img/cards/headphones/beats-electronics.png',
        title: "Beats electronics",
        price: 1323,
        date: '9-04-2022',

    },

    {
        id: 45,
        type: 'headphone',
        img: './img/cards/headphones/jbl-audio.png',
        title: "Jbl audio",
        price: 3212,
        date: '10-06-2022',

    },
    {
        id: 46,
        type: 'headphone',
        img: './img/cards/headphones/beats-electronics.png',
        title: "Beats electronics",
        price: 1222,
        date: '10-05-2022',

    },

    {
        id: 47,
        type: 'headphone',
        img: './img/cards/headphones/jbl-audio.png',
        title: "Jbl audio",
        price: 1232,
        date: '11-04-2022',

    },

    {
        id: 48,
        type: 'headphone',
        img: './img/cards/headphones/beats-electronics.png',
        title: "Beats electronics",
        price: 3312,
        date: '10-05-2022',

    },
    {
        id: 49,
        type: 'headphone',
        img: './img/cards/headphones/jbl-audio.png',
        title: "Jbl audio",
        price: 2312,
        date: '10-05-2022',

    },

    {
        id: 410,
        type: 'headphone',
        img: './img/cards/headphones/beats-electronics.png',
        title: "Beats electronics",
        price: 2312,
        date: '11-06-2022',

    },

];
