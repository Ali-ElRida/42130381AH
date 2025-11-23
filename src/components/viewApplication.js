function ViewApplication({ application }) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md border mt-4">
            <h2 className="text-2xl font-semibold mb-4">Your Application Details</h2>

            <p className="text-gray-700">
                <strong>Status:</strong> {application.status}
            </p>

            <p className="text-gray-700 mt-2">
                <strong>Submitted On:</strong> {application.date}
            </p>

            <p className="text-gray-700 mt-2">
                <strong>Notes:</strong> {application.notes}
            </p>

            {application.missingDocs.length > 0 ? (
                <div className="mt-4">
                    <h3 className="font-semibold">Missing Documents:</h3>
                    <ul className="list-disc ml-5 text-red-600">
                        {application.missingDocs.map((doc, i) => (
                            <li key={i}>{doc}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p className="text-green-600 mt-2 font-semibold">
                    No missing documents
                </p>
            )}
        </div>
    );
}

export default ViewApplication;
