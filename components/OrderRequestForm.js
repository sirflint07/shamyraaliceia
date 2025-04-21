'use client';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    customerType: '',
    service: '',
    eventDetails: '',
    eventDate: '',
    budget: '',
    name: '',
    phone: '',
    email: '',
    contactMethod: '',
    additionalInfo: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

    if (!formData.customerType) newErrors.customerType = 'Required';
    if (!formData.service) newErrors.service = 'Required';
    if (!formData.eventDetails.trim()) newErrors.eventDetails = 'Required';
    if (!formData.eventDate) newErrors.eventDate = 'Required';
    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.phone) {
      newErrors.phone = 'Required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    if (!formData.contactMethod) newErrors.contactMethod = 'Required';
    if (formData.contactMethod === 'email' && !formData.email) {
      newErrors.email = 'Email required when selecting email contact';
    }

    // Budget validation based on service
    const minBudget = formData.service === 'Intimate Event Planning' ? 86000 :
                      formData.service === 'Corporate Event Production' ? 25000 : 0;
    if (!formData.budget || Number(formData.budget) < minBudget) {
      newErrors.budget = `Minimum budget: $${minBudget.toLocaleString()}`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data:', formData);
      // Submit logic here
      toast.success("Form submitted!");
    } else {
      toast.warning("Please make sure all form data are provided");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReset = () => {
    setFormData({
      customerType: '',
      service: '',
      eventDetails: '',
      eventDate: '',
      budget: '',
      name: '',
      phone: '',
      email: '',
      contactMethod: '',
      additionalInfo: ''
    });
    setErrors({});
  };

  return (
    <section className='bg-slate-50 w-full py-6'>
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif text-green-800 mb-6">Order Request</h1>
      <p className="mb-6 text-gray-600">
        After filling out this form, I will contact you to discuss details and availability. 
        For immediate assistance, contact info@shamyraaliceia.co
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Customer Type */}
        <div className="space-y-4">
          <label className="block text-gray-700 font-medium">
            Are you a new or existing customer? *
          </label>
          <div className="space-y-2">
            {['New Customer', 'Existing Customer'].map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="customerType"
                  value={option}
                  checked={formData.customerType === option}
                  onChange={handleInputChange}
                  className="text-green-600"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
          {errors.customerType && (
            <span className="text-red-500 text-sm">{errors.customerType}</span>
          )}
        </div>

        {/* Services Interested */}
        <div className="space-y-4">
          <label className="block text-gray-700 font-medium">
            What service are you interested in? *
          </label>
          <div className="space-y-2">
            {[
              'Intimate Event Planning',
              'Corporate Event Production',
              'Floral or Bouquet Services'
            ].map((service) => (
              <label key={service} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="service"
                  value={service}
                  checked={formData.service === service}
                  onChange={handleInputChange}
                  className="text-green-600"
                />
                <span>{service}</span>
              </label>
            ))}
          </div>
          {errors.service && (
            <span className="text-red-500 text-sm">{errors.service}</span>
          )}
        </div>

        {/* Event Details */}
        <div className="space-y-4">
          <label className="block text-gray-700 font-medium">
            Tell me about your event, bouquet, or floral services you&apos;d like *
          </label>
          <textarea
            name="eventDetails"
            value={formData.eventDetails}
            onChange={handleInputChange}
            className={`w-full p-3 border rounded-lg ${errors.eventDetails ? 'border-red-500' : ''}`}
            rows={4}
            placeholder="Your answer"
          />
          {errors.eventDetails && (
            <span className="text-red-500 text-sm">{errors.eventDetails}</span>
          )}
        </div>

        {/* Date and Budget */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <label className="block text-gray-700 font-medium">
              Event Date *
            </label>
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleInputChange}
              className={`w-full p-3 border rounded-lg ${errors.eventDate ? 'border-red-500' : ''}`}
            />
            <p className="text-sm text-gray-500">
              For urgent requests, text (917) 586-9883
            </p>
            {errors.eventDate && (
              <span className="text-red-500 text-sm">{errors.eventDate}</span>
            )}
          </div>

          <div className="space-y-4">
            <label className="block text-gray-700 font-medium">
              What is your budget? *
            </label>
            <input
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className={`w-full p-3 border rounded-lg ${errors.budget ? 'border-red-500' : ''}`}
              placeholder="Your answer"
            />
            {errors.budget && (
              <span className="text-red-500 text-sm">{errors.budget}</span>
            )}
          </div>
        </div>

        {/* Personal Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <label className="block text-gray-700 font-medium">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full p-3 border rounded-lg ${errors.name ? 'border-red-500' : ''}`}
              placeholder="Your answer"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name}</span>
            )}
          </div>

          <div className="space-y-4">
            <label className="block text-gray-700 font-medium">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full p-3 border rounded-lg ${errors.phone ? 'border-red-500' : ''}`}
              placeholder="Your answer"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">{errors.phone}</span>
            )}
          </div>
        </div>

        {/* Contact Preferences */}
        <div className="space-y-4">
          <label className="block text-gray-700 font-medium">
            Preferred Contact Method *
          </label>
          <div className="flex space-x-6">
            {['Phone', 'Email'].map((method) => (
              <label key={method} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="contactMethod"
                  value={method.toLowerCase()}
                  checked={formData.contactMethod === method.toLowerCase()}
                  onChange={handleInputChange}
                  className="text-green-600"
                />
                <span>{method}</span>
              </label>
            ))}
          </div>
          {errors.contactMethod && (
            <span className="text-red-500 text-sm">{errors.contactMethod}</span>
          )}
        </div>

        {/* Email (conditionally shown) */}
        {formData.contactMethod === 'email' && (
          <div className="space-y-4">
            <label className="block text-gray-700 font-medium">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full p-3 border rounded-lg ${errors.email ? 'border-red-500' : ''}`}
              placeholder="Your answer"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>
        )}

        {/* Additional Information */}
        <div className="space-y-4">
          <label className="block text-gray-700 font-medium">
            Additional Information
          </label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg"
            rows={3}
            placeholder="Your answer"
          />
        </div>

        {/* Form Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-end">
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Clear Form
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors"
          >
            Submit Request
          </button>
        </div>
      </form>
      
    </div>
    </section>
  );
};

export default ContactForm;