import { useState } from 'react';
import {
  Home as HomeIcon,
  Activity,
  User,
  Users,
  Star,
  Clock
} from 'lucide-react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('home');

  const surveys = [
    {
      id: 1,
      title: 'Hábitos de compra online',
      time: '3 min',
      points: 20
    },
    {
      id: 2,
      title: 'Uso de tecnología',
      time: '5 min',
      points: 35
    },
    {
      id: 3,
      title: 'Entretenimiento digital',
      time: '4 min',
      points: 25
    }
  ];

  const stats = [
    { title: 'Respondidas', value: 12 },
    { title: 'Puntos', value: 320 },
    { title: 'Nivel', value: 'Explorador' }
  ];

  return (
    <div>

      {/* ---------- HEADER MOBILE ---------- */}
      <div className="pt-safe px-5 pt-6 pb-4">
        <h1 className="text-2xl font-bold text-gray-900">
          Bienvenido, Usuario
        </h1>
        <p className="text-gray-500 text-sm">
          Responde encuestas y gana recompensas
        </p>
      </div>

      {/* ---------- CTA ---------- */}
      <div className="px-5 mb-6">
        <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold text-lg active:scale-95 transition">
          Responder encuesta
        </button>
      </div>

      {/* ---------- STATS ---------- */}
      <div className="px-5 mb-6">
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-sm text-center">
              <p className="text-xs text-gray-500">{stat.title}</p>
              <p className="font-bold text-blue-600 text-lg mt-1">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- ENCUESTAS ---------- */}
      <div className="px-5">
        <h2 className="font-semibold text-gray-800 mb-3">
          Encuestas disponibles
        </h2>

        <div className="space-y-4">
          {surveys.map((survey) => (
            <div
              key={survey.id}
              className="bg-white rounded-2xl p-5 shadow-sm"
            >
              <h3 className="font-semibold text-gray-800">
                {survey.title}
              </h3>

              <div className="flex justify-between mt-3 text-sm text-gray-500">

                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  {survey.time}
                </div>

                <div className="flex items-center gap-1 text-blue-600 font-medium">
                  <Star size={16} />
                  {survey.points} pts
                </div>

              </div>

              <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl font-medium active:scale-95 transition">
                Participar
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- ENCUESTA DESTACADA ---------- */}
      <div className="px-5 mt-8">
        <div className="bg-blue-600 text-white rounded-2xl p-6 shadow">
          <h3 className="font-semibold text-lg">
            Encuesta del mes
          </h3>

          <p className="text-blue-100 text-sm mt-1">
            Participa y gana premios especiales
          </p>

          <button className="mt-4 bg-white text-blue-600 px-5 py-2 rounded-xl font-semibold">
            Ir ahora
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
