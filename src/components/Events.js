// === pages/Events.js ===
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../redux/slices/eventsSlice';
import Header from '../resuable/Header';
import Navbar from '../resuable/Navbar';

const Events = () => {
  const dispatch = useDispatch();
  const { eventsList, loading, error } = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  if (loading) return <p className="p-4">Loading events...</p>;
  if (error) return <p className="p-4 text-red-600">Error: {error}</p>;

  return (
    <div>
    <Header />
    <Navbar />
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Nearby Events</h1>
      <div className="grid auto-rows-auto grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
        {eventsList.map((event) => (
          <div key={event.id} className="border p-2 rounded shadow hover:shadow-lg mb-2">
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover mb-2" />
            <h2 className="text-lg font-semibold">{event.title}</h2>
            <p className="text-sm text-gray-600">{event.category} • {event.location}</p>
            <p className="text-sm text-gray-500">{event.date}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Events;
