import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-200 p-4 flex flex-col h-screen">
      <div className="mb-4">
        <img src="/logo.png" alt="Logo" className="w-32 mx-auto" />
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          <li className="font-semibold">Cost-Savings Dashboard</li>
          <li className="flex items-center space-x-2">
            <span>📊</span> <Link to="/dashboard">All Savings</Link>
          </li>
          <li className="font-semibold flex items-center space-x-2">
            <span>🟣</span> <span>Datadog</span>
          </li>
          <li className="pl-4">Custom Metrics</li>
          <li className="pl-4">Instances</li>
          <li className="pl-4">Indexed Spans</li>
          <li className="pl-4">Ingested Spans</li>
          <li className="pl-4">Profiling Hosts</li>
          <li className="pl-4">Browser Tests</li>
          <li className="font-semibold flex items-center space-x-2">
            <span>🟢</span> <span>New Relic</span>
          </li>
          <li className="pl-4">User Costs</li>
          <li className="pl-4">RUM Costs</li>
          <li className="font-semibold flex items-center space-x-2">
            <Link to='/dashboard/report'>
            <span>🟠</span> <span>AWS Savings</span>
            
            </Link>
          </li>
          <li className="pl-4">Cloudwatch Put</li>
          <li className="pl-4">Cloudwatch Stream</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
