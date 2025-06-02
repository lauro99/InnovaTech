import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "¡Hola! Soy el asistente virtual de InnovaTech. ¿En qué puedo ayudarte?", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    // Verificar saludo
    if (lowerMessage.includes('hola') || lowerMessage.includes('buenos días') || lowerMessage.includes('buenas tardes') || lowerMessage.includes('buenas noches')) {
      return "¡Hola! 👋 Soy el asistente virtual de InnovaTech. ¿Cómo puedo ayudarte hoy? Puedes preguntarme sobre nuestros servicios, información de contacto o cualquier duda específica.";
    }
    
    // Verificar servicios generales
    if (lowerMessage.includes('servicio') || lowerMessage.includes('que hacen') || lowerMessage.includes('qué ofrecen')) {
      return `Ofrecemos los siguientes servicios principales:

✨ Desarrollo de Software
🤖 Robótica y Automatización
💡 Energías Renovables
🌐 Redes y Conectividad
🔧 Mantenimiento y Soporte
📱 Desarrollo Web y Móvil

¿Te gustaría saber más sobre algún servicio en particular?`;
    }

    // Verificar servicios específicos
    if (lowerMessage.includes('desarrollo') || lowerMessage.includes('software') || lowerMessage.includes('aplicaciones')) {
      return `En desarrollo de software ofrecemos:

💻 Aplicaciones web personalizadas
📱 Apps móviles iOS y Android
🔄 Sistemas de gestión empresarial
🛠️ Soluciones de comercio electrónico
⚡ Optimización de rendimiento

Nuestro equipo utiliza las últimas tecnologías para crear soluciones robustas y escalables.`;
    }

    if (lowerMessage.includes('robótica') || lowerMessage.includes('robotica') || lowerMessage.includes('automatización') || lowerMessage.includes('automatizacion')) {
      return `Nuestros servicios de robótica y automatización incluyen:

🤖 Diseño y fabricación de robots industriales
⚙️ Automatización de procesos productivos
📊 Sistemas de control y monitoreo
🔧 Mantenimiento predictivo
🎯 Optimización de líneas de producción`;
    }

    if (lowerMessage.includes('energía') || lowerMessage.includes('energia') || lowerMessage.includes('renovable')) {
      return `En energías renovables ofrecemos:

☀️ Instalación de paneles solares
🌪️ Sistemas de energía eólica
⚡ Soluciones de almacenamiento de energía
📊 Auditorías energéticas
♻️ Consultoría en sostenibilidad`;
    }

    // Verificar preguntas sobre la empresa
    if (lowerMessage.includes('empresa') || lowerMessage.includes('compañía') || lowerMessage.includes('innovatech')) {
      return `InnovaTech es una empresa líder en soluciones tecnológicas innovadoras. Algunos datos importantes:

🎯 Misión: Transformar ideas en soluciones tecnológicas innovadoras
👥 Más de 100 profesionales especializados
🌟 10+ años de experiencia en el mercado
🏆 Certificaciones internacionales
🤝 Alianzas estratégicas con líderes tecnológicos`;
    }

    // Verificar preguntas sobre precios
    if (lowerMessage.includes('precio') || lowerMessage.includes('costo') || lowerMessage.includes('tarifa') || lowerMessage.includes('presupuesto')) {
      return `Los precios varían según las necesidades específicas de cada proyecto. Para obtener un presupuesto personalizado:

1. Agenda una consulta gratuita
2. Evaluaremos tus necesidades
3. Recibirás una propuesta detallada

¿Te gustaría agendar una consulta con nuestro equipo?`;
    }
    
    // Verificar contacto
    if (lowerMessage.includes('contacto') || lowerMessage.includes('contactar') || lowerMessage.includes('comunicar') || lowerMessage.includes('ubicación')) {
      return `Puedes contactarnos de las siguientes maneras:

📧 Email: info@innovatech.com
📞 Teléfono: (555) 123-4567
🏢 Dirección: Av. Tecnología 123, Ciudad Innovación

También puedes usar nuestro formulario de contacto en la página web. ¿Te gustaría que te ayude con algo más?`;
    }

    // Verificar tiempo de desarrollo
    if (lowerMessage.includes('tiempo') || lowerMessage.includes('duración') || lowerMessage.includes('plazo')) {
      return `Los tiempos de desarrollo varían según el proyecto:

⚡ Proyectos pequeños: 2-4 semanas
🔄 Proyectos medianos: 1-3 meses
🏗️ Proyectos grandes: 3-6 meses o más

Cada proyecto es único y recibirá un cronograma detallado después de la evaluación inicial. ¿Te gustaría conocer más detalles sobre algún tipo de proyecto en particular?`;
    }
    
    // Respuesta por defecto
    return "No estoy seguro de tu pregunta específica, pero puedo ayudarte con información sobre:\n\n" +
           "📱 Nuestros servicios y soluciones\n" +
           "💼 Información sobre la empresa\n" +
           "💰 Precios y presupuestos\n" +
           "⏱️ Tiempos de desarrollo\n" +
           "📞 Información de contacto\n\n" +
           "¿Sobre cuál de estos temas te gustaría saber más?";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const newMessages = [...messages, { text: inputMessage, isBot: false }];
    setMessages(newMessages);
    setInputMessage('');

    // Get and add bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      setMessages([...newMessages, {
        text: botResponse,
        isBot: true
      }]);
    }, 800);
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-4 right-4 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          )}
        </svg>
      </motion.button>

      {/* Chat window */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
        transition={{ duration: 0.2 }}
        className={`fixed bottom-20 right-4 w-96 h-[500px] bg-white rounded-lg shadow-xl z-50 flex flex-col ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Chat header */}
        <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-lg">
          <h3 className="text-white font-semibold">Asistente InnovaTech</h3>
          <p className="text-white/80 text-sm">Responderemos tus dudas</p>
        </div>

        {/* Messages container */}
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} mb-4`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isBot
                    ? 'bg-gray-100 text-gray-800'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input form */}
        <form onSubmit={handleSendMessage} className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Enviar
            </button>
          </div>
        </form>
      </motion.div>
    </>
  );
};

export default Chatbot;
