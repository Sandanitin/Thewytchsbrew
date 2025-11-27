import React, { useState } from 'react';
import { HiX, HiCalendar, HiUser, HiMail, HiPhone, HiUserGroup } from 'react-icons/hi';
import { useBooking } from '../context/BookingContext';

const BookingModal = () => {
    const { isBookingModalOpen, closeBookingModal, selectedEvent, createBooking } = useBooking();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        numberOfAttendees: 1,
        notes: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    if (!isBookingModalOpen || !selectedEvent) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'numberOfAttendees' ? parseInt(value) || 1 : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const bookingData = {
            ...formData,
            eventId: selectedEvent.id,
            eventTitle: selectedEvent.title,
            eventStart: selectedEvent.start,
        };

        const result = await createBooking(bookingData);

        if (result.success) {
            setSubmitStatus({
                type: 'success',
                message: `Successfully booked! We'll see you at ${selectedEvent.title}. A confirmation email has been sent.`
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                numberOfAttendees: 1,
                notes: '',
            });

            // Close modal after 3 seconds
            setTimeout(() => {
                closeBookingModal();
                setSubmitStatus(null);
            }, 3000);
        } else {
            setSubmitStatus({
                type: 'error',
                message: result.error || 'Failed to create booking. Please try again.'
            });
        }

        setIsSubmitting(false);
    };

    const formatEventDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
        }).format(date);
    };

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={closeBookingModal}
            ></div>

            {/* Modal */}
            <div className="flex min-h-full items-center justify-center p-4">
                <div className="relative bg-mystic-navy border border-white/10 rounded-xl shadow-2xl max-w-2xl w-full p-8">
                    {/* Close button */}
                    <button
                        onClick={closeBookingModal}
                        className="absolute top-4 right-4 text-mystic-muted hover:text-mystic-text transition-colors"
                    >
                        <HiX className="h-6 w-6" />
                    </button>

                    {/* Header */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-serif font-bold text-mystic-text mb-2">
                            Reserve Your Spot
                        </h2>
                        <div className="flex items-center gap-2 text-mystic-gold">
                            <HiCalendar className="h-5 w-5" />
                            <span className="text-lg font-medium">{selectedEvent.title}</span>
                        </div>
                        <p className="text-mystic-muted text-sm mt-2">
                            {formatEventDate(selectedEvent.start)}
                        </p>
                        {selectedEvent.location && (
                            <p className="text-mystic-muted text-sm">
                                📍 {selectedEvent.location}
                            </p>
                        )}
                    </div>

                    {/* Status Messages */}
                    {submitStatus && (
                        <div className={`mb-6 p-4 rounded-lg border ${submitStatus.type === 'success'
                                ? 'bg-green-900/20 border-green-500/30 text-green-200'
                                : 'bg-red-900/20 border-red-500/30 text-red-200'
                            }`}>
                            {submitStatus.message}
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label className="block text-mystic-text text-sm font-medium mb-2">
                                <div className="flex items-center gap-2">
                                    <HiUser className="h-4 w-4" />
                                    Full Name *
                                </div>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-mystic-dark border border-white/10 rounded-lg text-mystic-text placeholder-mystic-muted focus:outline-none focus:border-mystic-gold transition-colors"
                                placeholder="Enter your full name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-mystic-text text-sm font-medium mb-2">
                                <div className="flex items-center gap-2">
                                    <HiMail className="h-4 w-4" />
                                    Email Address *
                                </div>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-mystic-dark border border-white/10 rounded-lg text-mystic-text placeholder-mystic-muted focus:outline-none focus:border-mystic-gold transition-colors"
                                placeholder="your@email.com"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-mystic-text text-sm font-medium mb-2">
                                <div className="flex items-center gap-2">
                                    <HiPhone className="h-4 w-4" />
                                    Phone Number
                                </div>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-mystic-dark border border-white/10 rounded-lg text-mystic-text placeholder-mystic-muted focus:outline-none focus:border-mystic-gold transition-colors"
                                placeholder="(123) 456-7890"
                            />
                        </div>

                        {/* Number of Attendees */}
                        <div>
                            <label className="block text-mystic-text text-sm font-medium mb-2">
                                <div className="flex items-center gap-2">
                                    <HiUserGroup className="h-4 w-4" />
                                    Number of Attendees *
                                </div>
                            </label>
                            <select
                                name="numberOfAttendees"
                                value={formData.numberOfAttendees}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-mystic-dark border border-white/10 rounded-lg text-mystic-text focus:outline-none focus:border-mystic-gold transition-colors"
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                    <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                                ))}
                            </select>
                        </div>

                        {/* Notes */}
                        <div>
                            <label className="block text-mystic-text text-sm font-medium mb-2">
                                Special Requests or Notes
                            </label>
                            <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                rows={3}
                                className="w-full px-4 py-3 bg-mystic-dark border border-white/10 rounded-lg text-mystic-text placeholder-mystic-muted focus:outline-none focus:border-mystic-gold transition-colors resize-none"
                                placeholder="Any special requirements or questions?"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-wait flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-mystic-text"></div>
                                    Processing...
                                </>
                            ) : (
                                <>
                                    <HiCalendar className="h-5 w-5" />
                                    Confirm Reservation
                                </>
                            )}
                        </button>
                    </form>

                    <p className="text-xs text-mystic-muted text-center mt-6">
                        By confirming, you agree to receive event reminders and updates via email.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
