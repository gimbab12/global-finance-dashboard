--- src/App.tsx
+++ src/App.tsx
@@ -719,6 +719,43 @@
 
       {/* Main Content Grid */}
+      {/* Forex Section - Top Banner */}
+      <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6 mb-6" id="forex_panel">
+        <div className="flex items-center gap-3 border-b border-gray-800 pb-4 mb-4">
+          <TrendingUp size={18} className="text-emerald-400" />
+          <h2 className="text-md font-bold text-white tracking-tight">{dict.tabForex}</h2>
+        </div>
+        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
+          {forex.map((fx) => {
+            const isPos = fx.changePercent >= 0;
+            const flash = flashStates[fx.pair];
+            return (
+              <div key={fx.pair} className="p-4 rounded-xl border border-gray-800/80 hover:border-gray-750 transition-all duration-300 bg-gray-950/60">
+                <div className="flex justify-between items-start mb-2">
+                  <div>
+                    <h3 className="text-sm font-semibold text-gray-200">{fx.name}</h3>
+                    <span className="text-[10px] font-mono text-gray-400">{fx.pair}</span>
+                  </div>
+                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-0.5 ${isPos ? "bg-emerald-950/60 text-emerald-400 border border-emerald-800/30" : "bg-red-950/60 text-red-400 border border-red-800/30"}`}>
+                    {isPos ? "+" : ""}{fx.changePercent}%
+                  </span>
+                </div>
+                <div className="flex justify-between items-end mt-4">
+                  <div>
+                    <span className={`text-lg font-bold font-mono transition-all duration-300 px-1 rounded ${flash === "up" ? "text-emerald-400 bg-emerald-950/30 animate-pulse" : flash === "down" ? "text-red-400 bg-red-950/30 animate-pulse" : "text-white"}`}>
+                      {fx.price.toLocaleString("ko-KR", { minimumFractionDigits: fx.pair.includes("USD") ? (fx.pair === "EUR/USD" ? 4 : 2) : 2, maximumFractionDigits: fx.pair.includes("USD") ? (fx.pair === "EUR/USD" ? 4 : 2) : 2 })}
+                      {fx.pair !== "EUR/USD" && ` ${dict.estimatedWon}`}
+                    </span>
+                    <div className={`text-[10px] font-mono mt-1 ${isPos ? "text-emerald-400" : "text-red-400"}`}>
+                      {isPos ? "▲" : "▼"} {Math.abs(fx.change).toLocaleString("ko-KR", { minimumFractionDigits: fx.pair === "EUR/USD" ? 4 : 2 })}
+                    </div>
+                  </div>
+                  <div className="h-9">{renderSparkline(fx.history.map(h => h.price), isPos)}</div>
+                </div>
+              </div>
+            );
+          })}
+        </div>
+      </section>
+
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
         
         {/* Left Module - Indices & Exchange Rates */}
         <div className="lg:col-span-2 space-y-6">
           
-          {/* Forex Section */}
-          <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6" id="forex_panel">
-            <div className="flex items-center gap-3 border-b border-gray-800 pb-4 mb-4">
-              <TrendingUp size={18} className="text-emerald-400" />
-              <h2 className="text-md font-bold text-white tracking-tight">{dict.tabForex}</h2>
-            </div>
-            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
-              {forex.map((fx) => {
-                const isPos = fx.changePercent >= 0;
-                const flash = flashStates[fx.pair];
-                return (
-                  <div key={fx.pair} className="p-4 rounded-xl border border-gray-800/80 hover:border-gray-750 transition-all duration-300 bg-gray-950/60">
-                    <div className="flex justify-between items-start mb-2">
-                      <div>
-                        <h3 className="text-sm font-semibold text-gray-200">{fx.name}</h3>
-                        <span className="text-[10px] font-mono text-gray-400">{fx.pair}</span>
-                      </div>
-                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-0.5 ${isPos ? "bg-emerald-950/60 text-emerald-400 border border-emerald-800/30" : "bg-red-950/60 text-red-400 border border-red-800/30"}`}>
-                        {isPos ? "+" : ""}{fx.changePercent}%
-                      </span>
-                    </div>
-                    <div className="flex justify-between items-end mt-4">
-                      <div>
-                        <span className={`text-lg font-bold font-mono transition-all duration-300 px-1 rounded ${flash === "up" ? "text-emerald-400 bg-emerald-950/30 animate-pulse" : flash === "down" ? "text-red-400 bg-red-950/30 animate-pulse" : "text-white"}`}>
-                          {fx.price.toLocaleString("ko-KR", { minimumFractionDigits: fx.pair.includes("USD") ? (fx.pair === "EUR/USD" ? 4 : 2) : 2, maximumFractionDigits: fx.pair.includes("USD") ? (fx.pair === "EUR/USD" ? 4 : 2) : 2 })}
-                          {fx.pair !== "EUR/USD" && ` ${dict.estimatedWon}`}
-                        </span>
-                        <div className={`text-[10px] font-mono mt-1 ${isPos ? "text-emerald-400" : "text-red-400"}`}>
-                          {isPos ? "▲" : "▼"} {Math.abs(fx.change).toLocaleString("ko-KR", { minimumFractionDigits: fx.pair === "EUR/USD" ? 4 : 2 })}
-                        </div>
-                      </div>
-                      <div className="h-9">{renderSparkline(fx.history.map(h => h.price), isPos)}</div>
-                    </div>
-                  </div>
-                );
-              })}
-            </div>
-          </section>
-
           {/* Futures Section */}
