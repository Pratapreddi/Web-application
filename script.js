// Custom Cyber Cursor Tracking
const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');

if (cursorDot && cursorOutline && window.innerWidth > 768) {
    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    });

    function animateCursor() {
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;

        cursorOutline.style.left = `${outlineX}px`;
        cursorOutline.style.top = `${outlineY}px`;

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover Expansion Effects
    const interactiveElements = document.querySelectorAll('a, button, .glass-card, .badge, .term-tab, .pipe-node');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
}

// Interactive DevOps Terminal Data & Logic
const terminalData = {
    whoami: `> whoami --verbose
[NAME]: Pratapareddi Jagannath Kurlageri
[ROLE]: DevOps & Cloud Engineer
[GRADUATION]: B.E. Computer Science (2024)
[LOCATION]: Hubli, Karnataka, India
[STATUS]: Ready to automate infrastructure & CI/CD workflows!`,

    skills: `> cat skills.yml
containers:
  - Docker & Docker Compose
  - Kubernetes (Minikube, Pod scaling, Self-healing)
cloud_infrastructure:
  - AWS (EC2, S3, IAM, Security Groups)
  - Terraform (Declarative IaC, State management)
cicd_automation:
  - GitHub Actions, Nginx, DockerHub
monitoring:
  - Prometheus, Grafana, Node Exporter`,

    terraform: `> terraform plan -out=main.tfplan
Terraform used the selected providers to generate the following execution plan:

+ aws_instance.web_server
    id:                    (known after apply)
    ami:                   "ami-0c55b159cbfafe1f0" (Amazon Linux 2023)
    instance_type:         "t2.micro"
    user_data:             "#!/bin/bash sudo yum install docker -y..."
+ aws_security_group.allow_traffic
    ports:                 [22, 80, 443, 8080]

Plan: 2 to add, 0 to change, 0 to destroy.`,

    kubectl: `> kubectl get pods -n production -o wide
NAME                        READY   STATUS    RESTARTS   AGE     IP
web-app-7b8f9d6c45-2x9zp    1/1     Running   0          4m12s   10.244.0.12
web-app-7b8f9d6c45-9m1kl    1/1     Running   0          4m12s   10.244.0.13
web-app-7b8f9d6c45-k8s76    1/1     Running   0          1m05s   10.244.0.14
web-app-7b8f9d6c45-p4q21    1/1     Running   0          1m05s   10.244.0.15

> kubectl get deployment web-app
NAME      READY   UP-TO-DATE   AVAILABLE   AGE
web-app   4/4     4            4           15m`
};

const terminalOutput = document.getElementById('terminal-output');
const termTabs = document.querySelectorAll('.term-tab');
let isTyping = false;

function typeWriter(text, element, speed = 12) {
    return new Promise((resolve) => {
        element.textContent = '';
        let i = 0;
        isTyping = true;

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                isTyping = false;
                resolve();
            }
        }
        type();
    });
}

if (terminalOutput) {
    // Initial Typing
    typeWriter(terminalData.whoami, terminalOutput);

    // Tab Switching
    termTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            if (isTyping) return;
            
            termTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const cmd = tab.getAttribute('data-cmd');
            if (terminalData[cmd]) {
                typeWriter(terminalData[cmd], terminalOutput);
            }
        });
    });
}

// Navigation Bar Scroll & Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navbar = document.getElementById('navbar');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
        });
    });
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(3, 7, 18, 0.95)';
        navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    } else {
        navbar.style.background = 'rgba(3, 7, 18, 0.75)';
        navbar.style.boxShadow = 'none';
    }
});

// Scroll Intersection Observer Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in, .slide-up, .slide-left').forEach(el => {
    observer.observe(el);
});

// Particles.js Background Configuration
if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 55,
                "density": {
                    "enable": true,
                    "value_area": 900
                }
            },
            "color": {
                "value": "#38bdf8"
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.25,
                "random": true
            },
            "size": {
                "value": 2.5,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 145,
                "color": "#38bdf8",
                "opacity": 0.18,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1.2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 160,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "push": {
                    "particles_nb": 3
                }
            }
        },
        "retina_detect": true
    });
}
