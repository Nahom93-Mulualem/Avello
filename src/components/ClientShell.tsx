"use client";

import React, { useState, createContext, useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BookingModal from "./BookingModal";

interface BookingContextType {
  openBooking: (service?: string) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType>({
  openBooking: () => {},
  closeBooking: () => {},
});

export const useBooking = () => useContext(BookingContext);

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("discovery");

  const openBooking = (service?: string) => {
    if (service) setSelectedService(service);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking }}>
      <Header onOpenBooking={() => openBooking()} />
      <main className="w-full pt-20 bg-canvas min-h-[calc(100vh-80px)]">
        {children}
      </main>
      <Footer />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={closeBooking}
        initialService={selectedService}
      />
    </BookingContext.Provider>
  );
}

