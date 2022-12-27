export const googleBookService = {
    query
}

function query(searchParam) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchParam}`).then(res => res.data.items)
}

const hardCoded = {
    "kind": "books#volumes",
    "totalItems": 800,
    "items": [
      {
        "kind": "books#volume",
        "id": "Y136DwAAQBAJ",
        "etag": "aSMoH1GcvF0",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/Y136DwAAQBAJ",
        "volumeInfo": {
          "title": "Be Happy!",
          "subtitle": "Release the Power of Happiness in YOU",
          "authors": [
            "Robert Holden, Ph.D."
          ],
          "publisher": "Hay House, Inc",
          "publishedDate": "2010-04-15",
          "description": "\"Happiness is a spiritual path. The more you learn about true happiness, the more you discover the truth of who you are, what is important, and what your life is for.\" Be Happy! is the follow-up to Robert Holden’s best-selling Happiness NOW! In this book, Robert gives you a front-row seat on his 8-week happiness program—famously tested by independent scientists for the BBC-TV documentary called How to Be Happy. Step-by-step he introduces you to a set of proven techniques, principles, meditations, and insights that will help you be happy now! Key lessons include: Follow Your Joy — stop chasing happiness and start enjoying your life as it happens. The Happiness Contract — undo mental and emotional blocks to happiness and success. The Receiving Meditation — increase your natural capacity for happiness and abundance. The Forgiveness Practice — give up all hopes for a better past and be happy now. The Gift of Happiness — use the power of happiness to bless your life and benefit others. \"This happiness training not only changes the way you feel; it actually changes the way your brain functions.\"— Professor Davidson, Wisconsin-Madison UniversityBBC’s How to Be Happy TV documentary",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781401921811"
            },
            {
              "type": "ISBN_10",
              "identifier": "1401921817"
            }
          ],
          "readingModes": {
            "text": false,
            "image": true
          },
          "pageCount": 313,
          "printType": "BOOK",
          "categories": [
            "Self-Help"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.1.0.0.preview.1",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=Y136DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=Y136DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=Y136DwAAQBAJ&printsec=frontcover&dq=happy&hl=&cd=1&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=Y136DwAAQBAJ&dq=happy&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Be_Happy.html?hl=&id=Y136DwAAQBAJ"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/Be_Happy-sample-pdf.acsm?id=Y136DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=Y136DwAAQBAJ&hl=&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "In this book, Robert gives you a front-row seat on his 8-week happiness program—famously tested by independent scientists for the BBC-TV documentary called How to Be Happy."
        }
      },
      {
        "kind": "books#volume",
        "id": "FkgiAQAAMAAJ",
        "etag": "YxLl4nl7qsQ",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/FkgiAQAAMAAJ",
        "volumeInfo": {
          "title": "Commerce in Germany",
          "publishedDate": "1969",
          "industryIdentifiers": [
            {
              "type": "OTHER",
              "identifier": "MINN:31951P003037306"
            }
          ],
          "readingModes": {
            "text": false,
            "image": false
          },
          "printType": "BOOK",
          "categories": [
            "Business"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.5.4.0.preview.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=FkgiAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=FkgiAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=FkgiAQAAMAAJ&q=happy&dq=happy&hl=&cd=2&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=FkgiAQAAMAAJ&dq=happy&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Commerce_in_Germany.html?hl=&id=FkgiAQAAMAAJ"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=FkgiAQAAMAAJ&hl=&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "2 news &amp; notes 23 coming events 24 at your service 9 classified ads 25 from the chamber 16 26 new members 20 28 fair calendar a a h a hap a \u003cb\u003ehappy\u003c/b\u003e a \u003cb\u003ehappy\u003c/b\u003e h a \u003cb\u003ehappy\u003c/b\u003e hol a \u003cb\u003ehappy\u003c/b\u003e holid a \u003cb\u003ehappy\u003c/b\u003e holiday a \u003cb\u003ehappy\u003c/b\u003e holiday s a \u003cb\u003ehappy\u003c/b\u003e holiday sea&nbsp;..."
        }
      },
      {
        "kind": "books#volume",
        "id": "y-j3wAEACAAJ",
        "etag": "Sh1PBp3M4OE",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/y-j3wAEACAAJ",
        "volumeInfo": {
          "title": "Happy",
          "authors": [
            "Derren Brown"
          ],
          "publisher": "Corgi",
          "publishedDate": "2017-06-29",
          "description": "Originally published: London: Bantam Press, 2016.",
          "industryIdentifiers": [
            {
              "type": "ISBN_10",
              "identifier": "0552172359"
            },
            {
              "type": "ISBN_13",
              "identifier": "9780552172356"
            }
          ],
          "readingModes": {
            "text": false,
            "image": false
          },
          "pageCount": 576,
          "printType": "BOOK",
          "categories": [
            "Happiness"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "preview-1.0.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=y-j3wAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=y-j3wAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=y-j3wAEACAAJ&dq=happy&hl=&cd=3&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=y-j3wAEACAAJ&dq=happy&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Happy.html?hl=&id=y-j3wAEACAAJ"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=y-j3wAEACAAJ&hl=&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "By taking control of the stories we tell ourselves, by remembering that &quot;everything&#39;s fine&quot; even when it might not feel that way, we can allow ourselves to flourish and to live more happily."
        }
      },
      {
        "kind": "books#volume",
        "id": "QVkhAQAAMAAJ",
        "etag": "HcwHebure+M",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/QVkhAQAAMAAJ",
        "volumeInfo": {
          "title": "Catalog of Copyright Entries",
          "authors": [
            "Library of Congress. Copyright Office"
          ],
          "publishedDate": "1950",
          "industryIdentifiers": [
            {
              "type": "OTHER",
              "identifier": "UOM:39015084450918"
            }
          ],
          "readingModes": {
            "text": false,
            "image": false
          },
          "pageCount": 830,
          "printType": "BOOK",
          "categories": [
            "American drama"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.4.4.0.preview.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=QVkhAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=QVkhAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=QVkhAQAAMAAJ&pg=PA236&dq=happy&hl=&cd=4&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=QVkhAQAAMAAJ&dq=happy&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Catalog_of_Copyright_Entries.html?hl=&id=QVkhAQAAMAAJ"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=QVkhAQAAMAAJ&hl=&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
        }
      },
      {
        "kind": "books#volume",
        "id": "PhfasgEACAAJ",
        "etag": "InFp+Ut4xwo",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/PhfasgEACAAJ",
        "volumeInfo": {
          "title": "Happy Woman Happy World",
          "authors": [
            "Beate Chelette"
          ],
          "publisher": "Visualist Publishing",
          "publishedDate": "2013-09-24",
          "description": "Happy Woman Happy World, The Foolproof Fix to go from Overwhelmed to Awesome Chelette, a trainer, coach and speaker imparts her proprietary strategies that can take any woman from being \"overwhelmed to awesome.\" She deduces that women can have it all, just not at the same time. Instead she offers her original concept of ego-RHYTHM(r), which allows women to delve into defining what is most important during their various stages of life, then teaches them how to set a Main Focus, re-structure their lives for better Work-Life Balance and put an end to the \"crazy-making\" lifestyle. In addition, she discusses the struggles of today's women in the workplace and how they sabotage career advancement, while addressing the culture of \"mean girls,\" the distasteful behavior that women perpetrate on each other which ultimately undercuts self-confidence and success. She introduces her philosophy of The Women's Code(r) - which is nothing less than a completely new awareness of about how women relate to each other, and a new paradigm for teaching women how to find and give support and collaborate to truly achieve happiness with their lives",
          "industryIdentifiers": [
            {
              "type": "ISBN_10",
              "identifier": "0988986868"
            },
            {
              "type": "ISBN_13",
              "identifier": "9780988986862"
            }
          ],
          "readingModes": {
            "text": false,
            "image": false
          },
          "pageCount": 180,
          "printType": "BOOK",
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "preview-1.0.0",
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=PhfasgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=PhfasgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=PhfasgEACAAJ&dq=happy&hl=&cd=5&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=PhfasgEACAAJ&dq=happy&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Happy_Woman_Happy_World.html?hl=&id=PhfasgEACAAJ"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=PhfasgEACAAJ&hl=&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "Happy Woman Happy World, The Foolproof Fix to go from Overwhelmed to Awesome Chelette, a trainer, coach and speaker imparts her proprietary strategies that can take any woman from being &quot;overwhelmed to awesome."
        }
      },
      {
        "kind": "books#volume",
        "id": "K400r0sA6i0C",
        "etag": "MFSyNzpu73o",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/K400r0sA6i0C",
        "volumeInfo": {
          "title": "The Happy Birthday of Death",
          "authors": [
            "Gregory Corso"
          ],
          "publisher": "New Directions Publishing",
          "publishedDate": "1960",
          "description": "It is true that he has been one of the inner circle of the 'Beats' from the first, but many admirers of his poetry feel that it belongs quite as much to other and older traditions in world literature. One of these is the revival of pure poetry whenever an \"original\"--be it Rimbaud or Whitman--has broken with current verse conventions to give free rein to the magic of language. Another is that ancient pre-occupation of poets--the sense of the immediacy of death. Like Villon or Dylan Thomas, Corso lives close to the mystery of death. It is, perhaps, his central theme, on which variations ranging from the terrible to the comic are sounded. But Corso is seldom macabre. A bursting vitality always carries him back to the sensations of the living, though always it is the reality behind the obvious which has caught his eye. \"How I love to probe life,\" Corso has written, \"That's what poetry is to me, a wondrous prober... It's not the metre or measure of a line, a breath; not 'law' music; but the assembly of great eye sounds placed into an inspired measured idea.\"",
          "industryIdentifiers": [
            {
              "type": "ISBN_10",
              "identifier": "0811200272"
            },
            {
              "type": "ISBN_13",
              "identifier": "9780811200271"
            }
          ],
          "readingModes": {
            "text": false,
            "image": true
          },
          "pageCount": 102,
          "printType": "BOOK",
          "categories": [
            "Poetry"
          ],
          "averageRating": 4,
          "ratingsCount": 2,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "1.5.5.0.preview.1",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=K400r0sA6i0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=K400r0sA6i0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=K400r0sA6i0C&printsec=frontcover&dq=happy&hl=&cd=6&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=K400r0sA6i0C&dq=happy&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/The_Happy_Birthday_of_Death.html?hl=&id=K400r0sA6i0C"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/The_Happy_Birthday_of_Death-sample-pdf.acsm?id=K400r0sA6i0C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=K400r0sA6i0C&hl=&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "One of these is the revival of pure poetry whenever an &quot;original&quot;--be it Rimbaud or Whitman--has broken with current verse conventions to give free rein to the magic of language."
        }
      },
      {
        "kind": "books#volume",
        "id": "mjjrDwAAQBAJ",
        "etag": "qu8euwnNZpk",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/mjjrDwAAQBAJ",
        "volumeInfo": {
          "title": "Begin Again",
          "subtitle": "Your Hope and Renewal Start Today",
          "authors": [
            "Max Lucado"
          ],
          "publisher": "Thomas Nelson",
          "publishedDate": "2020-12-29",
          "description": "Are you struggling with sadness, pain, or disappointment? Could you use a new beginning or a redo? If so, take heart. The oh-so-welcome news of the Scripture is this: Our God is a God of fresh starts. In Begin Again, pastor and New York Times bestselling author Max Lucado combines his heartwarming stories and timeless biblical teachings with new insights and perspectives. Packed with encouragement, Begin Again will reassure you that Jesus is the author of new beginnings, no matter what sorrows or struggles you’ve faced. Each copy of Begin Again also includes a series of thoughtful, comprehensive reflection questions designed to go along with every chapter, giving you a chance to dive even deeper into the ways God promises to make all things new. Max will prepare you for the journey ahead by helping you: Trust that God fights for you, even on your darkest days Rely on God's unconditional love and protection Ground yourself in his everlasting promises Hold on to enduring hope found in faith Make a difference in your community by influencing the lives of others Set your sights on your eternal home in heaven This timely compilation—which also includes original content from Max—will provide you with the hope and encouragement you need to take the first step into your new beginning, whatever it may hold. No matter what heartache or hardship you’ve endured, you can take comfort in knowing that it’s never too late to Begin Again.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781400226498"
            },
            {
              "type": "ISBN_10",
              "identifier": "140022649X"
            }
          ],
          "readingModes": {
            "text": true,
            "image": false
          },
          "pageCount": 240,
          "printType": "BOOK",
          "categories": [
            "Religion"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "2.2.2.0.preview.2",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=mjjrDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=mjjrDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=mjjrDwAAQBAJ&pg=PT100&dq=happy&hl=&cd=7&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=mjjrDwAAQBAJ&dq=happy&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Begin_Again.html?hl=&id=mjjrDwAAQBAJ"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/Begin_Again-sample-epub.acsm?id=mjjrDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=mjjrDwAAQBAJ&hl=&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "The only tragedy, then, is to be satisfied prematurely. To settle for earth. To be content in a strange land. To intermarry with the Babylonians and forget Jerusalem. We are not \u003cb\u003ehappy\u003c/b\u003e here because we are not at home here because we are&nbsp;..."
        }
      },
      {
        "kind": "books#volume",
        "id": "LGY9AAAAIAAJ",
        "etag": "0vm4dWtx96w",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/LGY9AAAAIAAJ",
        "volumeInfo": {
          "title": "Day of Atonement",
          "publishedDate": "1877",
          "industryIdentifiers": [
            {
              "type": "OTHER",
              "identifier": "UCAL:B3464799"
            }
          ],
          "readingModes": {
            "text": false,
            "image": true
          },
          "pageCount": 488,
          "printType": "BOOK",
          "categories": [
            "High Holidays"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.6.5.0.full.1",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=LGY9AAAAIAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=LGY9AAAAIAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "iw",
          "previewLink": "http://books.google.com/books?id=LGY9AAAAIAAJ&pg=RA3-PA283&dq=happy&hl=&cd=8&source=gbs_api",
          "infoLink": "https://play.google.com/store/books/details?id=LGY9AAAAIAAJ&source=gbs_api",
          "canonicalVolumeLink": "https://play.google.com/store/books/details?id=LGY9AAAAIAAJ"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "FREE",
          "isEbook": true,
          "buyLink": "https://play.google.com/store/books/details?id=LGY9AAAAIAAJ&rdid=book-LGY9AAAAIAAJ&rdot=1&source=gbs_api"
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "ALL_PAGES",
          "embeddable": true,
          "publicDomain": true,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false,
            "downloadLink": "http://books.google.com/books/download/Day_of_Atonement.epub?id=LGY9AAAAIAAJ&hl=&output=epub&source=gbs_api"
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=LGY9AAAAIAAJ&hl=&source=gbs_api",
          "accessViewStatus": "FULL_PUBLIC_DOMAIN",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "\u003cb\u003eHappy\u003c/b\u003e the eye which saw all these things ; but , verily , to hear only of them , afflicts our soul . \u003cb\u003eHappy\u003c/b\u003e the eye which saw our temple , and the joy of our congregation ; but , verily , to hear only of them , afflicts our soul ."
        }
      },
      {
        "kind": "books#volume",
        "id": "WRkX5lzFKBgC",
        "etag": "mjyMeLzl5WU",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/WRkX5lzFKBgC",
        "volumeInfo": {
          "title": "My Blue Is Happy",
          "authors": [
            "Jessica Young"
          ],
          "publisher": "Candlewick Press",
          "publishedDate": "2013",
          "description": "Child-friendly text and evocative images combine in a story that invites readers to explore the infinite possibilities of emotional expression through color, discussing how people respond differently when seeing colors and how these experiences help broaden the world in wonderful new ways.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9780763651251"
            },
            {
              "type": "ISBN_10",
              "identifier": "0763651257"
            }
          ],
          "readingModes": {
            "text": false,
            "image": false
          },
          "pageCount": 33,
          "printType": "BOOK",
          "categories": [
            "Juvenile Fiction"
          ],
          "averageRating": 3.5,
          "ratingsCount": 7,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.4.0.0.preview.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=WRkX5lzFKBgC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=WRkX5lzFKBgC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=WRkX5lzFKBgC&dq=happy&hl=&cd=9&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=WRkX5lzFKBgC&dq=happy&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/My_Blue_Is_Happy.html?hl=&id=WRkX5lzFKBgC"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": true
          },
          "webReaderLink": "http://play.google.com/books/reader?id=WRkX5lzFKBgC&hl=&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "Child-friendly text and evocative images combine in a story that invites readers to explore the infinite possibilities of emotional expression through color, discussing how people respond differently when seeing colors and how these ..."
        }
      },
      {
        "kind": "books#volume",
        "id": "-64EEAAAQBAJ",
        "etag": "VYy4s+BEAHo",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/-64EEAAAQBAJ",
        "volumeInfo": {
          "title": "A Savage Presence",
          "authors": [
            "WL Knightly"
          ],
          "publisher": "BrixBaxter Publishing",
          "publishedDate": "2020-10-23",
          "description": "Now that Connor Cohen is dead, Silas Cohen is free to live the life he wants. But there are still two men in the way. When Enzo Juarez tries to make a new deal with Fiona, her good intentions get the best of her and she unexpectedly puts Silas in danger. Can Alex’s connections save them this time? All bets are off when it’s every man for themselves in this series’ finale.",
          "readingModes": {
            "text": true,
            "image": true
          },
          "printType": "BOOK",
          "categories": [
            "Fiction"
          ],
          "maturityRating": "MATURE",
          "allowAnonLogging": true,
          "contentVersion": "1.4.5.0.preview.3",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=-64EEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=-64EEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=-64EEAAAQBAJ&pg=PT814&dq=happy&hl=&cd=10&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=-64EEAAAQBAJ&dq=happy&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/A_Savage_Presence.html?hl=&id=-64EEAAAQBAJ"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true
          },
          "pdf": {
            "isAvailable": true
          },
          "webReaderLink": "http://play.google.com/books/reader?id=-64EEAAAQBAJ&hl=&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "And my boy is \u003cb\u003ehappy\u003c/b\u003e today, so I can&#39;t be happier. You want to make me \u003cb\u003ehappy\u003c/b\u003e, don&#39;t you, Fiona? I mean, you know what&#39;s going to happen when I&#39;m not \u003cb\u003ehappy\u003c/b\u003e, right? Bad things. More and more bad things. Because if I&#39;m not \u003cb\u003ehappy\u003c/b\u003e,&nbsp;..."
        }
      }
    ]
  }