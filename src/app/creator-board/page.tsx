import Link from "next/link";

// Mock data for the Creator Board
const CREATOR_DATA = [
  {
    username: "@ploy.eth",
    isVerified: true,
    isOpenEntry: true,
    prize: "฿4,500",
    postDays: 19,
    posts: 24,
    avgViews: 8400,
  },
  {
    username: "@bkk_yapper",
    isVerified: true,
    isOpenEntry: true,
    prize: null,
    postDays: 18,
    posts: 31,
    avgViews: 5100,
  },
  {
    username: "@crypto_boi",
    isVerified: false,
    isOpenEntry: true,
    prize: null,
    postDays: 10,
    posts: 15,
    avgViews: 2000,
  },
];

// Weight Configuration (Adjust these multipliers to change scoring)
const CREATOR_WEIGHTS = {
  POST_DAYS: 10,
  POSTS: 5,
  AVG_VIEWS: 0.5,
};

function calculateCreatorPoints(player: typeof CREATOR_DATA[0]) {
  const points =
    (player.postDays * CREATOR_WEIGHTS.POST_DAYS) +
    (player.posts * CREATOR_WEIGHTS.POSTS) +
    (player.avgViews * CREATOR_WEIGHTS.AVG_VIEWS);
  return Math.round(points);
}

// Format numbers (e.g. 8400 -> 8.4K, 8420 -> 8,420)
function formatK(num: number) {
  return num >= 1000 ? (num / 1000).toFixed(1) + "K" : num.toString();
}

export default function CreatorBoard() {
  // Sort players by points descending
  const sortedPlayers = [...CREATOR_DATA].sort((a, b) => calculateCreatorPoints(b) - calculateCreatorPoints(a));

  return (
    <main className="flex-1 w-full max-w-5xl mx-auto p-6 mt-4 relative z-10">
      <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-8 font-semibold">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          Back to Dashboard
      </Link>

      <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-display font-bold flex items-center gap-3 border-b border-gray-800 pb-4">
              Creator Board
          </h1>
      </div>

      <div className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl relative">
          
          <div className="p-6 md:p-8 flex justify-between items-end border-b border-gray-800 relative z-10">
              <div>
                  <h2 className="text-3xl font-display font-bold text-white mb-1">Creator Board</h2>
                  <p className="text-sm text-gray-400">Alt1er x MEXC Season 1</p>
              </div>
              <div className="text-right">
                  <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-1">Prize Pool</p>
                  <p className="text-3xl font-display font-bold text-white">฿20,000</p>
              </div>
          </div>

          <div className="overflow-x-auto relative z-10">
              <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                      <tr className="text-xs text-gray-500 font-bold tracking-widest uppercase border-b border-gray-800 bg-black/40">
                          <th className="px-6 py-4 w-20 text-center">Rank</th>
                          <th className="px-6 py-4">Player</th>
                          <th className="px-6 py-4 text-center">Post Days</th>
                          <th className="px-6 py-4 text-center">Posts</th>
                          <th className="px-6 py-4 text-center">Avg Views</th>
                          <th className="px-6 py-4 text-right">Points</th>
                      </tr>
                  </thead>
                  <tbody className="font-semibold text-sm">
                      {sortedPlayers.map((player, index) => {
                          const rank = index + 1;
                          const points = calculateCreatorPoints(player);
                          const isTop1 = rank === 1;

                          return (
                              <tr key={player.username} className={`border-b border-gray-800/50 transition ${isTop1 ? 'bg-[#ff7b00] text-black' : 'hover:bg-white/5'}`}>
                                  <td className={`px-6 py-5 text-center font-display text-xl font-bold ${!isTop1 ? 'text-gray-400' : ''}`}>
                                      {rank}
                                  </td>
                                  <td className="px-6 py-5">
                                      <div className={`font-bold text-base ${!isTop1 ? 'text-white' : ''}`}>{player.username}</div>
                                      <div className={`text-xs flex items-center gap-2 mt-1 ${isTop1 ? 'text-black/60' : 'text-gray-500'}`}>
                                          {player.isVerified && "Verified creator"} 
                                          {player.isVerified && player.isOpenEntry && <span className="opacity-50">•</span>} 
                                          {player.isOpenEntry && "Open entry"}
                                          
                                          {player.prize && (
                                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${isTop1 ? 'bg-black text-[#ff7b00]' : 'bg-gray-800 text-white'}`}>
                                                  {player.prize}
                                              </span>
                                          )}
                                      </div>
                                  </td>
                                  <td className={`px-6 py-5 text-center ${!isTop1 ? 'text-gray-300' : ''}`}>{player.postDays}</td>
                                  <td className={`px-6 py-5 text-center ${!isTop1 ? 'text-gray-300' : ''}`}>{player.posts}</td>
                                  <td className={`px-6 py-5 text-center ${!isTop1 ? 'text-gray-300' : ''}`}>{formatK(player.avgViews)}</td>
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
