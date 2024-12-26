import React, { useState } from 'react';

const subCategoryOptions = {
  Access: [
    "Access Other",
    "Account Locked",
    "Password Expired",
    "Password Reset",
    "Unable to Login"
  ],
  Application: [
    "Access",
    "Availability",
    "Email",
    "Error",
    "Functionality",
    "Maintenance",
    "Performance"
  ],
  Hardware: [
    "Hardware Failure",
    "Hardware Other",
    "Lost/Stolen",
    "Operating System",
    "Physical Damage",
    "Printing"
  ],
  "Inquiry/Help": [
    "Fast/Ghost/Out of Scope Call",
    "Help Other",
    "Information",
    "Service Request"
  ],
  Network: [
    "Internet Access",
    "Network Other",
    "Performance",
    "VPN Access",
    "Wireless Access"
  ],
  Security: [
    "Application Related",
    "Attack/Breach/Threat",
    "Banned Software",
    "Data Loss Prevention (DLP)",
    "Data Related"
  ]
};

const Ticket = () => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSubCategory(""); // Reset sub-category when category changes
  };

  return (
    <div className="container-fluid mt-5">
      <div className="card p-4 shadow w-100 mx-auto" style={{ maxWidth: '90%' }}>
        <h5 className="card-title mb-4">New Incident Form</h5>
        <form>
          <div className="row">
            <div className="col-12 col-lg-6 mb-5">
              <div className="mb-3">
                <label htmlFor="openedFor" className="form-label">Opened For</label>
                <input type="text" className="form-control" id="openedFor" placeholder="Enter name" />
              </div>
              <div className="mb-3">
                <label htmlFor="incidentPriority" className="form-label">Priority</label>
                <select className="form-select" id="incidentPriority">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="incidentCategory" className="form-label">Category</label>
                <select className="form-select" id="incidentCategory" value={category} onChange={handleCategoryChange}>
                  <option value="">Select Category</option>
                  <option value="Access">Access</option>
                  <option value="Application">Application</option>
                  <option value="Hardware">Hardware</option>
                  <option value="Inquiry/Help">Inquiry/Help</option>
                  <option value="Network">Network</option>
                  <option value="Security">Security</option>
                </select>
              </div>
              {category && (
                <div className="mb-3">
                  <label htmlFor="incidentSubCategory" className="form-label">Sub-Category</label>
                  <select className="form-select" id="incidentSubCategory" value={subCategory} onChange={(e) => setSubCategory(e.target.value)}>
                    <option value="">Select Sub-Category</option>
                    {subCategoryOptions[category].map((subCat, index) => (
                      <option key={index} value={subCat}>{subCat}</option>
                    ))}
                  </select>
                </div>
              )}
              <div className="mb-3">
                <label htmlFor="incidentDate" className="form-label">Date</label>
                <input type="date" className="form-control" id="incidentDate" />
              </div>
              <div className="mb-3">
                <label htmlFor="configurationItem" className="form-label">Configuration Item</label>
                <input type="text" className="form-control" id="configurationItem" placeholder="Enter configuration item" />
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-5">
              <div className="mb-3">
                <label htmlFor="incidentTitle" className="form-label">Incident Title</label>
                <input type="text" className="form-control" id="incidentTitle" placeholder="Enter incident title" />
              </div>
              <div className="mb-3">
                <label htmlFor="incidentDescription" className="form-label">Description</label>
                <textarea className="form-control" id="incidentDescription" rows="4" placeholder="Describe the incident"></textarea>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Ticket;