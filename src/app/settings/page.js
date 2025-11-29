"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SideBar from "@/components/SideBar";

export default function SettingsPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    organizationName: "",
    role: "",
    referralSource: ""
  });
  const [loading, setLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState({
    name: "",
    organizationName: "",
    role: "",
    referralSource: ""
  });
  const [isSaving, setIsSaving] = useState(false);
  const [showReferralDropdown, setShowReferralDropdown] = useState(false);

  useEffect(() => {
    // Get user data from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(prevUser => ({
          ...prevUser,
          name: userData.name || "",
          email: userData.email || ""
        }));
        
        // Optionally fetch full user data from backend if needed
        fetchUserDetails(userData.id || userData._id);
      } catch (err) {
        console.error("Error parsing user data:", err);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUserDetails = async (userId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:5000/api/auth/user/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setUser(prevUser => ({
          ...prevUser,
          organizationName: data.user?.organizationName || "",
          role: data.user?.role || "",
          referralSource: data.user?.referralSource || ""
        }));
      }
    } catch (err) {
      console.error("Error fetching user details:", err);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    // Clear localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isNewUser");
    localStorage.removeItem("onboardingData");
    // Redirect to signin
    router.push("/signin");
  };

  const openEditModal = () => {
    setEditFormData({
      name: user.name,
      organizationName: user.organizationName,
      role: user.role,
      referralSource: user.referralSource
    });
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setShowReferralDropdown(false);
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReferralSourceSelect = (source) => {
    setEditFormData(prev => ({
      ...prev,
      referralSource: source
    }));
  };

  const handleSaveChanges = async () => {
    setIsSaving(true);
    try {
      const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
      const token = localStorage.getItem("token");
      const userId = storedUser.id || storedUser._id;

      const response = await fetch(
        `http://localhost:5000/api/auth/user/${userId}/update`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({
            name: editFormData.name,
            organizationName: editFormData.organizationName,
            role: editFormData.role,
            referralSource: editFormData.referralSource
          })
        }
      );

      if (response.ok) {
        const data = await response.json();
        setUser(prev => ({
          ...prev,
          name: editFormData.name,
          organizationName: editFormData.organizationName,
          role: editFormData.role,
          referralSource: editFormData.referralSource
        }));
        
        // Update localStorage with new data
        const updatedUser = JSON.parse(localStorage.getItem("user") || "{}");
        updatedUser.name = editFormData.name;
        updatedUser.organizationName = editFormData.organizationName;
        updatedUser.role = editFormData.role;
        updatedUser.referralSource = editFormData.referralSource;
        localStorage.setItem("user", JSON.stringify(updatedUser));
        
        setIsEditModalOpen(false);
        alert("Changes saved successfully!");
      } else {
        alert("Failed to save changes");
      }
    } catch (err) {
      console.error("Error saving changes:", err);
      alert("Error saving changes");
    } finally {
      setIsSaving(false);
    }
  };
  return (
    <main className="min-h-screen flex bg-gray-50">
      <SideBar />
      <div className="flex-1 p-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Settings
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your account and preferences
          </p>
        </div>

        {/* Settings Cards */}
        <div className="space-y-6">
          {/* Account Information Card */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Account Information</h2>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50" onClick={openEditModal}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Edit Info
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <p className="text-gray-900">{user.name || "Not provided"}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <p className="text-gray-900">{user.email || "Not provided"}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                <p className="text-gray-900">{user.organizationName || "Not provided"}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <p className="text-gray-900">{user.role || "Not provided"}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
                <p className="text-gray-900">{user.referralSource || "Not provided"}</p>
              </div>
            </div>
          </div>

          {/* Calendar Integration Card */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Calendar Integration</h2>
            </div>
            
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Calendar Description</h3>
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-green-600 font-medium">Connected</span>
                <span className="text-gray-600 ml-2">with krish@gmail.com</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Last synced: 10 mins ago
              </div>
            </div>
            
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-black">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Sync Now
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                </svg>
                Disconnect
              </button>
            </div>
          </div>

          {/* Notifications Card */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.828 7l2.586 2.586a2 2 0 002.828 0L12.828 7H4.828z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <input type="checkbox" id="email-interview" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" defaultChecked />
                <label htmlFor="email-interview" className="ml-3 text-sm text-gray-700">
                  Email me when an interview is booked
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="remind-hour" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" defaultChecked />
                <label htmlFor="remind-hour" className="ml-3 text-sm text-gray-700">
                  Remind me 1 hour before an interview
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="weekly-summary" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                <label htmlFor="weekly-summary" className="ml-3 text-sm text-gray-700">
                  Weekly summary of AI agent progress
                </label>
              </div>
            </div>
            
            <button className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-black">
              Save Preferences
            </button>
          </div>

          {/* Security & Sign Out Card */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Security & Sign Out</h2>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Logged in via Google
              </div>
            </div>
            
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700" onClick={logout}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Reset Connection
              </button>
            </div>
          </div>
        </div>

        {/* Manage Subscription Link */}
        <div className="mt-8">
          <a href="/settings/subscription" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            Manage Subscription
          </a>
        </div>
      </div>

      {/* Edit Info Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Edit Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={editFormData.name}
                  onChange={handleEditInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black focus:border-transparent text-black"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">Organization Name</label>
                <input
                  type="text"
                  name="organizationName"
                  value={editFormData.organizationName}
                  onChange={handleEditInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black focus:border-transparent text-black"
                  placeholder="Enter organization name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">Role</label>
                <select
                  name="role"
                  value={editFormData.role}
                  onChange={handleEditInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black focus:border-transparent text-black"
                >
                  <option value="">Select a role</option>
                  <option value="Recruiter (In-house)">Recruiter (In-house)</option>
                  <option value="Recruiter (Agency)">Recruiter (Agency)</option>
                  <option value="Founder">Founder</option>
                  <option value="Hiring Manager">Hiring Manager</option>
                  <option value="VC Talent Team">VC Talent Team</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">How did you hear about us?</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowReferralDropdown(!showReferralDropdown)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-left bg-white text-black hover:bg-gray-50 flex items-center justify-between"
                  >
                    <span>{editFormData.referralSource || "Select source"}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                  {showReferralDropdown && (
                    <div className="absolute top-12 left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                      {["LinkedIn", "Twitter", "YouTube", "Instagram", "Friend", "Colleague", "Other"].map((source) => (
                        <button
                          key={source}
                          onClick={() => {
                            handleReferralSourceSelect(source);
                            setShowReferralDropdown(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                        >
                          {source}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={closeEditModal}
                className="flex-1 px-4 py-2 text-sm font-medium text-black bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveChanges}
                disabled={isSaving}
                className="flex-1 px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-900 disabled:opacity-50"
              >
                {isSaving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
