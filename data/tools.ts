import { ToolDef, ToolCategory } from '../types';
import * as TextTools from '../tools/TextTools';
import * as DevTools from '../tools/DevTools';
import * as CalcTools from '../tools/CalcTools';
import * as WebTools from '../tools/WebTools';

// Helper to keep the file cleaner, though content is fully expanded below
export const tools: ToolDef[] = [
  // --- AI & Text Tools ---
  {
    id: 'ai-summarizer',
    name: 'AI Text Summarizer',
    description: 'Summarize long articles instantly using Google Gemini AI.',
    category: ToolCategory.AI,
    icon: 'fa-brain',
    path: '/tool/ai-summarizer',
    component: TextTools.TextSummarizer,
    keywords: ['summarizer', 'ai summary', 'text condenser', 'article summarizer', 'tldr generator'],
    content: {
      intro: "In today's fast-paced digital world, information overload is a real challenge. The AI Text Summarizer is a powerful utility designed to help students, researchers, and professionals digest large volumes of text in seconds. Utilizing advanced machine learning models (Google Gemini), this tool analyzes paragraphs to extract the core meaning, presenting you with a concise, bulleted summary. Whether you need to grasp the main points of a research paper, a news article, or a long email, this tool ensures you get the facts without the fluff.",
      howTo: [
        "Paste your long text, article, or essay into the input box.",
        "Click the 'Summarize Text' button.",
        "Wait a moment for the AI to process the natural language.",
        "Read the generated bullet-point summary below."
      ],
      benefits: [
        "Saves time by reducing reading duration by up to 80%.",
        "Improves comprehension by highlighting key facts.",
        "Completely free to use with no daily limits.",
        "Secure client-side processing ensures your privacy."
      ],
      faqs: [
        { question: "Is this AI summarizer free?", answer: "Yes, OmniTools provides this AI summarizer completely free of charge for all users." },
        { question: "How accurate is the summary?", answer: "We use state-of-the-art Large Language Models (LLMs) to ensure high accuracy and context retention." }
      ]
    }
  },
  {
    id: 'word-counter',
    name: 'Word Counter',
    description: 'Count words, characters, and paragraphs in real-time.',
    category: ToolCategory.TEXT,
    icon: 'fa-paragraph',
    path: '/tool/word-counter',
    component: TextTools.WordCounter,
    keywords: ['word count', 'character count', 'essay length checker', 'social media post limit'],
    content: {
      intro: "The Word Counter is an essential tool for writers, students, and social media managers. It goes beyond simple counting by providing detailed metrics on characters, sentences, and paragraphs. Whether you are writing a tweet that needs to fit within a character limit or an essay with a strict word count requirement, this tool updates in real-time as you type. It helps you maintain brevity and hit your targets without the need for heavy word processing software.",
      howTo: [
        "Start typing directly into the text area or paste your document.",
        "View the real-time statistics updating instantly above the text box.",
        "Check specific metrics like Character Count (great for X/Twitter) or Paragraph count.",
        "Clear the text to start a new session."
      ],
      benefits: [
        "Real-time analysis without page reloads.",
        "Accurate counts for words, characters, sentences, and paragraphs.",
        "Helps meet strict submission guidelines for assignments.",
        "Works offline once the page is loaded."
      ],
      faqs: [
        { question: "Does it count spaces as characters?", answer: "The 'Characters' count usually includes spaces. We differentiate between visual words and raw characters." },
        { question: "Is there a limit to how much text I can check?", answer: "No, you can paste entire book chapters or essays without performance issues." }
      ]
    }
  },
  {
    id: 'case-converter',
    name: 'Case Converter',
    description: 'Convert text to Uppercase, Lowercase, or Title Case.',
    category: ToolCategory.TEXT,
    icon: 'fa-font',
    path: '/tool/case-converter',
    component: TextTools.CaseConverter,
    keywords: ['uppercase', 'lowercase', 'title case', 'sentence case', 'caps lock fix'],
    content: {
      intro: "Have you ever accidentally left Caps Lock on and typed a whole paragraph? The Case Converter is a simple yet indispensable utility that saves you from retyping text. It instantly transforms your text between Uppercase, Lowercase, and Title Case formats. This is particularly useful for programmers naming variables, writers formatting headlines, or anyone needing to standardize text input quickly.",
      howTo: [
        "Paste the text you want to convert into the box.",
        "Select the desired format button (e.g., UPPERCASE, lowercase, Title Case).",
        "The text will instantly transform.",
        "Copy the result to your clipboard."
      ],
      benefits: [
        "Fixes accidental Caps Lock typing instantly.",
        "Formats headlines correctly for blog posts.",
        "Standardizes data lists for spreadsheets.",
        "One-click operation for maximum efficiency."
      ],
      faqs: [
        { question: "What is Title Case?", answer: "Title Case capitalizes the first letter of every major word, ideal for headlines and titles." },
        { question: "Does this save my text?", answer: "No, all conversion happens instantly in your browser and is not stored on our servers." }
      ]
    }
  },
  {
    id: 'lorem-ipsum',
    name: 'Lorem Ipsum Generator',
    description: 'Generate placeholder text for designs.',
    category: ToolCategory.TEXT,
    icon: 'fa-file-alt',
    path: '/tool/lorem-ipsum',
    component: TextTools.LoremIpsumGen,
    keywords: ['dummy text', 'placeholder', 'filler text', 'web design text'],
    content: {
      intro: "Designers and developers often need filler text to visualize layouts before the final content is ready. The Lorem Ipsum Generator provides standard industry placeholder text derived from classical Latin literature. Unlike random gibberish, Lorem Ipsum has a normal distribution of letters, making it look like readable English. This ensures that the focus remains on the design elements rather than the text content itself.",
      howTo: [
        "Select the number of paragraphs you need.",
        "Click 'Generate' to create the text.",
        "Copy the generated Lorem Ipsum block.",
        "Paste it into your Photoshop, Figma, or HTML design."
      ],
      benefits: [
        "Provides professional-looking placeholder text.",
        "Adjustable length to fit any design container.",
        "Standard text used by designers worldwide.",
        "Prevents clients from getting distracted by draft copy."
      ],
      faqs: [
        { question: "What does Lorem Ipsum mean?", answer: "It is a scrambled version of a passage from Cicero's 'De Finibus Bonorum et Malorum'." },
        { question: "Is this text copyright free?", answer: "Yes, standard Lorem Ipsum text is in the public domain and free to use." }
      ]
    }
  },
  {
    id: 'reading-time',
    name: 'Reading Time Calculator',
    description: 'Estimate how long it takes to read a text.',
    category: ToolCategory.TEXT,
    icon: 'fa-clock',
    path: '/tool/reading-time',
    component: TextTools.ReadingTime,
    keywords: ['read time', 'wpm', 'speech timer', 'presentation timing'],
    content: {
      intro: "In the age of content marketing, knowing the reading time of an article is crucial for user engagement. The Reading Time Calculator estimates how long an average reader will take to finish your text. Based on a standard reading speed of 200-250 words per minute, this tool helps bloggers, speechwriters, and students gauge the length of their content. It's also excellent for timing speeches and presentations.",
      howTo: [
        "Paste your article or speech script into the input area.",
        "The tool automatically calculates the word count.",
        "See the estimated reading time in minutes instantly.",
        "Adjust your text to meet specific time constraints."
      ],
      benefits: [
        "Helps bloggers provide 'Estimated Reading Time' tags.",
        "Essential for rehearsing timed speeches.",
        "Optimizes content length for better audience retention.",
        "Simple and accurate calculation."
      ],
      faqs: [
        { question: "What reading speed is used?", answer: "We use an average speed of 200 words per minute, which is standard for most adults." },
        { question: "Can I use this for speech timing?", answer: "Yes, reading speed and speaking speed are often similar for clear presentations." }
      ]
    }
  },

  // --- Developer Tools ---
  {
    id: 'json-formatter',
    name: 'JSON Formatter',
    description: 'Beautify and validate JSON data.',
    category: ToolCategory.DEV,
    icon: 'fa-code',
    path: '/tool/json-formatter',
    component: DevTools.JsonFormatter,
    keywords: ['json lint', 'json beautify', 'json validator', 'code prettier'],
    content: {
      intro: "JSON (JavaScript Object Notation) is the backbone of modern web APIs, but raw JSON is often minified and unreadable. The JSON Formatter & Validator is a developer's best friend. It takes messy, minified JSON strings and formats them into a clean, indented, and color-coded structure. It also validates the syntax, highlighting errors so you can debug API responses quickly.",
      howTo: [
        "Paste your raw JSON string into the editor.",
        "Click 'Beautify' to indent and format the code.",
        "Click 'Minify' if you want to compress it for production use.",
        "If there are errors, an alert will tell you the JSON is invalid."
      ],
      benefits: [
        "Instantly makes JSON readable for humans.",
        "Validates syntax to catch missing commas or brackets.",
        "Minifies code to save bandwidth.",
        "Essential for debugging backend API issues."
      ],
      faqs: [
        { question: "Is my JSON data sent to a server?", answer: "No, all formatting happens locally in your browser using JavaScript." },
        { question: "Can it handle large files?", answer: "Yes, it can handle significantly large JSON objects efficiently." }
      ]
    }
  },
  {
    id: 'base64-encode',
    name: 'Base64 Encoder',
    description: 'Convert text to Base64 format.',
    category: ToolCategory.DEV,
    icon: 'fa-file-code',
    path: '/tool/base64-encode',
    component: DevTools.Base64Encode,
    keywords: ['base64 encode', 'string to base64', 'data encoding'],
    content: {
      intro: "Base64 encoding is a method used to represent binary data in an ASCII string format. The Base64 Encoder allows you to convert any text or string into Base64 format instantly. This is commonly used for encoding email attachments, embedding small images directly into HTML/CSS, or transmitting data over media that are designed to deal with textual data.",
      howTo: [
        "Enter the text you wish to encode in the input box.",
        "The tool automatically generates the Base64 string below.",
        "Copy the encoded string for use in your code or application."
      ],
      benefits: [
        "Fast and error-free encoding.",
        "Useful for Basic Authentication headers.",
        "Compatible with all modern browsers and systems.",
        "Works entirely offline."
      ],
      faqs: [
        { question: "Is Base64 encryption?", answer: "No, Base64 is an encoding scheme, not encryption. It can be easily decoded." },
        { question: "Why use Base64?", answer: "It ensures that data remains intact without modification during transport." }
      ]
    }
  },
  {
    id: 'base64-decode',
    name: 'Base64 Decoder',
    description: 'Decode Base64 strings to text.',
    category: ToolCategory.DEV,
    icon: 'fa-unlock',
    path: '/tool/base64-decode',
    component: DevTools.Base64Decode,
    keywords: ['base64 decode', 'base64 to text', 'decode string'],
    content: {
      intro: "The Base64 Decoder reverses the encoding process, turning Base64 strings back into readable text. Developers frequently encounter Base64 strings in API responses, email headers, or configuration files. This tool helps you quickly interpret that data without needing to write a script or use a command line.",
      howTo: [
        "Paste the Base64 string into the input field.",
        "The tool attempts to decode it instantly.",
        "View the readable text output below.",
        "If the string is invalid, an error message will appear."
      ],
      benefits: [
        "Instantly reveals the contents of encoded data.",
        "Helps debug data transmission issues.",
        "Simple, clean interface for quick checks.",
        "Secure client-side processing."
      ],
      faqs: [
        { question: "Can I decode images?", answer: "This tool is optimized for text. Decoding large image strings might lag the browser." },
        { question: "Is it secure?", answer: "Yes, the decoding happens on your device. We do not see your data." }
      ]
    }
  },
  {
    id: 'url-encoder',
    name: 'URL Encoder/Decoder',
    description: 'Encode or decode URLs safely.',
    category: ToolCategory.DEV,
    icon: 'fa-link',
    path: '/tool/url-encoder',
    component: DevTools.UrlEncoder,
    keywords: ['url encode', 'percent encoding', 'url decode', 'query string formatter'],
    content: {
      intro: "URLs can only send characters from the standard ASCII set. The URL Encoder/Decoder tool ensures your URLs are valid for internet transmission. It converts unsafe characters (like spaces or special symbols) into a format that can be transmitted over the Internet. Conversely, it can decode messy URLs back into a readable format, which is vital for debugging tracking parameters and query strings.",
      howTo: [
        "Paste a URL or text string into the input box.",
        "See the 'Encoded' version which replaces symbols with % codes.",
        "See the 'Decoded' version which converts % codes back to text.",
        "Copy the version you need."
      ],
      benefits: [
        "Prevents 404 errors caused by malformed URLs.",
        "Essential for handling UTM parameters and query strings.",
        "Makes complex URLs readable again.",
        "Supports standard UTF-8 encoding."
      ],
      faqs: [
        { question: "What is percent encoding?", answer: "It is a mechanism for encoding information in a Uniform Resource Identifier (URI)." },
        { question: "Why do I see %20?", answer: "%20 represents a space character in URL encoding." }
      ]
    }
  },
  {
    id: 'hash-generator',
    name: 'SHA-256 Generator',
    description: 'Create secure SHA-256 hashes.',
    category: ToolCategory.DEV,
    icon: 'fa-shield-alt',
    path: '/tool/hash-generator',
    component: DevTools.HashGenerator,
    keywords: ['hash generator', 'sha256', 'crypto hash', 'password hashing'],
    content: {
      intro: "Security is paramount in web development. The SHA-256 Generator allows you to create a cryptographic hash of any text input. SHA-256 (Secure Hash Algorithm 256-bit) is widely used for data integrity checks, digital signatures, and password verification. Unlike encryption, hashing is a one-way process, making it ideal for verifying that file contents or passwords haven't been altered.",
      howTo: [
        "Type your text or password into the input field.",
        "The tool uses the browser's crypto API to generate the hash.",
        "The SHA-256 hash string appears instantly.",
        "Copy the hash for your database or verification needs."
      ],
      benefits: [
        "Generates industry-standard secure hashes.",
        "Great for verifying file integrity (checksums).",
        "Uses browser-native crypto for maximum speed and security.",
        "No data is sent to the cloud."
      ],
      faqs: [
        { question: "Can I reverse the hash?", answer: "No, SHA-256 is a one-way function. You cannot get the original text back from the hash." },
        { question: "Is this safe for passwords?", answer: "SHA-256 is secure, but for password storage, developers should also use 'salting'." }
      ]
    }
  },

  // --- Calculators ---
  {
    id: 'bmi-calculator',
    name: 'BMI Calculator',
    description: 'Calculate Body Mass Index.',
    category: ToolCategory.CALC,
    icon: 'fa-weight',
    path: '/tool/bmi-calculator',
    component: CalcTools.BmiCalculator,
    keywords: ['bmi', 'body mass index', 'health calculator', 'fitness tracker'],
    content: {
      intro: "Maintaining a healthy weight is key to long-term well-being. The BMI Calculator provides a quick assessment of your body fat based on your height and weight. While not a complete diagnostic tool, BMI is a widely used screening method to categorize weight as underweight, normal weight, overweight, or obese. It serves as a starting point for discussions about health and fitness.",
      howTo: [
        "Enter your weight in kilograms (kg).",
        "Enter your height in centimeters (cm).",
        "The calculator instantly computes your BMI score.",
        "Check the category (e.g., Normal, Overweight) displayed below."
      ],
      benefits: [
        "Quick and easy health screening.",
        "Helps track fitness progress over time.",
        "Based on World Health Organization (WHO) standards.",
        "Private and anonymous usage."
      ],
      faqs: [
        { question: "What is a normal BMI?", answer: "A BMI between 18.5 and 24.9 is generally considered normal weight." },
        { question: "Does it account for muscle mass?", answer: "No, BMI is a simple weight-to-height ratio and does not distinguish between muscle and fat." }
      ]
    }
  },
  {
    id: 'discount-calculator',
    name: 'Discount Calculator',
    description: 'Calculate sale price and savings.',
    category: ToolCategory.CALC,
    icon: 'fa-tags',
    path: '/tool/discount-calculator',
    component: CalcTools.DiscountCalculator,
    keywords: ['sale calculator', 'percentage off', 'shopping tool', 'price after discount'],
    content: {
      intro: "Shopping during sales can be confusing with various percentage-off deals. The Discount Calculator helps smart shoppers instantly figure out the final price of an item and exactly how much money they are saving. Whether you are in a retail store or shopping online, this tool removes the guesswork from mental math and helps you stick to your budget.",
      howTo: [
        "Enter the original price of the item.",
        "Enter the discount percentage (e.g., 20 for 20% off).",
        "View the 'Final Price' you will pay.",
        "View the total 'You Save' amount."
      ],
      benefits: [
        "Prevents overspending during sales.",
        "Quickly compares different discount offers.",
        "Works for any currency.",
        "Simple interface for mobile use while shopping."
      ],
      faqs: [
        { question: "Can I calculate double discounts?", answer: "Currently, this tool calculates a single percentage discount off the original price." },
        { question: "Is the math accurate?", answer: "Yes, it uses standard percentage formulas for precise results." }
      ]
    }
  },
  {
    id: 'temp-converter',
    name: 'Temperature Converter',
    description: 'Convert Celsius to Fahrenheit.',
    category: ToolCategory.CALC,
    icon: 'fa-temperature-high',
    path: '/tool/temp-converter',
    component: CalcTools.TempConverter,
    keywords: ['celsius to fahrenheit', 'temperature conversion', 'f to c', 'weather converter'],
    content: {
      intro: "Traveling between countries often means switching between metric and imperial systems. The Temperature Converter is a handy utility for converting degrees Celsius (°C) to Fahrenheit (°F) and vice versa. Whether you are checking the weather forecast abroad, following a cooking recipe, or conducting a science experiment, this tool provides instant and accurate conversions.",
      howTo: [
        "Type a value into the Celsius field to see the Fahrenheit equivalent.",
        "Or, type into the Fahrenheit field to see the Celsius equivalent.",
        "The conversion happens automatically as you type.",
        "Use decimals for precise scientific measurements."
      ],
      benefits: [
        "Bidirectional conversion (C to F and F to C).",
        "Essential for travel and cooking.",
        "Supports negative values for freezing temperatures.",
        "Eliminates the need for complex formulas."
      ],
      faqs: [
        { question: "What is the formula?", answer: "(°C × 9/5) + 32 = °F." },
        { question: "Is -40 the same in both?", answer: "Yes, -40 degrees is the point where Celsius and Fahrenheit scales intersect." }
      ]
    }
  },
  {
    id: 'age-calculator',
    name: 'Age Calculator',
    description: 'Calculate exact age from date of birth.',
    category: ToolCategory.CALC,
    icon: 'fa-birthday-cake',
    path: '/tool/age-calculator',
    component: CalcTools.AgeCalculator,
    keywords: ['how old am i', 'age calculator', 'chronological age', 'birthday calculator'],
    content: {
      intro: "Have you ever wondered exactly how old you are in years, months, and days? The Age Calculator solves this curiosity with precision. Beyond just your birthday, it calculates the exact duration you have been alive. It is also useful for calculating age differences, determining eligibility for age-restricted services, or just for fun facts about your lifespan.",
      howTo: [
        "Select your Date of Birth from the calendar picker.",
        "Click 'Calculate Age'.",
        "View your exact age broken down by Years, Months, and Days.",
        "You can also use it to calculate the age of events or historical figures."
      ],
      benefits: [
        "Calculates precise age including leap years.",
        "Fun for birthdays and anniversaries.",
        "Useful for filling out official forms requiring exact age.",
        "Simple, one-click interface."
      ],
      faqs: [
        { question: "Does it count leap years?", answer: "Yes, the logic accounts for the varying number of days in months and leap years." },
        { question: "Is my birthdate stored?", answer: "No, the calculation is performed locally in your browser." }
      ]
    }
  },
  {
    id: 'aspect-ratio',
    name: 'Aspect Ratio Calc',
    description: 'Calculate dimensions for screens.',
    category: ToolCategory.CALC,
    icon: 'fa-tv',
    path: '/tool/aspect-ratio',
    component: CalcTools.AspectRatioCalc,
    keywords: ['16:9 calculator', 'screen resolution', 'aspect ratio', 'video dimensions'],
    content: {
      intro: "Video editors, designers, and photographers deal with aspect ratios daily. The Aspect Ratio Calculator helps you determine the correct width or height for a specific ratio (like 16:9 or 4:3). It also calculates the aspect ratio of any given resolution. This ensures your content looks perfect on any screen, from wide monitors to mobile phones, without stretching or black bars.",
      howTo: [
        "Enter the Width and Height of your image or screen.",
        "The tool automatically calculates the simplified Aspect Ratio (e.g., 16:9).",
        "Use it to find the missing dimension when resizing images.",
        "Great for checking video compliance for platforms like YouTube or Instagram."
      ],
      benefits: [
        "Simplifies complex fractions instantly.",
        "Crucial for responsive web design and video editing.",
        "Helps prevent image distortion.",
        "Supports any resolution size."
      ],
      faqs: [
        { question: "What is the standard TV ratio?", answer: "Most modern TVs and monitors use the 16:9 aspect ratio." },
        { question: "What is 1920x1080?", answer: "1920x1080 is a standard 16:9 Full HD resolution." }
      ]
    }
  },

  // --- Web & Image Tools ---
  {
    id: 'password-gen',
    name: 'Password Generator',
    description: 'Create strong, secure passwords.',
    category: ToolCategory.WEB,
    icon: 'fa-key',
    path: '/tool/password-gen',
    component: WebTools.PasswordGenerator,
    keywords: ['strong password', 'security', 'random password', 'cybersecurity tool'],
    content: {
      intro: "In an era of frequent data breaches, using strong, unique passwords is your first line of defense. The Secure Password Generator creates complex, random passwords that are extremely difficult for hackers to crack. Unlike human-made passwords which often rely on memorable (and guessable) words, this tool uses a combination of letters, numbers, and symbols to maximize entropy and security.",
      howTo: [
        "Use the slider to select your desired password length (recommended: 12+).",
        "Click 'Generate' to create a new random password.",
        "Click on the generated password to copy it to your clipboard.",
        "Paste it into your account registration field."
      ],
      benefits: [
        "Creates cryptographically strong passwords.",
        "Customizable length for different website requirements.",
        "Prevents the risk of reusing weak passwords.",
        "No passwords are stored or sent over the internet."
      ],
      faqs: [
        { question: "How long should a password be?", answer: "Experts recommend at least 12 characters, mixing types of characters." },
        { question: "Do you save these passwords?", answer: "Never. They are generated locally on your device and disappear when you refresh." }
      ]
    }
  },
  {
    id: 'qr-generator',
    name: 'QR Code Generator',
    description: 'Generate QR codes for URLs.',
    category: ToolCategory.IMG,
    icon: 'fa-qrcode',
    path: '/tool/qr-generator',
    component: WebTools.QrGenerator,
    keywords: ['qr code maker', 'barcode generator', 'url to qr', 'contactless menu'],
    content: {
      intro: "QR Codes (Quick Response Codes) bridge the physical and digital worlds. The QR Code Generator allows you to convert any URL, text, or contact info into a scannable image. These are perfect for restaurant menus, business cards, Wi-Fi sharing, or marketing materials. Users can simply scan the code with their smartphone camera to access your content instantly without typing.",
      howTo: [
        "Enter your website URL or text message in the input field.",
        "The QR code image generates automatically.",
        "Right-click the image to save or download it.",
        "Print it or use it digitally in your designs."
      ],
      benefits: [
        "Instant generation of high-quality QR codes.",
        "No expiration date on generated codes.",
        "Perfect for touch-free interactions.",
        "Compatible with all QR scanner apps."
      ],
      faqs: [
        { question: "Will the QR code expire?", answer: "No, as long as the content (URL) is static, the code will work forever." },
        { question: "Can I use it for commercial print?", answer: "Yes, the generated codes are free for commercial use." }
      ]
    }
  },
  {
    id: 'meta-tag-gen',
    name: 'Meta Tag Generator',
    description: 'Create SEO meta tags for your site.',
    category: ToolCategory.WEB,
    icon: 'fa-search',
    path: '/tool/meta-tag-gen',
    component: WebTools.MetaTagGen,
    keywords: ['seo tools', 'meta tags', 'html generator', 'search engine optimization'],
    content: {
      intro: "Meta tags are snippets of text that describe a page's content to search engines. The Meta Tag Generator helps webmasters and developers create accurate HTML meta tags for titles and descriptions. Proper meta tags are critical for SEO (Search Engine Optimization) as they influence how your page appears in search results and can improve your click-through rate.",
      howTo: [
        "Enter your Page Title (keep it under 60 characters for best results).",
        "Enter a concise Page Description (under 160 characters).",
        "The tool automatically formats the HTML code.",
        "Copy the code block and paste it into the <head> section of your website."
      ],
      benefits: [
        "Ensures correct HTML syntax for SEO tags.",
        "Helps improve search engine ranking visibility.",
        "Saves time writing boilerplate HTML.",
        "Visualizes your tags before implementation."
      ],
      faqs: [
        { question: "Why are meta descriptions important?", answer: "They act as a pitch to readers in search results, encouraging them to click your link." },
        { question: "Does this affect Google ranking?", answer: "While not a direct ranking factor, good meta tags improve CTR, which boosts ranking." }
      ]
    }
  },
  {
    id: 'color-converter',
    name: 'Color Converter',
    description: 'Convert Hex to RGB color codes.',
    category: ToolCategory.IMG,
    icon: 'fa-palette',
    path: '/tool/color-converter',
    component: WebTools.ColorConverter,
    keywords: ['hex to rgb', 'color picker', 'web design colors', 'css color codes'],
    content: {
      intro: "Web designers and developers often need to switch between different color formats. The Color Converter allows you to seamlessly translate Hexadecimal (Hex) codes to RGB (Red Green Blue) values. Hex codes are great for CSS copy-pasting, while RGB is often needed for software configuration or manipulating opacity (RGBA). This tool includes a visual color picker for easy selection.",
      howTo: [
        "Click the color square to pick a color visually.",
        "Or, paste a Hex code (like #0ea5e9) into the text field.",
        "The tool instantly calculates and displays the RGB value.",
        "Copy the RGB string for use in your CSS or design software."
      ],
      benefits: [
        "Visual feedback ensures you pick the right shade.",
        "Supports standard web color formats.",
        "Essential for frontend development and UI design.",
        "Lightweight and fast."
      ],
      faqs: [
        { question: "What is Hex?", answer: "Hex is a base-16 representation of color values used in HTML and CSS." },
        { question: "Does it support Alpha/Transparency?", answer: "This basic version converts standard Hex to RGB. RGBA is needed for transparency." }
      ]
    }
  },
  {
    id: 'robots-gen',
    name: 'Robots.txt Generator',
    description: 'Create robots.txt for crawlers.',
    category: ToolCategory.WEB,
    icon: 'fa-robot',
    path: '/tool/robots-gen',
    component: WebTools.RobotsGen,
    keywords: ['robots.txt', 'seo', 'crawler control', 'webmaster tools'],
    content: {
      intro: "The robots.txt file is a set of instructions for web robots (crawlers) that visit your site. It tells search engines like Google which parts of your site they should or should not process. The Robots.txt Generator creates a correctly formatted file to help you manage crawler access. This is vital for preventing the indexing of private admin pages or duplicate content.",
      howTo: [
        "Choose whether to 'Allow' or 'Disallow' all robots.",
        "The tool generates the standard User-agent syntax.",
        "Copy the output text.",
        "Save it as a file named 'robots.txt' and upload it to your website's root directory."
      ],
      benefits: [
        "Prevents search engines from indexing private areas.",
        "Ensures your site adheres to the Robots Exclusion Protocol.",
        "Simple configuration for standard use cases.",
        "Ready-to-use syntax generation."
      ],
      faqs: [
        { question: "Do I need a robots.txt file?", answer: "It is highly recommended for SEO to guide search engine bots effectively." },
        { question: "What does User-agent: * mean?", answer: "It means the instructions apply to all web crawlers (Google, Bing, etc.)." }
      ]
    }
  },
];
