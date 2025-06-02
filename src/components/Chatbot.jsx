import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const ChatButton = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="mb-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity text-sm w-full text-left"
  >
    {text}
  </button>
);

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([    { 
      text: "¡Hola! Soy el asistente virtual de InnovaTech. ¿En qué puedo ayudarte?",
      isBot: true,
      buttons: [
        "Servicios disponibles",
        "Información de la empresa",
        "Precios y presupuestos",
        "Información de contacto"
      ]
    }
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
    if (lowerMessage.includes('hola') || lowerMessage.includes('buenos días') || lowerMessage.includes('buenas tardes') || lowerMessage.includes('buenas noches')) {      return {
        text: "¡Hola! 👋 Soy el asistente virtual de InnovaTech. ¿Cómo puedo ayudarte hoy? Puedes preguntarme sobre nuestros servicios, información de contacto o cualquier duda específica.",
        buttons: [
          "Servicios disponibles",
          "Información de la empresa",
          "Precios y presupuestos",
          "Información de contacto"
        ]
      };
    }

    // Verificar contacto específico
    if (lowerMessage.includes('enviar email') || lowerMessage.includes('correo')) {
      return {
        text: `📧 Puedes enviarnos un correo a ventas@innovatechmex.com y te responderemos lo antes posible.`,
        buttons: [
          "Ver servicios",
          "Agendar llamada",
          "Volver al menú principal"
        ]
      };
    }

    if (lowerMessage.includes('llamar') || lowerMessage.includes('teléfono') || lowerMessage.includes('telefono') || lowerMessage.includes('agendar')) {
      return {
        text: `📞 Puedes llamarnos al +52 221 429 0985 para recibir atención inmediata.

Nuestro equipo de ventas está disponible para atenderte y resolver todas tus dudas.`,
        buttons: [
          "Ver servicios",
          "Enviar email",
          "Volver al menú principal"
        ]
      };
    }
      // Verificar servicios generales
    if (lowerMessage.includes('servicio') || lowerMessage.includes('que hacen') || lowerMessage.includes('qué ofrecen')) {
      return {
        text: `Ofrecemos los siguientes servicios principales:

💻 Desarrollo de Software
🌐 Desarrollo Web y Móvil
🤖 Robótica y Automatización
⚡ Sistemas Eléctricos
💡 Energías Renovables
🔌 Redes y Conectividad
📊 Sistemas CAD/CAM
🔧 Mantenimiento y Soporte
🌱 Biotecnología
🏭 Automatización Industrial

¿Te gustaría saber más sobre algún servicio en particular?`,
        buttons: [
          "Desarrollo de Software",
          "Desarrollo Web y Móvil",
          "Robótica y Automatización",
          "Sistemas Eléctricos",
          "Energías Renovables",
          "Redes y Conectividad",
          "Sistemas CAD/CAM",
          "Mantenimiento y Soporte",
          "Biotecnología",
          "Automatización Industrial",
          "Volver al menú principal"
        ]
      };
    }

    // Verificar servicios específicos
    if (lowerMessage.includes('desarrollo') || lowerMessage.includes('software') || lowerMessage.includes('aplicaciones')) {      return {
        text: `En desarrollo de software ofrecemos:

💻 Aplicaciones web personalizadas
📱 Apps móviles iOS y Android
🔄 Sistemas de gestión empresarial
🛠️ Soluciones de comercio electrónico
⚡ Optimización de rendimiento

Nuestro equipo utiliza las últimas tecnologías para crear soluciones robustas y escalables.`,
        buttons: [
          "Agendar consulta gratuita",
          "Contactar al equipo",
          "Volver a servicios",
          "Volver al menú principal"
        ]
      };
    }

    if (lowerMessage.includes('desarrollo web') || lowerMessage.includes('móvil')) {
      return {
        text: `En desarrollo web y móvil ofrecemos:

💻 Sitios web responsivos
📱 Aplicaciones móviles iOS y Android
🛒 Tiendas en línea
🖥️ Aplicaciones web progresivas (PWA)
⚡ Optimización de rendimiento
🔒 Seguridad web

Utilizamos las últimas tecnologías para crear experiencias digitales excepcionales.`,        buttons: [
          "Agendar consulta gratuita",
          "Contactar al equipo",
          "Volver a servicios",
          "Volver al menú principal"
        ]
      };
    }

    if (lowerMessage.includes('robótica') || lowerMessage.includes('robotica') || lowerMessage.includes('automatización') || lowerMessage.includes('automatizacion')) {
      return {
        text: `Nuestros servicios de robótica y automatización incluyen:

🤖 Diseño y fabricación de robots industriales
⚙️ Automatización de procesos productivos
📊 Sistemas de control y monitoreo
🔧 Mantenimiento predictivo
🎯 Optimización de líneas de producción`,        buttons: [
          "Agendar consulta gratuita",
          "Contactar especialista",
          "Volver a servicios",
          "Volver al menú principal"
        ]
      };
    }

    if (lowerMessage.includes('energía') || lowerMessage.includes('energia') || lowerMessage.includes('renovable')) {
      return {
        text: `En energías renovables ofrecemos:

☀️ Instalación de paneles solares
🌪️ Sistemas de energía eólica
⚡ Soluciones de almacenamiento de energía
📊 Auditorías energéticas
♻️ Consultoría en sostenibilidad`,        buttons: [
          "Consultar precios",
          "Solicitar auditoría",
          "Volver a servicios",
          "Volver al menú principal"
        ]
      };
    }

    if (lowerMessage.includes('cad') || lowerMessage.includes('cam')) {
      return {
        text: `Nuestros servicios de CAD/CAM incluyen:

📐 Diseño asistido por computadora
🔧 Manufactura asistida por computadora
🎯 Modelado 3D y prototipado
📊 Simulación y análisis
🏭 Optimización de procesos de fabricación
📋 Documentación técnica`,
        buttons: [
          "Agendar consulta gratuita",
          "Contactar especialista",
          "Volver a servicios",
          "Volver al menú principal"
        ]
      };
    }

    if (lowerMessage.includes('biotecnología') || lowerMessage.includes('biotecnologia')) {
      return {
        text: `En biotecnología ofrecemos:

🧬 Sistemas de control para bioprocesos
🔬 Automatización de laboratorios
📊 Análisis de datos biológicos
🌱 Control de cultivos
⚡ Optimización de procesos biotecnológicos
🔧 Mantenimiento de equipos especializados`,
        buttons: [
          "Agendar consulta gratuita",
          "Contactar especialista",
          "Volver a servicios",
          "Volver al menú principal"
        ]
      };
    }

    if (lowerMessage.includes('sistemas eléctricos') || lowerMessage.includes('electricos')) {
      return {
        text: `En sistemas eléctricos ofrecemos:

⚡ Instalaciones eléctricas industriales
🔌 Sistemas de distribución eléctrica
📊 Auditorías energéticas
🔧 Mantenimiento preventivo
🛡️ Protección y seguridad eléctrica
📱 Sistemas de control eléctrico`,
        buttons: [
          "Agendar consulta gratuita",
          "Contactar especialista",
          "Volver a servicios",
          "Volver al menú principal"
        ]
      };
    }

    if (lowerMessage.includes('automatización industrial') || lowerMessage.includes('automatizacion industrial')) {
      return {
        text: `En automatización industrial ofrecemos:

🏭 Automatización de líneas de producción
🤖 Integración de sistemas robóticos
📊 Sistemas SCADA
🔧 Control de procesos industriales
⚡ Eficiencia energética industrial
🛠️ Mantenimiento predictivo`,
        buttons: [
          "Agendar consulta gratuita",
          "Contactar especialista",
          "Volver a servicios",
          "Volver al menú principal"
        ]
      };
    }

    // Verificar preguntas sobre la empresa
    if (lowerMessage.includes('empresa') || lowerMessage.includes('compañía') || lowerMessage.includes('innovatech')) {
      return {
        text: `InnovaTech es una empresa líder en soluciones tecnológicas innovadoras. Algunos datos importantes:

🎯 Misión: Transformar ideas en soluciones tecnológicas innovadoras
👥 Más de 100 profesionales especializados
🌟 10+ años de experiencia en el mercado
🏆 Certificaciones internacionales
🤝 Alianzas estratégicas con líderes tecnológicos`,
        buttons: [
          "Ver servicios",
          "Contactar con ventas",
          "Solicitar más información",
          "Volver al menú principal"
        ]
      };
    }

    // Verificar preguntas sobre precios
    if (lowerMessage.includes('precio') || lowerMessage.includes('costo') || lowerMessage.includes('tarifa') || lowerMessage.includes('presupuesto')) {
      return {
        text: `Los precios varían según las necesidades específicas de cada proyecto. Para obtener un presupuesto personalizado:

1. Agenda una consulta gratuita llamando al +52 221 429 0985
2. Evaluaremos tus necesidades
3. Recibirás una propuesta detallada

¿Te gustaría agendar una consulta con nuestro equipo?`,
        buttons: [
          "Llamar ahora",
          "Enviar email",
          "Ver servicios disponibles",
          "Volver al menú principal"
        ]
      };
    }
    
    // Verificar contacto general
    if (lowerMessage.includes('contacto') || lowerMessage.includes('contactar') || lowerMessage.includes('comunicar') || lowerMessage.includes('ubicación')) {      return {
        text: `Puedes contactarnos de las siguientes maneras:

📧 Email: ventas@innovatechmex.com
📞 Teléfono: +52 221 429 0985
🏢 Dirección: San Pedro Cholula, Puebla

También puedes usar nuestro formulario de contacto en la página web.`,
        buttons: [
          "Llamar ahora",
          "Enviar email",
          "Ver ubicación",
          "Ver servicios",
          "Volver al menú principal"
        ]
      };
    }
    
    // Verificar volver al menú
    if (lowerMessage.includes('volver') || lowerMessage.includes('menu principal')) {
      return {
        text: "¿En qué más puedo ayudarte?",
        buttons: [
          "Servicios disponibles",
          "Información de la empresa",
          "Precios y presupuestos",
          "Información de contacto"
        ]
      };
    }
    
    // Respuesta por defecto
    return {      text: "No estoy seguro de tu pregunta específica, pero puedo ayudarte con información sobre:\n\n" +
           "📱 Nuestros servicios y soluciones\n" +
           "💼 Información sobre la empresa\n" +
           "💰 Precios y presupuestos\n" +
           "📞 Información de contacto\n\n" +
           "¿Sobre cuál de estos temas te gustaría saber más?",
      buttons: [
        "Servicios disponibles",
        "Información de la empresa",
        "Precios y presupuestos",
        "Información de contacto"
      ]
    };
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
      const response = getBotResponse(inputMessage);
      setMessages([...newMessages, {
        text: response.text,
        isBot: true,
        buttons: response.buttons
      }]);
    }, 800);
  };

  const handleButtonClick = (buttonText) => {
    // Add user message
    const newMessages = [...messages, { text: buttonText, isBot: false }];
    setMessages(newMessages);

    // Get and add bot response
    setTimeout(() => {
      const response = getBotResponse(buttonText);
      setMessages([...newMessages, {
        text: response.text,
        isBot: true,
        buttons: response.buttons
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
              <div className="flex flex-col max-w-[80%]">
                <div
                  className={`p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  }`}
                >
                  {message.text}
                </div>
                {message.isBot && message.buttons && (
                  <div className="mt-2">
                    {message.buttons.map((button, buttonIndex) => (
                      <ChatButton
                        key={buttonIndex}
                        text={button}
                        onClick={() => handleButtonClick(button)}
                      />
                    ))}
                  </div>
                )}
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
