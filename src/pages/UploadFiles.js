import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UploadDocs() {
    const navigate = useNavigate();
    const [documents, setDocuments] = useState({
        idCard: null,
        solarImage: null,
        familyDoc: null,
        personalDoc: null,
    });

    const handleFileChange = (e, docType) => {
        const file = e.target.files[0];
        if (file) {
            setDocuments({ ...documents, [docType]: file });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const missing = Object.entries(documents).filter(([key, value]) => !value);
        if (missing.length > 0) {
            alert(`Please upload all documents. Missing: ${missing.map(m => m[0]).join(", ")}`);
            return;
        }

        localStorage.setItem("uploadedDocs", JSON.stringify(documents));
        alert("All documents uploaded successfully!");

        navigate("/payment")
    };


    const previewURL = (file) => {
        return file ? URL.createObjectURL(file) : null;
    };

   

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-blue-600 mb-6">Upload Required Documents</h1>

            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-2xl shadow-md max-w-2xl mx-auto space-y-6"
            >

                {[
                    { key: "idCard", label: "ID Card", capture: "environment" },
                    { key: "solarImage", label: "Passport Photo / Solar Image", capture: "user" },
                    { key: "familyDoc", label: "Family Identification Document", capture: "environment" },
                    { key: "personalDoc", label: "Personal Identification Document", capture: "environment" },
                ].map(({ key, label, capture }) => (
                    <div key={key}>
                        <label className="block font-semibold mb-2">{label}</label>
                        <input
                            type="file"
                            accept="image/*"
                            capture={capture}
                            onChange={(e) => handleFileChange(e, key)}
                            className="border p-2 rounded-lg w-full"
                        />
                        {documents[key] && (
                            <div className="mt-2">
                                <p className="text-green-600 mb-1">{documents[key].name}</p>
                                <img
                                    src={previewURL(documents[key])}
                                    alt={label}
                                    className="w-48 h-32 object-cover rounded-lg border"
                                />
                            </div>
                        )}
                    </div>
                ))}

                <label className="block font-semibold mb-2">Selfie / Facial Verification</label>
                <input
                    type="file"
                    accept="image/*"
                    capture="user"
                    onChange={(e) => handleFileChange(e, "selfie")}
                    className="border p-2 rounded-lg w-full"
                />
                {documents.selfie && (
                    <div className="mt-2">
                        <p className="text-green-600 mb-1">{documents.selfie.name}</p>
                        <img
                            src={URL.createObjectURL(documents.selfie)}
                            alt="Selfie"
                            className="w-48 h-32 object-cover rounded-lg border"
                        />
                    </div>
                )}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
                    
                >
                    Submit Documents
                </button>


            </form>
        </div>
    );
}

export default UploadDocs;
