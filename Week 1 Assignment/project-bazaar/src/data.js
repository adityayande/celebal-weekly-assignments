export const projects = [
  {
    id: "p1",
    title: "IoT Smart Agriculture System",
    domain: "IoT",
    difficulty: "Hard",
    vivaSurvival: 45,
    explainability: 3,
    readiness: true,
    price: 500,
    image: "https://images.unsplash.com/photo-1592982537447-6f2334208f62?auto=format&fit=crop&q=80&w=400&h=250",
    techStack: ["ESP32", "DHT11", "Firebase", "React"],
    whatYouGet: ["Source Code (Arduino + React)", "Circuit Diagram", "60-page Project Report", "PPT (15 slides)", "Fake output data"],
    qna: [
      { q: "What if the moisture sensor fails?", a: "Sir, we have implemented software-level fail-safes. (Just nod confidently)." },
      { q: "Why Firebase and not AWS?", a: "To ensure real-time data sync with minimal latency for the plants. (It was free)." }
    ],
    reviews: [
      { user: "Ramesh_ECE", tag: "Passed ✅", comment: "Professor didn't even look at the code. Thanks!" },
      { user: "Priya_199", tag: "Passed ✅", comment: "The PPT saved my life." }
    ]
  },
  {
    id: "p2",
    title: "AI Disease Prediction App",
    domain: "ML",
    difficulty: "Medium",
    vivaSurvival: 85,
    explainability: 7,
    readiness: true,
    price: 800,
    image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5eb4?auto=format&fit=crop&q=80&w=400&h=250",
    techStack: ["Python", "TensorFlow", "Flask", "Bootstrap"],
    whatYouGet: ["Jupyter Notebooks", "Trained Model (.h5)", "Flask Backend", "Plagiarism-free Report"],
    qna: [
      { q: "What is your model's accuracy?", a: "99.8%, sir. (Please don't ask about overfitting)." },
      { q: "Explain Backpropagation.", a: "It's the process of... basically the math part, sir. The libraries handle it." }
    ],
    reviews: [
      { user: "Arjun_CSE", tag: "Failed ❌", comment: "External examiner asked to retrain the model live. I panicked." },
      { user: "Neha_Dev", tag: "Passed ✅", comment: "Easiest A of my life." }
    ]
  },
  {
    id: "p3",
    title: "Blockchain E-Voting System",
    domain: "Web",
    difficulty: "Extreme",
    vivaSurvival: 15,
    explainability: 1,
    readiness: false,
    price: 1200,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?auto=format&fit=crop&q=80&w=400&h=250",
    techStack: ["Solidity", "Ethereum", "React", "Web3.js"],
    whatYouGet: ["Smart Contracts", "Frontend Code", "Instructions to run Ganache"],
    qna: [
      { q: "How are you handling gas fees?", a: "We are using a private testnet, sir. (I don't know what gas is)." },
      { q: "What is the consensus algorithm?", a: "Proof of... Work? No, Stake! Yes, Proof of Stake." }
    ],
    reviews: [
      { user: "Rahul_Block", tag: "Failed ❌", comment: "Got grilled for 45 minutes on cryptography. Do not buy." }
    ]
  },
  {
    id: "p4",
    title: "Autonomous Path Tracking Robot",
    domain: "Embedded",
    difficulty: "Hard",
    vivaSurvival: 60,
    explainability: 5,
    readiness: true,
    price: 650,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400&h=250",
    techStack: ["Raspberry Pi", "OpenCV", "Python", "L298N"],
    whatYouGet: ["Python Scripts", "Chassis 3D Print Files", "Wiring Diagram", "Action Video (to prove it works)"],
    qna: [
      { q: "Why did it hit the wall during the demo?", a: "Lighting conditions in this room are suboptimal for the camera, sir." }
    ],
    reviews: [
      { user: "Karan_Mech", tag: "Passed ✅", comment: "Just showed them the pre-recorded video. They believed it." }
    ]
  },
  {
    id: "p5",
    title: "E-Commerce with Fake Payment Gateway",
    domain: "Web",
    difficulty: "Easy",
    vivaSurvival: 95,
    explainability: 9,
    readiness: true,
    price: 300,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400&h=250",
    techStack: ["MERN Stack", "Redux", "Stripe API (Test)"],
    whatYouGet: ["Full Source Code", "Database Seed File", "ReadMe.md", "Project Report (Word format)"],
    qna: [
      { q: "Is this secure against SQL injection?", a: "Sir, we use MongoDB. (Checkmate)." },
      { q: "Did you write all this CSS?", a: "Yes sir, every single line. (Bless you, Tailwind/Bootstrap)." }
    ],
    reviews: [
      { user: "Simran_IT", tag: "Passed ✅", comment: "Classic. Never fails." }
    ]
  },
  {
    id: "p6",
    title: "Smart Helmet for Accident Detection",
    domain: "IoT",
    difficulty: "Medium",
    vivaSurvival: 75,
    explainability: 6,
    readiness: true,
    price: 450,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400&h=250",
    techStack: ["Arduino Nano", "MPU6050", "GSM Module", "GPS"],
    whatYouGet: ["C++ Code", "Hardware List", "PowerPoint Presentation"],
    qna: [
      { q: "Why isn't the SMS coming?", a: "Network issue in the lab, sir. It worked at home." }
    ],
    reviews: [
      { user: "Vikram_ECE", tag: "Passed ✅", comment: "They asked me to drop the helmet to test it. The breadboard broke but I passed." }
    ]
  }
];
