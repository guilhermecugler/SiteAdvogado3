import React from 'react';
import { Scale, Gavel, Building2, FileText, ArrowRight, Phone, MapPin, Mail, Clock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-blue-700" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                JURIS
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-700 transition">Início</a>
              <a href="#" className="text-gray-600 hover:text-blue-700 transition">Sobre</a>
              <a href="#" className="text-gray-600 hover:text-blue-700 transition">Serviços</a>
              <a href="#" className="text-gray-600 hover:text-blue-700 transition">Equipe</a>
              <button className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition">
                Contato
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-20">
        <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-32">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Justiça com Excelência e Dedicação
              </h1>
              <p className="text-blue-100 text-xl mb-8">
                Soluções jurídicas personalizadas para proteger seus direitos e interesses
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-blue-700 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition">
                  Agende uma Consulta
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-700 transition">
                  Saiba Mais
                </button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&q=80" 
                alt="Law Office" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Por que nos escolher?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nossa equipe de advogados altamente qualificados está comprometida em oferecer o melhor serviço jurídico
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="h-8 w-8 text-blue-700" />,
                title: "Atendimento 24/7",
                description: "Disponíveis quando você mais precisa"
              },
              {
                icon: <Gavel className="h-8 w-8 text-blue-700" />,
                title: "Experiência Comprovada",
                description: "Mais de 1000 casos resolvidos"
              },
              {
                icon: <Building2 className="h-8 w-8 text-blue-700" />,
                title: "Presença Nacional",
                description: "Escritórios em todo o país"
              },
              {
                icon: <FileText className="h-8 w-8 text-blue-700" />,
                title: "Primeira Consulta Grátis",
                description: "Avaliação inicial sem compromisso"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="bg-blue-50 p-3 rounded-lg inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Áreas de Atuação</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma ampla gama de serviços jurídicos para atender todas as suas necessidades
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Direito Civil",
              "Direito Empresarial",
              "Direito Trabalhista",
              "Direito Tributário",
              "Direito Imobiliário",
              "Direito de Família"
            ].map((service, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 opacity-90 group-hover:opacity-95 transition"></div>
                <div className="relative p-8">
                  <h3 className="text-xl font-semibold text-white mb-2">{service}</h3>
                  <div className="flex items-center text-blue-100">
                    <span>Saiba mais</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Entre em Contato</h2>
              <div className="space-y-6 text-gray-300">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-400 mr-4" />
                  <span>(11) 3333-4444</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-400 mr-4" />
                  <span>contato@juris.com.br</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-400 mr-4" />
                  <span>Rua da Consolação, 1500 - São Paulo, SP</span>
                </div>
              </div>
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-white mb-4">Horário de Atendimento</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Segunda a Sexta: 9h às 18h</p>
                  <p>Sábado: 9h às 13h</p>
                  <p className="text-blue-400">Plantão 24h para urgências</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Solicite uma Consulta</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button className="w-full bg-blue-700 text-white py-3 rounded-md font-semibold hover:bg-blue-800 transition">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Scale className="h-6 w-6 text-blue-400" />
            <span className="text-white text-xl font-bold">JURIS</span>
          </div>
          <p className="text-center text-gray-400">
            © 2024 Juris Advocacia. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;