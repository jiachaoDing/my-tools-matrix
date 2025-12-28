const toolsConfig = {
    categories: [
        {
            id: 'images',
            title: '📸 Images & Media Tools',
            tools: [
                {
                    name: 'Password Generator',
                    description: 'Generate strong passwords with secure randomness.',
                    status: 'live',
                    url: '/password-generator/'
                },
                {
                    name: 'HEIC to JPG Converter',
                    description: 'Convert HEIC images to JPG locally.',
                    status: 'coming-soon'
                },
                {
                    name: 'PNG to JPG Converter',
                    description: 'Convert PNG images to JPG format.',
                    status: 'coming-soon'
                },
                {
                    name: 'JPG to PNG Converter',
                    description: 'Convert JPG images to PNG format.',
                    status: 'coming-soon'
                },
                {
                    name: 'WebP Converter',
                    description: 'Convert images to WebP format.',
                    status: 'coming-soon'
                },
                {
                    name: 'Image Compressor',
                    description: 'Compress images using browser canvas.',
                    status: 'coming-soon'
                },
                {
                    name: 'Image Resizer',
                    description: 'Resize images to custom dimensions.',
                    status: 'coming-soon'
                },
                {
                    name: 'Image Cropper',
                    description: 'Crop images online.',
                    status: 'coming-soon'
                },
                {
                    name: 'SVG to PNG',
                    description: 'Convert SVG files to PNG format.',
                    status: 'coming-soon'
                },
                {
                    name: 'ICO File Generator',
                    description: 'Generate favicon ICO files.',
                    status: 'coming-soon'
                },
                {
                    name: 'Base64 Image Decoder',
                    description: 'Decode base64 to images.',
                    status: 'coming-soon'
                },
                {
                    name: 'Image to Base64',
                    description: 'Convert images to base64 strings.',
                    status: 'coming-soon'
                },
                {
                    name: 'Color Picker from Image',
                    description: 'Pick colors from uploaded images.',
                    status: 'coming-soon'
                },
                {
                    name: 'YouTube Thumbnail Downloader',
                    description: 'Download YouTube video thumbnails.',
                    status: 'coming-soon'
                },
                {
                    name: 'Meme Generator',
                    description: 'Create memes online.',
                    status: 'coming-soon'
                },
                {
                    name: 'Watermark Maker',
                    description: 'Add watermarks to images.',
                    status: 'coming-soon'
                },
                {
                    name: 'Photo Blur Tool',
                    description: 'Blur parts of photos online.',
                    status: 'coming-soon'
                },
                {
                    name: 'Grayscale Image Converter',
                    description: 'Convert images to grayscale.',
                    status: 'coming-soon'
                },
                {
                    name: 'Flip Image',
                    description: 'Flip images horizontally or vertically.',
                    status: 'coming-soon'
                },
                {
                    name: 'Rotate Image',
                    description: 'Rotate images by any angle.',
                    status: 'coming-soon'
                },
                {
                    name: 'GIF to MP4',
                    description: 'Convert GIF files to MP4 videos.',
                    status: 'coming-soon'
                }
            ]
        },
        {
            id: 'developer',
            title: '💻 Developer Tools',
            tools: [
                {
                    name: 'JSON Formatter & Validator',
                    description: 'Format and validate JSON data.',
                    status: 'live',
                    url: '/json-formatter/'
                },
                {
                    name: 'JSON to CSV',
                    description: 'Convert JSON data to CSV format.',
                    status: 'coming-soon'
                },
                {
                    name: 'CSV to JSON',
                    description: 'Convert CSV data to JSON format.',
                    status: 'coming-soon'
                },
                {
                    name: 'XML Formatter',
                    description: 'Format and validate XML data.',
                    status: 'coming-soon'
                },
                {
                    name: 'SQL Formatter',
                    description: 'Format SQL queries for readability.',
                    status: 'coming-soon'
                },
                {
                    name: 'CSS Minifier',
                    description: 'Minify CSS code for production.',
                    status: 'coming-soon'
                },
                {
                    name: 'JavaScript Minifier',
                    description: 'Minify JavaScript code.',
                    status: 'coming-soon'
                },
                {
                    name: 'HTML Beautifier',
                    description: 'Format HTML code with proper indentation.',
                    status: 'coming-soon'
                },
                {
                    name: 'URL Encoder/Decoder',
                    description: 'Encode and decode URLs.',
                    status: 'coming-soon'
                },
                {
                    name: 'Base64 String Encoder',
                    description: 'Encode and decode base64 strings.',
                    status: 'coming-soon'
                },
                {
                    name: 'MD5 Hash Generator',
                    description: 'Generate MD5 hashes from text.',
                    status: 'coming-soon'
                },
                {
                    name: 'SHA-256 Hash Generator',
                    description: 'Generate SHA-256 hashes from text.',
                    status: 'coming-soon'
                },
                {
                    name: 'UUID/GUID Generator',
                    description: 'Generate unique identifiers.',
                    status: 'coming-soon'
                },
                {
                    name: 'QR Code Generator',
                    description: 'Generate QR codes with custom colors.',
                    status: 'coming-soon'
                },
                {
                    name: 'User Agent Parser',
                    description: 'Parse browser user agent strings.',
                    status: 'coming-soon'
                },
                {
                    name: 'What Is My IP',
                    description: 'Check your public IP address.',
                    status: 'coming-soon'
                },
                {
                    name: 'Cron Expression Generator',
                    description: 'Generate cron expressions easily.',
                    status: 'coming-soon'
                },
                {
                    name: 'Regex Tester',
                    description: 'Test regular expressions online.',
                    status: 'coming-soon'
                },
                {
                    name: 'Lorem Ipsum Generator',
                    description: 'Generate placeholder text.',
                    status: 'coming-soon'
                },
                {
                    name: 'Meta Tag Generator',
                    description: 'Generate HTML meta tags.',
                    status: 'coming-soon'
                },
                {
                    name: 'Open Graph Generator',
                    description: 'Generate Open Graph meta tags.',
                    status: 'coming-soon'
                },
                {
                    name: 'Twitter Card Generator',
                    description: 'Generate Twitter Card meta tags.',
                    status: 'coming-soon'
                },
                {
                    name: 'Slug Generator',
                    description: 'Generate URL-friendly slugs.',
                    status: 'coming-soon'
                },
                {
                    name: 'Htpasswd Generator',
                    description: 'Generate Apache htpasswd entries.',
                    status: 'coming-soon'
                },
                {
                    name: 'Markdown to HTML',
                    description: 'Convert Markdown to HTML.',
                    status: 'coming-soon'
                }
            ]
        },
        {
            id: 'text',
            title: '📝 Text & String Tools',
            tools: [
                {
                    name: 'Word Counter',
                    description: 'Count words, characters, and paragraphs.',
                    status: 'coming-soon'
                },
                {
                    name: 'Character Counter',
                    description: 'Count characters in text.',
                    status: 'coming-soon'
                },
                {
                    name: 'Case Converter',
                    description: 'Convert text case (upper/lower/camel).',
                    status: 'coming-soon'
                },
                {
                    name: 'Remove Duplicate Lines',
                    description: 'Remove duplicate lines from text.',
                    status: 'coming-soon'
                },
                {
                    name: 'Sort Text Lines',
                    description: 'Sort lines of text alphabetically.',
                    status: 'coming-soon'
                },
                {
                    name: 'Find and Replace',
                    description: 'Search and replace text.',
                    status: 'coming-soon'
                },
                {
                    name: 'Reverse Text',
                    description: 'Reverse the order of text.',
                    status: 'coming-soon'
                },
                {
                    name: 'Text to Binary',
                    description: 'Convert text to binary representation.',
                    status: 'coming-soon'
                },
                {
                    name: 'Binary to Text',
                    description: 'Convert binary to text.',
                    status: 'coming-soon'
                },
                {
                    name: 'ASCII Art Generator',
                    description: 'Convert images to ASCII art.',
                    status: 'coming-soon'
                },
                {
                    name: 'Emoji Picker',
                    description: 'Browse and copy emojis.',
                    status: 'coming-soon'
                },
                {
                    name: 'Upside Down Text',
                    description: 'Flip text upside down.',
                    status: 'coming-soon'
                },
                {
                    name: 'Small Text Generator',
                    description: 'Generate small text fonts.',
                    status: 'coming-soon'
                },
                {
                    name: 'Invisible Character',
                    description: 'Copy invisible characters.',
                    status: 'coming-soon'
                },
                {
                    name: 'Random Word Generator',
                    description: 'Generate random words.',
                    status: 'coming-soon'
                }
            ]
        },
        {
            id: 'calculators',
            title: '🧮 Calculators',
            tools: [
                {
                    name: 'Password Strength Checker',
                    description: 'Analyze entropy and crack time for any password.',
                    status: 'live',
                    url: '/password-strength/'
                },
                {
                    name: 'BMI Calculator',
                    description: 'Calculate your Body Mass Index instantly.',
                    status: 'live',
                    url: '/bmi-calculator/'
                },
                {
                    name: 'Body Fat Calculator',
                    description: 'Estimate your body fat percentage using body measurements.',
                    status: 'live',
                    url: '/body-fat-calculator/'
                },
                {
                    name: 'BMR Calculator',
                    description: 'Calculate your Basal Metabolic Rate and daily calorie needs.',
                    status: 'live',
                    url: '/bmr-calculator/'
                },
                {
                    name: 'Age Calculator',
                    description: 'Calculate age in years, months, days.',
                    status: 'coming-soon'
                },
                {
                    name: 'Date Difference Calculator',
                    description: 'Calculate days between dates.',
                    status: 'coming-soon'
                },
                {
                    name: 'Time Zone Converter',
                    description: 'Convert time between time zones.',
                    status: 'coming-soon'
                },
                {
                    name: 'Unix Timestamp Converter',
                    description: 'Convert between Unix timestamps and dates.',
                    status: 'coming-soon'
                },
                {
                    name: 'Stopwatch & Timer',
                    description: 'Online stopwatch and countdown timer.',
                    status: 'coming-soon'
                },
                {
                    name: 'Pomodoro Timer',
                    description: 'Focus timer for productivity.',
                    status: 'coming-soon'
                },
                {
                    name: 'Discount Calculator',
                    description: 'Calculate discounts and savings.',
                    status: 'coming-soon'
                },
                {
                    name: 'Sales Tax Calculator',
                    description: 'Calculate sales tax amounts.',
                    status: 'coming-soon'
                },
                {
                    name: 'Tip Calculator',
                    description: 'Calculate tips and split bills.',
                    status: 'coming-soon'
                },
                {
                    name: 'Percentage Calculator',
                    description: 'Calculate percentages and ratios.',
                    status: 'coming-soon'
                },
                {
                    name: 'Loan Calculator',
                    description: 'Calculate loan payments and interest.',
                    status: 'coming-soon'
                },
                {
                    name: 'CPM Calculator',
                    description: 'Calculate CPM and advertising costs.',
                    status: 'coming-soon'
                },
                {
                    name: 'Aspect Ratio Calculator',
                    description: 'Calculate aspect ratios and dimensions.',
                    status: 'coming-soon'
                },
                {
                    name: 'Download Time Calculator',
                    description: 'Calculate download times and speeds.',
                    status: 'coming-soon'
                }
            ]
        },
        {
            id: 'pdf',
            title: '📄 PDF & Document Tools',
            tools: [
                {
                    name: 'Merge PDF',
                    description: 'Combine multiple PDF files.',
                    status: 'coming-soon'
                },
                {
                    name: 'Split PDF',
                    description: 'Split PDF into separate pages.',
                    status: 'coming-soon'
                },
                {
                    name: 'JPG to PDF',
                    description: 'Convert JPG images to PDF.',
                    status: 'coming-soon'
                },
                {
                    name: 'PDF to JPG',
                    description: 'Convert PDF pages to JPG images.',
                    status: 'coming-soon'
                },
                {
                    name: 'Extract Images from PDF',
                    description: 'Extract images from PDF files.',
                    status: 'coming-soon'
                },
                {
                    name: 'Rotate PDF',
                    description: 'Rotate PDF pages.',
                    status: 'coming-soon'
                },
                {
                    name: 'Protect PDF',
                    description: 'Add password protection to PDF.',
                    status: 'coming-soon'
                },
                {
                    name: 'Unlock PDF',
                    description: 'Remove password from PDF.',
                    status: 'coming-soon'
                }
            ]
        },
        {
            id: 'fun',
            title: '🎲 Fun & Random Tools',
            tools: [
                {
                    name: 'Random Number Generator',
                    description: 'Generate random numbers.',
                    status: 'coming-soon'
                },
                {
                    name: 'Coin Flipper',
                    description: 'Flip a virtual coin.',
                    status: 'coming-soon'
                },
                {
                    name: 'Dice Roller',
                    description: 'Roll virtual dice.',
                    status: 'coming-soon'
                },
                {
                    name: 'Yes or No Oracle',
                    description: 'Get random yes/no answers.',
                    status: 'coming-soon'
                },
                {
                    name: 'Wheel of Names',
                    description: 'Spin a wheel to pick random names.',
                    status: 'coming-soon'
                },
                {
                    name: 'Rock Paper Scissors',
                    description: 'Play rock paper scissors online.',
                    status: 'coming-soon'
                },
                {
                    name: 'List Randomizer',
                    description: 'Shuffle and randomize lists.',
                    status: 'coming-soon'
                },
                {
                    name: 'Credit Card Validator',
                    description: 'Validate credit card numbers.',
                    status: 'coming-soon'
                }
            ]
        },
        {
            id: 'converters',
            title: '📏 Unit Converters',
            tools: [
                {
                    name: 'Length Converter',
                    description: 'Convert between length units.',
                    status: 'coming-soon'
                },
                {
                    name: 'Weight Converter',
                    description: 'Convert between weight units.',
                    status: 'coming-soon'
                },
                {
                    name: 'Temperature Converter',
                    description: 'Convert between temperature units.',
                    status: 'coming-soon'
                },
                {
                    name: 'Digital Storage Converter',
                    description: 'Convert between data storage units.',
                    status: 'coming-soon'
                },
                {
                    name: 'Speed Converter',
                    description: 'Convert between speed units.',
                    status: 'coming-soon'
                }
            ]
        }
    ]
};
