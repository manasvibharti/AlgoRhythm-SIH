/**
 * ============================================================================
 * AlgoRhythms - Smart Industrial Compliance & Approvals Platform
 * SIH26130 Core JavaScript & API Abstraction Layer
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. Mock Data Initial Seeds
// ----------------------------------------------------------------------------
const DEFAULT_PROFILE = {
  businessName: "Apex BioTech Solutions Pvt Ltd",
  industryType: "Manufacturing",
  businessStage: "Existing Business",
  location: "Peenya Industrial Estate, Bengaluru",
  state: "Karnataka",
  investmentAmount: "₹12.50 Crores",
  employeesCount: "140",
  businessCategory: "Medium Enterprise"
};

const SEED_APPROVALS = [
  {
    id: "app-1",
    title: "Factory Registration & License",
    category: "Business",
    department: "Directorate of Industrial Safety & Health (DISH)",
    status: "Completed",
    dueDate: "2026-08-12",
    submissionDate: "2026-07-10",
    fee: "₹25,000",
    docsRequired: ["Approved Factory Plan", "Machinery Layout", "Form 2 Application", "NOC from Local Authority"],
    remarks: "License granted valid for 5 years."
  },
  {
    id: "app-2",
    title: "Consent to Operate (CTO - Orange Category)",
    category: "Environment",
    department: "State Pollution Control Board (SPCB)",
    status: "Completed",
    dueDate: "2026-08-15",
    submissionDate: "2026-07-20",
    fee: "₹45,000",
    docsRequired: ["Effluent Treatment Plan (ETP)", "Air Pollution Control System layout", "Form 1 under Water/Air Acts"],
    remarks: "Consent renewed successfully."
  },
  {
    id: "app-3",
    title: "Fire Safety NOC",
    category: "Safety",
    department: "State Fire and Emergency Services",
    status: "Pending",
    dueDate: "2026-09-03",
    submissionDate: "2026-08-20",
    fee: "₹15,000",
    docsRequired: ["Building Blueprint with Fire Exits", "Hydrant Flow Test Report", "Fire Extinguisher Installation Certificate"],
    remarks: "Physical site inspection scheduled for this week."
  },
  {
    id: "app-4",
    title: "Contract Labour Registration (Form 1)",
    category: "Labour",
    department: "Department of Labour",
    status: "Pending",
    dueDate: "2026-09-07",
    submissionDate: "2026-08-25",
    fee: "₹5,000",
    docsRequired: ["Principal Employer Agreement", "Contractor Details", "EPFO/ESIC Registration Proof"],
    remarks: "Under scrutiny by labour enforcement officer."
  },
  {
    id: "app-5",
    title: "Annual Factory Renewal Certificate",
    category: "Renewal",
    department: "Inspectorate of Factories",
    status: "Overdue",
    dueDate: "2026-08-28",
    submissionDate: "2026-08-27",
    fee: "₹12,000",
    docsRequired: ["Annual Return (Form 21)", "Safety Audit Report", "Accident Register Abstract"],
    remarks: "Action Required: Overdue by 3 days. Penalty of 10% may apply."
  },
  {
    id: "app-6",
    title: "Hazardous Waste Management Authorization",
    category: "Environment",
    department: "State Pollution Control Board (SPCB)",
    status: "Pending",
    dueDate: "2026-09-18",
    submissionDate: "2026-08-22",
    fee: "₹20,000",
    docsRequired: ["TSDF Membership Agreement", "Storage Container Specs", "Emergency Response Plan"],
    remarks: "Awaiting final clearance from SPCB zonal committee."
  },
  {
    id: "app-7",
    title: "Municipal Trade License",
    category: "Business",
    department: "Bruhat Bengaluru Mahanagara Palike (BBMP)",
    status: "Completed",
    dueDate: "2026-07-05",
    submissionDate: "2026-06-15",
    fee: "₹8,000",
    docsRequired: ["Property Tax Receipt", "Khata Certificate", "Lease Deed"],
    remarks: "Valid until 31st March 2027."
  },
  {
    id: "app-8",
    title: "Industrial Boiler Inspection Certificate",
    category: "Safety",
    department: "Directorate of Boilers",
    status: "Completed",
    dueDate: "2026-07-20",
    submissionDate: "2026-06-30",
    fee: "₹18,000",
    docsRequired: ["Hydraulic Pressure Test Report", "Welder Qualifications", "Steam Piping Layout"],
    remarks: "Certified safe for operation under Indian Boiler Regulations."
  },
  {
    id: "app-9",
    title: "High Tension (HT) Electricity Load Clearance",
    category: "Infrastructure",
    department: "State Electricity Supply Company (BESCOM)",
    status: "Completed",
    dueDate: "2026-06-10",
    submissionDate: "2026-05-12",
    fee: "₹50,000",
    docsRequired: ["Transformer Test Report", "Chief Electrical Inspectorate Clearance", "Sanctioned Load Agreement"],
    remarks: "250 kVA sanctioned & energized."
  },
  {
    id: "app-10",
    title: "Groundwater Extraction NOC",
    category: "Environment",
    department: "Central Ground Water Authority (CGWA)",
    status: "Overdue",
    dueDate: "2026-08-25",
    submissionDate: "2026-08-15",
    fee: "₹10,000",
    docsRequired: ["Rainwater Harvesting Audit", "Digital Flow Meter Calibration Record", "Hydrogeological Report"],
    remarks: "Digital flow meter telemetry compliance pending submission."
  },
  {
    id: "app-11",
    title: "Weights & Measures Verification Certificate",
    category: "Business",
    department: "Department of Legal Metrology",
    status: "Completed",
    dueDate: "2026-08-02",
    submissionDate: "2026-07-15",
    fee: "₹3,500",
    docsRequired: ["Weighbridge Calibration Certificate", "Model Approval Document"],
    remarks: "Stamping done on all 4 platform scales."
  },
  {
    id: "app-12",
    title: "Building Occupancy & Plan Sanction",
    category: "Safety",
    department: "Industrial Area Development Board (KIADB)",
    status: "Completed",
    dueDate: "2026-01-15",
    submissionDate: "2025-11-20",
    fee: "₹75,000",
    docsRequired: ["Architectural Structural Stability Certificate", "As-Built Drawings"],
    remarks: "Permanent occupancy certificate issued."
  }
];

const SEED_COMPLIANCE = [
  // Business Compliance
  {
    id: "comp-1",
    category: "Business Compliance",
    title: "Annual Return Filing (Form 21 / Factories Act)",
    act: "Factories Act, 1948",
    status: "Overdue",
    dueDate: "2026-08-28",
    daysLeft: -3,
    description: "Mandatory annual submission of worker hours, leave with wages, and safety committee minutes to DISH.",
    risk: "High",
    actionText: "File Return"
  },
  {
    id: "comp-2",
    category: "Business Compliance",
    title: "GST Annual Filing & Reconciliation (GSTR-9)",
    act: "CGST Act, 2017",
    status: "Pending",
    dueDate: "2026-09-30",
    daysLeft: 30,
    description: "Annual consolidated tax return detailing outward/inward supplies and ITC credits.",
    risk: "Medium",
    actionText: "Upload Docs"
  },
  {
    id: "comp-3",
    category: "Business Compliance",
    title: "MSME Udyam Registration Annual Validation",
    act: "MSMED Act, 2006",
    status: "Completed",
    dueDate: "2026-06-30",
    daysLeft: 0,
    description: "Turnover and investment auto-reconciliation with ITR and GSTN data.",
    risk: "Low",
    actionText: "View Certificate"
  },

  // Environmental Compliance
  {
    id: "comp-4",
    category: "Environmental Compliance",
    title: "SPCB Environmental Statement (Form V)",
    act: "Environment (Protection) Act, 1986",
    status: "Pending",
    dueDate: "2026-09-30",
    daysLeft: 30,
    description: "Annual audit report detailing raw material usage, water consumption, and pollution loads.",
    risk: "Medium",
    actionText: "Submit Audit"
  },
  {
    id: "comp-5",
    category: "Environmental Compliance",
    title: "Monthly Effluent Analysis Report",
    act: "Water (Prevention & Control of Pollution) Act, 1974",
    status: "Completed",
    dueDate: "2026-08-10",
    daysLeft: 0,
    description: "NABL lab testing of treated wastewater parameters (BOD, COD, TSS).",
    risk: "Low",
    actionText: "View Report"
  },
  {
    id: "comp-6",
    category: "Environmental Compliance",
    title: "Hazardous Waste Manifest (Form 10)",
    act: "Hazardous & Other Wastes Rules, 2016",
    status: "Completed",
    dueDate: "2026-08-20",
    daysLeft: 0,
    description: "Consignment tracking copy for safe disposal at authorized TSDF site.",
    risk: "Low",
    actionText: "View Manifest"
  },
  {
    id: "comp-7",
    category: "Environmental Compliance",
    title: "Groundwater Digital Meter Log Submission",
    act: "Central Ground Water Authority Guidelines",
    status: "Overdue",
    dueDate: "2026-08-25",
    daysLeft: -6,
    description: "Daily telemetry log upload of industrial water drawal from on-premise borewells.",
    risk: "High",
    actionText: "Upload Telemetry"
  },

  // Safety Compliance
  {
    id: "comp-8",
    category: "Safety Compliance",
    title: "Quarterly Fire Extinguisher & Hydrant Audit",
    act: "National Building Code & Fire Safety Rules",
    status: "Pending",
    dueDate: "2026-09-03",
    daysLeft: 3,
    description: "Functional inspection of 32 ABC dry-powder cylinders and perimeter hose reels.",
    risk: "High",
    actionText: "Schedule Inspection"
  },
  {
    id: "comp-9",
    category: "Safety Compliance",
    title: "Annual Structural Stability Certification",
    act: "State Factory Rules",
    status: "Completed",
    dueDate: "2026-05-15",
    daysLeft: 0,
    description: "Competent person structural test certificate for manufacturing shed and overhead cranes.",
    risk: "Low",
    actionText: "View Certificate"
  },
  {
    id: "comp-10",
    category: "Safety Compliance",
    title: "Personal Protective Equipment (PPE) Compliance Register",
    act: "Factories Act, 1948 Section 41",
    status: "Completed",
    dueDate: "2026-08-01",
    daysLeft: 0,
    description: "Bi-monthly issue and safety drill verification logs for shopfloor staff.",
    risk: "Low",
    actionText: "View Register"
  },

  // Labour Compliance
  {
    id: "comp-11",
    category: "Labour Compliance",
    title: "Monthly EPF & MP Remittance (ECR Return)",
    act: "Employees' Provident Funds Act, 1952",
    status: "Completed",
    dueDate: "2026-08-15",
    daysLeft: 0,
    description: "Electronic Challan cum Return filing and payment for 140 covered employees.",
    risk: "Low",
    actionText: "Challan Receipt"
  },
  {
    id: "comp-12",
    category: "Labour Compliance",
    title: "Monthly ESIC Contribution Return",
    act: "Employees' State Insurance Act, 1948",
    status: "Completed",
    dueDate: "2026-08-15",
    daysLeft: 0,
    description: "Monthly medical and sickness benefit contributions for eligible factory workers.",
    risk: "Low",
    actionText: "View Receipt"
  },
  {
    id: "comp-13",
    category: "Labour Compliance",
    title: "Annual POSH Internal Committee Report Filing",
    act: "Sexual Harassment of Women at Workplace Act, 2013",
    status: "Pending",
    dueDate: "2026-10-15",
    daysLeft: 45,
    description: "Annual summary of gender sensitization workshops and complaint redressals.",
    risk: "Low",
    actionText: "Prepare Draft"
  },
  {
    id: "comp-14",
    category: "Labour Compliance",
    title: "Contract Labour Register & Half-Yearly Return",
    act: "Contract Labour (Regulation & Abolition) Act, 1970",
    status: "Pending",
    dueDate: "2026-09-07",
    daysLeft: 7,
    description: "Submission of Form XXIV half-yearly return to licensing officer.",
    risk: "Medium",
    actionText: "Upload Return"
  }
];

const SEED_SCHEMES = [
  {
    id: "scheme-1",
    name: "Production Linked Incentive (PLI) Scheme",
    category: "Manufacturing",
    nodalMinistry: "Ministry of Heavy Industries / DPIIT",
    eligibilityMatch: "High Match (94%)",
    benefit: "4% to 6% incentive on incremental turnover over 5 years",
    description: "Designed to boost domestic manufacturing and attract investments in priority sectors. Suited for expansion phase enterprises.",
    keyCriteria: ["Manufacturing unit", "Minimum incremental investment of ₹5 Cr", "Turnover growth threshold"],
    applicationMode: "Online via National Single Window System (NSWS)"
  },
  {
    id: "scheme-2",
    name: "MSME Credit Linked Capital Subsidy Scheme (CLCSS)",
    category: "MSME",
    nodalMinistry: "Ministry of MSME",
    eligibilityMatch: "High Match (91%)",
    benefit: "15% upfront capital subsidy (up to ₹15 Lakhs) for tech modernization",
    description: "Aims to facilitate technology upgradation in micro and small/medium enterprises by providing institutional finance.",
    keyCriteria: ["Registered Udyam MSME", "Approved machinery tech list", "Institutional bank loan"],
    applicationMode: "Through nodal banks (SIDBI / NABARD)"
  },
  {
    id: "scheme-3",
    name: "Zero Defect Zero Effect (ZED) Certification Incentive",
    category: "Technology",
    nodalMinistry: "Quality Council of India (QCI)",
    eligibilityMatch: "Medium Match (85%)",
    benefit: "Up to 80% subsidy on certification cost + ₹5 Lakhs for technology handholding",
    description: "Enables MSMEs to adopt clean technologies and minimize environmental footprint while maximizing output quality.",
    keyCriteria: ["Valid Udyam Registration", "Completion of ZED self-assessment", "Desktop verification"],
    applicationMode: "Direct online via ZED Portal"
  },
  {
    id: "scheme-4",
    name: "National Apprenticeship Promotion Scheme (NAPS-2)",
    category: "Employment",
    nodalMinistry: "Ministry of Skill Development and Entrepreneurship",
    eligibilityMatch: "High Match (96%)",
    benefit: "₹1,500/month stipend reimbursement per apprentice + exemption from select cess",
    description: "Provides financial incentives to manufacturing establishments to engage apprentices and build skilled industrial workforce.",
    keyCriteria: ["Minimum 30 employees", "EPFO/ESIC compliant establishment", "Valid trade apprentice curriculum"],
    applicationMode: "Apprenticeship India Portal"
  },
  {
    id: "scheme-5",
    name: "Technology Upgradation Fund Scheme (ATUFS)",
    category: "Expansion",
    nodalMinistry: "Ministry of Textiles / Commerce",
    eligibilityMatch: "Medium Match (80%)",
    benefit: "10% to 15% Capital Investment Subsidy (CIS) on benchmarked machinery",
    description: "Facilitates induction of state-of-the-art technology to enhance productivity and export competitiveness.",
    keyCriteria: ["New plant machinery procurement", "Energy-efficient machinery compliance", "Commercial production in 18 months"],
    applicationMode: "i-TUFS Portal"
  },
  {
    id: "scheme-6",
    name: "Green Energy Open Access & Rooftop Solar Subsidy",
    category: "Manufacturing",
    nodalMinistry: "Ministry of New and Renewable Energy (MNRE)",
    eligibilityMatch: "High Match (88%)",
    benefit: "30% capital subsidy on rooftop solar + 50% waiver on transmission charges",
    description: "Empowers commercial and industrial (C&I) consumers to adopt captive renewable energy and reduce operating power tariffs.",
    keyCriteria: ["Connected load > 100 kW", "Roof stability certification", "Net metering agreement with DISCOM"],
    applicationMode: "State Renewable Energy Agency Portal"
  }
];

const SEED_NOTIFICATIONS = [
  {
    id: "notif-1",
    title: "Fire NOC inspection approaching",
    message: "State Fire & Emergency Services has scheduled site audit for 3rd September 2026.",
    type: "warning",
    timeAgo: "2 hours ago",
    read: false
  },
  {
    id: "notif-2",
    title: "Annual Compliance Filing is Overdue",
    message: "Factories Act Form 21 return deadline expired on 28 Aug. Please submit immediately to avoid penalty.",
    type: "danger",
    timeAgo: "1 day ago",
    read: false
  },
  {
    id: "notif-3",
    title: "New Support Scheme Match Identified",
    message: "Your profile qualifies for the 15% MSME CLCSS Tech Upgradation Capital Subsidy.",
    type: "info",
    timeAgo: "2 days ago",
    read: false
  },
  {
    id: "notif-4",
    title: "Pollution Consent (CTO) Verified",
    message: "SPCB has approved your renewed Consent to Operate for Orange Category manufacturing.",
    type: "success",
    timeAgo: "3 days ago",
    read: true
  },
  {
    id: "notif-5",
    title: "Groundwater extraction log overdue",
    message: "Digital meter telemetry upload for CGWA is overdue by 6 days.",
    type: "danger",
    timeAgo: "4 days ago",
    read: true
  }
];

const SEED_ACTIVITIES = [
  {
    title: "Consent to Operate (CTO) renewed by SPCB",
    category: "Environment",
    timestamp: "31 Aug 2026, 04:30 PM",
    icon: "✓"
  },
  {
    title: "Fire safety hydrant flow test report uploaded",
    category: "Safety",
    timestamp: "30 Aug 2026, 11:15 AM",
    icon: "📄"
  },
  {
    title: "EPFO monthly ECR remittance successfully submitted",
    category: "Labour",
    timestamp: "28 Aug 2026, 02:40 PM",
    icon: "✓"
  },
  {
    title: "Automated alert generated: Annual Factory Renewal pending",
    category: "Automation",
    timestamp: "27 Aug 2026, 09:00 AM",
    icon: "⚠️"
  },
  {
    title: "Profile updated: Medium Enterprise Classification confirmed",
    category: "Profile",
    timestamp: "25 Aug 2026, 06:10 PM",
    icon: "⚙️"
  }
];

// ----------------------------------------------------------------------------
// 2. Data Store & LocalStorage Manager (State Layer)
// ----------------------------------------------------------------------------
const STORAGE_KEYS = {
  PROFILE: "algorhythms_profile",
  APPROVALS: "algorhythms_approvals",
  COMPLIANCE: "algorhythms_compliance",
  SCHEMES: "algorhythms_schemes",
  NOTIFICATIONS: "algorhythms_notifications",
  ACTIVITIES: "algorhythms_activities"
};

class AlgoDataStore {
  static init() {
    if (!localStorage.getItem(STORAGE_KEYS.PROFILE)) {
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(DEFAULT_PROFILE));
    }
    if (!localStorage.getItem(STORAGE_KEYS.APPROVALS)) {
      localStorage.setItem(STORAGE_KEYS.APPROVALS, JSON.stringify(SEED_APPROVALS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.COMPLIANCE)) {
      localStorage.setItem(STORAGE_KEYS.COMPLIANCE, JSON.stringify(SEED_COMPLIANCE));
    }
    if (!localStorage.getItem(STORAGE_KEYS.SCHEMES)) {
      localStorage.setItem(STORAGE_KEYS.SCHEMES, JSON.stringify(SEED_SCHEMES));
    }
    if (!localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS)) {
      localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(SEED_NOTIFICATIONS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.ACTIVITIES)) {
      localStorage.setItem(STORAGE_KEYS.ACTIVITIES, JSON.stringify(SEED_ACTIVITIES));
    }
  }

  static getProfile() {
    this.init();
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.PROFILE)) || DEFAULT_PROFILE;
    } catch (e) {
      return DEFAULT_PROFILE;
    }
  }

  static saveProfile(profile) {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
    this.generateRequirementsForProfile(profile);
  }

  static getApprovals() {
    this.init();
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.APPROVALS)) || SEED_APPROVALS;
    } catch (e) {
      return SEED_APPROVALS;
    }
  }

  static saveApprovals(approvals) {
    localStorage.setItem(STORAGE_KEYS.APPROVALS, JSON.stringify(approvals));
  }

  static getCompliance() {
    this.init();
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.COMPLIANCE)) || SEED_COMPLIANCE;
    } catch (e) {
      return SEED_COMPLIANCE;
    }
  }

  static saveCompliance(compliance) {
    localStorage.setItem(STORAGE_KEYS.COMPLIANCE, JSON.stringify(compliance));
  }

  static getSchemes() {
    this.init();
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.SCHEMES)) || SEED_SCHEMES;
    } catch (e) {
      return SEED_SCHEMES;
    }
  }

  static getNotifications() {
    this.init();
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS)) || SEED_NOTIFICATIONS;
    } catch (e) {
      return SEED_NOTIFICATIONS;
    }
  }

  static saveNotifications(notifications) {
    localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(notifications));
  }

  static getActivities() {
    this.init();
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.ACTIVITIES)) || SEED_ACTIVITIES;
    } catch (e) {
      return SEED_ACTIVITIES;
    }
  }

  static logActivity(title, category, icon = "✓") {
    const activities = this.getActivities();
    const newAct = {
      title,
      category,
      timestamp: "Just now",
      icon
    };
    activities.unshift(newAct);
    if (activities.length > 15) activities.pop();
    localStorage.setItem(STORAGE_KEYS.ACTIVITIES, JSON.stringify(activities));
  }

  // Dynamic Rule Engine: Adjust requirements based on Industry Type & Stage
  static generateRequirementsForProfile(profile) {
    const baseApprovals = JSON.parse(JSON.stringify(SEED_APPROVALS));
    const baseCompliance = JSON.parse(JSON.stringify(SEED_COMPLIANCE));

    // Customization based on industry type
    if (profile.industryType === "Food Processing") {
      baseApprovals.unshift({
        id: "app-custom-1",
        title: "FSSAI Central Manufacturing License",
        category: "Food Safety",
        department: "Food Safety and Standards Authority of India",
        status: "Pending",
        dueDate: "2026-09-12",
        submissionDate: "2026-08-28",
        fee: "₹7,500",
        docsRequired: ["FSMS Plan", "Water Potability Report", "Recall Plan", "Food Analyst Report"],
        remarks: "Food testing facility inspection pending."
      });
      baseCompliance.unshift({
        id: "comp-custom-1",
        category: "Safety Compliance",
        title: "Food Safety Management System (FSMS) Audit",
        act: "Food Safety and Standards Act, 2006",
        status: "Pending",
        dueDate: "2026-09-15",
        daysLeft: 15,
        description: "Quarterly hygiene rating and pesticide residue verification audit.",
        risk: "High",
        actionText: "Upload Audit"
      });
    } else if (profile.industryType === "Chemicals") {
      baseApprovals.unshift({
        id: "app-custom-2",
        title: "Petroleum & Explosives Safety Org (PESO) License",
        category: "Hazmat",
        department: "PESO / Ministry of Commerce",
        status: "Pending",
        dueDate: "2026-09-10",
        submissionDate: "2026-08-25",
        fee: "₹30,000",
        docsRequired: ["Hazchem Storage Drawing", "Flameproof Equipment Certificate", "Disaster Management Plan"],
        remarks: "Site scrutiny in progress by PESO Nagpur."
      });
    } else if (profile.industryType === "Textile") {
      baseApprovals.unshift({
        id: "app-custom-3",
        title: "Zero Liquid Discharge (ZLD) Compliance Verification",
        category: "Environment",
        department: "State Pollution Control Board",
        status: "Pending",
        dueDate: "2026-09-14",
        submissionDate: "2026-08-26",
        fee: "₹22,000",
        docsRequired: ["RO & Multi-Effect Evaporator Telemetry", "Reject Salt Disposal Proof"],
        remarks: "Online effluent monitoring system calibration."
      });
    }

    if (profile.businessStage === "New Setup") {
      // In new setup, more items are pending
      baseApprovals.forEach((app, idx) => {
        if (idx > 4 && app.status === "Completed") {
          app.status = "Pending";
        }
      });
    }

    this.saveApprovals(baseApprovals);
    this.saveCompliance(baseCompliance);
    this.logActivity(`Generated smart requirements for ${profile.businessName} (${profile.industryType})`, "Profile", "⚡");
  }

  // Calculate live statistics
  static getMetrics() {
    const approvals = this.getApprovals();
    const compliance = this.getCompliance();

    const totalRequirements = approvals.length;
    const completedCount = approvals.filter(a => a.status === "Completed").length;
    const pendingCount = approvals.filter(a => a.status === "Pending").length;
    const overdueCount = approvals.filter(a => a.status === "Overdue").length;

    // Overall compliance rate calculated across all compliance items
    const compTotal = compliance.length;
    const compCompleted = compliance.filter(c => c.status === "Completed").length;
    const compPending = compliance.filter(c => c.status === "Pending").length;
    const compOverdue = compliance.filter(c => c.status === "Overdue").length;

    // Weighted compliance score
    const complianceRate = compTotal > 0 ? Math.round(((compCompleted + compPending * 0.45) / compTotal) * 100) : 78;

    return {
      total: totalRequirements,
      completed: completedCount,
      pending: pendingCount,
      overdue: overdueCount,
      complianceRate: complianceRate || 78,
      compTotal,
      compCompleted,
      compPending,
      compOverdue
    };
  }

  static resetToDefault() {
    localStorage.removeItem(STORAGE_KEYS.PROFILE);
    localStorage.removeItem(STORAGE_KEYS.APPROVALS);
    localStorage.removeItem(STORAGE_KEYS.COMPLIANCE);
    localStorage.removeItem(STORAGE_KEYS.SCHEMES);
    localStorage.removeItem(STORAGE_KEYS.NOTIFICATIONS);
    localStorage.removeItem(STORAGE_KEYS.ACTIVITIES);
    this.init();
  }
}

// ----------------------------------------------------------------------------
// 3. API Abstraction Layer (Bridge for Future Node/Express Backend)
// ----------------------------------------------------------------------------
/**
 * In this prototype, ApiService functions return Promises backed by AlgoDataStore.
 * To integrate with a real Node.js/Express backend later, simply replace the internal
 * AlgoDataStore calls with `return fetch('/api/...')` requests.
 */
const ApiService = {
  // GET /api/profile
  async getProfile() {
    return Promise.resolve(AlgoDataStore.getProfile());
  },

  // POST /api/profile
  async saveProfile(profileData) {
    AlgoDataStore.saveProfile(profileData);
    return Promise.resolve({ success: true, message: "Profile saved successfully.", profile: profileData });
  },

  // GET /api/approvals?status=...&category=...
  async getApprovals(filters = {}) {
    let approvals = AlgoDataStore.getApprovals();
    if (filters.status && filters.status !== "All") {
      approvals = approvals.filter(a => a.status.toLowerCase() === filters.status.toLowerCase());
    }
    if (filters.category && filters.category !== "All") {
      approvals = approvals.filter(a => a.category.toLowerCase() === filters.category.toLowerCase());
    }
    if (filters.search) {
      const q = filters.search.toLowerCase();
      approvals = approvals.filter(a => 
        a.title.toLowerCase().includes(q) || 
        a.department.toLowerCase().includes(q) || 
        a.category.toLowerCase().includes(q)
      );
    }
    return Promise.resolve(approvals);
  },

  // GET /api/approvals/:id
  async getApprovalById(id) {
    const approvals = AlgoDataStore.getApprovals();
    const item = approvals.find(a => a.id === id);
    return Promise.resolve(item || null);
  },

  // PATCH /api/approvals/:id
  async updateApprovalStatus(id, newStatus) {
    const approvals = AlgoDataStore.getApprovals();
    const target = approvals.find(a => a.id === id);
    if (target) {
      target.status = newStatus;
      AlgoDataStore.saveApprovals(approvals);
      AlgoDataStore.logActivity(`Status updated for "${target.title}" to ${newStatus}`, "Approvals", "🔄");
      return Promise.resolve({ success: true, item: target });
    }
    return Promise.reject(new Error("Approval item not found"));
  },

  // GET /api/compliance
  async getCompliance(category = "All") {
    let list = AlgoDataStore.getCompliance();
    if (category && category !== "All") {
      list = list.filter(c => c.category.toLowerCase() === category.toLowerCase());
    }
    return Promise.resolve(list);
  },

  // PATCH /api/compliance/:id
  async updateComplianceStatus(id, newStatus) {
    const list = AlgoDataStore.getCompliance();
    const target = list.find(c => c.id === id);
    if (target) {
      target.status = newStatus;
      AlgoDataStore.saveCompliance(list);
      AlgoDataStore.logActivity(`Compliance "${target.title}" marked as ${newStatus}`, "Compliance", "✓");
      return Promise.resolve({ success: true, item: target });
    }
    return Promise.reject(new Error("Compliance item not found"));
  },

  // GET /api/schemes
  async getSchemes(filters = {}) {
    let list = AlgoDataStore.getSchemes();
    if (filters.category && filters.category !== "All") {
      list = list.filter(s => s.category.toLowerCase() === filters.category.toLowerCase());
    }
    if (filters.search) {
      const q = filters.search.toLowerCase();
      list = list.filter(s => 
        s.name.toLowerCase().includes(q) || 
        s.description.toLowerCase().includes(q) || 
        s.nodalMinistry.toLowerCase().includes(q)
      );
    }
    return Promise.resolve(list);
  },

  // GET /api/dashboard
  async getDashboardData() {
    const profile = AlgoDataStore.getProfile();
    const metrics = AlgoDataStore.getMetrics();
    const approvals = AlgoDataStore.getApprovals();
    const compliance = AlgoDataStore.getCompliance();
    const notifications = AlgoDataStore.getNotifications();
    const activities = AlgoDataStore.getActivities();

    return Promise.resolve({
      profile,
      metrics,
      approvalsOverview: approvals.slice(0, 5),
      upcomingActions: compliance.filter(c => c.status !== "Completed").slice(0, 3),
      automationAlerts: notifications.filter(n => n.type === "warning" || n.type === "danger").slice(0, 3),
      recentActivities: activities.slice(0, 5)
    });
  },

  // GET /api/notifications
  async getNotifications() {
    return Promise.resolve(AlgoDataStore.getNotifications());
  },

  // POST /api/notifications/mark-read
  async markAllNotificationsRead() {
    const notifs = AlgoDataStore.getNotifications();
    notifs.forEach(n => n.read = true);
    AlgoDataStore.saveNotifications(notifs);
    return Promise.resolve({ success: true });
  }
};

// ----------------------------------------------------------------------------
// 4. Global UI Component Helpers & Modals
// ----------------------------------------------------------------------------
const AlgoUI = {
  // Toast Alert Dispatcher
  showToast(message, type = "info", duration = 3500) {
    let container = document.getElementById("algo-toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "algo-toast-container";
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    
    let icon = "ℹ️";
    if (type === "success") icon = "✓";
    if (type === "warning") icon = "⚠️";
    if (type === "danger") icon = "✕";

    toast.innerHTML = `<span>${icon}</span> <div>${message}</div>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(50px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },

  // Modal Dialog Controller
  openModal(title, bodyHtml, footerHtml = "") {
    let overlay = document.getElementById("algo-modal-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "algo-modal-overlay";
      overlay.className = "modal-overlay";
      overlay.innerHTML = `
        <div class="modal-content" role="dialog" aria-modal="true">
          <div class="modal-header">
            <h3 id="algo-modal-title"></h3>
            <button class="modal-close-btn" id="algo-modal-close" aria-label="Close modal">&times;</button>
          </div>
          <div class="modal-body" id="algo-modal-body"></div>
          <div class="modal-footer" id="algo-modal-footer"></div>
        </div>
      `;
      document.body.appendChild(overlay);

      // Close handlers
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) AlgoUI.closeModal();
      });
      document.getElementById("algo-modal-close").addEventListener("click", AlgoUI.closeModal);
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && overlay.classList.contains("open")) {
          AlgoUI.closeModal();
        }
      });
    }

    document.getElementById("algo-modal-title").textContent = title;
    document.getElementById("algo-modal-body").innerHTML = bodyHtml;
    
    const footerEl = document.getElementById("algo-modal-footer");
    if (footerHtml) {
      footerEl.innerHTML = footerHtml;
      footerEl.style.display = "flex";
    } else {
      footerEl.innerHTML = `<button class="btn btn-secondary btn-sm" onclick="AlgoUI.closeModal()">Close</button>`;
      footerEl.style.display = "flex";
    }

    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  },

  closeModal() {
    const overlay = document.getElementById("algo-modal-overlay");
    if (overlay) {
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }
  },

  // Renders standard status badge HTML
  renderStatusBadge(status) {
    const s = (status || "").toLowerCase();
    if (s === "completed") {
      return `<span class="badge badge-success"><span class="badge-dot"></span>Completed</span>`;
    } else if (s === "pending") {
      return `<span class="badge badge-warning"><span class="badge-dot"></span>Pending</span>`;
    } else if (s === "overdue") {
      return `<span class="badge badge-danger"><span class="badge-dot"></span>Overdue</span>`;
    }
    return `<span class="badge badge-info"><span class="badge-dot"></span>${status}</span>`;
  },

  // Setup Global Header & Navigation
  setupGlobalNavigation() {
    const profile = AlgoDataStore.getProfile();
    const notifs = AlgoDataStore.getNotifications();
    const unreadCount = notifs.filter(n => !n.read).length;

    // Update profile display names across page
    document.querySelectorAll(".dyn-industry-name").forEach(el => {
      el.textContent = profile.businessName || "My Industry";
    });

    const avatarInitial = (profile.businessName || "A").trim().charAt(0).toUpperCase();
    document.querySelectorAll(".dyn-avatar-char").forEach(el => {
      el.textContent = avatarInitial;
    });

    // Update notification bell count
    const badgeEl = document.getElementById("nav-notif-badge");
    if (badgeEl) {
      if (unreadCount > 0) {
        badgeEl.textContent = unreadCount;
        badgeEl.style.display = "flex";
      } else {
        badgeEl.style.display = "none";
      }
    }

    // Toggle Notifications Dropdown
    const notifBtn = document.getElementById("nav-notif-btn");
    const notifDropdown = document.getElementById("nav-notif-dropdown");
    if (notifBtn && notifDropdown) {
      notifBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        notifDropdown.classList.toggle("show");
      });

      document.addEventListener("click", (e) => {
        if (!notifDropdown.contains(e.target) && e.target !== notifBtn) {
          notifDropdown.classList.remove("show");
        }
      });

      // Render Notification items in dropdown
      const notifListEl = document.getElementById("notif-items-list");
      if (notifListEl) {
        if (notifs.length === 0) {
          notifListEl.innerHTML = `<li class="notif-item"><div class="notif-text">No notifications yet.</div></li>`;
        } else {
          notifListEl.innerHTML = notifs.map(n => `
            <li class="notif-item ${n.read ? '' : 'unread'}">
              <div class="notif-icon-box ${n.type}">
                ${n.type === 'danger' ? '⚠️' : n.type === 'warning' ? '⚡' : n.type === 'success' ? '✓' : 'ℹ️'}
              </div>
              <div class="notif-body">
                <div class="notif-text"><strong>${n.title}</strong> — ${n.message}</div>
                <div class="notif-time">${n.timeAgo}</div>
              </div>
            </li>
          `).join("");
        }
      }

      // Mark all as read button
      const markAllBtn = document.getElementById("notif-mark-all-btn");
      if (markAllBtn) {
        markAllBtn.addEventListener("click", async () => {
          await ApiService.markAllNotificationsRead();
          if (badgeEl) badgeEl.style.display = "none";
          document.querySelectorAll(".notif-item.unread").forEach(el => el.classList.remove("unread"));
          AlgoUI.showToast("All notifications marked as read.", "info");
        });
      }
    }

    // Mobile Navigation Toggle
    const mobileBtn = document.getElementById("mobile-menu-toggle");
    const navMenu = document.getElementById("main-nav-menu");
    if (mobileBtn && navMenu) {
      mobileBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");
      });
    }

    // Highlight current page in navigation
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-link").forEach(link => {
      const href = link.getAttribute("href");
      if (href === currentPage || (currentPage === "" && href === "index.html")) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
};

// ----------------------------------------------------------------------------
// 5. Page-Specific Initializers & Handlers
// ----------------------------------------------------------------------------

// PAGE 2: PROFILE PAGE
async function initProfilePage() {
  const profile = await ApiService.getProfile();
  const form = document.getElementById("industrial-profile-form");
  const quickFillBtn = document.getElementById("quick-fill-demo-btn");
  const resetBtn = document.getElementById("reset-profile-btn");

  if (!form) return;

  // Pre-fill form fields
  if (form.elements["businessName"]) form.elements["businessName"].value = profile.businessName || "";
  if (form.elements["industryType"]) form.elements["industryType"].value = profile.industryType || "Manufacturing";
  if (form.elements["businessStage"]) form.elements["businessStage"].value = profile.businessStage || "Existing Business";
  if (form.elements["location"]) form.elements["location"].value = profile.location || "";
  if (form.elements["state"]) form.elements["state"].value = profile.state || "Karnataka";
  if (form.elements["investmentAmount"]) form.elements["investmentAmount"].value = profile.investmentAmount || "";
  if (form.elements["employeesCount"]) form.elements["employeesCount"].value = profile.employeesCount || "";
  if (form.elements["businessCategory"]) form.elements["businessCategory"].value = profile.businessCategory || "Medium Enterprise";

  // Form Submission
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const updatedProfile = {
      businessName: form.elements["businessName"].value.trim(),
      industryType: form.elements["industryType"].value,
      businessStage: form.elements["businessStage"].value,
      location: form.elements["location"].value.trim(),
      state: form.elements["state"].value,
      investmentAmount: form.elements["investmentAmount"].value.trim(),
      employeesCount: form.elements["employeesCount"].value.trim(),
      businessCategory: form.elements["businessCategory"].value
    };

    if (!updatedProfile.businessName || !updatedProfile.location) {
      AlgoUI.showToast("Please enter business name and location.", "warning");
      return;
    }

    const submitBtn = document.getElementById("generate-reqs-btn");
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>⏳</span> Generating Intelligent Requirements...`;
    }

    try {
      await ApiService.saveProfile(updatedProfile);
      AlgoUI.showToast("Profile saved! Generated customized approvals and compliance roadmap.", "success");
      
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 900);
    } catch (err) {
      AlgoUI.showToast("Failed to save profile.", "danger");
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>⚡</span> Generate Requirements`;
      }
    }
  });

  // Demo Profiles Quick Fill
  if (quickFillBtn) {
    quickFillBtn.addEventListener("click", () => {
      form.elements["businessName"].value = "GreenLeaf Organic Processing Pvt Ltd";
      form.elements["industryType"].value = "Food Processing";
      form.elements["businessStage"].value = "Expansion";
      form.elements["location"].value = "Verna Industrial Estate, South Goa";
      form.elements["state"].value = "Goa";
      form.elements["investmentAmount"].value = "₹8.20 Crores";
      form.elements["employeesCount"].value = "85";
      form.elements["businessCategory"].value = "Small Enterprise";
      AlgoUI.showToast("Loaded sample food processing industry profile.", "info");
    });
  }

  // Reset to Factory Defaults
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Reset all profile, approvals and compliance data to initial demo state?")) {
        AlgoDataStore.resetToDefault();
        AlgoUI.showToast("Reset completed.", "info");
        setTimeout(() => location.reload(), 500);
      }
    });
  }
}

// PAGE 3: DASHBOARD PAGE
async function initDashboardPage() {
  const data = await ApiService.getDashboardData();
  const { profile, metrics, approvalsOverview, upcomingActions, automationAlerts, recentActivities } = data;

  // Header Title
  const headerEl = document.getElementById("dash-header-title");
  if (headerEl) {
    headerEl.textContent = `Good morning, ${profile.businessName || 'Industrial Partner'}`;
  }

  // KPI Numbers
  const totalEl = document.getElementById("kpi-total-val");
  const compEl = document.getElementById("kpi-completed-val");
  const pendEl = document.getElementById("kpi-pending-val");
  const overEl = document.getElementById("kpi-overdue-val");
  const overallCompEl = document.getElementById("dash-overall-compliance-val");
  const gaugeFill = document.getElementById("dash-gauge-fill");

  if (totalEl) totalEl.textContent = metrics.total;
  if (compEl) compEl.textContent = metrics.completed;
  if (pendEl) pendEl.textContent = metrics.pending;
  if (overEl) overEl.textContent = metrics.overdue;
  if (overallCompEl) overallCompEl.textContent = `${metrics.complianceRate}%`;

  // Animate Circular Gauge (circumference = 283)
  if (gaugeFill) {
    const offset = 283 - (283 * metrics.complianceRate) / 100;
    gaugeFill.style.strokeDashoffset = offset;
  }

  // Render Approvals Overview Table
  const approvalsTable = document.getElementById("dash-approvals-table-body");
  if (approvalsTable) {
    approvalsTable.innerHTML = approvalsOverview.map(app => `
      <tr>
        <td><strong>${app.title}</strong><div style="font-size: 0.78rem; color: var(--slate-500);">${app.department}</div></td>
        <td><span class="badge badge-neutral">${app.category}</span></td>
        <td>${AlgoUI.renderStatusBadge(app.status)}</td>
        <td><button class="btn btn-secondary btn-sm" onclick="showApprovalDetailModal('${app.id}')">View</button></td>
      </tr>
    `).join("");
  }

  // Render Upcoming Actions
  const upcomingContainer = document.getElementById("dash-upcoming-actions");
  if (upcomingContainer) {
    if (upcomingActions.length === 0) {
      upcomingContainer.innerHTML = `<div style="font-size:0.88rem; color:var(--slate-500);">All scheduled compliance actions are up-to-date!</div>`;
    } else {
      upcomingContainer.innerHTML = upcomingActions.map(action => `
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 0; border-bottom: 1px solid var(--slate-100);">
          <div>
            <div style="font-weight: 600; font-size: 0.9rem; color: var(--slate-900);">${action.title}</div>
            <div style="font-size: 0.78rem; color: var(--slate-500);">${action.act}</div>
          </div>
          <span class="badge ${action.daysLeft < 0 ? 'badge-danger' : action.daysLeft <= 3 ? 'badge-warning' : 'badge-info'}">
            ${action.daysLeft < 0 ? `Overdue by ${Math.abs(action.daysLeft)}d` : `Due in ${action.daysLeft} days`}
          </span>
        </div>
      `).join("");
    }
  }

  // Render Automation Alerts
  const alertsContainer = document.getElementById("dash-automation-alerts");
  if (alertsContainer) {
    alertsContainer.innerHTML = automationAlerts.map(alert => `
      <div class="alert-banner ${alert.type === 'danger' ? 'alert-danger' : 'alert-warning'}" style="margin-bottom: 0.6rem; padding: 0.65rem 0.9rem;">
        <span style="font-size: 1.1rem;">${alert.type === 'danger' ? '⚠️' : '⚡'}</span>
        <div>
          <div style="font-weight: 700; font-size: 0.85rem;">${alert.title}</div>
          <div style="font-size: 0.8rem;">${alert.message}</div>
        </div>
      </div>
    `).join("");
  }

  // Render Recent Activities
  const actContainer = document.getElementById("dash-recent-activities");
  if (actContainer) {
    actContainer.innerHTML = recentActivities.map(act => `
      <div class="activity-item">
        <div class="activity-icon">${act.icon}</div>
        <div class="activity-content">
          <div class="activity-title">${act.title}</div>
          <div class="activity-time">${act.timestamp} &bull; <span style="color:var(--primary-600);">${act.category}</span></div>
        </div>
      </div>
    `).join("");
  }
}

// PAGE 4: APPROVALS PAGE
let currentApprovalFilter = "All";
let currentApprovalCategory = "All";
let currentApprovalSearch = "";

async function renderApprovalsTable() {
  const approvals = await ApiService.getApprovals({
    status: currentApprovalFilter,
    category: currentApprovalCategory,
    search: currentApprovalSearch
  });

  const tbody = document.getElementById("approvals-table-body");
  const countDisplay = document.getElementById("approvals-count-display");

  if (countDisplay) {
    countDisplay.textContent = `Showing ${approvals.length} approvals`;
  }

  if (tbody) {
    if (approvals.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align:center; padding: 2.5rem; color: var(--slate-500);">
            <div>🔍 No matching approvals found. Try clearing your search query or filters.</div>
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = approvals.map(app => `
      <tr>
        <td>
          <div style="font-weight: 700; color: var(--slate-900);">${app.title}</div>
          <div style="font-size: 0.78rem; color: var(--slate-500);">${app.department}</div>
        </td>
        <td><span class="badge badge-neutral">${app.category}</span></td>
        <td>${AlgoUI.renderStatusBadge(app.status)}</td>
        <td>
          <div style="font-weight: 500;">${app.dueDate}</div>
          <div style="font-size: 0.75rem; color: var(--slate-400);">Fee: ${app.fee}</div>
        </td>
        <td>
          <button class="btn btn-secondary btn-sm" onclick="showApprovalDetailModal('${app.id}')">
            View Details
          </button>
        </td>
      </tr>
    `).join("");
  }
}

async function initApprovalsPage() {
  const metrics = AlgoDataStore.getMetrics();

  // Populate summary counters
  const totalEl = document.getElementById("app-total-val");
  const compEl = document.getElementById("app-completed-val");
  const pendEl = document.getElementById("app-pending-val");
  const overEl = document.getElementById("app-overdue-val");

  if (totalEl) totalEl.textContent = metrics.total;
  if (compEl) compEl.textContent = metrics.completed;
  if (pendEl) pendEl.textContent = metrics.pending;
  if (overEl) overEl.textContent = metrics.overdue;

  // Filter chips
  document.querySelectorAll(".approval-status-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".approval-status-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentApprovalFilter = chip.getAttribute("data-filter") || "All";
      renderApprovalsTable();
    });
  });

  // Search input
  const searchInput = document.getElementById("approvals-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentApprovalSearch = e.target.value;
      renderApprovalsTable();
    });
  }

  // Category select
  const catSelect = document.getElementById("approvals-category-select");
  if (catSelect) {
    catSelect.addEventListener("change", (e) => {
      currentApprovalCategory = e.target.value;
      renderApprovalsTable();
    });
  }

  renderApprovalsTable();
}

// Modal for approval item
async function showApprovalDetailModal(id) {
  const app = await ApiService.getApprovalById(id);
  if (!app) return;

  const contentHtml = `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; background-color: var(--slate-50); padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--slate-200);">
        <div>
          <span style="font-size: 0.78rem; color: var(--slate-500); text-transform: uppercase; font-weight: bold;">Current Status</span>
          <div>${AlgoUI.renderStatusBadge(app.status)}</div>
        </div>
        <div style="text-align: right;">
          <span style="font-size: 0.78rem; color: var(--slate-500); text-transform: uppercase; font-weight: bold;">Due Date</span>
          <div style="font-weight: 700; color: var(--slate-800);">${app.dueDate}</div>
        </div>
      </div>

      <div>
        <label style="font-weight: 700; font-size: 0.85rem; color: var(--slate-800);">Issuing Authority / Department:</label>
        <p style="color: var(--slate-600); font-size: 0.9rem;">${app.department}</p>
      </div>

      <div>
        <label style="font-weight: 700; font-size: 0.85rem; color: var(--slate-800);">Mandatory Documents Required:</label>
        <ul style="margin-left: 1.25rem; margin-top: 0.35rem; color: var(--slate-700); font-size: 0.88rem;">
          ${(app.docsRequired || []).map(doc => `<li style="margin-bottom: 0.25rem;">${doc}</li>`).join("")}
        </ul>
      </div>

      <div>
        <label style="font-weight: 700; font-size: 0.85rem; color: var(--slate-800);">Statutory Fee Estimate:</label>
        <p style="color: var(--slate-700); font-size: 0.9rem; font-weight: 600;">${app.fee}</p>
      </div>

      <div class="alert-banner alert-info" style="margin-bottom: 0;">
        <span>ℹ️</span>
        <div>
          <strong>System Remarks:</strong> ${app.remarks || "No active compliance flags."}
        </div>
      </div>
    </div>
  `;

  const footerHtml = `
    <div style="display: flex; gap: 0.5rem; width: 100%; justify-content: space-between;">
      <div>
        ${app.status !== "Completed" ? `
          <button class="btn btn-success btn-sm" onclick="updateApprovalItemStatus('${app.id}', 'Completed')">
            ✓ Mark as Completed
          </button>
        ` : `
          <button class="btn btn-secondary btn-sm" onclick="updateApprovalItemStatus('${app.id}', 'Pending')">
            Reopen to Pending
          </button>
        `}
      </div>
      <div style="display: flex; gap: 0.5rem;">
        <button class="btn btn-primary btn-sm" onclick="AlgoUI.showToast('Document upload simulated.', 'info')">
          📤 Upload Document
        </button>
        <button class="btn btn-secondary btn-sm" onclick="AlgoUI.closeModal()">Close</button>
      </div>
    </div>
  `;

  AlgoUI.openModal(app.title, contentHtml, footerHtml);
}

async function updateApprovalItemStatus(id, newStatus) {
  try {
    await ApiService.updateApprovalStatus(id, newStatus);
    AlgoUI.showToast(`Updated status to ${newStatus}.`, "success");
    AlgoUI.closeModal();
    if (typeof renderApprovalsTable === "function") renderApprovalsTable();
    if (typeof initDashboardPage === "function" && document.getElementById("dash-header-title")) initDashboardPage();
  } catch (e) {
    AlgoUI.showToast("Failed to update status.", "danger");
  }
}

// PAGE 5: COMPLIANCE PAGE
async function initCompliancePage() {
  const complianceList = await ApiService.getCompliance();
  const metrics = AlgoDataStore.getMetrics();

  // Progress Bar & Percentage
  const compValEl = document.getElementById("comp-overall-val");
  const compBarEl = document.getElementById("comp-progress-fill");

  if (compValEl) compValEl.textContent = `${metrics.complianceRate}%`;
  if (compBarEl) compBarEl.style.width = `${metrics.complianceRate}%`;

  // Render Categorized Sections
  const categories = ["Business Compliance", "Environmental Compliance", "Safety Compliance", "Labour Compliance"];

  categories.forEach(cat => {
    const slug = cat.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const container = document.getElementById(`comp-list-${slug}`);
    if (container) {
      const items = complianceList.filter(c => c.category === cat);
      if (items.length === 0) {
        container.innerHTML = `<div style="padding: 1rem; color: var(--slate-500); font-size: 0.88rem;">No items in this category.</div>`;
      } else {
        container.innerHTML = items.map(item => `
          <div class="compliance-item-row">
            <div class="compliance-item-left">
              <div class="compliance-status-icon">
                ${item.status === 'Completed' ? '✅' : item.status === 'Overdue' ? '🔴' : '⚠️'}
              </div>
              <div>
                <div class="compliance-title">${item.title}</div>
                <div class="compliance-desc">Governing Act: <strong>${item.act}</strong> &bull; ${item.description}</div>
              </div>
            </div>
            <div class="compliance-item-right">
              <div class="compliance-due">
                <div>Due: <strong>${item.dueDate}</strong></div>
                <div style="font-size: 0.75rem; color: ${item.daysLeft < 0 ? 'var(--danger-primary)' : 'var(--slate-500)'};">
                  ${item.daysLeft < 0 ? `Overdue by ${Math.abs(item.daysLeft)} days` : item.daysLeft === 0 ? 'Completed' : `In ${item.daysLeft} days`}
                </div>
              </div>
              <div>
                ${AlgoUI.renderStatusBadge(item.status)}
              </div>
              <button class="btn btn-secondary btn-sm" onclick="handleComplianceAction('${item.id}')">
                ${item.actionText || 'View'}
              </button>
            </div>
          </div>
        `).join("");
      }
    }
  });
}

async function handleComplianceAction(id) {
  const complianceList = await ApiService.getCompliance();
  const item = complianceList.find(c => c.id === id);
  if (!item) return;

  const contentHtml = `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="background-color: var(--slate-50); padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--slate-200);">
        <div style="font-weight: 700; color: var(--slate-900); font-size: 1rem;">${item.title}</div>
        <div style="color: var(--slate-500); font-size: 0.82rem;">Statutory Framework: <strong>${item.act}</strong></div>
      </div>

      <div>
        <label style="font-weight: 700; font-size: 0.85rem; color: var(--slate-800);">Compliance Description:</label>
        <p style="color: var(--slate-700); font-size: 0.9rem; margin-top: 0.25rem;">${item.description}</p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div>
          <label style="font-weight: 700; font-size: 0.82rem; color: var(--slate-800);">Target Due Date:</label>
          <div style="font-weight: 600; color: var(--slate-900);">${item.dueDate}</div>
        </div>
        <div>
          <label style="font-weight: 700; font-size: 0.82rem; color: var(--slate-800);">Compliance Risk Level:</label>
          <div><span class="badge ${item.risk === 'High' ? 'badge-danger' : item.risk === 'Medium' ? 'badge-warning' : 'badge-info'}">${item.risk} Risk</span></div>
        </div>
      </div>

      <div class="alert-banner alert-warning" style="margin-bottom: 0;">
        <span>⚡</span>
        <div style="font-size: 0.85rem;">
          <strong>Automated SIH26130 Reminder:</strong> Submitting this compliance item updates your enterprise transparency score.
        </div>
      </div>
    </div>
  `;

  const footerHtml = `
    <div style="display: flex; justify-content: space-between; width: 100%;">
      <div>
        ${item.status !== "Completed" ? `
          <button class="btn btn-success btn-sm" onclick="markComplianceItemDone('${item.id}')">
            ✓ Mark as Complied
          </button>
        ` : `
          <span style="color: var(--success-dark); font-size: 0.85rem; font-weight: 600;">✓ Fully Compliant</span>
        `}
      </div>
      <div style="display: flex; gap: 0.5rem;">
        <button class="btn btn-primary btn-sm" onclick="AlgoUI.showToast('Simulated filing form opened.', 'info')">
          Filing Portal &rarr;
        </button>
        <button class="btn btn-secondary btn-sm" onclick="AlgoUI.closeModal()">Close</button>
      </div>
    </div>
  `;

  AlgoUI.openModal(`Compliance Details: ${item.title}`, contentHtml, footerHtml);
}

async function markComplianceItemDone(id) {
  try {
    await ApiService.updateComplianceStatus(id, "Completed");
    AlgoUI.showToast("Compliance verified & marked completed.", "success");
    AlgoUI.closeModal();
    initCompliancePage();
  } catch (e) {
    AlgoUI.showToast("Error updating compliance.", "danger");
  }
}

// PAGE 6: SCHEMES PAGE
let currentSchemeCategory = "All";
let currentSchemeSearch = "";

async function renderSchemesGrid() {
  const schemes = await ApiService.getSchemes({
    category: currentSchemeCategory,
    search: currentSchemeSearch
  });

  const grid = document.getElementById("schemes-cards-grid");
  const countEl = document.getElementById("schemes-count-display");

  if (countEl) countEl.textContent = `Showing ${schemes.length} potentially relevant schemes`;

  if (grid) {
    if (schemes.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: #ffffff; border-radius: var(--radius-lg); border: 1px solid var(--slate-200);">
          <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🔍</div>
          <div style="font-weight: 600; color: var(--slate-800);">No government support schemes found for your current filter.</div>
          <div style="font-size: 0.85rem; color: var(--slate-500); margin-top: 0.25rem;">Try selecting "All" categories or changing your search terms.</div>
        </div>
      `;
      return;
    }

    grid.innerHTML = schemes.map(scheme => `
      <div class="scheme-card">
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
            <span class="badge badge-info">${scheme.category}</span>
            <span class="badge badge-success" style="font-size: 0.72rem;">${scheme.eligibilityMatch}</span>
          </div>
          <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--slate-900); margin-bottom: 0.4rem; line-height: 1.3;">
            ${scheme.name}
          </h3>
          <div style="font-size: 0.78rem; color: var(--slate-500); margin-bottom: 0.75rem;">
            Nodal Agency: <strong>${scheme.nodalMinistry}</strong>
          </div>
          <p style="font-size: 0.88rem; color: var(--slate-600); line-height: 1.5; margin-bottom: 1rem;">
            ${scheme.description}
          </p>
        </div>

        <div>
          <div class="scheme-benefit-box">
            💰 <strong>Potential Benefit:</strong> ${scheme.benefit}
          </div>
          <button class="btn btn-outline btn-sm btn-block" onclick="showSchemeDetailModal('${scheme.id}')">
            View Eligibility & Apply &rarr;
          </button>
        </div>
      </div>
    `).join("");
  }
}

async function initSchemesPage() {
  // Category chips
  document.querySelectorAll(".scheme-category-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".scheme-category-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentSchemeCategory = chip.getAttribute("data-category") || "All";
      renderSchemesGrid();
    });
  });

  // Search
  const searchInput = document.getElementById("schemes-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSchemeSearch = e.target.value;
      renderSchemesGrid();
    });
  }

  renderSchemesGrid();
}

async function showSchemeDetailModal(id) {
  const schemes = await ApiService.getSchemes();
  const scheme = schemes.find(s => s.id === id);
  if (!scheme) return;

  const contentHtml = `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="background-color: var(--primary-50); padding: 0.85rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--primary-200);">
        <div style="font-size: 0.8rem; font-weight: 700; color: var(--primary-800); text-transform: uppercase;">Estimated Potential Incentive</div>
        <div style="font-size: 1.1rem; font-weight: 800; color: var(--primary-900); margin-top: 0.2rem;">${scheme.benefit}</div>
      </div>

      <div>
        <label style="font-weight: 700; font-size: 0.85rem; color: var(--slate-800);">Nodal Ministry & Department:</label>
        <p style="color: var(--slate-700); font-size: 0.9rem;">${scheme.nodalMinistry}</p>
      </div>

      <div>
        <label style="font-weight: 700; font-size: 0.85rem; color: var(--slate-800);">Scheme Overview:</label>
        <p style="color: var(--slate-700); font-size: 0.9rem; margin-top: 0.2rem;">${scheme.description}</p>
      </div>

      <div>
        <label style="font-weight: 700; font-size: 0.85rem; color: var(--slate-800);">Key Eligibility Criteria:</label>
        <ul style="margin-left: 1.25rem; margin-top: 0.35rem; font-size: 0.88rem; color: var(--slate-700);">
          ${(scheme.keyCriteria || []).map(c => `<li style="margin-bottom: 0.25rem;">${c}</li>`).join("")}
        </ul>
      </div>

      <div>
        <label style="font-weight: 700; font-size: 0.85rem; color: var(--slate-800);">Application Channel:</label>
        <p style="color: var(--slate-700); font-size: 0.88rem; font-weight: 600;">${scheme.applicationMode}</p>
      </div>

      <div class="alert-banner alert-info" style="margin-bottom: 0; font-size: 0.82rem;">
        <span>ℹ️</span>
        <div>
          <strong>SIH Hackathon Prototype Note:</strong> Scheme recommendations are dynamically mapped to your Industrial Profile attributes (Category, State, Turnover).
        </div>
      </div>
    </div>
  `;

  const footerHtml = `
    <div style="display: flex; justify-content: space-between; width: 100%;">
      <button class="btn btn-secondary btn-sm" onclick="AlgoUI.showToast('Bookmarked to Tracked Schemes.', 'success')">
        ⭐ Bookmark Scheme
      </button>
      <div style="display: flex; gap: 0.5rem;">
        <button class="btn btn-primary btn-sm" onclick="AlgoUI.showToast('Redirecting to official NSWS portal...', 'info')">
          Apply on Portal &rarr;
        </button>
        <button class="btn btn-secondary btn-sm" onclick="AlgoUI.closeModal()">Close</button>
      </div>
    </div>
  `;

  AlgoUI.openModal(scheme.name, contentHtml, footerHtml);
}

// ----------------------------------------------------------------------------
// 6. Global DOMContentLoaded Bootstrap Router
// ----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Initialize storage
  AlgoDataStore.init();

  // Setup Global Nav
  AlgoUI.setupGlobalNavigation();

  // Route page-specific logic
  const path = window.location.pathname.toLowerCase();

  if (path.endsWith("profile.html")) {
    initProfilePage();
  } else if (path.endsWith("dashboard.html")) {
    initDashboardPage();
  } else if (path.endsWith("approvals.html")) {
    initApprovalsPage();
  } else if (path.endsWith("compliance.html")) {
    initCompliancePage();
  } else if (path.endsWith("schemes.html")) {
    initSchemesPage();
  }
});
