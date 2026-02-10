import { CheckCircle, Clock, Star } from "lucide-react";

const Activity = () => {
  const activities = [
    {
      id: 1,
      title: "Hábitos de compra online",
      status: "Completada",
      points: 20,
      date: "Hace 2 días"
    },
    {
      id: 2,
      title: "Uso de redes sociales",
      status: "Pendiente",
      points: 15,
      date: "Hoy"
    }
  ];

  return (
    <div className="px-5 pt-safe pt-6">

      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Actividad
      </h1>

      <div className="space-y-4">
        {activities.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-5 shadow-sm"
          >
            <h3 className="font-semibold text-gray-800">
              {item.title}
            </h3>

            <div className="flex justify-between mt-3 text-sm">

              <div className="flex items-center gap-2 text-gray-500">
                <Clock size={16} />
                {item.date}
              </div>

              <div className="flex items-center gap-2 text-blue-600 font-medium">
                <Star size={16} />
                {item.points} pts
              </div>

            </div>

            <div className="mt-4 flex items-center gap-2 text-sm">
              {item.status === "Completada" ? (
                <>
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-green-500 font-medium">
                    Completada
                  </span>
                </>
              ) : (
                <>
                  <Clock size={16} className="text-yellow-500" />
                  <span className="text-yellow-500 font-medium">
                    Pendiente
                  </span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
