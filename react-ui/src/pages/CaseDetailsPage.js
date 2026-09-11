import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCase } from "../services/caseService";

function CaseDetailsPage() {
  const { caseId } = useParams();

  const [caseData, setCaseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadCase();
  }, [caseId]);

  async function loadCase() {
    try {
      const data = await getCase(caseId);
      setCaseData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <h2>Loading case...</h2>;

  if (error) return <h2>Error: {error}</h2>;

  return (
  <div className="dashboard">
    <div className="card">
      <Link to="/cases">← Back to Cases</Link>

      <h2>Case Details</h2>

      <div className="case-card">
        <p><strong>Case ID:</strong> {caseData.caseId}</p>
        <p><strong>Customer:</strong> {caseData.customerName}</p>
        <p><strong>Account Number:</strong> {caseData.accountNumber}</p>
        <p><strong>Case Type:</strong> {caseData.type}</p>
        <p><strong>Status:</strong> {caseData.status}</p>
        <p><strong>Priority:</strong> {caseData.priority}</p>
      </div>
    </div>
  </div>
);
}

export default CaseDetailsPage;