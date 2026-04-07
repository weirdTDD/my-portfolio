import React, { useState } from 'react';
import { format, addDays, startOfToday } from 'date-fns';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';








export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState(startOfToday());
  
  // Create 6 days for the horizontal view starting from today
  const days = Array.from({ length: 6 }).map((_, i) => addDays(startOfToday(), i));

  return (
    // Light mode: bg-white → Dark mode: dark:bg-black
// Light mode: text-gray-500 → Dark mode: dark:text-gray-400
<div className="max-w-5xl mx-auto p-8 bg-white dark:bg-slate-900/50 border-none rounded-xl shadow-sm dark:border-gray-700">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-700">
          <CalendarIcon size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold">1-on-1 Coaching Session</h1>
          <p className="text-gray-500">45 min appointments • Google Meet</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side: Mini Calendar (Placeholder for library like react-day-picker) */}
        <div className="col-span-1 border-r pr-4">
          <h3 className="font-semibold mb-4 text-center">{format(selectedDate, 'MMMM yyyy')}</h3>
          {/* Calendar Logic here */}
          <div className="text-sm text-gray-400 italic text-center py-10 ">
              <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-lg border  dark:bg-gray-800/50! dark:text-gray-50! text-gray-950! mx-auto"
              />
          </div>
        </div>

        {/* Right Side: Horizontal Slots */}
        <div className="col-span-2">
          <div className="flex items-center justify-between mb-6">
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-900 "><ChevronLeft /></button>
            
            <div className="flex gap-4 overflow-x-hidden pb-2">
              {days.map((day) => (
                <button 
                  key={day.toString()}
                  onClick={() => setSelectedDate(day)}
                  className={`flex flex-col items-center min-w-[80px] p-4 rounded-lg transition ${
                    format(day, 'PP') === format(selectedDate, 'PP') 
                    ? 'bg-blue-600 text-white' 
                    : 'hover:bg-gray-100 dark:text-gray-50 text-gray-800'
                  }`}
                >
                  <span className="text-xs uppercase">{format(day, 'eee')}</span>
                  <span className="text-xl font-bold">{format(day, 'd')}</span>
                </button>
              ))}
            </div>

            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-900"><ChevronRight /></button>
          </div>

          {/* Availability State */}
          <div className="text-center py-20 bg-white/90 rounded-xl border border-dashed dark:bg-gray-800/50">
            <p className="text-gray-500 mb-2">No availability during these days</p>
            <button className="text-blue-600 font-medium">Jump to the next bookable date</button>
          </div>
        </div>
      </div>
    </div>
  );
}