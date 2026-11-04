
document.addEventListener("DOMContentLoaded", () => {
  const languageButton = document.getElementById("languageToggle");
  const languageLabel = languageButton?.querySelector("span");

  let currentLanguage = localStorage.getItem("jakirPortfolioLanguage") || "en";

  // Update only an element's direct text, preserving nested icons.
  function setText(selector, values) {
    const elements = document.querySelectorAll(selector);

    elements.forEach((element, index) => {
      const value = values[index] ?? values[0];
      if (value === undefined) return;

      const textNode = [...element.childNodes].find(
        node => node.nodeType === Node.TEXT_NODE && node.textContent.trim()
      );

      if (textNode) {
        textNode.textContent = " " + value + " ";
      } else {
        element.insertBefore(document.createTextNode(value), element.firstChild);
      }
    });
  }

  const translations = {
    en: {
      ".availability span:last-child": ["IT PROFESSIONAL • OPEN TO OPPORTUNITIES"],
      ".hero-greeting": ["Hello, I'm"],
      ".hero h2": ["IT Officer | Technical Support Specialist"],
      ".hero-description": [
        "I am an IT enthusiast and Graphics Designer with hands-on experience in computer hardware, software support, networking and technical systems. I also enjoy creating digital designs and video content."
      ],
      ".hero-buttons .btn-primary": ["Explore My Work"],
      ".hero-buttons .btn-outline": ["Contact Me"],
      ".hero-float strong": ["IT SUPPORT", "NETWORKING"],
      ".hero-float small": ["Hardware & Software", "LAN & Connectivity"],

      ".stat-item small": [
        "Professional Roles",
        "Academic Qualifications",
        "IT & Creative Skills",
        "Featured Projects"
      ],

      ".section-heading h2": [
        "A Little About Me.",
        "Professional Experience.",
        "Education & Qualifications.",
        "Skills & Capabilities.",
        "Featured Projects.",
        "Services & Solutions."
      ],

      ".section-heading > p": [
        "A brief introduction to my professional interests and capabilities.",
        "My professional journey, responsibilities and practical experience.",
        "My academic background and educational achievements.",
        "A closer look at my technical expertise and creative capabilities.",
        "A selection of my technology-focused projects.",
        "Technical and creative services based on my skills and experience."
      ],

      ".about-description p": [
        "I am a motivated IT enthusiast and Graphics Designer with solid knowledge and hands-on experience in Computer Hardware and Software support. I am skilled in PC assembly and re-assembly, and networking tasks. I am eager to learn and aim to enhance my skills through teamwork while contributing effectively to the growth and success of a technology-driven organization."
      ],

      ".highlight-card h3": [
        "Technical Support",
        "Network & Security",
        "Creative Production"
      ],
      ".highlight-card p": [
        "Hardware, software and IT maintenance.",
        "Networking, CCTV and access control.",
        "Graphics design and video editing."
      ],

      ".period-label": ["CURRENT ROLE", "PREVIOUS ROLE"],
      ".experience-category": [
        "IT & TECHNICAL SUPPORT",
        "WEB & DIGITAL PROJECTS"
      ],
      ".experience-card h3": ["IT Officer", "Web Team Executive"],
      ".experience-card h4": [
        "ONE GENERAL HOSPITAL & DIAGNOSTIC CENTER",
        "COMPUTER VISION BD"
      ],
      ".experience-card-top .status-badge": [
        "Currently Working",
        "Previous Role"
      ],
      ".experience-location": [
        "Rangpur, Bangladesh",
        "Web Team"
      ],
      ".experience-list li": [
        "Provide technical support and troubleshoot computers, operating systems, application software and other IT equipment.",
        "Troubleshoot software and connectivity issues associated with CBC Analyzer, ECG/ECH equipment, Ultrasonography and X-ray machines.",
        "Assist with diagnostic equipment software setup and communication between diagnostic devices and computers, where applicable.",
        "Maintain and troubleshoot CCTV surveillance systems, including IP cameras, DVRs and NVRs.",
        "Maintain LAN connections, routers, switches, internet connectivity, IP telephony and internal communication systems.",
        "Install, configure and troubleshoot printers, scanners, official email accounts and other peripheral devices.",
        "Diagnose hardware, software and network issues, perform routine maintenance and coordinate with specialist service engineers when required.",
        "Collaborated with the web team on various online projects.",
        "Managed and updated website content efficiently.",
        "Provided technical support and assisted with troubleshooting issues.",
        "Supported the planning and execution of online projects.",
        "Demonstrated teamwork and effective communication in a digital environment."
      ],
      ".experience-tags span": [
        "IT Support", "Networking", "CCTV", "Diagnostic Systems",
        "Web Team", "Website Content", "Technical Support"
      ],

      ".education-level": [
        "DIPLOMA / ENGINEERING",
        "SECONDARY EDUCATION"
      ],
      ".education-card h3": [
        "Diploma in Engineering",
        "Secondary School Certificate"
      ],
      ".education-card h4": ["Electrical Technology", "Science Group"],
      ".education-institute": [
        "Image Polytechnic Institute, Rangpur",
        "Rajarhat Pilot High School, Kurigram"
      ],
      ".education-card-header .status-badge": [
        "Currently Studying",
        "Completed"
      ],
      ".education-meta small": [
        "SESSION", "BOARD",
        "PASSING YEAR", "BOARD"
      ],
      ".education-footer > span": ["Currently Studying"],
      ".gpa-display small": ["GPA"],
      ".result-label": ["Academic Result"],

      ".skill-card h3": [
        "PC & Laptop Assembly",
        "Hardware Troubleshooting",
        "OS & Software Installation",
        "Computer Networking",
        "CCTV Surveillance Systems",
        "Access Control Systems",
        "PABX & IP Telephony",
        "Printer & Scanner Support",
        "Diagnostic Equipment Support",
        "Graphics Design",
        "Video Editing",
        "IT Technical Support"
      ],
      ".skill-card p": [
        "Computer hardware assembly, re-assembly, component installation and system configuration for reliable performance.",
        "Identifying and resolving common computer hardware issues, component problems and system performance difficulties.",
        "Operating system installation, software configuration, driver setup and essential system optimization.",
        "LAN setup, router and switch configuration, structured cabling and basic network connectivity troubleshooting.",
        "IP and analog CCTV systems, DVR/NVR configuration, camera connectivity and monitoring setup.",
        "Biometric devices, card readers, door controllers and access management system configuration.",
        "PABX installation, configuration, maintenance and IP-based internal communication support.",
        "Printer and scanner installation, driver configuration, connectivity setup and troubleshooting.",
        "Technical software support for CBC Analyzer, ECG/ECH, Ultrasonography and X-ray systems.",
        "Creating professional digital graphics, promotional designs, product creatives and visual content.",
        "Video editing, visual presentation, promotional content production and creative storytelling.",
        "Providing technical assistance, system maintenance, software support and day-to-day IT troubleshooting."
      ],

      ".project-category": [
        "BUSINESS & TECHNOLOGY",
        "DESKTOP SOFTWARE"
      ],
      ".project-content h3": [
        "HOME IT SOLUTION LTD",
        "PREMIUM ETHERNET TOOL"
      ],
      ".project-content p": [
        "An IT service-focused business platform concept for presenting services, managing customer requests and business operations.",
        "A Windows utility project for managing Ethernet adapters and network connection status."
      ],
      ".project-tags span": [
        "IT Services", "Web Platform", "Business",
        "Windows App", ".NET", "Networking"
      ],

      ".service-card h3": [
        "PC & Laptop Assembly",
        "OS & Software Installation",
        "Printer Troubleshooting",
        "IP & Analog CCTV",
        "Access Control System",
        "Networking Solutions",
        "PABX & IP Calling",
        "Smart Door Lock",
        "File & Data Management",
        "Graphics Design",
        "Video Editing"
      ],
      ".service-card p": [
        "Computer assembly, re-assembly and hardware support.",
        "Operating system, drivers and software setup.",
        "Printer and scanner setup and troubleshooting.",
        "CCTV system installation and troubleshooting.",
        "Access control device and system support.",
        "LAN, router, switch and network support.",
        "Communication system setup and support.",
        "Smart door lock and automation support.",
        "Organizing and managing digital files and data.",
        "Creative graphics and digital design work.",
        "Editing and preparing video content."
      ],

      ".contact-intro h2": ["Let's Work Together."],
      ".contact-intro p": [
        "Have a project, technical issue or collaboration idea? Feel free to contact me."
      ],
      ".contact-item small": [
        "Email", "Phone / WhatsApp", "GitHub", "Facebook"
      ],
      ".footer p": ["© " + new Date().getFullYear() + " MD JAKIR HOSEN. All rights reserved."]
    },

    bn: {
      ".availability span:last-child": ["আইটি প্রফেশনাল • নতুন সুযোগের জন্য প্রস্তুত"],
      ".hero-greeting": ["হ্যালো, আমি"],
      ".hero h2": ["আইটি অফিসার | টেকনিক্যাল সাপোর্ট স্পেশালিস্ট"],
      ".hero-description": [
        "আমি একজন প্রযুক্তিপ্রেমী এবং গ্রাফিক্স ডিজাইনার। কম্পিউটার হার্ডওয়্যার, সফটওয়্যার সাপোর্ট, নেটওয়ার্কিং এবং বিভিন্ন প্রযুক্তিগত সিস্টেমে আমার বাস্তব অভিজ্ঞতা রয়েছে। পাশাপাশি ডিজিটাল ডিজাইন ও ভিডিও কনটেন্ট তৈরি করতে ভালোবাসি।"
      ],
      ".hero-buttons .btn-primary": ["আমার কাজ দেখুন"],
      ".hero-buttons .btn-outline": ["যোগাযোগ করুন"],
      ".hero-float strong": ["আইটি সাপোর্ট", "নেটওয়ার্কিং"],
      ".hero-float small": ["হার্ডওয়্যার ও সফটওয়্যার", "ল্যান ও কানেক্টিভিটি"],

      ".stat-item small": [
        "পেশাগত অভিজ্ঞতা",
        "শিক্ষাগত যোগ্যতা",
        "আইটি ও সৃজনশীল দক্ষতা",
        "উল্লেখযোগ্য প্রজেক্ট"
      ],

      ".section-heading h2": [
        "আমার সম্পর্কে.",
        "কর্মজীবনের অভিজ্ঞতা.",
        "শিক্ষাগত যোগ্যতা.",
        "দক্ষতা ও সক্ষমতা.",
        "আমার উল্লেখযোগ্য প্রজেক্ট.",
        "সেবা ও সমাধান."
      ],

      ".section-heading > p": [
        "আমার পেশাগত আগ্রহ ও সক্ষমতার সংক্ষিপ্ত পরিচিতি।",
        "আমার কর্মজীবন, দায়িত্ব এবং বাস্তব কাজের অভিজ্ঞতা।",
        "আমার শিক্ষাগত পটভূমি ও অর্জন।",
        "আমার প্রযুক্তিগত ও সৃজনশীল দক্ষতার বিস্তারিত পরিচিতি।",
        "আমার প্রযুক্তিনির্ভর কিছু উল্লেখযোগ্য প্রজেক্ট।",
        "আমার দক্ষতা ও অভিজ্ঞতাভিত্তিক প্রযুক্তিগত এবং সৃজনশীল সেবা।"
      ],

      ".about-description p": [
        "আমি একজন আগ্রহী আইটি প্রযুক্তিপ্রেমী ও গ্রাফিক্স ডিজাইনার। কম্পিউটার হার্ডওয়্যার ও সফটওয়্যার সাপোর্টে আমার ভালো জ্ঞান এবং বাস্তব অভিজ্ঞতা রয়েছে। পিসি অ্যাসেম্বলি ও রি-অ্যাসেম্বলি এবং নেটওয়ার্কিং কাজে আমি দক্ষ। আমি নতুন কিছু শিখতে আগ্রহী এবং দলগতভাবে কাজের মাধ্যমে নিজের দক্ষতা বাড়ানোর পাশাপাশি একটি প্রযুক্তিনির্ভর প্রতিষ্ঠানের উন্নতি ও সাফল্যে অবদান রাখতে চাই।"
      ],

      ".highlight-card h3": [
        "টেকনিক্যাল সাপোর্ট",
        "নেটওয়ার্ক ও নিরাপত্তা",
        "সৃজনশীল কাজ"
      ],
      ".highlight-card p": [
        "হার্ডওয়্যার, সফটওয়্যার ও আইটি রক্ষণাবেক্ষণ।",
        "নেটওয়ার্কিং, সিসিটিভি ও অ্যাক্সেস কন্ট্রোল।",
        "গ্রাফিক্স ডিজাইন ও ভিডিও এডিটিং।"
      ],

      ".period-label": ["বর্তমান কর্মস্থল", "পূর্ববর্তী কর্মস্থল"],
      ".experience-category": [
        "আইটি ও টেকনিক্যাল সাপোর্ট",
        "ওয়েব ও ডিজিটাল প্রজেক্ট"
      ],
      ".experience-card h3": ["আইটি অফিসার", "ওয়েব টিম এক্সিকিউটিভ"],
      ".experience-card h4": [
        "ওয়ান জেনারেল হাসপাতাল অ্যান্ড ডায়াগনস্টিক সেন্টার",
        "কম্পিউটার ভিশন বিডি"
      ],
      ".experience-card-top .status-badge": [
        "বর্তমানে কর্মরত",
        "পূর্ববর্তী পদ"
      ],
      ".experience-location": [
        "রংপুর, বাংলাদেশ",
        "ওয়েব টিম"
      ],
      ".experience-list li": [
        "কম্পিউটার, অপারেটিং সিস্টেম, অ্যাপ্লিকেশন সফটওয়্যার ও অন্যান্য আইটি সরঞ্জামের টেকনিক্যাল সাপোর্ট এবং সমস্যা সমাধান।",
        "CBC Analyzer, ECG/ECH, আল্ট্রাসনোগ্রাফি ও এক্স-রে মেশিনের সফটওয়্যার এবং কানেক্টিভিটি সংক্রান্ত সমস্যা সমাধান।",
        "ডায়াগনস্টিক যন্ত্রপাতির সফটওয়্যার সেটআপ ও কম্পিউটারের সঙ্গে যোগাযোগ স্থাপনে সহায়তা।",
        "IP ক্যামেরা, DVR ও NVR-সহ CCTV সার্ভেইল্যান্স সিস্টেম রক্ষণাবেক্ষণ ও সমস্যা সমাধান।",
        "LAN সংযোগ, রাউটার, সুইচ, ইন্টারনেট, IP টেলিফোনি এবং অভ্যন্তরীণ যোগাযোগ ব্যবস্থা রক্ষণাবেক্ষণ।",
        "প্রিন্টার, স্ক্যানার, অফিসিয়াল ইমেইল এবং অন্যান্য পেরিফেরাল ডিভাইস ইনস্টল ও কনফিগার করা।",
        "হার্ডওয়্যার, সফটওয়্যার ও নেটওয়ার্ক সমস্যা নির্ণয়, নিয়মিত রক্ষণাবেক্ষণ এবং প্রয়োজনে বিশেষজ্ঞ সার্ভিস ইঞ্জিনিয়ারের সঙ্গে সমন্বয় করা।",
        "বিভিন্ন অনলাইন প্রজেক্টে ওয়েব টিমের সঙ্গে সমন্বয় করে কাজ করা।",
        "ওয়েবসাইটের কনটেন্ট পরিচালনা ও নিয়মিত আপডেট করা।",
        "টেকনিক্যাল সাপোর্ট প্রদান এবং বিভিন্ন সমস্যা সমাধানে সহায়তা করা।",
        "অনলাইন প্রজেক্টের পরিকল্পনা ও বাস্তবায়নে সহায়তা করা।",
        "ডিজিটাল পরিবেশে দলগত কাজ ও কার্যকর যোগাযোগ বজায় রাখা।"
      ],
      ".experience-tags span": [
        "আইটি সাপোর্ট", "নেটওয়ার্কিং", "সিসিটিভি", "ডায়াগনস্টিক সিস্টেম",
        "ওয়েব টিম", "ওয়েবসাইট কনটেন্ট", "টেকনিক্যাল সাপোর্ট"
      ],

      ".education-level": [
        "ডিপ্লোমা / ইঞ্জিনিয়ারিং",
        "মাধ্যমিক শিক্ষা"
      ],
      ".education-card h3": [
        "ডিপ্লোমা ইন ইঞ্জিনিয়ারিং",
        "মাধ্যমিক স্কুল সার্টিফিকেট"
      ],
      ".education-card h4": ["ইলেকট্রিক্যাল টেকনোলজি", "বিজ্ঞান বিভাগ"],
      ".education-institute": [
        "ইমেজ পলিটেকনিক ইনস্টিটিউট, রংপুর",
        "রাজারহাট পাইলট উচ্চ বিদ্যালয়, কুড়িগ্রাম"
      ],
      ".education-card-header .status-badge": [
        "অধ্যয়নরত",
        "সম্পন্ন"
      ],
      ".education-meta small": [
        "শিক্ষাবর্ষ", "বোর্ড",
        "পাসের বছর", "বোর্ড"
      ],
      ".education-footer > span": ["অধ্যয়নরত"],
      ".gpa-display small": ["জিপিএ"],
      ".result-label": ["একাডেমিক ফলাফল"],

      ".skill-card h3": [
        "পিসি ও ল্যাপটপ অ্যাসেম্বলি",
        "হার্ডওয়্যার সমস্যা সমাধান",
        "ওএস ও সফটওয়্যার ইনস্টলেশন",
        "কম্পিউটার নেটওয়ার্কিং",
        "সিসিটিভি সার্ভেইল্যান্স সিস্টেম",
        "অ্যাক্সেস কন্ট্রোল সিস্টেম",
        "PABX ও আইপি টেলিফোনি",
        "প্রিন্টার ও স্ক্যানার সাপোর্ট",
        "ডায়াগনস্টিক যন্ত্রপাতি সাপোর্ট",
        "গ্রাফিক্স ডিজাইন",
        "ভিডিও এডিটিং",
        "আইটি টেকনিক্যাল সাপোর্ট"
      ],
      ".skill-card p": [
        "কম্পিউটার হার্ডওয়্যার অ্যাসেম্বলি, রি-অ্যাসেম্বলি, যন্ত্রাংশ স্থাপন এবং সিস্টেম কনফিগারেশন।",
        "কম্পিউটারের হার্ডওয়্যার, যন্ত্রাংশ এবং পারফরম্যান্স সংক্রান্ত সাধারণ সমস্যা শনাক্ত ও সমাধান।",
        "অপারেটিং সিস্টেম ইনস্টলেশন, সফটওয়্যার কনফিগারেশন, ড্রাইভার সেটআপ ও সিস্টেম অপটিমাইজেশন।",
        "LAN সেটআপ, রাউটার ও সুইচ কনফিগারেশন, ক্যাবলিং এবং নেটওয়ার্ক সংযোগের সমস্যা সমাধান।",
        "IP ও অ্যানালগ CCTV, DVR/NVR কনফিগারেশন, ক্যামেরা সংযোগ এবং মনিটরিং সেটআপ।",
        "বায়োমেট্রিক ডিভাইস, কার্ড রিডার, ডোর কন্ট্রোলার এবং অ্যাক্সেস ম্যানেজমেন্ট সিস্টেম কনফিগারেশন।",
        "PABX ইনস্টলেশন, কনফিগারেশন, রক্ষণাবেক্ষণ এবং IP-ভিত্তিক অভ্যন্তরীণ যোগাযোগ ব্যবস্থা।",
        "প্রিন্টার ও স্ক্যানার ইনস্টলেশন, ড্রাইভার কনফিগারেশন, সংযোগ স্থাপন এবং সমস্যা সমাধান।",
        "CBC Analyzer, ECG/ECH, আল্ট্রাসনোগ্রাফি ও এক্স-রে সিস্টেমের সফটওয়্যার সাপোর্ট।",
        "প্রফেশনাল ডিজিটাল গ্রাফিক্স, প্রমোশনাল ডিজাইন, প্রোডাক্ট ক্রিয়েটিভ ও ভিজ্যুয়াল কনটেন্ট তৈরি।",
        "ভিডিও এডিটিং, ভিজ্যুয়াল প্রেজেন্টেশন, প্রমোশনাল কনটেন্ট তৈরি এবং সৃজনশীল গল্প উপস্থাপন।",
        "টেকনিক্যাল সহায়তা, সিস্টেম রক্ষণাবেক্ষণ, সফটওয়্যার সাপোর্ট এবং দৈনন্দিন আইটি সমস্যা সমাধান।"
      ],

      ".project-category": [
        "ব্যবসা ও প্রযুক্তি",
        "ডেস্কটপ সফটওয়্যার"
      ],
      ".project-content h3": [
        "হোম আইটি সলিউশন লিমিটেড",
        "প্রিমিয়াম ইথারনেট টুল"
      ],
      ".project-content p": [
        "আইটি সার্ভিসভিত্তিক একটি ব্যবসায়িক প্ল্যাটফর্মের ধারণা, যেখানে সার্ভিস উপস্থাপন, গ্রাহকের অনুরোধ এবং ব্যবসায়িক কার্যক্রম পরিচালনার ব্যবস্থা রয়েছে।",
        "ইথারনেট অ্যাডাপ্টার ও নেটওয়ার্ক সংযোগের অবস্থা পরিচালনার জন্য একটি উইন্ডোজ ইউটিলিটি প্রজেক্ট।"
      ],
      ".project-tags span": [
        "আইটি সার্ভিস", "ওয়েব প্ল্যাটফর্ম", "ব্যবসা",
        "উইন্ডোজ অ্যাপ", ".NET", "নেটওয়ার্কিং"
      ],

      ".service-card h3": [
        "পিসি ও ল্যাপটপ অ্যাসেম্বলি",
        "ওএস ও সফটওয়্যার ইনস্টলেশন",
        "প্রিন্টার সমস্যা সমাধান",
        "আইপি ও অ্যানালগ সিসিটিভি",
        "অ্যাক্সেস কন্ট্রোল সিস্টেম",
        "নেটওয়ার্কিং সলিউশন",
        "PABX ও আইপি কলিং",
        "স্মার্ট ডোর লক",
        "ফাইল ও ডেটা ম্যানেজমেন্ট",
        "গ্রাফিক্স ডিজাইন",
        "ভিডিও এডিটিং"
      ],
      ".service-card p": [
        "কম্পিউটার অ্যাসেম্বলি, রি-অ্যাসেম্বলি ও হার্ডওয়্যার সাপোর্ট।",
        "অপারেটিং সিস্টেম, ড্রাইভার ও সফটওয়্যার সেটআপ।",
        "প্রিন্টার ও স্ক্যানার সেটআপ এবং সমস্যা সমাধান।",
        "সিসিটিভি সিস্টেম ইনস্টলেশন ও সমস্যা সমাধান।",
        "অ্যাক্সেস কন্ট্রোল ডিভাইস ও সিস্টেম সাপোর্ট।",
        "LAN, রাউটার, সুইচ ও নেটওয়ার্ক সাপোর্ট।",
        "যোগাযোগ ব্যবস্থা সেটআপ ও রক্ষণাবেক্ষণ।",
        "স্মার্ট ডোর লক ও অটোমেশন সাপোর্ট।",
        "ডিজিটাল ফাইল ও ডেটা সাজানো এবং পরিচালনা।",
        "সৃজনশীল গ্রাফিক্স ও ডিজিটাল ডিজাইন।",
        "ভিডিও এডিটিং ও কনটেন্ট প্রস্তুত।"
      ],

      ".contact-intro h2": ["একসাথে কাজ করতে চাই।"],
      ".contact-intro p": [
        "আপনার কোনো প্রজেক্ট, প্রযুক্তিগত সমস্যা বা কাজের প্রস্তাব থাকলে নির্দ্বিধায় যোগাযোগ করুন।"
      ],
      ".contact-item small": [
        "ইমেইল", "ফোন / হোয়াটসঅ্যাপ", "গিটহাব", "ফেসবুক"
      ],
      ".footer p": ["© " + new Date().getFullYear() + " MD JAKIR HOSEN। সর্বস্বত্ব সংরক্ষিত।"]
    }
  };

  function applyLanguage(language) {
    const dictionary = translations[language];
    if (!dictionary) return;

    Object.entries(dictionary).forEach(([selector, values]) => {
      setText(selector, values);
    });

    // Navigation labels
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.textContent = language === "bn"
        ? link.dataset.bn || ({
            home: "হোম",
            about: "পরিচিতি",
            experience: "অভিজ্ঞতা",
            education: "শিক্ষা",
            skills: "দক্ষতা",
            projects: "প্রজেক্ট",
            services: "সেবা",
            contact: "যোগাযোগ"
          }[link.getAttribute("href").slice(1)])
        : link.dataset.en || ({
            home: "Home",
            about: "About",
            experience: "Experience",
            education: "Education",
            skills: "Skills",
            projects: "Projects",
            services: "Services",
            contact: "Contact"
          }[link.getAttribute("href").slice(1)]);
    });

    if (languageLabel) {
      languageLabel.textContent = language === "en" ? "বাংলা" : "English";
    }

    document.documentElement.lang = language;
    localStorage.setItem("jakirPortfolioLanguage", language);
    currentLanguage = language;

    // Re-render Lucide icons after language updates.
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Language switch
  languageButton?.addEventListener("click", () => {
    applyLanguage(currentLanguage === "en" ? "bn" : "en");
  });

  // Smooth navigation and active section highlighting
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("main section[id]");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      navLinks.forEach(link => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === "#" + entry.target.id
        );
      });
    });
  }, {
    rootMargin: "-25% 0px -65% 0px",
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));

  // Automatic footer year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Initial language
  applyLanguage(currentLanguage);

  // Initial icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
