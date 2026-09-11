import { useEffect, useState } from "react";
import { getAllCases } from "../services/caseService";
import { Link } from "react-router-dom";

function CasesPage() {

  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadCases();
  }, []);

  async function loadCases() {

    try {
      const data = await getAllCases();
      setCases(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <h2>Loading cases...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div className="dashboard">
      <div className="card">
        <h2>Banking Case Dashboard</h2>

        <table className="case-table">
          <thead>
            <tr>
              <th>Case ID</th>
              <th>Customer</th>
              <th>Type</th>
              <th>Status</th>
              <th>Priority</th>
            </tr>
          </thead>

          <tbody>
            {cases.map((caseItem) => (
              <tr key={caseItem.caseId}>
                <td>
                  <Link to={`/cases/${caseItem.caseId}`}>
                    {caseItem.caseId}
                  </Link>
                </td>

                <td>{caseItem.customerName}</td>
                <td>{caseItem.type}</td>
                <td>{caseItem.status}</td>
                <td>{caseItem.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CasesPage;