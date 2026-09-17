import Link from "next/link";

// Mock data for the Season Board
const SEASON_DATA = [
  {
    username: "@somchai.eth",
    isVerified: true,
    registeredWeek: 1,
    prize: "iPhone 18",
    activeWeeks: 3,
    totalWeeks: 3,
    missions: 6,
    invited: 12,
  },
  {
    username: "@ploy.trades",
    isVerified: true,
    registeredWeek: 1,
    prize: null,
    activeWeeks: 3,
    totalWeeks: 3,
    missions: 6,
    invited: 9,
  },
  {
    username: "@degen_cat",
    isVerified: true,
    registeredWeek: 2,
    prize: null,
    activeWeeks: 2,
    totalWeeks: 3,
    missions: 4,
    invited: 2,
  },
];

// Weight Configuration (Adjust these multipliers to change scoring)
const SEASON_WEIGHTS = {
  ACTIVE_WEEKS: 500,
  MISSIONS: 200,
  INVITED: 150,
};

function calculateSeasonPoints(player: typeof SEASON_DATA[0]) {
  const points =
    (player.activeWeeks * SEASON_WEIGHTS.ACTIVE_WEEKS) +
    (player.missions * SEASON_WEIGHTS.MISSIONS) +
    (player.invited * SEASON_WEIGHTS.INVITED);
  return Math.round(points);
}

export default function SeasonBoard() {
  // Sort players by points descending
  const sortedPlayers = [...SEASON_DATA].sort((a, b) => calculateSeasonPoints(b) - calculateSeasonPoints(a));

  return (
    <main className="flex-1 w-full max-w-5xl mx-auto p-6 mt-4 relative z-10">
      <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-8 font-semibold">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          Back to Dashboard
      </Link>

      <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-display font-bold flex items-center gap-3 border-b border-gray-800 pb-4">
              Season Board
          </h1>
      </div>

      <div className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl relative">
          
          <div className="p-6 md:p-8 flex justify-between items-end border-b border-gray-800 relative z-10">
              <div>
                  <h2 className="text-3xl font-display font-bold text-white mb-1">Season Board</h2>
                  <p className="text-sm text-gray-400">Alt1er x OKX Web3 Season 1</p>
              </div>
              <div className="text-right">
                  <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-1">Prize Pool</p>
                  <p className="text-3xl font-display font-bold text-white">฿40,000 + iPhone 18</p>
              </div>
          </div>

          <div className="overflow-x-auto relative z-10">
              <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                      <tr className="text-xs text-gray-500 font-bold tracking-widest uppercase border-b border-gray-800 bg-black/40">
                          <th className="px-6 py-4 w-20 text-center">Rank</th>
                          <th className="px-6 py-4">Player</th>
                          <th className="px-6 py-4 text-center">Active Weeks</th>
                          <th className="px-6 py-4 text-center">Missions</th>
                          <th className="px-6 py-4 text-center">Invited</th>
                          <th className="px-6 py-4 text-right">Points</th>
                      </tr>
                  </thead>
                  <tbody className="font-semibold text-sm">
                      {sortedPlayers.map((player, index) => {
                          const rank = index + 1;
                          const points = calculateSeasonPoints(player);
                          const isTop1 = rank === 1;

                          return (
                              <tr key={player.username} className={`border-b border-gray-800/50 transition ${isTop1 ? 'bg-[#ff7b00] text-black' : 'hover:bg-white/5'}`}>
                                  <td className={`px-6 py-5 text-center font-display text-xl font-bold ${!isTop1 ? 'text-gray-400' : ''}`}>
                                      {rank}
                                  </td>
                                  <td className="px-6 py-5">
                                      <div className={`font-bold text-base ${!isTop1 ? 'text-white' : ''}`}>{player.username}</div>
                                      <div className={`text-xs flex items-center gap-2 mt-1 ${isTop1 ? 'text-black/60' : 'text-gray-500'}`}>
                                          {player.isVerified && `Verified - registered week ${player.registeredWeek}`}
                                          
                                          {player.prize && (
                                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${isTop1 ? 'bg-black text-white' : 'bg-gray-800 text-white'}`}>
                                                  {player.prize}
                                              </span>
                                          )}
                                      </div>
                                  </td>
                                  <td className={`px-6 py-5 text-center ${!isTop1 ? 'text-gray-300' : ''}`}>{player.activeWeeks} / {player.totalWeeks}</td>
                                  <td className={`px-6 py-5 text-center ${!isTop1 ? 'text-gray-300' : ''}`}>{player.missions}</td>
                                  <td className={`px-6 py-5 text-center ${!isTop1 ? 'text-gray-300' : ''}`}>{player.invited}</td>
                                  <td className={`px-6 py-5 text-right font-display text-lg font-bold ${!isTop1 ? 'text-white' : ''}`}>
                                      {points.toLocaleString()}
                                  </td>
                              </tr>
                          );
                      })}
                  </tbody>
              </table>
          </div>
      </div>
    </main>
  );
}
