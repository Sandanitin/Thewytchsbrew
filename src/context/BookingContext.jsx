import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error('useBooking must be used within a BookingProvider');
    }
    return context;
};

export const BookingProvider = ({ children }) => {
    const [bookings, setBookings] = useState([]);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const openBookingModal = (event) => {
        setSelectedEvent(event);
        setIsBookingModalOpen(true);
    };

    const closeBookingModal = () => {
        setIsBookingModalOpen(false);
        setSelectedEvent(null);
    };

    const createBooking = async (bookingData) => {
        try {
            // Add booking to local state
            const newBooking = {
                id: Date.now().toString(),
                ...bookingData,
                createdAt: new Date().toISOString(),
            };

            setBookings(prev => [...prev, newBooking]);

            // TODO: Here you would integrate with Google Calendar API
            // to create an actual calendar event with attendees

            return { success: true, booking: newBooking };
        } catch (error) {
            console.error('Failed to create booking:', error);
            return { success: false, error: error.message };
        }
    };

    const getEventBookings = (eventId) => {
        return bookings.filter(booking => booking.eventId === eventId);
    };

    const getEventHeadcount = (eventId) => {
        const eventBookings = getEventBookings(eventId);
        return eventBookings.reduce((total, booking) => total + (booking.numberOfAttendees || 1), 0);
    };

    const value = {
        bookings,
        isBookingModalOpen,
        selectedEvent,
        openBookingModal,
        closeBookingModal,
        createBooking,
        getEventBookings,
        getEventHeadcount,
    };

    return (
        <BookingContext.Provider value={value}>
            {children}
        </BookingContext.Provider>
    );
};

export default BookingContext;
