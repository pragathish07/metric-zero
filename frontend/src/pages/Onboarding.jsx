import { useEffect, useState } from "react";
import { useClerk, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const { user } = useUser();
  const { user: clerkUser } = useClerk(); 
  const navigate = useNavigate();

  const [selectedOptions, setSelectedOptions] = useState({
    datadog: false,
    newrelic: false,
    aws: false,
  });

  const [formData, setFormData] = useState({
    datadogApiKey: "",
    newrelicApiKey: "",
    awsAccessKey: "",
    awsSecretKey: "",
  });

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) => ({ ...prev, [option]: !prev[option] }));
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  useEffect(() => {
   
    
    if (localStorage.getItem("onboarded") === "true") {
      navigate("/dashboard");
    }
    
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user) {
      localStorage.setItem("onboarded", "true");
      localStorage.setItem("onboardingData", JSON.stringify({ selectedOptions, formData }));
    }

    navigate("/dashboard", { replace: true });
  };



  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {user?.organization ? `${user.organization.name} Onboarding` : "Onboarding"}
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Datadog */}
          <div className="mb-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedOptions.datadog}
                onChange={() => handleCheckboxChange("datadog")}
              />
              <span className="font-semibold text-gray-700">Datadog Cost Savings</span>
            </label>
            {selectedOptions.datadog && (
              <input
                type="text"
                name="datadogApiKey"
                placeholder="API Key"
                className="w-full p-2 mt-2 bg-gray-200 rounded"
                onChange={handleInputChange}
                value={formData.datadogApiKey}
              />
            )}
          </div>

          {/* NewRelic */}
          <div className="mb-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedOptions.newrelic}
                onChange={() => handleCheckboxChange("newrelic")}
              />
              <span className="font-semibold text-gray-700">NewRelic Cost Savings</span>
            </label>
            {selectedOptions.newrelic && (
              <input
                type="text"
                name="newrelicApiKey"
                placeholder="API Key"
                className="w-full p-2 mt-2 bg-gray-200 rounded"
                onChange={handleInputChange}
                value={formData.newrelicApiKey}
              />
            )}
          </div>

          {/* AWS */}
          <div className="mb-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedOptions.aws}
                onChange={() => handleCheckboxChange("aws")}
              />
              <span className="font-semibold text-gray-700">AWS Cost Savings</span>
            </label>
            {selectedOptions.aws && (
              <>
                <input
                  type="text"
                  name="awsAccessKey"
                  placeholder="Access Key"
                  className="w-full p-2 mt-2 bg-gray-200 rounded"
                  onChange={handleInputChange}
                  value={formData.awsAccessKey}
                />
                <input
                  type="password"
                  name="awsSecretKey"
                  placeholder="Secret Key"
                  className="w-full p-2 mt-2 bg-gray-200 rounded"
                  onChange={handleInputChange}
                  value={formData.awsSecretKey}
                />
              </>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold mt-4 hover:bg-blue-700"
          >
            Save & Calculate Cost Savings
          </button>
        </form>
      </div>
    </div>
  );
};

export default Onboarding;
