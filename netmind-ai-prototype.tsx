import React, { useState } from 'react';
import { Shield, Upload, AlertTriangle, CheckCircle, TrendingUp, Activity, FileText, Zap } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const NetMindAI = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  // Sample Cisco ASA/FTD logs
  const sampleLogs = `%ASA-4-106023: Deny tcp src outside:203.0.113.45/3389 dst inside:192.168.1.100/3389 by access-group "outside_in" [0x0, 0x0]
%ASA-4-106023: Deny tcp src outside:203.0.113.45/3389 dst inside:192.168.1.100/3389 by access-group "outside_in" [0x0, 0x0]
%ASA-4-106023: Deny tcp src outside:203.0.113.45/3389 dst inside:192.168.1.100/3389 by access-group "outside_in" [0x0, 0x0]
%ASA-6-302013: Built inbound TCP connection 12345 for outside:198.51.100.22/443 (198.51.100.22/443) to inside:192.168.1.50/52341 (10.0.0.50/52341)
%ASA-4-106023: Deny tcp src outside:185.220.101.33/22 dst inside:192.168.1.10/22 by access-group "outside_in" [0x0, 0x0]
%ASA-4-106023: Deny tcp src outside:185.220.101.33/22 dst inside:192.168.1.10/22 by access-group "outside_in" [0x0, 0x0]
%ASA-4-106023: Deny tcp src outside:185.220.101.33/22 dst inside:192.168.1.10/22 by access-group "outside_in" [0x0, 0x0]
%ASA-4-106023: Deny tcp src outside:185.220.101.33/22 dst inside:192.168.1.10/22 by access-group "outside_in" [0x0, 0x0]
%ASA-4-106023: Deny tcp src outside:185.220.101.33/22 dst inside:192.168.1.10/22 by access-group "outside_in" [0x0, 0x0]
%ASA-3-313005: Denied ICMP type=8, from 203.0.113.78 on interface outside
%ASA-6-302014: Teardown TCP connection 12345 for outside:198.51.100.22/443 to inside:192.168.1.50/52341 duration 0:00:30 bytes 1540
%ASA-4-106023: Deny udp src outside:45.142.212.61/53 dst inside:192.168.1.5/53 by access-group "outside_in" [0x0, 0x0]
%ASA-4-106023: Deny tcp src outside:203.0.113.45/3389 dst inside:192.168.1.100/3389 by access-group "outside_in" [0x0, 0x0]
%ASA-4-106023: Deny tcp src outside:203.0.113.45/3389 dst inside:192.168.1.100/3389 by access-group "outside_in" [0x0, 0x0]
%ASA-4-106023: Deny tcp src outside:185.220.101.33/22 dst inside:192.168.1.10/22 by access-group "outside_in" [0x0, 0x0]`;

  const analyzeLogs = () => {
    setAnalyzing(true);
    
    // Simulate AI analysis with realistic results
    setTimeout(() => {
      const result = {
        summary: {
          totalEvents: 15,
          criticalThreats: 2,
          warnings: 8,
          normalActivity: 5,
          timeRange: "Last 24 hours"
        },
        threats: [
          {
            severity: "High",
            type: "RDP Brute Force Attack",
            source: "203.0.113.45",
            target: "192.168.1.100:3389",
            count: 6,
            description: "Repeated RDP connection attempts from suspicious external IP. Pattern indicates automated scanning/brute force."
          },
          {
            severity: "High",
            type: "SSH Brute Force Attack",
            source: "185.220.101.33",
            target: "192.168.1.10:22",
            count: 6,
            description: "Multiple SSH connection attempts blocked. Source IP is known for malicious activity."
          },
          {
            severity: "Medium",
            type: "ICMP Scan",
            source: "203.0.113.78",
            target: "Network",
            count: 1,
            description: "ICMP ping sweep detected. Possible reconnaissance activity."
          }
        ],
        remediation: [
          {
            priority: "Immediate",
            action: "Block IP 203.0.113.45",
            command: "access-list outside_in deny ip host 203.0.113.45 any",
            reason: "Active RDP brute force attack"
          },
          {
            priority: "Immediate",
            action: "Block IP 185.220.101.33",
            command: "access-list outside_in deny ip host 185.220.101.33 any",
            reason: "Active SSH brute force attack"
          },
          {
            priority: "High",
            action: "Enable Rate Limiting on RDP/SSH",
            command: "threat-detection rate auth-rate 5 rate-interval 300",
            reason: "Prevent future brute force attempts"
          },
          {
            priority: "Medium",
            action: "Review ICMP Policy",
            command: "Review and consider blocking ICMP from untrusted zones",
            reason: "Limit reconnaissance capabilities"
          }
        ],
        charts: {
          eventTypes: [
            { name: 'Denied TCP', value: 11, color: '#ef4444' },
            { name: 'Allowed TCP', value: 2, color: '#10b981' },
            { name: 'Denied ICMP', value: 1, color: '#f59e0b' },
            { name: 'Denied UDP', value: 1, color: '#f59e0b' }
          ],
          timeline: [
            { time: '00:00', events: 2 },
            { time: '04:00', events: 1 },
            { time: '08:00', events: 3 },
            { time: '12:00', events: 5 },
            { time: '16:00', events: 2 },
            { time: '20:00', events: 2 }
          ],
          topSources: [
            { ip: '203.0.113.45', count: 6 },
            { ip: '185.220.101.33', count: 6 },
            { ip: '203.0.113.78', count: 1 },
            { ip: '45.142.212.61', count: 1 },
            { ip: '198.51.100.22', count: 1 }
          ]
        }
      };
      
      setAnalysis(result);
      setAnalyzing(false);
    }, 2000);
  };

  const COLORS = ['#ef4444', '#10b981', '#f59e0b', '#3b82f6'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-blue-400" />
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                NetMind AI
              </h1>
              <p className="text-xs text-slate-400">Network Security Copilot</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Activity className="w-4 h-4" />
            <span>Powered by Claude AI</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {!analysis ? (
          /* Upload Section */
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-3">Analyze Your Network Logs</h2>
              <p className="text-slate-400">
                Upload firewall logs or use our sample data to see AI-powered security analysis in action
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 mb-6">
              <div className="border-2 border-dashed border-slate-600 rounded-lg p-12 text-center hover:border-blue-500 transition-colors cursor-pointer">
                <Upload className="w-12 h-12 mx-auto mb-4 text-slate-500" />
                <p className="text-lg mb-2">Drop your log files here</p>
                <p className="text-sm text-slate-400 mb-4">or click to browse</p>
                <p className="text-xs text-slate-500">Supports: .log, .txt, syslog format</p>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={analyzeLogs}
                disabled={analyzing}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {analyzing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Analyzing Logs...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    Analyze Sample Logs
                  </>
                )}
              </button>
              <p className="text-xs text-slate-500 mt-3">
                Demo mode: Analyzing realistic Cisco ASA/FTD sample logs
              </p>
            </div>

            {/* Feature Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4 text-center">
                <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                <h3 className="font-semibold mb-1">Threat Detection</h3>
                <p className="text-xs text-slate-400">AI identifies brute force, scans, anomalies</p>
              </div>
              <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4 text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-400" />
                <h3 className="font-semibold mb-1">Visual Analytics</h3>
                <p className="text-xs text-slate-400">Interactive charts and trend analysis</p>
              </div>
              <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4 text-center">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                <h3 className="font-semibold mb-1">Auto Remediation</h3>
                <p className="text-xs text-slate-400">Get CLI commands to fix issues instantly</p>
              </div>
            </div>
          </div>
        ) : (
          /* Analysis Results */
          <div className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-400">Total Events</span>
                  <FileText className="w-5 h-5 text-blue-400" />
                </div>
                <p className="text-3xl font-bold">{analysis.summary.totalEvents}</p>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-red-300">Critical Threats</span>
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                </div>
                <p className="text-3xl font-bold text-red-400">{analysis.summary.criticalThreats}</p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-yellow-300">Warnings</span>
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                </div>
                <p className="text-3xl font-bold text-yellow-400">{analysis.summary.warnings}</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-green-300">Normal Activity</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-3xl font-bold text-green-400">{analysis.summary.normalActivity}</p>
              </div>
            </div>

            {/* AI Analysis Summary */}
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Zap className="w-6 h-6 text-blue-400" />
                AI Security Summary
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Analysis of your network logs reveals <strong className="text-red-400">2 active brute force attacks</strong> targeting 
                RDP and SSH services from external IPs. The attacks show patterns consistent with automated scanning tools. 
                Additionally, reconnaissance activity via ICMP has been detected. Immediate action recommended to block 
                malicious source IPs and implement rate limiting.
              </p>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Event Distribution</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={analysis.charts.eventTypes}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {analysis.charts.eventTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Event Timeline</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={analysis.charts.timeline}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="time" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
                    <Line type="monotone" dataKey="events" stroke="#3b82f6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Top Source IPs</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={analysis.charts.topSources}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="ip" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
                  <Bar dataKey="count" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Detected Threats */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                Detected Threats
              </h3>
              <div className="space-y-3">
                {analysis.threats.map((threat, idx) => (
                  <div key={idx} className="bg-slate-900/50 border border-slate-600 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className={`inline-block px-2 py-1 rounded text-xs font-semibold mb-2 ${
                          threat.severity === 'High' ? 'bg-red-500/20 text-red-300' : 'bg-yellow-500/20 text-yellow-300'
                        }`}>
                          {threat.severity} Severity
                        </span>
                        <h4 className="font-semibold text-lg">{threat.type}</h4>
                      </div>
                      <span className="bg-slate-700 px-3 py-1 rounded-full text-sm">{threat.count} attempts</span>
                    </div>
                    <div className="text-sm text-slate-400 space-y-1">
                      <p><strong className="text-slate-300">Source:</strong> {threat.source}</p>
                      <p><strong className="text-slate-300">Target:</strong> {threat.target}</p>
                      <p className="mt-2">{threat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Remediation Actions */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                Recommended Actions
              </h3>
              <div className="space-y-3">
                {analysis.remediation.map((action, idx) => (
                  <div key={idx} className="bg-slate-900/50 border border-slate-600 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className={`inline-block px-2 py-1 rounded text-xs font-semibold mb-2 ${
                          action.priority === 'Immediate' ? 'bg-red-500/20 text-red-300' :
                          action.priority === 'High' ? 'bg-orange-500/20 text-orange-300' :
                          'bg-blue-500/20 text-blue-300'
                        }`}>
                          {action.priority} Priority
                        </span>
                        <h4 className="font-semibold">{action.action}</h4>
                      </div>
                    </div>
                    <div className="bg-slate-950 border border-slate-700 rounded p-3 mb-2 font-mono text-sm text-green-400">
                      {action.command}
                    </div>
                    <p className="text-sm text-slate-400">{action.reason}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="text-center pt-4">
              <button
                onClick={() => setAnalysis(null)}
                className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Analyze New Logs
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NetMindAI;