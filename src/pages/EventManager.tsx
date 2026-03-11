import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useEvents } from '@/contexts/EventsContext';
import { Navigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Plus, Trash2, Edit, Eye } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';

interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'wedding' | 'corporate' | 'birthday' | 'custom';
  date: string;
}

const EventManager = () => {
  const { isAdmin } = useAuth();
  const { events, addEvent, updateEvent, deleteEvent } = useEvents();
  const { toast } = useToast();

  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    image: '',
    category: '',
    date: ''
  });
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  if (!isAdmin) {
    return <Navigate to="/login" replace />;
  }

  // Group events by category
  const eventsByCategory = events.reduce((acc, event) => {
    if (!acc[event.category]) {
      acc[event.category] = [];
    }
    acc[event.category].push(event);
    return acc;
  }, {} as Record<string, Event[]>);

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.description || !newEvent.category || !newEvent.date) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const event: Event = {
      id: Date.now().toString(),
      title: newEvent.title,
      description: newEvent.description,
      image: newEvent.image || 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: newEvent.category as Event['category'],
      date: newEvent.date
    };

    addEvent(event);
    setNewEvent({ title: '', description: '', image: '', category: '', date: '' });
    
    toast({
      title: "Success!",
      description: "Event added successfully and will appear in the gallery.",
    });
  };

  const handleDeleteEvent = (id: string) => {
    deleteEvent(id);
    toast({
      title: "Success!",
      description: "Event deleted successfully.",
    });
  };

  const handleUpdateEvent = () => {
    if (!editingEvent) return;

    updateEvent(editingEvent);
    setEditingEvent(null);
    
    toast({
      title: "Success!",
      description: "Event updated successfully.",
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'wedding': return 'bg-pink-500';
      case 'corporate': return 'bg-blue-500';
      case 'birthday': return 'bg-yellow-500';
      case 'custom': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const categoryInfo = {
    wedding: { title: 'Wedding Events', icon: '💍', color: 'from-pink-500 to-rose-500' },
    corporate: { title: 'Corporate Events', icon: '🏢', color: 'from-blue-500 to-indigo-500' },
    birthday: { title: 'Birthday Events', icon: '🎂', color: 'from-yellow-500 to-orange-500' },
    custom: { title: 'Custom Events', icon: '🎉', color: 'from-purple-500 to-violet-500' }
  };

  const renderEventCard = (event: Event, index: number) => (
    <motion.div
      key={event.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="glass-card border-white/20 hover:border-white/40 transition-all duration-300 h-full flex flex-col">
        <div className="relative h-48 overflow-hidden rounded-t-lg flex-shrink-0">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <Badge 
            className={`absolute top-2 right-2 ${getCategoryColor(event.category)} text-white`}
          >
            {event.category}
          </Badge>
        </div>
        <CardContent className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 min-h-[3.5rem]">{event.title}</h3>
          <p className="text-gray-300 text-sm mb-3 line-clamp-3 flex-grow min-h-[4.5rem]">{event.description}</p>
          <p className="text-electric-blue text-sm mb-4">{event.date}</p>
          
          <div className="flex gap-2 mt-auto">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="w-4 h-4 mr-1" />
                  View
                </Button>
              </DialogTrigger>
              <DialogContent className="glass-card border-white/20">
                <DialogHeader>
                  <DialogTitle className="gradient-text">{event.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded" />
                  <Badge className={`${getCategoryColor(event.category)} text-white`}>
                    {event.category}
                  </Badge>
                  <p className="text-electric-blue">{event.date}</p>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setEditingEvent(event)}
                >
                  <Edit className="w-4 h-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="glass-card border-white/20">
                <DialogHeader>
                  <DialogTitle className="gradient-text">Edit Event</DialogTitle>
                </DialogHeader>
                {editingEvent && (
                  <div className="space-y-4">
                    <Input
                      value={editingEvent.title}
                      onChange={(e) => setEditingEvent({ ...editingEvent, title: e.target.value })}
                      placeholder="Event title"
                      className="bg-white/10 border-white/20 text-white"
                    />
                    <Input
                      value={editingEvent.date}
                      onChange={(e) => setEditingEvent({ ...editingEvent, date: e.target.value })}
                      placeholder="Event date"
                      className="bg-white/10 border-white/20 text-white"
                    />
                    <Textarea
                      value={editingEvent.description}
                      onChange={(e) => setEditingEvent({ ...editingEvent, description: e.target.value })}
                      placeholder="Event description"
                      rows={3}
                      className="bg-white/10 border-white/20 text-white"
                    />
                    <Button
                      onClick={handleUpdateEvent}
                      className="w-full bg-gradient-to-r from-electric-purple to-electric-blue"
                    >
                      Update Event
                    </Button>
                  </div>
                )}
              </DialogContent>
            </Dialog>

            <Button
              variant="destructive"
              size="sm"
              onClick={() => handleDeleteEvent(event.id)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen pt-20 pb-10 px-4 relative">
    {/* Animated Background Gradient */}
      <motion.div
        className="fixed inset-0 z-0"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, #00B4DB 0%, #000 70%)",
            "radial-gradient(circle at 100% 100%, #FF1B6B 0%, #000 70%)",
            "radial-gradient(circle at 0% 0%, #00B4DB 0%, #000 70%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <ParticleBackground />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Event Manager
          </h1>
          <p className="text-xl text-gray-300">
            Manage your event portfolio - Events added here will appear in the gallery
          </p>
        </motion.div>

        <Tabs defaultValue="manage" className="w-full">
          <TabsList className="grid w-full grid-cols-2 glass-card border-white/20">
            <TabsTrigger value="manage" className="data-[state=active]:bg-electric-purple">
              Manage Events
            </TabsTrigger>
            <TabsTrigger value="add" className="data-[state=active]:bg-electric-purple">
              Add New Event
            </TabsTrigger>
          </TabsList>

          <TabsContent value="add" className="mt-8">
            <Card className="glass-card border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Add New Event</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="title" className="text-white">Event Title *</Label>
                    <Input
                      id="title"
                      value={newEvent.title}
                      onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                      placeholder="Enter event title"
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="date" className="text-white">Event Date *</Label>
                    <Input
                      id="date"
                      value={newEvent.date}
                      onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                      placeholder="e.g., December 15, 2024"
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="category" className="text-white">Category *</Label>
                    <Select onValueChange={(value) => setNewEvent({ ...newEvent, category: value })}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="corporate">Corporate</SelectItem>
                        <SelectItem value="birthday">Birthday</SelectItem>
                        <SelectItem value="custom">Custom Event</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="image" className="text-white">Image URL</Label>
                    <Input
                      id="image"
                      value={newEvent.image}
                      onChange={(e) => setNewEvent({ ...newEvent, image: e.target.value })}
                      placeholder="Enter image URL (optional)"
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description" className="text-white">Description *</Label>
                  <Textarea
                    id="description"
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                    placeholder="Enter event description..."
                    rows={4}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>

                <Button
                  onClick={handleAddEvent}
                  className="w-full bg-gradient-to-r from-electric-purple to-electric-blue hover:from-electric-blue hover:to-electric-purple"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Event to Gallery
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="manage" className="mt-8">
            <div className="space-y-12">
              {Object.entries(categoryInfo).map(([category, info]) => {
                const categoryEvents = eventsByCategory[category] || [];
                
                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${info.color}`}>
                        <span className="text-2xl">{info.icon}</span>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{info.title}</h2>
                        <p className="text-gray-400">
                          {categoryEvents.length} event{categoryEvents.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>

                    {categoryEvents.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categoryEvents.map((event, index) => renderEventCard(event, index))}
                      </div>
                    ) : (
                      <div className="text-center py-8 glass-card border-white/10 rounded-lg">
                        <p className="text-gray-400">No {category} events found.</p>
                        <p className="text-gray-500 text-sm mt-2">
                          Add your first {category} event using the "Add New Event" tab.
                        </p>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {events.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-400 mb-4">No events found.</p>
                <p className="text-gray-500">Add your first event using the "Add New Event" tab.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EventManager;
