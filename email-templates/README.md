# EmailJS Templates for The Wytch's Brew

This directory contains beautiful HTML email templates for use with EmailJS in the booking system.

## Templates Included

1. **Booking Notification** (`booking-notification.html`) - Sent to business when a new booking is made
2. **Customer Confirmation** (`customer-confirmation.html`) - Sent to customers after booking
3. **Contact Us Template** (`contact-us-template.html`) - Sent when visitors use the contact form

## How to Use These Templates

### Step 1: Access Your EmailJS Dashboard
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Log in to your account

### Step 2: Create Email Templates
1. Navigate to the "Email Templates" section
2. Click "Create new template"
3. Give your template a name (e.g., "Booking Notification", "Customer Confirmation", or "Contact Us")
4. Copy the HTML code from the corresponding file in this directory
5. Paste it into the template editor
6. Replace the placeholder content with your EmailJS template variables

### Step 3: Configure Template Variables

#### For Booking Notification Template:
- `{{to_name}}` - Recipient name (business)
- `{{from_name}}` - Customer name
- `{{from_email}}` - Customer email
- `{{phone}}` - Customer phone number
- `{{event_title}}` - Event/session title
- `{{event_date}}` - Event date and time
- `{{location}}` - Event location
- `{{number_of_attendees}}` - Number of people attending
- `{{notes}}` - Special requests or notes
- `{{is_custom_booking}}` - Whether this is a custom booking ("Yes" or "No")

#### For Customer Confirmation Template:
- `{{to_name}}` - Customer name
- `{{event_title}}` - Event/session title
- `{{event_date}}` - Event date and time
- `{{location}}` - Event location
- `{{number_of_attendees}}` - Number of people attending
- `{{notes}}` - Special requests or notes

#### For Contact Us Template:
- `{{to_name}}` - Recipient name (business)
- `{{from_name}}` - Sender name
- `{{from_email}}` - Sender email
- `{{phone}}` - Sender phone number
- `{{message}}` - Message content

### Step 4: Update Environment Variables
Make sure your `.env` file has the correct EmailJS configuration:

```
VITE_EMAILJS_SERVICE_ID=service_j1it8n7
VITE_EMAILJS_TEMPLATE_ID=template_uvnmczx
VITE_EMAILJS_CUSTOMER_TEMPLATE_ID=template_n82z5se
VITE_EMAILJS_PUBLIC_KEY=h7cnMVE1nufu98OC7
```

## Template IDs Mapping
- `template_uvnmczx` - Contact Us form submissions
- `template_n82z5se` - Order Confirmation (Customer Confirmations)
- `template_uvnmczx` - Booking Notifications (Business Notifications)

## Customization

You can customize these templates by:
1. Changing colors in the CSS styles
2. Modifying text content
3. Adding your logo or images
4. Adjusting layout elements

## Testing

To test the email functionality:
1. Make sure your EmailJS account is properly configured
2. Verify all environment variables are set correctly
3. Submit a booking form or contact form on your website
4. Check that the appropriate emails are sent correctly

## Support

For issues with EmailJS integration, refer to the main README.md file in the project root.