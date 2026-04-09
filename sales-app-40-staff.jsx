import React, { useState } from 'react';
import { LogOut, Plus, Trash2, Lock, Eye, EyeOff, Home, Calendar, Navigation, FileText, Save, X, Users } from 'lucide-react';

export default function ThanhSonSalesApp() {
  // 40 EMPLOYEE ACCOUNTS
  const validUsers = [
    // ADMIN (2)
    { id: 1, email: 'admin1@gmail.com', password: 'K1en_Lua@2024', name: 'Lê Văn A', phone: '0987654321', role: 'admin' },
    { id: 2, email: 'admin2@gmail.com', password: 'K1en_Lua@2024', name: 'Trần Thị B', phone: '0987654322', role: 'admin' },
    
    // SALES ADMIN (8)
    { id: 3, email: 'salesadmin1@gmail.com', password: 'K1en_Lua@2024', name: 'Phạm Văn C', phone: '0987654323', role: 'salesadmin' },
    { id: 4, email: 'salesadmin2@gmail.com', password: 'K1en_Lua@2024', name: 'Nguyễn Thị D', phone: '0987654324', role: 'salesadmin' },
    { id: 5, email: 'salesadmin3@gmail.com', password: 'K1en_Lua@2024', name: 'Hoàng Văn E', phone: '0987654325', role: 'salesadmin' },
    { id: 6, email: 'salesadmin4@gmail.com', password: 'K1en_Lua@2024', name: 'Vũ Thị F', phone: '0987654326', role: 'salesadmin' },
    { id: 7, email: 'salesadmin5@gmail.com', password: 'K1en_Lua@2024', name: 'Dương Văn G', phone: '0987654327', role: 'salesadmin' },
    { id: 8, email: 'salesadmin6@gmail.com', password: 'K1en_Lua@2024', name: 'Bùi Thị H', phone: '0987654328', role: 'salesadmin' },
    { id: 9, email: 'salesadmin7@gmail.com', password: 'K1en_Lua@2024', name: 'Tạ Văn I', phone: '0987654329', role: 'salesadmin' },
    { id: 10, email: 'salesadmin8@gmail.com', password: 'K1en_Lua@2024', name: 'Lương Thị J', phone: '0987654330', role: 'salesadmin' },
    
    // SALES STAFF (30)
    { id: 11, email: 'staff1@gmail.com', password: 'K1en_Lua@2024', name: 'Kiều Văn K', phone: '0987654331', role: 'salesstaff' },
    { id: 12, email: 'staff2@gmail.com', password: 'K1en_Lua@2024', name: 'Phan Thị L', phone: '0987654332', role: 'salesstaff' },
    { id: 13, email: 'staff3@gmail.com', password: 'K1en_Lua@2024', name: 'Quách Văn M', phone: '0987654333', role: 'salesstaff' },
    { id: 14, email: 'staff4@gmail.com', password: 'K1en_Lua@2024', name: 'Rạch Thị N', phone: '0987654334', role: 'salesstaff' },
    { id: 15, email: 'staff5@gmail.com', password: 'K1en_Lua@2024', name: 'Sơn Văn O', phone: '0987654335', role: 'salesstaff' },
    { id: 16, email: 'staff6@gmail.com', password: 'K1en_Lua@2024', name: 'Trương Thị P', phone: '0987654336', role: 'salesstaff' },
    { id: 17, email: 'staff7@gmail.com', password: 'K1en_Lua@2024', name: 'Uyên Văn Q', phone: '0987654337', role: 'salesstaff' },
    { id: 18, email: 'staff8@gmail.com', password: 'K1en_Lua@2024', name: 'Võ Thị R', phone: '0987654338', role: 'salesstaff' },
    { id: 19, email: 'staff9@gmail.com', password: 'K1en_Lua@2024', name: 'Xương Văn S', phone: '0987654339', role: 'salesstaff' },
    { id: 20, email: 'staff10@gmail.com', password: 'K1en_Lua@2024', name: 'Yên Thị T', phone: '0987654340', role: 'salesstaff' },
    { id: 21, email: 'staff11@gmail.com', password: 'K1en_Lua@2024', name: 'Zita Văn U', phone: '0987654341', role: 'salesstaff' },
    { id: 22, email: 'staff12@gmail.com', password: 'K1en_Lua@2024', name: 'Anh Thị V', phone: '0987654342', role: 'salesstaff' },
    { id: 23, email: 'staff13@gmail.com', password: 'K1en_Lua@2024', name: 'Bảo Văn W', phone: '0987654343', role: 'salesstaff' },
    { id: 24, email: 'staff14@gmail.com', password: 'K1en_Lua@2024', name: 'Cường Thị X', phone: '0987654344', role: 'salesstaff' },
    { id: 25, email: 'staff15@gmail.com', password: 'K1en_Lua@2024', name: 'Đạt Văn Y', phone: '0987654345', role: 'salesstaff' },
    { id: 26, email: 'staff16@gmail.com', password: 'K1en_Lua@2024', name: 'Erm Thị Z', phone: '0987654346', role: 'salesstaff' },
    { id: 27, email: 'staff17@gmail.com', password: 'K1en_Lua@2024', name: 'Phúc Văn AA', phone: '0987654347', role: 'salesstaff' },
    { id: 28, email: 'staff18@gmail.com', password: 'K1en_Lua@2024', name: 'Giang Thị BB', phone: '0987654348', role: 'salesstaff' },
    { id: 29, email: 'staff19@gmail.com', password: 'K1en_Lua@2024', name: 'Huy Văn CC', phone: '0987654349', role: 'salesstaff' },
    { id: 30, email: 'staff20@gmail.com', password: 'K1en_Lua@2024', name: 'Ích Thị DD', phone: '0987654350', role: 'salesstaff' },
    { id: 31, email: 'staff21@gmail.com', password: 'K1en_Lua@2024', name: 'Jolie Văn EE', phone: '0987654351', role: 'salesstaff' },
    { id: 32, email: 'staff22@gmail.com', password: 'K1en_Lua@2024', name: 'Khanh Thị FF', phone: '0987654352', role: 'salesstaff' },
    { id: 33, email: 'staff23@gmail.com', password: 'K1en_Lua@2024', name: 'Lâm Văn GG', phone: '0987654353', role: 'salesstaff' },
    { id: 34, email: 'staff24@gmail.com', password: 'K1en_Lua@2024', name: 'Mây Thị HH', phone: '0987654354', role: 'salesstaff' },
    { id: 35, email: 'staff25@gmail.com', password: 'K1en_Lua@2024', name: 'Nam Văn II', phone: '0987654355', role: 'salesstaff' },
    { id: 36, email: 'staff26@gmail.com', password: 'K1en_Lua@2024', name: 'Omai Thị JJ', phone: '0987654356', role: 'salesstaff' },
    { id: 37, email: 'staff27@gmail.com', password: 'K1en_Lua@2024', name: 'Phượng Văn KK', phone: '0987654357', role: 'salesstaff' },
    { id: 38, email: 'staff28@gmail.com', password: 'K1en_Lua@2024', name: 'Quỳnh Thị LL', phone: '0987654358', role: 'salesstaff' },
    { id: 39, email: 'staff29@gmail.com', password: 'K1en_Lua@2024', name: 'Rồng Văn MM', phone: '0987654359', role: 'salesstaff' },
    { id: 40, email: 'staff30@gmail.com', password: 'K1en_Lua@2024', name: 'Sắc Thị NN', phone: '0987694360', role: 'salesstaff' },
  ];

  const [currentUser, setCurrentUser] = useState(null);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [activeNav, setActiveNav] = useState('dashboard');

  const roleConfig = {
    admin: { label: '🟠 Admin Cao Cấp', color: 'bg-orange-600', textColor: 'text-orange-300' },
    salesadmin: { label: '🟡 Sales Admin', color: 'bg-amber-500', textColor: 'text-amber-300' },
    salesstaff: { label: '🟡 Sales Staff', color: 'bg-orange-500', textColor: 'text-orange-300' }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');
    const user = validUsers.find(u => u.email === loginEmail && u.password === loginPassword);
    if (user) {
      setCurrentUser(user);
      setLoginEmail('');
      setLoginPassword('');
      setActiveNav('dashboard');
    } else {
      setLoginError('❌ Email hoặc mật khẩu không chính xác!');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  // Login View
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-orange-800 to-amber-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-400 flex items-center justify-center">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">🟠 Thanh Son Sales Management</h1>
            <p className="text-amber-200/60">Quản Lý Bán Hàng Chuyên Nghiệp</p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8">
            <form onSubmit={handleLogin}>
              <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="Email Gmail" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 mb-4"
              />
              <div className="relative mb-6">
                <input type={showPassword ? 'text' : 'password'} value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Mật khẩu" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {loginError && <div className="mb-4 p-3 bg-orange-500/20 border border-orange-500/50 rounded-lg">
                <p className="text-orange-300 text-sm">{loginError}</p>
              </div>}
              <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold py-3 rounded-lg hover:from-orange-600 hover:to-amber-600">
                🔓 Đăng Nhập
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-white/60 text-sm mb-3 font-semibold">🟠 Demo Accounts:</p>
              <div className="space-y-2 text-xs">
                <div className="bg-orange-500/20 p-2 rounded">
                  <p className="text-orange-300">Admin: <span className="font-mono">admin1@gmail.com</span></p>
                </div>
                <div className="bg-amber-500/20 p-2 rounded">
                  <p className="text-amber-300">Sales Admin: <span className="font-mono">salesadmin1@gmail.com</span></p>
                </div>
                <div className="bg-orange-500/20 p-2 rounded">
                  <p className="text-orange-300">Staff: <span className="font-mono">staff1@gmail.com</span></p>
                </div>
                <div className="bg-white/5 p-2 rounded">
                  <p className="text-amber-200/70">Password: <span className="font-mono">K1en_Lua@2024</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main App
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-orange-800 to-amber-900">
      {/* Header */}
      <div className="sticky top-0 z-40 backdrop-blur-md bg-orange-900/80 border-b border-orange-400/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg ${roleConfig[currentUser.role].color} flex items-center justify-center`}>
              {currentUser.role === 'admin' && <Users className="w-6 h-6 text-white" />}
              {currentUser.role !== 'admin' && <FileText className="w-6 h-6 text-white" />}
            </div>
            <div>
              <h1 className="text-white font-bold">🟠 Thanh Son Sales Management</h1>
              <p className="text-amber-200/60 text-xs">{currentUser.name} • {roleConfig[currentUser.role].label}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-white text-sm">{currentUser.phone}</p>
              <p className="text-amber-200/60 text-xs">{currentUser.email}</p>
            </div>
            <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 rounded-lg transition-colors">
              <LogOut size={18} /> Đăng Xuất
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white/5 border-b border-orange-400/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 py-2 overflow-x-auto">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: Home },
              currentUser.role === 'admin' && { id: 'staff', label: 'Nhân Viên', icon: Users },
              { id: 'data', label: 'Dữ Liệu', icon: FileText }
            ].filter(Boolean).map(nav => (
              <button key={nav.id} onClick={() => setActiveNav(nav.id)}
                className={`px-4 py-3 rounded-lg flex items-center gap-2 whitespace-nowrap ${
                  activeNav === nav.id ? 'bg-orange-500/20 text-orange-300' : 'text-amber-200/60 hover:text-orange-300'
                }`}
              >
                <nav.icon size={18} /> {nav.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeNav === 'dashboard' && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">🟠 Dashboard Thanh Son</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <p className="text-amber-200/60 text-sm">Tổng Nhân Viên</p>
                <p className="text-4xl font-bold text-white">40</p>
                <p className="text-orange-400 text-sm mt-2">✅ Hoàn toàn sẵn sàng</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <p className="text-amber-200/60 text-sm">Admin</p>
                <p className="text-4xl font-bold text-orange-400">2</p>
                <p className="text-amber-200/60 text-sm mt-2">Quản lý hệ thống</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <p className="text-amber-200/60 text-sm">Sales Admin + Staff</p>
                <p className="text-4xl font-bold text-orange-400">38</p>
                <p className="text-amber-200/60 text-sm mt-2">8 Admin + 30 Staff</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-4">📊 Thông Tin Tài Khoản Của Bạn</h3>
              <div className="bg-white/10 rounded-2xl border border-white/20 p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-amber-200/60 text-sm">Tên</p>
                    <p className="text-white font-bold text-lg">{currentUser.name}</p>
                  </div>
                  <div>
                    <p className="text-amber-200/60 text-sm">Quyền Hạn</p>
                    <p className={`font-bold text-lg ${roleConfig[currentUser.role].textColor}`}>{roleConfig[currentUser.role].label}</p>
                  </div>
                  <div>
                    <p className="text-amber-200/60 text-sm">Email</p>
                    <p className="text-white font-mono text-sm">{currentUser.email}</p>
                  </div>
                  <div>
                    <p className="text-amber-200/60 text-sm">SĐT</p>
                    <p className="text-white font-semibold">{currentUser.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeNav === 'staff' && currentUser.role === 'admin' && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">👥 Danh Sách 40 Nhân Viên</h2>
            
            <div className="space-y-4">
              {/* Admin Section */}
              <div>
                <h3 className="text-xl font-bold text-orange-400 mb-3">🟠 Admin (2)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {validUsers.filter(u => u.role === 'admin').map(user => (
                    <div key={user.id} className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
                      <p className="text-white font-bold">{user.name}</p>
                      <p className="text-orange-300 text-sm">{user.email}</p>
                      <p className="text-orange-300 text-sm">{user.phone}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sales Admin Section */}
              <div className="mt-6">
                <h3 className="text-xl font-bold text-amber-400 mb-3">🟡 Sales Admin (8)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {validUsers.filter(u => u.role === 'salesadmin').map(user => (
                    <div key={user.id} className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                      <p className="text-white font-bold">{user.name}</p>
                      <p className="text-amber-300 text-sm">{user.email}</p>
                      <p className="text-amber-300 text-sm">{user.phone}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sales Staff Section */}
              <div className="mt-6">
                <h3 className="text-xl font-bold text-orange-400 mb-3">🟡 Sales Staff (30)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-h-96 overflow-y-auto">
                  {validUsers.filter(u => u.role === 'salesstaff').map(user => (
                    <div key={user.id} className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-3">
                      <p className="text-white font-bold text-sm">{user.name}</p>
                      <p className="text-orange-300 text-xs">{user.email}</p>
                      <p className="text-orange-300 text-xs">{user.phone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeNav === 'data' && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">📊 Dữ Liệu Nhân Viên</h2>
            
            <div className="bg-white/10 rounded-2xl border border-white/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">✅ Thông Tin Tài Khoản</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left text-amber-200/60 py-2 px-3">ID</th>
                      <th className="text-left text-amber-200/60 py-2 px-3">Tên</th>
                      <th className="text-left text-amber-200/60 py-2 px-3">Email Gmail</th>
                      <th className="text-left text-amber-200/60 py-2 px-3">SĐT</th>
                      <th className="text-left text-amber-200/60 py-2 px-3">Quyền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {validUsers.map(user => (
                      <tr key={user.id} className="border-b border-white/10 hover:bg-white/5">
                        <td className="text-white py-2 px-3 font-semibold">#{user.id}</td>
                        <td className="text-white py-2 px-3">{user.name}</td>
                        <td className="text-orange-300 py-2 px-3 font-mono text-xs">{user.email}</td>
                        <td className="text-white py-2 px-3">{user.phone}</td>
                        <td className="py-2 px-3">
                          <span className={`px-2 py-1 rounded text-xs font-bold ${
                            user.role === 'admin' ? 'bg-orange-500/20 text-orange-300' :
                            user.role === 'salesadmin' ? 'bg-amber-500/20 text-amber-300' :
                            'bg-orange-500/20 text-orange-300'
                          }`}>
                            {user.role === 'admin' ? '🟠 Admin' :
                             user.role === 'salesadmin' ? '🟡 Sales Admin' :
                             '🟡 Staff'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-amber-200/60 text-sm mb-3">📌 Ghi Chú:</p>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <p className="text-white text-sm mb-2">✅ Tất cả 40 tài khoản đã được tạo</p>
                  <p className="text-white text-sm mb-2">✅ Password ban đầu: <span className="font-mono text-yellow-300">K1en_Lua@2024</span></p>
                  <p className="text-white text-sm mb-2">✅ Email: staff1-40@gmail.com (Demo)</p>
                  <p className="text-white text-sm">⚠️ Cần update email + SĐT thực tế theo danh sách công ty</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
