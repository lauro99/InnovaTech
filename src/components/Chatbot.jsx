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
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  useEffect(() => {
    // Mostrar mensaje de bienvenida cuando se abre el chat y no hay mensajes
    if (isOpen && messages.length === 0 && showWelcomeMessage) {
      handleWelcomeMessage();
    }
  }, [isOpen, messages.length, showWelcomeMessage]);
  
  const handleWelcomeMessage = () => {
    const welcomeResponse = {
      text: "¡Hola! 👋 Bienvenido al asistente virtual de InnovaTech ✨. Estoy aquí para ayudarte con cualquier pregunta o información que necesites. 🤖",
      isBot: true,
      buttons: [
        "Servicios disponibles 🛠️",
        "Información de la empresa 🏢",
        "Precios y presupuestos 💰",
        "Información de contacto 📞"
      ]
    };
    
    setMessages([welcomeResponse]);
    setShowWelcomeMessage(false);
  };
  
  const clearChat = () => {
    setMessages([]);
    setShowWelcomeMessage(true);
  };

  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    // Verificar saludo
    if (lowerMessage.includes('hola') || lowerMessage.includes('buenos días') || lowerMessage.includes('buenas tardes') || lowerMessage.includes('buenas noches')) {      return {
        text: "¡Hola! 👋 Soy el asistente virtual de InnovaTech. ¿Cómo puedo ayudarte hoy? Puedes preguntarme sobre nuestros servicios, información de contacto o cualquier duda específica.",
        buttons: [
          "Información de la empresa",
          "Servicios disponibles",
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

⚡ Ingeniería Eléctrica
🖥️ Desarrollo de Tecnología
🔬 Biomédica
🦾 Automatización
📏 Diseño CAD/CAE
🤖 Robótica
🌱 Energía Renovable
🎓 Certificaciones

¿Te gustaría saber más sobre algún servicio en particular?`,
        buttons: [
          "Ingeniería Eléctrica",
          "Desarrollo de Tecnología",
          "Biomédica",
          "Automatización",
          "Diseño CAD/CAE",
          "Robótica",
          "Energía Renovable",
          "Certificaciones",
          "Volver al menú principal"
        ]
      };
    }

    // Verificar servicios específicos
    if (lowerMessage.includes('eléctrica') || lowerMessage.includes('electrica')) {
      return {
        text: `En Ingeniería Eléctrica ofrecemos:

🏠 Redes domésticas
🏭 Redes industriales
⚡ Diseño de circuitos
📊 Análisis de circuitos

Nuestro equipo está altamente capacitado para brindar soluciones eléctricas confiables y eficientes.`,
        buttons: [
          "Agendar consulta gratuita",
          "Contactar al equipo",
          "Volver a servicios",
          "Volver al menú principal"
        ]
      };
    }    if (lowerMessage.includes('desarrollo') || lowerMessage.includes('tecnología') || lowerMessage.includes('tecnologia')) {
      return {
        text: `En Desarrollo de Tecnología ofrecemos:

⚡ Diseño de circuitos
💻 Desarrollo de aplicaciones
🌐 Desarrollo de páginas web
🔧 Desarrollo y diseño de PCV
📊 Análisis de circuitos
🖨️ Impresión 3D


Utilizamos las últimas tecnologías para crear soluciones innovadoras y personalizadas.`,
        buttons: [
          "Agendar consulta gratuita",
          "Contactar al equipo",
          "Volver a servicios",
          "Volver al menú principal"
        ]
      };
    }

    if (lowerMessage.includes('biomédica') || lowerMessage.includes('biomedica')) {
      return {
        text: `En el área Biomédica ofrecemos:

🦾 Diseño de prótesis
🔧 Mantenimiento de máquinas

Trabajamos con tecnología de punta para desarrollar soluciones médicas innovadoras.`,
        buttons: [
          "Agendar consulta gratuita",
          "Contactar especialista",
          "Volver a servicios",
          "Volver al menú principal"
        ]
      };
    }

    if (lowerMessage.includes('automatización') || lowerMessage.includes('automatizacion')) {
      return {
        text: `En Automatización ofrecemos:

🏭 Estaciones de trabajo
🦾 Fines de brazo
🔬 Investigación
👁️ Sistemas de visión
⚙️ Sistemas de corte de colada
🤖 Programación de robots
🔄 Bowl feeder
⚡ Tableros eléctricos
💻 Simulaciones`,
        buttons: [
          "Agendar consulta gratuita",
          "Contactar especialista",
          "Volver a servicios",
          "Volver al menú principal"
        ]
      };
    }

    if (lowerMessage.includes('cad') || lowerMessage.includes('cae')) {
      return {
        text: `En Diseño CAD/CAE ofrecemos:

🔄 Rediseño de piezas
📋 Actualización de planos
⚙️ Diseño de moldes
🎯 Diseño de productos
📊 Análisis de punto finito
💨 CFD (Dinámica de fluidos por computadora)`,
        buttons: [
          "Agendar consulta gratuita",
          "Contactar especialista",
          "Volver a servicios",
          "Volver al menú principal"
        ]
      };
    }    if (lowerMessage.includes('robótica') || lowerMessage.includes('robotica') || lowerMessage.includes('robot') || lowerMessage.includes('robots')) {
      return {
        text: `En Robótica ofrecemos:

🏠 Domótica
🔒 Seguridad
🤖 Máquinas expendedoras
💻 Programación de robots
📦 Suministros
📋 Propuestas

Soluciones robóticas avanzadas para automatizar y mejorar procesos.`,
        buttons: [
          "Agendar consulta gratuita",
          "Contactar especialista",
          "Volver a servicios",
          "Volver al menú principal"
        ]
      };
    }    if (lowerMessage.includes('renovable') || lowerMessage.includes('energía') || lowerMessage.includes('eolica')) {      return {
        text: `En Energía Renovable ofrecemos:

💧 Osmosis Inversa
🔋 Electroimanes
🚰 Filtros purificadores
☀️ Sistemas fotovoltaicos
🌪️ Sistemas eólicos

Soluciones sostenibles para un futuro más verde.`,
        buttons: [
          "Consultar precios",
          "Contactar especialista",
          "Volver a servicios",
          "Volver al menú principal"
        ]
      };
    }

    if (lowerMessage.includes('certificaciones') || lowerMessage.includes('cursos')) {
      return {
        text: `Ofrecemos las siguientes certificaciones:

💻 Cursos en línea Solidworks
👥 Cursos presenciales Solidworks
📜 Certificaciones Solidworks

Capacitación profesional para potenciar tus habilidades.`,
        buttons: [
          "Agendar consulta gratuita",
          "Más información",
          "Volver a servicios",
          "Volver al menú principal"
        ]
      };
    }    // Verificar preguntas sobre la empresa
    if (lowerMessage.includes('empresa') || lowerMessage.includes('compañía') || lowerMessage.includes('innovatech')) {
      return {
        text: `InnovaTech es una empresa líder en soluciones tecnológicas innovadoras ✨. Algunos datos importantes:

🎯 Misión: Transformar ideas en soluciones tecnológicas innovadoras
👥 Más de 15 profesionales especializados
🏆 Certificaciones internacionales
🌟 Más de 10 años de experiencia
🤝 Alianzas estratégicas con líderes tecnológicos
🌎 Presencia en múltiples ciudades`,
        buttons: [
          "Ver servicios 🛠️",
          "Contactar con ventas 📱",
          "Solicitar más información 📋",
          "Volver al menú principal 🏠"
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
        text: `¡Estamos listos para ayudarte! ✨ Puedes contactarnos de las siguientes maneras:

📧 Email: ventas@innovatechmex.com
📞 Teléfono: +52 221 429 0985
🏢 Dirección: San Pedro Cholula, Puebla
⏰ Horario: Lunes a Viernes de 9:00 a 18:00
🌐 Sitio web: innovatechmex.com

También puedes usar nuestro formulario de contacto en la página web. ¡Esperamos tu mensaje! 😊`,
        buttons: [
          "Llamar ahora 📞",
          "Enviar email 📧",
          "Ver ubicación 🗺️",
          "Ver servicios 🛠️",
          "Volver al menú principal 🏠"
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
    }    // Respuesta por defecto
    return {      text: "¡Hola! 👋 No estoy seguro de tu pregunta específica, pero puedo ayudarte con información sobre:\n\n" +
           "🛠️ Nuestros servicios y soluciones\n" +
           "🏢 Información sobre la empresa\n" +
           "💰 Precios y presupuestos\n" +
           "📞 Información de contacto\n\n" +
           "¿Sobre cuál de estos temas te gustaría saber más? 😊",
      buttons: [
        "Servicios disponibles 🛠️",
        "Información de la empresa 🏢",
        "Precios y presupuestos 💰",
        "Información de contacto 📞"
      ]
    };
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const newMessages = [...messages, { text: inputMessage, isBot: false }];
    
    // Verificar si es una pregunta específica
    const lowerMessage = inputMessage.toLowerCase();
    const isSpecificQuery = 
      lowerMessage.includes('servicio') ||
      lowerMessage.includes('precio') ||
      lowerMessage.includes('contacto') ||
      lowerMessage.includes('empresa') ||
      lowerMessage.includes('eléctrica') ||
      lowerMessage.includes('electrica') ||
      lowerMessage.includes('desarrollo') ||
      lowerMessage.includes('tecnología') ||
      lowerMessage.includes('biomédica') ||
      lowerMessage.includes('biomedica') ||
      lowerMessage.includes('automatización') ||
      lowerMessage.includes('automatizacion') ||
      lowerMessage.includes('cad') ||
      lowerMessage.includes('cae') ||      lowerMessage.includes('robótica') ||
      lowerMessage.includes('robotica') ||
      lowerMessage.includes('robot') ||
      lowerMessage.includes('robots') ||
      lowerMessage.includes('renovable') ||lowerMessage.includes('energía') ||
      lowerMessage.includes('eolica') ||
      lowerMessage.includes('certificaciones');    // Si es el primer mensaje y no es una pregunta específica, mostrar saludo
    if (messages.length === 0 && !isSpecificQuery) {
      newMessages.push({
        text: "¡Hola! 👋 Soy el asistente virtual de InnovaTech ✨. ¿En qué puedo ayudarte hoy? 😊",
        isBot: true,
        buttons: [
          "Servicios disponibles 🛠️",
          "Información de la empresa 🏢",
          "Precios y presupuestos 💰",
          "Información de contacto 📞"
        ]
      });
      setMessages(newMessages);
      setInputMessage('');
      return;
    }

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
    // Verificar si es una selección específica
    const lowerText = buttonText.toLowerCase();
    const isSpecificSelection = 
      lowerText.includes('servicio') ||
      lowerText.includes('precio') ||
      lowerText.includes('contacto') ||
      lowerText.includes('empresa') ||
      lowerText.includes('eléctrica') ||
      lowerText.includes('electrica') ||
      lowerText.includes('desarrollo') ||
      lowerText.includes('tecnología') ||
      lowerText.includes('biomédica') ||
      lowerText.includes('biomedica') ||
      lowerText.includes('automatización') ||
      lowerText.includes('automatizacion') ||
      lowerText.includes('cad') ||
      lowerText.includes('cae') ||      lowerText.includes('robótica') ||
      lowerText.includes('robotica') ||
      lowerText.includes('robot') ||
      lowerText.includes('robots') ||
      lowerText.includes('renovable') ||lowerText.includes('energía') ||
      lowerText.includes('eolica') ||
      lowerText.includes('certificaciones');    // Si no hay mensajes previos y no es una selección específica, mostrar saludo
    if (messages.length === 0 && !isSpecificSelection) {
      const initialMessages = [
        {
          text: "¡Hola! 👋 Soy el asistente virtual de InnovaTech ✨. ¿En qué puedo ayudarte hoy? 😊",
          isBot: true,
          buttons: [
            "Servicios disponibles 🛠️",
            "Información de la empresa 🏢",
            "Precios y presupuestos 💰",
            "Información de contacto 📞"
          ]
        },
        { text: buttonText, isBot: false }
      ];
      setMessages(initialMessages);

      // Get and add bot response
      setTimeout(() => {
        const response = getBotResponse(buttonText);
        setMessages([...initialMessages, {
          text: response.text,
          isBot: true,
          buttons: response.buttons
        }]);
      }, 800);
      return;
    }

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
      >        {/* Chat header */}
        <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-lg flex justify-between items-center">
          <div>
            <h3 className="text-white font-semibold">Asistente InnovaTech 🤖</h3>
            <p className="text-white/80 text-sm">Responderemos tus dudas</p>
          </div>
          <button 
            onClick={clearChat} 
            className="text-white/90 hover:text-white text-sm bg-white/20 px-2 py-1 rounded flex items-center"
            title="Limpiar chat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Limpiar
          </button>
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
