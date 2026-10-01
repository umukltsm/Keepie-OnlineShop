//data produk
var products = [
    {
        id: 1,
        name: "ALPHA DRIVE ONE - 2nd Mini Album [Unbreakable : 少年Beast] (Hissing Ver.) (Random)",
        artist: "alpha drive one",
        type: "albums",
        price: 285766,
        badge: "NEW",
        filter: "new",
        date: 12,
        image: "https://en.mnetplusmerch.com/web/product/big/202608/77d83eed0f9fd78871eaca6d28cc9b85.jpg"
    },
    {
        id: 2,
        name: "ENHYPEN - 8th Mini Album THE SIN : BLISS",
        artist: "enhypen",
        type: "albums",
        price: 388000,
        badge: "NEW",
        filter: "new",
        date: 11,
        image: "https://i.pinimg.com/736x/ba/cd/47/bacd47ed489b3a46aad5fe99c3434fbf.jpg"
    },
    {
        id: 3,
        name: "KiiiKiii - The 3rd EP [WhyKiiiKiii] (SNAPSHOT ver.)",
        artist: "kiiikiii",
        type: "albums",
        price: 1362450,
        badge: "NEW",
        filter: "new",
        date: 10,
        image: "https://i.pinimg.com/736x/39/43/08/3943081c1018b08b7e806b2ec2270108.jpg"
    },
    {
        id: 4,
        name: "HEARTS2HEARTS - The 2nd Mini Album [Lemon Tang] (Photobook Ver.)",
        artist: "hearts2hearts",
        type: "albums",
        price: 298000,
        badge: "NEW",
        filter: "new",
        date: 9,
        image: "https://i.pinimg.com/736x/1f/88/e7/1f88e73968ad3a13d654480c8b412fb5.jpg"
    },
    {
        id: 5,
        name: "CORTIS - The 2nd EP GREENGREEN playextended (CORTIS Ball SET Ver.)",
        artist: "cortis",
        type: "merch",
        price: 2062000,
        badge: "POPULAR",
        filter: "popular",
        date: 8,
        image: "https://i.pinimg.com/1200x/25/65/44/25654432dec73aa7f041a34bcf419764.jpg"
    },
    {
        id: 6,
        name: "BTS - Official Light Stick Ver.4",
        artist: "bts",
        type: "lightsticks",
        price: 1550000,
        badge: "POPULAR",
        filter: "popular",
        date: 7,
        image: "https://i.pinimg.com/736x/e0/84/32/e08432169a80a53afdbaaf6c011c9276.jpg"
    },
    {
        id: 7,
        name: "ENHYPEN - [ENCHIN] Plush Keyring",
        artist: "enhypen",
        type: "merch",
        price: 450000,
        badge: "POPULAR",
        filter: "popular",
        date: 6,
        image: "https://cdn-contents.weverseshop.io/public/shop/43b265eab5c2b5bc89a45ef41bae728a.png?w=720&q=95"
    },
    {
        id: 8,
        name: "HEARTS2HEARTS - The 2nd Mini Album [Lemon Tang] (Summer Kit Ver.)",
        artist: "hearts2hearts",
        type: "albums",
        price: 950000,
        badge: "POPULAR",
        filter: "popular",
        date: 5,
        image: "https://i.pinimg.com/1200x/b7/aa/41/b7aa41b683fe184dc34773e92db7ea4a.jpg"
    },
    {
        id: 9,
        name: "ENHYPEN - Official Light Stick Ver.2",
        artist: "enhypen",
        type: "lightsticks",
        price: 1250000,
        badge: "",
        filter: "",
        date: 4,
        image: "https://cdn-contents.weverseshop.io/public/shop/f7ac8a297ddb5c78127396065248f35d.png?w=720&q=95"
    },
    {
        id: 10,
        name: "BTS - Mesh Cross Bag",
        artist: "bts",
        type: "merch",
        price: 879000,
        badge: "",
        filter: "",
        date: 3,
        image: "https://cdn-contents.weverseshop.io/public/shop/71ce59c4a04cee21c7f13b41418fe934.png?w=720&q=95"
    },
    {
        id: 11,
        name: "BTS - ARIRANG (Weverse Albums ver.)",
        artist: "bts",
        type: "albums",
        price: 261000,
        badge: "",
        filter: "",
        date: 2,
        image: "https://cdn-contents.weverseshop.io/public/shop/a553bd922b5b00f2fa5f479e52a5863c.png?w=720&q=95"
    },
    {
        id: 12,
        name: "BTS - Charm of HOPE (Sweat Dreams ver.)",
        artist: "bts",
        type: "albums",
        price: 572000,
        badge: "",
        filter: "",
        date: 1,
        image: "https://cdn-contents.weverseshop.io/public/shop/4470c7973d85fd6effe4dbad3efdd4f4.png?w=720&q=95"
    },
    {
        id: 13,
        name: "BTS - 7 MOMENTS",
        artist: "bts",
        type: "dvd/media",
        price: 716000,
        badge: "",
        filter: "",
        date: 9,
        image: "https://cdn-contents.weverseshop.io/public/shop/82631cd1b565bc59830d27f1892be544.png?w=720&q=95"
    },
    {
        id: 14,
        name: "ALPHA DRIVE ONE - [Ubreakable : 少年BEAST] Cap",
        artist: "alphadriveone",
        type: "merch",
        price: 715000,
        badge: "",
        filter: "",
        date: 10,
        image: "https://en.mnetplusmerch.com/web/product/big/202609/d93e1657c9245ba22b3bd6262230c147.jpg"
    },
    {
        id: 15,
        name: "ALPHA DRIVE ONE - Official Light Stick",
        artist: "alphadriveone",
        type: "lightsticks",
        price: 914000,
        badge: "",
        filter: "",
        date: 8,
        image: "https://en.mnetplusmerch.com/web/product/big/202605/f00b8789ede8fade8a07a74293bb338e.jpg"
    },
    {
        id: 16,
        name: "ALPHA DRIVE ONE - [Unbreakable : 少年BEAST] Random Trading Photocard SET",
        artist: "alphadriveone",
        type: "merch",
        price: 135000,
        badge: "",
        filter: "",
        date: 3,
        image: "https://en.mnetplusmerch.com/web/product/big/202609/7b91ac37788c24f1551204dce05eea96.jpg"
    },
    {
        id: 17,
        name: "ALPHA DRIVE ONE - The 1st Mini Album [EUPHORIA] (STAR ROAD ver.)",
        artist: "alphadriveone",
        type: "albums",
        price: 363000,
        badge: "",
        filter: "",
        date: 5,
        image: "https://en.mnetplusmerch.com/web/product/small/20260421/bff82b3a6ba70b18eb9e92aa5f7d1319.png"
    },
    {
        id: 18,
        name: "CORTIS - Official Light Stick",
        artist: "cortis",
        type: "lightsticks",
        price: 829000,
        badge: "",
        filter: "",
        date: 4,
        image: "https://cdn-contents.weverseshop.io/public/shop/cc81644912182f060e7d344ee8207148.png?w=720&q=95"
    },
    {
        id: 19,
        name: "CORTIS - The 1st [COLOR OUTSIDE THE LINES] (Singing Bowl ver.)",
        artist: "cortis",
        type: "albums",
        price: 610000,
        badge: "",
        filter: "",
        date: 4,
        image: "https://cdn-contents.weverseshop.io/public/shop/804345d29e630c468665cf7553d51ed0.png?w=720&q=95"
    },
    {
        id: 20,
        name: "CORTIS - The 2nd EP [GREENGREEN] (Set)",
        artist: "cortis",
        type: "albums",
        price: 862000,
        badge: "",
        filter: "",
        date: 4,
        image: "https://cdn-contents.weverseshop.io/public/shop/304aece6353fb4ef1aa13e409d5f452e.png?w=720&q=95"
    },
    {
        id: 21,
        name: "CORTIS - GQ Korea (2026.01 / Set)",
        artist: "cortis",
        type: "dvd/media",
        price: 923000,
        badge: "",
        filter: "",
        date: 4,
        image: "https://i.pinimg.com/1200x/97/3d/17/973d17b8175f5aa40c053742a9884b64.jpg"
    },
    {
        id: 22,
        name: "CORTIS - Ball Ring",
        artist: "cortis",
        type: "merch",
        price: 382000,
        badge: "",
        filter: "",
        date: 4,
        image: "https://cdn-contents.weverseshop.io/public/shop/e988876fcbe47765a6c87345aa577f31.png?w=720&q=95"
    },
    {
        id: 23,
        name: "ENHYPEN - Desire : Unleash (BATH BOMB Ver.)",
        artist: "enhypen",
        type: "albums",
        price: 488000,
        badge: "",
        filter: "",
        date: 6,
        image: "https://cdn-contents.weverseshop.io/public/shop/16a09d2a7ba4114d62bdd93b1d0d43a4.png?w=720&q=95"
    },
    {
        id: 24,
        name: "ENHYPEN - The Sin : Vanish (Random)",
        artist: "enhypen",
        type: "albums",
        price: 365000,
        badge: "",
        filter: "",
        date: 6,
        image: "https://cdn-contents.weverseshop.io/public/shop/6f042bba62872f69059f7ee68c5e82eb.png?w=720&q=95"
    },
    {
        id: 25,
        name: "ENHYPEN - JAPAN 4th Single「宵 -YOI-」3 Set",
        artist: "enhypen",
        type: "albums",
        price: 960000,
        badge: "",
        filter: "",
        date: 6,
        image: "https://cdn-contents.weverseshop.io/public/shop/87aee526e54c6c93f8520f5471094884.png?w=720&q=95"
    },
    {
        id: 26,
        name: "ENHYPEN - Lyrics Guide Binder Book",
        artist: "enhypen",
        type: "dvd/media",
        price: 598000,
        badge: "",
        filter: "",
        date: 6,
        image: "https://cdn-contents.weverseshop.io/public/shop/bfd0e9a6fd69df7da0c71283deb0faec.png?w=720&q=95"
    },
    {
        id: 27,
        name: "ENHYPEN - GGU GGU Package",
        artist: "enhypen",
        type: "dvd/media",
        price: 495000,
        badge: "",
        filter: "",
        date: 6,
        image: "https://cdn-contents.weverseshop.io/public/shop/324de1c9b9690a50f1889d835d50cfaa.png?w=720&q=95"
    },
    {
        id: 28,
        name: "ENHYPEN - World Tour 'WALK THE LINE' In Goyang",
        artist: "enhypen",
        type: "dvd/media",
        price: 822000,
        badge: "",
        filter: "",
        date: 6,
        image: "https://cdn-contents.weverseshop.io/public/shop/8e20dfb906b306dd52bdcf138a255242.png?w=720&q=95"
    },
    {
        id: 29,
        name: "ENHYPEN - Image Picket",
        artist: "enhypen",
        type: "merch",
        price: 228000,
        badge: "",
        filter: "",
        date: 6,
        image: "https://cdn-contents.weverseshop.io/public/shop/f661f1375789a4023bf17b4248a2c0ad.png?w=720&q=95"
    },
    {
        id: 30,
        name: "ENHYPEN - Chain Bracelet",
        artist: "enhypen",
        type: "merch",
        price: 600000,
        badge: "",
        filter: "",
        date: 6,
        image: "https://cdn-contents.weverseshop.io/public/shop/d8d730e40b3482df1b598394a8225ee7.png?w=720&q=95"
    },
    {
        id: 31,
        name: "ENHYPEN - Shirt & Tie Set",
        artist: "enhypen",
        type: "merch",
        price: 1151000,
        badge: "",
        filter: "",
        date: 6,
        image: "https://cdn-contents.weverseshop.io/public/shop/0ae1bac5ddb9881e09b24705f53da67c.png?w=720&q=95"
    },
    {
        id: 32,
        name: "ENHYPEN - Water Bottle",
        artist: "enhypen",
        type: "merch",
        price: 510000,
        badge: "",
        filter: "",
        date: 6,
        image: "https://cdn-contents.weverseshop.io/public/shop/9e1a99860179ffab9bfe509e23fdb243.png?w=720&q=95"
    },
    {
        id: 33,
        name: "ENHYPEN - Lucky Draw - Earphone Winder (RANDOM)",
        artist: "enhypen",
        type: "merch",
        price: 190000,
        badge: "",
        filter: "",
        date: 6,
        image: "https://cdn-contents.weverseshop.io/public/shop/583255bc0947b7291815c2dbccd90ddf.png?w=720&q=95"
    },
    {
        id: 34,
        name: "ENHYPEN - Rain Poncho",
        artist: "enhypen",
        type: "merch",
        price: 805000,
        badge: "",
        filter: "",
        date: 6,
        image: "https://cdn-contents.weverseshop.io/public/shop/3b67d58d3188abfe80d0e61c8029dc7e.png?w=720&q=95"
    },
    {
        id: 35,
        name: "HEARTS2HEARTS - Official Light Stick",
        artist: "hearts2hearts",
        type: "lightsticks",
        price: 730000,
        badge: "",
        filter: "",
        date: 5,
        image: "https://cdn-contents.weverseshop.io/public/shop/ab508e294ce73f6d0a7a660ada5decf7.png?w=720&q=95"
    },
    {
        id: 36,
        name: "HEARTS2HEARTS - Acrylic Photo Stand",
        artist: "hearts2hearts",
        type: "merch",
        price: 241000,
        badge: "",
        filter: "",
        date: 5,
        image: "https://cdn-contents.weverseshop.io/public/shop/6491fbe8616f94a204fee3f10f3b72b5.png?w=720&q=95"
    },
    {
        id: 37,
        name: "HEARTS2HEARTS - The 1st Single [The Chase] (Package Ver.)",
        artist: "hearts2hearts",
        type: "albums",
        price: 360000,
        badge: "",
        filter: "",
        date: 5,
        image: "https://cdn-contents.weverseshop.io/public/shop/124b47c129e54ef33215436a936fd662.png?w=720&q=95"
    },
    {
        id: 38,
        name: "ILLIT - Official Light Stick",
        artist: "illit",
        type: "lightsticks",
        price: 734000,
        badge: "",
        filter: "",
        date: 8,
        image: "https://cdn-contents.weverseshop.io/public/shop/046e0e123fa7c76dcba9e7e3bfaa108a.png?w=720&q=95"
    },
    {
        id: 39,
        name: "ILLIT - Original Rain Boots Short Dot",
        artist: "illit",
        type: "merch",
        price: 1630000,
        badge: "",
        filter: "",
        date: 8,
        image: "https://cdn-contents.weverseshop.io/public/shop/746f90ec8537c1a1a17571eb641a2dbc.png?w=720&q=95"
    },
    {
        id: 40,
        name: "ILLIT - 4th Mini Album 'MAMIHLAPINATAPAI' (Gua Sha Ceramic Object ver.)",
        artist: "illit",
        type: "albums",
        price: 646000,
        badge: "",
        filter: "",
        date: 8,
        image: "https://cdn-contents.weverseshop.io/public/shop/3b7b1a01fbcf673c24e4b84f0add470d.png?w=720&q=95"
    },
    {
        id: 41,
        name: "ILLIT - Japan 2nd Single 'I Got Your Back' (LIMITED EDITION)",
        artist: "illit",
        type: "albums",
        price: 472000,
        badge: "",
        filter: "",
        date: 8,
        image: "https://cdn-contents.weverseshop.io/public/shop/2581fe37fad4b0e32c14dec6f9be8dc9.png?w=720&q=95"
    },
    {
        id: 42,
        name: "ILLIT - 1st Single Album 'NOT CUTE ANYMORE' (Set)",
        artist: "illit",
        type: "albums",
        price: 609000,
        badge: "",
        filter: "",
        date: 8,
        image: "https://cdn-contents.weverseshop.io/public/shop/fafa84fd73d6c07fbe411e5da2392b13.png?w=720&q=95"
    },
    {
        id: 43,
        name: "ILLIT - 1st Single Album 'NOT CUTE ANYMORE' (Little Mimi Ver.)",
        artist: "illit",
        type: "albums",
        price: 729000,
        badge: "",
        filter: "",
        date: 8,
        image: "https://cdn-contents.weverseshop.io/public/shop/1a172da5586e71473a78ed74cf82b961.png?w=720&q=95"
    },
    {
        id: 44,
        name: "ILLIT - Sling Bag",
        artist: "illit",
        type: "merch",
        price: 360000,
        badge: "",
        filter: "",
        date: 8,
        image: "https://cdn-contents.weverseshop.io/public/shop/7e9670991c23b93052e6715d88aa62d0.png?w=720&q=95"
    },
    {
        id: 45,
        name: "ILLIT - Plush Keyring",
        artist: "illit",
        type: "merch",
        price: 433000,
        badge: "",
        filter: "",
        date: 8,
        image: "https://cdn-contents.weverseshop.io/public/shop/94a893b6cdc736f9fea5b866b8f10b0f.png?w=720&q=95"
    },
    {
        id: 46,
        name: "ILLIT - Photobook [I'll change it : PUPPY LOVE]",
        artist: "illit",
        type: "dvd/media",
        price: 587000,
        badge: "",
        filter: "",
        date: 8,
        image: "https://cdn-contents.weverseshop.io/public/shop/5ccb4c4fe0276b29aaac1856394cecaa.png?w=720&q=95"
    },
    {
        id: 47,
        name: "IVE - Official Light Stick Ver.2",
        artist: "ive",
        type: "lightsticks",
        price: 989000,
        badge: "",
        filter: "",
        date: 7,
        image: "https://kpopmerch.com/cdn/shop/files/ive-md-goods-ive-official-light-stick-ver-2-1200500574_1000x.jpg?v=1761799987"
    },
    {
        id: 48,
        name: "IVE - White Show What I Am Portrait Tee",
        artist: "ive",
        type: "merch",
        price: 896000,
        badge: "",
        filter: "",
        date: 7,
        image: "https://shopivemerch.com/cdn/shop/files/WhiteShowWhatIAmPortraitTee1.png?v=1783993105&width=3840"
    },
    {
        id: 49,
        name: "IVE - The 2nd Album REVIVE+",
        artist: "ive",
        type: "albums",
        price: 442000,
        badge: "",
        filter: "",
        date: 7,
        image: "https://kpopmerch.com/cdn/shop/files/ive-album-starship-bangers-ive-the-2nd-album-revive-1219753899_1000x.jpg?v=1770620709"
    },
    {
        id: 50,
        name: "LE SSERAFIM - Official Light Stick",
        artist: "lesserafim",
        type: "lightsticks",
        price: 735000,
        badge: "",
        filter: "",
        date: 3,
        image: "https://cdn-contents.weverseshop.io/public/shop/68b43823716a52272e25fbc9706d26e7.png?w=720&q=95"
    },
    {
        id: 51,
        name: "LE SSERAFIM - 2nd Single Album 'Made My Night' Glow Clicker Keychain (Pink ver.)",
        artist: "lesserafim",
        type: "albums",
        price: 481000,
        badge: "",
        filter: "",
        date: 3,
        image: "https://cdn-contents.weverseshop.io/public/shop/f3b6337eb3c75c70d73edeb95c1bd507.png?w=720&q=95"
    },
    {
        id: 52,
        name: "LE SSERAFIM - 1st Single Album 'SPAGHETTI' Vinyl (Random)",
        artist: "lesserafim",
        type: "albums",
        price: 580000,
        badge: "",
        filter: "",
        date: 3,
        image: "https://cdn-contents.weverseshop.io/public/shop/2ea8debf0f11c8bf720fb9cbdc791d46.png?w=720&q=95"
    },
    {
        id: 53,
        name: "LE SSERAFIM - 'ON-OFF 23-24'",
        artist: "lesserafim",
        type: "dvd/media",
        price: 753000,
        badge: "",
        filter: "",
        date: 3,
        image: "https://cdn-contents.weverseshop.io/public/shop/c93ac9c81da0f6f7fb6b4d751b428ff9.png?w=720&q=95"
    },
    {
        id: 54,
        name: "LE SSERAFIM - '23-24 Film Photobook'",
        artist: "lesserafim",
        type: "dvd/media",
        price: 421000,
        badge: "",
        filter: "",
        date: 3,
        image: "https://cdn-contents.weverseshop.io/public/shop/58b02ae3a620574b50f846b153a9aa27.png?w=720&q=95"
    },
    {
        id: 55,
        name: "LE SSERAFIM - Hoodie",
        artist: "lesserafim",
        type: "merch",
        price: 1420000,
        badge: "",
        filter: "",
        date: 3,
        image: "https://cdn-contents.weverseshop.io/public/shop/9ec339c6765188169af79f23e576e3d1.png?w=720&q=95"
    },
    {
        id: 56,
        name: "LE SSERAFIM - Speaker",
        artist: "lesserafim",
        type: "merch",
        price: 1110000,
        badge: "",
        filter: "",
        date: 3,
        image: "https://cdn-contents.weverseshop.io/public/shop/773a5a1eb908b598588f5f6a223c7475.png?w=720&q=95"
    },
    {
        id: 57,
        name: "LNGSHOT - EP Album [SHOT CALLERS] (Standard Ver.)",
        artist: "lngshot",
        type: "albums",
        price: 410000,
        badge: "",
        filter: "",
        date: 4,
        image: "https://i.pinimg.com/736x/a6/1b/df/a61bdf49921563d75fccb9e1b5d7f259.jpg"
    },
    {
        id: 58,
        name: "LNGSHOT - EP Album [SHOT CALLERS] (Magazine Ver.)",
        artist: "lngshot",
        type: "albums",
        price: 427000,
        badge: "",
        filter: "",
        date: 4,
        image: "https://i.pinimg.com/736x/ba/30/c2/ba30c2a4e931cf6c7ac7aa34ea794c3d.jpg"
    },
    {
        id: 59,
        name: "LNGSHOT - ARENA HOMME+ Magazine Cover [D Ver. RYUL] (May 2026)",
        artist: "lngshot",
        type: "dvd/media",
        price: 328000,
        badge: "",
        filter: "",
        date: 4,
        image: "https://kpopmerch.com/cdn/shop/files/lngshot-magazine-d-ver-ryul-lngshot-arena-homme-magazine-cover-may-2026-1232259879_1000x.jpg?v=1776070327"
    },
    {
        id: 60,
        name: "LNGSHOT - ARENA HOMME+ Magazine Cover [B Ver. GROUP] (May 2026)",
        artist: "lngshot",
        type: "dvd/media",
        price: 328000,
        badge: "",
        filter: "",
        date: 4,
        image: "https://kpopmerch.com/cdn/shop/files/lngshot-magazine-b-ver-group-lngshot-arena-homme-magazine-cover-may-2026-1232259881_1000x.jpg?v=1776070448"
    },
    {
        id: 61,
        name: "SEVENTEEN - Official Light Stick VER.3",
        artist: "seventeen",
        type: "lightsticks",
        price: 829000,
        badge: "",
        filter: "",
        date: 1,
        image: "https://cdn-contents.weverseshop.io/public/shop/8cbcd523035c896eb36dbaaac83350e9.png?w=720&q=95"
    },
    {
        id: 62,
        name: "SEVENTEEN - Official Light Stick VER.3 (10th Anniv.)",
        artist: "seventeen",
        type: "lightsticks",
        price: 829000,
        badge: "",
        filter: "",
        date: 9,
        image: "https://cdn-contents.weverseshop.io/public/shop/ecc3f2c4a93629414f5f22cc95736c67.png?w=720&q=95"
    },
    {
        id: 63,
        name: "SEVENTEEN - 에스쿱스X민규 1st Mini Album 'HYPE VIBES' (Random)",
        artist: "seventeen",
        type: "albums",
        price: 345000,
        badge: "",
        filter: "",
        date: 1,
        image: "https://cdn-contents.weverseshop.io/public/shop/c1947607e1a0f1e9bf8020b4332f4dff.png?w=720&q=95"
    },
    {
        id: 64,
        name: "SEVENTEEN - V8 1st Mini Album 'V8' (Weverse Albums ver.)",
        artist: "seventeen",
        type: "albums",
        price: 227000,
        badge: "",
        filter: "",
        date: 9,
        image: "https://cdn-contents.weverseshop.io/public/shop/5f52da9722b84c5ee93988d0782d0055.png?w=720&q=95"
    },
    {
        id: 65,
        name: "SEVENTEEN - JxJ 1st Mini Album 'DREAMSCAPE' (Weverse Albums ver.)",
        artist: "seventeen",
        type: "albums",
        price: 227000,
        badge: "",
        filter: "",
        date: 9,
        image: "https://cdn-contents.weverseshop.io/public/shop/c9e9958f37582302580c14e7d8cc0cf3.png?w=720&q=95"
    },
    {
        id: 66,
        name: "SEVENTEEN - [JUN] O.C.L Phone Case Set",
        artist: "seventeen",
        type: "merch",
        price: 857000,
        badge: "",
        filter: "",
        date: 9,
        image: "https://cdn-contents.weverseshop.io/public/shop/5356d258430d0076ce547d19cf26942a.png?w=720&q=95"
    },
    {
        id: 67,
        name: "SEVENTEEN - BONGBONGEE Official Light Stick Parts Keyring",
        artist: "seventeen",
        type: "merch",
        price: 292000,
        badge: "",
        filter: "",
        date: 9,
        image: "https://cdn-contents.weverseshop.io/public/shop/3dcbcaf5a8e2c697322f43650d8b5057.png?w=720&q=95"
    },
    {
        id: 68,
        name: "SEVENTEEN - [WONWOO] Love Packed Keyboard",
        artist: "seventeen",
        type: "merch",
        price: 1610000,
        badge: "",
        filter: "",
        date: 9,
        image: "https://cdn-contents.weverseshop.io/public/shop/ec3b1ff7ceaa99c93d3c2a5aa77a3464.png?w=720&q=95"
    },
    {
        id: 69,
        name: "SEVENTEEN - Keychain",
        artist: "seventeen",
        type: "merch",
        price: 228000,
        badge: "",
        filter: "",
        date: 9,
        image: "https://cdn-contents.weverseshop.io/public/shop/d9e16d661370ce3d5344809db82c005a.png?w=720&q=95"
    },
    {
        id: 70,
        name: "SEVENTEEN - 2025 SVT 6th Fan Meeting <SEVENTEEN IN CARAT LAND> Memory Book+",
        artist: "seventeen",
        type: "dvd/media",
        price: 805000,
        badge: "",
        filter: "",
        date: 9,
        image: "https://cdn-contents.weverseshop.io/public/shop/81671e826eb71dc3cfeec62d8f1df926.png?w=720&q=95"
    },
    {
        id: 71,
        name: "SEVENTEEN - Unit Photobook [EPISODE D]",
        artist: "seventeen",
        type: "dvd/media",
        price: 522000,
        badge: "",
        filter: "",
        date: 9,
        image: "https://cdn-contents.weverseshop.io/public/shop/17c1499037a5ca1aea3b14a2cd422b91.png?w=720&q=95"
    },
    {
        id: 72,
        name: "SEVENTEEN - World Tour [NEW_] DC",
        artist: "seventeen",
        type: "dvd/media",
        price: 895000,
        badge: "",
        filter: "",
        date: 9,
        image: "https://cdn-contents.weverseshop.io/public/shop/3941f212bda8998ab9d00044cc1aaf3b.png?w=720&q=95"
    },
    {
        id: 73,
        name: "TOMORROW X TOGETHER - Official Light Stick Ver.2",
        artist: "txt",
        type: "lightsticks",
        price: 827000,
        badge: "",
        filter: "",
        date: 9,
        image: "https://cdn-contents.weverseshop.io/public/shop/9f63a9d55077ed1abbaa2e7490bca605.png?w=720&q=95"
    },
    {
        id: 74,
        name: "TOMORROW X TOGETHER - 7TH YEAR: A Moment of Stillness in the Thorns (Random)",
        artist: "txt",
        type: "albums",
        price: 354000,
        badge: "",
        filter: "",
        date: 9,
        image: "https://cdn-contents.weverseshop.io/public/shop/19689c7a6bec2682289a4cfd928a5ff1.png?w=720&q=95"
    },
    {
        id: 75,
        name: "TOMORROW X TOGETHER - JP 5th SINGLE 'Setsuna Hanabi' (Solo Jacket Edition)",
        artist: "txt",
        type: "albums",
        price: 395000,
        badge: "",
        filter: "",
        date: 9,
        image: "https://cdn-contents.weverseshop.io/public/shop/41fa91b5f2cc9166bbf9443c3095ba8f.png?w=720&q=95"
    },
    {
        id: 76,
        name: "TOMORROW X TOGETHER - 'NO LABELS'",
        artist: "txt",
        type: "albums",
        price: 766000,
        badge: "",
        filter: "",
        date: 9,
        image: "https://cdn-contents.weverseshop.io/public/shop/47dc527d7c993526d81ff86c28b2dc0b.png?w=720&q=95"
    },
    {
        id: 77,
        name: "TOMORROW X TOGETHER - Desk Mirror",
        artist: "txt",
        type: "merch",
        price: 590000,
        badge: "",
        filter: "",
        date: 9,
        image: "https://cdn-contents.weverseshop.io/public/shop/fa57d0102042466d4c7423b15c2b5e83.png?w=720&q=95"
    },
    {
        id: 78,
        name: "TOMORROW X TOGETHER - '[TXT X SENTIMENTS] Hair Claw Clip'",
        artist: "txt",
        type: "merch",
        price: 678000,
        badge: "",
        filter: "",
        date: 9,
        image: "https://cdn-contents.weverseshop.io/public/shop/8ab4de62a980714bae53f67fa6634c17.png?w=720&q=95"
    },
    {
        id: 79,
        name: "TOMORROW X TOGETHER - Plush Keyring",
        artist: "txt",
        type: "merch",
        price: 443000,
        badge: "",
        filter: "",
        date: 9,
        image: "https://cdn-contents.weverseshop.io/public/shop/85cc9ec77b84bb57f77e0bd12255cb07.png?w=720&q=95"
    },
    {
        id: 80,
        name: "TOMORROW X TOGETHER - Image Picket",
        artist: "txt",
        type: "merch",
        price: 228000,
        badge: "",
        filter: "",
        date: 9,
        image: "https://cdn-contents.weverseshop.io/public/shop/4363f79e5bda34cf883afb9b2a28a55a.png?w=720&q=95"
    },
    {
        id: 81,
        name: "TOMORROW X TOGETHER - 2025 Deco Kit",
        artist: "txt",
        type: "dvd/media",
        price: 485000,
        badge: "",
        filter: "",
        date: 9,
        image: "https://cdn-contents.weverseshop.io/public/shop/982c5150401496183dc9a5c000e473ef.png?w=720&q=95"
    },
    {
        id: 82,
        name: "TOMORROW X TOGETHER - World Tour <ACT : TOMORROW> In Seoul",
        artist: "txt",
        type: "dvd/media",
        price: 820000,
        badge: "",
        filter: "",
        date: 9,
        image: "https://cdn-contents.weverseshop.io/public/shop/2ca0053eb348c06427fe3f4f0205a714.png?w=720&q=95"
    },
    {
        id: 83,
        name: "TOMORROW X TOGETHER - Harper's BAZAAR (2026.10 / C type)",
        artist: "txt",
        type: "dvd/media",
        price: 282000,
        badge: "",
        filter: "",
        date: 9,
        image: "https://cdn-contents.weverseshop.io/public/shop/f7c53943eb13061e13138c76e8097da2.png?w=720&q=95"
    },
];
/*  ==========
    menu shop
    ==========*/
//elemen html
var productGrid = document.getElementById("productGrid");
var pagination = document.getElementById("pagination");
var productCount = document.getElementById("productCount");
var activeFilterText = document.getElementById("activeFilterText");
var emptyMessage = document.getElementById("emptyMessage");
var artistFilter = document.getElementById("artistFilter");
var typeFilter = document.getElementById("typeFilter");
var sortFilter = document.getElementById("sortFilter");
var resetFilters = document.getElementById("resetFilters");
var emptyReset = document.getElementById("emptyReset");
var categoryButtons = document.querySelectorAll(".category-item");
var shopTitle = document.getElementById("shop-title");
var shopSubtitle = document.getElementById("shop-subtitle");

//format mata uang
function formatPrice(price) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency", currency: "IDR", maximumFractionDigits: 0
    }).format(price);
}

//tampilan produk
var productsPerPage = 24;
var currentPage = 1;
var currentProducts = [];
function displayProducts(productList) {
    currentProducts = productList;
    var totalPages = Math.ceil(productList.length / productsPerPage);

    if (currentPage > totalPages && totalPages > 0) {
        currentPage = totalPages;
    }

    var start = (currentPage - 1) * productsPerPage;
    var end = start + productsPerPage;
    var productsToShow = productList.slice(start, end);
    productGrid.innerHTML = "";
    productsToShow.forEach(product => {
        var badgeHTML = "";
        if (product.badge === "NEW") {
            badgeHTML = `<span class="badge"> NEW </span>`;
        }
        else if (product.badge === "POPULAR") {
            badgeHTML = `<span class="badge popular"> POPULAR </span>`;
        }
        var productCard = document.createElement("a");
        productCard.className = "product-card";
        productCard.href = `product.html?product=${product.id}`;
        productCard.innerHTML = `<div class="product-photo"> ${badgeHTML}
                <span class="heart" data-product-id="${product.id}" > ♡ </span>
                <img src="${product.image}" alt="${product.name}" class="product-img">
            </div>
            <p class="product-group"> ${product.artist} </p>
            <h3> ${product.name} </h3>
            <strong> ${formatPrice(product.price)} </strong>`;
        productGrid.appendChild(productCard);
    });

    productCount.textContent = `${productList.length} product${productList.length !== 1 ? "s" : ""}`;
    if (productList.length === 0) {
        emptyMessage.classList.add("show");
    } else {
        emptyMessage.classList.remove("show");
    }
    createPagination(totalPages);
}

//navigasi halaman di menu shop
function createPagination(totalPages) {
    pagination.innerHTML = "";
    if (totalPages <= 1) {
        return;
    }
    var previousButton = document.createElement("button");
    previousButton.textContent = "←";
    previousButton.disabled = currentPage === 1;
    previousButton.addEventListener(
        "click", function () {
            currentPage--;
            displayProducts(currentProducts);
            scrollToProducts();
        }
    );
    pagination.appendChild(previousButton);
    for (var page = 1; page <= totalPages; page++) {
        var pageButton = document.createElement("button");
        pageButton.textContent = page;
        if (page === currentPage) {
            pageButton.classList.add("active");
        }
        pageButton.addEventListener(
            "click", function () {
                currentPage = Number(this.textContent);
                displayProducts(currentProducts);
                scrollToProducts();
            }
        );
        pagination.appendChild(pageButton);
    }
    var nextButton = document.createElement("button");
    nextButton.textContent = "→";
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener(
        "click", function () {
            currentPage++;
            displayProducts(currentProducts);
            scrollToProducts();
        }
    );
    pagination.appendChild(nextButton);
}

//scroll area produk
function scrollToProducts() {
    var productSection = document.querySelector(".product-section");
    if (productSection) {
        productSection.scrollIntoView({behavior: "smooth", block: "start"});
    }
}

//search button di navbar
var searchButton = document.querySelector(".search-btn");
var navSearch = document.getElementById("navSearch");
var searchInput = document.getElementById("searchInput");
if (searchButton && navSearch && searchInput) {
    searchButton.addEventListener("click", function () {
        navSearch.classList.toggle("show");
        if (navSearch.classList.contains("show")) {
            searchInput.focus();
        }
    });
    navSearch.addEventListener("submit", function (event) {
        event.preventDefault();
        var searchText = searchInput.value.trim();
        if (searchText === "") {
            return;
        }
        window.location.href = `shop.html?search=${encodeURIComponent(searchText)}`;
    });
}

//hamburger menu di mobile
var menuBtn = document.querySelector(".menu-btn");
var mobileMenu = document.querySelector(".mobile-menu");
if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function() {
        if (mobileMenu.style.display === "flex") {
            mobileMenu.style.display = "none";
        } else {
            mobileMenu.style.display = "flex";
        }
    });
}

//untuk manage wishlist
function getWishlist() {
    return JSON.parse(localStorage.getItem("keepieWishlist") || "[]");
}
function saveWishlist(wishlist) {
    localStorage.setItem ( "keepieWishlist", JSON.stringify(wishlist));
}
function updateWishlistHearts() {
    var wishlist = getWishlist();
    document.querySelectorAll(".heart").forEach(heart => {
        var productId = Number(heart.dataset.productId);
        if (wishlist.includes(productId)) {
            heart.textContent = "♥";
            heart.classList.add("liked");
        } else {
            heart.textContent = "♡";
            heart.classList.remove("liked");
        }
    });
}
function displayWishlist() {
    var wishlistGrid = document.getElementById("wishlistGrid");
    var wishlistEmpty = document.getElementById("wishlistEmpty");
    var wishlistCount = document.getElementById("wishlistCount");
    if (!wishlistGrid) {
        return;
    }
    var wishlist = getWishlist();
    var wishlistProducts = products.filter (product => wishlist.includes(product.id));
    wishlistGrid.innerHTML = "";
    wishlistProducts.forEach(product => {
        var badgeHTML = "";
        if (product.badge === "NEW") {
            badgeHTML = `<span class="badge"> NEW </span>`;
        } else if (product.badge === "POPULAR") {
            badgeHTML = `<span class="badge popular"> POPULAR </span>`;
        }
        var productCard = document.createElement("a");
        productCard.className = "product-card";
        productCard.href = `product.html?product=${product.id}`;
        productCard.innerHTML = `<div class="product-photo"> ${badgeHTML}
                <span class="heart liked" data-product-id="${product.id}"> ♥ </span>
                <img src="${product.image}" alt="${product.name}" class="product-img">
            </div>
            <p class="product-group"> ${product.artist} </p>
            <h3> ${product.name} </h3>
            <strong> ${formatPrice(product.price)} </strong>`;
        wishlistGrid.appendChild(productCard);
    });
    wishlistCount.textContent = `${wishlistProducts.length} product${wishlistProducts.length !== 1 ? "s" : ""}`;
    if (wishlistProducts.length === 0) {
        wishlistEmpty.classList.add("show");
    } else {
        wishlistEmpty.classList.remove("show");
    }
}

//delegasi klik tombol wishlist
document.addEventListener("click", function(event) {
    var heart = event.target.closest(".heart");
    if (!heart) {
        return;
    }
    event.preventDefault();
    event.stopPropagation();
    var productId = Number(heart.dataset.productId);
    var wishlist = getWishlist();
    if (wishlist.includes(productId)) {
        wishlist = wishlist.filter(id => id !== productId);
    } else {
        wishlist.push(productId);
    }
    saveWishlist(wishlist);
    updateWishlistHearts();
    if (document.getElementById("wishlistGrid")) {
    displayWishlist();
    }
});

//apply filters & sort
function applyFilters() {
    currentPage = 1;
    var result = [...products];
    var selectedArtist = artistFilter.value;
    var selectedType = typeFilter.value;
    var selectedSort = sortFilter.value;

    if (selectedArtist !== "all") {
        result = result.filter(product => product.artist.replace(/\s+/g, "").toLowerCase() === selectedArtist.replace(/\s+/g, "").toLowerCase());
    }

    if (selectedType === "new" || selectedType === "popular") {
        result = result.filter(product => product.filter === selectedType);
    }
    else if (selectedType !== "all") {
        result = result.filter(product => product.type === selectedType);
    }

    if (selectedSort === "az") {
        result.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (selectedSort === "za") {
        result.sort((a, b) => b.name.localeCompare(a.name));
    }
    else if (selectedSort === "price-low") {
        result.sort((a, b) => a.price - b.price);
    }
    else if (selectedSort === "price-high") {
        result.sort((a, b) => b.price - a.price);
    }
    displayProducts(result);
    updateActiveFilterText();
}

//status aktif buat navigasi beranda/home
var artistSection = document.getElementById("shop-by-group");
var aboutSection = document.getElementById("about");
if (artistSection && aboutSection) {
    window.addEventListener("scroll", function () {
        var position = window.scrollY + 300;
        document.querySelectorAll(".desktop-nav a")
            .forEach(link => link.classList.remove("active"));
        if (position >= aboutSection.offsetTop) {
            document
                .querySelector('.desktop-nav a[href="index.html#about"]')
                .classList.add("active");
            } else if (
                position >= artistSection.offsetTop &&
                position < artistSection.offsetTop + artistSection.offsetHeight
            ) {
                document
                    .querySelector('.desktop-nav a[href="index.html#shop-by-group"]')
                    .classList.add("active");
            } else {
            document
                .querySelector('.desktop-nav a[href="index.html"]')
                .classList.add("active");
        }
    });
}

//ngefilterstatus teks yg lagi aktif
function updateActiveFilterText() {
    var selectedArtist = artistFilter.value;
    var selectedType = typeFilter.value;
    var text = "";
    if (selectedArtist !== "all") {
        text += selectedArtist.toUpperCase();
    }
    if (selectedType !== "all") {
        if (text !== "") {
            text += " • ";
        }
        text += selectedType.toUpperCase();
    }
    activeFilterText.textContent =
        text;
}

//tombol kategori produk
categoryButtons.forEach(button => {
    button.addEventListener("click", function () {
        var category = this.dataset.category;
        categoryButtons.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
        typeFilter.value = category;
        applyFilters();
    });
});

if (artistFilter) {
    artistFilter.addEventListener( "change", function () {
            applyFilters(); updateURL();
        });
}

if (typeFilter) {
    typeFilter.addEventListener("change", function () {
            updateCategoryButton(this.value);
            applyFilters();
            updateURL();
        });
}

if (sortFilter) {
    sortFilter.addEventListener( "change", function () {
            applyFilters();
        });
}

function updateCategoryButton(category) {
    categoryButtons.forEach(button => {
        button.classList.remove("active");
        if (button.dataset.category === category) {
            button.classList.add("active");
        }
    });
}

//fitur reset filter
function resetAllFilters() {
    artistFilter.value = "all";
    typeFilter.value = "all";
    sortFilter.value = "featured";
    updateCategoryButton("all");
    shopTitle.textContent = "SHOP";
    shopSubtitle.textContent = "Discover little things worth keeping.";
    activeFilterText.textContent = "";
    applyFilters();
    window.history.replaceState( {}, "", "shop.html");
}

if (resetFilters) {
    resetFilters.addEventListener("click", resetAllFilters);
}

if (emptyReset) {
    emptyReset.addEventListener("click", resetAllFilters);
}

//ngebaca parameter url
function readURLParameter() {
    var params = new URLSearchParams(window.location.search);
    var group = params.get("group");
    var category = params.get("category");
    var filter = params.get("filter");
    var search = params.get("search");

    if (group) {
        artistFilter.value = group.toLowerCase();
        shopTitle.textContent = group.toUpperCase();
        shopSubtitle.textContent = `${group.toUpperCase()} collection`;
        updateCategoryButton("all");
    }
    else if (category) {
        typeFilter.value = category.toLowerCase();
        updateCategoryButton(category.toLowerCase());
        var categoryNames = {
            "albums": "ALBUMS",
            "merch": "Merch",
            "lightsticks": "LIGHTSTICKS",
            "dvd/media": "DVD/MEDIA"
        };
        shopTitle.textContent = categoryNames[category.toLowerCase()]|| "SHOP";
        shopSubtitle.textContent = "Browse products from this category.";
    }

    if (filter === "new") {
        typeFilter.value = "new";
        showSpecialFilter("new");
    }
    else if (filter === "popular") {
        typeFilter.value = "popular";
        showSpecialFilter("popular");
    }

    if (search) {
        var searchText = search.toLowerCase();
        var searchResults = products.filter(product =>
                product.name.toLowerCase().includes(searchText) ||
                product.artist.toLowerCase().includes(searchText) ||
                product.type.toLowerCase().includes(searchText)
            );
        shopTitle.textContent = "SEARCH RESULTS";
        shopSubtitle.textContent = `Results for "${search}"`;
        displayProducts(searchResults);
        return;
    }
    applyFilters();
}
function showSpecialFilter(filter) {
    if (filter === "new") {
        shopTitle.textContent = "NEW RELEASES";
        shopSubtitle.textContent = "Fresh drops for your collection.";
    }
    if (filter === "popular") {
        shopTitle.textContent = "POPULAR PICKS";
        shopSubtitle.textContent = "Loved by fellow collectors.";
    }
    updateCategoryButton("all");
}
function updateURL() {
    var params = new URLSearchParams();
    if (artistFilter.value !== "all") {
        params.set("group", artistFilter.value);
    }
    else if (typeFilter.value === "new" || typeFilter.value === "popular") {
        params.set("filter", typeFilter.value);
    }
    else if (typeFilter.value !== "all") {
        params.set("category", typeFilter.value);
    }
    var newURL = params.toString() ? `shop.html?${params.toString()}` : "shop.html";
    window.history.replaceState({}, "", newURL);
}

//inisialisasi
if (productGrid) { 
    readURLParameter(); 
}
updateWishlistHearts();
displayWishlist();

/*  ==========
    menu cart
    ==========*/
function getCart() {
    return JSON.parse(localStorage.getItem("keepieCart") || "[]");
}
function saveCart(cart) {
    localStorage.setItem("keepieCart", JSON.stringify(cart));
}
function updateCartCount() {
    var cart = getCart();
    var totalItems = cart.length;
    document.querySelectorAll(".cart-count").forEach(count => {
        count.textContent = totalItems;
    });
}
function addToCart(productId, quantity) {
    var cart = getCart();
    var existingItem = cart.find(item => item.productId === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            productId: productId,
            quantity: quantity
        });
    }
    saveCart(cart);
    updateCartCount();
}

/*  =============
    detail produk
    ============= */
//variasi produk
var productVariants = {
    2: ["TAKE 1 Ver.", "TAKE 2 Ver.", "TAKE 3 Ver.", "TAKE 4 Ver."],
    7: ["WONCHU", "NoxStar", "JAKEY", "SnoWe", "KISHU", "PU-NI"],
    22: ["Original ver.", "TNT ver.", "REDRED ver.", "ACAI ver."],
    29: ["JUNGWON", "JAY", "JAKE", "SUNGHOON", "SUNOO", "NI-KI"],
    36: ["A", "B"],
    45: ["CHEETIE", "ORITOKKI", "MOCHA LATTE", "HEE HEE", "BBAEKKO"],
    66: ["Iphone 14 Pro", "Iphone 14", "Iphone 13 Pro", "Iphone 13", "Iphone 12/12Pro", "Iphone SE 3", "Samsung S23 Ultra", "Samsung S23", "Samsung S22", "Galaxy Z Flip 4", "Galaxy Z Flip 3"],
    69: ["S.COUPS", "JEONGHAN", "JOSHUA", "JUN", "HOSHI", "WONWOO", "WOOZI", "THE 8", "MINGYU", "DK", "SEUNGKWAN", "VERNON", "DINO"],
    75: ["SOOBIN Ver.", "YEONJUN Ver.", "BEOMGYU Ver.", "TAEHYUN Ver.", "HUENINGKAI Ver."],
    79: ["CHOI YONG MEON", "HWANG CHOON", "BAMGEUT", "DA-GO-NYANG", "HHM NYA RING"],
    80: ["TOMORROW X TOGETHER","SOOBIN", "YEONJUN", "BEOMGYU", "TAEHYUN", "HUENINGKAI"]
};

var productImage = document.getElementById("productImage");
var productArtist = document.getElementById("productArtist");
var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");

if (productImage && productArtist && productName && productPrice) {
    var productId = Number(
        new URLSearchParams(window.location.search).get("product")
    );
    var selectedProduct = products.find(function(product) {
        return product.id === productId;
    });

    if (selectedProduct) {
        productImage.src = selectedProduct.image;
        productImage.alt = selectedProduct.name;
        productArtist.textContent = selectedProduct.artist;
        productName.textContent = selectedProduct.name;
        productPrice.textContent = formatPrice(selectedProduct.price);
        document.title = selectedProduct.name + " - KEEPIE";
    }
}
var variantArea = document.getElementById("productVariantArea");

if (productVariants[productId]) {
    var variantOptions = "";
    productVariants[productId].forEach(function(variant) {
        variantOptions += '<option value="' + variant + '">' + variant + '</option>';
    });
    variantArea.innerHTML = '<div class="product-option">' + '<label for="productVariant">Version</label>' + '<select id="productVariant">' + variantOptions + '</select>' + '</div>';
}

//quantity product
var minusQuantity = document.getElementById("minusQuantity");
var plusQuantity = document.getElementById("plusQuantity");
var productQuantity = document.getElementById("productQuantity");
if (minusQuantity && plusQuantity && productQuantity) {
    minusQuantity.addEventListener("click", function () {
        var quantity = Number(productQuantity.textContent);

        if (quantity > 1) {
            quantity--; productQuantity.textContent = quantity;
        }
    });
    plusQuantity.addEventListener("click", function () {
        var quantity = Number(productQuantity.textContent);
        quantity++;
        productQuantity.textContent = quantity;
    });
}

//cek login
function isLoggedIn() {
    return sessionStorage.getItem("keepieLoggedIn") === "true";
}
function showLoginModal() {
    var loginModal = document.getElementById("loginModal");
    if (loginModal) {
        loginModal.classList.add("show");
    }
}
function closeLoginModal() {
    var loginModal = document.getElementById("loginModal");
    if (loginModal) {
        loginModal.classList.remove("show");
    }
}

/*  ===========
    kartu login
    =========== */
var loginClose = document.getElementById("loginClose");
var loginSubmit = document.getElementById("loginSubmit");
if (loginClose) {
    loginClose.addEventListener("click", function () {
        closeLoginModal();
    });
}
if (loginSubmit) {
    loginSubmit.addEventListener("click", function () {
        var username = document
            .getElementById("loginUsername")
            .value
            .trim();
        var password = document
            .getElementById("loginPassword")
            .value
            .trim();
        var loginError = document.getElementById("loginError");
        if (username === "" || password === "") {
            loginError.textContent = "Please enter your username and password.";
            return;
        }
        sessionStorage.setItem("keepieLoggedIn", "true");
        closeLoginModal();
        loginError.textContent = "";
        document.getElementById("loginUsername").value = "";
        document.getElementById("loginPassword").value = "";
    });
}

//tombol profil
var profileBtn = document.getElementById("profileBtn");
if (profileBtn) {
    profileBtn.addEventListener("click", function () {
        if (!isLoggedIn()) {
            showLoginModal();
        } else {
            var notification = document.createElement("div");
            notification.className = "cart-notification";
            notification.textContent = "You are already logged in.";
            document.body.appendChild(notification);
            setTimeout(function () { notification.classList.add("show"); }, 10);
            setTimeout(function () {
                notification.classList.remove("show");
                setTimeout(function () { notification.remove(); }, 300);
            }, 2000);
        }
    });
}


//add product ke cart
var addToCartBtn = document.getElementById("addToCartBtn");
if (addToCartBtn) {
    addToCartBtn.addEventListener("click", function () {
        if (!isLoggedIn()) {
        showLoginModal();
        return;
        }
        var quantity = Number(productQuantity.textContent);
        var variantSelect = document.getElementById("productVariant");
        var selectedVariant = "";
        if (variantSelect) {
            selectedVariant = variantSelect.value;
        }
        var cart = getCart();
        var existingItem = cart.find(function(item) {
            return item.productId === productId && item.variant === selectedVariant;
        });
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ productId: productId, quantity: quantity, variant: selectedVariant });
        }
        saveCart(cart);
        updateCartCount();
        var cartNotification = document.getElementById("cartNotification");
        if (cartNotification) {
            cartNotification.classList.add("show");
            setTimeout(function () { cartNotification.classList.remove("show"); }, 2000);
        }
    });
}

//purchase
var purchaseBtn = document.getElementById("purchaseBtn");
if (purchaseBtn) {
    purchaseBtn.addEventListener("click", function () {
        if (!isLoggedIn()) {
        showLoginModal();
        return;
        }
        var quantity = Number(productQuantity.textContent);
        var variantSelect = document.getElementById("productVariant");
        var selectedVariant = "";
        if (variantSelect) {
            selectedVariant = variantSelect.value;
        }
        var purchaseItem = [{
            productId: productId,
            quantity: quantity,
            variant: selectedVariant
        }];
        localStorage.setItem(
            "keepieCheckout",
            JSON.stringify(purchaseItem)
        );
        localStorage.setItem("keepieCheckoutSource", "product");
        window.location.href = "checkout.html";
    });
}

/*  =============
    tampilan cart
    ============= */
function displayCart() {
    var cartItems = document.getElementById("cartItems");
    var cartItemCount = document.getElementById("cartItemCount");
    var cartSubtotal = document.getElementById("cartSubtotal");
    var cartTotal = document.getElementById("cartTotal");
    if (!cartItems) {
        return;
    }
    var cart = getCart();
    cartItems.innerHTML = "";
    var totalQuantity = 0;
    cart.forEach(function(item) { totalQuantity += item.quantity; });
    cartItemCount.textContent = cart.length + (cart.length === 1 ? " item" : " items");
    cart.forEach(function(item, index) {
        var product = products.find(function(product) { return product.id === item.productId; });
        if (!product) {
            return;
        }
        var variantHTML = "";
        if (item.variant) {
            variantHTML = '<p class="cart-product-option">' + 'Version: ' + item.variant + '</p>';
        }
        var cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML =
            '<div class="cart-select">' + '<input type="checkbox" class="cart-checkbox" data-index="' + index + '">' + '</div>' +
            '<div class="cart-product-image">' + '<img src="' + product.image + '" alt="' + product.name + '">' + '</div>' +
            '<div class="cart-product-info">' + '<p class="cart-product-group">' + product.artist + '</p>' + '<h3>' + product.name + '</h3>' +
                variantHTML + '<strong class="cart-product-price">' + formatPrice(product.price) + '</strong>' +
                '<div class="cart-item-bottom">' +
                    '<div class="cart-quantity">' + '<button type="button" class="cart-minus" data-index="' + index + '">−</button>' +
                        '<span>' + item.quantity + '</span>' +
                        '<button type="button" class="cart-plus" data-index="' + index + '">+</button>' +
                    '</div>' + '<button class="remove-item" type="button" data-index="' + index + '">' + 'Remove' + '</button>' +
                '</div>' +
            '</div>';
        cartItems.appendChild(cartItem);
    });
    updateCartTotal();
}

function updateCartTotal() {
    var cart = getCart();
    var cartSubtotal = document.getElementById("cartSubtotal");
    var cartTotal = document.getElementById("cartTotal");
    if (!cartSubtotal || !cartTotal) {
        return;
    }
    var subtotal = 0;
    document.querySelectorAll(".cart-checkbox").forEach(function(checkbox) {
        if (checkbox.checked) {
            var index = Number(checkbox.dataset.index);
            var item = cart[index];
            var product = products.find(function(product) {
                return product.id === item.productId;
            });
            if (product) {
                subtotal += product.price * item.quantity;
            }
        }
    });
    cartSubtotal.textContent = formatPrice(subtotal);
    cartTotal.textContent = formatPrice(subtotal);
}

document.addEventListener("change", function(event) {
    if (event.target.classList.contains("cart-checkbox")) {
        updateCartTotal();
    }
});

//tombol aksi di menu cart
document.addEventListener("click", function(event) {
    var cart = getCart();

    if (event.target.classList.contains("cart-plus")) {
        var index = Number(event.target.dataset.index);
        cart[index].quantity += 1;
        saveCart(cart);
        displayCart();
        updateCartCount();
    }

    if (event.target.classList.contains("cart-minus")) {
        var index = Number(event.target.dataset.index);
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            cart.splice(index, 1);
        }
        saveCart(cart);
        displayCart();
        updateCartCount();
    }

    if (event.target.classList.contains("remove-item")) {
        var index = Number(event.target.dataset.index);
        cart.splice(index, 1);
        saveCart(cart);
        displayCart();
        updateCartCount();
    }
});
updateCartCount();
displayCart();

/*  =============
    menu checkout
    ============= */
var checkoutBtn = document.getElementById("checkoutBtn");
if (checkoutBtn) {
    checkoutBtn.addEventListener("click", function() {
        if (!isLoggedIn()) {
            showLoginModal();
            return;
        }
        var cart = getCart();
        var selectedItems = [];
        document.querySelectorAll(".cart-checkbox").forEach(function(checkbox) {
            if (checkbox.checked) {
                var index = Number(checkbox.dataset.index);
                selectedItems.push(cart[index]);
            }
        });

        if (selectedItems.length === 0) {
            var cartNotification = document.getElementById("cartNotification");
            if (cartNotification) {
                cartNotification.textContent = "Please select at least one item.";
                cartNotification.classList.add("show");
                setTimeout(function () {
                    cartNotification.classList.remove("show");
                }, 2000);
            }
            return;
        }

        localStorage.setItem(
            "keepieCheckout",
            JSON.stringify(selectedItems)
        );
        localStorage.setItem("keepieCheckoutSource", "cart");
        window.location.href = "checkout.html";
    });
}

//checkout order
var checkoutItems = document.getElementById("checkoutItems");
var checkoutSubtotal = document.getElementById("checkoutSubtotal");
var checkoutTotal = document.getElementById("checkoutTotal");

if (checkoutItems && checkoutSubtotal && checkoutTotal) {
    var checkoutCart = JSON.parse(
        localStorage.getItem("keepieCheckout") || "[]"
    );
    checkoutItems.innerHTML = "";
    var subtotal = 0;
    checkoutCart.forEach(function(item) {
        var product = products.find(function(product) {
            return product.id === item.productId;
        });
        if (!product) {
            return;
        }
        subtotal += product.price * item.quantity;
        var variantHTML = "";
        if (item.variant) {
            variantHTML = '<p class="checkout-item-option">' + 'Version: ' + item.variant + '</p>';
        }
        var itemHTML = '<div class="checkout-item">' + '<img src="' + product.image + '" alt="' + product.name + '">' +
                '<div class="checkout-item-info">' + '<p class="checkout-item-artist">' + product.artist + '</p>' + '<h3>' + product.name + '</h3>' +
                    variantHTML +
                    '<p>' + item.quantity + ' × ' + formatPrice(product.price) + '</p>' +
                '</div>' +
            '</div>';
        checkoutItems.innerHTML += itemHTML;
    });
    checkoutSubtotal.textContent = formatPrice(subtotal);
    checkoutTotal.textContent = formatPrice(subtotal);
}

//place order
var placeOrderBtn = document.getElementById("placeOrderBtn");
var orderConfirmation = document.getElementById("orderConfirmation");
var checkoutContent = document.getElementById("checkoutContent");

if (orderConfirmation) {
    orderConfirmation.style.display = "none";
}

if (placeOrderBtn) {
    placeOrderBtn.addEventListener("click", function () {
        var customerName = document.getElementById("customerName");
        var customerPhone = document.getElementById("customerPhone");
        var customerAddress = document.getElementById("customerAddress");
        var cartNotification = document.getElementById("cartNotification");
        var name = customerName.value.trim();
        var phone = customerPhone.value.trim();
        var address = customerAddress.value.trim();

        if (name === "" || phone === "" || address === "") {
            if (cartNotification) {
                cartNotification.textContent = "Please complete your information.";
                cartNotification.classList.add("show");
                setTimeout(function () {
                    cartNotification.classList.remove("show");
                }, 2000);
            }
            return;
        }

        //simpan orderan, jika checkout dr keranjang, jumlah produk di keranjang akan berkurang
        var checkoutCart = JSON.parse(
            localStorage.getItem("keepieCheckout") || "[]"
        );
        var checkoutSource = localStorage.getItem("keepieCheckoutSource");

        if (checkoutSource === "cart") {
            var cart = getCart();
            checkoutCart.forEach(function(orderItem) {
                cart = cart.filter(function(cartItem) {
                    return !(
                        cartItem.productId === orderItem.productId && cartItem.variant === orderItem.variant
                    );
                });
            });
            saveCart(cart);
            updateCartCount();
        }

        //menampilkan order confirmed
        var confirmedOrderItems = document.getElementById("confirmedOrderItems");
        var confirmedOrderTotal = document.getElementById("confirmedOrderTotal");
        var confirmedHTML = "";
        var confirmedTotal = 0;
        checkoutCart.forEach(function(item) {
            var product = products.find(function(product) {
                return product.id === item.productId;
            });
            if (!product) {
                return;
            }
            confirmedTotal += product.price * item.quantity;
            var variantHTML = "";
            if (item.variant) {
                variantHTML = '<p class="checkout-item-option">' + 'Version: ' + item.variant + '</p>';
            }
            confirmedHTML += '<div class="checkout-item">' + '<img src="' + product.image + '" alt="' + product.name + '">' +
                    '<div class="checkout-item-info">' + '<p class="checkout-item-artist">' + product.artist + '</p>' + '<h3>' + product.name + '</h3>' +
                        variantHTML + '<p>' + item.quantity + ' × ' + formatPrice(product.price) + '</p>' +
                    '</div>' +
                '</div>';
        });

        if (confirmedOrderItems) {
            confirmedOrderItems.innerHTML = confirmedHTML;
        }
        if (confirmedOrderTotal) {
            confirmedOrderTotal.textContent = formatPrice(confirmedTotal);
        }

        if (checkoutContent) {
            checkoutContent.style.display = "none";
        }

        if (orderConfirmation) {
            orderConfirmation.style.display = "block";
        }

        // order sudah selesai,
        // jadi data checkout tidak diperlukan lagi
        localStorage.removeItem("keepieCheckout");
        localStorage.removeItem("keepieCheckoutSource");
    });
}
