
import { DashboardHeader } from "./DashboardHeader";
import { DashboardStats } from "./DashboardStats";
import { AppointmentsTab } from "./AppointmentsTab";
import { CustomersTab } from "./CustomersTab";
import { ContactSubmissions } from "./ContactSubmissions";
import { FinancesTab } from "./FinancesTab";
import { SettingsTab } from "./SettingsTab";
import { StaffManagementTab } from "./StaffManagementTab";
import { AnalyticsTab } from "./AnalyticsTab";
import { ReviewsTab } from "./ReviewsTab";
import { PromotionsTab } from "./PromotionsTab";
import { NotificationsTab } from "./NotificationsTab";
import { ReportsTab } from "./ReportsTab";
import { ScheduleTab } from "./ScheduleTab";
import { GoalsTab } from "./GoalsTab";
import { AchievementsTab } from "./AchievementsTab";
import { SecurityTab } from "./SecurityTab";

interface DashboardContentProps {
  activeTab: string;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  appointments: any[];
  customers: any[];
  contactCount: number;
  filteredAppointments: any[];
  filteredCustomers: any[];
  formatDate: (dateString: string) => string;
}

export const DashboardContent = ({
  activeTab,
  searchTerm,
  setSearchTerm,
  appointments,
  customers,
  contactCount,
  filteredAppointments,
  filteredCustomers,
  formatDate
}: DashboardContentProps) => {
  const renderActiveContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-8">
            <DashboardStats 
              appointmentsCount={appointments.length}
              customersCount={customers.length}
              weeklyRevenue="$2,450"
              unreadMessagesCount={contactCount}
            />
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 overflow-hidden backdrop-blur-sm">
                <div className="px-6 py-4 border-b border-gray-200/60 bg-gradient-to-r from-gray-50 to-white">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Appointments</h3>
                </div>
                <div className="p-6">
                  <AppointmentsTab 
                    appointments={filteredAppointments.slice(0, 5)} 
                    formatDate={formatDate} 
                  />
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 overflow-hidden backdrop-blur-sm">
                <div className="px-6 py-4 border-b border-gray-200/60 bg-gradient-to-r from-gray-50 to-white">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Customers</h3>
                </div>
                <div className="p-6">
                  <CustomersTab customers={filteredCustomers.slice(0, 5)} />
                </div>
              </div>
            </div>
          </div>
        );
      case "appointments":
        return (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 backdrop-blur-sm">
            <div className="px-6 py-4 border-b border-gray-200/60 bg-gradient-to-r from-gray-50 to-white">
              <h2 className="text-xl font-semibold text-gray-900">All Appointments</h2>
            </div>
            <div className="p-6">
              <AppointmentsTab appointments={filteredAppointments} formatDate={formatDate} />
            </div>
          </div>
        );
      case "customers":
        return (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 backdrop-blur-sm">
            <div className="px-6 py-4 border-b border-gray-200/60 bg-gradient-to-r from-gray-50 to-white">
              <h2 className="text-xl font-semibold text-gray-900">All Customers</h2>
            </div>
            <div className="p-6">
              <CustomersTab customers={filteredCustomers} />
            </div>
          </div>
        );
      case "staff":
        return (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 backdrop-blur-sm">
            <div className="px-6 py-4 border-b border-gray-200/60 bg-gradient-to-r from-gray-50 to-white">
              <h2 className="text-xl font-semibold text-gray-900">Staff Management</h2>
            </div>
            <div className="p-6">
              <StaffManagementTab />
            </div>
          </div>
        );
      case "finances":
        return (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 backdrop-blur-sm">
            <div className="px-6 py-4 border-b border-gray-200/60 bg-gradient-to-r from-gray-50 to-white">
              <h2 className="text-xl font-semibold text-gray-900">Financial Overview</h2>
            </div>
            <div className="p-6">
              <FinancesTab />
            </div>
          </div>
        );
      case "analytics":
        return (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 backdrop-blur-sm">
            <div className="px-6 py-4 border-b border-gray-200/60 bg-gradient-to-r from-gray-50 to-white">
              <h2 className="text-xl font-semibold text-gray-900">Analytics Dashboard</h2>
            </div>
            <div className="p-6">
              <AnalyticsTab />
            </div>
          </div>
        );
      case "reviews":
        return (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 backdrop-blur-sm">
            <div className="px-6 py-4 border-b border-gray-200/60 bg-gradient-to-r from-gray-50 to-white">
              <h2 className="text-xl font-semibold text-gray-900">Customer Reviews</h2>
            </div>
            <div className="p-6">
              <ReviewsTab />
            </div>
          </div>
        );
      case "promotions":
        return (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 backdrop-blur-sm">
            <div className="px-6 py-4 border-b border-gray-200/60 bg-gradient-to-r from-gray-50 to-white">
              <h2 className="text-xl font-semibold text-gray-900">Promotions & Offers</h2>
            </div>
            <div className="p-6">
              <PromotionsTab />
            </div>
          </div>
        );
      case "notifications":
        return (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 backdrop-blur-sm">
            <div className="px-6 py-4 border-b border-gray-200/60 bg-gradient-to-r from-gray-50 to-white">
              <h2 className="text-xl font-semibold text-gray-900">Notifications Center</h2>
            </div>
            <div className="p-6">
              <NotificationsTab />
            </div>
          </div>
        );
      case "contact":
        return (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 backdrop-blur-sm">
            <ContactSubmissions />
          </div>
        );
      case "reports":
        return (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 backdrop-blur-sm">
            <div className="px-6 py-4 border-b border-gray-200/60 bg-gradient-to-r from-gray-50 to-white">
              <h2 className="text-xl font-semibold text-gray-900">Business Reports</h2>
            </div>
            <div className="p-6">
              <ReportsTab />
            </div>
          </div>
        );
      case "schedule":
        return (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 backdrop-blur-sm">
            <div className="px-6 py-4 border-b border-gray-200/60 bg-gradient-to-r from-gray-50 to-white">
              <h2 className="text-xl font-semibold text-gray-900">Schedule Management</h2>
            </div>
            <div className="p-6">
              <ScheduleTab />
            </div>
          </div>
        );
      case "goals":
        return (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 backdrop-blur-sm">
            <div className="px-6 py-4 border-b border-gray-200/60 bg-gradient-to-r from-gray-50 to-white">
              <h2 className="text-xl font-semibold text-gray-900">Business Goals</h2>
            </div>
            <div className="p-6">
              <GoalsTab />
            </div>
          </div>
        );
      case "achievements":
        return (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 backdrop-blur-sm">
            <div className="px-6 py-4 border-b border-gray-200/60 bg-gradient-to-r from-gray-50 to-white">
              <h2 className="text-xl font-semibold text-gray-900">Achievements & Milestones</h2>
            </div>
            <div className="p-6">
              <AchievementsTab />
            </div>
          </div>
        );
      case "security":
        return (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 backdrop-blur-sm">
            <div className="px-6 py-4 border-b border-gray-200/60 bg-gradient-to-r from-gray-50 to-white">
              <h2 className="text-xl font-semibold text-gray-900">Security & Access Control</h2>
            </div>
            <div className="p-6">
              <SecurityTab />
            </div>
          </div>
        );
      case "settings":
        return (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 backdrop-blur-sm">
            <div className="px-6 py-4 border-b border-gray-200/60 bg-gradient-to-r from-gray-50 to-white">
              <h2 className="text-xl font-semibold text-gray-900">System Settings</h2>
            </div>
            <div className="p-6">
              <SettingsTab />
            </div>
          </div>
        );
      default:
        return (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 backdrop-blur-sm p-8 text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Feature Coming Soon</h2>
            <p className="text-gray-600">This feature is currently under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="p-6 lg:p-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {activeTab === "dashboard" && (
          <DashboardHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        )}
        
        <div>
          {renderActiveContent()}
        </div>
      </div>
    </div>
  );
};
