import { Loader2 } from "lucide-react"

function Loading() {
  return (
    <section className="w-screen h-screen bg-zinc-950 text-zinc-200 flex flex-col items-center justify-center gap-6">

      {/* Logo / Nombre */}
      <div className="text-center">
        <h1 className="text-2xl font-mono tracking-widest text-emerald-400">
          code-parce
        </h1>
        <p className="text-xs text-zinc-500">
          initializing infrastructure...
        </p>
      </div>

      {/* Pipeline animation */}
      <div className="flex items-center gap-4 font-mono text-sm">
        <span className="text-emerald-400 animate-pulse">build</span>
        <span className="text-zinc-600">→</span>
        <span className="text-blue-400 animate-pulse delay-200">test</span>
        <span className="text-zinc-600">→</span>
        <span className="text-yellow-400 animate-pulse delay-500">deploy</span>
      </div>

      {/* Spinner */}
      <div className="flex items-center gap-3 text-sm text-zinc-400">
        <Loader2 className="w-5 h-5 animate-spin text-emerald-400" />
        <span className="font-mono">provisioning resources...</span>
      </div>

      {/* Fake terminal line */}
      <div className="mt-4 font-mono text-xs text-zinc-600 animate-pulse">
        $ terraform apply -auto-approve
      </div>

    </section>
  )
}

export default Loading