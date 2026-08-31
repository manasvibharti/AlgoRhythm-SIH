# AlgoRhythms — Smart Industrial Approvals & Compliance Platform

> **Smart India Hackathon (SIH) Prototype**  
> **Problem Statement ID:** SIH26130 — *Efficiency in streamlining industrial approvals, compliance processes, and access to government support services*

---

## 🌟 Overview

**AlgoRhythms** is an intelligent automation platform designed to simplify regulatory compliance and government incentive discovery for Indian industries. It bridges the gap between industrial enterprises and regulatory authorities by converting complex statutory mandates into actionable, automated workflows.

```text
Profile Creation ➔ Requirements Mapping ➔ Approvals Tracking ➔ Compliance Monitoring ➔ Scheme Discovery
```

---

## 🚀 Key Features

* **Intelligent Profile & Rule Engine**: Automatically calculates required department approvals based on enterprise sector (Manufacturing, Food Processing, Chemicals, Textile, Electronics), operating state, scale, and lifecycle stage.
* **Centralized Dashboard**: Real-time KPI cards, animated statutory compliance health gauge, upcoming deadlines, and automation risk alerts.
* **Approvals Tracker**: Searchable and filterable table tracking clearances across DISH, SPCB, Fire & Emergency Services, Boilers, and Labour departments.
* **Compliance Center**: Comprehensive compliance checklists mapped to statutory acts (*Factories Act 1948*, *Air & Water Acts*, *EPFO/ESIC*, *POSH Act*, *CGWA Groundwater rules*).
* **Support & Schemes Discovery**: AI-driven recommendation of central & state incentives (*PLI Schemes, MSME CLCSS, ZED Certification, Apprenticeship Grants, Renewable Energy Subsidies*).
* **Integrated Notification Center**: Real-time alerts for impending statutory deadlines, inspections, and overdue filings.

---

## 🛠️ Technology Stack

* **Frontend**: HTML5, CSS3 (Custom Design System with CSS Variables), Vanilla JavaScript (ES6+).
* **Architecture**: Asynchronous `ApiService` abstraction bridge prepared for immediate REST API integration with a Node.js/Express backend.
* **State Management**: Client-side `AlgoDataStore` with local persistence.

---

## 📦 Project Structure

```text
frontend/
├── index.html          # Landing Page (Hero, Value Prop, Features, Pipeline)
├── profile.html        # Industrial Profile & Requirement Generator
├── dashboard.html      # Centralized Industrial Dashboard
├── approvals.html      # Approvals Tracker & Department NOC Clearances
├── compliance.html     # Statutory Compliance Center & Deadlines Roadmap
├── schemes.html        # Support Schemes & Subsidies Discovery
├── style.css           # Custom Design System & Responsive Layouts
├── script.js           # Core JS Engine & Async API Service Bridge
└── assets/
    └── logo.svg        # Vector Brand Asset
```

---

## 💻 How to Run Locally

1. Clone or download this repository:
   ```bash
   git clone https://github.com/<your-username>/AlgoRhythms.git
   cd AlgoRhythms
   ```

2. Open [`frontend/index.html`](frontend/index.html) in any browser, or run a local static server:
   ```bash
   cd frontend
   python -m http.server 8000
   ```
3. Navigate to `http://localhost:8000` in your web browser.

---

## 📄 License
Developed for Smart India Hackathon &copy; 2026 AlgoRhythms Team.
