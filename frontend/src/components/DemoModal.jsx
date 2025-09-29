import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Mail, Phone, Building2, CheckCircle } from 'lucide-react';

const DemoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    sector: '',
    preferredTime: '',
    message: ''
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    console.log('Demo request submitted:', formData);
    alert('¡Gracias! Nos pondremos en contacto contigo pronto para agendar tu demo personalizada.');
    onClose();
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      sector: '',
      preferredTime: '',
      message: ''
    });
    setCurrentStep(1);
  };

  const sectors = [
    'Bancos y Servicios Financieros',
    'Retail y E-commerce',
    'Salud y Farmacéutica',
    'Telecomunicaciones',
    'Seguros',
    'Manufactura',
    'Gobierno',
    'Otro'
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-slate-900 border border-gray-700 rounded-2xl p-8 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Agendar Demo Personalizada</h2>
                  <p className="text-lg text-gray-300 font-medium">
                    30 minutos que pueden transformar tu CX
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center mb-8">
              <div className={`flex items-center ${currentStep >= 1 ? 'text-siete-green' : 'text-siete-text-secondary'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep >= 1 ? 'bg-siete-green text-siete-dark' : 'bg-siete-navy text-white'
                }`}>
                  1
                </div>
                <span className="ml-2 text-sm">Información</span>
              </div>
              <div className="flex-1 h-px bg-siete-border mx-4"></div>
              <div className={`flex items-center ${currentStep >= 2 ? 'text-siete-green' : 'text-siete-text-secondary'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep >= 2 ? 'bg-siete-green text-siete-dark' : 'bg-siete-navy text-white'
                }`}>
                  2
                </div>
                <span className="ml-2 text-sm">Horario</span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-bold text-white mb-3">
                        <User className="w-5 h-5 inline mr-2" />
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-600 rounded-lg text-white text-lg placeholder-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-400 focus:outline-none"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-bold text-white mb-3">
                        <Mail className="w-5 h-5 inline mr-2" />
                        Email corporativo *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-600 rounded-lg text-white text-lg placeholder-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-400 focus:outline-none"
                        placeholder="tu.email@empresa.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-siete-text-primary mb-2">
                        <Building2 className="w-4 h-4 inline mr-2" />
                        Empresa *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-siete-navy/50 border border-siete-border rounded-lg text-siete-text-primary placeholder-siete-text-secondary focus:border-siete-green focus:ring-1 focus:ring-siete-green focus:outline-none"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-siete-text-primary mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-siete-navy/50 border border-siete-border rounded-lg text-siete-text-primary placeholder-siete-text-secondary focus:border-siete-green focus:ring-1 focus:ring-siete-green focus:outline-none"
                        placeholder="+52 55 1234 5678"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-siete-text-primary mb-2">
                      Sector *
                    </label>
                    <select
                      name="sector"
                      value={formData.sector}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-siete-navy/50 border border-siete-border rounded-lg text-siete-text-primary focus:border-siete-green focus:ring-1 focus:ring-siete-green focus:outline-none"
                    >
                      <option value="">Selecciona tu sector</option>
                      {sectors.map((sector) => (
                        <option key={sector} value={sector}>
                          {sector}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-siete-text-primary mb-2">
                      Cuéntanos sobre tu desafío de CX
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-siete-navy/50 border border-siete-border rounded-lg text-siete-text-primary placeholder-siete-text-secondary focus:border-siete-green focus:ring-1 focus:ring-siete-green focus:outline-none resize-none"
                      placeholder="Describe brevemente los retos que enfrentas en customer experience..."
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      disabled={!formData.name || !formData.email || !formData.company || !formData.sector}
                      className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-bold rounded-full hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    >
                      Continuar
                    </button>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium text-siete-text-primary mb-6">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Selecciona tu horario preferido
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map((time) => (
                        <label
                          key={time}
                          className={`flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            formData.preferredTime === time
                              ? 'border-siete-green bg-siete-green/10 text-siete-green'
                              : 'border-siete-border hover:border-siete-green/50 text-siete-text-primary'
                          }`}
                        >
                          <input
                            type="radio"
                            name="preferredTime"
                            value={time}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <span className="text-sm font-medium">{time}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="bg-siete-navy/30 p-6 rounded-lg">
                    <h4 className="font-semibold text-siete-text-primary mb-3">
                      ¿Qué incluye tu demo personalizada?
                    </h4>
                    <div className="space-y-2 text-sm text-siete-text-primary opacity-90">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-siete-green rounded-full"></div>
                        <span>Análisis de tu customer journey actual</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-siete-green rounded-full"></div>
                        <span>Demo de la plataforma Siete CX en vivo</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-siete-green rounded-full"></div>
                        <span>Propuesta de valor específica para tu sector</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-siete-green rounded-full"></div>
                        <span>Sesión de Q&A con nuestros expertos</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="siete-btn-secondary"
                    >
                      Atrás
                    </Button>
                    <Button
                      type="submit"
                      className="siete-btn-primary"
                      disabled={!formData.preferredTime}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Confirmar Demo
                    </Button>
                  </div>
                </motion.div>
              )}
            </form>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DemoModal;