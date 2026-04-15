import React, { useState, useCallback } from "react";
import {
  format,
  addDays,
  startOfToday,
  isBefore,
  isWeekend,
  startOfWeek,
  addMinutes,
  isSameDay,
  parse,
} from "date-fns";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Video,
  CheckCircle,
} from "lucide-react";
import { Calendar } from "./ui/calendar";

// ── Config ────────────────────────────────────────────────────────────────
const SESSION_DURATION = 45; // minutes
const DAYS_TO_SHOW = 7;

// Mark specific times unavailable (fetched from your backend in production)
const BLOCKED_SLOTS = ["09:00", "10:00", "14:00"];

function generateSlots(date) {
  const baseSlots = [
    "09:00",
    "09:45",
    "10:00",
    "10:45",
    "11:30",
    "13:00",
    "13:45",
    "14:00",
    "14:45",
    "15:30",
    "16:15",
  ];
  const today = startOfToday();
  const now = new Date();

  // No slots on past dates or weekends
  if (isBefore(date, today) || isWeekend(date)) return [];

  return baseSlots
    .filter((time) => {
      // On today, hide times already passed (+ 30 min buffer)
      if (isSameDay(date, today)) {
        const slotTime = parse(time, "HH:mm", date);
        return slotTime > addMinutes(now, 30);
      }
      return true;
    })
    .map((time) => ({
      time,
      available: !BLOCKED_SLOTS.includes(time),
    }));
}

function computeEndTime(startTime, durationMinutes) {
  const base = parse(startTime, "HH:mm", new Date());
  return format(addMinutes(base, durationMinutes), "HH:mm");
}

// Fake Google Meet link — replace with your backend call
function generateMeetLink() {
  const rand = () => Math.random().toString(36).slice(2, 5);
  return `https://meet.google.com/${rand()}-${rand()}-${rand()}`;
}

export default function BookingPage() {
  const today = startOfToday();
  const [selectedDate, setSelectedDate] = useState(today);
  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [booking, setBooking] = useState(null); // { date, slot, meetLink }

  // ── Week strip ───────────────────────────────────────────────────────────
  const weekBase = addDays(
    startOfWeek(today, { weekStartsOn: 0 }),
    weekOffset * 7,
  );
  const weekDays = Array.from({ length: DAYS_TO_SHOW }, (_, i) =>
    addDays(weekBase, i),
  );

  const handlePrevWeek = () => {
    // Don't go before the week containing today
    if (weekOffset > 0) setWeekOffset((w) => w - 1);
  };

  // ── Date selection ───────────────────────────────────────────────────────
  const handleSelectDate = useCallback(
    (date) => {
      if (!date || isBefore(date, today) || isWeekend(date)) return;
      setSelectedDate(date);
      setSelectedSlot(null);
      setBooking(null);
      // Sync week strip to show the chosen date
      const targetWeek = startOfWeek(date, { weekStartsOn: 0 });
      const todayWeek = startOfWeek(today, { weekStartsOn: 0 });
      const diff = Math.round(
        (targetWeek - todayWeek) / (7 * 24 * 60 * 60 * 1000),
      );
      setWeekOffset(diff);
    },
    [today],
  );

  // ── Jump to next available day ───────────────────────────────────────────
  const jumpToNext = () => {
    let d = addDays(selectedDate, 1);
    for (let i = 0; i < 60; i++) {
      if (!isWeekend(d) && !isBefore(d, today) && generateSlots(d).length) {
        handleSelectDate(d);
        return;
      }
      d = addDays(d, 1);
    }
  };

  const handleBook = async () => {
    const res = await fetch("/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: selectedDate,
        slot: selectedSlot,
        userEmail: email, // from input
        coachEmail: "edwardmorhe777@gmail.com",
      }),
    });

    const data = await res.json();

    setBooking({
      date: selectedDate,
      slot: selectedSlot,
      meetLink: data.meetLink,
    });
  };

  const slots = generateSlots(selectedDate);
  const endTime = selectedSlot
    ? computeEndTime(selectedSlot, SESSION_DURATION)
    : null;

  const [email, setEmail] = useState("");

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white/50 backdrop-blur-sm dark:bg-slate-900/50 border rounded-xl shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center text-orange-700">
          <CalendarIcon size={22} />
        </div>
        <div>
          <h1 className="text-2xl font-bold ">1-on-1 Coaching Session</h1>
          <p className="dark:text-gray-100 text-gray-500 text-sm mt-4">
            {SESSION_DURATION} min · Google Meet · Free cancellation 24h before
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Mini Calendar */}
        <div className="col-span-1">
          <p className="font-medium text-center mb-3">(GMT+00:00)Greewitch Mean Time- Abidjan</p>
          <p className="font-semibold text-center mb-3 text-[16px]">
             {format(selectedDate, "MMMM yyyy")} 
          </p>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleSelectDate}
            disabled={(d) => isBefore(d, today) || isWeekend(d)}
            className="rounded-lg border dark:bg-gray-800/50 mx-auto text-sm"
          />
        </div>
        <div className="" />

        {/*------------------- Right side ------------------------*/}
        <div className="w-full">
          {/* Week Strip */}
          <div className="flex items-center gap-2 mb-6">
            <button
              onClick={handlePrevWeek}
              disabled={weekOffset === 0}
              className="p-1.5 rounded-full hover:bg-gray-100 disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2 overflow-hidden flex-1">
              {weekDays.map((day) => {
                const past = isBefore(day, today);
                const weekend = isWeekend(day);
                const isActive = isSameDay(day, selectedDate);
                const disabled = past || weekend;
                return (
                  <button
                    key={day.toISOString()}
                    onClick={() => handleSelectDate(day)}
                    disabled={disabled}
                    className={`flex flex-col items-center flex-1 py-2 rounded-md border text-xs transition
                      ${
                        isActive
                          ? "bg-blue-600 text-white border-blue-600"
                          : disabled
                            ? "opacity-30 cursor-not-allowed border-transparent"
                            : "hover:bg-gray-50 dark:hover:bg-gray-800 border-gray-200 dark:border-gray-700"
                      }`}
                  >
                    <span className="uppercase px-1">{format(day, "eee")}</span>
                    <span className="text-lg font-semibold">
                      {format(day, "d")}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setWeekOffset((w) => w + 1)}
              className="p-1.5 rounded-full hover:bg-gray-100"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Success Banner */}
          {booking && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <div className="flex items-center gap-2 text-green-800 font-semibold mb-1">
                <CheckCircle size={18} /> Booking confirmed!
              </div>
              <p className="text-sm text-green-700">
                {format(booking.date, "EEEE, MMMM d, yyyy")} · {booking.slot} –{" "}
                {computeEndTime(booking.slot, SESSION_DURATION)}
              </p>
              <a
                href={booking.meetLink}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
              >
                <Video size={15} /> {booking.meetLink}
              </a>
              <div className="mt-3">
                <button
                  onClick={() => {
                    setBooking(null);
                    setSelectedSlot(null);
                  }}
                  className="text-sm text-blue-600 hover:underline"
                >
                  + Book another session
                </button>
              </div>
            </div>
          )}

          {/* Time Slots */}
          {!booking && (
            <>
              {slots.length === 0 ? (
                <div className="text-center py-16 border border-dashed rounded-xl">
                  <p className="text-gray-500 mb-2 text-sm">
                    No availability on this day
                  </p>
                  <button
                    onClick={jumpToNext}
                    className="text-blue-600 text-sm font-medium"
                  >
                    Jump to next bookable date →
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-sm text-gray-500 mb-3">
                    {format(selectedDate, "EEEE, MMMM d")}
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {slots.map(({ time, available }) => (
                      <button
                        key={time}
                        disabled={!available}
                        onClick={() =>
                          setSelectedSlot(selectedSlot === time ? null : time)
                        }
                        className={`py-2.5 rounded-xl border text-sm transition
                          ${
                            !available
                              ? "opacity-30 line-through cursor-not-allowed border-gray-200"
                              : selectedSlot === time
                                ? "bg-blue-600 text-white border-blue-600"
                                : "hover:bg-blue-50 hover:border-blue-300 border-gray-200"
                          }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>

                  {/* Confirm panel */}
                  {selectedSlot && (
                    <div className="mt-5 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border">
                      <h3 className="font-semibold text-sm mb-3">
                        Confirm your booking
                      </h3>
                      <div className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
                        <p>📅 {format(selectedDate, "EEEE, MMMM d, yyyy")}</p>
                        <p>
                          🕐 {selectedSlot} – {endTime} ({SESSION_DURATION} min)
                        </p>
                        <p>📹 Google Meet link sent on confirmation</p>
                      </div>

                      <div>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="border ring ring-blue-500 inset-0 hover:border-blue-500 px-2 py-1 rounded-lg mt-5 w-full"
                        />
                      </div>
                      <button
                        onClick={handleBook}
                        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-medium transition"
                      >
                        Book & get Google Meet link
                      </button>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
