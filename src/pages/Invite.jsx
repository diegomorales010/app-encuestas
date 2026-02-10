import { Users, Copy, Gift } from "lucide-react";

const Invite = () => {
  const inviteCode = "ENCUESTA2026";

  return (
    <div className="px-5 pt-safe pt-6">

      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Invitar amigos
      </h1>

      {/* CARD PRINCIPAL */}
      <div className="bg-blue-600 text-white rounded-2xl p-6 shadow mb-6">
        <Users size={32} />

        <h2 className="font-semibold text-lg mt-3">
          Gana recompensas
        </h2>

        <p className="text-blue-100 text-sm mt-1">
          Invita amigos y gana puntos cuando participen
        </p>
      </div>

      {/* CODIGO */}
      <div className="bg-white rounded-2xl p-5 shadow-sm">

        <p className="text-sm text-gray-500">
          Tu código de invitación
        </p>

        <div className="flex justify-between items-center mt-2">

          <span className="text-xl font-bold text-blue-600">
            {inviteCode}
          </span>

          <button className="flex items-center gap-2 text-blue-600 font-medium">
            <Copy size={18} />
            Copiar
          </button>

        </div>

      </div>

      {/* BONUS */}
      <div className="bg-white rounded-2xl p-5 shadow-sm mt-5">

        <div className="flex items-center gap-3">
          <Gift className="text-blue-600" />
          <div>
            <p className="font-semibold text-gray-800">
              Bono por invitación
            </p>
            <p className="text-sm text-gray-500">
              Obtén 50 pts por cada amigo registrado
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Invite;
