import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'; // Import toast

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: '',
    bio: '',
    phone: '',
    jobTitle: ''
  });

  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const config = { headers: { 'x-auth-token': token } };

  useEffect(() => {
    if (!token) navigate('/');
    fetchUser();
    fetchTasks();
    // eslint-disable-next-line
  }, [navigate, token]);

  const fetchUser = async () => {
    try { 
      const res = await axios.get('http://localhost:5001/api/v1/me', config); 
      setUser(res.data);
      setProfileData({
        name: res.data.name || '',
        bio: res.data.bio || '',
        phone: res.data.phone || '',
        jobTitle: res.data.jobTitle || ''
      });
    } catch { 
      localStorage.removeItem('token');
      navigate('/'); 
    }
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put('http://localhost:5001/api/v1/me', profileData, config);
      setUser(res.data); 
      setIsEditing(false); 
      toast.success("Profile updated successfully!"); // Toast added
    } catch (err) {
      console.error(err);
      toast.error("Error updating profile"); // Toast added
    }
  };

  const fetchTasks = async () => {
    try { const res = await axios.get('http://localhost:5001/api/v1/tasks', config); setTasks(res.data); }
    catch (err) { console.error(err); }
  };

  const addTask = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/api/v1/tasks', newTask, config);
      setTasks([res.data, ...tasks]);
      setNewTask({ title: '', description: '' });
      toast.success("Task added!"); // Toast added
    } catch (err) { 
        console.error(err);
        toast.error("Failed to add task");
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/v1/tasks/${id}`, config);
      setTasks(tasks.filter(task => task._id !== id));
      toast.success("Task deleted"); // Toast added
    } catch (err) { 
        console.error(err);
        toast.error("Failed to delete task");
    }
  };

  const toggleStatus = async (task) => {
    try {
        const newStatus = task.status === 'Pending' ? 'Completed' : 'Pending';
        const res = await axios.put(`http://localhost:5001/api/v1/tasks/${task._id}`, { ...task, status: newStatus }, config);
        setTasks(tasks.map(t => t._id === task._id ? res.data : t));
        toast.success(newStatus === 'Completed' ? "Task Completed!" : "Task Reopened"); // Toast added
    } catch (err) { 
        console.error(err);
        toast.error("Update failed");
    }
  }

  const logout = () => {
    localStorage.removeItem('token');
    toast.success("Logged out successfully"); // Toast added
    navigate('/');
  };

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(search.toLowerCase()) && 
    (filter === 'All' || task.status === filter)
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex justify-between items-center bg-white p-4 rounded shadow">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <button onClick={logout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition">Logout</button>
        </div>

        {/* --- PROFILE SECTION --- */}
        <div className="bg-white p-6 rounded shadow">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-700">User Profile</h2>
                <button 
                    onClick={() => setIsEditing(!isEditing)} 
                    className="text-blue-600 underline text-sm"
                >
                    {isEditing ? 'Cancel' : 'Edit Profile'}
                </button>
            </div>

            {isEditing ? (
                // EDIT MODE
                <form onSubmit={updateProfile} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm text-gray-600">Name</label>
                        <input type="text" value={profileData.name} onChange={(e) => setProfileData({...profileData, name: e.target.value})} className="w-full border p-2 rounded" />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600">Job Title</label>
                        <input type="text" value={profileData.jobTitle} onChange={(e) => setProfileData({...profileData, jobTitle: e.target.value})} className="w-full border p-2 rounded" placeholder="e.g. Frontend Intern" />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600">Phone</label>
                        <input type="text" value={profileData.phone} onChange={(e) => setProfileData({...profileData, phone: e.target.value})} className="w-full border p-2 rounded" placeholder="e.g. 9876543210" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm text-gray-600">Bio</label>
                        <textarea value={profileData.bio} onChange={(e) => setProfileData({...profileData, bio: e.target.value})} className="w-full border p-2 rounded" placeholder="Tell us about yourself..." rows="2"></textarea>
                    </div>
                    <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded md:col-span-2 hover:bg-green-700">Save Changes</button>
                </form>
            ) : (
                // VIEW MODE
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                    <div>
                        <p className="text-sm text-gray-500">Full Name</p>
                        <p className="font-semibold text-lg">{user?.name}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-semibold">{user?.email}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Job Title</p>
                        <p className="font-medium">{user?.jobTitle || 'Not set'}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">{user?.phone || 'Not set'}</p>
                    </div>
                    <div className="md:col-span-2">
                        <p className="text-sm text-gray-500">Bio</p>
                        <p className="italic bg-gray-50 p-3 rounded">{user?.bio || 'No bio added yet.'}</p>
                    </div>
                </div>
            )}
        </div>

        {/* --- TASKS SECTION --- */}
        <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold text-gray-700 mb-4">Your Tasks</h2>

            {/* Create Task */}
            <form onSubmit={addTask} className="flex flex-col md:flex-row gap-3 mb-6 bg-gray-50 p-4 rounded border">
                <input 
                  type="text" placeholder="Task Title" value={newTask.title} 
                  onChange={(e) => setNewTask({...newTask, title: e.target.value})} 
                  className="border p-2 flex-1 rounded" required 
                />
                <input 
                  type="text" placeholder="Description (optional)" value={newTask.description} 
                  onChange={(e) => setNewTask({...newTask, description: e.target.value})} 
                  className="border p-2 flex-1 rounded" 
                />
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Add Task</button>
            </form>

            {/* Filters */}
            <div className="flex justify-between mb-4">
              <input 
                type="text" placeholder="Search tasks..." 
                onChange={(e) => setSearch(e.target.value)} 
                className="border p-2 rounded w-64"
              />
              <select onChange={(e) => setFilter(e.target.value)} className="border p-2 rounded bg-white">
                <option value="All">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            {/* List */}
            <div className="space-y-3">
              {filteredTasks.length === 0 ? <p className="text-center text-gray-500 py-4">No tasks found.</p> : null}
              
              {filteredTasks.map(task => (
                <div key={task._id} className="border p-4 rounded flex flex-col md:flex-row justify-between items-center hover:bg-gray-50 transition">
                  <div className="mb-2 md:mb-0">
                    <div className="flex items-center gap-2">
                        <h3 className={`font-bold text-lg ${task.status === 'Completed' ? 'line-through text-gray-400' : 'text-gray-800'}`}>{task.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${task.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                            {task.status}
                        </span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">{task.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => toggleStatus(task)} className="text-sm bg-white border border-gray-300 px-3 py-1 rounded hover:bg-gray-100 transition">
                        {task.status === 'Pending' ? '✓ Mark Done' : '↺ Undo'}
                    </button>
                    <button onClick={() => deleteTask(task._id)} className="text-sm bg-red-50 text-red-600 border border-red-200 px-3 py-1 rounded hover:bg-red-100 transition">Delete</button>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;