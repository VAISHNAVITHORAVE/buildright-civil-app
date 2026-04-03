import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  FileText, 
  FolderKanban, 
  Settings, 
  LogOut,
  Building2,
  Eye,
  Trash2,
  CheckCircle,
  Clock,
  Users,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface Inquiry {
  id: string;
  client_name: string;
  mobile: string;
  email: string;
  construction_type: string;
  plot_size: string;
  budget: string;
  location: string;
  requirements: string | null;
  status: string;
  created_at: string;
}

const AdminDashboard = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("inquiries");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [stats, setStats] = useState({ total: 0, pending: 0, completed: 0 });
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (!session) {
          navigate("/admin");
        }
      }
    );

    checkAuth();
    fetchInquiries();

    return () => subscription.unsubscribe();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/admin");
      return;
    }

    const { data: isAdmin } = await supabase.rpc('has_role', {
      _user_id: session.user.id,
      _role: 'admin'
    });

    if (!isAdmin) {
      await supabase.auth.signOut();
      navigate("/admin");
    }
  };

  const fetchInquiries = async () => {
    try {
      const { data, error } = await supabase
        .from("inquiries")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setInquiries(data || []);
      
      // Calculate stats
      const total = data?.length || 0;
      const pending = data?.filter(i => i.status === 'pending').length || 0;
      const completed = data?.filter(i => i.status === 'completed').length || 0;
      setStats({ total, pending, completed });
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch inquiries",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from("inquiries")
        .update({ status })
        .eq("id", id);

      if (error) throw error;

      setInquiries(prev => 
        prev.map(i => i.id === id ? { ...i, status } : i)
      );

      toast({
        title: "Status Updated",
        description: `Inquiry marked as ${status}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive",
      });
    }
  };

  const deleteInquiry = async (id: string) => {
    try {
      const { error } = await supabase
        .from("inquiries")
        .delete()
        .eq("id", id);

      if (error) throw error;

      setInquiries(prev => prev.filter(i => i.id !== id));
      setSelectedInquiry(null);

      toast({
        title: "Deleted",
        description: "Inquiry deleted successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete inquiry",
        variant: "destructive",
      });
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  const menuItems = [
    { id: "inquiries", label: "Inquiries", icon: FileText },
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-foreground/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform lg:transform-none ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-bold text-foreground">BuildRight</div>
                <div className="text-xs text-muted-foreground">Admin Panel</div>
              </div>
            </div>
            <button 
              className="lg:hidden text-muted-foreground"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>

          {/* Sign Out */}
          <div className="p-4 border-t border-border">
            <button
              onClick={handleSignOut}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden text-foreground"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold text-foreground capitalize">{activeTab}</h1>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          {activeTab === "inquiries" && (
            <>
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="card-elevated p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{stats.total}</div>
                      <div className="text-sm text-muted-foreground">Total Inquiries</div>
                    </div>
                  </div>
                </div>
                <div className="card-elevated p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{stats.pending}</div>
                      <div className="text-sm text-muted-foreground">Pending</div>
                    </div>
                  </div>
                </div>
                <div className="card-elevated p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{stats.completed}</div>
                      <div className="text-sm text-muted-foreground">Completed</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="card-elevated overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Client</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Budget</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {isLoading ? (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-8">
                          Loading...
                        </TableCell>
                      </TableRow>
                    ) : inquiries.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                          No inquiries yet
                        </TableCell>
                      </TableRow>
                    ) : (
                      inquiries.map((inquiry) => (
                        <TableRow key={inquiry.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium text-foreground">{inquiry.client_name}</div>
                              <div className="text-sm text-muted-foreground">{inquiry.email}</div>
                            </div>
                          </TableCell>
                          <TableCell>{inquiry.construction_type}</TableCell>
                          <TableCell>{inquiry.location}</TableCell>
                          <TableCell>{inquiry.budget}</TableCell>
                          <TableCell>
                            <Badge variant={inquiry.status === 'completed' ? 'default' : 'secondary'}>
                              {inquiry.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {new Date(inquiry.created_at).toLocaleDateString()}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => setSelectedInquiry(inquiry)}
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => updateStatus(inquiry.id, inquiry.status === 'pending' ? 'completed' : 'pending')}
                              >
                                <CheckCircle className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="text-destructive"
                                onClick={() => deleteInquiry(inquiry.id)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </>
          )}

          {activeTab === "projects" && (
            <div className="card-elevated p-8 text-center">
              <FolderKanban className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Projects Management</h3>
              <p className="text-muted-foreground">
                Project management features coming soon. You'll be able to add, edit, and manage your portfolio projects here.
              </p>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="card-elevated p-8 text-center">
              <Settings className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Settings</h3>
              <p className="text-muted-foreground">
                Admin settings coming soon. You'll be able to configure site settings and preferences here.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Inquiry Detail Modal */}
      <Dialog open={!!selectedInquiry} onOpenChange={() => setSelectedInquiry(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Inquiry Details</DialogTitle>
          </DialogHeader>
          {selectedInquiry && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Client Name</div>
                  <div className="font-medium text-foreground">{selectedInquiry.client_name}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Mobile</div>
                  <div className="font-medium text-foreground">{selectedInquiry.mobile}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium text-foreground">{selectedInquiry.email}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Construction Type</div>
                  <div className="font-medium text-foreground">{selectedInquiry.construction_type}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Plot Size</div>
                  <div className="font-medium text-foreground">{selectedInquiry.plot_size}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Budget</div>
                  <div className="font-medium text-foreground">{selectedInquiry.budget}</div>
                </div>
                <div className="col-span-2">
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-medium text-foreground">{selectedInquiry.location}</div>
                </div>
              </div>
              {selectedInquiry.requirements && (
                <div>
                  <div className="text-sm text-muted-foreground">Special Requirements</div>
                  <div className="font-medium text-foreground mt-1 p-3 bg-muted rounded-lg">
                    {selectedInquiry.requirements}
                  </div>
                </div>
              )}
              <div className="flex gap-3 pt-4">
                <Button
                  className="flex-1"
                  onClick={() => {
                    updateStatus(selectedInquiry.id, 'completed');
                    setSelectedInquiry(null);
                  }}
                >
                  Mark as Completed
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSelectedInquiry(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
